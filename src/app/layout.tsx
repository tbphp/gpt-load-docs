import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { GitHubStarsProvider } from "@/context/GitHubStarsContext";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { generateMetadata as getI18nMetadata } from "@/i18n/metadata";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateSoftwareApplicationSchema,
} from "@/i18n/structured-data";
import { MultipleStructuredData } from "@/components/StructuredData";
import { cookies } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getI18nMetadata();

  return {
    ...metadata,
    icons: {
      icon: [
        { url: "/logo.png", sizes: "32x32", type: "image/png" },
        { url: "/logo.png", sizes: "16x16", type: "image/png" },
      ],
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  shrinkToFit: "no",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const cookieStore = await cookies();
  const currentLocale = cookieStore.get("language")?.value || "zh";

  // 生成结构化数据
  const schemas = await Promise.all([
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateSoftwareApplicationSchema(),
  ]);

  // 获取对应的 HTML lang 值
  const htmlLang = getHtmlLang(currentLocale as "zh" | "en" | "ja");

  return (
    <html lang={htmlLang}>
      <head>
        <MultipleStructuredData schemas={schemas} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <GitHubStarsProvider>
            <Navigation />
            {children}
            <Footer />
          </GitHubStarsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

function getHtmlLang(locale: "zh" | "en" | "ja"): string {
  switch (locale) {
    case "zh":
      return "zh-CN";
    case "en":
      return "en-US";
    case "ja":
      return "ja-JP";
    default:
      return "zh-CN";
  }
}
