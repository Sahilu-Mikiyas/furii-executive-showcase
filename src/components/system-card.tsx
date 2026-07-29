import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Cpu, ShieldCheck } from "lucide-react";
import type { SystemInfo } from "../lib/systems";

export function SystemCard({ s }: { s: SystemInfo }) {
  const detailPages: Record<string, string> = {
    "pulse-os": "/systems/pulse-os",
    "nexus-campus": "/systems/nexus-campus",
    "talent-grid": "/systems/talent-grid",
  };

  const targetPath = detailPages[s.slug];

  const card = (
    <article className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border bg-card shadow-xs transition-all duration-500 ease-out hover:-translate-y-2 hover:border-foreground/30 hover:shadow-2xl">
      {/* Logo Header */}
      <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${s.accent}`}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/90 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-foreground font-semibold backdrop-blur-md">
            <ShieldCheck className="h-3 w-3 text-emerald-500" /> {s.metric}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground bg-background/80 px-2 py-0.5 rounded-md border border-border/50 backdrop-blur-xs">
            ● Active Engine
          </span>
        </div>
        {/* System Logo */}
        <div className="absolute inset-0 flex items-center justify-center p-8 pt-14">
          <img
            src={s.logo}
            alt={`${s.name} logo`}
            className="max-h-full max-w-full object-contain drop-shadow-lg transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>
      </div>

      {/* Structured Content Details */}
      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
        {/* Title & Header Row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
              {s.industry}
            </p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground group-hover:text-foreground">
              {s.name}
            </h3>
          </div>
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-border bg-surface text-foreground transition-all duration-500 ease-out group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-hover:scale-105">
            <ArrowUpRight className="h-5 w-5 stroke-[2.2] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Executive Summary */}
        <p className="text-sm leading-relaxed text-muted-foreground font-normal">
          {s.description}
        </p>

        {/* Structured Core Modules Section */}
        <div className="rounded-2xl border border-border/80 bg-surface/70 p-4 transition-colors duration-500 group-hover:border-border">
          <p className="font-mono text-[10px] uppercase tracking-widest text-subtle font-semibold mb-2.5">
            Core Modules
          </p>
          <ul className="space-y-2">
            {s.modules.map((mod) => (
              <li key={mod} className="flex items-center gap-2.5 text-xs text-foreground font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-foreground/70" />
                <span>{mod}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Spec & Tech Stack Footer */}
        <div className="mt-auto space-y-3 pt-2">
          <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground border-t border-border/80 pt-3">
            <Cpu className="h-3.5 w-3.5 text-subtle shrink-0" />
            <span className="truncate">{s.techStack}</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {s.tags.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-border bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors duration-500 group-hover:border-foreground/30"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );

  if (targetPath) {
    return (
      <Link to={targetPath} className="block cursor-pointer no-underline">
        {card}
      </Link>
    );
  }

  return card;
}
