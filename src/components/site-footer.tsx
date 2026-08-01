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
    <footer className="relative overflow-hidden bg-surface/80 text-foreground border-t border-border py-14 sm:py-20">
      {/* Background Brand Watermark "FURII" on the Side */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <span className="absolute -bottom-8 -right-8 font-mono text-[22vw] sm:text-[18vw] font-black uppercase leading-none tracking-tighter text-foreground/[0.045] transition-all duration-700">
          FURII
        </span>
      </div>

      <div className="container-page relative z-10 flex flex-col gap-10 sm:gap-12">
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

          {/* Status Indicator & Back to Top */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-3.5 py-1.5 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] text-muted-foreground font-medium">
                Addis Ababa / GMT+3 · Available Worldwide
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-xs font-mono uppercase tracking-widest text-foreground transition-all duration-500 ease-out hover:border-foreground hover:bg-foreground hover:text-background hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Middle Bar: Minimal Navigation Links */}
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

          {/* Quick Direct Contacts */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
            <a
              href="mailto:furiimotionlabsceo@outlook.com"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-300"
            >
              <Mail className="h-3.5 w-3.5" />
              furiimotionlabsceo@outlook.com
            </a>
            <span className="hidden sm:inline text-border">•</span>
            <a
              href="tel:+251909312671"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-300"
            >
              <Phone className="h-3.5 w-3.5" />
              +251 909 312 671
            </a>
            <span className="hidden sm:inline text-border">•</span>
            <a
              href="https://wa.me/251909312671?text=Hello%20Mikiyas,%20I'd%20like%20to%20discuss%20an%20enterprise%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-300"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              WhatsApp
            </a>
            <span className="hidden sm:inline text-border">•</span>
            <a
              href="https://instagram.com/furiimotionlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-300"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              Instagram
            </a>
          </div>
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
