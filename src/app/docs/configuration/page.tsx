import { generatePageMetadata } from "@/lib/dynamicSeo";
import ConfigurationPageContent from "@/components/ConfigurationPageContent";

export async function generateMetadata() {
  return generatePageMetadata("/docs/configuration");
}

// Viewport 配置
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no',
};

export default function ConfigurationPage() {
  return <ConfigurationPageContent />;
}
