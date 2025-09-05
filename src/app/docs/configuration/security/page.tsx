import { generatePageMetadata } from "@/lib/dynamicSeo";
import SecurityContent from "@/components/SecurityContent";

export async function generateMetadata() {
  return generatePageMetadata('/docs/configuration/security');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no'
  };
}

export default function SecurityPage() {
  return <SecurityContent />;
}