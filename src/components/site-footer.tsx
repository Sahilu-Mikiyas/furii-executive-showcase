import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";

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
    <footer className="border-t border-border bg-surface/80 py-12 sm:py-16">
      <div className="container-page flex flex-col gap-10">
        {/* Top Bar: Brand Monogram & Live Status */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="group inline-flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-[13px] font-mono font-bold tracking-tight text-background shadow-xs transition-transform duration-500 ease-out group-hover:scale-105">
              MS
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[16px] font-bold tracking-tight text-foreground transition-colors duration-500">
                Mikiyas Sahilu
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5 font-medium">
                CTO & Enterprise Systems Architect · FURII
              </span>
            </span>
          </Link>

          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-3.5 py-1.5 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] text-muted-foreground font-medium">
              Addis Ababa / GMT+3 · Available Worldwide
            </span>
          </div>
        </div>

        {/* Middle Bar: Minimal Navigation Links & Back to Top */}
        <div className="flex flex-col gap-6 border-y border-border/80 py-6 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href="/#the-architect"
              onClick={(e) => scrollToSection("the-architect", e)}
              className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors duration-500 hover:text-foreground cursor-pointer"
            >
              The Architect
            </a>
            <Link
              to="/systems"
              className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors duration-500 hover:text-foreground"
            >
              Systems
            </Link>
            <a
              href="/#architecture"
              onClick={(e) => scrollToSection("architecture", e)}
              className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors duration-500 hover:text-foreground cursor-pointer"
            >
              Architecture
            </a>
            <a
              href="/#applied-ai"
              onClick={(e) => scrollToSection("applied-ai", e)}
              className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors duration-500 hover:text-foreground cursor-pointer"
            >
              AI
            </a>
            <Link
              to="/contact"
              className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors duration-500 hover:text-foreground"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 self-start rounded-xl border border-border bg-background px-4 py-2 text-xs font-mono uppercase tracking-widest text-foreground transition-all duration-500 ease-out hover:border-foreground hover:bg-foreground hover:text-background hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom Bar: Clean Copyright */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-subtle">
            © {new Date().getFullYear()} Mikiyas Sahilu, FURII. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-subtle uppercase tracking-widest">
            Engineering High-Throughput Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
