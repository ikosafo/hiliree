import type { Metadata } from "next";
import { DonationHero } from "@/components/sections/donate/DonationHero";
import { DonationTiers } from "@/components/sections/donate/DonationTiers";
import { DonationInfo } from "@/components/sections/donate/DonationInfo";

export const metadata: Metadata = {
  title: "Donate — Support Hiliree",
  description: "Help keep Hiliree private, independent, and family-focused. Every contribution makes a difference.",
};

export default function DonatePage() {
  return (
    <>
      <DonationHero />
      <DonationTiers />
      <DonationInfo />
    </>
  );
}