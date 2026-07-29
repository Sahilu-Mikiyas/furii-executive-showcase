import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "About" },
  { to: "/systems", label: "Systems" },
  { to: "/architecture", label: "Architecture" },
  { to: "/ai", label: "AI" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-2.5 shrink-0">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-[12px] font-mono font-bold tracking-tight text-background shadow-sm transition-transform duration-200 group-hover:scale-105">
            MS
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[14px] sm:text-[15px] font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              Mikiyas Sahilu
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">
              CTO & Architect
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex xl:gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden items-center rounded-md border border-border px-4 py-2 text-sm font-medium transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground xl:inline-flex"
          >
            Book a Meeting
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border xl:hidden hover:bg-surface transition-colors"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md xl:hidden shadow-lg">
          <div className="container-page flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground transition-colors hover:text-primary"
                activeProps={{ className: "font-semibold text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
