import { generatePageMetadata } from "@/lib/dynamicSeo";
import RoutingStrategyPageContent from "@/components/RoutingStrategyPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/architecture-design/routing-strategy');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function RoutingStrategyPage() {
  return <RoutingStrategyPageContent />;
}
