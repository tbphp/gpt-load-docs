import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import GeminiOpenaiPageContent from "@/components/GeminiOpenaiPageContent";

// 页面级SEO元数据生成
export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata('/v1/docs/gemini-openai');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default async function GeminiOpenaiPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <GeminiOpenaiPageContent />;
}
