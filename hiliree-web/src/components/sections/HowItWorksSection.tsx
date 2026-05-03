"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    header: "The Root of Your Legacy",
    description:
      "Start with yourself. Every family story needs a beginning, and you are the foundation of this digital archive.",
    didYouKnow:
      "Strong family friendships in childhood are linked to greater happiness and confidence later in life.",
    color: "#6366f1",
    accentColor: "#818cf8",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=400&fit=crop&auto=format&q=80",
  },
  {
    number: "02",
    title: "Add Your Relatives",
    header: "Connections at a Glance",
    description:
      "Place parents, siblings, spouse, and children in their correct family lines. Siblings are automatically sorted by birthday.",
    didYouKnow:
      "The deepest recorded family tree traces back over 80 generations — over 2,500 years of continuous history.",
    color: "#8b5cf6",
    accentColor: "#a78bfa",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop&auto=format&q=80",
  },
  {
    number: "03",
    title: "Send Handshake Invites",
    header: "Gather the Circle",
    description:
      "Share an invite link from a relative's profile. Both sides must accept before the connection is official — your privacy, protected.",
    didYouKnow:
      "Mutual consent connections ensure only verified relatives see your shared tree, privacy at every root.",
    color: "#d946ef",
    accentColor: "#e879f9",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop&auto=format&q=80",
  },
  {
    number: "04",
    title: "Share & Discover",
    header: "Uncover Patterns",
    description:
      "Post Moments, celebrate birthdays, and uncover family patterns through the Life Chart and insights.",
    didYouKnow:
      "Your family name Phoenix symbolizes rebirth and resilience — rising stronger after every fall.",
    color: "#f59e0b",
    accentColor: "#fbbf24",
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=400&fit=crop&auto=format&q=80",
  },
];

