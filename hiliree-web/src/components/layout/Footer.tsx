// hiliree-web\src\components\layout\Footer.tsx
import Link from "next/link";
import Image from "next/image";

/* ─── Custom YouTube Icon ─────────────────────────── */
function YoutubeIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
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
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/* ─── Custom Twitter/X Icon ───────────────────────── */
function TwitterIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
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
      <line x1="4" y1="4" x2="20" y2="20" strokeWidth="0" />
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

/* ─── Google Play Logo ────────────────────────────── */
function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.6 1.8L13.8 12L3.6 22.2C3.3 22 3 21.6 3 21V3C3 2.4 3.3 2 3.6 1.8Z" fill="#2196F3" />
      <path d="M14.2 12.7L19.4 17.9C19.7 17.6 20 17.1 20 16.5V7.5C20 6.9 19.7 6.4 19.4 6.1L14.2 11.3L14.2 12.7Z" fill="#FFC107" />
      <path d="M13.8 12L3.6 1.8C3.8 1.6 4.2 1.5 4.6 1.6L19.4 6.1L14.2 11.3L13.8 12Z" fill="#4CAF50" />
      <path d="M13.8 12L14.2 12.7L19.4 17.9C19.2 18.1 18.8 18.2 18.4 18.1L4.6 22.4C4.2 22.5 3.8 22.4 3.6 22.2L13.8 12Z" fill="#F44336" />
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
  { label: "Child Safety Standards", href: "/child-safety" },
];

const socialLinks = [
  { 
    label: "YouTube", 
    href: "https://youtube.com/@hiliree", 
    icon: YoutubeIcon,
    color: "hover:text-[#FF0000]",
    hoverBg: "hover:bg-[#FF0000]/10",
  },
  { 
    label: "Instagram", 
    href: "https://instagram.com/hiliree", 
    icon: InstagramIcon,
    color: "hover:text-[#E4405F]",
    hoverBg: "hover:bg-[#E4405F]/10",
  },
  { 
    label: "X (Twitter)", 
    href: "https://x.com/hiliree", 
    icon: TwitterIcon,
    color: "hover:text-[#1DA1F2]",
    hoverBg: "hover:bg-[#1DA1F2]/10",
  },
  { 
    label: "Facebook", 
    href: "https://facebook.com/hiliree", 
    icon: FacebookIcon,
    color: "hover:text-[#1877F2]",
    hoverBg: "hover:bg-[#1877F2]/10",
  },
];

export function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(65,48,126,0.15) 0%, transparent 70%)" }}
      />

      <div className="relative section-wrapper py-16 lg:py-20">
        {/* Main grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          
          {/* Brand column */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block group">
              <div className="relative w-32 h-10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo-footer2.png"
                  alt="Hiliree"
                  fill
                  className="object-contain" 
                  priority
                />
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Your Family. Your Story. Nobody Else&apos;s.
            </p>

            {/* Social media links */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Follow Us</p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/5 text-gray-500 ${social.color} ${social.hoverBg} hover:border-white/15 transition-all duration-300 hover:-translate-y-1`}
                  >
                    <social.icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* App store buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {/* App Store */}
              <Link
                href="#"
                className="group flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-4 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <AppleLogo className="w-[18px] h-[18px] text-white flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[9px] text-gray-500 leading-none">Download on</div>
                  <div className="text-xs font-semibold text-white leading-tight">App Store</div>
                </div>
              </Link>

              {/* Google Play */}
              <Link
                href="#"
                className="group flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-4 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <GooglePlayLogo className="w-[18px] h-[18px] flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[9px] text-gray-500 leading-none">Get it on</div>
                  <div className="text-xs font-semibold text-white leading-tight">Google Play</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} ROOT AFT. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Terms
            </Link>
            <Link href="/licenses" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Licenses
            </Link>
            <Link href="/cookies" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}