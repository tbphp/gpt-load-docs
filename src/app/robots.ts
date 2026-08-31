import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/v2/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // 1.4.x 页面自身带 noindex，必须允许爬虫访问才能读取该指令。
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
