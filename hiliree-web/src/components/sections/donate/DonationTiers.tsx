// hiliree-web\src\components\sections\donate\DonationTiers.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Hammer, Sparkles, TreePine, Heart, X, ShieldCheck, Lock, Gift } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { COLORS } from "@/components/common/ColorGuidePage";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const EASE = [0.22, 1, 0.36, 1] as const;

type Tier = {
  name: string;
  price: number;
  Icon: React.ElementType;
  description: string;
  popular: boolean;
  color: string;
};

const tiers: Tier[] = [
  { name: "Supporter", price: 10, Icon: Leaf, description: "Help maintain essential operations and platform stability.", popular: false, color: COLORS.success[6] },
  { name: "Builder", price: 25, Icon: Hammer, description: "Drives meaningful enhancements, improvements, and regular updates.", popular: false, color: COLORS.blue[6] },
  { name: "Innovator", price: 50, Icon: Sparkles, description: "Powers new features and fuels creative development for stronger family connection.", popular: true, color: COLORS.brand[7] },
  { name: "Legacy Partner", price: 100, Icon: TreePine, description: "A foundational contribution supporting long-term growth, innovation, and the future of Hiliree.", popular: false, color: COLORS.gold[6] },
];

const customTier: Tier = {
  name: "Custom Amount",
  price: 0,
  Icon: Gift,
  description: "Choose any amount that feels right to you. Every contribution, no matter the size, makes a difference.",
  popular: false,
  color: COLORS.magenta[6],
};

/* Step 1: Amount */
function DonationForm({ tier, onNext }: { tier: Tier; onNext: (amount: number) => void }) {
  const [amount, setAmount] = useState(tier.price || 25);
  const [customAmount, setCustomAmount] = useState(tier.price === 0 ? "" : "");
  const presetAmounts = [10, 25, 50, 100];
  const isCustomTier = tier.price === 0;

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[14px] font-semibold mb-1" style={{ color: COLORS.text[1] }}>
          {isCustomTier ? "Choose your donation amount" : "How much would you like to donate today?"}
        </p>
        <p className="text-[11px]" style={{ color: COLORS.text[2] }}>All donations directly impact our organization and help us further our mission.</p>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: COLORS.text[3] }}>Donation Amount *</p>
        {!isCustomTier && (
          <div className="grid grid-cols-2 gap-2 mb-3">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                onClick={() => { setAmount(preset); setCustomAmount(""); }}
                className="py-3 rounded-xl text-[14px] font-semibold font-poppins transition-all duration-200"
                style={{
                  background: amount === preset && !customAmount ? COLORS.brand[5] : `${COLORS.brand[5]}0A`,
                  color: amount === preset && !customAmount ? COLORS.text[5] : COLORS.brand[5],
                  border: amount === preset && !customAmount ? `1px solid ${COLORS.brand[5]}` : `1px solid ${COLORS.brand[5]}1A`,
                }}
              >
                ${preset.toFixed(2)}
              </button>
            ))}
          </div>
        )}
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[13px]" style={{ color: COLORS.text[3] }}>$</span>
          <input
            type="number"
            placeholder={isCustomTier ? "Enter your amount" : "Enter custom amount"}
            value={isCustomTier ? customAmount : customAmount}
            onChange={(e) => { setCustomAmount(e.target.value); if (!isCustomTier) setAmount(0); }}
            className="w-full pl-8 pr-4 py-3 rounded-xl border text-[14px] font-poppins outline-none transition-all duration-200"
            style={{
              borderColor: (isCustomTier || customAmount) ? COLORS.brand[5] : `${COLORS.brand[5]}26`,
              background: (isCustomTier || customAmount) ? `${COLORS.brand[5]}05` : COLORS.text[5],
              color: COLORS.text[1],
            }}
          />
        </div>
      </div>

      <button
        onClick={() => onNext(isCustomTier ? parseFloat(customAmount) : (customAmount ? parseFloat(customAmount) : amount))}
        disabled={isCustomTier ? !customAmount : (!amount && !customAmount)}
        className="w-full py-3.5 rounded-xl font-semibold text-[14px] font-poppins transition-all duration-200 disabled:opacity-40"
        style={{ background: COLORS.brand[5], color: COLORS.text[5] }}
      >
        Donate now →
      </button>
    </div>
  );
}

