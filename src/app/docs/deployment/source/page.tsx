import { generatePageMetadata } from "@/lib/dynamicSeo";
import SourcePageContent from "@/components/SourcePageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/deployment/source');
}

// Viewport 配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export default function SourcePage() {
  return <SourcePageContent />;
}
