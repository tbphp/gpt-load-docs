import type { Metadata } from "next";

export const SITE_URL = "https://www.gpt-load.com";
export const SITE_NAME = "GPT-Load";

/**
 * 统一生成页面元数据。
 *
 * 每页都要有自己的 canonical——否则 `?lang=` 这类查询参数会被当成不同 URL，
 * 权重被拆散。标题走 layout 里的 template，这里只给页面名。
 */
export function pageMeta(opts: {
  title: string;
  description: string;
  /** 站内路径，如 "/docs/quickstart" */
  path: string;
  keywords?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${opts.title} - ${SITE_NAME}`,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} - ${SITE_NAME}`,
      description: opts.description,
    },
  };
}
