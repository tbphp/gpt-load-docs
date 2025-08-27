import { generatePageMetadata } from "@/lib/dynamicSeo";
import ClawCloudPageContent from "@/components/ClawCloudPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/deployment/claw-cloud');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function ClawCloudPage() {
  return <ClawCloudPageContent />;
}