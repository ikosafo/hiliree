"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const trainingVideos = [
  {
    id: 1,
    title: "How to Sign In to the Hiliree App",
    description: "Get started with your family journey in minutes",
    embedUrl: "https://www.youtube.com/embed/fstMlzz5QH8",
    thumbnail: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Building Your Tree",
    description: "Create your family tree from the ground up",
    embedUrl: "https://www.youtube.com/embed/a-K3grP8g4g",
    thumbnail: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    color: "#a78bfa",
  },
  {
    id: 3,
    title: "Expanding Tree",
    description: "Add relatives and grow your family connections",
    embedUrl: "https://www.youtube.com/embed/vGO7RFiPYFY",
    thumbnail: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    color: "#e879f9",
  },
  {
    id: 4,
    title: "Getting Familiar with Other Features",
    description: "Explore messaging, privacy tools, and more",
    embedUrl: "https://www.youtube.com/embed/qs_q7GlIZ9s",
    thumbnail: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    color: "#fbbf24",
  },
  {
    id: 5,
    title: "Adding Moments & Events",
    description: "Share memories and celebrate family milestones",
    embedUrl: "https://www.youtube.com/embed/h0SqEnMOF58",
    thumbnail: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    color: "#34d399",
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
        className="relative rounded-3xl overflow-hidden h-80 md:h-[380px] shadow-2xl group cursor-pointer transition-all duration-500"
        style={{
          border: isCenter ? `2px solid ${video.color}` : `1px solid ${video.color}40`,
          boxShadow: isCenter
            ? `0 0 60px ${video.color}30, inset 0 0 60px ${video.color}08`
            : `0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px ${video.color}20`,
        }}
      >
        <div className="w-full h-full bg-black relative overflow-hidden">
          {isCenter ? (
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
            <>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: video.color,
                    boxShadow: `0 0 20px ${video.color}60`,
                  }}
                >
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </motion.div>
              </div>
            </>
          )}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: isCenter ? 1 : 0.8 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 md:p-6"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: video.color }}
            />
            <span
              className="text-[10px] font-bold uppercase tracking-wider"
              style={{ color: video.color }}
            >
              Tutorial {index + 1} of {totalItems}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-0.5">
            {video.title}
          </h3>
          {isCenter && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-white/60"
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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = dragStart - e.clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? handleNext() : handlePrev();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = dragStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? handleNext() : handlePrev();
    }
  };

  const getVisibleIndices = () => {
    const total = trainingVideos.length;
    return [
      (currentIndex - 1 + total) % total,
      currentIndex,
      (currentIndex + 1) % total,
    ];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section id="training" className="relative bg-gradient-to-b from-[#252540] via-[#1E1E30] to-[#1A1A28] overflow-hidden py-14 md:py-16">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#fbbf24] bg-[#fbbf24]/10 px-4 py-1.5 rounded-full mb-4 border border-[#fbbf24]/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
            Hiliree Tutorials
          </motion.span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-[-0.02em] font-['Cormorant_Garamond',serif]">
            Master Hiliree
          </h2>
          <p className="text-base text-white/40 max-w-xl mx-auto font-light">
            Learn how to build, connect, and share your family story
          </p>
        </motion.div>

        <motion.div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative"
        >
          <div className="relative flex items-center justify-center gap-4 md:gap-6 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="absolute left-0 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex items-center justify-center gap-3 md:gap-4 w-full overflow-hidden px-14 md:px-16">
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

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="absolute right-0 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-2 justify-center flex-wrap items-center"
          >
            {trainingVideos.map((video, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleSelectCard(idx)}
                animate={{
                  width: idx === currentIndex ? 28 : 8,
                  height: 8,
                  opacity: idx === currentIndex ? 1 : 0.4,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                whileHover={{ opacity: 0.9 }}
                className="rounded-full transition-all"
                style={{
                  background: idx === currentIndex ? video.color : `${video.color}40`,
                  boxShadow: idx === currentIndex ? `0 0 10px ${video.color}60` : "none",
                }}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-6 text-white/30 text-xs font-light"
          >
            Click arrows or indicators to navigate tutorials
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}