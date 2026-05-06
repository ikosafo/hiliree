"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    id: 9,
    tag: "List View",
    title: "Every relative, organised",
    body: "Searchable by generation, group, or A–Z.",
    accent: "#4B5E7A",
    accentLight: "#F1F4F8",
    previewImage: "/images/features/list.png",
  },
];

/* ─── Feature Row ─────────────────────────────────── */
function FeatureRow({
  f,
  isActive,
  onClick,
  index,
}: {
  f: Feature;
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full text-left group"
    >
      <div
        className="relative flex items-start gap-5 px-5 py-5 rounded-2xl transition-all duration-300"
        style={{
          background: isActive ? f.accentLight : "transparent",
          border: isActive ? `1px solid ${f.accent}18` : "1px solid transparent",
        }}
      >
        {/* Index */}
        <span
          className="flex-shrink-0 font-mono text-[10px] tracking-widest mt-[3px] transition-colors duration-300"
          style={{ color: isActive ? f.accent : "#C4BDB5" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300"
              style={{ color: isActive ? f.accent : "#B0A89E" }}
            >
              {isActive && (
                <motion.span
                  layoutId="tag-dot"
                  className="w-1 h-1 rounded-full"
                  style={{ background: f.accent }}
                />
              )}
              {f.tag}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-serif font-normal text-[17px] leading-snug transition-colors duration-300"
            style={{
              color: isActive ? "#1A1814" : "#9A9088",
              letterSpacing: "-0.01em",
            }}
          >
            {f.title}
          </h3>

          {/* Body — expands when active */}
          <AnimatePresence>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[12.5px] leading-relaxed overflow-hidden"
                style={{ color: "#8A7E6E" }}
              >
                {f.body}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Arrow indicator */}
        <motion.span
          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 mt-1 text-[13px]"
          style={{ color: f.accent }}
        >
          →
        </motion.span>
      </div>
    </motion.button>
  );
}

/* ─── Section ─────────────────────────────────────── */
export function FeaturesSection() {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <section id="features" className="relative py-28" style={{ background: "#FAFAF8" }}>

      {/* Ambient colour wash — shifts per feature */}
      <motion.div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none"
        animate={{ background: `linear-gradient(135deg, #FAFAF8 0%, ${current.accentLight} 100%)` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ opacity: 0.7 }}
      />

      <div className="relative max-w-6xl mx-auto px-6 z-10">

        {/* ── Header — consistent with HowItWorks ── */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] mb-4 text-gray-400">
            Features
          </span>
          

          <h2 className="font-serif text-[38px] lg:text-[50px] leading-tight text-gray-900">
            Everything your family needs
          </h2>

          <p className="mt-4 text-sm max-w-sm mx-auto leading-relaxed text-gray-400">
            Purpose-built tools to connect generations, preserve memories, and celebrate every moment.
          </p>
        </div>

        {/* ── Split layout: List LEFT | Phone RIGHT (sticky) ── */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-10 xl:gap-16">
          
          {/* LEFT — Feature list */}
          <div className="space-y-0.5">
            {features.map((f, i) => (
              <FeatureRow
                key={f.id}
                f={f}
                isActive={i === active}
                onClick={() => setActive(i)}
                index={i}
              />
            ))}
          </div>

          {/* RIGHT — Sticky phone column */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-5">
              
              {/* Step counter */}
              <div className="flex items-center justify-between px-1">
                <span className="font-mono text-[10px] tracking-[0.16em] text-gray-300">
                  {String(active + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                </span>
                <div className="flex gap-1.5">
                  {features.map((f, i) => (
                    <button
                      key={f.id}
                      onClick={() => setActive(i)}
                      className="rounded-full transition-all duration-400"
                      style={{
                        width: i === active ? 18 : 5,
                        height: 5,
                        background: i === active ? current.accent : "#E2DDD8",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Phone image — fixed height, auto width, no background */}
              <div className="relative flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.previewImage}
                    alt={current.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-[520px] w-auto object-contain"
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              {/* Feature label pill below phone */}
              <div className="flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-2 text-[11px] font-medium px-3.5 py-1.5 rounded-full"
                    style={{
                      background: current.accentLight,
                      color: current.accent,
                      border: `1px solid ${current.accent}20`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: current.accent }}
                    />
                    {current.tag}
                  </motion.span>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}