import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import QuickStartPageContent from "@/components/QuickStartPageContent";

// 页面级SEO元数据生成
export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata('/v1/docs');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default async function QuickStartPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <QuickStartPageContent />;
}
