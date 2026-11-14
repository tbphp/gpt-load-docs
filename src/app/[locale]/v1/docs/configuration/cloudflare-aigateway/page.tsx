import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import CloudflareAIGatewayPageContent from "@/components/CloudflareAIGatewayPageContent";

export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata("/v1/docs/configuration/cloudflare-aigateway");
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default async function CloudflareAIGatewayPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <CloudflareAIGatewayPageContent />;
}
