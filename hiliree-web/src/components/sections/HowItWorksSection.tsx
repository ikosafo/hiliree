"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    header: "The Root of Your Legacy",
    description: "Start with yourself. Every family story needs a beginning, and you are the foundation of this digital archive.",
    didYouKnow: "Strong family friendships in childhood are linked to greater happiness and confidence later in life.",
    color: "#6366f1",
    accentColor: "#818cf8",
    imageUrl: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    number: "02",
    title: "Add Your Relatives",
    header: "Connections at a Glance",
    description: "Place parents, siblings, spouse, and children in their correct family lines. Siblings are automatically sorted by birthday.",
    didYouKnow: "The deepest recorded family tree traces back over 80 generations, over 2,500 years of continuous history.",
    color: "#7c3aed",
    accentColor: "#a78bfa",
    imageUrl: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    number: "03",
    title: "Send Handshake Invites",
    header: "Gather the Circle",
    description: "Share an invite link from a relative's profile. Both sides must accept before the connection is official.",
    didYouKnow: "Mutual consent connections ensure only verified relatives see your shared tree, privacy at every root.",
    color: "#d946ef",
    accentColor: "#e879f9",
    imageUrl: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
  {
    number: "04",
    title: "Share & Discover",
    header: "Uncover Patterns",
    description: "Post Moments, celebrate birthdays, and uncover family patterns through the Life Chart and insights.",
    didYouKnow: "Your family name Phoenix symbolizes rebirth and resilience, rising stronger after every fall.",
    color: "#f59e0b",
    accentColor: "#fbbf24",
    imageUrl: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  },
];

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
export function HowItWorksSection() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const startY = useRef(0);
  const isDragging = useRef(false);

  const handleNext = () => setIndex((prev) => (prev + 1) % steps.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + steps.length) % steps.length);

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    isDragging.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diffX = e.clientX - startX.current;
    const diffY = e.clientY - startY.current;
    const threshold = 50;
    if (diffY > threshold || diffX < -threshold) handleNext();
    else if (diffY < -threshold || diffX > threshold) handlePrev();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diffX = e.changedTouches[0].clientX - startX.current;
    const diffY = e.changedTouches[0].clientY - startY.current;
    const threshold = 50;
    if (diffY > threshold || diffX < -threshold) handleNext();
    else if (diffY < -threshold || diffX > threshold) handlePrev();
  };

  const visibleSteps = [0, 1, 2, 3].map((offset) => (index + offset) % steps.length);

  return (
    <section
    id="how-it-works"
      className="relative py-20 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A1A28 0%, #1E1E30 50%, #252540 100%)" }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a5b4fc] bg-[#6366f1]/10 px-3.5 py-1.5 rounded-full mb-5 border border-[#6366f1]/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
            How It Works
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-[-0.02em] font-['Cormorant_Garamond',serif]">
            Build your family tree
          </h2>
          <p className="text-sm md:text-base text-white/35 max-w-md mx-auto font-light">
            Four simple steps to create your living family archive
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-5 items-start">
          {/* LEFT: Stacked cards */}
          <div className="lg:col-span-8 relative h-[460px] sm:h-[500px]">
            <AnimatePresence mode="popLayout">
              {steps.map((step, i) => {
                const visibleIndex = visibleSteps.indexOf(i);
                if (visibleIndex === -1) return null;

                let zIndex = 40 - visibleIndex * 10;
                let yOffset = 0;
                let scale = 1;
                let opacity = 1;
                let rotate = 0;
                let xOffset = 0;

                switch (visibleIndex) {
                  case 0:
                    yOffset = 0; scale = 1; opacity = 1; rotate = 0; xOffset = 0;
                    break;
                  case 1:
                    yOffset = 12; scale = 0.93; rotate = -3; xOffset = 10;
                    break;
                  case 2:
                    yOffset = 22; scale = 0.87; rotate = -5; xOffset = 18;
                    break;
                  case 3:
                    yOffset = 30; scale = 0.82; rotate = -6; xOffset = 24;
                    break;
                }

                const isCurrent = visibleIndex === 0;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 50, rotate: -5, x: 20 }}
                    animate={{
                      y: yOffset,
                      x: xOffset,
                      scale: scale,
                      opacity: opacity,
                      zIndex: zIndex,
                      rotate: rotate,
                    }}
                    exit={{ opacity: 0, y: -50, rotate: 5, x: -20, transition: { duration: 0.3 } }}
                    transition={{ type: "spring", stiffness: 200, damping: 26 }}
                    onClick={() => isCurrent ? handleNext() : setIndex(i)}
                    className="absolute inset-x-0 mx-auto cursor-pointer"
                    style={{
                      width: "88%",
                      transformOrigin: "top left",
                    }}
                  >
                    <div
                      className="relative w-full overflow-hidden rounded-2xl"
                      style={{
                        background: isCurrent ? "#FFFFFF" : "#E8E8EC",
                        border: isCurrent
                          ? `1px solid ${step.color}20`
                          : "1px solid rgba(0,0,0,0.06)",
                        boxShadow: isCurrent
                          ? `0 20px 40px -10px rgba(0,0,0,0.15)`
                          : "none",
                      }}
                    >
                      {/* Greyed out image area for stacked cards */}
                      {!isCurrent && (
                        <div className="relative h-32 sm:h-36 overflow-hidden">
                          <div 
                            className="w-full h-full"
                            style={{ background: "#D8D8DE" }}
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background: `linear-gradient(135deg, rgba(0,0,0,0.03) 0%, transparent 50%)`,
                            }}
                          />
                          {/* Faint step badge */}
                          <div className="absolute top-3 left-3">
                            <div
                              className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-lg"
                              style={{
                                background: "rgba(0,0,0,0.05)",
                                color: "rgba(0,0,0,0.25)",
                              }}
                            >
                              Step {step.number}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Active card content */}
                      {isCurrent && (
                        <>
                          {/* DID YOU KNOW - First */}
                          <div className="px-5 sm:px-6 pt-5 pb-3">
                            <div
                              className="rounded-lg p-3 flex items-start gap-2.5"
                              style={{
                                background: `${step.color}08`,
                                border: `1px solid ${step.color}15`,
                              }}
                            >
                              <span className="text-sm mt-0.5 flex-shrink-0">💡</span>
                              <div>
                                <span
                                  className="text-[9px] font-bold uppercase tracking-[0.15em] block mb-0.5"
                                  style={{ color: step.color }}
                                >
                                  Did you know?
                                </span>
                                <p className="text-[11px] leading-relaxed font-light text-gray-600">
                                  {step.didYouKnow}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* IMAGE - Second */}
                          <div className="relative h-36 sm:h-40 mx-5 sm:mx-6 rounded-xl overflow-hidden">
                            <Image
                              src={step.imageUrl}
                              alt={step.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 500px"
                              quality={90}
                            />
                            <div
                              className="absolute inset-0"
                              style={{
                                background: `linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.9) 100%)`,
                              }}
                            />
                            <div className="absolute top-3 left-3">
                              <div
                                className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-lg"
                                style={{
                                  background: step.color,
                                  color: "#fff",
                                  boxShadow: `0 4px 12px ${step.color}30`,
                                }}
                              >
                                Step {step.number}
                              </div>
                            </div>
                          </div>

                          {/* CONTENT - Last */}
                          <div className="px-5 sm:px-6 pt-4 pb-5">
                            <h3 className="text-xl sm:text-2xl font-bold mb-1 tracking-[-0.01em] text-gray-900">
                              {step.title}
                            </h3>
                            <p
                              className="text-[11px] sm:text-xs font-semibold mb-2 uppercase tracking-[0.1em]"
                              style={{ color: step.color }}
                            >
                              {step.header}
                            </p>
                            <p className="text-[13px] leading-relaxed font-light text-gray-500">
                              {step.description}
                            </p>

                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1 }}
                              className="mt-3 flex items-center gap-2"
                              style={{ color: step.color }}
                            >
                              <span className="text-[10px] font-medium opacity-70">Tap to continue</span>
                              <motion.svg
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-3 h-3 opacity-70"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </motion.svg>
                            </motion.div>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* RIGHT: Step navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20 block mb-4 px-2">
              Select Step
            </span>

            <div className="space-y-1">
              {steps.map((step, i) => (
                <motion.button
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  onClick={() => setIndex(i)}
                  className="w-full group relative p-3 rounded-xl cursor-pointer transition-all duration-300 text-left"
                  style={{
                    background: i === index ? `rgba(255,255,255,0.08)` : "transparent",
                    border: i === index ? `1px solid rgba(255,255,255,0.1)` : "1px solid transparent",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all duration-300"
                      style={{
                        background: i === index ? step.color : "rgba(255,255,255,0.05)",
                        color: i === index ? "#FFFFFF" : "rgba(255,255,255,0.3)",
                      }}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-[12px] font-semibold transition-colors duration-300"
                        style={{ color: i === index ? "#FFFFFF" : "rgba(255,255,255,0.4)" }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-[10px] font-medium transition-colors duration-300 mt-0.5"
                        style={{ color: i === index ? step.accentColor : "rgba(255,255,255,0.2)" }}
                      >
                        {step.header}
                      </p>
                    </div>

                    {i === index && (
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: step.accentColor }} />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Progress dots + arrows */}
            <div className="flex items-center justify-between mt-5 px-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.05] transition-all duration-200"
              >
                <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center gap-1.5">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === index ? "20px" : "5px",
                      height: "5px",
                      background: i === index ? step.color : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.05] transition-all duration-200"
              >
                <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}