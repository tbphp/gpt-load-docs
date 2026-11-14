import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import { generatePageMetadata } from "@/lib/dynamicSeo";
import AggregateGroupsContent from "@/components/AggregateGroupsContent";

// Generate page-level SEO metadata
export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata('/v1/docs/architecture-design/aggregate-groups');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default async function AggregateGroupsPage({ params }: LocalizedPageProps) {
  await initLocale(params);
  return <AggregateGroupsContent />;
}
