"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const trainingVideos = [
  {
    id: 1,
    title: "Build Your First Family Tree",
    description: "Get started with Hiliree in minutes",
    embedUrl: "https://www.youtube.com/embed/fstMlzz5QH8",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134ef2944f1?w=500&h=300&fit=crop",
    color: "#3B82F6",
    bgGradient: "from-blue-600/30 to-blue-400/10",
  },
  {
    id: 2,
    title: "Connect with Family Members",
    description: "Build meaningful relationships on Hiliree",
    embedUrl: "https://www.youtube.com/embed/a-K3grP8g4g",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    color: "#8B5CF6",
    bgGradient: "from-purple-600/30 to-purple-400/10",
  },
  {
    id: 3,
    title: "Explore Your Family History",
    description: "Discover generations of stories with Hiliree",
    embedUrl: "https://www.youtube.com/embed/vGO7RFiPYFY",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    color: "#EC4899",
    bgGradient: "from-pink-600/30 to-pink-400/10",
  },
  {
    id: 4,
    title: "Share Moments & Celebrate",
    description: "Create lasting memories on Hiliree",
    embedUrl: "https://www.youtube.com/embed/qs_q7GlIZ9s",
    thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop",
    color: "#F59E0B",
    bgGradient: "from-amber-600/30 to-amber-400/10",
  },
  {
    id: 5,
    title: "Master Privacy & Security",
    description: "Keep your Hiliree data protected and secure",
    embedUrl: "https://www.youtube.com/embed/h0SqEnMOF58",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop",
    color: "#10B981",
    bgGradient: "from-green-600/30 to-green-400/10",
  },
];

function CarouselCard({
  video,
  isCenter,
  onClick,
  index,
  totalItems,
}: {
  video: (typeof trainingVideos)[0];
  isCenter: boolean;
  onClick: () => void;
  index: number;
  totalItems: number;
}) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`shrink-0 cursor-pointer transition-all duration-500 ${
        isCenter ? "w-full md:w-[700px]" : "w-48 md:w-56"
      }`}
      animate={{
        scale: isCenter ? 1 : 0.65,
        opacity: isCenter ? 1 : 0.5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div
        className={`relative rounded-3xl overflow-hidden h-96 md:h-[420px] shadow-2xl border border-white/10 group cursor-pointer transition-all duration-500 ${
          isCenter ? "ring-2" : "hover:border-white/20"
        }`}
        style={{
          outline: isCenter ? `2px solid ${video.color}` : "none",
          boxShadow: isCenter
            ? `0 0 60px ${video.color}40, inset 0 0 60px ${video.color}10`
            : "0 20px 40px rgba(0,0,0,0.3)",
        }}
      >
        {/* Video or Thumbnail */}
        <div className="w-full h-full bg-black relative overflow-hidden">
          {isCenter ? (
            // Show actual video player when center
            <iframe
              width="100%"
              height="100%"
              src={video.embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            // Show thumbnail preview when not center
            <>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: `${video.color}`,
                    boxShadow: `0 0 20px ${video.color}60`,
                  }}
                >
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </motion.div>
              </div>
            </>
          )}
        </div>

        {/* Info Overlay */}
        <motion.div
          initial={false}
          animate={{
            opacity: isCenter ? 1 : 0.8,
          }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: video.color }}
            />
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: video.color }}
            >
              Tutorial {index + 1} of {totalItems}
            </span>
          </div>

          <h3 className="text-lg md:text-2xl font-serif text-white mb-1">
            {video.title}
          </h3>

          {isCenter && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-white/70"
            >
              {video.description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function TrainingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + trainingVideos.length) % trainingVideos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % trainingVideos.length);
  };

  const handleSelectCard = (index: number) => {
    setCurrentIndex(index);
  };

  // Mouse drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragEnd = e.clientX;
    const diff = dragStart - dragEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragEnd = e.changedTouches[0].clientX;
    const diff = dragStart - dragEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Get visible cards (left, center, right)
  const getVisibleIndices = () => {
    const total = trainingVideos.length;
    const left = (currentIndex - 1 + total) % total;
    const center = currentIndex;
    const right = (currentIndex + 1) % total;
    return [left, center, right];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] overflow-hidden py-16 md:py-24">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400/60">
            Hiliree Tutorials
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-white mt-3 mb-4">
            Master Hiliree
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Learn how to build, connect, and share your family story with Hiliree
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative"
        >
          {/* Cards Container */}
          <div className="relative flex items-center justify-center gap-4 md:gap-6 mb-12">
            {/* Left Navigation */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="absolute left-0 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Carousel Cards */}
            <div className="flex items-center justify-center gap-4 md:gap-6 w-full overflow-hidden px-16 md:px-20">
              <AnimatePresence mode="popLayout">
                {visibleIndices.map((idx) => (
                  <CarouselCard
                    key={idx}
                    video={trainingVideos[idx]}
                    isCenter={idx === currentIndex}
                    onClick={() => handleSelectCard(idx)}
                    index={idx}
                    totalItems={trainingVideos.length}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Right Navigation */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="absolute right-0 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Progress Indicators - Yellow bar when active, dots when inactive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-3 justify-center flex-wrap items-center"
          >
            {trainingVideos.map((video, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleSelectCard(idx)}
                animate={{
                  width: idx === currentIndex ? 32 : 12,
                  height: 12,
                  opacity: idx === currentIndex ? 1 : 0.4,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                whileHover={{ opacity: 0.9 }}
                className="rounded-full transition-all"
                style={{
                  background:
                    idx === currentIndex ? "#FBBF24" : "rgba(251, 191, 36, 0.2)",
                  boxShadow:
                    idx === currentIndex ? `0 0 12px #FBBF24` : "none",
                }}
              />
            ))}
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8 text-white/40 text-sm"
          >
            <p>Click the arrows or indicators to navigate tutorials</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}