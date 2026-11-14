import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import NewAPIPageContent from "@/components/NewAPIPageContent";

// 页面级SEO元数据生成
export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata('/v1/docs/integrations/new-api');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default async function NewAPIIntegrationPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <NewAPIPageContent />;
}