export function HowItWorksSection() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const startY = useRef(0);
  const isDragging = useRef(false);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

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

    if (diffY > threshold || diffX < -threshold) {
      handleNext();
    } else if (diffY < -threshold || diffX > threshold) {
      handlePrev();
    }
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

    if (diffY > threshold || diffX < -threshold) {
      handleNext();
    } else if (diffY < -threshold || diffX > threshold) {
      handlePrev();
    }
  };

  // Calculate visible steps based on current index
  const visibleSteps = [0, 1, 2, 3].map((offset) => (index + offset) % steps.length);

  return (
    <section
      className="relative bg-[#0a0a0f] py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle ambient glow */}
      <motion.div
        animate={{ backgroundColor: `${steps[index].color}06` }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12" // Increased from mb-10 to mb-12 for more space
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-400/60">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mt-2 tracking-tight">
            Build your family tree
          </h2>
          <p className="text-sm text-white/25 mt-2 max-w-sm mx-auto">
            Four simple steps to create your living family archive
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* LEFT: Stacked cards */}
          <div className="lg:col-span-8 relative h-[520px] sm:h-[540px] w-full perspective-[1000px]"> {/* Increased height from h-[480px]/h-[500px] */}
            <AnimatePresence mode="popLayout">
              {steps.map((step, i) => {
                const visibleIndex = visibleSteps.indexOf(i);
                
                // Only render if step is in visibleSteps
                if (visibleIndex === -1) return null;

                let zIndex = 40 - visibleIndex * 10;
                let yOffset = 0;
                let scale = 1;
                let opacity = 1;
                let rotate = 0;
                let xOffset = 0;

                switch (visibleIndex) {
                  case 0: // Current
                    yOffset = 0; scale = 1; opacity = 1; rotate = 0; xOffset = 0;
                    break;
                  case 1: // Next
                    yOffset = 10; scale = 0.93; opacity = 0.6; rotate = -3; xOffset = 8; // Increased opacity from 0.5
                    break;
                  case 2: // Next next
                    yOffset = 20; scale = 0.87; opacity = 0.35; rotate = -5; xOffset = 14; // Increased opacity from 0.25
                    break;
                  case 3: // Furthest
                    yOffset = 28; scale = 0.82; opacity = 0.2; rotate = -6; xOffset = 18; // Increased opacity from 0.1
                    break;
                }

                const isCurrent = visibleIndex === 0;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 40, rotate: -4, x: 10 }}
                    animate={{
                      y: yOffset,
                      x: xOffset,
                      scale: scale,
                      opacity: opacity,
                      zIndex: zIndex,
                      rotate: rotate,
                    }}
                    exit={{ opacity: 0, y: -50, rotate: 4, x: -10, transition: { duration: 0.3 } }}
                    transition={{ type: "spring", stiffness: 180, damping: 22 }}
                    onClick={isCurrent ? handleNext : () => setIndex(i)}
                    className="absolute inset-x-0 mx-auto cursor-pointer"
                    style={{
                      width: "100%",
                      transformOrigin: "top left",
                    }}
                  >
                    <div
                      className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
                      style={{
                        background: isCurrent
                          ? "linear-gradient(160deg, #1a1a2e 0%, #14141f 50%, #12121a 100%)"
                          : "linear-gradient(160deg, #181820 0%, #121218 100%)",
                        border: isCurrent
                          ? `1px solid rgba(255,255,255,0.1)`
                          : "1px solid rgba(255,255,255,0.05)",
                        boxShadow: isCurrent
                          ? `0 20px 50px -12px ${step.color}15, 0 0 0 1px ${step.color}08`
                          : "0 8px 20px -6px rgba(0,0,0,0.5)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Active accent line */}
                      {isCurrent && (
                        <div
                          className="absolute top-0 left-0 right-0 h-[1.5px] z-20"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${step.accentColor}50, transparent)`,
                          }}
                        />
                      )}

                      {/* Image Section - Increased height */}
                      <div className="relative h-48 sm:h-52 overflow-hidden"> {/* Increased from h-40/h-44 to h-48/h-52 */}
                        <img
                          src={step.imageUrl}
                          alt={step.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(180deg, transparent 50%, ${isCurrent ? '#1a1a2e' : '#181820'} 100%)`,
                          }}
                        />

                        {/* Step badge */}
                        <div className="absolute top-4 left-4">
                          <span
                            className="text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1.5 rounded-full backdrop-blur-md"
                            style={{
                              background: isCurrent ? `${step.color}30` : "rgba(0,0,0,0.5)",
                              color: isCurrent ? "#fff" : "rgba(255,255,255,0.5)",
                              border: `1px solid ${isCurrent ? step.color + '50' : 'rgba(255,255,255,0.1)'}`,
                              boxShadow: isCurrent ? `0 4px 12px ${step.color}20` : "none",
                            }}
                          >
                            Step {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Content Section - Added pb-10 for bottom padding */}
                      <div className="p-6 sm:p-7 pb-10 sm:pb-12 relative"> {/* Added pb-10 and sm:pb-12 */}
                        {isCurrent && (
                          <div
                            className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-[0.04] pointer-events-none"
                            style={{ background: `radial-gradient(circle, ${step.accentColor}, transparent 70%)` }}
                          />
                        )}

                        {/* Title */}
                        <h3
                          className="text-2xl sm:text-3xl font-serif mb-1.5 tracking-tight"
                          style={{
                            color: isCurrent ? "#fff" : "rgba(255,255,255,0.45)",
                            fontFamily: "'Playfair Display', Georgia, serif",
                          }}
                        >
                          {step.title}
                        </h3>

                        {/* Header subtitle */}
                        <p
                          className="text-sm font-medium mb-3"
                          style={{
                            color: isCurrent ? step.accentColor : "rgba(255,255,255,0.3)",
                          }}
                        >
                          {step.header}
                        </p>

                        {/* Description */}
                        <p
                          className="text-[13px] leading-relaxed mb-4 font-light"
                          style={{
                            color: isCurrent ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
                          }}
                        >
                          {step.description}
                        </p>

                        {/* Did You Know */}
                        <div
                          className="rounded-xl p-3.5"
                          style={{
                            background: isCurrent
                              ? `${step.color}08`
                              : "rgba(255,255,255,0.015)",
                            border: isCurrent
                              ? `1px solid ${step.color}15`
                              : "1px solid rgba(255,255,255,0.03)",
                          }}
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="text-base flex-shrink-0 mt-0.5">💡</span>
                            <div>
                              <span
                                className="text-[10px] font-bold uppercase tracking-wider block mb-1"
                                style={{
                                  color: isCurrent ? step.accentColor : "rgba(255,255,255,0.2)",
                                }}
                              >
                                Did you know?
                              </span>
                              <p
                                className="text-[11px] italic leading-snug"
                                style={{
                                  color: isCurrent ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)",
                                }}
                              >
                                {step.didYouKnow}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Tap indicator - now has space from pb-10 above */}
                        {isCurrent && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="absolute bottom-3 left-1/2 -translate-x-1/2"
                          >
                            <span className="text-[9px] font-medium uppercase tracking-wider text-white/10">
                              Tap to continue
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* RIGHT: Compact sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-2"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-2">
              Your Journey
            </span>

            {steps.map((step, i) => (
              <motion.button
                key={step.number}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                onClick={() => setIndex(i)}
                className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 text-left"
                style={{
                  background:
                    i === index
                      ? `${step.color}0c`
                      : "rgba(255,255,255,0.02)",
                  border:
                    i === index
                      ? `1px solid ${step.color}25`
                      : "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-mono font-bold transition-all duration-300"
                  style={{
                    background:
                      i === index
                        ? `${step.color}20`
                        : "rgba(255,255,255,0.03)",
                    color: i === index ? step.accentColor : "rgba(255,255,255,0.25)",
                    border:
                      i === index
                        ? `1px solid ${step.color}35`
                        : "1px solid rgba(255,255,255,0.05)",
                    boxShadow: i === index ? `0 0 15px ${step.color}08` : "none",
                  }}
                >
                  {step.number}
                </div>

                <div className="flex-1 min-w-0">
                  <h4
                    className="text-[13px] font-medium transition-colors duration-300"
                    style={{
                      color: i === index ? "#fff" : "rgba(255,255,255,0.45)",
                    }}
                  >
                    {step.title}
                  </h4>
                </div>

                {i === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${step.color}15` }}
                  >
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={step.accentColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            ))}

            {/* Navigation arrows */}
            <div className="flex gap-2 mt-3 pt-3 border-t border-white/[0.03]">
              <button
                onClick={handlePrev}
                className="flex-1 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.03] transition-all"
              >
                <svg className="w-3.5 h-3.5 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="flex-1 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.03] transition-all"
              >
                <svg className="w-3.5 h-3.5 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress dots */}
            <div className="hidden lg:flex items-center justify-center gap-2 mt-3">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="h-1.5 rounded-full transition-all duration-400"
                  style={{
                    width: i === index ? "22px" : "5px",
                    background:
                      i === index
                        ? steps[index].accentColor
                        : "rgba(255,255,255,0.12)",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile dots */}
        <div className="flex lg:hidden items-center justify-center gap-2.5 mt-8">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all duration-400"
              style={{
                width: i === index ? "32px" : "6px",
                background:
                  i === index
                    ? steps[index].accentColor
                    : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}