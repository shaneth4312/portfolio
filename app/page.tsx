import HeroSection from "@/components/HeroSection";
import CardSlider from "@/components/CardSlider";
import StatsSection from "@/components/StatsSection";
import CaseStudySection from "@/components/CaseStudySection";
import LowPolyBackground from "@/components/three/LowPolyBackground";

export default function Home() {
  return (
    <main className="relative">
      <LowPolyBackground />
      <HeroSection />
      <CardSlider />
      <StatsSection />
      <CaseStudySection />
    </main>
  );
}