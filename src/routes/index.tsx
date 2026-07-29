import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { SectionHeading } from "../components/section-heading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mikiyas Sahilu — CTO & Enterprise Software Architect" },
      {
        name: "description",
        content:
          "Mikiyas Sahilu is CTO and enterprise software architect. He leads engineering and applied AI at FURII, building platforms that run mission-critical operations at scale.",
      },
      { property: "og:title", content: "Mikiyas Sahilu — CTO & Enterprise Architect" },
      {
        property: "og:description",
        content:
          "CTO and enterprise architect building intelligent, large-scale software platforms.",
      },
      { property: "og:image", content: "/founder.jpg" },
      { name: "twitter:image", content: "/founder.jpg" },
    ],
  }),
  component: FounderPage,
});

const capabilities = [
  {
    title: "System Architecture",
    body: "We design multi-tenant, service-oriented platforms with clean domain boundaries, event-driven workflows, and defensible security models. Every platform we ship is built to scale from day one.",
  },
  {
    title: "Applied AI",
    body: "We integrate AI directly into operational workflows — clinical summaries, document intelligence, resume screening, predictive maintenance — as quiet, useful capabilities rather than bolted-on chatbots.",
  },
  {
    title: "Product Engineering",
    body: "We translate deep enterprise complexity into product experiences that feel simple, considered, and fast — the difference between software that gets tolerated and software that gets loved.",
  },
  {
    title: "CTO Leadership",
    body: "I lead our engineering organization with a bias for taste, ownership, and long-term compounding. Our team ships with discipline, care, and a strong sense of craft.",
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
    body: "Simplicity scales. Clear boundaries beat clever code. Every system we build should still be understandable years from now.",
  },
  {
    title: "Leadership Philosophy",
    body: "We empower engineers to think like owners. Ship with taste, respect the user, and optimise for long-term compounding.",
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
    <div className="pt-24 sm:pt-28 lg:pt-32">
      {/* Intro */}
      <section className="container-page pb-12 sm:pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-16">
          <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-6 lg:gap-6">
            <div className="relative w-full max-w-[200px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-none shrink-0 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
              <img
                src="/founder.jpg"
                alt="Mikiyas Sahilu"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2.5 text-sm w-full max-w-[260px] lg:max-w-none pt-1">
              <a
                href="mailto:hello@furii.co"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors text-xs sm:text-sm"
              >
                <Mail className="h-4 w-4 text-muted-foreground shrink-0" /> hello@furii.co
              </a>
              <a
                href="https://linkedin.com"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors text-xs sm:text-sm"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground shrink-0" /> LinkedIn
              </a>
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors text-xs sm:text-sm"
              >
                <Github className="h-4 w-4 text-muted-foreground shrink-0" /> GitHub
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              About
            </p>
            <h1 className="mt-2 sm:mt-3 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Mikiyas Sahilu
            </h1>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-muted-foreground">
              CTO & Enterprise Software Architect · FURII
            </p>

            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
              <p>
                As CTO at FURII, I lead an engineering team that designs and builds enterprise platforms
                for organisations that expect reliability, scale, and craft. Our work sits at
                the intersection of systems engineering, applied AI, and product design.
              </p>
              <p>
                At FURII I lead engineering and architecture — shaping how our platforms are
                designed, how they're built, and how AI is embedded into the workflows people
                actually use. Together with our team, we've architected and shipped platforms across healthcare,
                education, HR, government, real estate, logistics, manufacturing, and finance.
              </p>
              <p>
                We care about the details that make software feel considered: clean domain
                models, intentional interfaces, thoughtful defaults, and the quiet reliability
                that lets an organisation depend on a system every day without thinking about
                it.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
              <Link
                to="/systems"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-primary-foreground hover:opacity-95 transition-all"
              >
                See what we've built
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-border bg-surface py-12 sm:py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Architecture, AI, and product engineering."
            description="Four disciplines our team brings to every engagement."
          />
          <div className="mt-8 sm:mt-12 md:mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-card p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="container-page py-12 sm:py-16 md:py-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Platforms we've architected and shipped."
        />
        <ol className="mt-8 sm:mt-12 md:mt-14 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {highlights.map((h, i) => (
            <li key={h.name} className="grid gap-3 sm:gap-4 p-5 sm:p-6 md:grid-cols-[60px_1fr_auto] md:items-center md:gap-8 md:p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-primary">
                  {h.context}
                </p>
                <h3 className="mt-1 text-lg sm:text-xl font-semibold tracking-tight">{h.name}</h3>
                <p className="mt-1.5 sm:mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {h.detail}
                </p>
              </div>
              <Link
                to="/systems"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-foreground hover:text-primary pt-1 md:pt-0"
              >
                Details
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Principles */}
      <section className="border-t border-border bg-surface py-12 sm:py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="How we work" title="Principles that shape our craft." />
          <div className="mt-8 sm:mt-12 md:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
