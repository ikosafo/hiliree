// hiliree-web\src\components\sections\donate\DonationShare.tsx
"use client";
import { motion } from "framer-motion";
import { Share2, MessageCircle, Heart } from "lucide-react";
import { COLORS } from "@/components/common/ColorGuidePage";

const EASE = [0.22, 1, 0.36, 1] as const;

const shareOptions = [
  {
    icon: Share2,
    title: "Share Hiliree with Others",
    description: "Tell your friends, family, and community about our mission. Every share helps us reach someone who wants to reconnect with their roots.",
    color: COLORS.blue[6],
    iconBg: COLORS.blue[1],
  },
  {
    icon: MessageCircle,
    title: "Join Our Community",
    description: "Engage with us on social media, participate in discussions, and help shape the future of Hiliree.",
    color: COLORS.brand[7],
    iconBg: COLORS.brand[1],
  },
  {
    icon: Heart,
    title: "Be Part of the Movement",
    description: "Your voice helps build a global platform centered on legacy, connection, and family stories.",
    color: COLORS.magenta[6],
    iconBg: COLORS.magenta[1],
  },
];

export function DonationShare() {
  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #252540 0%, #1E1E30 50%, #1A1A28 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${COLORS.blue[6]} 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <motion.div
        className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: `${COLORS.blue[6]}0D` }}
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full border mb-5"
            style={{
              color: COLORS.blue[3],
              backgroundColor: `${COLORS.blue[6]}1A`,
              borderColor: `${COLORS.blue[6]}33`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.blue[5] }} />
            Not Ready to Donate?
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em]" style={{ color: COLORS.text[5] }}>
            You can still help
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {shareOptions.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl h-full"
                style={{ background: COLORS.text[5] }}
              >
                <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: item.color }} />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: item.iconBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                </div>
                <h3 className="font-['Cormorant_Garamond',serif] text-base font-bold mb-2 leading-snug" style={{ color: COLORS.text[1] }}>
                  {item.title}
                </h3>
                <p className="text-[12px] leading-relaxed font-light" style={{ color: COLORS.text[2] }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}