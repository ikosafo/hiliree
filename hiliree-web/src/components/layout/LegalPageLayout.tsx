// hiliree-web\src\components\layout\LegalPageLayout.tsx
"use client";
import { useEffect, useState, ReactNode, useRef } from "react";
import { BookOpen, ArrowUp, Scale } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
export type LegalSection = { id: string; label: string };

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  children: ReactNode;
}

/* ─────────────────────────────────────────────
   Reading progress bar
───────────────────────────────────────────── */
function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const [pct, setPct] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPct(latest * 100);
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 inset-x-0 z-[70] h-px bg-transparent pointer-events-none"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-gray-900 to-gray-600"
        style={{
          width: `${pct}%`,
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Sticky sidebar navigation - scrolls with content
───────────────────────────────────────────── */
function SidebarNav({ sections }: { sections: LegalSection[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="sticky top-24 flex flex-col h-[calc(100vh-96px)]">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-6 pb-5 border-b border-gray-200 flex-shrink-0">
        <div className="w-7 h-7 rounded-lg bg-gray-900/5 flex items-center justify-center">
          <BookOpen size={13} className="text-gray-900" strokeWidth={1.5} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Sections
        </span>
      </div>

      {/* Scrollable Navigation */}
      <nav className="space-y-0.5 overflow-y-auto flex-1 pr-2">
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`group w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                isActive
                  ? "bg-gray-900 text-white font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </nav>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-6 text-xs font-medium text-gray-400 hover:text-gray-900 flex items-center gap-2 group transition-colors flex-shrink-0"
      >
        <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        Top
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Mobile TOC
───────────────────────────────────────────── */
function MobileTOC({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="lg:hidden mb-12 p-6 rounded-xl bg-white border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Scale size={14} className="text-gray-900" strokeWidth={1.5} />
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Table of Contents
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-xs font-medium px-3 py-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-900 hover:text-white transition-colors duration-200"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main layout
───────────────────────────────────────────── */
export function LegalPageLayout({
  title,
  lastUpdated,
  sections,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <ReadingProgress />

      <main className="min-h-screen pt-20 bg-white">
        <div className="section-wrapper py-12 lg:py-16 relative">
          <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-16 max-w-5xl mx-auto">

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <SidebarNav sections={sections} />
            </aside>

            {/* Article */}
            <article className="min-w-0">
              {/* Title block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                {/* Badge */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Legal Document
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
                </div>

                {/* Title */}
                <h1 className="font-serif text-4xl lg:text-5xl leading-tight text-gray-900 mb-6">
                  {title}
                </h1>

                {/* Metadata */}
                <div className="text-sm text-gray-500">
                  Last updated <span className="font-semibold text-gray-700">{lastUpdated}</span>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="mb-12 h-px bg-gray-200" />

              {/* Mobile TOC */}
              <MobileTOC sections={sections} />

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="
                  [&_section]:scroll-mt-20
                  [&_section]:mb-14

                  [&_h2]:font-serif
                  [&_h2]:text-2xl
                  [&_h2]:lg:text-3xl
                  [&_h2]:text-gray-900
                  [&_h2]:leading-tight
                  [&_h2]:mb-6
                  [&_h2]:pb-4
                  [&_h2]:border-b
                  [&_h2]:border-gray-200

                  [&_h3]:text-base
                  [&_h3]:font-semibold
                  [&_h3]:text-gray-900
                  [&_h3]:mb-4
                  [&_h3]:mt-8

                  [&_p]:text-base
                  [&_p]:text-gray-600
                  [&_p]:leading-[1.8]
                  [&_p]:mb-5

                  [&_p:first-of-type]:text-lg
                  [&_p:first-of-type]:text-gray-700

                  [&_ul]:space-y-3
                  [&_ul]:mb-6
                  [&_ul]:pl-0
                  [&_ul]:list-none

                  [&_li]:relative
                  [&_li]:flex
                  [&_li]:items-start
                  [&_li]:gap-3
                  [&_li]:text-base
                  [&_li]:text-gray-600
                  [&_li]:leading-relaxed

                  [&_strong]:text-gray-900
                  [&_strong]:font-semibold

                  [&_a]:text-gray-900
                  [&_a]:font-medium
                  [&_a]:underline
                  [&_a]:underline-offset-2
                  [&_a]:decoration-gray-300
                  [&_a:hover]:decoration-gray-900
                  [&_a]:transition-colors
                  [&_a]:duration-200
                "
              >
                {children}
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 pt-10 border-t border-gray-200"
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  If you have any questions about this document, please contact us at{" "}
                  <a href="mailto:support@hiliree.com" className="text-gray-900 font-medium hover:underline">
                    support@hiliree.com
                  </a>
                </p>
              </motion.div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}