import { renderLocale } from '@/i18n/static-locale';
import { HTML_LANG } from '@/i18n/v2/config';
import type { SupportedLanguage } from '@/i18n/utils';

/** 归档站与新版共享静态语言路由。 */
export async function getServerLanguage(): Promise<SupportedLanguage> {
  return renderLocale();
}

export async function getServerHtmlLang(): Promise<string> {
  return HTML_LANG[renderLocale()];
}
