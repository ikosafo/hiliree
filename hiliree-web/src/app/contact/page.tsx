import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Clock, Mail, Zap } from "lucide-react";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-white">
      <div className="section-wrapper">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3 block">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl lg:text-4xl text-gray-900 leading-tight mb-5">
            We are real people. We really read this.
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Have a question, suggestion, or just want to say hello? We reply to every message personally usually within 24 hours.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left Column - Info Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {[
                { 
                  icon: Clock, 
                  label: "Response Time", 
                  value: "Within 24 hours",
                  description: "We prioritize every message"
                },
                { 
                  icon: Mail, 
                  label: "Direct Email", 
                  value: "support@hiliree.com",
                  description: "Reach us anytime"
                },
                { 
                  icon: Zap, 
                  label: "Quick Help", 
                  value: "FAQ & Support",
                  description: "Find instant answers"
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <item.icon size={18} className="text-gray-900" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                      <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 ml-13">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}