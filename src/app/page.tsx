import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Impact } from "@/components/sections/Impact";
import { Team } from "@/components/sections/Team";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Impact />
      <Team />
      <Footer />
    </main>
  );
}
