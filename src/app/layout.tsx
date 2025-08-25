import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { GitHubStarsProvider } from "@/context/GitHubStarsContext";
import { LanguageProvider } from "@/i18n/context";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GPT-Load - 高性能 AI 接口透明代理服务",
  description:
    "企业级 AI 接口透明代理服务，完全保留各 AI 服务商的原生 API 格式。提供密钥轮询、多分组管理、负载均衡等功能，为您的 AI 应用提供稳定可靠的代理服务。",
  keywords: "GPT, OpenAI, API, 透明代理, 负载均衡, 密钥轮询, Go, 高性能",
  authors: [{ name: "tbphp" }],
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "GPT-Load - 高性能 AI 接口透明代理服务",
    description:
      "企业级 AI 接口透明代理服务，完全保留各 AI 服务商的原生 API 格式，提供密钥轮询和负载均衡功能",
    type: "website",
    url: "https://gpt-load.com",
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
    title: "GPT-Load - 高性能 AI 接口透明代理服务",
    description:
      "企业级 AI 接口透明代理服务，完全保留各 AI 服务商的原生 API 格式，提供密钥轮询和负载均衡功能",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <GitHubStarsProvider>
            <ClientLayoutWrapper>
              <Navigation />
              {children}
              <Footer />
            </ClientLayoutWrapper>
          </GitHubStarsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
