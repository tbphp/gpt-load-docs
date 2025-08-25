import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gpt-load.com";

  const pages = [
    "",
    "/docs",
    "/docs/architecture",
    "/docs/configuration",
    "/docs/deployment",
    "/docs/channels",
    "/docs/integrations",
    "/docs/gemini-openai",
    "/docs/introduction",
    "/docs/sponsor",
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add pages for each locale
  for (const locale of locales) {
    for (const page of pages) {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1 : page === "/docs" ? 0.9 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${page}`])
          ),
        },
      });
    }
  }

  return sitemap;
}
