import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutFeatures } from "@/components/sections/about/AboutFeatures";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Hiliree — Our Story",
  description: "Learn why Hiliree was built and what drives our mission to keep families connected across generations.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutFeatures />
      <AboutCTA />
    </>
  );
}