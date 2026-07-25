import { ArrowUpRight } from "lucide-react";
import type { SystemInfo } from "../lib/systems";

export function SystemCard({ s }: { s: SystemInfo }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${s.accent}`}>
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-4 flex items-end">
          <MiniDashboard name={s.name} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
              {s.industry}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
              {s.name}
            </h3>
          </div>
          <ArrowUpRight className="h-5 w-5 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {s.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function MiniDashboard({ name }: { name: string }) {
  return (
    <div className="w-full rounded-xl border border-border/80 bg-background/95 p-3 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-destructive/60" />
          <span className="h-2 w-2 rounded-full bg-warning/60" />
          <span className="h-2 w-2 rounded-full bg-success/60" />
        </div>
        <span className="font-mono text-[9px] text-subtle">{name.toLowerCase()}.furii.co</span>
      </div>
      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        {[70, 40, 90, 55, 30, 65].map((h, i) => (
          <div key={i} className="rounded bg-foreground/5 p-1.5">
            <div className="h-1 w-6 rounded bg-foreground/10" />
            <div
              className="mt-1.5 h-1 rounded"
              style={{
                width: `${h}%`,
                background:
                  i % 3 === 0
                    ? "color-mix(in oklab, var(--color-primary) 80%, transparent)"
                    : "color-mix(in oklab, var(--color-foreground) 25%, transparent)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
