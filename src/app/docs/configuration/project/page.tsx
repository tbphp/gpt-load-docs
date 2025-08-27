import { generatePageMetadata } from "@/lib/dynamicSeo";
import ProjectConfigurationPageContent from "@/components/ProjectConfigurationPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/configuration/project');
}

// Viewport 配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export default function ProjectConfigurationPage() {
  return <ProjectConfigurationPageContent />;
}
