"use client";
import { motion } from "framer-motion";
import { Sparkles, Shield, Rocket, Heart } from "lucide-react";

const impactItems = [
  {
    icon: Sparkles,
    title: "The Experience",
    description: "Refining the architecture of memory with intuitive design and seamless interaction.",
  },
  {
    icon: Rocket,
    title: "The Innovation",
    description: "Accelerating high-fidelity tools to visualize generational legacies in vivid detail.",
  },
  {
    icon: Shield,
    title: "The Sanctuary",
    description: "Uncompromising privacy protocols to protect your family's most sacred history.",
  },
  {
    icon: Heart,
    title: "The Stability",
    description: "Enterprise-grade performance ensuring your legacy remains accessible for decades.",
  },
];

export function DonationImpact() {
  return (
    <section className="py-32 bg-[#FFFBEB] relative overflow-hidden">
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(65,48,126,0.03)_0%,transparent_70%)]" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Header - matching our heading style */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-4">
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            Our Commitment
          </span>
          <h2 className="font-serif text-[40px] lg:text-[48px] leading-[1.08] text-gray-900">
            Your support <span className="italic font-light text-gray-400">elevates</span> <br/> every layer of Hiliree.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border-x border-y border-gray-200 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
          {impactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-10 bg-white hover:bg-[#FAF9F6] transition-colors duration-500"
            >
              {/* Subtle Icon Animation */}
              <div className="mb-12 relative">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#41307e]/5 group-hover:bg-[#41307e] group-hover:text-white transition-all duration-500">
                  <item.icon size={18} strokeWidth={1.5} className="text-[#41307e] group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                </div>
                <div className="absolute -inset-2 bg-[#41307e]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-xl" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#41307e] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Hover Line Detail */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#41307e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-gray-400 text-sm font-light"
        >
          Advancing the art of family preservation through community generosity.
        </motion.p>
      </div>
    </section>
  );
}