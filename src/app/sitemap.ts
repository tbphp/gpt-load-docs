import type { MetadataRoute } from "next";
import { DOC_FLAT } from "@/lib/v2/docs-nav";
import { localeUrl } from "@/lib/v2/site";
import { LOCALES } from "@/i18n/v2/config";

/**
 * 只收录 2.0 的页面。1.4.x 归档站带 noindex，不进 sitemap，
 * 免得和 2.0 文档争抢同一批关键词的权重。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const top = [
    { path: "/", priority: 1 },
    { path: "/changelog", priority: 0.5 },
    { path: "/sponsor", priority: 0.4 },
    { path: "/contributors", priority: 0.4 },
  ];

  const pages = [
    ...top,
    ...DOC_FLAT.map((doc) => ({ path: doc.href, priority: doc.status === "ready" ? 0.8 : 0.5 })),
  ];

  return pages.flatMap((page) => {
    const languages = Object.fromEntries([
      ...LOCALES.map((locale) => [locale, localeUrl(page.path, locale)]),
      ["x-default", localeUrl(page.path, "en")],
    ]);
    return LOCALES.map((locale) => ({
      url: localeUrl(page.path, locale),
      changeFrequency: "weekly" as const,
      priority: page.priority,
      alternates: { languages },
    }));
  });
}
