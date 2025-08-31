import { generatePageMetadata } from "@/lib/dynamicSeo";
import FaqContent from "@/components/FaqContent";

export async function generateMetadata() {
  return generatePageMetadata('/docs/faq');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no'
  };
}

export default function FaqPage() {
  return <FaqContent />;
}