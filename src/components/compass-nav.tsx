import { useEffect, useState, useCallback } from "react";

export interface CompassSection {
  id: string;
  label: string;
}

interface CompassNavProps {
  sections: CompassSection[];
}

export function CompassNav({ sections }: CompassNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  /* ── Intersection Observer ── */
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio
        let best: IntersectionObserverEntry | null = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        });
        if (best) {
          setActiveId((best as IntersectionObserverEntry).target.id);
        }
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  /* ── Scroll to section ── */
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (sections.length === 0) return null;

  const activeIndex = sections.findIndex((s) => s.id === activeId);

  return (
    <nav
      aria-label="Section compass"
      className="fixed right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-0"
    >
      {sections.map((section, i) => {
        const isActive = section.id === activeId;
        const isHovered = section.id === hoveredId;
        const showLabel = isActive || isHovered;

        return (
          <div key={section.id} className="flex flex-col items-center">
            {/* Connector line above (skip for first item) */}
            {i > 0 && (
              <div
                className={`w-[1.5px] h-5 sm:h-6 transition-all duration-500 ${
                  i <= activeIndex
                    ? "bg-foreground/40"
                    : "bg-border"
                }`}
              />
            )}

            {/* Node */}
            <button
              onClick={() => scrollTo(section.id)}
              onMouseEnter={() => setHoveredId(section.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`Scroll to ${section.label}`}
              aria-current={isActive ? "true" : undefined}
              className="group relative flex items-center"
            >
              {/* Label (slides out from the left) */}
              <span
                className={`absolute right-full mr-3 whitespace-nowrap rounded-lg px-3 py-1.5 text-[10px] sm:text-xs font-semibold tracking-wide transition-all duration-500 ease-out pointer-events-none ${
                  showLabel
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2"
                } ${
                  isActive
                    ? "bg-foreground text-background shadow-lg"
                    : "bg-card border border-border text-foreground shadow-md"
                }`}
              >
                {section.label}
              </span>

              {/* Dot / Node */}
              <span className="relative flex items-center justify-center">
                {/* Glow ring for active */}
                {isActive && (
                  <span className="absolute h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-foreground/10 animate-pulse" />
                )}
                <span
                  className={`relative rounded-full transition-all duration-500 ease-out ${
                    isActive
                      ? "h-3 w-3 sm:h-3.5 sm:w-3.5 bg-foreground shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                      : "h-2 w-2 sm:h-2.5 sm:w-2.5 bg-foreground/30 group-hover:bg-foreground/60 group-hover:scale-125"
                  }`}
                />
              </span>
            </button>
          </div>
        );
      })}
    </nav>
  );
}
