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
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>(0);

  /* ── Scroll tracking & Immediate boundary dark detection ── */
  useEffect(() => {
    const update = () => {
      const viewportCenter = window.innerHeight / 2;
      let bestIndex = 0;
      let bestDistance = Infinity;

      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      });

      setActiveIndex(bestIndex);

      // Scroll progress percentage (0 to 1) for smooth micro-rotation of arc
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(window.scrollY / maxScroll);
      }

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
  // Semicircle arc dimensions pinned to right screen edge
  const width = 75;
  const height = 170;
  const cx = width; // Pinned directly on right boundary
  const cy = height / 2;
  const radius = 64;

  // Arc span: 150° total (from -75° top to +75° bottom)
  const arcSpan = 150;
  const arcStart = -75;
  const stepDeg = count > 1 ? arcSpan / (count - 1) : 0;

  // Active section angle
  const activeAngle = arcStart + activeIndex * stepDeg;

  // Fluid micro-rotation based on scroll progress (-8° to +8°)
  const microRotation = (scrollProgress - 0.5) * 16;

  return (
    <nav
      aria-label="Minimalist edge compass"
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-12"
      }`}
    >
      <div className="relative" style={{ width, height }}>
        {/* SVG Razor-Thin Semicircle Arc Track */}
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          className="overflow-visible transition-all duration-300"
          style={{
            transform: `rotate(${microRotation}deg)`,
            transformOrigin: `${cx}px ${cy}px`,
            transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Main Semicircle Arc Line */}
          <path
            d={`M ${cx} ${cy - radius} A ${radius} ${radius} 0 0 0 ${cx} ${cy + radius}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={`transition-colors duration-300 ${
              isDarkSection ? "text-white/30" : "text-foreground/20"
            }`}
          />

          {/* Inner Accent Arc */}
          <path
            d={`M ${cx} ${cy - (radius - 12)} A ${radius - 12} ${radius - 12} 0 0 0 ${cx} ${cy + (radius - 12)}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 4"
            className={`transition-colors duration-300 ${
              isDarkSection ? "text-white/20" : "text-foreground/15"
            }`}
          />

          {/* Section Ticks along the Arc */}
          {sections.map((_, i) => {
            const angleDeg = arcStart + i * stepDeg;
            const rad = (angleDeg * Math.PI) / 180;
            const isActive = i === activeIndex;
            const isHovered = i === hoveredIndex;

            // Coordinates extending leftwards from right boundary
            const x1 = cx - radius * Math.cos(rad);
            const y1 = cy + radius * Math.sin(rad);
            const x2 = cx - (radius - (isActive ? 14 : isHovered ? 10 : 7)) * Math.cos(rad);
            const y2 = cy + (radius - (isActive ? 14 : isHovered ? 10 : 7)) * Math.sin(rad);

            return (
              <g key={i}>
                <line
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

                {/* Glowing active node dot */}
                {isActive && (
                  <circle
                    cx={x1}
                    cy={y1}
                    r="2.5"
                    className={`transition-colors duration-300 ${
                      isDarkSection ? "fill-white" : "fill-foreground"
                    }`}
                  />
                )}
              </g>
            );
          })}

          {/* Active Pointer Needle */}
          {(() => {
            const rad = (activeAngle * Math.PI) / 180;
            const pointerX = cx - (radius + 4) * Math.cos(rad);
            const pointerY = cy + (radius + 4) * Math.sin(rad);
            return (
              <circle
                cx={pointerX}
                cy={pointerY}
                r="3"
                className={`transition-all duration-500 ${
                  isDarkSection
                    ? "fill-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                    : "fill-foreground"
                }`}
              />
            );
          })()}
        </svg>

        {/* Invisible Clickable Hit Areas over Arc Ticks */}
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

        {/* Active Section Label (pure text protruding to the left of the arc) */}
        <div className="absolute right-[85px] top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
          <span
            key={activeIndex}
            className={`inline-block font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-bold animate-fade-in transition-colors duration-300 ${
              isDarkSection ? "text-white" : "text-foreground/80"
            }`}
          >
            {sections[activeIndex]?.label}
          </span>
        </div>

        {/* Hovered Section Tooltip (left of hovered tick) */}
        {hoveredIndex !== null && hoveredIndex !== activeIndex && (
          <div className="absolute right-[90px] top-1/2 -translate-y-1/2 whitespace-nowrap animate-fade-in z-50 pointer-events-none">
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
