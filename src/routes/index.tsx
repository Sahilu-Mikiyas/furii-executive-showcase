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
    body: "Designing distributed, resilient systems with microservices, event-driven pipelines, and high-throughput datastores tailored for enterprise scale.",
  },
  {
    title: "Applied AI & Automation",
    body: "Integrating practical AI models into daily operational workflows, document processing, intelligent triage, and predictive decision engines.",
  },
  {
    title: "Product Strategy & Execution",
    body: "Bridging business goals with modern technical strategy. Turning complex operational requirements into scalable software products.",
  },
  {
    title: "Engineering Leadership",
    body: "Building disciplined, owner-minded engineering cultures focused on speed, reliability, and consumer-grade product polish.",
  },
];

const highlights = [
  {
    name: "Pulse OS",
    context: "Healthcare",
    detail: "Full hospital operating system managing clinical workflows, patient histories, and diagnostic intelligence at enterprise scale.",
  },
  {
    name: "Nexus Campus",
    context: "Education",
    detail: "Unified university and school management platform unifying academic records, grading, and automated student analytics.",
  },
  {
    name: "TalentGrid",
    context: "Human Resources",
    detail: "Enterprise HR workforce suite covering global recruitment pipelines, payroll processing, and predictive performance reviews.",
  },
  {
    name: "Strata Ops",
    context: "Real Estate",
    detail: "Multi-property management OS providing lease automation, tenant portals, and IoT-driven predictive maintenance.",
  },
];

const principles = [
  {
    title: "Simplicity Scales",
    body: "Clear domain boundaries and simple abstractions outlive clever code. We build for maintainability over decades.",
  },
  {
    title: "Pragmatic AI",
    body: "AI is a component, not the whole strategy. We apply machine intelligence where it measurably reduces friction.",
  },
  {
    title: "Consumer-Grade Polish",
    body: "Enterprise software shouldn't feel like a legacy chore. Great design builds trust and accelerates adoption.",
  },
  {
    title: "Ownership & Standards",
    body: "Small, highly disciplined teams beat large, unfocused organizations when backed by clear standards and high agency.",
  },
];

function FounderPage() {
  return (
    <div className="space-y-0">
      {/* Intro Hero */}
      <section className="container-page pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-24">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:gap-16">
          <div className="animate-fade-in">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Mikiyas Sahilu • Executive Profile
            </span>

            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              CTO & Enterprise Systems Architect
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl font-normal">
              Enterprise software shouldn't feel like a legacy chore. We build scalable platforms, applied AI workflows, and resilient digital infrastructure for organizations that demand excellence.
            </p>

            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-xs sm:text-sm text-foreground/80 border-l-2 border-border pl-4">
              <p>
                As Chief Technology Officer at <strong className="text-foreground">FURII</strong>, I lead our technical vision, core architecture, and software engineering teams. My focus spans high-throughput backend systems, applied AI integration, and modern product infrastructure.
              </p>
              <p>
                Over the past decade, we have architected and deployed enterprise software across healthcare, education, human resources, logistics, and real estate, transforming how institutions run.
              </p>
            </div>

            {/* Direct Call-To-Action buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:furiimotionlabsceo@outlook.com"
                className="group inline-flex items-center gap-2 rounded-[20px] sm:rounded-[24px] bg-foreground border-2 border-foreground px-6 py-3.5 text-xs sm:text-sm font-semibold text-background transition-all duration-500 ease-out hover:bg-background hover:text-foreground hover:border-foreground hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>
              <a
                href="tel:+251909312671"
                className="group inline-flex items-center gap-2 rounded-[20px] sm:rounded-[24px] border-2 border-border bg-background px-6 py-3.5 text-xs sm:text-sm font-semibold text-foreground transition-all duration-500 ease-out hover:border-foreground hover:bg-foreground hover:text-background hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                Call us (+251 909 312 671)
              </a>
              <Link
                to="/systems"
                className="group inline-flex items-center gap-2 rounded-[20px] sm:rounded-[24px] border-2 border-border bg-surface px-6 py-3.5 text-xs sm:text-sm font-semibold text-foreground transition-all duration-500 ease-out hover:border-foreground hover:bg-foreground hover:text-background hover:-translate-y-0.5 hover:shadow-lg"
              >
                Explore systems
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in sm:mx-auto sm:max-w-md md:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-foreground/20">
              <img
                src="/founder.jpg"
                alt="Mikiyas Sahilu"
                className="aspect-[4/5] w-full object-cover grayscale contrast-105 transition-all duration-500 hover:grayscale-0 hover:scale-102"
              />
              <div className="p-4 sm:p-5 border-t border-border bg-surface/80 backdrop-blur-xs">
                <p className="font-semibold text-sm sm:text-base text-foreground">Mikiyas Sahilu, FURII</p>
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                  CTO & Systems Architect
                </p>
              </div>
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

        {/* Large Prominent CTA Button to Systems Page */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <Link
            to="/systems"
            className="group inline-flex items-center justify-center gap-3 rounded-[24px] sm:rounded-[28px] bg-foreground border-2 border-foreground px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base md:text-lg font-bold text-background shadow-md transition-all duration-500 ease-out hover:bg-background hover:text-foreground hover:border-foreground hover:-translate-y-1 hover:shadow-2xl"
          >
            <span>Look at more of our projects in detail</span>
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-500 ease-out group-hover:translate-x-2" />
          </Link>
        </div>
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
