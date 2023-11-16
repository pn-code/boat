import Footer from "@/components/Footer";
import CreditsSection from "@/components/sections/CreditsSection";
import DevelopmentSection from "@/components/sections/DevelopmentSection";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import PerformanceSection from "@/components/sections/PerformanceSection";
import TechnologySection from "@/components/sections/TechnologySection";
import DesignSection from "@/components/sections/DesignSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-4">
      <HeroSection />
      <OverviewSection />
      <DesignSection />
      <TechnologySection />
      <PerformanceSection />
      <DevelopmentSection />
      <CreditsSection />
      <Footer />
    </main>
  );
}
