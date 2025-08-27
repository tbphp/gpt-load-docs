import { generatePageMetadata } from "@/lib/dynamicSeo";
import ContributorsPageContent from "@/components/ContributorsPageContent";

export async function generateMetadata() {
  return generatePageMetadata("/contributors");
}

export function generateViewport() {
  return { width: "device-width", initialScale: 1, shrinkToFit: "no" };
}

export default function ContributorsPage() {
  return <ContributorsPageContent />;
}
