// hiliree-web\src\components\sections\donate\DonationInfo.tsx
"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wand2, Shield, Zap } from "lucide-react";
import { COLORS } from "@/components/common/ColorGuidePage";

const EASE = [0.22, 1, 0.36, 1] as const;

const impactItems = [
  {
    icon: Sparkles,
    title: "Enhance the Hiliree Experience",
    description: "Improve core features like the family tree, profiles, memories, and communication tools to make Hiliree more intuitive and powerful.",
    color: COLORS.blue[6],
    iconBg: COLORS.blue[1],
  },
  {
    icon: Wand2,
    title: "Build New Features",
    description: "Bring to life future upgrades, generational visualization, shared memory timelines, and richer ways for families to interact.",
    color: COLORS.brand[7],
    iconBg: COLORS.brand[1],
  },
  {
    icon: Shield,
    title: "Prioritize Safety & Privacy",
    description: "Invest in strong privacy protections, secure data handling, and responsible design so families can use Hiliree with confidence.",
    color: COLORS.magenta[6],
    iconBg: COLORS.magenta[1],
  },
  {
    icon: Zap,
    title: "Keep Hiliree Running Smoothly",
    description: "Support ongoing platform stability, fast loading, reliable performance, and seamless experience for families around the globe.",
    color: COLORS.gold[6],
    iconBg: COLORS.gold[1],
  },
];

const TOTAL = impactItems.length;

export function DonationWhy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TOTAL);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
  }, []);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  }, [currentIndex]);

  const getSlide = (offset: number) => {
    return impactItems[(currentIndex + offset + TOTAL) % TOTAL];
  };

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A1A28 0%, #1E1E30 50%, #252540 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${COLORS.blue[6]} 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <motion.div
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: `${COLORS.blue[6]}0D` }}
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full border mb-5"
            style={{
              color: COLORS.blue[3],
              backgroundColor: `${COLORS.blue[6]}1A`,
              borderColor: `${COLORS.blue[6]}33`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.blue[5] }} />
            Why Your Support Matters
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em]" style={{ color: COLORS.text[5] }}>
            Your contribution does <em className="font-light italic" style={{ color: `${COLORS.text[5]}66` }}>more than fund an app</em>
          </h2>
          <p className="text-sm md:text-base max-w-lg mx-auto mt-4 font-light" style={{ color: `${COLORS.text[5]}59` }}>
            It helps build a digital legacy that generations will rely on
          </p>
        </motion.div>

        <div className="relative pb-16">
          <div className="overflow-hidden mb-10">
            <div className="relative">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ x: direction > 0 ? "105%" : "-105%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? "-105%" : "105%", opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 28, mass: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
                >
                  {[0, 1, 2].map((offset) => {
                    const item = getSlide(offset);
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="group p-6 rounded-2xl h-full"
                        style={{ background: COLORS.text[5] }}
                      >
                        <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: item.color }} />
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                          style={{ background: item.iconBg }}
                        >
                          <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-['Cormorant_Garamond',serif] text-base font-bold mb-2 leading-snug" style={{ color: COLORS.text[1] }}>
                          {item.title}
                        </h3>
                        <p className="text-[12px] leading-relaxed font-light" style={{ color: COLORS.text[2] }}>
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: `${COLORS.text[5]}0A`,
                border: `1px solid ${COLORS.text[5]}14`,
                color: `${COLORS.text[5]}80`,
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <div className="flex gap-1.5 items-center">
              {impactItems.map((item, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="rounded-full transition-all duration-300"
                  animate={{
                    width: idx === currentIndex ? 16 : 6,
                    height: 6,
                  }}
                  style={{
                    background: idx === currentIndex ? item.color : `${COLORS.text[5]}1F`,
                  }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: `${COLORS.text[5]}0A`,
                border: `1px solid ${COLORS.text[5]}14`,
                color: `${COLORS.text[5]}80`,
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-[13px] mt-4 font-light max-w-xl mx-auto leading-relaxed"
          style={{ color: `${COLORS.text[5]}33` }}
        >
          Hiliree was created with one mission: to help families preserve their stories, honor their roots, 
          and stay connected across time and distance.
        </motion.p>
      </div>
    </section>
  );
}