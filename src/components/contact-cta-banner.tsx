import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function ContactCtaBanner() {
  return (
    <section className="container-page py-16 sm:py-24">
      <Link
        to="/contact"
        className="group relative block overflow-hidden rounded-[28px] sm:rounded-[36px] bg-foreground p-8 sm:p-12 md:p-16 text-background shadow-xl border border-foreground transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-foreground"
      >
        {/* Ambient subtle animated gradient beam background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 opacity-90" />
        <div className="absolute inset-0 grid-bg opacity-[0.07]" />

        {/* Decorative corner glow */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-white/15" />

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/15">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/90 font-medium">
                Available for new engagements
              </span>
            </div>

            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08]">
              Have an ambitious platform to build?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
              We collaborate with forward-thinking organizations to engineer high-throughput systems and applied AI workflows.
            </p>
          </div>

          {/* Huge Animated Action Button Element */}
          <div className="mt-4 md:mt-0 shrink-0">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-semibold text-black shadow-lg transition-all duration-500 ease-out group-hover:bg-neutral-100 group-hover:scale-105 group-hover:shadow-2xl">
              <span>Start the Conversation</span>
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-black text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
