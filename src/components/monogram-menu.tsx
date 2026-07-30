import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

const menuLinks = [
  { to: "/", label: "The Architect", description: "CTO & Enterprise Systems Architect" },
  { to: "/systems", label: "Systems", description: "12 enterprise platforms we've built" },
  { to: "/architecture", label: "Architecture", description: "Infrastructure & engineering philosophy" },
  { to: "/ai", label: "AI", description: "Applied AI & automation workflows" },
  { to: "/media", label: "Media", description: "Press, appearances & publications" },
  { to: "/contact", label: "Contact", description: "Book a meeting or get in touch" },
] as const;

export function MonogramMenu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ── Floating Monogram Button ── */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        className={`fixed top-5 left-5 sm:left-6 lg:left-8 z-50 group flex items-center gap-2.5 transition-all duration-500 ease-out ${
          open ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"
        }`}
      >
        <span
          className={`grid h-10 w-10 place-items-center rounded-2xl text-[13px] font-mono font-bold tracking-tight shadow-lg transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-xl ${
            scrolled
              ? "bg-foreground text-background border border-foreground/20"
              : "bg-foreground/90 text-background backdrop-blur-sm border border-foreground/10"
          }`}
        >
          MS
        </span>
        <span className="hidden sm:flex flex-col leading-none">
          <span className="text-[13px] font-bold tracking-tight text-foreground transition-colors duration-500">
            Mikiyas Sahilu
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">
            CTO & Architect
          </span>
        </span>
      </button>

      {/* ── Full-Screen Overlay Menu ── */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-700 ease-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-dvh flex-col justify-between p-6 sm:p-10 lg:p-16">
          {/* Top bar: Logo + Close */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-foreground text-[13px] font-mono font-bold tracking-tight text-background">
                MS
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[14px] font-bold tracking-tight text-foreground">
                  Mikiyas Sahilu
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">
                  CTO & Architect
                </span>
              </span>
            </Link>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-2xl border border-border transition-all duration-500 ease-out hover:bg-foreground hover:text-background hover:border-foreground hover:scale-110"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex items-center">
            <ul className="w-full max-w-3xl mx-auto space-y-1 sm:space-y-2">
              {menuLinks.map((link, i) => (
                <li
                  key={link.to}
                  className={`transition-all duration-700 ease-out ${
                    open
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: open ? `${150 + i * 80}ms` : "0ms",
                  }}
                >
                  <Link
                    to={link.to}
                    activeOptions={{ exact: true }}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-2xl px-5 sm:px-6 py-5 sm:py-6 transition-all duration-500 ease-out hover:bg-card hover:shadow-lg border border-transparent hover:border-border"
                    activeProps={{
                      className:
                        "bg-card/50 border-border/50",
                    }}
                  >
                    <div>
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground transition-colors duration-500 group-hover:text-foreground">
                        {link.label}
                      </span>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-normal">
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom bar: Contact info */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6 transition-all duration-700 ease-out ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? "700ms" : "0ms" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              © 2026 Mikiyas Sahilu, FURII. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:furiimotionlabsceo@outlook.com"
                className="font-mono text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                furiimotionlabsceo@outlook.com
              </a>
              <a
                href="tel:+251909312671"
                className="font-mono text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                +251 909 312 671
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
