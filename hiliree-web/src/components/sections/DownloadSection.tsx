"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Shield, ArrowDown } from "lucide-react";

export function DownloadSection() {
  return (
    <section id="download" className="relative py-16 md:py-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #FAFAF8 0%, #F5F3F0 100%)" }}>
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6366f1] bg-[#6366f1]/8 px-4 py-1.5 rounded-full mb-6 border border-[#6366f1]/15"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-[#6366f1]"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available Now
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['Cormorant_Garamond',serif] text-[38px] md:text-[48px] font-bold text-[#1a1530] mb-4 leading-[1.1] tracking-[-0.02em]"
          >
            Start building your<br />family&apos;s legacy today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] text-[#6b6488] max-w-sm mx-auto font-light mb-8"
          >
            Free to download. Private by design. Built to last generations.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-1.5 text-[#6b6488]">
              <Shield size={12} className="text-emerald-500" />
              <span className="text-[10px] font-medium">Private & Secure</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#DDDAE8]" />
            <div className="flex items-center gap-1 text-[#6b6488]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-amber-500" fill="currentColor" />
                ))}
              </div>
              <span className="text-[10px] font-medium">4.9 on App store</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#DDDAE8]" />
            <div className="flex items-center gap-1.5 text-[#6b6488]">
              <ArrowDown size={12} className="text-[#6366f1]" />
              <span className="text-[10px] font-medium">Free Download</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-row gap-3 items-center justify-center pt-2"
          >
            {/* Apple App Store */}
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit"
            >
              <Link
                href="https://apps.apple.com/app/hiliree/id6747322444"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl transition-all duration-300 min-w-[160px]"
                style={{
                  background: "linear-gradient(145deg, #2C2C2E 0%, #1C1C1E 100%)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] font-medium text-gray-400 uppercase tracking-wider font-poppins leading-none">
                    Download on
                  </div>
                  <div className="text-[14px] font-semibold text-white leading-tight font-poppins">
                    App Store
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Google Play */}
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit"
            >
              <Link
                href="https://play.google.com/store/apps/details?id=com.rootaft.hiliree_mobile&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl transition-all duration-300 min-w-[160px]"
                style={{
                  background: "linear-gradient(145deg, #2C2C2E 0%, #1C1C1E 100%)",
                  borderColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="white">
                  <path d="M3.18 23.76c.29.16.62.24.97.21l12.67-7.31-2.78-2.78-10.86 9.88zM20.7 10.37L17.85 8.7 14.74 11.8l3.13 3.14 2.84-1.64c.81-.47.81-1.46-.01-1.93zM2.15 1.09A1.01 1.01 0 0 0 2 1.6v20.8c0 .22.05.42.15.57l.08.08L14.01 11.3v-.17L2.23 1.01l-.08.08zM3.18.24L15.85 7.54l-2.78 2.78L2.21.44c.33-.26.76-.31 1.08-.16l-.11-.04z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] font-medium text-gray-400 uppercase tracking-wider font-poppins leading-none">
                    Get it on
                  </div>
                  <div className="text-[14px] font-semibold text-white leading-tight font-poppins">
                    Google Play
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Footer text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-[10px] uppercase tracking-[0.2em] text-[#9b96b5] font-medium"
          >
            Join thousands of families
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}