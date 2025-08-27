import { generatePageMetadata } from "@/lib/dynamicSeo";
import GeminiOpenaiPageContent from "@/components/GeminiOpenaiPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/gemini-openai');
}

export default function GeminiOpenaiPage() {
  return <GeminiOpenaiPageContent />;
}
