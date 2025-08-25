import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { GitHubStarsProvider } from "@/context/GitHubStarsContext";
import { LanguageProvider } from "@/i18n/context";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import { META_CONFIGS, OG_CONFIGS } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: META_CONFIGS.zh.title,
  description: META_CONFIGS.zh.description,
  keywords: META_CONFIGS.zh.keywords,
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
    title: OG_CONFIGS.zh.title,
    description: OG_CONFIGS.zh.description,
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
    title: OG_CONFIGS.zh.title,
    description: OG_CONFIGS.zh.description,
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
