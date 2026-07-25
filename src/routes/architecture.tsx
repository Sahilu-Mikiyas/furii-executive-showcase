import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/section-heading";
import {
  Layers,
  Shield,
  Network,
  Database,
  Cloud,
  Activity,
  GitBranch,
  Lock,
  Gauge,
  ServerCog,
  Boxes,
  Waves,
} from "lucide-react";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Architecture — Engineering Enterprise Software for Scale" },
      {
        name: "description",
        content:
          "How FURII engineers enterprise software: microservices, RBAC, gateways, observability, CI/CD, and cloud-native infrastructure.",
      },
      { property: "og:title", content: "Architecture — FURII" },
      {
        property: "og:description",
        content: "Engineering enterprise software for scale.",
      },
    ],
  }),
  component: ArchitecturePage,
});

const pillars = [
  { icon: Boxes, title: "Microservices", desc: "Domain-driven services with clean boundaries and independent deployment." },
  { icon: Shield, title: "Authentication", desc: "OAuth, SSO, MFA, and short-lived tokens across every surface." },
  { icon: Lock, title: "Role-Based Access", desc: "Fine-grained RBAC with policy enforcement at every layer." },
  { icon: Network, title: "API Gateway", desc: "Unified entry point with rate limiting, routing, and auth." },
  { icon: Database, title: "Database Design", desc: "Relational cores, purpose-built stores, and strong data contracts." },
  { icon: Waves, title: "Queues & Events", desc: "Asynchronous workflows with reliable, idempotent processing." },
  { icon: Gauge, title: "Caching", desc: "Multi-tier caches to keep interactions instant at scale." },
  { icon: Activity, title: "Observability", desc: "Metrics, tracing, and structured logs across the stack." },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "IaC on cloud-native primitives, portable and reproducible." },
  { icon: ServerCog, title: "Disaster Recovery", desc: "Backups, replication, and tested restore procedures." },
  { icon: GitBranch, title: "CI / CD", desc: "Automated testing, previews, and safe progressive delivery." },
  { icon: Layers, title: "Security", desc: "Defence in depth from network edge to database row." },
];

function ArchitecturePage() {
  return (
    <div className="pt-32">
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow="Architecture"
          title="Engineering enterprise software for scale."
          description="Every platform inherits the same reliability, security, and observability foundations — proven across industries."
        />
      </section>

      <section className="container-page pb-32">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="group bg-card p-8 transition-colors hover:bg-surface">
              <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
