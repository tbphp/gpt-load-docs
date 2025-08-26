import { generatePageMetadata } from "@/lib/dynamicSeo";
import PerformancePageContent from "@/components/PerformancePageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/architecture-design/performance');
}

// Viewport 配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
}

export default function PerformancePage() {
  return <PerformancePageContent />;
}