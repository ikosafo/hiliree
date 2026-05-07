// hiliree-web\src\components\sections\about\AboutFeatures.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { TreePine, Heart, Lock, BookOpen, Calendar } from "lucide-react";
import { COLORS } from "@/components/common/ColorGuidePage";

const EASE = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    id: "tree",
    icon: TreePine,
    title: "Dynamic Family Tree Mapping",
    description: "Craft rich, visual representations of your family structure with intuitive relationship tools and organized generational layers.",
    color: COLORS.blue[6],
    iconBg: COLORS.blue[1],
    shadow: `${COLORS.blue[6]}0D`,
    accent: COLORS.blue[5],
  },
  {
    id: "profiles",
    icon: Heart,
    title: "Smart, Customizable Profiles",
    description: "Capture meaningful details photos, locations, timelines, milestones and preserve each member's presence within the family legacy.",
    color: COLORS.brand[7],
    iconBg: COLORS.brand[1],
    shadow: `${COLORS.brand[7]}0D`,
    accent: COLORS.brand[5],
  },
  {
    id: "chat",
    icon: Lock,
    title: "Secure Communication Suite",
    description: "Stay connected through built-in chat, voice, and video with privacy controls crafted to keep family conversations protected.",
    color: COLORS.magenta[6],
    iconBg: COLORS.magenta[1],
    shadow: `${COLORS.magenta[6]}0D`,
    accent: COLORS.magenta[5],
  },
  {
    id: "journals",
    icon: BookOpen,
    title: "Personal Journals & Shared Memories",
    description: "Document stories, reflections, and moments to build a living archive that future generations can discover.",
    color: COLORS.gold[6],
    iconBg: COLORS.gold[1],
    shadow: `${COLORS.gold[6]}0D`,
    accent: COLORS.gold[5],
  },
  {
    id: "events",
    icon: Calendar,
    title: "Events, Reminders & Milestones",
    description: "Organize gatherings, send RSVPs, track anniversaries and birthdays, and keep everyone informed.",
    color: COLORS.success[6],
    iconBg: COLORS.success[1],
    shadow: `${COLORS.success[6]}0D`,
    accent: COLORS.success[5],
  },
];

const TOTAL = features.length;

export function AboutFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TOTAL);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
  };

  const goTo = (idx: number) => {
    if (isAnimating || idx === currentIndex) return;
    setIsAnimating(true);
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getSlide = (offset: number) => {
    return features[(currentIndex + offset + TOTAL) % TOTAL];
  };

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: `linear-gradient(180deg, #252540 0%, #1E1E30 50%, #1A1A28 100%)` }}
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
        {/* Header */}
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
            Why Hiliree
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em]" style={{ color: COLORS.text[5] }}>
            Modern tools for <em className="font-light italic" style={{ color: `${COLORS.text[5]}66` }}>timeless needs</em>
          </h2>
          <p className="text-sm md:text-base max-w-md mx-auto mt-4 font-light" style={{ color: `${COLORS.text[5]}59` }}>
            Designed with intention, Hiliree provides families with everything needed to strengthen bonds and preserve legacy.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="relative pb-16">
          {/* Visible area with overflow hidden */}
          <div className="overflow-hidden mb-10" ref={containerRef}>
            <div className="relative min-h-[260px]">
              {/* Previous set (offscreen left) */}
              <motion.div
                key={`prev-${currentIndex}`}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-5"
                initial={{ x: "-105%" }}
                animate={{ x: "-105%" }}
              >
                {[-1, 0, 1].map((offset) => {
                  const f = getSlide(offset - 1);
                  const Icon = f.icon;
                  return (
                    <div
                      key={`prev-${f.id}`}
                      className="p-7 rounded-2xl"
                      style={{
                        background: COLORS.text[5],
                        boxShadow: `0 4px 24px ${f.shadow}, 0 1px 2px ${f.color}1A`,
                      }}
                    >
                      <div className="h-0.5 w-8 rounded-full mb-5" style={{ background: f.color }} />
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: f.iconBg }}>
                        <Icon className="w-5 h-5" style={{ color: f.color }} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-['Cormorant_Garamond',serif] text-lg font-bold mb-3 leading-snug" style={{ color: COLORS.text[1] }}>
                        {f.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed font-light" style={{ color: COLORS.text[2] }}>
                        {f.description}
                      </p>
                    </div>
                  );
                })}
              </motion.div>

              {/* Current set (animated) */}
              <motion.div
                key={`current-${currentIndex}`}
                className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10"
                initial={{ x: direction > 0 ? "105%" : "-105%" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 28, mass: 0.8 }}
              >
                {[0, 1, 2].map((offset) => {
                  const f = getSlide(offset);
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.id}
                      whileHover={{ scale: 0.95, transition: { duration: 0.2 } }}
                      className="group relative p-7 rounded-2xl h-full"
                      style={{
                        background: COLORS.text[5],
                        boxShadow: `0 4px 24px ${f.shadow}, 0 1px 2px ${f.color}1A`,
                      }}
                    >
                      <div className="flex flex-col h-full">
                        <div className="h-0.5 w-8 rounded-full mb-5" style={{ background: f.color }} />
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: f.iconBg }}>
                          <Icon className="w-5 h-5" style={{ color: f.color }} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-['Cormorant_Garamond',serif] text-lg font-bold mb-3 leading-snug" style={{ color: COLORS.text[1] }}>
                          {f.title}
                        </h3>
                        <p className="text-[13px] leading-relaxed font-light flex-1" style={{ color: COLORS.text[2] }}>
                          {f.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
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
              {Array.from({ length: TOTAL }).map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="rounded-full transition-all duration-300"
                  animate={{
                    width: idx === currentIndex ? 16 : 6,
                    height: 6,
                  }}
                  style={{
                    background:
                      idx === currentIndex
                        ? features[idx].color
                        : `${COLORS.text[5]}1F`,
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
          className="text-center pt-12 mt-4 border-t"
          style={{ borderTopColor: `${COLORS.text[5]}0F` }}
        >
          <h3 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl font-bold mb-3 tracking-[-0.02em]" style={{ color: COLORS.text[5] }}>
            Your Family. Your Story. <em className="font-light italic" style={{ color: `${COLORS.text[5]}4D` }}>Nobody Else&apos;s.</em>
          </h3>
          <p className="text-[14px] leading-relaxed max-w-xl mx-auto font-light" style={{ color: `${COLORS.text[5]}40` }}>
            Hiliree is more than a platform, it is a compass for families who value unity, heritage, and lasting connection.
          </p>
        </motion.div>
      </div>
    </section>
  );
}