/* Step 2: Info */
function ContactForm({ amount, onBack, onNext }: { amount: number; onBack: () => void; onNext: () => void }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[14px] font-semibold mb-1" style={{ color: COLORS.text[1] }}>Who&apos;s Giving Today?</p>
        <p className="text-[11px]" style={{ color: COLORS.text[2] }}>We&apos;ll never share this information with anyone.</p>
      </div>

      <div className="flex items-center justify-between px-3 py-2.5 rounded-lg" style={{ background: `${COLORS.brand[5]}08` }}>
        <span className="text-[12px]" style={{ color: COLORS.text[2] }}>Donation amount</span>
        <span className="font-['Cormorant_Garamond',serif] text-lg font-bold" style={{ color: COLORS.brand[5] }}>${amount.toFixed(2)}</span>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-[10px] font-semibold uppercase tracking-[0.08em] mb-1.5" style={{ color: COLORS.text[2] }}>First name *</label>
          <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-3 rounded-xl border text-[13px] font-poppins outline-none transition-colors" style={{ borderColor: COLORS.border[2], color: COLORS.text[1] }} />
        </div>
        <div>
          <label className="block text-[10px] font-semibold uppercase tracking-[0.08em] mb-1.5" style={{ color: COLORS.text[2] }}>Last name</label>
          <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-4 py-3 rounded-xl border text-[13px] font-poppins outline-none transition-colors" style={{ borderColor: COLORS.border[2], color: COLORS.text[1] }} />
        </div>
        <div>
          <label className="block text-[10px] font-semibold uppercase tracking-[0.08em] mb-1.5" style={{ color: COLORS.text[2] }}>Email Address *</label>
          <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border text-[13px] font-poppins outline-none transition-colors" style={{ borderColor: COLORS.border[2], color: COLORS.text[1] }} />
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={onBack} className="px-4 py-3 rounded-xl text-[13px] font-semibold border font-poppins transition-colors hover:bg-gray-50" style={{ color: COLORS.text[2], borderColor: COLORS.border[3] }}>Back</button>
        <button onClick={onNext} disabled={!firstName.trim() || !email.trim()} className="flex-1 py-3 rounded-xl font-semibold text-[13px] font-poppins transition-all duration-200 disabled:opacity-40" style={{ background: COLORS.brand[5], color: COLORS.text[5] }}>Continue</button>
      </div>
    </div>
  );
}

