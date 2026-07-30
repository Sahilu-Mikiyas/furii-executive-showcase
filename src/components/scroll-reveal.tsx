import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "-40px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-12 scale-[0.97]";
      case "down":
        return "-translate-y-12 scale-[0.97]";
      case "left":
        return "translate-x-12 scale-[0.97]";
      case "right":
        return "-translate-x-12 scale-[0.97]";
      default:
        return "translate-y-12 scale-[0.97]";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : `opacity-0 ${getInitialTransform()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
