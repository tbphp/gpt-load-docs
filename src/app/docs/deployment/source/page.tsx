import { generatePageMetadata } from "@/lib/dynamicSeo";
import SourcePageContent from "@/components/SourcePageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/deployment/source');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function SourcePage() {
  return <SourcePageContent />;
}
