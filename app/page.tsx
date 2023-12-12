import Footer from "@/components/Footer";
import CreditsSection from "@/components/sections/CreditsSection";
import DevelopmentSection from "@/components/sections/DevelopmentSection";
import HeroSection from "@/components/sections/HeroSection";
import PerformanceSection from "@/components/sections/PerformanceSection";
import HowSection from "@/components/sections/HowSection";
import DesignSection from "@/components/sections/DesignSection";
import ConceptSection from "@/components/sections/ConceptSection";
import ScrollUpButton from "@/components/ScrollUpButton";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <HeroSection />
      <ConceptSection />
      <DesignSection />
      <HowSection />
      <PerformanceSection />
      <DevelopmentSection />
      <CreditsSection />
      <ScrollUpButton />
      <Footer />
    </main>
  );
}
