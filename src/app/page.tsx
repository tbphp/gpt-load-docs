import Hero from "../components/Hero";
import Architecture from "../components/Architecture";
import QuickStart from "../components/QuickStart";
import CTA from "../components/CTA";
import HomeSeoHandler from "../components/HomeSeoHandler";
import { generatePageMetadata } from "@/lib/dynamicSeo";

// 首页SEO元数据生成
export async function generateMetadata() {
  return generatePageMetadata('/');
}

export default function Home() {
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
