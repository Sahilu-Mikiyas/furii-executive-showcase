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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md shadow-xs"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-2.5 shrink-0">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-foreground text-[12px] font-mono font-bold tracking-tight text-background shadow-xs transition-transform duration-300 ease-in-out group-hover:scale-105">
            MS
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[14px] sm:text-[15px] font-bold tracking-tight text-foreground transition-colors duration-300">
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
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden items-center rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 ease-in-out hover:bg-foreground hover:text-background hover:border-foreground hover:-translate-y-0.5 hover:shadow-md xl:inline-flex"
          >
            Book a Meeting
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-xl border border-border xl:hidden transition-all duration-300 ease-in-out hover:bg-foreground hover:text-background hover:border-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md xl:hidden shadow-lg transition-all duration-300 ease-in-out">
          <div className="container-page flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground transition-colors duration-300 hover:text-muted-foreground"
                activeProps={{ className: "font-semibold text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-foreground border border-foreground px-4 py-2.5 text-sm font-medium text-background transition-all duration-300 ease-in-out hover:bg-background hover:text-foreground hover:border-foreground"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
