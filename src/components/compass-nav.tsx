import { useEffect, useState, useCallback, useRef } from "react";

export interface CompassSection {
  id: string;
  label: string;
}

interface CompassNavProps {
  sections: CompassSection[];
}

export function CompassNav({ sections }: CompassNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const rafRef = useRef<number>(0);

  /* ── Physical position tracking & Immediate boundary dark detection ── */
  useEffect(() => {
    const update = () => {
      const viewportCenter = window.innerHeight / 2;
      let bestIndex = 0;
      let bestDistance = Infinity;

      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Distance from section's vertical center to viewport center
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      });

      setActiveIndex(bestIndex);

      // Check if compass center (window.innerHeight / 2) is physically inside any dark section
      const compassY = window.innerHeight / 2;
      const darkSectionIds = ["architecture", "applied-ai"];
      const isCurrentlyOverDark = darkSectionIds.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= compassY && rect.bottom >= compassY;
      });

      setIsDarkSection(isCurrentlyOverDark);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    // Show compass after a short delay for elegant entrance
    const showTimer = setTimeout(() => setVisible(true), 600);

    update(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      clearTimeout(showTimer);
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  /* ── Scroll to section ── */
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  if (sections.length === 0) return null;

  const count = sections.length;
  // Distribute sections across 240 degrees (-120 to +120, with 0 at top)
  const arcSpan = 240;
  const arcStart = -120;
  const stepDeg = count > 1 ? arcSpan / (count - 1) : 0;

  // Needle rotation for the active section
  const needleAngle = arcStart + activeIndex * stepDeg;

  // Ring dimensions
  const size = 120;
  const outerR = size / 2;
  const innerR = outerR - 18;
  const tickR = outerR - 4;
  const tickInnerR = outerR - 12;
  const cx = outerR;
  const cy = outerR;

  return (
    <nav
      aria-label="Section compass"
      className={`fixed right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 scale-100 translate-x-0"
          : "opacity-0 scale-75 translate-x-8"
      }`}
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* SVG Compass Dial */}
        <svg
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
          className="drop-shadow-xl transition-all duration-300"
        >
          {/* Outer ring */}
          <circle
            cx={cx}
            cy={cy}
            r={outerR - 1}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            className={`transition-colors duration-300 ${
              isDarkSection ? "text-white/30" : "text-foreground/15"
            }`}
          />

          {/* Inner filled circle (the dial face) */}
          <circle
            cx={cx}
            cy={cy}
            r={innerR}
            className={`transition-all duration-300 ${
              isDarkSection
                ? "fill-neutral-950/95 stroke-white/40 shadow-2xl"
                : "fill-card/95 stroke-border shadow-md"
            }`}
            strokeWidth="0.75"
          />

          {/* Subtle radial gradient glow behind active tick */}
          <defs>
            <radialGradient id="compass-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle
            cx={cx}
            cy={cy}
            r={outerR - 2}
            fill="url(#compass-glow)"
            className={`transition-colors duration-300 ${
              isDarkSection ? "text-white" : "text-foreground"
            }`}
          />

          {/* Section tick marks */}
          {sections.map((_, i) => {
            const angle = arcStart + i * stepDeg;
            const rad = (angle * Math.PI) / 180;
            const isActive = i === activeIndex;
            const isHovered = i === hoveredIndex;

            const x1 = cx + tickR * Math.sin(rad);
            const y1 = cy - tickR * Math.cos(rad);
            const x2 = cx + tickInnerR * Math.sin(rad);
            const y2 = cy - tickInnerR * Math.cos(rad);

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                strokeWidth={isActive ? 2.5 : isHovered ? 1.5 : 1}
                strokeLinecap="round"
                className={`transition-all duration-300 ${
                  isDarkSection
                    ? isActive
                      ? "stroke-white"
                      : isHovered
                        ? "stroke-white/80"
                        : "stroke-white/30"
                    : isActive
                      ? "stroke-foreground"
                      : isHovered
                        ? "stroke-foreground/60"
                        : "stroke-foreground/20"
                }`}
              />
            );
          })}

          {/* Fine decorative ticks between sections */}
          {sections.length > 1 &&
            sections.slice(0, -1).map((_, i) => {
              const midAngle = arcStart + i * stepDeg + stepDeg / 2;
              const rad = (midAngle * Math.PI) / 180;
              const x1 = cx + (tickR - 1) * Math.sin(rad);
              const y1 = cy - (tickR - 1) * Math.cos(rad);
              const x2 = cx + (tickInnerR + 3) * Math.sin(rad);
              const y2 = cy - (tickInnerR + 3) * Math.cos(rad);
              return (
                <line
                  key={`mid-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  strokeWidth={0.5}
                  strokeLinecap="round"
                  className={`transition-colors duration-300 ${
                    isDarkSection ? "stroke-white/20" : "stroke-foreground/10"
                  }`}
                />
              );
            })}

          {/* Needle */}
          <g
            style={{
              transform: `rotate(${needleAngle}deg)`,
              transformOrigin: `${cx}px ${cy}px`,
              transition: "transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {/* Needle body */}
            <line
              x1={cx}
              y1={cy}
              x2={cx}
              y2={cy - innerR + 6}
              strokeWidth="2"
              strokeLinecap="round"
              className={`transition-colors duration-300 ${
                isDarkSection ? "stroke-white" : "stroke-foreground"
              }`}
            />
            {/* Needle tip (arrowhead dot) */}
            <circle
              cx={cx}
              cy={cy - innerR + 4}
              r="2.5"
              className={`transition-colors duration-300 ${
                isDarkSection ? "fill-white" : "fill-foreground"
              }`}
            />
            {/* Center pivot */}
            <circle
              cx={cx}
              cy={cy}
              r="3.5"
              className={`transition-colors duration-300 ${
                isDarkSection ? "fill-white" : "fill-foreground"
              }`}
            />
            <circle
              cx={cx}
              cy={cy}
              r="2"
              className={`transition-colors duration-300 ${
                isDarkSection ? "fill-neutral-950" : "fill-card"
              }`}
            />
          </g>
        </svg>

        {/* Invisible clickable areas over each tick mark */}
        {sections.map((section, i) => {
          const angle = arcStart + i * stepDeg;
          const rad = (angle * Math.PI) / 180;
          const hitR = outerR - 8;
          const hitX = cx + hitR * Math.sin(rad);
          const hitY = cy - hitR * Math.cos(rad);

          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-label={`Scroll to ${section.label}`}
              aria-current={i === activeIndex ? "true" : undefined}
              className="absolute rounded-full transition-colors duration-300 hover:bg-white/20"
              style={{
                width: 20,
                height: 20,
                left: hitX - 10,
                top: hitY - 10,
              }}
            />
          );
        })}

        {/* Active section label (pure text below the compass) */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 whitespace-nowrap pointer-events-none">
          <span
            key={activeIndex}
            className={`inline-block font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-bold animate-fade-in transition-colors duration-300 ${
              isDarkSection ? "text-white" : "text-foreground/80"
            }`}
          >
            {sections[activeIndex]?.label}
          </span>
        </div>

        {/* Hovered section tooltip */}
        {hoveredIndex !== null && hoveredIndex !== activeIndex && (
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 whitespace-nowrap animate-fade-in z-50 pointer-events-none">
            <span
              className={`inline-block rounded-md px-2.5 py-1 text-[9px] font-bold tracking-wide shadow-xl ${
                isDarkSection
                  ? "bg-white text-black"
                  : "bg-foreground text-background"
              }`}
            >
              {sections[hoveredIndex]?.label}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
