import { useEffect, useState } from "react";
import {
  Building2,
  GraduationCap,
  Users,
  Briefcase,
  Cloud,
  Database,
  BarChart3,
  Cpu,
  Network,
} from "lucide-react";

type Node = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
};

const nodes: Node[] = [
  { id: "hospital", label: "Hospital", icon: Building2, x: 8, y: 12 },
  { id: "school", label: "School", icon: GraduationCap, x: 8, y: 42 },
  { id: "crm", label: "CRM", icon: Briefcase, x: 8, y: 72 },
  { id: "hr", label: "HR", icon: Users, x: 92, y: 12 },
  { id: "cloud", label: "Cloud", icon: Cloud, x: 92, y: 42 },
  { id: "analytics", label: "Analytics", icon: BarChart3, x: 92, y: 72 },
  { id: "gateway", label: "API Gateway", icon: Network, x: 50, y: 22 },
  { id: "ai", label: "AI Layer", icon: Cpu, x: 50, y: 50 },
  { id: "db", label: "Database", icon: Database, x: 50, y: 78 },
];

const links: [string, string][] = [
  ["hospital", "gateway"],
  ["school", "gateway"],
  ["crm", "gateway"],
  ["gateway", "ai"],
  ["ai", "hr"],
  ["ai", "cloud"],
  ["ai", "db"],
  ["db", "analytics"],
  ["gateway", "db"],
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function ArchitectureDiagram() {
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPulse((p) => (p + 1) % links.length), 900);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/60" />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {links.map(([a, b], i) => {
          const na = getNode(a);
          const nb = getNode(b);
          const active = pulse === i;
          return (
            <g key={`${a}-${b}`}>
              <line
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="currentColor"
                strokeWidth={0.15}
                className={`text-border ${active ? "opacity-100" : "opacity-70"}`}
                vectorEffect="non-scaling-stroke"
              />
              {active && (
                <circle r={0.9} fill="currentColor" className="text-primary">
                  <animateMotion
                    dur="0.9s"
                    repeatCount="1"
                    path={`M ${na.x} ${na.y} L ${nb.x} ${nb.y}`}
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {nodes.map((n) => {
        const Icon = n.icon;
        const center = n.id === "ai";
        return (
          <div
            key={n.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <div
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 shadow-sm backdrop-blur-sm ${
                center
                  ? "border-primary/40 bg-primary text-primary-foreground"
                  : "border-border bg-background/90 text-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="text-[11px] font-medium tracking-tight">{n.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
