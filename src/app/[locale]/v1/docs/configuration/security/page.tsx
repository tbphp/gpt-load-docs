import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import SecurityContent from "@/components/SecurityContent";

export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata('/v1/docs/configuration/security');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no'
  };
}

export default async function SecurityPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <SecurityContent />;
}