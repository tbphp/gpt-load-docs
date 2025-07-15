import Hero from "../components/Hero";
import Features from "../components/Features";
import Architecture from "../components/Architecture";
import QuickStart from "../components/QuickStart";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Features />
      <Architecture />
      <QuickStart />
      <CTA />
    </main>
  );
}