/* Step 3: Payment */
function PaymentStep({ amount, onBack }: { amount: number; onBack: () => void }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useState(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, tierName: "Donation" }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.clientSecret) setClientSecret(d.clientSecret);
        else setLoadError(true);
      })
      .catch(() => setLoadError(true));
  });

  if (success) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto" style={{ background: COLORS.success[1] }}>
          <Heart size={24} style={{ color: COLORS.success[5] }} />
        </div>
        <h3 className="font-['Cormorant_Garamond',serif] text-xl" style={{ color: COLORS.text[1] }}>Thank you!</h3>
        <p className="text-[13px]" style={{ color: COLORS.text[2] }}>Your ${amount.toFixed(2)} donation has been received.</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[14px] font-semibold mb-1" style={{ color: COLORS.text[1] }}>Payment Details</p>
        <p className="text-[11px]" style={{ color: COLORS.text[2] }}>How would you like to pay for your donation?</p>
      </div>

      {/* Summary */}
      <div className="p-4 rounded-xl space-y-2" style={{ background: `${COLORS.brand[5]}08`, border: `1px solid ${COLORS.brand[5]}0F` }}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] mb-2" style={{ color: COLORS.text[3] }}>Donation Summary</p>
        <div className="flex justify-between text-[12px]">
          <span style={{ color: COLORS.text[2] }}>Payment Amount</span>
          <span className="font-semibold" style={{ color: COLORS.text[1] }}>${amount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[12px]">
          <span style={{ color: COLORS.text[2] }}>Giving Frequency</span>
          <span style={{ color: COLORS.text[1] }}>One time</span>
        </div>
        <div className="border-t pt-2 mt-2 flex justify-between text-[13px]" style={{ borderColor: `${COLORS.brand[5]}1A` }}>
          <span className="font-semibold" style={{ color: COLORS.text[1] }}>Donation Total</span>
          <span className="font-bold" style={{ color: COLORS.brand[5] }}>${amount.toFixed(2)}</span>
        </div>
      </div>

      <label className="flex items-start gap-2 text-[11px] leading-relaxed cursor-pointer" style={{ color: COLORS.text[2] }}>
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5" style={{ accentColor: COLORS.brand[5] }} />
        I agree to the Terms and conditions.
      </label>

      <p className="text-[10px] leading-relaxed" style={{ color: COLORS.text[3] }}>
        Acceptance of any contribution, gift or grant is at the discretion of Hiliree. Hiliree will not accept any gift unless it can be used or expended consistently with the purpose and mission of Hiliree.
      </p>

      {loadError ? (
        <div className="text-center py-4">
          <p className="text-[12px] mb-3" style={{ color: COLORS.text[2] }}>Unable to load payment. Please try again.</p>
          <button onClick={onBack} className="px-4 py-2 rounded-lg border text-[12px]" style={{ borderColor: COLORS.border[3], color: COLORS.text[2] }}>Go back</button>
        </div>
      ) : !clientSecret ? (
        <div className="flex flex-col items-center justify-center py-8 gap-3">
          <svg className="animate-spin w-5 h-5" style={{ color: COLORS.brand[5] }} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.2" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <p className="text-[12px]" style={{ color: COLORS.text[3] }}>Preparing secure checkout</p>
        </div>
      ) : (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: "stripe",
              variables: { colorPrimary: COLORS.brand[5], colorBackground: COLORS.text[5], colorText: COLORS.text[1], fontFamily: "system-ui, sans-serif", borderRadius: "10px" },
            },
          }}
        >
          <PaymentForm amount={amount} agreed={agreed} onSuccess={() => setSuccess(true)} onBack={onBack} />
        </Elements>
      )}
    </div>
  );
}

function PaymentForm({ amount, agreed, onSuccess, onBack }: { amount: number; agreed: boolean; onSuccess: () => void; onBack: () => void }) {
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
      confirmParams: { return_url: `${window.location.origin}/donate/thank-you` },
      redirect: "if_required",
    });

    if (error) {
      setErrorMsg(error.message ?? "Payment failed.");
      setStatus("error");
    } else {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      {errorMsg && <div className="text-[11px] flex items-start gap-1.5" style={{ color: COLORS.danger[6] }}><X size={11} className="shrink-0 mt-0.5" />{errorMsg}</div>}
      <div className="flex gap-3">
        <button type="button" onClick={onBack} className="px-4 py-3 rounded-xl text-[13px] font-semibold border font-poppins" style={{ color: COLORS.text[2], borderColor: COLORS.border[3] }}>Back</button>
        <button
          type="submit"
          disabled={!stripe || !elements || !agreed || status === "loading"}
          className="flex-1 py-3 rounded-xl font-semibold text-[13px] font-poppins transition-all duration-200 disabled:opacity-40"
          style={{ background: COLORS.brand[5], color: COLORS.text[5] }}
        >
          {status === "loading" ? "Processing..." : `Donate $${amount.toFixed(2)}`}
        </button>
      </div>
      <div className="flex items-center justify-center gap-3 text-[10px]" style={{ color: COLORS.text[3] }}>
        <span className="flex items-center gap-1"><Lock size={9} />SSL encrypted</span>
        <span className="flex items-center gap-1"><ShieldCheck size={9} />Secured by Stripe</span>
      </div>
    </form>
  );
}

