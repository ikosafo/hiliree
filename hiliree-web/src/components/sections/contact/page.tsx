"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Clock, Mail, Zap, Send, Loader2, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const schema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  topic: z.string().min(1, "Select a topic"),
  message: z.string().min(10, "Min 10 characters").max(500, "Max 500 characters"),
});

type FormData = z.infer<typeof schema>;

const inputBase =
  "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 font-poppins outline-none transition-all duration-300 focus:border-[#41307e]";

export function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const messageVal = watch("message") ?? "";

  async function onSubmit(data: FormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="pt-24 pb-20 min-h-screen" style={{ background: "#FAFAF8" }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-14"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400 mb-3 block font-poppins">
            Get in Touch
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold tracking-[-0.02em] mb-4" style={{ color: "#2D206A" }}>
            We are real people. We really read this.
          </h1>
          <p className="text-[14px] text-gray-500 leading-relaxed max-w-lg font-light">
            Have a question, suggestion, or just want to say hello? We reply to every message personally, usually within 24 hours.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-14">
          {/* Left Column — Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
            className="lg:col-span-1"
          >
            <div className="space-y-7">
              {[
                { icon: Clock, label: "Response Time", value: "Within 24 hours", description: "We prioritize every message" },
                { icon: Mail, label: "Direct Email", value: "support@hiliree.com", description: "Reach us anytime", href: "mailto:support@hiliree.com" },
                { icon: Zap, label: "Quick Help", value: "FAQ & Support", description: "Find instant answers", href: "/faq" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex gap-3 mb-2">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      <item.icon size={17} className="text-gray-700" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.08em] font-poppins">{item.label}</div>
                      <div>
                        {item.href ? (
                          <Link href={item.href} className="text-[13px] font-semibold text-gray-900 hover:text-[#41307e] transition-colors font-poppins">
                            {item.value}
                          </Link>
                        ) : (
                          <div className="text-[13px] font-semibold text-gray-900 font-poppins">{item.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 ml-[52px] font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: EASE }}
            className="lg:col-span-2"
          >
            {status === "success" ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={22} className="text-emerald-500" />
                </div>
                <h3 className="font-['Cormorant_Garamond',serif] text-lg text-gray-900 mb-1">Message sent!</h3>
                <p className="text-[12px] text-gray-500 mb-5 font-light">We'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-[12px] font-medium font-poppins hover:bg-gray-50 transition-colors">
                  Send another message
                </button>
              </div>
            ) : status === "error" ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle size={22} className="text-red-500" />
                </div>
                <h3 className="font-['Cormorant_Garamond',serif] text-lg text-gray-900 mb-1">Something went wrong</h3>
                <p className="text-[12px] text-gray-500 mb-5 font-light">
                  Please try again or email <a href="mailto:support@hiliree.com" className="text-[#41307e] font-medium">support@hiliree.com</a>
                </p>
                <button onClick={() => setStatus("idle")} className="px-5 py-2.5 rounded-xl bg-[#41307e] text-white text-[12px] font-medium font-poppins transition-colors">
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-4" noValidate>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-1.5 font-poppins">First name</label>
                    <input {...register("firstName")} placeholder="Jane" className={inputBase} />
                    {errors.firstName && <p className="text-[10px] text-red-500 mt-1 font-poppins">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-1.5 font-poppins">Last name</label>
                    <input {...register("lastName")} placeholder="Smith" className={inputBase} />
                    {errors.lastName && <p className="text-[10px] text-red-500 mt-1 font-poppins">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-1.5 font-poppins">Email address</label>
                  <input {...register("email")} type="email" placeholder="jane@example.com" className={inputBase} />
                  {errors.email && <p className="text-[10px] text-red-500 mt-1 font-poppins">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-1.5 font-poppins">Topic</label>
                  <div className="relative">
                    <select {...register("topic")} className={`${inputBase} appearance-none pr-10 cursor-pointer`} defaultValue="">
                      <option value="" disabled>Select a topic</option>
                      <option value="support">Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  {errors.topic && <p className="text-[10px] text-red-500 mt-1 font-poppins">{errors.topic.message}</p>}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-500 font-poppins">Message</label>
                    <span className={`text-[10px] font-medium tabular-nums font-poppins ${messageVal.length > 450 ? "text-amber-500" : "text-gray-400"}`}>
                      {messageVal.length}/500
                    </span>
                  </div>
                  <textarea {...register("message")} rows={5} placeholder="Tell us how we can help…" className={`${inputBase} resize-none leading-relaxed`} />
                  {errors.message && <p className="text-[10px] text-red-500 mt-1 font-poppins">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-[13px] text-white font-poppins transition-all duration-300 active:scale-[0.98] disabled:opacity-60"
                  style={{ background: "#41307e" }}
                >
                  {status === "sending" ? (
                    <><Loader2 size={14} className="animate-spin" />Sending…</>
                  ) : (
                    <><Send size={14} />Send Message</>
                  )}
                </button>

                <p className="text-[10px] text-gray-400 text-center font-poppins">We respect your privacy. Your information is safe with us.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}