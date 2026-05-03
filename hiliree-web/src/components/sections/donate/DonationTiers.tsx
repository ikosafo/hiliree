// hiliree-web\src\components\sections\donate\DonationTiers.tsx
"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import {
  Leaf,
  Hammer,
  Sparkles,
  TreePine,
  Heart,
  X,
  ShieldCheck,
  Lock,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const EASE = [0.22, 1, 0.36, 1] as const;

type Tier = {
  name: string;
  price: number;
  Icon: React.ElementType;
  description: string;
  popular: boolean;
};

const tiers: Tier[] = [
  {
    name: "Supporter",
    price: 10,
    Icon: Leaf,
    description: "Help maintain essential operations and platform stability.",
    popular: false,
  },
  {
    name: "Builder",
    price: 25,
    Icon: Hammer,
    description: "Drives meaningful enhancements, improvements, and regular updates.",
    popular: false,
  },
  {
    name: "Innovator",
    price: 50,
    Icon: Sparkles,
    description: "Powers new features and fuels creative development for stronger family connection.",
    popular: true,
  },
  {
    name: "Legacy Partner",
    price: 100,
    Icon: TreePine,
    description: "A foundational contribution supporting long-term growth, innovation, and the future of Hiliree.",
    popular: false,
  },
];

/* Checkout Form */
function CheckoutForm({
  tier,
  onSuccess,
  onClose,
}: {
  tier: Tier;
  onSuccess: () => void;
  onClose: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setStatus("loading");
    setErrorMsg("");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/donate/thank-you`,
      },
      redirect: "if_required",
    });

    if (error) {
      setErrorMsg(error.message ?? "Payment failed. Please try again.");
      setStatus("error");
    } else {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between px-5 py-4 rounded-2xl border border-[#41307e]/10 bg-[#41307e]/[0.02]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#41307e]/5 flex items-center justify-center">
            <tier.Icon size={18} className="text-[#41307e]" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-gray-900">{tier.name}</p>
            <p className="text-[11px] text-gray-500">One-time donation</p>
          </div>
        </div>
        <span className="font-serif text-2xl text-gray-900 font-bold">
          ${tier.price}
        </span>
      </div>

      <PaymentElement
        options={{
          layout: "tabs",
          fields: { billingDetails: { name: "auto" } },
        }}
      />

      {status === "error" && (
        <div className="flex items-start gap-2.5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-[13px] text-red-600">
          <X size={14} className="shrink-0 mt-0.5" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || !elements || status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-[15px] text-white transition-all active:scale-[0.98] disabled:opacity-60"
        style={{
          background:
            status === "loading"
              ? "#9CA3AF"
              : "linear-gradient(135deg, #41307e 0%, #6C5CE7 100%)",
          boxShadow: "0 4px 25px rgba(65, 48, 126, 0.3)",
        }}
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Processing…
          </>
        ) : (
          <>
            <Heart size={16} />
            Donate ${tier.price}
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-5 text-[11px] text-gray-400">
        <span className="flex items-center gap-1">
          <Lock size={10} />
          SSL encrypted
        </span>
        <span className="flex items-center gap-1">
          <ShieldCheck size={10} />
          Secured by Stripe
        </span>
      </div>
    </form>
  );
}

/* Payment Modal */
function PaymentModal({ tier, onClose }: { tier: Tier; onClose: () => void }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [success, setSuccess] = useState(false);

  useState(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: tier.price, tierName: tier.name }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.clientSecret) setClientSecret(d.clientSecret);
        else setLoadError(true);
      })
      .catch(() => setLoadError(true));
  });

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: EASE } satisfies Transition}
        className="relative w-full max-w-[460px] rounded-3xl overflow-hidden bg-white shadow-[0_32px_80px_rgba(0,0,0,0.15)]"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <p className="font-semibold text-gray-900 text-[15px]">Complete your donation</p>
            <p className="text-[12px] text-gray-500 mt-0.5">Your support helps families stay connected</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors">
            <X size={15} />
          </button>
        </div>

        <div className="px-6 py-6">
          {success ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} className="text-emerald-500" />
              </div>
              <h3 className="font-serif text-2xl text-gray-900">Thank you!</h3>
              <p className="text-gray-500 text-[14px]">
                Your ${tier.price} donation as a <strong className="text-gray-700">{tier.name}</strong> is confirmed.
              </p>
              <button onClick={onClose} className="mt-4 px-6 py-2.5 rounded-full bg-[#41307e] text-white font-semibold text-sm hover:bg-[#41307e]/90 transition-colors">
                Close
              </button>
            </motion.div>
          ) : loadError ? (
            <div className="text-center py-8 space-y-3">
              <p className="text-gray-500 text-[14px]">Unable to load payment. Please try again.</p>
              <button onClick={onClose} className="px-5 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-gray-300 transition-colors">
                Close
              </button>
            </div>
          ) : !clientSecret ? (
            <div className="flex flex-col items-center justify-center py-12 gap-3">
              <svg className="animate-spin w-6 h-6 text-[#41307e]" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.2" />
                <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <p className="text-[13px] text-gray-400">Preparing secure checkout…</p>
            </div>
          ) : (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: {
                  theme: "stripe",
                  variables: {
                    colorPrimary: "#41307e",
                    colorBackground: "#ffffff",
                    colorText: "#111827",
                    colorDanger: "#EF4444",
                    fontFamily: "Poppins, system-ui, sans-serif",
                    borderRadius: "12px",
                    spacingUnit: "4px",
                  },
                  rules: {
                    ".Input": {
                      border: "1.5px solid #E5E7EB",
                      boxShadow: "none",
                      padding: "12px 14px",
                    },
                    ".Input:focus": {
                      border: "1.5px solid #41307e",
                      boxShadow: "0 0 0 3px rgba(65,48,126,0.1)",
                    },
                    ".Label": {
                      fontWeight: "600",
                      fontSize: "12px",
                      color: "#6B7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    },
                  },
                },
              }}
            >
              <CheckoutForm tier={tier} onSuccess={() => setSuccess(true)} onClose={onClose} />
            </Elements>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* Tier Card - with animations */
function TierCard({ tier, index, onSelect }: { tier: Tier; index: number; onSelect: (t: Tier) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.12, 
        duration: 0.6, 
        ease: EASE 
      } satisfies Transition}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: EASE } }}
      className="group relative flex flex-col rounded-3xl border overflow-hidden cursor-pointer transition-shadow duration-500 bg-white"
      style={{
        borderColor: tier.popular ? "rgba(65,48,126,0.4)" : "rgba(65,48,126,0.12)",
        boxShadow: tier.popular
          ? "0 0 0 2px #41307e, 0 12px 40px rgba(65,48,126,0.12)"
          : "0 2px 12px rgba(0,0,0,0.05)",
      }}
      onClick={() => onSelect(tier)}
    >
      {/* Popular badge with animation */}
      {tier.popular && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.12, duration: 0.4 }}
          className="absolute -top-px left-1/2 -translate-x-1/2"
        >
          <div className="bg-[#41307e] text-white text-[10px] font-bold px-4 py-1.5 rounded-b-xl tracking-wide flex items-center gap-1.5 shadow-lg shadow-[#41307e]/25">
            <Star size={10} fill="white" className="animate-pulse" />
            MOST POPULAR
          </div>
        </motion.div>
      )}

      <div className="flex flex-col flex-1 p-7 pt-8 text-center">
        {/* Animated icon */}
        <motion.div 
          className="w-12 h-12 mx-auto rounded-2xl bg-[#41307e]/5 flex items-center justify-center mb-5"
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <tier.Icon size={22} className="text-[#41307e]" strokeWidth={1.5} />
        </motion.div>

        {/* Name with stagger */}
        <motion.p 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.12, duration: 0.4 }}
          className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1"
        >
          {tier.name}
        </motion.p>

        {/* Price with animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.12, duration: 0.5, ease: EASE }}
          className="flex items-end justify-center gap-0.5 mb-4"
        >
          <span className="text-[15px] font-light text-gray-400 mb-1.5">$</span>
          <span className="font-serif text-[56px] leading-none text-gray-900 tracking-tight">{tier.price}</span>
          <span className="text-[12px] text-gray-400 mb-2 ml-1">/mo</span>
        </motion.div>

        {/* Description with fade */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + index * 0.12, duration: 0.4 }}
          className="text-[14px] text-gray-500 leading-relaxed mb-8 flex-1"
        >
          {tier.description}
        </motion.p>

        {/* CTA button with hover animation */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-[14px] transition-all relative overflow-hidden group/btn"
          style={
            tier.popular
              ? {
                  background: "linear-gradient(135deg, #41307e 0%, #6C5CE7 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 25px rgba(65,48,126,0.3)",
                }
              : {
                  background: "rgba(65,48,126,0.05)",
                  color: "#41307e",
                  border: "1.5px solid rgba(65,48,126,0.15)",
                }
          }
        >
          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
          <Heart size={14} />
          Donate ${tier.price}
          <ArrowRight size={13} className="ml-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
}

/* Main export */
export function DonationTiers() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const handleClose = useCallback(() => setSelectedTier(null), []);

  return (
    <>
      <section className="relative py-24 bg-[#41307e] overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6C5CE7]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#8B7CF6]/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />

        {/* Dividers */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="section-wrapper relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/50 mb-4"
            >
              <span className="w-1 h-1 rounded-full bg-white/50" />
              Choose Your Impact Level
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-serif text-[36px] lg:text-[42px] leading-[1.08] text-white"
            >
              Pick a tier that reflects how you'd like
              <br />
              to support Hiliree's mission
            </motion.h2>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {tiers.map((tier, i) => (
              <TierCard key={tier.name} tier={tier} index={i} onSelect={setSelectedTier} />
            ))}
          </div>

          {/* Footer note */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 text-center flex items-center justify-center gap-2 text-[12px] text-white/40"
          >
            <Lock size={11} />
            100% secure · Powered by Stripe · No account required
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedTier && <PaymentModal tier={selectedTier} onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
}