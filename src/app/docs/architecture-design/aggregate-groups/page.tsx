import { generatePageMetadata } from "@/lib/dynamicSeo";
import AggregateGroupsContent from "@/components/AggregateGroupsContent";

// Generate page-level SEO metadata
export async function generateMetadata() {
  return generatePageMetadata('/docs/architecture-design/aggregate-groups');
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    shrinkToFit: 'no',
  };
}

export default function AggregateGroupsPage() {
  return <AggregateGroupsContent />;
}
