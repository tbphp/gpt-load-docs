export const locales = ["zh", "en", "ja"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export const localeNames = {
  zh: "中文",
  en: "English",
  ja: "日本語",
} as const;
