import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mikiyas Sahilu | CTO & Enterprise Systems Architect" },
      {
        name: "description",
        content:
          "Mikiyas Sahilu is CTO and enterprise software architect. He leads engineering and applied AI at FURII, building high-throughput platforms for modern enterprises.",
      },
      { property: "og:title", content: "Mikiyas Sahilu | CTO & Enterprise Systems Architect" },
      {
        property: "og:description",
        content:
          "CTO & Enterprise Architect building scalable platforms, applied AI workflows, and resilient digital infrastructure.",
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
    body: "We design resilient, multi-tenant platforms with clean service boundaries, event-driven workflows, and defensible security models. Built to scale from day one.",
  },
  {
    title: "Applied AI Workflows",
    body: "We integrate pragmatic AI into real operational tools: clinical summaries, document intelligence, resume screening, and predictive analytics with zero gimmick chatbots.",
  },
  {
    title: "Product Engineering",
    body: "We translate deep operational complexity into crisp, fast product experiences: the difference between software that gets tolerated and software people love using.",
  },
  {
    title: "CTO Leadership",
    body: "I lead our engineering organization with a bias for taste, ownership, and long-term compounding. High standards, disciplined execution, and strong technical craft.",
  },
];

const highlights = [
  {
    name: "Pulse OS",
    context: "Healthcare · Hospital Operating System",
    detail:
      "Architected a full hospital operating system covering EMR, appointments, pharmacy, labs and billing, with AI-assisted triage and clinical summaries.",
  },
  {
    name: "Nexus Campus",
    context: "Education · University & School OS",
    detail:
      "Built an end-to-end school platform: student information, grading, attendance, parent portal and AI-driven performance insights.",
  },
  {
    name: "TalentGrid",
    context: "HR · Enterprise Workforce Suite",
    detail:
      "Designed an HR suite spanning recruitment, onboarding, payroll, performance and workforce analytics with intelligent screening.",
  },
  {
    name: "CivicPulse",
    context: "Government · Citizen Services OS",
    detail:
      "Delivered citizen services, permits and workflow automation for public institutions with document intelligence at the core.",
  },
  {
    name: "Strata Ops",
    context: "Real Estate · Property & Asset OS",
    detail:
      "Shipped property, lease and maintenance operations with predictive maintenance and lease summarisation.",
  },
  {
    name: "Vector Dispatch",
    context: "Logistics · Fleet & Last-Mile OS",
    detail:
      "Built fleet, dispatch, warehouse and last-mile intelligence for logistics operators running national-scale networks.",
  },
];

const principles = [
  {
    title: "Engineering Philosophy",
    body: "Simplicity scales. Clear domain boundaries beat clever code. Every system we build must be understandable and maintainable years from now.",
  },
  {
    title: "Leadership Philosophy",
    body: "Empower engineers to think like owners. Ship with taste, respect the user, and optimize for long-term compounding value.",
  },
  {
    title: "Product Vision",
    body: "Enterprise software engineered with consumer-grade polish: intelligent, fast, and effortless to operate.",
  },
  {
    title: "Core Values",
    body: "Precision. Intentionality. Engineering excellence as a form of respect for the organizations relying on our systems.",
  },
];

function FounderPage() {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32">
      {/* Intro */}
      <section className="container-page pb-12 sm:pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-16">
          <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-6 lg:gap-6">
            <div className="relative w-full max-w-[200px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-none shrink-0 overflow-hidden rounded-3xl border border-border bg-surface shadow-xs transition-all duration-500 ease-out hover:border-foreground/30 hover:shadow-md">
              <img
                src="/founder.jpg"
                alt="Mikiyas Sahilu"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 text-sm w-full max-w-[280px] lg:max-w-none pt-1">
              <a
                href="mailto:furiimotionlabsceo@outlook.com"
                className="inline-flex items-center gap-2.5 text-foreground hover:text-foreground/80 transition-colors duration-500 text-xs sm:text-sm font-medium"
              >
                <Mail className="h-4 w-4 text-foreground shrink-0" /> furiimotionlabsceo@outlook.com
              </a>
              <a
                href="tel:+251909312671"
                className="inline-flex items-center gap-2.5 text-foreground hover:text-foreground/80 transition-colors duration-500 text-xs sm:text-sm font-medium"
              >
                <Phone className="h-4 w-4 text-foreground shrink-0" /> +251 909 312 671
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              About
            </p>
            <h1 className="mt-2 sm:mt-3 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Mikiyas Sahilu
            </h1>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-muted-foreground font-medium">
              CTO & Enterprise Software Architect · FURII
            </p>

            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
              <p className="text-foreground font-medium text-base sm:text-lg leading-snug">
                Enterprise software shouldn't feel like a legacy chore. We build scalable platforms,
                applied AI workflows, and resilient digital infrastructure for organizations that demand excellence.
              </p>
              <p>
                I bridge executive strategy and deep technical execution. As CTO at FURII, I lead our
                engineering team in designing high-throughput, multi-tenant platforms across healthcare,
                logistics, government, HR, real estate, and finance.
              </p>
              <p>
                We focus on the non-negotiables: clean domain boundaries, pragmatic AI integrations
                that automate real work, and consumer-grade interfaces built for enterprise scale.
              </p>
              <p>
                We care about the details that make software feel considered: quiet reliability,
                intentional API contracts, thoughtful security models, and systems engineered to compound
                in value over time.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
              <Link
                to="/systems"
                className="group inline-flex items-center gap-2 rounded-xl bg-foreground border border-foreground px-5 py-3 text-xs sm:text-sm font-medium text-background transition-all duration-500 ease-out hover:bg-background hover:text-foreground hover:border-foreground hover:-translate-y-0.5 hover:shadow-md"
              >
                Explore our platforms
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:furiimotionlabsceo@outlook.com"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-xs sm:text-sm font-medium text-foreground transition-all duration-500 ease-out hover:bg-foreground hover:text-background hover:border-foreground hover:-translate-y-0.5 hover:shadow-md"
              >
                Work with us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-border bg-surface py-12 sm:py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Architecture, applied AI, and product engineering."
            description="Four core technical disciplines our team brings to every engagement."
          />
          <div className="mt-8 sm:mt-12 md:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-foreground/20"
              >
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
        <ol className="mt-8 sm:mt-12 md:mt-14 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-xs">
          {highlights.map((h, i) => (
            <li
              key={h.name}
              className="grid gap-3 sm:gap-4 p-5 sm:p-6 md:grid-cols-[60px_1fr_auto] md:items-center md:gap-8 md:p-8 transition-all duration-500 ease-out hover:bg-surface/70"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-foreground/70 font-semibold">
                  {h.context}
                </p>
                <h3 className="mt-1 text-lg sm:text-xl font-semibold tracking-tight">{h.name}</h3>
                <p className="mt-1.5 sm:mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {h.detail}
                </p>
              </div>
              <Link
                to="/systems"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-foreground hover:text-foreground/70 pt-1 md:pt-0"
              >
                Details
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-500 group-hover:translate-x-1" />
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
              <div
                key={p.title}
                className="rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-foreground/20"
              >
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giant Animated CTA Banner */}
      <ContactCtaBanner />
    </div>
  );
}
