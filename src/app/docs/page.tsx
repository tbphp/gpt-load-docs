import { generatePageMetadata } from "@/lib/dynamicSeo";
import QuickStartPageContent from "@/components/QuickStartPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs');
}

// Viewport 配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export default function QuickStartPage() {
  return <QuickStartPageContent />;
}
