import { ArrowUpRight, CheckCircle2, Cpu, ShieldCheck } from "lucide-react";
import type { SystemInfo } from "../lib/systems";

export function SystemCard({ s }: { s: SystemInfo }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border bg-card shadow-xs transition-all duration-500 ease-out hover:-translate-y-2 hover:border-foreground/30 hover:shadow-2xl">
      {/* Visual Mini Dashboard Header */}
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
        <div className="absolute inset-4 top-12 flex items-end">
          <MiniDashboard name={s.name} industry={s.industry} />
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
}

function MiniDashboard({ name, industry }: { name: string; industry: string }) {
  return (
    <div className="w-full rounded-2xl border border-border/80 bg-background/95 p-3.5 shadow-sm backdrop-blur transition-all duration-500 ease-out">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-foreground/40" />
          <span className="h-2 w-2 rounded-full bg-foreground/25" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
        </div>
        <span className="font-mono text-[9px] font-medium text-subtle uppercase tracking-wider">
          {industry.toLowerCase()}.furii.co
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[80, 55, 95, 45, 75, 60].map((val, i) => (
          <div key={i} className="rounded-xl bg-foreground/5 p-2 border border-foreground/5">
            <div className="h-1 w-8 rounded bg-foreground/15" />
            <div
              className="mt-2 h-1.5 rounded-full"
              style={{
                width: `${val}%`,
                background: "color-mix(in oklab, var(--color-foreground) 50%, transparent)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
