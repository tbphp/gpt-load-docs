import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    // 贡献者头像来自 GitHub，且以 unoptimized 方式直出（浏览器直连，不走优化管线）
    remotePatterns: [{ protocol: "https", hostname: "avatars.githubusercontent.com" }],
  },
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    // 1.4.x 的旧文档链接。2.0 的 /docs 已经启用，所以这里只能逐条列出
    // **2.0 没有对应页面**的旧路径，不能再用 /docs/:path* 通配——
    // 那会把新文档整个拦截掉。
    // 2.0 已有同名页面的（/docs/channels、/docs/faq）刻意不重定向，直接走新版。
    const v1Only = [
      "introduction",
      "gemini-openai",
      "architecture-design",
      "configuration",
      "deployment",
      "integrations",
    ];

    return [
      ...v1Only.flatMap((seg) => [
        { source: `/docs/${seg}`, destination: `/v1/docs/${seg}`, permanent: false },
        { source: `/docs/${seg}/:path*`, destination: `/v1/docs/${seg}/:path*`, permanent: false },
      ]),
      // 这两页在 2.0 里提升为一级页面
      { source: "/docs/sponsor", destination: "/sponsor", permanent: false },
      { source: "/docs/contributors", destination: "/contributors", permanent: false },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
