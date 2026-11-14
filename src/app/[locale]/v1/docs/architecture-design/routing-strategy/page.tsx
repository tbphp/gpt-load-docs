import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import RoutingStrategyPageContent from "@/components/RoutingStrategyPageContent";

// 页面级SEO元数据生成
export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata('/v1/docs/architecture-design/routing-strategy');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default async function RoutingStrategyPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <RoutingStrategyPageContent />;
}
