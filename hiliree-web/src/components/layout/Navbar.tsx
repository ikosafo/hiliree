"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Types & constants
───────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
};

const navLinks: NavLink[] = [
  {
    label: "Product",
    href: "#",
    children: [
      { label: "How It Works",  href: "/#how-it-works",  description: "See the Hiliree experience step by step"   },
      { label: "Features",      href: "/#features",      description: "Everything your family needs in one place"  },
    ],
  },
  { label: "About",  href: "/about"  },
  { label: "Donate", href: "/donate" },
];

/* ─────────────────────────────────────────────
   Helper: check if a link is active (including hash)
───────────────────────────────────────────── */
function isLinkActive(pathname: string, href: string): boolean {
  if (href.includes("#")) {
    const [path, hash] = href.split("#");
    // Check if we're on the right page and hash matches
    if (pathname === path || (path === "/" && pathname === "/")) {
      if (typeof window !== "undefined") {
        return window.location.hash === `#${hash}`;
      }
    }
    return false;
  }
  return pathname === href;
}

/* ─────────────────────────────────────────────
   Helper: handle navigation with proper hash
───────────────────────────────────────────── */
function useNavigateWithHash() {
  const router = useRouter();
  
  return (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      // If we're already on the same page, just update the hash
      if (typeof window !== "undefined" && window.location.pathname === path) {
        window.location.hash = `#${hash}`;
      } else {
        // Navigate to the page with hash
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };
}

/* ─────────────────────────────────────────────
   Dropdown menu
───────────────────────────────────────────── */
function DropdownMenu({
  items,
  visible,
  pathname,
  onItemClick,
}: {
  items: NonNullable<NavLink["children"]>;
  visible: boolean;
  pathname: string;
  onItemClick: () => void;
}) {
  const navigate = useNavigateWithHash();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.97 }}
          transition={{ duration: 0.2, ease: EASE } satisfies Transition}
          className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[280px] z-50"
        >
          {/* Arrow */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100/80 rotate-45 shadow-[-2px_-2px_4px_rgba(0,0,0,0.04)]" />

          <div
            className="relative bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100/80 overflow-hidden"
            style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <div className="p-2">
              {items.map((item) => {
                const active = isLinkActive(pathname, item.href);
                return (
                  <button
                    key={item.href}
                    onClick={() => {
                      onItemClick();
                      navigate(item.href);
                    }}
                    className={cn(
                      "w-full text-left group flex items-start gap-3 px-3.5 py-3 rounded-xl transition-colors",
                      active
                        ? "bg-[#41307e]/10"
                        : "hover:bg-[#41307e]/5"
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                        active
                          ? "bg-[#41307e]/20"
                          : "bg-[#41307e]/5 group-hover:bg-[#41307e]/10"
                      )}
                    >
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full bg-[#41307e]",
                        active && "scale-125"
                      )} />
                    </div>
                    <div>
                      <div className={cn(
                        "text-[13px] font-semibold transition-colors leading-tight",
                        active
                          ? "text-[#41307e]"
                          : "text-gray-900 group-hover:text-[#41307e]"
                      )}>
                        {item.label}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                        {item.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer row */}
            <div className="px-4 py-3 bg-gray-50/80 border-t border-gray-100/80">
              <button
                onClick={() => {
                  onItemClick();
                  navigate("/#download");
                }}
                className="text-[12px] font-semibold text-[#41307e] flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                Get the App free
                <span className="text-xs">→</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   Nav pill indicator (sliding active state)
───────────────────────────────────────────── */
function NavItem({
  link,
  pathname,
}: {
  link: NavLink;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const navigate = useNavigateWithHash();
  
  // Check if any child is active
  const hasActiveChild = link.children?.some((child) => isLinkActive(pathname, child.href));
  const isActive = !link.children && isLinkActive(pathname, link.href);
  // Parent is active if a child is active
  const parentActive = hasActiveChild || false;

  const handleItemClick = () => {
    setOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (link.children) {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
            open || parentActive
              ? "text-[#41307e] bg-[#41307e]/10"
              : "text-gray-600 hover:text-[#41307e] hover:bg-gray-50"
          )}
        >
          {(open || parentActive) && (
            <motion.span
              layoutId="nav-pill"
              className="absolute inset-0 rounded-full bg-[#41307e]/10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1">
            {link.label}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-px"
            >
              <ChevronDown size={13} strokeWidth={2.5} />
            </motion.span>
          </span>
        </button>
        <DropdownMenu
          items={link.children}
          visible={open}
          pathname={pathname}
          onItemClick={handleItemClick}
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => navigate(link.href)}
      className={cn(
        "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
        isActive
          ? "text-[#41307e] bg-[#41307e]/10"
          : "text-gray-600 hover:text-[#41307e] hover:bg-gray-50"
      )}
    >
      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full bg-[#41307e]/10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
        />
      )}
      <span className="relative z-10">{link.label}</span>
    </button>
  );
}

/* ─────────────────────────────────────────────
   Mobile menu link
───────────────────────────────────────────── */
function MobileLink({
  href,
  label,
  pathname,
  onClose,
}: {
  href: string;
  label: string;
  pathname: string;
  onClose: () => void;
}) {
  const navigate = useNavigateWithHash();
  const active = isLinkActive(pathname, href);
  
  return (
    <button
      onClick={() => {
        onClose();
        navigate(href);
      }}
      className={cn(
        "w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium transition-colors",
        active
          ? "text-[#41307e] bg-[#41307e]/10"
          : "text-gray-700 hover:text-[#41307e] hover:bg-[#41307e]/5"
      )}
    >
      <span className={cn(
        "w-1.5 h-1.5 rounded-full bg-[#41307e]/40",
        active && "bg-[#41307e] scale-125"
      )} />
      {label}
    </button>
  );
}

/* ─────────────────────────────────────────────
   Mobile menu
───────────────────────────────────────────── */
function MobileMenu({ onClose, pathname }: { onClose: () => void; pathname: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: EASE } satisfies Transition}
      className="lg:hidden fixed inset-x-0 top-[72px] z-40"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white/95 backdrop-blur-xl border-t border-gray-100"
        style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.08)" }}
      />

      <nav className="relative section-wrapper py-6">
        {/* Links */}
        <div className="space-y-0.5">
          {navLinks.map((link, i) => (
            <div key={link.href}>
              {link.children ? (
                <>
                  <p className="px-4 pt-4 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <MobileLink
                      key={child.href}
                      href={child.href}
                      label={child.label}
                      pathname={pathname}
                      onClose={onClose}
                    />
                  ))}
                </>
              ) : (
                <MobileLink
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                  onClose={onClose}
                />
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gray-100" />

        {/* CTAs */}
        <div className="space-y-2.5 px-1">
          <Button variant="outline" href="/contact" fullWidth>
            Contact Us
          </Button>
          <Button variant="primary" href="/#download" fullWidth>
            Get the App — Free
          </Button>
        </div>

        {/* Trust note */}
        <p className="mt-5 text-center text-[11px] text-gray-400 flex items-center justify-center gap-1.5">
          <span>🔒</span> Private by design · Free to download
        </p>
      </nav>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Navbar
───────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const navigate = useNavigateWithHash();

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Scroll listener
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h(); // run on mount
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Check if contact page is active
  const isContactActive = pathname === "/contact";

  return (
    <>
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: EASE } satisfies Transition}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-100/80"
            : "bg-transparent"
        )}
      >
        {/* Subtle top border shimmer when not scrolled */}
        {!scrolled && (
          <div
            className="absolute inset-x-0 top-0 h-px opacity-40"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(23,17,61,0.3) 40%, rgba(23,17,61,0.3) 60%, transparent 100%)",
            }}
          />
        )}

        <div className="section-wrapper relative flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <button onClick={() => navigate("/")} className="flex items-center z-10 min-w-0"> 
            <div className="relative h-10 w-32 sm:h-12 sm:w-[240px] md:w-[360px]"> {/* Changed width logic */}
              <Image
                src="/images/Favicon.png"
                alt="Hiliree"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 768px) 128px, 360px"
              />
            </div>
          </button>

          {/* ── Desktop nav - centered absolutely ── */}
          <nav className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <NavItem key={link.href} link={link} pathname={pathname} />
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-2.5">
            <div className="relative">
              <button
                onClick={() => navigate("/contact")}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                  isContactActive
                    ? "text-[#41307e] bg-[#41307e]/10"
                    : "text-gray-600 hover:text-[#41307e] hover:bg-gray-50"
                )}
              >
                {isContactActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[#41307e]/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">Contact</span>
              </button>
            </div>

            {/* "Get the App" pill with shimmer */}
            <div className="relative group">
              <div
                className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                style={{ background: "linear-gradient(135deg, #41307e, #503c9d)" }}
              />
              <Button 
                variant="primary" 
                size="sm" 
                href="/#download" 
                className="relative !bg-[#41307e] hover:!bg-[#503c9d]"
              >
                Get the App
              </Button>
            </div>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={cn(
              "lg:hidden z-10 w-10 h-10 flex items-center justify-center rounded-xl transition-all shrink-0 ml-auto",
              mobileOpen
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile menu (outside header for z-stacking) ── */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} pathname={pathname} />}
      </AnimatePresence>
    </>
  );
}