"use client";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-white">
      <div className="relative section-wrapper text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-4">
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            About Us
          </span>
          <h1 className="font-serif text-[44px] lg:text-[56px] leading-[1.08] text-gray-900">
            Built on belief.
            <br />
            Grounded in family.
          </h1>
          <p className="mt-6 text-sm max-w-lg mx-auto leading-relaxed text-gray-500">
            Hiliree was founded on the conviction that every family carries a legacy worth preserving, and that legacy deserves to be protected.
          </p>
        </motion.div>
      </div>
    </section>
  );
}