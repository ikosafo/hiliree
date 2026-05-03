"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, TreePine } from "lucide-react";

const foundationValues = [
  {
    icon: Sparkles,
    title: "The wisdom that lights our path",
    description: "Knowledge passed through generations becomes our compass.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop&auto=format", // Grandparent sharing wisdom with child
  },
  {
    icon: Heart,
    title: "The support that steadies us",
    description: "Connection strengthens us through every season.",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop&auto=format", // Family embracing in warm moment
  },
  {
    icon: TreePine,
    title: "The lineage that connects us",
    description: "We are woven together across time and distance.",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=800&h=600&fit=crop&auto=format", // Multi-generational family portrait
  },
];

export function AboutStory() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <>
      {/* Our Story Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#41307e" }}>
        {/* Very subtle grid pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Subtle radial glow at top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
        />

        <div className="relative section-wrapper grid lg:grid-cols-2 gap-16 items-center z-10">
          {/* Left - Copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUpVariants}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-[36px] lg:text-[48px] text-white leading-[1.12] mb-8">
              A legacy worth preserving
            </h2>
            
            <div className="space-y-6 text-white/70 text-[15px] leading-relaxed">
              <p>
                Hiliree was founded on the belief that every family carries a legacy worth preserving. Built on the pillars of connection, continuity, and collective memory, Hiliree exists to strengthen the bonds that guide us, ground us, and shape the generations that follow.
              </p>
              
              <div className="pt-2">
                <p className="text-white font-medium mb-3">The name Hiliree is crafted from three universal elements:</p>
                <ul className="space-y-3 text-white/60">
                  <li className="flex gap-3">
                    <span className="text-white/40 flex-shrink-0">Hi</span>
                    <span>The greeting that opens every path</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40 flex-shrink-0">Family</span>
                    <span>The circle that shapes our earliest foundations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40 flex-shrink-0">Tree</span>
                    <span>A timeless symbol of roots, growth, and generational strength</span>
                  </li>
                </ul>
              </div>
              
              <p>
                Together, they form a welcoming bridge between past, present, and future—names that reflect our commitment to helping families greet their history with clarity, honor, and purpose.
              </p>
            </div>
          </motion.div>

          {/* Right - Phone mockup with floating card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative flex justify-center"
          >
            {/* Phone image */}
            <div className="relative w-[320px] h-[520px]">
              <Image
                src="/images/insight1.png"
                alt="Hiliree app — Family insights"
                fill
                className="object-contain"
                sizes="320px"
              />
            </div>

            {/* Floating quote card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 p-6 rounded-2xl max-w-[220px] shadow-xl bg-white"
            >
              <p className="font-serif text-base leading-snug text-gray-900">
                &ldquo;A welcoming bridge between past, present, and future.&rdquo;
              </p>
            </motion.div>

            {/* Caption below the phone */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white/40 text-xs font-medium tracking-wider uppercase">
                Family. Connection. Legacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Foundation Section - Premium Redesign with Online Images */}
      <section className="relative py-32 lg:py-40 overflow-hidden bg-[#FFFBEB]">
        {/* Editorial Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.12]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(65,48,126,0.03)_0%,transparent_70%)]" />

        <div className="relative max-w-[1400px] mx-auto px-8 z-10">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUpVariants}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-4">
              <span className="w-1 h-1 rounded-full bg-gray-400" />
              Our Foundation
            </span>
            <h2 className="font-serif text-[40px] lg:text-[48px] text-gray-900 leading-[1.08] max-w-3xl mx-auto">
              Stories are the first blueprints of <span className="italic font-light text-gray-400">who we become</span>
            </h2>
          </motion.div>

          {/* Foundation Values Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foundationValues.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-700"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon - Positioned to overlap the image */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg group-hover:bg-[#41307e] group-hover:text-white transition-all duration-500">
                      <item.icon size={20} strokeWidth={1.5} className="text-[#41307e] group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-4 mt-4">
                    <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#41307e] transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Line Detail */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#41307e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center text-gray-400 text-sm font-light"
          >
            Building the future of family preservation, one story at a time.
          </motion.p>
        </div>
      </section>
    </>
  );
}