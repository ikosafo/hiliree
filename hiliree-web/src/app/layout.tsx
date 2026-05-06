import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClientLayoutWrapper } from "@/app/ClientLayoutWrapper";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat", 
  display: "swap" 
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", 
  display: "swap" 
});

export const metadata: Metadata = {
  title: { default: "Hiliree - Your Family. Your Story.", template: "%s | Hiliree" },
  description: "The private family app to build your tree, preserve memories, and stay connected.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="font-poppins bg-brand-cream text-gray-900 antialiased min-h-screen flex flex-col">
        <ClientLayoutWrapper>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}