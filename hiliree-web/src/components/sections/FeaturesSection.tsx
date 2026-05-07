"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COLORS } from "@/components/common/ColorGuidePage";

/* ─── Types ───────────────────────────────────────── */
interface Feature {
  id: number;
  tag: string;
  title: string;
  body: string;
  accent: string;
  accentLight: string;
  previewImage: string;
}

/* ─── Data ────────────────────────────────────────── */
const features: Feature[] = [
  {
    id: 0,
    tag: "Family Tree",
    title: "See every generation in one view",
    body: "Build step-by-step. Hiliree places every relative in the right line, auto-sorted by age.",
    accent: COLORS.blue[7],
    accentLight: COLORS.blue[1],
    previewImage: "/images/features/tree.png",
  },
  {
    id: 1,
    tag: "Birthdays",
    title: "Never miss a birthday",
    body: "Automatic reminders surface upcoming birthdays so you always celebrate on time.",
    accent: COLORS.warning[6],
    accentLight: COLORS.warning[1],
    previewImage: "/images/features/celebrate.png",
  },
  {
    id: 2,
    tag: "Video Calls",
    title: "Bring generations together",
    body: "Family video calls directly in the app, no third-party tool needed.",
    accent: COLORS.brand[7],
    accentLight: COLORS.brand[1],
    previewImage: "/images/features/video.png",
  },
  {
    id: 3,
    tag: "Chats",
    title: "Stay connected, always",
    body: "Message any family member, share voice notes, and keep conversations in one private space.",
    accent: COLORS.blue[6],
    accentLight: COLORS.blue[1],
    previewImage: "/images/features/chat.png",
  },
  {
    id: 4,
    tag: "Events",
    title: "Plan every gathering",
    body: "Reunions, prayers, dinners or virtual meetings. Everyone RSVPs in one place.",
    accent: COLORS.brand[5],
    accentLight: COLORS.brand[1],
    previewImage: "/images/features/events.png",
  },
  {
    id: 5,
    tag: "Family Map",
    title: "See where family lives",
    body: "An interactive map pins every relative's location, across cities and continents.",
    accent: COLORS.cyan[6],
    accentLight: COLORS.cyan[1],
    previewImage: "/images/features/map.png",
  },
  {
    id: 6,
    tag: "Invites",
    title: "Real connections",
    body: "Both sides must accept before any link is official. Your tree stays private and accurate.",
    accent: COLORS.brand[4],
    accentLight: COLORS.brand[2],
    previewImage: "/images/features/invite2.png",
  },
  {
    id: 7,
    tag: "Moments",
    title: "Share what matters",
    body: "Post photos, milestones and updates to a private family feed only you control.",
    accent: COLORS.success[6],
    accentLight: COLORS.success[1],
    previewImage: "/images/features/moments.png",
  },
  {
    id: 8,
    tag: "Insights",
    title: "Discover family patterns",
    body: "Did-You-Know cards & Life Charts turn your family data into meaningful highlights.",
    accent: COLORS.blue[7],
    accentLight: COLORS.blue[1],
    previewImage: "/images/features/insights.png",
  },
];

/* ─── Premium Slider Feature Card ─────────────────── */
function SliderFeature({ feature }: { feature: Feature }) {
  return (
    <motion.div
      className="w-full flex-shrink-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          className="flex justify-center order-2 lg:order-1"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div
            className="relative rounded-3xl p-8"
            style={{
              background: `linear-gradient(135deg, ${feature.accentLight} 0%, ${feature.accentLight}40 100%)`,
            }}
          >
            <img
              src={feature.previewImage}
              alt={feature.title}
              className="h-[320px] lg:h-[480px] w-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Tag */}
            <div className="flex items-center gap-2.5 mb-6">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: feature.accent }}
              />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: feature.accent }}
              >
                {feature.tag}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-serif text-3xl lg:text-5xl font-normal mb-4 tracking-[-0.02em]"
              style={{ color: COLORS.brand[6] }}
            >
              {feature.title}
            </h3>

            {/* Body */}
            <p
              className="text-[15px] lg:text-[17px] leading-relaxed mb-8"
              style={{ color: COLORS.text[2] }}
            >
              {feature.body}
            </p>

            {/* Learn more indicator */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <span
                className="text-[11px] font-mono tracking-[0.16em]"
                style={{ color: feature.accent }}
              >
                LEARN MORE
              </span>
              <motion.span
                className="text-[18px]"
                style={{ color: feature.accent }}
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Dot Indicators ──────────────────────────────── */
function DotIndicators({
  total,
  current,
  onClick,
  accent,
}: {
  total: number;
  current: number;
  onClick: (index: number) => void;
  accent: string;
}) {
  return (
    <div className="flex justify-center gap-2 mt-12">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className="transition-all duration-300"
        >
          <div
            className={`rounded-full transition-all ${
              index === current
                ? "w-8 h-2"
                : "w-2 h-2 opacity-40 hover:opacity-70"
            }`}
            style={{
              background: index === current ? accent : COLORS.border[3],
            }}
          />
        </button>
      ))}
    </div>
  );
}

/* ─── Main Section ─────────────────────────────────── */
export function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentFeature = features[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section
      id="features"
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{ background: COLORS.fill[2] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full mb-5"
            style={{
              background: `${COLORS.brand[6]}0f`,
              border: `1px solid ${COLORS.brand[6]}1a`,
              color: COLORS.brand[5],
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.brand[5] }} />
            Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-[-0.02em] font-['Cormorant_Garamond',serif]"
            style={{ color: COLORS.brand[6] }}
          >
            Everything your family needs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[15px] max-w-xl mx-auto leading-relaxed font-poppins font-light"
            style={{ color: COLORS.text[2] }}
          >
            Purpose-built tools to connect generations, preserve memories, and
            celebrate every moment.
          </motion.p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all hover:scale-110"
            style={{
              background: COLORS.text[5],
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              border: `1px solid ${COLORS.border[2]}`,
            }}
          >
            <ChevronLeft size={24} style={{ color: COLORS.brand[6] }} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all hover:scale-110"
            style={{
              background: COLORS.text[5],
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              border: `1px solid ${COLORS.border[2]}`,
            }}
          >
            <ChevronRight size={24} style={{ color: COLORS.brand[6] }} />
          </button>

          {/* Slides */}
          <div className="overflow-hidden px-8 lg:px-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <SliderFeature feature={currentFeature} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot Indicators */}
        <DotIndicators
          total={features.length}
          current={currentIndex}
          onClick={handleDotClick}
          accent={currentFeature.accent}
        />
      </div>
    </section>
  );
}