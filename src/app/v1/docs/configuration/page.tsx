import { generatePageMetadata } from "@/lib/dynamicSeo";
import ConfigurationPageContent from "@/components/ConfigurationPageContent";

export async function generateMetadata() {
  return generatePageMetadata("/v1/docs/configuration");
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function ConfigurationPage() {
  return <ConfigurationPageContent />;
}
