import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import { defaultLocale, type Locale } from "./config";

export async function generateOrganizationSchema(): Promise<object> {
  const cookieStore = await cookies();
  const currentLocale =
    (cookieStore.get("locale")?.value as Locale) || defaultLocale;
  const t = await getTranslations({
    locale: currentLocale,
    namespace: "metadata",
  });

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GPT-Load",
    description: t("description"),
    url: "https://gpt-load.com",
    logo: "https://gpt-load.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "technical support",
      url: "https://github.com/tbphp/gpt-load/issues",
    },
    sameAs: ["https://github.com/tbphp/gpt-load"],
  };
}

export async function generateWebsiteSchema(): Promise<object> {
  const cookieStore = await cookies();
  const currentLocale =
    (cookieStore.get("locale")?.value as Locale) || defaultLocale;
  const t = await getTranslations({
    locale: currentLocale,
    namespace: "metadata",
  });

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: t("title"),
    description: t("description"),
    url: "https://gpt-load.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://gpt-load.com/docs?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "GPT-Load",
    },
  };
}

export async function generateSoftwareApplicationSchema(): Promise<object> {
  const cookieStore = await cookies();
  const currentLocale =
    (cookieStore.get("locale")?.value as Locale) || defaultLocale;
  const t = await getTranslations({
    locale: currentLocale,
    namespace: "metadata",
  });

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GPT-Load",
    description: t("description"),
    url: "https://gpt-load.com",
    downloadUrl: "https://github.com/tbphp/gpt-load",
    softwareVersion: "latest",
    operatingSystem: "Linux, macOS, Windows",
    programmingLanguage: "Go",
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "tbphp",
      url: "https://github.com/tbphp",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
  };
}
