"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";

/* ─────────────────────────────────────────────
   Schema
───────────────────────────────────────────── */
const schema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName:  z.string().min(2, "Required"),
  email:     z.string().email("Invalid email"),
  topic:     z.string().min(1, "Select a topic"),
  message:   z
    .string()
    .min(10, "Min 10 characters")
    .max(500, "Max 500 characters"),
});

type FormData = z.infer<typeof schema>;

/* ─────────────────────────────────────────────
   Shared field styles
───────────────────────────────────────────── */
const inputBase =
  "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 " +
  "focus:outline-none focus:border-[#41307e] focus:ring-1 focus:ring-[#41307e]/20 transition-all duration-300";

const errCls = "text-xs text-red-500 mt-1.5 flex items-center gap-1";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className={errCls}>
      <AlertCircle size={13} className="shrink-0" />
      {msg}
    </p>
  );
}

/* ─────────────────────────────────────────────
   Label
───────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 mb-2">
      {children}
    </label>
  );
}

/* ─────────────────────────────────────────────
   Main form
───────────────────────────────────────────── */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [charCount, setCharCount] = useState(0);

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
      if (res.ok) { reset(); setCharCount(0); }
    } catch {
      setStatus("error");
    }
  }

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div className="relative flex flex-col items-center text-center py-12 px-6 space-y-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center">
            <CheckCircle2 size={30} className="text-green-600" />
          </div>
          <div className="absolute -inset-2 bg-green-100/50 rounded-2xl -z-10 blur-xl" />
        </div>
        <div>
          <h3 className="font-serif text-xl text-gray-900 mb-1">Message sent!</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            We'll get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
        >
          Send another
        </button>
      </div>
    );
  }

  /* ── Error state ── */
  if (status === "error") {
    return (
      <div className="relative flex flex-col items-center text-center py-12 px-6 space-y-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
            <AlertCircle size={30} className="text-red-600" />
          </div>
          <div className="absolute -inset-2 bg-red-100/50 rounded-2xl -z-10 blur-xl" />
        </div>
        <div>
          <h3 className="font-serif text-xl text-gray-900 mb-1">Something went wrong</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Please try again or email{" "}
            <a href="mailto:support@hiliree.com" className="text-[#41307e] hover:underline font-medium">
              support@hiliree.com
            </a>
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 px-5 py-2.5 rounded-xl bg-[#41307e] text-white text-sm font-medium hover:bg-[#41307e]/90 transition-all duration-300 shadow-lg shadow-[#41307e]/10"
        >
          Try Again
        </button>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 bg-[#1a1a2e]">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Subtle radial glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#41307e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#6C5CE7]/5 rounded-full blur-3xl pointer-events-none" />
      
      <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-6 p-8 lg:p-10" noValidate>
        {/* Name row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>First name</Label>
            <input
              {...register("firstName")}
              placeholder="Jane"
              className={inputBase}
            />
            <FieldError msg={errors.firstName?.message} />
          </div>
          <div>
            <Label>Last name</Label>
            <input
              {...register("lastName")}
              placeholder="Smith"
              className={inputBase}
            />
            <FieldError msg={errors.lastName?.message} />
          </div>
        </div>

        {/* Email */}
        <div>
          <Label>Email address</Label>
          <input
            {...register("email")}
            type="email"
            placeholder="jane@example.com"
            className={inputBase}
          />
          <FieldError msg={errors.email?.message} />
        </div>

        {/* Topic */}
        <div>
          <Label>Topic</Label>
          <div className="relative">
            <select
              {...register("topic")}
              className={`${inputBase} appearance-none pr-10 cursor-pointer`}
            >
              <option value="">Select a topic</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
          <FieldError msg={errors.topic?.message} />
        </div>

        {/* Message */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label>Message</Label>
            <span
              className={`text-xs font-medium tabular-nums ${
                messageVal.length > 450 ? "text-amber-400" : "text-gray-400"
              }`}
            >
              {messageVal.length} / 500
            </span>
          </div>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell us how we can help…"
            className={`${inputBase} resize-none leading-relaxed`}
            onChange={(e) => setCharCount(e.target.value.length)}
          />
          <FieldError msg={errors.message?.message} />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#41307e] hover:bg-[#41307e]/90 disabled:opacity-70 transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[#41307e]/20 hover:shadow-xl hover:shadow-[#41307e]/30"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>

        {/* Privacy note */}
        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Your information is safe with us.
        </p>
      </form>
    </div>
  );
}