import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import ProjectConfigurationPageContent from "@/components/ProjectConfigurationPageContent";

// 页面级SEO元数据生成
export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata('/v1/docs/configuration/project');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default async function ProjectConfigurationPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <ProjectConfigurationPageContent />;
}
