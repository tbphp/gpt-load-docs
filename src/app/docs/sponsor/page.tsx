import { generatePageMetadata } from "@/lib/dynamicSeo";
import SponsorPageContent from "@/components/SponsorPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/sponsor');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function SponsorPage() {
  return <SponsorPageContent />;
}
