import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import SourcePageContent from "@/components/SourcePageContent";

// 页面级SEO元数据生成
export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata('/v1/docs/deployment/source');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default async function SourcePage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <SourcePageContent />;
}
