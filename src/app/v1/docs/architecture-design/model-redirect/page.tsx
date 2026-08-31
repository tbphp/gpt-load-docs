import { generatePageMetadata } from "@/lib/dynamicSeo";
import ModelRedirectPageContent from "@/components/ModelRedirectPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/v1/docs/architecture-design/model-redirect');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function ModelRedirectPage() {
  return <ModelRedirectPageContent />;
}
