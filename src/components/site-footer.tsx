import { Link } from "@tanstack/react-router";
import { ArrowUp, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white border-t border-neutral-800 py-20 sm:py-28 md:py-36">
      {/* Bold Prominent Background Brand Watermark "FURII" */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="font-mono text-[30vw] sm:text-[28vw] font-black uppercase leading-none tracking-tighter text-white/10 sm:text-white/12 transition-all duration-700">
          FURII
        </span>
      </div>

      <div className="container-page relative z-10 flex flex-col gap-12 sm:gap-16">
        {/* Top Bar: Brand Monogram & Live Status */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="group inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-[13px] font-mono font-bold tracking-tight text-black shadow-md transition-transform duration-500 ease-out group-hover:scale-110">
              MS
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[17px] font-bold tracking-tight text-white transition-colors duration-500">
                Mikiyas Sahilu
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mt-1 font-medium">
                CTO & Enterprise Systems Architect · FURII
              </span>
            </span>
          </Link>

          {/* Status Indicator & Back to Top */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-800 bg-neutral-900/90 px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] text-neutral-300 font-medium">
                Addis Ababa / GMT+3 · Available Worldwide
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-900/90 px-4 py-2 text-xs font-mono uppercase tracking-widest text-white transition-all duration-500 ease-out hover:border-white hover:bg-white hover:text-black hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Middle Bar: Minimal Navigation Links */}
        <div className="flex flex-col gap-6 border-y border-neutral-800 py-8 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap items-center gap-6 sm:gap-10">
            <a
              href="/#the-architect"
              onClick={(e) => scrollToSection("the-architect", e)}
              className="text-sm sm:text-base font-semibold text-neutral-400 transition-colors duration-500 hover:text-white cursor-pointer"
            >
              The Architect
            </a>
            <Link
              to="/systems"
              className="text-sm sm:text-base font-semibold text-neutral-400 transition-colors duration-500 hover:text-white"
            >
              Systems
            </Link>
            <a
              href="/#architecture"
              onClick={(e) => scrollToSection("architecture", e)}
              className="text-sm sm:text-base font-semibold text-neutral-400 transition-colors duration-500 hover:text-white cursor-pointer"
            >
              Architecture
            </a>
            <a
              href="/#applied-ai"
              onClick={(e) => scrollToSection("applied-ai", e)}
              className="text-sm sm:text-base font-semibold text-neutral-400 transition-colors duration-500 hover:text-white cursor-pointer"
            >
              AI
            </a>
            <Link
              to="/contact"
              className="text-sm sm:text-base font-semibold text-neutral-400 transition-colors duration-500 hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* Quick Direct Contacts */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
            <a
              href="mailto:furiimotionlabsceo@outlook.com"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors duration-300"
            >
              <Mail className="h-3.5 w-3.5" />
              furiimotionlabsceo@outlook.com
            </a>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <a
              href="tel:+251909312671"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors duration-300"
            >
              <Phone className="h-3.5 w-3.5" />
              +251 909 312 671
            </a>
          </div>
        </div>

        {/* Bottom Bar: Clean Copyright */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-neutral-500">
            © {new Date().getFullYear()} Mikiyas Sahilu, FURII. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            Engineering High-Throughput Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
