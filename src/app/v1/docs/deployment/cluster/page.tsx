import { generatePageMetadata } from "@/lib/dynamicSeo";
import ClusterPageContent from "@/components/ClusterPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/v1/docs/deployment/cluster');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function ClusterPage() {
  return <ClusterPageContent />;
}
