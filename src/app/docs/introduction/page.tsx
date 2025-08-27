import { generatePageMetadata } from "@/lib/dynamicSeo";
import IntroductionPageContent from "@/components/IntroductionPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/introduction');
}

// Viewport 配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export default function IntroductionPage() {
  return <IntroductionPageContent />;
}
