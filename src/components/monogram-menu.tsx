import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function MonogramMenu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md shadow-xs"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Left: Brand Monogram & Title */}
        <Link to="/" className="group flex items-center gap-2.5 shrink-0">
          <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl bg-foreground text-[12px] font-mono font-bold tracking-tight text-background shadow-xs transition-transform duration-500 ease-out group-hover:scale-105">
            MS
          </span>
          <span className="flex flex-col text-left leading-none">
            <span className="text-[14px] sm:text-[15px] font-bold tracking-tight text-foreground transition-colors duration-500">
              Mikiyas Sahilu
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">
              CTO & Architect
            </span>
          </span>
        </Link>

        {/* Right: Book a Meeting CTA */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center rounded-xl bg-foreground border border-foreground px-4 py-2 text-xs sm:text-sm font-semibold text-background transition-all duration-500 ease-out hover:bg-background hover:text-foreground hover:border-foreground hover:-translate-y-0.5 hover:shadow-md"
          >
            Book a Meeting
          </Link>
        </div>
      </div>
    </header>
  );
}
