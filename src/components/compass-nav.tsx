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
  // Dimensions for half-compass right edge dial
  const width = 160;
  const height = 200;
  const cx = width; // Pivot point pinned to extreme right edge
  const cy = height / 2;
  const radius = 95;

  // Arc span: 130° total (from -65° top to +65° bottom)
  const arcSpan = 130;
  const arcStart = -65;
  const stepDeg = count > 1 ? arcSpan / (count - 1) : 0;

  // Active section angle for the needle
  const activeAngle = arcStart + activeIndex * stepDeg;

  return (
    <nav
      aria-label="Section compass"
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-12"
      }`}
    >
      <div className="relative" style={{ width, height }}>
        {/* SVG Dial with Divider Ticks & Sharp Pointy Needle */}
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          className="overflow-visible transition-all duration-300"
        >
          {/* Section Divider Ticks along the arc (Outer outline removed) */}
          {sections.map((_, i) => {
            const angleDeg = arcStart + i * stepDeg;
            const rad = (angleDeg * Math.PI) / 180;
            const isActive = i === activeIndex;
            const isHovered = i === hoveredIndex;

            const tickLength = isActive ? 18 : isHovered ? 14 : 10;
            const x1 = cx - radius * Math.cos(rad);
            const y1 = cy + radius * Math.sin(rad);
            const x2 = cx - (radius - tickLength) * Math.cos(rad);
            const y2 = cy + (radius - tickLength) * Math.sin(rad);

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
                        ? "stroke-white/90"
                        : "stroke-white/30"
                    : isActive
                      ? "stroke-foreground"
                      : isHovered
                        ? "stroke-foreground/70"
                        : "stroke-foreground/25"
                }`}
              />
            );
          })}

          {/* Sharp Pointy Compass Needle Pivoting at Right Center (cx, cy) */}
          <g
            style={{
              transform: `rotate(${activeAngle}deg)`,
              transformOrigin: `${cx}px ${cy}px`,
              transition: "transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {/* Pointy triangular needle extending leftwards from center pivot */}
            <polygon
              points={`${cx},${cy - 4} ${cx - (radius + 4)},${cy} ${cx},${cy + 4}`}
              className={`transition-colors duration-300 ${
                isDarkSection ? "fill-white text-white" : "fill-foreground text-foreground"
              }`}
            />
            {/* Inner decorative needle accent line */}
            <line
              x1={cx}
              y1={cy}
              x2={cx - (radius + 4)}
              y2={cy}
              strokeWidth="0.75"
              className={isDarkSection ? "stroke-black" : "stroke-background"}
            />
            {/* Center Pivot Dot on Right Edge */}
            <circle
              cx={cx}
              cy={cy}
              r="5"
              className={`transition-colors duration-300 ${
                isDarkSection ? "fill-white" : "fill-foreground"
              }`}
            />
            <circle
              cx={cx}
              cy={cy}
              r="2.5"
              className={`transition-colors duration-300 ${
                isDarkSection ? "fill-black" : "fill-card"
              }`}
            />
          </g>
        </svg>

        {/* Clickable Hit Areas over Ticks */}
        {sections.map((section, i) => {
          const angleDeg = arcStart + i * stepDeg;
          const rad = (angleDeg * Math.PI) / 180;
          const hitX = cx - radius * Math.cos(rad);
          const hitY = cy + radius * Math.sin(rad);

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
                width: 24,
                height: 24,
                left: hitX - 12,
                top: hitY - 12,
              }}
            />
          );
        })}

        {/* Active Section Label sitting RIGHT ALONG THE ACTIVE TICK ON THE ARC */}
        {(() => {
          const rad = (activeAngle * Math.PI) / 180;
          const labelX = cx - (radius + 14) * Math.cos(rad);
          const labelY = cy + (radius + 14) * Math.sin(rad);

          return (
            <div
              className="absolute pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                left: labelX,
                top: labelY,
                transform: "translate(-100%, -50%)",
              }}
            >
              <span
                key={activeIndex}
                className={`inline-block font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-bold animate-fade-in transition-colors duration-300 ${
                  isDarkSection ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" : "text-foreground drop-shadow-sm"
                }`}
              >
                {sections[activeIndex]?.label}
              </span>
            </div>
          );
        })()}

        {/* Hovered Section Tooltip (sitting along the hovered tick) */}
        {hoveredIndex !== null && hoveredIndex !== activeIndex && (() => {
          const angleDeg = arcStart + hoveredIndex * stepDeg;
          const rad = (angleDeg * Math.PI) / 180;
          const hX = cx - (radius + 14) * Math.cos(rad);
          const hY = cy + (radius + 14) * Math.sin(rad);

          return (
            <div
              className="absolute pointer-events-none z-50 animate-fade-in"
              style={{
                left: hX,
                top: hY,
                transform: "translate(-100%, -50%)",
              }}
            >
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
          );
        })()}
      </div>
    </nav>
  );
}
