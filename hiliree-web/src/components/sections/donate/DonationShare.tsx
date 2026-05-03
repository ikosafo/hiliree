// hiliree-web\src\components\sections\donate\DonationShare.tsx
"use client";
import { motion } from "framer-motion";
import { Share2, MessageCircle, Heart } from "lucide-react";

const shareOptions = [
  {
    icon: Share2,
    title: "Share Hiliree with Others",
    description: "Tell your friends, family, and community about our mission. Every share helps us reach someone who wants to reconnect with their roots.",
    gradient: "from-[#41307e]/5 to-[#6C5CE7]/5",
    borderHover: "hover:border-[#41307e]/20",
    iconBg: "bg-[#41307e]/5",
    iconColor: "text-[#41307e]",
  },
  {
    icon: MessageCircle,
    title: "Join Our Community",
    description: "Engage with us on social media, participate in discussions, and help shape the future of Hiliree.",
    gradient: "from-[#6C5CE7]/5 to-[#8B7CF6]/5",
    borderHover: "hover:border-[#6C5CE7]/20",
    iconBg: "bg-[#6C5CE7]/5",
    iconColor: "text-[#6C5CE7]",
  },
  {
    icon: Heart,
    title: "Be Part of the Movement",
    description: "Your voice helps build a global platform centered on legacy, connection, and family stories.",
    gradient: "from-[#8B7CF6]/5 to-[#A78BFA]/5",
    borderHover: "hover:border-[#8B7CF6]/20",
    iconBg: "bg-[#8B7CF6]/5",
    iconColor: "text-[#8B7CF6]",
  },
];

export function DonationShare() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#41307e]/3 rounded-full blur-[150px] opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6C5CE7]/3 rounded-full blur-[120px] opacity-30" />

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#41307e]/10 to-transparent" />

      <div className="section-wrapper max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-4">
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            Not Ready to Donate?
          </span>
          <h2 className="font-serif text-[40px] lg:text-[48px] leading-[1.08] text-gray-900 mb-4">
            You Can Still Help
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Your voice and support help strengthen our mission of connecting families worldwide
          </p>
        </motion.div>

        {/* Share cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {shareOptions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative p-8 rounded-2xl border border-gray-100 bg-white ${item.borderHover} hover:shadow-xl transition-all duration-500`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6`}
                >
                  <item.icon size={24} className={item.iconColor} strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}