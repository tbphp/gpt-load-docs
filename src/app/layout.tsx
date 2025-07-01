import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { GitHubStarsProvider } from "@/context/GitHubStarsContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GPT-Load - 高性能 AI API 代理服务器",
  description:
    "高性能的 OpenAI 兼容 API 代理服务器，支持多密钥轮询、负载均衡和智能错误处理。为您的 AI 应用提供稳定可靠的 API 访问服务。",
  keywords: "GPT, OpenAI, API, 代理, 负载均衡, 多密钥, Go, 高性能",
  authors: [{ name: "tbphp" }],
  openGraph: {
    title: "GPT-Load - 高性能 AI API 代理服务器",
    description:
      "高性能的 OpenAI 兼容 API 代理服务器，支持多密钥轮询、负载均衡和智能错误处理",
    type: "website",
    url: "https://gpt-load.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT-Load - 高性能 AI API 代理服务器",
    description:
      "高性能的 OpenAI 兼容 API 代理服务器，支持多密钥轮询、负载均衡和智能错误处理",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        <GitHubStarsProvider>
          <Navigation />
          {children}
          <Footer />
        </GitHubStarsProvider>
      </body>
    </html>
  );
}
