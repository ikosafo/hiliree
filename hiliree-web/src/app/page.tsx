import { HeroSection } from "@/components/sections/HeroSection";
import { getHomepageData } from "@/lib/api";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TrainingSection } from "@/components/sections/TrainingSection";
import { DownloadSection } from "@/components/sections/DownloadSection";

export default async function HomePage() {
  const data = await getHomepageData();

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