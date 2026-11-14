import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import ContributorsPageContent from "@/components/ContributorsPageContent";

export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata("/v1/contributors");
}

export function generateViewport() {
  return { width: "device-width", initialScale: 1, shrinkToFit: "no" };
}

export default async function ContributorsPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <ContributorsPageContent />;
}
