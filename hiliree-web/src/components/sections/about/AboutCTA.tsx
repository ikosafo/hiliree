import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden bg-[#FFFBEB]">
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.12]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(65,48,126,0.03)_0%,transparent_70%)]" />
      
      {/* Subtle decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#41307e]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9D8FD1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-8 z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Small label */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 mb-6">
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            Support Our Mission
          </span>

          {/* Main heading */}
          <h2 className="font-serif text-[40px] lg:text-[48px] text-gray-900 leading-[1.08] mb-6">
            Help us connect families across{" "}
            <span className="italic font-light text-gray-400">generations</span>
          </h2>

          {/* Description */}
          <p className="text-[16px] text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            Hiliree stands as a steady foundation—a place to honor where we come from and shape where we are going. In a world defined by change, we remain committed to helping families build, preserve, and share their legacy.
          </p>

          {/* Secondary message */}
          <p className="text-[15px] text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            Because the stories we craft today become the guiding lights for those who come after us. Join us as we help families strengthen their bonds and celebrate the ties that endure.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-[#41307e] transition-all duration-500 hover:-translate-y-1 shadow-xl shadow-[#41307e]/10 hover:shadow-2xl hover:shadow-[#41307e]/20"
            >
              Support Hiliree
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl text-sm font-semibold text-[#41307e] border border-[#41307e]/20 hover:border-[#41307e]/40 hover:bg-[#41307e]/5 transition-all duration-500 hover:-translate-y-1"
            >
              Get in Touch
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}