import type { Metadata } from "next";
import { FAQHero } from "@/components/sections/faq/FAQHero";
import { FAQList } from "@/components/sections/faq/FAQList";

export const metadata: Metadata = { title: "FAQ - Hiliree" };

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQList />
    </>
  );
}