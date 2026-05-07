"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FAQHero() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(155deg, #FAFAF8 0%, #F2EDE6 55%, rgba(23,17,61,0.03) 100%)" }}
    >
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(23,17,61,0.04)" }}
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full border font-poppins"
            style={{
              background: "linear-gradient(135deg, rgba(23,17,61,0.06) 0%, rgba(23,17,61,0.03) 100%)",
              borderColor: "rgba(23,17,61,0.15)",
              color: "#41307e",
            }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-[#41307e]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Help Center
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: EASE }}
          className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-4 tracking-[-0.02em]"
          style={{ color: "#2D206A" }}
        >
          Hiliree FAQ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
          className="text-[15px] text-gray-500 leading-relaxed max-w-lg mx-auto font-poppins font-light"
        >
          Everything you need to know about building your family tree, connecting with relatives, and preserving your legacy.
        </motion.p>
      </div>
    </section>
  );
}