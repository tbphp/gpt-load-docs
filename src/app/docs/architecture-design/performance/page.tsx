import { Metadata, Viewport } from 'next'
import { generatePageMetadata } from "@/lib/dynamicSeo";
import PerformancePageContent from "@/components/PerformancePageContent";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/docs/architecture-design/performance');
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function PerformancePage() {
  return <PerformancePageContent />;
}