"use client";
import { motion } from "framer-motion";
import { Shield, Info, Lock } from "lucide-react";

const infoItems = [
  {
    icon: Shield,
    title: "Secure Payment",
    description: "All donations processed through Stripe with bank-level encryption.",
  },
  {
    icon: Info,
    title: "Transparent",
    description: "100% of donations go toward development and operations.",
  },
  {
    icon: Lock,
    title: "No Strings",
    description: "Cancel anytime. Your support is appreciated but never required.",
  },
];

export function DonationInfo() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=1920&q=80&auto=format&fit=crop')`,
          }}
        />
        {/* Multiple overlay layers for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#41307e]/95 via-[#41307e]/90 to-[#2D1F5E]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06)_0%,transparent_50%)]" />
        {/* Subtle grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9D8FD1]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6C5CE7]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      {/* Bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

      <div className="section-wrapper max-w-4xl mx-auto relative z-10 px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9D8FD1] mb-6">
            <span className="w-1 h-1 rounded-full bg-[#9D8FD1]" />
            Your Trust Matters
          </span>
          <h2 className="font-serif text-[40px] lg:text-[48px] leading-[1.08] text-white">
            We take your support{" "}
            <span className="italic font-light text-white/60">seriously</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 text-center"
            >
              {/* Icon with glow effect */}
              <div className="relative mb-6 inline-block">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#9D8FD1]/20 group-hover:scale-110 transition-all duration-500">
                  <item.icon size={22} className="text-[#9D8FD1] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                {/* Hover glow */}
                <div className="absolute -inset-3 bg-[#9D8FD1]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-xl" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/40 text-[15px] leading-relaxed font-light group-hover:text-white/50 transition-colors duration-300">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#9D8FD1] to-transparent group-hover:w-3/4 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}