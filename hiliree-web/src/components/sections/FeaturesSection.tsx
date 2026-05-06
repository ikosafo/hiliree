"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
    accent: "#2D4A8A",
    accentLight: "#EEF2FA",
    previewImage: "/images/features/tree.png",
  },
  {
    id: 1,
    tag: "Birthdays",
    title: "Never miss a birthday",
    body: "Automatic reminders surface upcoming birthdays so you always celebrate on time.",
    accent: "#B8621A",
    accentLight: "#FDF0E4",
    previewImage: "/images/features/celebrate.png",
  },
  {
    id: 2,
    tag: "Video Calls",
    title: "Bring generations together",
    body: "Family video calls directly in the app, no third-party tool needed.",
    accent: "#7C3AED",
    accentLight: "#F3EEFE",
    previewImage: "/images/features/video.png",
  },
  {
    id: 3,
    tag: "Chats",
    title: "Stay connected, always",
    body: "Message any family member, share voice notes, and keep conversations in one private space.",
    accent: "#0F6CBD",
    accentLight: "#E9F3FC",
    previewImage: "/images/features/chat.png",
  },
  {
    id: 4,
    tag: "Events",
    title: "Plan every gathering",
    body: "Reunions, prayers, dinners or virtual meetings. Everyone RSVPs in one place.",
    accent: "#5B21B6",
    accentLight: "#F0EBFE",
    previewImage: "/images/features/events.png",
  },
  {
    id: 5,
    tag: "Family Map",
    title: "See where family lives",
    body: "An interactive map pins every relative's location, across cities and continents.",
    accent: "#0D6E6E",
    accentLight: "#E5F5F5",
    previewImage: "/images/features/map.png",
  },
  {
    id: 6,
    tag: "Invites",
    title: "Real connections",
    body: "Both sides must accept before any link is official. Your tree stays private and accurate.",
    accent: "#6D28D9",
    accentLight: "#F2EEFE",
    previewImage: "/images/features/invite2.png",
  },
  {
    id: 7,
    tag: "Moments",
    title: "Share what matters",
    body: "Post photos, milestones and updates to a private family feed only you control.",
    accent: "#065F46",
    accentLight: "#E8F8F3",
    previewImage: "/images/features/moments.png",
  },
  {
    id: 8,
    tag: "Insights",
    title: "Discover family patterns",
    body: "Did-You-Know cards & Life Charts turn your family data into meaningful highlights.",
    accent: "#1E3A8A",
    accentLight: "#EBF1FD",
    previewImage: "/images/features/insights.png",
  },
];

/* ─── Premium Feature Card ─────────────────────────── */
function FeatureCard({
  f,
  index,
  onClick,
}: {
  f: Feature;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group text-left h-full"
    >
      <div
        className="relative p-6 rounded-2xl h-full flex flex-col overflow-hidden transition-all duration-300 border backdrop-blur-sm"
        style={{
          background: `linear-gradient(135deg, ${f.accentLight}80 0%, ${f.accentLight}40 100%)`,
          borderColor: `${f.accent}25`,
          boxShadow: `0 4px 12px ${f.accent}08`,
        }}
      >
        {/* Decorative accent element */}
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          style={{ background: f.accent }}
        />

        {/* Accent dot + Tag */}
        <div className="flex items-center gap-2.5 mb-4 relative z-10">
          <motion.span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: f.accent }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
          />
          <span
            className="text-[8px] font-semibold uppercase tracking-[0.14em]"
            style={{ color: f.accent }}
          >
            {f.tag}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-serif text-[16px] leading-snug font-normal flex-1 mb-4 transition-colors duration-300"
          style={{
            color: f.accent,
            letterSpacing: "-0.01em",
          }}
        >
          {f.title}
        </h3>

        {/* Subtle description hint on hover */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileHover={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.2 }}
          className="text-[11px] leading-relaxed overflow-hidden mb-3"
          style={{ color: `${f.accent}80` }}
        >
          {f.body.substring(0, 60)}...
        </motion.div>

        {/* Bottom action bar */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t relative z-10" style={{ borderColor: `${f.accent}15` }}>
          <span
            className="text-[10px] font-mono tracking-[0.16em]"
            style={{ color: `${f.accent}60` }}
          >
            VIEW
          </span>

          {/* Arrow indicator with animation */}
          <motion.span
            initial={{ opacity: 0, x: -6 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="text-[14px] flex-shrink-0 font-light"
            style={{ color: f.accent }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.button>
  );
}

/* ─── Detail Modal - Fully Responsive ─────────────── */
function DetailModal({
  feature,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total,
}: {
  feature: Feature | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
}) {
  return (
    <AnimatePresence>
      {feature && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="relative w-full max-w-lg sm:max-w-2xl rounded-2xl sm:rounded-3xl border overflow-y-auto max-h-[90vh]"
              style={{
                background: "#FAFAF8",
                borderColor: `${feature.accent}20`,
              }}
            >
              <button
                onClick={onClose}
                className="sticky top-4 sm:absolute sm:top-6 right-4 sm:right-6 z-10 p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 p-5 sm:p-8">
                {/* Left: Text Content */}
                <div className="flex flex-col justify-center order-2 sm:order-1">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: feature.accent }}
                    />
                    <span
                      className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.12em]"
                      style={{ color: feature.accent }}
                    >
                      {feature.tag}
                    </span>
                  </div>

                  <h2
                    className="font-serif text-[24px] sm:text-[32px] leading-tight font-normal mb-3 sm:mb-4"
                    style={{ color: "#1A1814" }}
                  >
                    {feature.title}
                  </h2>

                  <p
                    className="text-[13px] sm:text-[14px] leading-relaxed mb-6 sm:mb-8"
                    style={{ color: "#8A7E6E" }}
                  >
                    {feature.body}
                  </p>

                  {/* Navigation */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-0 border-t sm:border-t-0" style={{ borderColor: `${feature.accent}15` }}>
                    <span
                      className="text-[9px] sm:text-[11px] font-mono tracking-[0.16em]"
                      style={{ color: "#C4BDB5" }}
                    >
                      {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>

                    <div className="flex gap-2 ml-auto sm:ml-0">
                      <button
                        onClick={onPrev}
                        disabled={currentIndex === 0}
                        className="p-2 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={onNext}
                        disabled={currentIndex === total - 1}
                        className="p-2 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="flex items-center justify-center order-1 sm:order-2 mb-4 sm:mb-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={feature.id}
                      src={feature.previewImage}
                      alt={feature.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-[280px] sm:h-[420px] w-auto object-contain"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Section ─────────────────────────────────── */
export function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const selectedIndex = selectedFeature ? features.findIndex(f => f.id === selectedFeature.id) : -1;

  const handleNext = () => {
    if (selectedIndex < features.length - 1) {
      setSelectedFeature(features[selectedIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedFeature(features[selectedIndex - 1]);
    }
  };

  return (
    <section id="features" className="relative py-16" style={{ background: "#FAFAF8" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-300 bg-indigo-500/10 px-3.5 py-1.5 rounded-full mb-5 border border-indigo-500/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-[-0.02em] font-['Cormorant_Garamond',serif]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Everything your family needs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[15px] max-w-xl mx-auto leading-relaxed text-gray-500"
          >
            Purpose-built tools to connect generations, preserve memories, and celebrate every moment.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-4">
          {features.map((f, i) => (
            <FeatureCard
              key={f.id}
              f={f}
              index={i}
              onClick={() => setSelectedFeature(f)}
            />
          ))}
        </div>
      </div>

      <DetailModal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={selectedIndex}
        total={features.length}
      />
    </section>
  );
}