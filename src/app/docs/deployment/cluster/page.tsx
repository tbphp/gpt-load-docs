import { generatePageMetadata } from "@/lib/dynamicSeo";
import ClusterPageContent from "@/components/ClusterPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/deployment/cluster');
}

// Viewport 配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export default function ClusterPage() {
  return <ClusterPageContent />;
}
