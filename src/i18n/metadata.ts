import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import { defaultLocale, type Locale } from "./config";

export async function generateMetadata(locale?: Locale): Promise<Metadata> {
  // 获取当前语言
  const cookieStore = await cookies();
  const currentLocale =
    locale || (cookieStore.get("language")?.value as Locale) || defaultLocale;

  // 获取翻译
  const t = await getTranslations({
    locale: currentLocale,
    namespace: "metadata",
  });

  const tNav = await getTranslations({
    locale: currentLocale,
    namespace: "navigation",
  });

  // 基础元数据
  const baseMetadata: Metadata = {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "tbphp" }],
    metadataBase: new URL("https://gpt-load.com"),
    alternates: {
      canonical: "/",
      languages: {
        "zh-CN": "/",
        en: "/",
        ja: "/",
        "x-default": "/",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: getOpenGraphLocale(currentLocale),
      alternateLocale: getAlternateLocales(currentLocale),
      url: "/",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: tNav("logoAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    other: {
      "format-detection": "telephone=no",
    },
  };

  return baseMetadata;
}

function getOpenGraphLocale(locale: Locale): string {
  switch (locale) {
    case "zh":
      return "zh_CN";
    case "en":
      return "en_US";
    case "ja":
      return "ja_JP";
    default:
      return "zh_CN";
  }
}

function getAlternateLocales(currentLocale: Locale): string[] {
  const allLocales = ["zh_CN", "en_US", "ja_JP"];
  const current = getOpenGraphLocale(currentLocale);
  return allLocales.filter((loc) => loc !== current);
}

type PageKey =
  | "home"
  | "docs"
  | "docs/introduction"
  | "docs/deployment"
  | "docs/configuration"
  | "architecture"
  | "configuration"
  | "deployment"
  | "channels"
  | "integrations";

export async function generatePageMetadata(
  page: PageKey,
  locale?: Locale
): Promise<Metadata> {
  const cookieStore = await cookies();
  const currentLocale =
    locale || (cookieStore.get("locale")?.value as Locale) || defaultLocale;
  const t = await getTranslations({
    locale: currentLocale,
    namespace: "metadata",
  });

  let pageTitle = t("title");
  let pageDescription = t("description");

  // 根据页面类型自定义元数据
  switch (page) {
    case "docs":
      pageTitle = `${t("docs.title")} - ${t("title")}`;
      pageDescription = t("docs.description");
      break;
    case "docs/introduction":
      pageTitle = `${t("docs.introduction")} - ${t("title")}`;
      pageDescription = t("docs.introductionDesc");
      break;
    case "docs/deployment":
      pageTitle = `${t("docs.deployment")} - ${t("title")}`;
      pageDescription = t("docs.deploymentDesc");
      break;
    case "docs/configuration":
      pageTitle = `${t("docs.configuration")} - ${t("title")}`;
      pageDescription = t("docs.configurationDesc");
      break;
  }

  const baseMetadata = await generateMetadata(currentLocale);

  return {
    ...baseMetadata,
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      ...baseMetadata.openGraph,
      title: pageTitle,
      description: pageDescription,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: pageTitle,
      description: pageDescription,
    },
  };
}
