import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
