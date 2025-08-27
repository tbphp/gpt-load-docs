import { generatePageMetadata } from "@/lib/dynamicSeo";
import CloudflareAIGatewayPageContent from "@/components/CloudflareAIGatewayPageContent";

export async function generateMetadata() {
  return generatePageMetadata("/docs/configuration/cloudflare-aigateway");
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  shrinkToFit: "no",
};

export default function CloudflareAIGatewayPage() {
  return <CloudflareAIGatewayPageContent />;
}
