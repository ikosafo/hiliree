// hiliree-web\src\components\sections\donate\DonationHero.tsx
"use client";
import { motion } from "framer-motion";

export function DonationHero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden bg-[#FFFBEB]">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#41307e]/8 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6C5CE7]/6 rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#41307e]/5 rounded-full blur-[180px] opacity-30" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(#41307e 1px, transparent 1px), linear-gradient(90deg, #41307e 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="section-wrapper text-center max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 32 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 24 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-6">
              <span className="w-1 h-1 rounded-full bg-gray-400" />
              Support Hiliree
            </span>
            <h1 className="font-serif text-[48px] lg:text-[64px] leading-[1.05] text-gray-900">
              Help Us Connect
              <br />
              <span className="bg-gradient-to-r from-[#41307e] via-[#6C5CE7] to-[#8B7CF6] bg-clip-text text-transparent">
                Families Across
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#8B7CF6] via-[#6C5CE7] to-[#41307e] bg-clip-text text-transparent">
                Generations
              </span>
            </h1>
            <p className="mt-6 text-base max-w-xl mx-auto leading-relaxed text-gray-500">
              Together, We Build the Future of Family Connection
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}