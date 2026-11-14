import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { LEGACY_PATHS, LOCALES, V1_ONLY, browserEntryScript, localeHref } from '../src/i18n/routing.mjs';

if (process.env.NEXT_OUTPUT !== 'standalone') {
  const output = 'out';
  const pages = [];
  async function discover(directory, parts = []) {
    for (const item of await readdir(directory, { withFileTypes: true })) {
      if (item.isDirectory()) await discover(join(directory, item.name), item.name.startsWith('(') ? parts : [...parts, item.name]);
      else if (item.name === 'page.tsx' && parts.join('/') !== '404') pages.push('/' + parts.join('/'));
    }
  }
  await discover('src/app/[locale]');
  const aliases = new Map(pages.map(path => [path, path]));
  for (const [old, target] of Object.entries(LEGACY_PATHS)) aliases.set(old, target);
  for (const path of pages) {
    if (V1_ONLY.some(segment => path === `/v1/docs/${segment}` || path.startsWith(`/v1/docs/${segment}/`))) aliases.set(path.slice(3), path);
  }
  // 默认入口保留完整静态正文；浏览器再按旧查询参数、Cookie 或系统语言进入语言页。
  for (const [old, target] of aliases) {
    const locale = target.startsWith('/v1') ? 'zh' : 'en';
    const source = join(output, localeHref(target, locale).slice(1) + '.html');
    const destination = join(output, old === '/' ? 'index.html' : old.slice(1) + '.html');
    await mkdir(dirname(destination), { recursive: true });
    const html = await readFile(source, 'utf8');
    if (!html.includes('<head>')) throw new Error(`Missing HTML head: ${source}`);
    await writeFile(destination, html.replace('<head>', `<head><script>${browserEntryScript()}</script>`));
  }
  const redirects = [];
  for (const locale of LOCALES) {
    for (const [old, target] of Object.entries(LEGACY_PATHS)) redirects.push(`/${locale}${old} ${localeHref(target, locale)} 302`);
    for (const segment of V1_ONLY) {
      redirects.push(`/${locale}/docs/${segment} /${locale}/v1/docs/${segment} 302`);
      redirects.push(`/${locale}/docs/${segment}/* /${locale}/v1/docs/${segment}/:splat 302`);
    }
  }
  await writeFile(join(output, '_redirects'), redirects.sort((a, b) => Number(a.includes('*')) - Number(b.includes('*'))).join('\n') + '\n');
  const policy = ["default-src 'self'", "base-uri 'self'", "connect-src 'self' https://api.github.com", "font-src 'self'", "frame-ancestors 'self'", "img-src 'self' data: https://avatars.githubusercontent.com", "object-src 'none'", "script-src 'self' 'unsafe-inline'", "style-src 'self' 'unsafe-inline'"].join('; ');
  await writeFile(join(output, '_headers'), `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  X-Frame-Options: SAMEORIGIN\n  Strict-Transport-Security: max-age=31536000; includeSubDomains\n  Content-Security-Policy: ${policy}\n`);
  const commit = process.env.CF_PAGES_COMMIT_SHA || execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  const dirty = execFileSync('git', ['status', '--porcelain'], { encoding: 'utf8' }).trim() !== '';
  await writeFile(join(output, 'site-build.json'), JSON.stringify({ commit, dirty, hosting: 'cloudflare-pages', functions: false }) + '\n');
  const files = [];
  async function inventory(directory) {
    for (const item of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, item.name);
      if (item.isDirectory()) await inventory(path);
      else files.push({ path, bytes: (await stat(path)).size });
    }
  }
  await inventory(output);
  if (files.length > 20_000 || files.some(file => file.bytes > 25 * 1024 * 1024)) throw new Error('Static output exceeds Cloudflare Pages Free file limits');
  if (files.some(file => /(?:^|\/)_(?:worker\.js|routes\.json)$/.test(file.path))) throw new Error('Pages output must not contain a Worker or Functions routing manifest');
  // 确保根级 404 存在，避免 Pages 把缺失页面当作 SPA 回退到首页。
  await readFile(join(output, '404.html'));
  console.log(`Pages static output: ${pages.length * LOCALES.length} localized pages, ${aliases.size} compatible entries, ${files.length} files, largest ${(Math.max(...files.map(file => file.bytes)) / 1024 / 1024).toFixed(2)} MiB; no Functions`);
}
