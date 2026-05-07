"use client";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Users, Camera, GitBranch } from "lucide-react";
import { motion, type Transition } from "framer-motion";
import { COLORS } from "@/components/common/ColorGuidePage";

/* ─────────────────────────────────────────────
   Shared easing curve
───────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────
   Stagger helper with more dynamic feel
───────────────────────────────────────────── */
const stagger = (i: number) => ({
  initial: { opacity: 0, y: 28, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { delay: i * 0.12, duration: 0.7, ease: EASE } satisfies Transition,
});

const floatIn = (dir: "left" | "right", delay: number) => ({
  initial: { opacity: 0, x: dir === "left" ? -40 : 40, y: 20, scale: 0.9 },
  animate: { opacity: 1, x: 0, y: 0, scale: 1 },
  transition: { delay, duration: 0.7, ease: EASE } satisfies Transition,
});

/* ─────────────────────────────────────────────
   Organic blob
───────────────────────────────────────────── */
function Blob({
  className,
  color,
  animate = true,
}: {
  className?: string;
  color: string;
  animate?: boolean;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{ background: color }}
      animate={animate ? { 
        y: [0, 40, 0],
        x: [0, 20, 0],
        opacity: [0.3, 0.5, 0.3],
      } : {}}
      transition={animate ? { duration: 10, repeat: Infinity, ease: "easeInOut" } : {}}
    />
  );
}

