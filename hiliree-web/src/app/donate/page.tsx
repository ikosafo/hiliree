// hiliree-web\src\app\donate\page.tsx
import type { Metadata } from "next";
import { DonationHero } from "@/components/sections/donate/DonationHero";
import { DonationInfo } from "@/components/sections/donate/DonationInfo";
import { DonationImpact } from "@/components/sections/donate/DonationImpact";
import { DonationTiers } from "@/components/sections/donate/DonationTiers";
import { DonationShare } from "@/components/sections/donate/DonationShare";

export const metadata: Metadata = {
  title: "Donate — Support Hiliree",
  description: "Help keep Hiliree private, independent, and family-focused. Every contribution makes a difference.",
};

export default function DonatePage() {
  return (
    <>
      <DonationHero />
      <DonationInfo />
      <DonationImpact />
      <DonationTiers />
      <DonationShare />
    </>
  );
}