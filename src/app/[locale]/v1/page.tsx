import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import Hero from "@/components/Hero";
import Architecture from "@/components/Architecture";
import QuickStart from "@/components/QuickStart";
import CTA from "@/components/CTA";
import HomeSeoHandler from "@/components/HomeSeoHandler";
import { generatePageMetadata } from "@/lib/dynamicSeo";

// 首页SEO元数据生成
export async function generateMetadata({ params }: LocalizedPageProps) {
  await initLocale(params);
  return generatePageMetadata('/v1');
}

export default async function Home({ params }: LocalizedPageProps) {
  await initLocale(params);
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HomeSeoHandler />
      <Hero />
      <Architecture />
      <QuickStart />
      <CTA />
    </main>
  );
}
