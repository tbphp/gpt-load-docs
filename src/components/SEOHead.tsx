import { cookies } from "next/headers";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

interface SEOHeadProps {
  pageKey?: string;
}

export default async function SEOHead({ pageKey }: SEOHeadProps) {
  const cookieStore = await cookies();
  const locale =
    (cookieStore.get("language")?.value as Locale) || defaultLocale;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gpt-load.com";

  const currentPath = pageKey
    ? pageKey === "docs"
      ? "/docs"
      : `/docs/${pageKey}`
    : "";

  return (
    <>
      {/* Hreflang tags for multi-language support */}
      {locales.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${baseUrl}/${lang}${currentPath}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}${currentPath}`}
      />

      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}${currentPath}`} />

      {/* Enhanced meta tags */}
      <meta name="author" content="GPT-Load Team" />
      <meta name="publisher" content="GPT-Load" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      {/* Open Graph enhanced */}
      <meta property="og:site_name" content="GPT-Load" />
      <meta property="og:locale" content={locale.replace("-", "_")} />
      {locales
        .filter((lang) => lang !== locale)
        .map((lang) => (
          <meta
            key={lang}
            property="og:locale:alternate"
            content={lang.replace("-", "_")}
          />
        ))}

      {/* Twitter Card enhanced */}
      <meta name="twitter:creator" content="@gptload" />
      <meta name="twitter:site" content="@gptload" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
    </>
  );
}
