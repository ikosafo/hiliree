"use client";
import { motion } from "framer-motion";
import { TreePine, MessageCircle, Heart, Calendar, BookOpen, Lock } from "lucide-react";

const features = [
  {
    icon: TreePine,
    title: "Dynamic Family Tree Mapping",
    description: "Craft rich, visual representations of your family structure with intuitive relationship tools and organized generational layers.",
  },
  {
    icon: Heart,
    title: "Smart, Customizable Profiles",
    description: "Capture meaningful details—photos, locations, timelines, milestones—and preserve each member's presence within the family legacy.",
  },
  {
    icon: Lock,
    title: "Secure Communication Suite",
    description: "Stay connected through built-in chat, voice, and video with privacy controls crafted to keep family conversations protected.",
  },
  {
    icon: BookOpen,
    title: "Personal Journals & Shared Memories",
    description: "Document stories, reflections, and moments to build a living archive that future generations can discover.",
  },
  {
    icon: Calendar,
    title: "Events, Reminders & Milestones",
    description: "Organize gatherings, send RSVPs, track anniversaries and birthdays, and keep everyone informed.",
  },
];

export function AboutValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&q=80&auto=format&fit=crop')`,
          }}
        />
        {/* Multiple overlay layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#41307e]/95 via-[#41307e]/90 to-[#2D1F5E]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.06)_0%,transparent_50%)]" />
        {/* Subtle grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9D8FD1]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-wrapper relative z-10 max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9D8FD1] mb-6">
            <span className="w-1 h-1 rounded-full bg-[#9D8FD1]" />
            Why Hiliree
          </span>
          <h2 className="font-serif text-[40px] lg:text-[48px] text-white leading-[1.08] mb-6">
            Modern tools for <span className="italic font-light text-white/60">timeless needs</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-[16px] leading-relaxed font-light">
            Designed with intention, Hiliree provides families with everything needed to strengthen bonds and preserve legacy
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card with glass morphism effect */}
                <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 h-full">
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#9D8FD1]/20 group-hover:scale-110 transition-all duration-500">
                    <Icon size={24} className="text-[#9D8FD1] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-lg text-white mb-3 leading-snug group-hover:text-white/90 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 text-[15px] leading-relaxed font-light group-hover:text-white/50 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Accent line */}
                  <div className="mt-6 h-px w-0 bg-gradient-to-r from-[#9D8FD1] to-transparent group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mt-20 text-center pt-12 border-t border-white/10"
        >
          <h3 className="font-serif text-[32px] lg:text-[40px] text-white mb-4">
            Your Family. Your Story. <span className="italic font-light text-white/60">Nobody Else&apos;s.</span>
          </h3>
          <p className="max-w-2xl mx-auto text-white/40 text-[16px] leading-relaxed font-light">
            Hiliree is more than a platform—it&apos;s a compass for families who value unity, heritage, and lasting connection.
          </p>
        </motion.div>
      </div>
    </section>
  );
}