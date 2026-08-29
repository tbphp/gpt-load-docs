import { generatePageMetadata } from "@/lib/dynamicSeo";
import CloudflareAIGatewayPageContent from "@/components/CloudflareAIGatewayPageContent";

export async function generateMetadata() {
  return generatePageMetadata("/v1/docs/configuration/cloudflare-aigateway");
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function CloudflareAIGatewayPage() {
  return <CloudflareAIGatewayPageContent />;
}
