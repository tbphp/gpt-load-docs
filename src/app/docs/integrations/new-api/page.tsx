import { generatePageMetadata } from "@/lib/dynamicSeo";
import NewAPIPageContent from "@/components/NewAPIPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/integrations/new-api');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function NewAPIIntegrationPage() {
  return <NewAPIPageContent />;
}
