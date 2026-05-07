"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Custom YouTube Icon ─────────────────────────── */
function YouTubeIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

/* ─── Custom Instagram Icon ───────────────────────── */
function InstagramIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <circle cx="17.5" cy="6.5" r="1.5"></circle>
    </svg>
  );
}

/* ─── Custom Twitter/X Icon ───────────────────────── */
function TwitterXIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M4 4l6.5 7.5L4 20h2l5.5-6.5L17 20h3l-7-8.5L20 4h-2l-5 6L8 4H4z" />
    </svg>
  );
}

/* ─── Custom Facebook Icon ────────────────────────── */
function FacebookIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const productLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Training Guides", href: "/#training" },
  { label: "Download", href: "/#download" },
  { label: "Donate", href: "/donate" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "FAQs", href: "/faq" },
];

const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/@hiliree", icon: YouTubeIcon },
  { label: "Instagram", href: "https://www.instagram.com/hiliree/", icon: InstagramIcon },
  { label: "X (Twitter)", href: "https://x.com/app_hiliree", icon: TwitterXIcon },
  { label: "Facebook", href: "https://web.facebook.com/people/Hiliree/61553453031755/", icon: FacebookIcon },
];

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(65,48,126,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative section-wrapper py-12 lg:py-14">
        {/* Main grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          
          {/* Brand column */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-24 h-8">
                <Image
                  src="/images/logo-footer2.png"
                  alt="Hiliree"
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="96px"
                />
              </div>
            </Link>

            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Your Family. Your Story. Nobody Else&apos;s.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-1.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>

            {/* Store buttons */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <Link
                href="https://apps.apple.com/app/hiliree/id6747322444"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-4 py-2 rounded-xl transition-all duration-300 min-w-[140px]"
                style={{
                  background: "linear-gradient(145deg, #2C2C2E 0%, #1C1C1E 100%)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[8px] font-medium text-gray-400 uppercase tracking-wider leading-none">
                    Download on
                  </div>
                  <div className="text-[12px] font-semibold text-white leading-tight">
                    App Store
                  </div>
                </div>
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.rootaft.hiliree_mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-4 py-2 rounded-xl transition-all duration-300 min-w-[140px]"
                style={{
                  background: "linear-gradient(145deg, #2C2C2E 0%, #1C1C1E 100%)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="white">
                  <path d="M3.18 23.76c.29.16.62.24.97.21l12.67-7.31-2.78-2.78-10.86 9.88zM20.7 10.37L17.85 8.7 14.74 11.8l3.13 3.14 2.84-1.64c.81-.47.81-1.46-.01-1.93zM2.15 1.09A1.01 1.01 0 0 0 2 1.6v20.8c0 .22.05.42.15.57l.08.08L14.01 11.3v-.17L2.23 1.01l-.08.08zM3.18.24L15.85 7.54l-2.78 2.78L2.21.44c.33-.26.76-.31 1.08-.16l-.11-.04z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[8px] font-medium text-gray-400 uppercase tracking-wider leading-none">
                    Get it on
                  </div>
                  <div className="text-[12px] font-semibold text-white leading-tight">
                    Google Play
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 tracking-wide uppercase">Product</h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-4 tracking-wide uppercase">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-600">
            &copy; {new Date().getFullYear()} ROOT AFT. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors">
              Terms
            </Link>
            <Link href="/licenses" className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors">
              Licenses
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/20 hover:border-white/20 transition-all duration-300"
          >
            <ArrowUp size={16} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}