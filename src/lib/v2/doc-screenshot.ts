import type { Locale } from "@/i18n/v2/config";

/** 返回当前文档语言对应的截图路径。 */
export function docScreenshot(locale: Locale, name: string): string {
  return `/v2/screenshots/${locale}/${name}`;
}
