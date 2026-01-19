import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PowerSection from "@/components/PowerSection";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import TestResults from "@/components/TestResults";
import PricingDetails from "@/components/PricingDetails";
import PricingSection from "@/components/PricingSection";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <PowerSection />
      <AboutSection />
      <HowItWorks />
      <TestResults />
      <PricingDetails />
      <PricingSection />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}
