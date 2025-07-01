import Hero from "../components/Hero";
import Features from "../components/Features";
import Architecture from "../components/Architecture";
import Performance from "../components/Performance";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Architecture />
      <Performance />
      <CTA />
    </main>
  );
}
