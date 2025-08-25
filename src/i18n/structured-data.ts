import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import { defaultLocale, type Locale } from "./config";

export async function generateOrganizationSchema(): Promise<object> {
  const cookieStore = await cookies();
  const currentLocale =
    (cookieStore.get("locale")?.value as Locale) || defaultLocale;
  const t = await getTranslations({
    locale: currentLocale,
    namespace: "structuredData.organization",
  });

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t("name"),
    description: (await getTranslations({ locale: currentLocale, namespace: "metadata" }))("description"),
    url: "https://gpt-load.com",
    logo: "https://gpt-load.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: t("contactType"),
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
    namespace: "structuredData.website",
  });

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: t("name"),
    description: (await getTranslations({ locale: currentLocale, namespace: "metadata" }))("description"),
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
      name: t("publisher"),
    },
  };
}

export async function generateSoftwareApplicationSchema(): Promise<object> {
  const cookieStore = await cookies();
  const currentLocale =
    (cookieStore.get("locale")?.value as Locale) || defaultLocale;
  const t = await getTranslations({
    locale: currentLocale,
    namespace: "structuredData.software",
  });

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: t("name"),
    description: (await getTranslations({ locale: currentLocale, namespace: "metadata" }))("description"),
    url: "https://gpt-load.com",
    downloadUrl: "https://github.com/tbphp/gpt-load",
    softwareVersion: "latest",
    operatingSystem: t("operatingSystem"),
    programmingLanguage: "Go",
    applicationCategory: t("applicationCategory"),
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
