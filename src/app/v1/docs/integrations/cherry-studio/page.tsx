import { generatePageMetadata } from "@/lib/dynamicSeo";
import CherryStudioPageContent from "@/components/CherryStudioPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/v1/docs/integrations/cherry-studio');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function CherryStudioIntegrationPage() {
  return <CherryStudioPageContent />;
}
