import { generatePageMetadata } from "@/lib/dynamicSeo";
import RooCodePageContent from "@/components/RooCodePageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/integrations/roo-code');
}

// Viewport 配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export default function RooCodeIntegrationPage() {
  return <RooCodePageContent />;
}
 