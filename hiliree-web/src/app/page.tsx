// hiliree-web\src\app\page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TrainingSection } from "@/components/sections/TrainingSection";
import { DownloadSection } from "@/components/sections/DownloadSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TrainingSection />
      <DownloadSection />
    </>
  );
}