import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import ConfigurationPageContent from "@/components/ConfigurationPageContent";

export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata("/v1/docs/configuration");
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default async function ConfigurationPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <ConfigurationPageContent />;
}
