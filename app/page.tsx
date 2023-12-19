import Footer from "@/components/Footer";
import TeamSection from "@/components/sections/TeamSection";
import DevelopmentSection from "@/components/sections/DevelopmentSection";
import HeroSection from "@/components/sections/HeroSection";
import PerformanceSection from "@/components/sections/PerformanceSection";
import HowSection from "@/components/sections/HowSection";
import DesignSection from "@/components/sections/DesignSection";
import ConceptSection from "@/components/sections/ConceptSection";
import ScrollUpButton from "@/components/ScrollUpButton";
import EventsSection from "@/components/sections/EventsSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ConceptSection />
      <DesignSection />
      <HowSection />
      <PerformanceSection />
      <DevelopmentSection />
      <TeamSection />
      <EventsSection />
      <ScrollUpButton />
      {/* <Footer /> */}
    </main>
  );
}
