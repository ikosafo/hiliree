import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutFeatures } from "@/components/sections/about/AboutFeatures";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = { title: "About Hiliree" };

export default function AboutPage() {
  return (<><AboutHero /><AboutStory /><AboutFeatures /><AboutCTA /></>);
}
