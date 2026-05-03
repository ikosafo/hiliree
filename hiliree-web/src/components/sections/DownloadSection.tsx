"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Shield, ArrowDown } from "lucide-react";

/* ─── Apple Logo ──────────────────────────────────── */
function AppleLogo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
  );
}

/* ─── Gradient Play Button Logo ────────────────────────────── */
function GradientPlayLogo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 64 64" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="playGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="playGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      {/* Play triangle */}
      <polygon points="20,12 20,52 48,32" fill="url(#playGradient1)" />
      <polygon points="48,32 20,52 34,42" fill="url(#playGradient2)" opacity="0.8" />
    </svg>
  );
}

export function DownloadSection() {
  return (
    <section 
      id="download" 
      className="relative py-28 overflow-hidden"
      style={{ background: "#f5f5f7" }}
    >
      {/* ── Subtle grid pattern ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Radial glow top center ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── Radial glow bottom right ── */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 100% 100%, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative section-wrapper z-10">
        <motion.div 
          initial={{ opacity: 0, y: 32 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
          className="text-center"
        >
          {/* ── Small label ── */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-600 mb-6"
          >
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            Get Started Today
          </motion.span>

          {/* ── Main heading ── */}
          <h2 className="font-serif text-[40px] lg:text-[56px] leading-[1.08] text-gray-900 mb-4">
            Ready to start your{" "}
            <span className="relative inline-block">
              family tree
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                style={{ transformOrigin: "left" }}
              />
            </span>
            ?
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed mt-4 mb-12"
          >
            Download Hiliree today and begin preserving your family&apos;s legacy for generations to come.
          </motion.p>

          {/* ── Trust badges - Above buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <Shield size={14} className="text-emerald-500" />
              <span className="text-[12px] font-medium">Private & Secure</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1.5 text-gray-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-amber-500" fill="currentColor" />
                ))}
              </div>
              <span className="text-[12px] font-medium">4.9 Rating</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-600">
              <ArrowDown size={14} className="text-blue-600" />
              <span className="text-[12px] font-medium">Free Download</span>
            </div>
          </motion.div>

          {/* ── App store buttons ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {/* App Store Button */}
            <Link 
              href="#" 
              className="group relative flex items-center gap-3.5 bg-gray-900 text-white px-7 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-gray-900/20"
            >
              <AppleLogo className="w-[22px] h-[22px] flex-shrink-0" />
              <div className="text-left">
                <div className="text-[10px] text-gray-400 font-medium tracking-wide">Download on the</div>
                <div className="text-[15px] font-bold leading-tight">App Store</div>
              </div>
            </Link>

            {/* Google Play Button */}
            <Link 
              href="#" 
              className="group relative flex items-center gap-3.5 bg-gray-900 text-white px-7 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-gray-900/20"
            >
              <GradientPlayLogo className="w-[22px] h-[22px] flex-shrink-0" />
              <div className="text-left">
                <div className="text-[10px] text-gray-400 font-medium tracking-wide">Get it on</div>
                <div className="text-[15px] font-bold leading-tight">Google Play</div>
              </div>
            </Link>
          </motion.div>

          {/* ── Scroll indicator ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Join thousands of families</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-px h-6 bg-gradient-to-b from-gray-400 to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}