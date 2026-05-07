// hiliree-web\src\components\sections\about\AboutCTA.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { COLORS } from "@/components/common/ColorGuidePage";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AboutCTA() {
  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: COLORS.fill[2] }}
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: `${COLORS.brand[6]}08` }}
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
              background: `linear-gradient(135deg, ${COLORS.brand[6]}0F 0%, ${COLORS.brand[6]}08 100%)`,
              borderColor: `${COLORS.brand[6]}26`,
              color: COLORS.brand[5],
            }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: COLORS.brand[5] }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
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
          style={{ color: COLORS.brand[6] }}
        >
          Help us connect families across{" "}
          <em className="font-light italic" style={{ color: COLORS.text[3] }}>generations</em>
        </motion.h2>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          className="max-w-xl mx-auto space-y-4 mb-10"
        >
          <p className="text-[15px] leading-relaxed font-light" style={{ color: COLORS.text[2] }}>
            In a world defined by change, Hiliree stands as a steady foundation, a place to honor 
            where we come from and shape where we are going.
          </p>
          <p className="text-[14px] leading-relaxed font-light" style={{ color: COLORS.text[3] }}>
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
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold min-w-[180px] font-poppins transition-all duration-300"
              style={{
                background: COLORS.brand[5],
                color: COLORS.text[5],
                boxShadow: `0 4px 14px ${COLORS.brand[5]}40`,
              }}
            >
              Support Hiliree
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold min-w-[180px] font-poppins transition-all duration-300"
              style={{
                color: COLORS.brand[5],
                border: `1px solid ${COLORS.brand[5]}40`,
                background: COLORS.text[5],
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