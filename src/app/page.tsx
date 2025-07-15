import Hero from "../components/Hero";
import Architecture from "../components/Architecture";
import QuickStart from "../components/QuickStart";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Architecture />
      <QuickStart />
      <CTA />
    </main>
  );
}
