import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/v2/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // 1.4.x 归档内容不参与索引，页面本身也带了 noindex
      disallow: ["/v1", "/v1/", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