/* Modal */
function DonationModal({ tier, onClose }: { tier: Tier; onClose: () => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [amount, setAmount] = useState(tier.price || 0);

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: EASE }}
        className="relative w-full max-w-[460px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl"
        style={{ background: COLORS.text[5] }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b sticky top-0 z-10" style={{ borderColor: COLORS.border[2], background: COLORS.text[5] }}>
          <p className="font-semibold text-[14px]" style={{ color: COLORS.text[1] }}>
            {step === 1 ? "Support Hiliree" : step === 2 ? "Your Information" : "Payment Details"}
          </p>
          <button onClick={onClose} className="w-7 h-7 rounded-full flex items-center justify-center transition-colors" style={{ background: COLORS.fill[2], color: COLORS.text[2] }}>
            <X size={14} />
          </button>
        </div>
        <div className="px-5 py-5">
          {step === 1 && <DonationForm tier={tier} onNext={(amt) => { setAmount(amt); setStep(2); }} />}
          {step === 2 && <ContactForm amount={amount} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
          {step === 3 && <PaymentStep amount={amount} onBack={() => setStep(2)} />}
        </div>
      </motion.div>
    </div>
  );
}

/* Main */
export function DonationTiers() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);

  return (
    <>
      <section className="relative py-16 md:py-20" style={{ background: COLORS.fill[2] }}>
        <div className="max-w-5xl mx-auto px-6">
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
                color: COLORS.brand[5],
                backgroundColor: `${COLORS.brand[5]}15`,
                borderColor: `${COLORS.brand[5]}33`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLORS.brand[5] }} />
              Choose Your Impact Level
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em]" style={{ color: COLORS.brand[6] }}>
              Pick a tier that reflects how you would like{" "}
              <em className="font-light italic" style={{ color: COLORS.text[2] }}>to support Hiliree&apos;s mission</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: EASE }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedTier(tier)}
                className="group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 h-full text-center"
                style={{
                  background: COLORS.text[5],
                  borderColor: tier.popular ? COLORS.brand[7] : `${COLORS.border[2]}80`,
                  boxShadow: tier.popular ? `0 4px 24px ${COLORS.brand[7]}1A` : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {tier.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: COLORS.brand[7], color: COLORS.text[5] }}>Most Popular</span>
                  </div>
                )}
                <div className="flex flex-col h-full">
                  <div className="w-11 h-11 mx-auto rounded-xl flex items-center justify-center mb-4" style={{ background: tier.popular ? `${COLORS.brand[7]}1A` : `${COLORS.border[2]}80` }}>
                    <tier.Icon size={20} style={{ color: tier.popular ? COLORS.brand[7] : COLORS.text[3] }} strokeWidth={1.5} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: COLORS.text[3] }}>{tier.name}</p>
                  <div className="flex items-end justify-center gap-0.5 mb-3">
                    <span className="text-[13px] font-light mb-1" style={{ color: COLORS.text[3] }}>$</span>
                    <span className="font-['Cormorant_Garamond',serif] text-4xl font-bold leading-none" style={{ color: COLORS.text[1] }}>{tier.price}</span>
                    <span className="text-[10px] mb-1 ml-0.5" style={{ color: COLORS.text[3] }}>/mo</span>
                  </div>
                  <p className="text-[12px] leading-relaxed font-light flex-1 mb-5" style={{ color: COLORS.text[2] }}>{tier.description}</p>
                  <div
                    className="w-full py-3 rounded-xl font-semibold text-[12px] transition-all duration-300 font-poppins"
                    style={{
                      background: tier.popular ? COLORS.brand[5] : "transparent",
                      color: tier.popular ? COLORS.text[5] : COLORS.brand[5],
                      border: tier.popular ? "none" : `1px solid ${COLORS.brand[5]}33`,
                    }}
                  >
                    Donate ${tier.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Amount Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
            className="mt-8 text-center"
          >
            <div className="inline-flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="h-px w-12" style={{ background: COLORS.border[3] }} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: COLORS.text[3] }}>or</span>
                <div className="h-px w-12" style={{ background: COLORS.border[3] }} />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTier(customTier)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[13px] font-poppins transition-all duration-300"
                style={{
                  background: `${COLORS.magenta[6]}10`,
                  color: COLORS.magenta[6],
                  border: `1px solid ${COLORS.magenta[6]}30`,
                }}
              >
                <Gift size={16} />
                I prefer a different amount
              </motion.button>
              <p className="text-[11px] max-w-xs mx-auto leading-relaxed" style={{ color: COLORS.text[3] }}>
                You can make an optional contribution of any size.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>{selectedTier && <DonationModal tier={selectedTier} onClose={() => setSelectedTier(null)} />}</AnimatePresence>
    </>
  );
}