import { generatePageMetadata } from "@/lib/dynamicSeo";
import ArchitecturePageContent from "@/components/ArchitecturePageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/architecture-design');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function ArchitecturePage() {
  return <ArchitecturePageContent />;
}
