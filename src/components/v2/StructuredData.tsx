import { localeUrl, SITE_NAME, SITE_URL } from "@/lib/v2/site";
import { HTML_LANG } from "@/i18n/v2/config";
import { getLocale, getT } from "@/i18n/v2/server";

/**
 * 结构化数据。
 *
 * 给搜索结果提供软件条目所需的字段（名称、类别、许可、价格）。
 * 只在首页输出一次，其余页面不重复。
 */
export default async function StructuredData() {
  const locale = await getLocale();
  const t = await getT();
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Linux, macOS, Windows, Docker",
      description: t.meta.description,
      url: localeUrl("/", locale),
      license: "https://opensource.org/licenses/MIT",
      softwareVersion: "2.0",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Person", name: "tbphp", url: "https://github.com/tbphp" },
      codeRepository: "https://github.com/tbphp/gpt-load",
      inLanguage: HTML_LANG[locale],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: ["zh-CN", "en", "ja"],
    },
  ];

  return (
    <script
      type="application/ld+json"
      // 内容为常量，不含用户输入
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
