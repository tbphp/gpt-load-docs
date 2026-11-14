import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import FaqContent from "@/components/FaqContent";

export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata('/v1/docs/faq');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no'
  };
}

export default async function FaqPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <FaqContent />;
}