import { SITE_URL } from "@/lib/v2/site";
import type { Metadata } from "next";
import { HTML_LANG } from "@/i18n/v2/config";
import { initLocale } from "@/i18n/static-locale";
import { LOCALES } from "@/i18n/v2/config";
import LocaleEntry from "@/components/LocaleEntry";

/**
 * 根布局只负责 html / body 骨架。
 * 具体主题与样式由两个子站各自的 layout 决定：
 *   (v2)/layout.tsx — 2.0 官网，瑞士网格设计系统
 *   v1/layout.tsx   — 1.4.x 归档站，沿用原 Tailwind 主题
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const dynamicParams = false;
export const dynamic = "error";

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = await initLocale(params);

  return (
    <html lang={HTML_LANG[locale]} suppressHydrationWarning>
      {/*
        浏览器默认给 body 加 8px margin。v1 站靠 Tailwind 的 preflight 清零，
        v2 站没有全局 reset 覆盖到 body 本身（只重置 .v2 内部），
        所以这里在根布局兜底清零一次，两站共用、互不影响。
      */}
      <body style={{ margin: 0 }}><LocaleEntry />{children}</body>
    </html>
  );
}