/* ─────────────────────────────────────────────
   Enhanced floating stat card with better hover
───────────────────────────────────────────── */
function FloatingCard({
  icon: Icon,
  bg,
  iconColor,
  title,
  sub,
  motionProps,
  className,
}: {
  icon: any;
  bg: string;
  iconColor: string;
  title: string;
  sub: string;
  motionProps: object;
  className?: string;
}) {
  return (
    <motion.div
      {...motionProps}
      whileHover={{ 
        y: -8,
        boxShadow: "0 24px 48px rgba(0,0,0,0.15)",
        scale: 1.05,
      }}
      className={`absolute z-20 bg-white/95 backdrop-blur-xl border border-white/70
        rounded-2xl px-4 py-3 flex items-center gap-3 min-w-[160px] cursor-default
        transition-all duration-300 hover:border-white/90 group ${className}`}
      style={{
        boxShadow: "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)"
      }}
    >
      <motion.div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
        style={{ background: bg }}
        whileHover={{ rotate: 8 }}
      >
        <Icon size={16} style={{ color: iconColor }} strokeWidth={2.2} />
      </motion.div>
      <div className="flex-1">
        <p className="text-[12.5px] font-bold text-gray-900 leading-tight font-poppins">{title}</p>
        <p className="text-[9px] text-gray-400 leading-tight mt-0.5 font-poppins">{sub}</p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Ring decoration component
───────────────────────────────────────────── */
function PhoneRings({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      {/* Outer ring */}
      <motion.div
        className="absolute rounded-full border opacity-[0.06]"
        style={{ 
          borderColor: COLORS.brand[6],
          width: "110%",
          height: "110%",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      {/* Inner ring */}
      <motion.div
        className="absolute rounded-full border opacity-[0.1]"
        style={{ 
          borderColor: COLORS.brand[6],
          width: "92%",
          height: "92%",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main hero
───────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ 
        background: `linear-gradient(155deg, #FAFAF8 0%, #F2EDE6 55%, ${COLORS.brand[6]}0a 100%)`
      }}
    >
      {/* ── Animated atmospheric blobs ── */}
      <Blob 
        className="w-[600px] h-[600px] -top-32 -right-40 opacity-30" 
        color={`${COLORS.brand[6]}14`}
        animate={true} 
      />
      <Blob 
        className="w-[500px] h-[500px] bottom-0 -left-40 opacity-25" 
        color="#FDE8D8" 
        animate={true} 
      />
      <Blob 
        className="w-[320px] h-[320px] top-1/2 left-1/3 opacity-15" 
        color={`${COLORS.brand[5]}10`}
        animate={true} 
      />

      {/* ── Fine grain texture overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* ── Decorative arc ── */}
      <div
        className="absolute right-0 top-0 w-[56%] h-full pointer-events-none hidden lg:block"
        style={{
          background: `radial-gradient(ellipse 70% 80% at 100% 50%, ${COLORS.brand[6]}1f 0%, transparent 70%)`,
        }}
      />

      <div className="section-wrapper relative w-full grid lg:grid-cols-[1fr_480px] gap-12 xl:gap-24 items-center py-28 lg:py-32">

        {/* ════════════════════════════════
            LEFT — COPY
        ════════════════════════════════ */}
        <div className="space-y-8 max-w-2xl">

          {/* Enhanced pill badge */}
          <motion.div {...stagger(0)}>
            <motion.span
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-full border font-poppins backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default"
              style={{
                background: `linear-gradient(135deg, ${COLORS.brand[5]}14 0%, ${COLORS.brand[5]}0a 100%)`,
                borderColor: `${COLORS.brand[5]}33`,
                color: COLORS.brand[5],
              }}
              whileHover={{ y: -2 }}
            >
              <motion.span 
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: COLORS.brand[5] }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Private Family Connection
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...stagger(1)}
            className="font-['Cormorant_Garamond',serif] leading-[1.05] tracking-[-0.02em] font-bold mb-6"
            style={{ 
              fontSize: "clamp(3rem, 5.5vw, 4.5rem)",
              color: COLORS.brand[6],
            }}
          >
            Your Family.<br />
            <em style={{ color: COLORS.warning[6], fontStyle: "italic" }}>Your Story.</em><br />
            Nobody Else&apos;s.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...stagger(2)}
            className="text-[18px] leading-[1.8] max-w-[480px] font-poppins font-light"
            style={{ color: COLORS.text[2] }}
          >
            Hiliree is the private family app to build your tree, preserve
            memories, and stay connected{" "}
            <motion.span 
              className="font-semibold bg-gradient-to-r text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${COLORS.brand[5]}, ${COLORS.brand[4]})`,
              }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              across generations.
            </motion.span>
          </motion.p>

          {/* App store buttons */}
          <motion.div 
            {...stagger(3)} 
            className="flex flex-row gap-3 items-center pt-4"
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
                  background: `linear-gradient(145deg, ${COLORS.brand[6]} 0%, ${COLORS.brand[5]} 100%)`,
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
                  background: `linear-gradient(145deg, ${COLORS.brand[6]} 0%, ${COLORS.brand[5]} 100%)`,
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

          {/* Trust signal */}
          <motion.div
            {...stagger(4)}
            className="inline-flex items-center gap-3 text-[13px] font-poppins pt-2"
            style={{ color: COLORS.text[2] }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ShieldCheck size={16} style={{ color: COLORS.success[6] }} />
            </motion.div>
            <span className="font-medium">Your data stays private. Always.</span>
            <span style={{ color: COLORS.border[3] }}>·</span>
            <span>4.9 ★ on App Store</span>
          </motion.div>
        </div>

        {/* ════════════════════════════════
            RIGHT — PHONE MOCKUP
        ════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: EASE } satisfies Transition}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="relative flex items-center justify-center">
            {/* Glow pool beneath */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-32 blur-3xl rounded-full opacity-50"
              style={{ 
                background: `linear-gradient(90deg, ${COLORS.brand[6]}59, ${COLORS.brand[5]}59)`,
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <PhoneRings />

            {/* Phone image */}
            <motion.div 
              className="relative w-[280px] h-[540px] z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/hero/heroimg.webp"
                alt="Hiliree app — family tree, memories, and connection"
                fill
                className="object-contain drop-shadow-[0_40px_80px_rgba(39,13,77,0.25)]"
                priority
                sizes="280px"
              />
            </motion.div>

            {/* Floating Card — Family Tree */}
            <FloatingCard
              icon={GitBranch}
              bg={`${COLORS.brand[5]}14`}
              iconColor={COLORS.brand[5]}
              title="Family Tree"
              sub="4 generations added"
              motionProps={floatIn("left", 0.7)}
              className="-left-12 top-[8%]"
            />

            {/* Floating Card — Memory */}
            <FloatingCard
              icon={Camera}
              bg={`${COLORS.gold[2]}`}
              iconColor={COLORS.gold[6]}
              title="Memory Added"
              sub="Summer 1987"
              motionProps={floatIn("right", 0.95)}
              className="-right-8 top-[40%]"
            />

            {/* Floating Card — Connected */}
            <FloatingCard
              icon={Users}
              bg={`${COLORS.success[1]}`}
              iconColor={COLORS.success[6]}
              title="Family Connected"
              sub="12 members joined"
              motionProps={floatIn("left", 1.2)}
              className="-left-8 bottom-[10%]"
            />
          </div>
        </motion.div>

        {/* ════════════════════════════════
            MOBILE phone
        ════════════════════════════════ */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lg:hidden flex justify-center items-center pt-12 relative"
        >
          <div className="relative flex items-center justify-center">
            {/* Mobile glow pool */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 blur-2xl rounded-full opacity-40"
              style={{ 
                background: `linear-gradient(90deg, ${COLORS.brand[6]}4d, ${COLORS.brand[5]}4d)`,
              }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <PhoneRings className="scale-75" />

            <div className="relative w-56 h-[430px] z-10">
              <Image
                src="/images/hero/heroimg.webp"
                alt="Hiliree app"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 224px, 280px"
                priority
              />
            </div>

            <FloatingCard
              icon={GitBranch}
              bg={`${COLORS.brand[5]}14`}
              iconColor={COLORS.brand[5]}
              title="Family Tree"
              sub="4 generations"
              motionProps={floatIn("left", 0.5)}
              className="-left-10 top-[8%] scale-[0.85] origin-right"
            />

            <FloatingCard
              icon={Camera}
              bg={COLORS.gold[2]}
              iconColor={COLORS.gold[6]}
              title="Memory"
              sub="Summer 1987"
              motionProps={floatIn("right", 0.75)}
              className="-right-10 top-[40%] scale-[0.85] origin-left"
            />

            <FloatingCard
              icon={Users}
              bg={COLORS.success[1]}
              iconColor={COLORS.success[6]}
              title="Connected"
              sub="12 members"
              motionProps={floatIn("left", 1)}
              className="-left-8 bottom-[10%] scale-[0.85] origin-right"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span 
          className="text-[11px] font-medium uppercase tracking-[0.2em] font-poppins"
          style={{ color: COLORS.text[3] }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Scroll to explore
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gray-400 via-gray-300 to-transparent"
        />
      </motion.div>
    </section>
  );
}