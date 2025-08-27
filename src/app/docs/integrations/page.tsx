import { generatePageMetadata } from "@/lib/dynamicSeo";
import IntegrationsPageContent from "@/components/IntegrationsPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/integrations');
}

// Viewport 配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export default function IntegrationsPage() {
  return <IntegrationsPageContent />;
}
