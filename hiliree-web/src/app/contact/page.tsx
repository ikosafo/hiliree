import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/contact/ContactPage";

export const metadata: Metadata = { title: "Contact Us" };

export default function Contact() {
  return <ContactPage />;
}