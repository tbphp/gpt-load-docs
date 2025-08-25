import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import { defaultLocale, type Locale } from "@/i18n/config";

interface StructuredDataProps {
  schemas?: string[];
}

export default async function MultipleStructuredData({
  schemas = ["organization", "website"],
}: StructuredDataProps) {
  const cookieStore = await cookies();
  const locale =
    (cookieStore.get("language")?.value as Locale) || defaultLocale;

  const t = await getTranslations({
    locale,
    namespace: "structuredData",
  });

  const structuredDataList = [];

  if (schemas.includes("organization")) {
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: t("organization.name"),
      description: t("metadata.description"),
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://gpt-load.com",
      logo: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://gpt-load.com"
      }/logo.png`,
      foundingDate: "2024",
      sameAs: ["https://github.com/tbphp/gpt-load"],
    };
    structuredDataList.push(organizationData);
  }

  if (schemas.includes("website")) {
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: t("website.name"),
      description: t("metadata.description"),
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://gpt-load.com",
      inLanguage: [locale],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${
            process.env.NEXT_PUBLIC_SITE_URL || "https://gpt-load.com"
          }/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };
    structuredDataList.push(websiteData);
  }

  if (schemas.includes("software")) {
    const softwareData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: t("software.name"),
      description: t("metadata.description"),
      applicationCategory: t("software.applicationCategory"),
      operatingSystem: t("software.operatingSystem"),
      softwareVersion: "1.0.0",
      author: {
        "@type": "Organization",
        name: t("organization.name"),
      },
      downloadUrl: "https://github.com/tbphp/gpt-load",
      codeRepository: "https://github.com/tbphp/gpt-load",
    };
    structuredDataList.push(softwareData);
  }

  return (
    <>
      {structuredDataList.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data, null, 2),
          }}
        />
      ))}
    </>
  );
}
