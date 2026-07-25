import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import founderAsset from "../assets/founder.png.asset.json";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "About — Mikiyas Sahilu, CTO & Enterprise Architect" },
      {
        name: "description",
        content:
          "Mikiyas Sahilu is a CTO and enterprise software architect. He leads engineering and applied AI at FURII, building platforms that run mission-critical operations at scale.",
      },
      { property: "og:title", content: "About — Mikiyas Sahilu" },
      {
        property: "og:description",
        content:
          "CTO and enterprise architect building intelligent, large-scale software platforms.",
      },
      { property: "og:image", content: founderAsset.url },
      { name: "twitter:image", content: founderAsset.url },
    ],
  }),
  component: FounderPage,
});

const capabilities = [
  {
    title: "System Architecture",
    body: "I design multi-tenant, service-oriented platforms with clean domain boundaries, event-driven workflows, and defensible security models. Every platform I ship is built to scale from day one.",
  },
  {
    title: "Applied AI",
    body: "I integrate AI directly into operational workflows — clinical summaries, document intelligence, resume screening, predictive maintenance — as quiet, useful capabilities rather than bolted-on chatbots.",
  },
  {
    title: "Product Engineering",
    body: "I translate deep enterprise complexity into product experiences that feel simple, considered, and fast — the difference between software that gets tolerated and software that gets loved.",
  },
  {
    title: "CTO Leadership",
    body: "I lead engineering organisations with a bias for taste, ownership, and long-term compounding. My teams ship with discipline, care, and a strong sense of craft.",
  },
];

const highlights = [
  {
    name: "MedCore",
    context: "Healthcare · Hospital OS",
    detail:
      "Architected a full hospital operating system covering EMR, appointments, pharmacy, labs and billing, with AI-assisted triage and clinical summaries.",
  },
  {
    name: "EduCore",
    context: "Education · School Platform",
    detail:
      "Built an end-to-end school platform: student information, grading, attendance, parent portal and AI-driven performance insights.",
  },
  {
    name: "PeopleCore",
    context: "HR · Workforce Suite",
    detail:
      "Designed an HR suite spanning recruitment, onboarding, payroll, performance and workforce analytics with intelligent screening.",
  },
  {
    name: "GovCore",
    context: "Government · Citizen Services",
    detail:
      "Delivered citizen services, permits and workflow automation for public institutions with document intelligence at the core.",
  },
  {
    name: "EstateCore",
    context: "Real Estate · Property Ops",
    detail:
      "Shipped property, lease and maintenance operations with predictive maintenance and lease summarisation.",
  },
  {
    name: "LogisticsCore",
    context: "Logistics · Fleet & Dispatch",
    detail:
      "Built fleet, dispatch, warehouse and last-mile intelligence for logistics operators running national-scale networks.",
  },
];

const principles = [
  {
    title: "Engineering Philosophy",
    body: "Simplicity scales. Clear boundaries beat clever code. Every system I build should still be understandable a year from now.",
  },
  {
    title: "Leadership Philosophy",
    body: "I empower engineers to think like owners. Ship with taste, respect the user, and optimise for long-term compounding.",
  },
  {
    title: "Vision",
    body: "Enterprise software that feels like consumer software — intelligent, elegant, and effortless to use.",
  },
  {
    title: "Core Values",
    body: "Precision. Intentionality. Engineering excellence as a form of care for the people who depend on the software.",
  },
];

function FounderPage() {
  return (
    <div className="pt-32">
      {/* Intro */}
      <section className="container-page pb-20">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-16">
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src={founderAsset.url}
                alt="Mikiyas Sahilu"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href="mailto:hello@furii.co"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" /> hello@furii.co
              </a>
              <a
                href="https://linkedin.com"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              About
            </p>
            <h1 className="mt-3 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Mikiyas Sahilu
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              CTO & Enterprise Software Architect · FURII
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a software architect and CTO who designs and builds enterprise platforms
                for organisations that expect reliability, scale, and craft. My work sits at
                the intersection of systems engineering, applied AI, and product design.
              </p>
              <p>
                At FURII I lead engineering and architecture — shaping how our platforms are
                designed, how they're built, and how AI is embedded into the workflows people
                actually use. I've architected and shipped platforms across healthcare,
                education, HR, government, real estate, logistics, manufacturing, and finance.
              </p>
              <p>
                I care about the details that make software feel considered: clean domain
                models, intentional interfaces, thoughtful defaults, and the quiet reliability
                that lets an organisation depend on a system every day without thinking about
                it.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/systems"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-95"
              >
                See what I've built
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-surface"
              >
                Work with me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-border bg-surface py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What I do"
            title="Architecture, AI, and product engineering."
            description="Four disciplines I bring to every engagement."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-card p-8">
                <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="container-page py-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Platforms I've architected and shipped."
        />
        <ol className="mt-14 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {highlights.map((h, i) => (
            <li key={h.name} className="grid gap-4 p-6 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-8 md:p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  {h.context}
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">{h.name}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {h.detail}
                </p>
              </div>
              <Link
                to="/systems"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
              >
                Details
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Principles */}
      <section className="border-t border-border bg-surface py-24">
        <div className="container-page">
          <SectionHeading eyebrow="How I work" title="Principles that shape my craft." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
