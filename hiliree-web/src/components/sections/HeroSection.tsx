"use client";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Users, Camera, GitBranch, ArrowRight } from "lucide-react";
import { motion, type Transition } from "framer-motion";

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
   Apple Logo SVG Component
───────────────────────────────────────────── */
function AppleLogo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.44-1.05-.45-2.01-.44-3.08 0-1.07.44-2.14.51-3.08-.44-2.48-2.38-3.08-6.23-1.87-9.04.83-1.92 2.38-3.11 4.03-3.11 1.44 0 2.34.67 3.08.67.73 0 1.96-.74 3.41-.63 1.39.1 2.67.85 3.49 2.14-3.02 1.65-2.57 5.89.49 7.4-.67 1.27-1.56 2.86-2.49 3.57zM15.16 3.37c.74-.97 1.24-2.28 1.03-3.37-1.03.07-2.27.7-3.01 1.7-.68.9-1.22 2.24-.98 3.46 1.08.06 2.21-.62 2.96-1.79z"/>
    </svg>
  );
}

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
        <p className="text-[12px] font-bold text-gray-900 leading-tight font-poppins">{title}</p>
        <p className="text-[11px] text-gray-500 leading-tight mt-0.5 font-poppins">{sub}</p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main hero - REVAMPED
───────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(155deg, #FAFAF8 0%, #F2EDE6 55%, rgba(23,17,61,0.04) 100%)" }}
    >
      {/* ── Animated atmospheric blobs ── */}
      <Blob className="w-[600px] h-[600px] -top-32 -right-40 opacity-30" color="rgba(23,17,61,0.08)" animate={true} />
      <Blob className="w-[500px] h-[500px] bottom-0 -left-40 opacity-25" color="#FDE8D8" animate={true} />
      <Blob className="w-[320px] h-[320px] top-1/2 left-1/3 opacity-15" color="rgba(29,22,65,0.06)" animate={true} />

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
          background:
            "radial-gradient(ellipse 70% 80% at 100% 50%, rgba(23,17,61,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="section-wrapper relative w-full grid lg:grid-cols-[1fr_480px] gap-12 xl:gap-24 items-center py-28 lg:py-32">

        {/* ════════════════════════════════
            LEFT — COPY (IMPROVED)
        ════════════════════════════════ */}
        <div className="space-y-8 max-w-2xl">

          {/* Enhanced pill badge */}
          <motion.div {...stagger(0)}>
            <motion.span
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-full border font-poppins backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default"
              style={{
                background: "linear-gradient(135deg, rgba(23,17,61,0.08) 0%, rgba(23,17,61,0.04) 100%)",
                borderColor: "rgba(23,17,61,0.2)",
                color: "#41307e",
              }}
              whileHover={{ y: -2 }}
            >
              <motion.span 
                className="w-1.5 h-1.5 rounded-full bg-[#41307e]" 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Private Family Connection
            </motion.span>
          </motion.div>

          {/* Headline - REDUCED FONT SIZE */}
          <div className="space-y-2 md:space-y-0">
            <motion.h1
              {...stagger(1)}
              className="font-montserrat leading-[1.1] tracking-[-0.02em] font-bold"
              style={{ 
                fontSize: "clamp(40px, 6vw, 64px)",
                color: "#41307e"
              }}
            >
              Your Family.
            </motion.h1>
            <motion.h1
              {...stagger(2)}
              className="font-montserrat leading-[1.1] tracking-[-0.02em] font-bold"
              style={{ 
                fontSize: "clamp(40px, 6vw, 64px)",
                color: "#41307e"
              }}
            >
              Your Story.
            </motion.h1>
            
            {/* Nobody Else's - BLUE COLOR */}
            <motion.div
              {...stagger(3)}
              className="relative inline-block"
            >
              <h1
                className="font-montserrat leading-[1.1] tracking-[-0.02em] font-bold"
                style={{
                  fontSize: "clamp(40px, 6vw, 64px)",
                  background: "linear-gradient(135deg, #1a56ff 0%, #5b8eff 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  overflow: "visible",
                  padding: "0.1em 0",
                }}
              >
                Nobody Else&apos;s.
              </h1>
            </motion.div>
          </div>

          {/* Sub-headline */}
          <motion.p
            {...stagger(4)}
            className="text-[18px] text-gray-600 leading-[1.8] max-w-[480px] font-poppins font-light"
          >
            Hiliree is the private family app to build your tree, preserve
            memories, and stay connected{" "}
            <motion.span 
              className="font-semibold bg-gradient-to-r from-[#41307e] to-[#6b5bb5] bg-clip-text text-transparent"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              across generations.
            </motion.span>
          </motion.p>

          {/* App store buttons - DESKTOP: compact row, MOBILE: side by side */}
          <motion.div 
            {...stagger(5)} 
            className="flex flex-row gap-3 items-center pt-4"
          >
            {/* Apple App Store - Compact */}
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit"
            >
              <Link
                href="#"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: "linear-gradient(145deg, #2C2C2E 0%, #1C1C1E 100%)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <AppleLogo className="w-4 h-4 text-white shrink-0" />
                <div className="text-left">
                  <div className="text-[9px] font-medium text-gray-400 uppercase tracking-wider font-poppins leading-none">
                    Download on
                  </div>
                  <div className="text-[13px] font-semibold text-white leading-tight font-poppins">
                    App Store
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Google Play - Compact */}
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit"
            >
              <Link
                href="#"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300 border"
                style={{
                  background: "linear-gradient(145deg, #2C2C2E 0%, #1C1C1E 100%)",
                  borderColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <div className="w-4 h-4 shrink-0 relative">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                    <path d="M5 3.5L19 12L5 20.5V3.5Z" fill="#4ADE80" />
                    <path d="M5 3.5L12.5 11L5 11V3.5Z" fill="#60A5FA" />
                    <path d="M5 20.5L12.5 13L5 13V20.5Z" fill="#F87171" />
                    <path d="M12.5 11L19 12L12.5 13L12.5 11Z" fill="#FBBF24" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-medium text-gray-400 uppercase tracking-wider font-poppins leading-none">
                    Get it on
                  </div>
                  <div className="text-[13px] font-semibold text-white leading-tight font-poppins">
                    Google Play
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced trust signal */}
          <motion.div
            {...stagger(6)}
            className="inline-flex items-center gap-3 text-[13px] text-gray-500 font-poppins pt-2"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ShieldCheck size={16} className="text-green-500" />
            </motion.div>
            <span className="font-medium">Your data stays private. Always.</span>
            <span className="text-gray-300">·</span>
            <span>4.9 ★ on App Store</span>
          </motion.div>
        </div>

        {/* ════════════════════════════════
            RIGHT — PHONE MOCKUP (IMPROVED)
        ════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: EASE } satisfies Transition}
          className="hidden lg:flex justify-center items-center relative perspective"
        >
          {/* Enhanced glow pool */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-48 blur-3xl rounded-full opacity-50"
            style={{ 
              background: "linear-gradient(90deg, rgba(23,17,61,0.35), rgba(29,22,65,0.35))",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Enhanced ring halos with animation */}
          <motion.div
            className="absolute w-[360px] h-[360px] rounded-full border opacity-10"
            style={{ borderColor: "#41307e", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full border opacity-[0.05]"
            style={{ borderColor: "#41307e", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Phone image with parallax */}
          <motion.div 
            className="relative w-[280px] h-[540px] z-10"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/hero-img.webp"
              alt="Hiliree app — family tree, memories, and connection"
              fill
              className="object-contain drop-shadow-[0_40px_80px_rgba(23,17,61,0.25)]"
              priority
              sizes="280px"
            />
          </motion.div>

          {/* Floating Card — Family Tree */}
          <FloatingCard
            icon={GitBranch}
            bg="rgba(23,17,61,0.08)"
            iconColor="#503c9d"
            title="Family Tree"
            sub="4 generations added"
            motionProps={floatIn("left", 0.7)}
            className="-left-12 top-[10%]"
          />

          {/* Floating Card — Memory */}
          <FloatingCard
            icon={Camera}
            bg="#FEF3C7"
            iconColor="#F59E0B"
            title="Memory Added"
            sub="Summer 1987"
            motionProps={floatIn("right", 0.95)}
            className="-right-8 top-[42%]"
          />

          {/* Floating Card — Connected */}
          <FloatingCard
            icon={Users}
            bg="#DCFCE7"
            iconColor="#10B981"
            title="Family Connected"
            sub="12 members joined"
            motionProps={floatIn("left", 1.2)}
            className="-left-8 bottom-[12%]"
          />
        </motion.div>

        {/* ════════════════════════════════
            MOBILE phone (IMPROVED)
        ════════════════════════════════ */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lg:hidden flex justify-center pt-12 relative"
        >
          <div className="relative w-56 h-[430px]">
            {/* Phone Image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/hero-img.webp"
                alt="Hiliree app"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="224px"
              />
            </motion.div>

            {/* Mobile Floating Cards */}
            <FloatingCard
              icon={GitBranch}
              bg="rgba(23,17,61,0.08)"
              iconColor="#503c9d"
              title="Family Tree"
              sub="4 generations"
              motionProps={floatIn("left", 0.5)}
              className="-left-12 top-[8%] scale-[0.85] origin-right"
            />

            <FloatingCard
              icon={Camera}
              bg="#FEF3C7"
              iconColor="#F59E0B"
              title="Memory"
              sub="Summer 1987"
              motionProps={floatIn("right", 0.75)}
              className="-right-12 top-[40%] scale-[0.85] origin-left"
            />

            <FloatingCard
              icon={Users}
              bg="#DCFCE7"
              iconColor="#10B981"
              title="Connected"
              sub="12 members"
              motionProps={floatIn("left", 1)}
              className="-left-10 bottom-[10%] scale-[0.85] origin-right"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Enhanced scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span 
          className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400 font-poppins"
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