import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import ClawCloudPageContent from "@/components/ClawCloudPageContent";

// 页面级SEO元数据生成
export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata('/v1/docs/deployment/claw-cloud');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default async function ClawCloudPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <ClawCloudPageContent />;
}