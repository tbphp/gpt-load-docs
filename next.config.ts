import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    // 贡献者头像来自 GitHub，且以 unoptimized 方式直出（浏览器直连，不走优化管线）
    remotePatterns: [{ protocol: "https", hostname: "avatars.githubusercontent.com" }],
  },
  experimental: {
    mdxRs: true,
  },
  async headers() {
    const common = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
    ];
    const production = process.env.NODE_ENV === "production"
      ? [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "connect-src 'self' https://api.github.com",
              "font-src 'self'",
              "frame-ancestors 'self'",
              "img-src 'self' data: https://avatars.githubusercontent.com",
              "object-src 'none'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
            ].join("; "),
          },
        ]
      : [];

    return [{ source: "/:path*", headers: [...common, ...production] }];
  },
  async redirects() {
    // 1.4.x 时代对外发布过的文档链接，散落在 README、issue、他人收藏里。
    // 这些路径在 2.0 里没有对应页面（内容被拆分重组到了别处），
    // 转发到归档站是它们唯一还能提供价值的方式，**应当长期保留**。
    //
    // 只能逐条列出，不能用 /docs/:path* 通配——那会把 2.0 的新文档整个拦截掉。
    // 2.0 已有同名页面的（/docs/channels、/docs/faq）刻意不转发，直接走新版。
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
      // 文档结构调整后的旧路径
      { source: "/docs/scheduling", destination: "/docs/internals/scheduling", permanent: false },
      { source: "/docs/monitoring", destination: "/docs/monitor", permanent: false },
      { source: "/docs/config", destination: "/docs/reference/env", permanent: false },
      // 渠道不是独立对象，内容并入分组页（见 /docs/concepts）
      { source: "/docs/channels", destination: "/docs/groups", permanent: false },
      { source: "/docs/channels/subscription", destination: "/docs/groups/subscription", permanent: false },
      // 这两页在 2.0 里提升为一级页面
      { source: "/docs/sponsor", destination: "/sponsor", permanent: false },
      { source: "/docs/contributors", destination: "/contributors", permanent: false },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
