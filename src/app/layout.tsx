import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { GitHubStarsProvider } from "@/context/GitHubStarsContext";
import { LanguageProvider } from "@/i18n/context";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import { META_CONFIGS, OG_CONFIGS } from "@/lib/metadata";
import { getServerLanguage, getServerHtmlLang } from "@/lib/serverLanguage";

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
      url: "https://www.gpt-load.com",
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
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serverLang = await getServerLanguage();
  const htmlLang = await getServerHtmlLang();
  
  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider initialLanguage={serverLang}>
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
