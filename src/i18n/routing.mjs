/** @type {readonly ['en', 'zh', 'ja']} */
export const LOCALES = ['en', 'zh', 'ja'];
export const LANGUAGE_COOKIE = 'preferred-language';
/** @typedef {(typeof LOCALES)[number]} Locale */

// 已公开的旧文档入口，静态兼容页与浏览器导航共用同一份映射。
export const LEGACY_PATHS = {
  '/docs/scheduling': '/docs/internals/scheduling',
  '/docs/monitoring': '/docs/monitor',
  '/docs/config': '/docs/reference/env',
  '/docs/channels': '/docs/groups',
  '/docs/channels/subscription': '/docs/groups/subscription',
  '/docs/sponsor': '/sponsor',
  '/docs/contributors': '/contributors',
};
export const V1_ONLY = ['introduction', 'gemini-openai', 'architecture-design', 'configuration', 'deployment', 'integrations'];

/** @param {string} path @returns {Locale | null} */
export function pathLocale(path) {
  return LOCALES.find(locale => path.split('/')[1] === locale) ?? null;
}

/** @param {string} path */
export function stripLocale(path) {
  return pathLocale(path) ? path.replace(/^\/(en|zh|ja)(?=\/|$)/, '') || '/' : path;
}

/** @param {string} path */
export function canonicalPath(path) {
  const plain = stripLocale(path).replace(/\/$/, '') || '/';
  const exact = LEGACY_PATHS[/** @type {keyof typeof LEGACY_PATHS} */ (plain)];
  if (exact) return exact;
  if (V1_ONLY.some(segment => plain === `/docs/${segment}` || plain.startsWith(`/docs/${segment}/`))) return `/v1${plain}`;
  return plain;
}

/** @param {string} href @param {Locale} locale */
export function localeHref(href, locale) {
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  const url = new URL(href, 'https://www.gpt-load.com');
  if (/\.[a-z0-9]+$/i.test(url.pathname) || /^\/(?:api|_next)(?:\/|$)/.test(url.pathname)) return href;
  const path = canonicalPath(url.pathname);
  url.pathname = `/${locale}${path === '/' ? '' : path}`;
  url.searchParams.delete('lang');
  return `${url.pathname}${url.search}${url.hash}`;
}

/**
 * 显式语言路径优先于已保存偏好；旧 ?lang= 链接仍是显式选择。
 * @param {string} href @param {string | null} saved @param {string | null} browser
 */
export function entryHref(href, saved, browser) {
  const url = new URL(href, 'https://www.gpt-load.com');
  const query = url.searchParams.get('lang');
  const isLocale = (/** @type {string | null} */ value) => LOCALES.find(locale => locale === value);
  const detected = browser?.toLowerCase().split('-')[0] ?? null;
  const fallback = canonicalPath(url.pathname).startsWith('/v1') ? 'zh' : 'en';
  const locale = isLocale(query) ?? pathLocale(url.pathname) ?? isLocale(saved) ?? isLocale(detected) ?? fallback;
  return localeHref(`${url.pathname}${url.search}${url.hash}`, locale);
}

/** 兼容入口在 React 启动前跳转，避免归档布局先按旧路径进行 hydration。 */
export function browserEntryScript() {
  const functions = [pathLocale, stripLocale, canonicalPath, localeHref, entryHref].map(fn => fn.toString()).join('\n');
  return `(()=>{const LOCALES=${JSON.stringify(LOCALES)};const LEGACY_PATHS=${JSON.stringify(LEGACY_PATHS)};const V1_ONLY=${JSON.stringify(V1_ONLY)};const key=${JSON.stringify(LANGUAGE_COOKIE)};${functions}\nconst saved=document.cookie.split(';').map(value=>value.trim()).find(value=>value.startsWith(key+'='))?.slice(key.length+1)??null;const explicit=new URL(location.href).searchParams.get('lang');if(LOCALES.includes(explicit))document.cookie=key+'='+explicit+';path=/;max-age=31536000;SameSite=Lax';const target=entryHref(location.href,saved,navigator.language);if(target!==location.pathname+location.search+location.hash)location.replace(target);})();`;
}
