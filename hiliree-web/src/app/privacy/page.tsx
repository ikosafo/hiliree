import type { Metadata } from "next";
import { LegalCenterLayout } from "@/components/layout/LegalCenterLayout";

export const metadata: Metadata = {
  title: "Legal Center - Hiliree",
  description: "Privacy Policy, Child Safety Standards, and Cookies Policy for Hiliree.",
};

export default function LegalCenterPage() {
  return (
    <LegalCenterLayout />
  );
}