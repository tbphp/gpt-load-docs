import { generatePageMetadata } from "@/lib/dynamicSeo";
import ClaudeCodeRouterPageContent from "@/components/ClaudeCodeRouterPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/integrations/claude-code-router');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function ClaudeCodeRouterPage() {
  return <ClaudeCodeRouterPageContent />;
}
