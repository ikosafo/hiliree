"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AboutCTA() {
  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: "#FAFAF8" }}
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(23,17,61,0.03)" }}
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full border font-poppins mb-5"
            style={{
              background: "linear-gradient(135deg, rgba(23,17,61,0.06) 0%, rgba(23,17,61,0.03) 100%)",
              borderColor: "rgba(23,17,61,0.15)",
              color: "#41307e",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#41307e]" />
            Support Our Mission
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
          className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-[-0.02em]"
          style={{ color: "#2D206A" }}
        >
          Help us connect families across{" "}
          <em className="font-light italic text-gray-400">generations</em>
        </motion.h2>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          className="max-w-xl mx-auto space-y-4 mb-10"
        >
          <p className="text-[15px] text-gray-500 leading-relaxed font-light">
            In a world defined by change, Hiliree stands as a steady foundation, a place to honor 
            where we come from and shape where we are going.
          </p>
          <p className="text-[14px] text-gray-400 leading-relaxed font-light">
            Join us as we help families build, preserve, and share their legacy. Because the stories 
            we craft today become the guiding lights for those who come after us.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold text-white min-w-[180px] font-poppins transition-all duration-300"
              style={{ background: "#41307e" }}
            >
              Support Hiliree
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold min-w-[180px] font-poppins transition-all duration-300"
              style={{
                color: "#41307e",
                border: "1px solid rgba(65,48,126,0.25)",
              }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}