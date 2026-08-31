import type { Metadata } from "next";
import "@fontsource-variable/archivo/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
// 样式分层，顺序即层级：token → 基础 → 布局 → 组件。页面级样式由页面自己引。
import "@/styles/v2/tokens.css";
import "@/styles/v2/base.css";
import "@/styles/v2/layout.css";
import "@/styles/v2/components.css";
import SiteHeader from "@/components/v2/SiteHeader";
import SiteFooter from "@/components/v2/SiteFooter";
import { getLocale } from "@/i18n/v2/server";
import { getDict } from "@/i18n/v2/dict";
import { LocaleProvider } from "@/i18n/v2/LocaleProvider";
import { Lightbox } from "@/components/v2/ui";
import { localeUrl, socialImage } from "@/lib/v2/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDict(locale);
  const url = localeUrl("/", locale);

  return {
    title: { default: t.meta.title, template: "%s - GPT-Load" },
    description: t.meta.description,
    keywords: t.meta.keywords,
    authors: [{ name: "tbphp" }],
    robots: { index: true, follow: true },
    openGraph: {
      title: t.meta.title,
      description: t.meta.ogDescription,
      type: "website",
      url,
      locale: locale === "zh" ? "zh_CN" : locale === "ja" ? "ja_JP" : "en_US",
      images: [socialImage()],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.ogDescription,
      images: [socialImage()],
    },
  };
}

export function generateViewport() {
  return { width: "device-width", initialScale: 1 };
}

/** 2.0 官网布局：瑞士网格设计系统，与 1.4.x 归档站完全隔离。 */
export default async function V2Layout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const t = getDict(locale);

  return (
    <div className="v2" data-site="v2" lang={locale}>
      {/* Provider 是 client component，但它的 children 仍可以是 server component */}
      <LocaleProvider locale={locale} t={t}>
        {/* 键盘用户的第一个可聚焦元素，跳过整个导航 */}
        <a className="skip" href="#main">
          {t.common.skip}
        </a>
        <SiteHeader />
        {children}
        <SiteFooter t={t} />
        {/* 全站唯一的图片查看器，接管所有 <Figure> 的点击 */}
        <Lightbox />
      </LocaleProvider>
    </div>
  );
}
