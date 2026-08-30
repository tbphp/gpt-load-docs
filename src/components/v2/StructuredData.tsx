import { SITE_NAME, SITE_URL } from "@/lib/v2/site";

/**
 * 结构化数据。
 *
 * 给搜索结果提供软件条目所需的字段（名称、类别、许可、价格），
 * 同时声明站内搜索入口。只在首页输出一次，其余页面不重复。
 */
export default function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Linux, macOS, Windows, Docker",
      description:
        "自托管的 AI 网关：二十个内置渠道，API 密钥与订阅账号统一调度，四种客户端协议原样透传，请求日志与成本估算一目了然。",
      url: SITE_URL,
      license: "https://opensource.org/licenses/MIT",
      softwareVersion: "2.0",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Person", name: "tbphp", url: "https://github.com/tbphp" },
      codeRepository: "https://github.com/tbphp/gpt-load",
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
