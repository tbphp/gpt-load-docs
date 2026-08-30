import type { MetadataRoute } from "next";
import { DOC_FLAT } from "@/lib/v2/docs-nav";
import { SITE_URL } from "@/lib/v2/site";

/**
 * 只收录 2.0 的页面。1.4.x 归档站带 noindex，不进 sitemap，
 * 免得和 2.0 文档争抢同一批关键词的权重。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const top = [
    { path: "/", priority: 1 },
    { path: "/changelog", priority: 0.5 },
    { path: "/sponsor", priority: 0.4 },
    { path: "/contributors", priority: 0.4 },
  ].map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p.priority,
  }));

  const docs = DOC_FLAT.map((d) => ({
    url: `${SITE_URL}${d.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    // 已定稿的页面优先级高于仍是骨架的
    priority: d.status === "ready" ? 0.8 : 0.5,
  }));

  return [...top, ...docs];
}
