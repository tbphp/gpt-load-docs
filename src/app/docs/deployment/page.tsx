import { generatePageMetadata } from "@/lib/dynamicSeo";
import DeploymentPageContent from "@/components/DeploymentPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/deployment');
}

// Viewport 配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export default function DeploymentPage() {
  return <DeploymentPageContent />;
}
