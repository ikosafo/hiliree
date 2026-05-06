import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Clock, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Hiliree team. We respond to every message personally.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-brand-cream">
      <div className="section-wrapper grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <div>
          <span className="text-brand-blue font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
          <h1 className="font-serif text-[40px] lg:text-[48px] mt-3 mb-6 text-gray-900 leading-tight">We&apos;re real people.<br />We really read this.</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">Have a question, suggestion, or just want to say hello? We reply to every message personally, usually within 24 hours.</p>
          <div className="space-y-6">
            {[
              { icon: Clock, label: "Response Time", value: "Within 24 hours" },
              { icon: Mail, label: "Email", value: "support@hiliree.com" },
              { icon: MessageCircle, label: "Community", value: "Join our social channels" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-light flex items-center justify-center"><item.icon size={20} className="text-brand-blue" /></div>
                <div><div className="text-xs text-gray-400 font-medium">{item.label}</div><div className="text-sm font-semibold text-gray-800">{item.value}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10"><ContactForm /></div>
      </div>
    </main>
  );
}