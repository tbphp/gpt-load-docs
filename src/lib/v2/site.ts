import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/i18n/v2/config";
import { getDict, type Dict } from "@/i18n/v2/dict";

export const SITE_URL = "https://www.gpt-load.com";
export const SITE_NAME = "GPT-Load";

export type LocalizedMeta = Record<Locale, { title: string; description: string; keywords?: string }>;

export function localeUrl(path: string, locale: Locale): string {
  const url = new URL(path, SITE_URL);
  if (locale !== DEFAULT_LOCALE) url.searchParams.set("lang", locale);
  return url.toString();
}

export function localeAlternates(path: string, locale: Locale): Metadata["alternates"] {
  return {
    canonical: localeUrl(path, locale),
    languages: Object.fromEntries([
      ...LOCALES.map((code) => [code, localeUrl(path, code)]),
      ["x-default", localeUrl(path, DEFAULT_LOCALE)],
    ]),
  };
}

/** 为中英日页面生成同构的 canonical、hreflang 与社交分享信息。 */
export function localizedPageMeta(opts: {
  locale: Locale;
  path: string;
  copy: LocalizedMeta;
  type?: "website" | "article";
}): Metadata {
  const current = opts.copy[opts.locale];
  const url = localeUrl(opts.path, opts.locale);

  return {
    title: current.title,
    description: current.description,
    keywords: current.keywords,
    alternates: localeAlternates(opts.path, opts.locale),
    openGraph: {
      title: `${current.title} - ${SITE_NAME}`,
      description: current.description,
      url,
      siteName: SITE_NAME,
      type: opts.type ?? "article",
      locale: opts.locale === "zh" ? "zh_CN" : opts.locale === "ja" ? "ja_JP" : "en_US",
      alternateLocale: LOCALES.filter((code) => code !== opts.locale).map((code) =>
        code === "zh" ? "zh_CN" : code === "ja" ? "ja_JP" : "en_US"
      ),
    },
    twitter: {
      card: "summary_large_image",
      title: `${current.title} - ${SITE_NAME}`,
      description: current.description,
    },
  };
}

export function dictionaryPageMeta(opts: {
  locale: Locale;
  path: string;
  select: (dict: Dict) => { title: string; description: string; keywords?: string };
  type?: "website" | "article";
}): Metadata {
  const copy = Object.fromEntries(
    LOCALES.map((code) => [code, opts.select(getDict(code))])
  ) as LocalizedMeta;
  return localizedPageMeta({ locale: opts.locale, path: opts.path, copy, type: opts.type });
}
