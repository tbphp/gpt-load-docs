/**
 * 2.0 官网的语言配置。
 *
 * 与 1.4.x 归档站共用同一个 cookie（用户在一边选过，另一边也认），
 * 但**默认语言不同**：1.4.x 默认中文，2.0 在识别不出时默认英文。
 */

export const LOCALES = ["en", "zh", "ja"] as const;
export type Locale = (typeof LOCALES)[number];

/** 识别不出浏览器语言时的兜底 */
export const DEFAULT_LOCALE: Locale = "en";

/** 与 1.4.x 共用，用户的显式选择在两站之间通用 */
export const LOCALE_COOKIE = "preferred-language";

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
};

/** 用于 <html lang> */
export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
  ja: "ja",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/**
 * 从 Accept-Language 或 navigator.language 这类字符串里挑一个支持的语言。
 * 先按质量值排序，再逐个做精确匹配与前缀匹配。
 */
export function matchLocale(acceptLanguage: string | null | undefined): Locale | null {
  if (!acceptLanguage) return null;

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((x) => x.trim().startsWith("q="));
      const quality = q ? Number.parseFloat(q.split("=")[1]) : 1;
      return { tag: tag.trim().toLowerCase(), quality: Number.isNaN(quality) ? 0 : quality };
    })
    .filter((x) => x.tag)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    if (isLocale(tag)) return tag;
    const prefix = tag.split("-")[0];
    if (isLocale(prefix)) return prefix;
  }
  return null;
}
