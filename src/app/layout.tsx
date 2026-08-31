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
      {/*
        浏览器默认给 body 加 8px margin。v1 站靠 Tailwind 的 preflight 清零，
        v2 站没有全局 reset 覆盖到 body 本身（只重置 .v2 内部），
        所以这里在根布局兜底清零一次，两站共用、互不影响。
      */}
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
