import { generatePageMetadata } from "@/lib/dynamicSeo";
import IntroductionPageContent from "@/components/IntroductionPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/introduction');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function IntroductionPage() {
  return <IntroductionPageContent />;
}
