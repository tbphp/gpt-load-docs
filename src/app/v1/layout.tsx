import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GitHubStarsProvider } from "@/context/GitHubStarsContext";
import { LanguageProvider } from "@/i18n/context";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import { META_CONFIGS, OG_CONFIGS } from "@/lib/metadata";
import { getServerLanguage } from "@/lib/serverLanguage";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getServerLanguage();
  const config = META_CONFIGS[lang];
  const ogConfig = OG_CONFIGS[lang];

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: "tbphp" }],
    // 1.4.x 归档内容不参与搜索排名，避免与 2.0 文档争抢权重
    robots: { index: false, follow: true },
    icons: {
      icon: [
        { url: "/logo.png", sizes: "32x32", type: "image/png" },
        { url: "/logo.png", sizes: "16x16", type: "image/png" },
      ],
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
    openGraph: {
      title: ogConfig.title,
      description: ogConfig.description,
      type: "website",
      url: "https://www.gpt-load.com/v1",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "GPT-Load Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogConfig.title,
      description: ogConfig.description,
      images: ["/logo.png"],
    },
  };
}

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    shrinkToFit: "no",
  };
}

/**
 * 1.4.x 归档站布局。
 * 保留原有的 Tailwind 主题、三语 Provider 与导航结构，仅整体挪到 /v1 路径下。
 */
export default async function V1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serverLang = await getServerLanguage();

  return (
    <div className={`${inter.variable} font-sans antialiased v1-root pt-8`} data-site="v1">
      <ThemeProvider>
        <LanguageProvider initialLanguage={serverLang}>
          <GitHubStarsProvider>
            <ClientLayoutWrapper>
              <V1Banner />
              <Navigation />
              {children}
              <Footer />
            </ClientLayoutWrapper>
          </GitHubStarsProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

/** 归档提示条：明确当前内容属于 1.4.x 维护线，并给出 2.0 入口。 */
function V1Banner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-8 bg-amber-50 dark:bg-amber-950/60 border-b border-amber-200 dark:border-amber-900/70">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 text-xs sm:text-sm">
        <span className="text-amber-900 dark:text-amber-200">
          这里是 GPT-Load 1.4.x 的存档文档
        </span>
        {/* 跨站跳转刻意用整页刷新：客户端路由会把归档站的 Tailwind
            preflight 带进 2.0 页面，污染那边的设计系统。 */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/"
          className="font-medium text-amber-900 dark:text-amber-100 underline underline-offset-2 hover:no-underline whitespace-nowrap"
        >
          前往 2.0 →
        </a>
      </div>
    </div>
  );
}
