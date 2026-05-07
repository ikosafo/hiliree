"use client";
import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowUp, Scale } from "lucide-react";

export type LegalSection = { id: string; label: string };

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  children: ReactNode;
}

function SidebarNav({ sections }: { sections: LegalSection[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
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
    <div className="sticky top-24">
      <div className="flex items-center gap-2 mb-5">
        <BookOpen size={13} className="text-gray-400" strokeWidth={1.5} />
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">On this page</span>
      </div>
      <nav className="space-y-0.5">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`block w-full text-left px-3 py-2 rounded-lg text-[12px] transition-colors ${
              activeId === s.id
                ? "bg-[#41307e]/5 text-[#41307e] font-medium"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-5 text-[11px] text-gray-400 hover:text-gray-600 flex items-center gap-1.5 transition-colors"
      >
        <ArrowUp size={12} />
        Back to top
      </button>
    </div>
  );
}

function MobileTOC({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="lg:hidden mb-10 p-5 rounded-xl bg-white border border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <Scale size={13} className="text-gray-400" strokeWidth={1.5} />
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">On this page</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-[11px] font-medium px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 hover:bg-[#41307e]/5 hover:text-[#41307e] transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function LegalPageLayout({ title, lastUpdated, sections, children }: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 font-poppins">
            Legal Document
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold mt-3 mb-3 tracking-[-0.02em]" style={{ color: "#2D206A" }}>
            {title}
          </h1>
          <p className="text-[12px] text-gray-400 font-poppins">
            Last updated <span className="font-medium text-gray-500">{lastUpdated}</span>
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10">
          <aside className="hidden lg:block">
            <SidebarNav sections={sections} />
          </aside>

          <article className="min-w-0">
            <MobileTOC sections={sections} />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="
                [&_section]:scroll-mt-24
                [&_section]:mb-12

                [&_h2]:font-['Cormorant_Garamond',serif]
                [&_h2]:text-xl
                [&_h2]:lg:text-2xl
                [&_h2]:font-bold
                [&_h2]:text-gray-900
                [&_h2]:mb-4

                [&_h3]:text-[14px]
                [&_h3]:font-semibold
                [&_h3]:text-gray-800
                [&_h3]:mb-3
                [&_h3]:mt-7

                [&_p]:text-[13px]
                [&_p]:text-gray-600
                [&_p]:leading-[1.75]
                [&_p]:mb-4

                [&_ul]:space-y-2
                [&_ul]:mb-5
                [&_ul]:list-none

                [&_li]:text-[13px]
                [&_li]:text-gray-600
                [&_li]:leading-relaxed
                [&_li]:pl-4
                [&_li]:relative

                [&_li::before]:content-['']
                [&_li::before]:absolute
                [&_li::before]:left-0
                [&_li::before]:top-[9px]
                [&_li::before]:w-1
                [&_li::before]:h-1
                [&_li::before]:rounded-full
                [&_li::before]:bg-gray-300

                [&_strong]:text-gray-900
                [&_strong]:font-semibold

                [&_a]:text-[#41307e]
                [&_a]:font-medium
                [&_a]:hover:underline
              "
            >
              {children}
            </motion.div>

            <div className="mt-14 pt-8 border-t border-gray-100">
              <p className="text-[12px] text-gray-500 leading-relaxed">
                If you have any questions about this document, please contact us at{" "}
                <a href="mailto:support@hiliree.com" className="text-[#41307e] font-medium hover:underline">
                  support@hiliree.com
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}