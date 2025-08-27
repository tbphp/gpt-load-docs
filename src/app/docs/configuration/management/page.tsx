import { generatePageMetadata } from "@/lib/dynamicSeo";
import ManagementPageContent from "@/components/ManagementPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/configuration/management');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function ManagementPage() {
  return <ManagementPageContent />;
}
