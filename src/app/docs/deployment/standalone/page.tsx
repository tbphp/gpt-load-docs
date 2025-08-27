import { generatePageMetadata } from "@/lib/dynamicSeo";
import StandalonePageContent from "@/components/StandalonePageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/deployment/standalone');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function StandalonePage() {
  return <StandalonePageContent />;
}