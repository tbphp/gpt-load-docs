import { generatePageMetadata } from "@/lib/dynamicSeo";
import ClaudeCodeRouterPageContent from "@/components/ClaudeCodeRouterPageContent";

// 页面级SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/docs/integrations/claude-code-router');
}

// Viewport 配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export default function ClaudeCodeRouterPage() {
  return <ClaudeCodeRouterPageContent />;
}
