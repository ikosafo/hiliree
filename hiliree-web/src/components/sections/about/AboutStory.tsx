"use client";
import { motion } from "framer-motion";
import { MessageCircle, Users, Trees } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const nameElements = [
  {
    letter: "Hi",
    meaning: "The greeting that opens every path",
    icon: MessageCircle,
    color: "#6366f1",
  },
  {
    letter: "Family",
    meaning: "The circle that shapes our earliest foundations",
    icon: Users,
    color: "#7c3aed",
  },
  {
    letter: "Tree",
    meaning: "A timeless symbol of roots, growth, and generational strength",
    icon: Trees,
    color: "#d946ef",
  },
];

const pillars = [
  {
    title: "Wisdom",
    description: "That lights our path",
    color: "#6366f1",
  },
  {
    title: "Support",
    description: "That steadies us",
    color: "#7c3aed",
  },
  {
    title: "Lineage",
    description: "That connects us across time and distance",
    color: "#d946ef",
  },
];

export function AboutStory() {
  return (
    <>
      {/* Our Story — Dark */}
      <section
        className="relative py-16 md:py-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #1A1A28 0%, #1E1E30 50%, #252540 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <motion.div
          className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(99,102,241,0.06)" }}
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a5b4fc] bg-[#6366f1]/10 px-3.5 py-1.5 rounded-full border border-[#6366f1]/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
              Our Story
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-[-0.02em]">
              A welcoming bridge between{" "}
              <em className="font-light italic text-white/40">past, present, and future</em>
            </h2>
          </motion.div>

          {/* Name breakdown */}
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {nameElements.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.letter}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                  className="text-center group"
                >
                  <div
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl font-['Cormorant_Garamond',serif] font-bold mb-2" style={{ color: item.color }}>
                    {item.letter}
                  </div>
                  <p className="text-[13px] text-white/35 leading-relaxed font-light max-w-[200px] mx-auto">
                    {item.meaning}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-[15px] text-white/40 leading-relaxed font-light mb-4">
              Together, they form a welcoming bridge between past, present, and future — names that reflect our commitment 
              to helping families greet their history with clarity, honor, and purpose.
            </p>
            <p className="text-[14px] text-white/25 leading-relaxed font-light">
              Built on the pillars of connection, continuity, and collective memory, Hiliree exists to strengthen 
              the bonds that guide us, ground us, and shape the generations that follow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Foundation — Light (for contrast) */}
      <section
        className="relative py-16 md:py-20 overflow-hidden"
        style={{ background: "#FAFAF8" }}
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-300 bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Our Foundation
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4" style={{ color: "#2D206A" }}>
              Family stories are the first blueprints of{" "}
              <em className="font-light italic text-gray-400">who we become</em>
            </h2>
            <p className="text-[15px] text-gray-500 max-w-lg mx-auto leading-relaxed font-light">
              Behind Hiliree is a deep understanding that through seasons of growth and challenge, 
              relationships, when nurtured,form the strongest roots.
            </p>
          </motion.div>

          {/* Pillars — sliding in from sides */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i === 0 ? -30 : i === 2 ? 30 : 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: EASE }}
                className="text-center group"
              >
                <div
                  className="w-px h-10 mx-auto mb-5"
                  style={{ background: `linear-gradient(to bottom, ${item.color}, transparent)` }}
                />
                <h3
                  className="text-2xl font-['Cormorant_Garamond',serif] font-bold mb-2 transition-colors duration-300"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center text-gray-400 text-[12px] mt-12 font-light italic"
          >
            These values serve as the quiet architecture behind every feature we build.
          </motion.p>
        </div>
      </section>
    </>
  );
}