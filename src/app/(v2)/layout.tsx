import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
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

// Helvetica Neue 在非 Apple 平台不存在，Archivo 作为同族回落，
// 避免 Windows / Linux 掉到 Arial 破坏字重与字距。
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GPT-Load — 自托管 AI 网关",
    template: "%s - GPT-Load",
  },
  description:
    "GPT-Load 是一个自托管的 AI 网关：二十个内置渠道、API 密钥与订阅账号统一调度，四种客户端协议原样透传，请求日志与成本估算一目了然。",
  keywords: "GPT-Load, AI 网关, API 网关, 自托管, OpenAI, Anthropic, Gemini, 密钥聚合, 负载均衡",
  authors: [{ name: "tbphp" }],
  openGraph: {
    title: "GPT-Load — 自托管 AI 网关",
    description: "一个入口，接管所有渠道与凭据。",
    type: "website",
    url: "https://www.gpt-load.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT-Load — 自托管 AI 网关",
    description: "一个入口，接管所有渠道与凭据。",
  },
};

export function generateViewport() {
  return { width: "device-width", initialScale: 1 };
}

/** 2.0 官网布局：瑞士网格设计系统，与 1.4.x 归档站完全隔离。 */
export default async function V2Layout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const t = getDict(locale);

  return (
    <div className={`v2 ${archivo.variable} ${plexMono.variable}`} data-site="v2" lang={locale}>
      {/* Provider 是 client component，但它的 children 仍可以是 server component */}
      <LocaleProvider locale={locale} t={t}>
        <SiteHeader />
        {children}
        <SiteFooter t={t} />
      </LocaleProvider>
    </div>
  );
}
