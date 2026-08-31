import { generatePageMetadata } from "@/lib/dynamicSeo";
import QuickStartPageContent from "@/components/QuickStartPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/v1/docs');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function QuickStartPage() {
  return <QuickStartPageContent />;
}
