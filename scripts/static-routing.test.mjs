import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { browserEntryScript, canonicalPath, entryHref, localeHref, pathLocale, stripLocale } from '../src/i18n/routing.mjs';

test('language switching preserves the page, other queries and fragment', () => {
  assert.equal(localeHref('/zh/docs/groups?lang=zh&source=readme#overrides', 'ja'), '/ja/docs/groups?source=readme#overrides');
  assert.equal(localeHref('/', 'en'), '/en');
  assert.equal(localeHref('/ja', 'zh'), '/zh');
});

test('assets, external URLs and fragment-only links stay unchanged', () => {
  for (const href of ['https://example.com/docs', '//example.com/docs', '/v2/brand/logo.svg', '/social-card.png?v=2', '/_next/static/app.js', '/api/example', '#example', 'mailto:test']) assert.equal(localeHref(href, 'ja'), href);
});

test('legacy document mappings select their final destinations', () => {
  assert.equal(canonicalPath('/en/docs/channels/subscription'), '/docs/groups/subscription');
  assert.equal(canonicalPath('/docs/configuration/security'), '/v1/docs/configuration/security');
  assert.equal(canonicalPath('/docs/channels'), '/docs/groups');
  assert.equal(localeHref('/docs/scheduling#affinity', 'zh'), '/zh/docs/internals/scheduling#affinity');
});

test('explicit query wins, explicit language path is stable against cookies', () => {
  assert.equal(entryHref('/docs/groups?lang=ja#example', 'zh', 'en-US'), '/ja/docs/groups#example');
  assert.equal(entryHref('/en/docs/groups', 'zh', 'ja-JP'), '/en/docs/groups');
  assert.equal(entryHref('/en/docs/groups?lang=zh', 'ja', 'en'), '/zh/docs/groups');
});

test('unprefixed entries honor saved language, browser language and version defaults', () => {
  assert.equal(entryHref('/docs?lang=invalid', 'zh', 'ja-JP'), '/zh/docs');
  assert.equal(entryHref('/docs', null, 'ja-JP'), '/ja/docs');
  assert.equal(entryHref('/docs', null, 'fr-FR'), '/en/docs');
  assert.equal(entryHref('/v1/docs', null, 'fr-FR'), '/zh/v1/docs');
  assert.equal(entryHref('/docs/configuration', null, null), '/zh/v1/docs/configuration');
});

test('language extraction does not strip arbitrary path prefixes', () => {
  assert.equal(pathLocale('/enough/docs'), null);
  assert.equal(stripLocale('/ja/docs'), '/docs');
  assert.equal(stripLocale('/zh'), '/');
  assert.equal(stripLocale('/docs'), '/docs');
});

test('legacy bootstrap resolves archive language and fragment before hydration', () => {
  let target;
  const href = 'https://www.gpt-load.com/docs/configuration/security?lang=en#security';
  const url = new URL(href);
  const document = { cookie: 'preferred-language=ja' };
  vm.runInNewContext(browserEntryScript(), { URL, document, navigator: { language: 'zh-CN' }, location: { href, pathname: url.pathname, search: url.search, hash: url.hash, replace: value => { target = value; } } });
  assert.equal(target, '/en/v1/docs/configuration/security#security');
  assert.match(document.cookie, /^preferred-language=en;/);
});
