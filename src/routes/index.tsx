import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { ArchitectureDiagram } from "../components/architecture-diagram";
import { CountUp } from "../components/count-up";
import { SectionHeading } from "../components/section-heading";
import { SystemCard } from "../components/system-card";
import { systems } from "../lib/systems";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FURII — Enterprise Software, Engineered." },
      {
        name: "description",
        content:
          "Mikiyas Sahilu, CTO & Co-Founder of FURII. Enterprise platforms, AI workflows, and systems engineered for organisations that demand excellence.",
      },
      { property: "og:title", content: "FURII — Enterprise Software, Engineered." },
      {
        property: "og:description",
        content:
          "Scalable platforms, AI workflows and enterprise systems for organisations that demand excellence.",
      },
    ],
  }),
  component: Home,
});

const metrics = [
  { value: 18, suffix: "+", label: "Enterprise Platforms" },
  { value: 150, suffix: "+", label: "Business Modules" },
  { value: 40, suffix: "+", label: "User Roles" },
  { value: null, label: "AI Integrated", detail: "Across Every Platform" },
];

function Home() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-background to-transparent" />
        <div className="container-page relative grid gap-16 py-24 md:py-32 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                CTO • Enterprise Architect
              </span>
            </div>

            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Enterprise software engineered for organisations that demand excellence.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Designing scalable software platforms, AI-powered workflows, and enterprise systems
              that transform how organisations operate.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/systems"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-95"
              >
                Explore Systems
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/architecture"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                View Architecture
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-widest text-subtle">
              <span>Trusted engineering</span>
              <span>·</span>
              <span>AI-native</span>
              <span>·</span>
              <span>Built for scale</span>
            </div>
          </div>

          <div className="relative flex items-center">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-y border-border bg-surface">
        <div className="container-page grid grid-cols-2 gap-px overflow-hidden bg-border lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="group relative bg-surface p-8 transition-colors hover:bg-background"
            >
              <div className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {m.value !== null ? (
                  <CountUp value={m.value} suffix={m.suffix} />
                ) : (
                  <span className="inline-flex items-center gap-2 text-primary">
                    <Sparkles className="h-7 w-7" />
                    AI
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm font-medium text-foreground">{m.label}</p>
              {m.detail && <p className="text-xs text-muted-foreground">{m.detail}</p>}
              <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEMS */}
      <section id="systems" className="py-24 md:py-32">
        <div className="container-page">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <SectionHeading
              eyebrow="Enterprise Systems"
              title="Twelve platforms. One engineering standard."
              description="Each system is architected to run mission-critical operations at organisational scale — from healthcare to government."
            />
            <Link
              to="/systems"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              View all systems
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systems.slice(0, 6).map((s) => (
              <SystemCard key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE STRIP */}
      <section className="border-t border-border bg-surface py-24 md:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Engineering"
            title="Systems designed for reliability at scale."
            description="Microservices, gateways, observability, and infrastructure engineered with the same discipline you'd expect from a modern technology company."
          />
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {[
              "Microservices",
              "API Gateway",
              "RBAC & Auth",
              "Queues",
              "Caching",
              "Observability",
              "CI / CD",
              "Cloud Native",
            ].map((label) => (
              <div key={label} className="bg-card p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-subtle">
                  Layer
                </p>
                <p className="mt-1.5 text-sm font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground px-8 py-20 text-center md:px-16">
            <div className="absolute inset-0 grid-bg opacity-[0.06]" />
            <p className="font-mono text-xs uppercase tracking-widest text-background/60">
              Let's build together
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-bold tracking-tight text-background md:text-5xl">
              Let's build the future together.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-background/70">
              If your organisation needs an engineering partner that ships enterprise-grade
              software, start the conversation.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
              >
                Schedule a Meeting
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
