import type { Metadata } from "next";
import { headers } from "next/headers";
import { getServerHtmlLang } from "@/lib/serverLanguage";
import { getLocale } from "@/i18n/v2/server";
import { HTML_LANG } from "@/i18n/v2/config";

/**
 * 根布局只负责 html / body 骨架。
 * 具体主题与样式由两个子站各自的 layout 决定：
 *   (v2)/layout.tsx — 2.0 官网，瑞士网格设计系统
 *   v1/layout.tsx   — 1.4.x 归档站，沿用原 Tailwind 主题
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.gpt-load.com"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") ?? "";

  // 两站都是三语，但默认值不同：归档站默认中文，2.0 默认英文。
  const isArchive = pathname === "/v1" || pathname.startsWith("/v1/");
  const htmlLang = isArchive ? await getServerHtmlLang() : HTML_LANG[await getLocale()];

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
