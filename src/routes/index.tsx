import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Mail,
  Phone,
  Boxes,
  Shield,
  Lock,
  Network,
  Database,
  Waves,
  Gauge,
  Activity,
  Cloud,
  ServerCog,
  GitBranch,
  Layers,
  Building2,
  GraduationCap,
  Users,
  Home,
  Landmark,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";
import { CompassNav } from "../components/compass-nav";

const compassSections = [
  { id: "the-architect", label: "The Architect" },
  { id: "core-disciplines", label: "Core Disciplines" },
  { id: "architecture", label: "Architecture" },
  { id: "applied-ai", label: "Applied AI" },
  { id: "selected-work", label: "Selected Work" },
  { id: "principles", label: "Principles" },
  { id: "contact", label: "Contact" },
];

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

const architecturePillars = [
  { icon: Boxes, title: "Microservices & Boundaries", desc: "Decoupled domain-driven services with explicit schemas, independent deployments, and resilient fallback states.", badge: "Scale" },
  { icon: Shield, title: "Zero-Trust & SSO Auth", desc: "OAuth 2.0, OpenID Connect, MFA, and automated JWT rotation enforcing security across every client surface.", badge: "Security" },
  { icon: Lock, title: "Granular RBAC Engine", desc: "Context-aware role-based access control evaluating multi-tenant permissions at API edge and database row level.", badge: "Compliance" },
  { icon: Network, title: "High-Throughput API Gateway", desc: "Centralized entry point managing rate limiting, SSL termination, traffic splitting, and dynamic request routing.", badge: "Infrastructure" },
  { icon: Database, title: "Heterogeneous Data Stores", desc: "PostgreSQL relational cores paired with Redis caching, Elastic Search, and time-series DBs tailored for domain load.", badge: "Persistence" },
  { icon: Waves, title: "Event-Driven Message Bus", desc: "Asynchronous pub/sub queues (Kafka / RabbitMQ) guaranteeing idempotent background processing and zero data loss.", badge: "Messaging" },
  { icon: Gauge, title: "Multi-Tier Memory Caching", desc: "Sub-millisecond latency via edge CDN, Redis cluster memory caching, and client-state optimistic updates.", badge: "Performance" },
  { icon: Activity, title: "Distributed Tracing", desc: "Real-time metrics, OpenTelemetry tracing, and structured JSON logs giving instant root-cause diagnostic clarity.", badge: "Observability" },
  { icon: Cloud, title: "Cloud-Native IaC Deployments", desc: "Reproducible Infrastructure as Code via Terraform & Docker containers, supporting multi-cloud & hybrid topologies.", badge: "DevOps" },
  { icon: ServerCog, title: "Automated Disaster Recovery", desc: "Continuous WAL replication, point-in-time recovery, and multi-region failovers tested against zero-data-loss SLAs.", badge: "Resilience" },
  { icon: GitBranch, title: "Progressive Delivery CI/CD", desc: "Automated test matrices, preview environments per pull request, and zero-downtime blue/green deployments.", badge: "Automation" },
  { icon: Layers, title: "Defense-in-Depth Protection", desc: "WAF edge filtering, automated dependency vulnerability scanning, and end-to-end TLS encryption in transit & at rest.", badge: "Security" },
];

const aiDomains = [
  {
    icon: Building2,
    domain: "Healthcare Clinical AI",
    tag: "Pulse OS",
    items: [
      "AI Clinical Triage & Emergency Risk Scoring",
      "Automated EHR Patient History Summarization",
      "Prescription Conflict & Dosage Intelligence",
      "Diagnostic Imaging & Lab Result Assistance",
    ],
  },
  {
    icon: GraduationCap,
    domain: "Academic Intelligence",
    tag: "Nexus Campus",
    items: [
      "Early Student Dropout Risk Forecasting",
      "Adaptive Academic Performance Analytics",
      "Automated Parent Evaluation Report Generator",
      "Curriculum Engagement & Attendance Matrix",
    ],
  },
  {
    icon: Users,
    domain: "Workforce & HR Intelligence",
    tag: "TalentGrid",
    items: [
      "Semantic Candidate Resume Parsing & Matching",
      "Predictive Employee Retention & Attrition Scoring",
      "Automated Compensation Equity Analytics",
      "Personalized Skill Gap Training Pathways",
    ],
  },
  {
    icon: Home,
    domain: "Property IoT & Asset AI",
    tag: "Strata Ops",
    items: [
      "IoT Sensor Predictive Maintenance Engine",
      "Automated Commercial Lease Clause Summaries",
      "Tenant Support Ticket Triage & Resolution",
      "Energy Consumption & Utility Optimization",
    ],
  },
  {
    icon: Landmark,
    domain: "GovTech Intelligence",
    tag: "CivicPulse",
    items: [
      "OCR Document Verification & Extraction",
      "24/7 Multilingual Citizen Service Assistant",
      "Automated Permit Application Anomaly Audit",
      "Cross-Department Bureaucratic Flow Tracking",
    ],
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
      <CompassNav sections={compassSections} />

      {/* ── 1. Intro Hero (The Architect) ── */}
      <section id="the-architect" className="container-page pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-24 relative">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:gap-16">
          <div className="animate-fade-in">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Mikiyas Sahilu • The Architect
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

      {/* ── 2. Core Disciplines ── */}
      <section id="core-disciplines" className="border-y border-border bg-surface/70 py-16 sm:py-24 md:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Core Disciplines"
            title="Architecture, applied AI, and product engineering."
            description="Four core technical disciplines our team brings to every engagement."
          />
          <div className="mt-8 sm:mt-12 md:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="group rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-foreground/40"
              >
                <h3 className="text-base sm:text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Systems Architecture Section (Stark Inverted Black Theme) ── */}
      <section id="architecture" className="relative overflow-hidden bg-neutral-950 text-white py-20 sm:py-28 md:py-36 border-y border-neutral-800">
        {/* Inverted Watermark */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[22vw] font-black uppercase leading-none tracking-tighter text-white/[0.03]">
            ARCHITECTURE
          </span>
        </div>

        <div className="container-page relative z-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                Systems Architecture
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Engineering enterprise software for scale.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl">
                Every platform inherits the same zero-trust, high-throughput, and fault-tolerant foundations.
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-300">
              12 Core Pillars
            </span>
          </div>

          <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {architecturePillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-neutral-800/90 bg-neutral-900/80 p-6 sm:p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/40 hover:bg-neutral-900 hover:shadow-[0_20px_50px_rgba(255,255,255,0.06)]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-neutral-700 bg-white text-black transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-white font-semibold">
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="mt-5 text-base sm:text-lg font-bold tracking-tight text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-400">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Applied AI Workflows Section (Classy Monochrome Dark) ── */}
      <section id="applied-ai" className="relative overflow-hidden bg-black text-white py-20 sm:py-28 md:py-36 border-b border-neutral-800">
        {/* Inverted Watermark */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[24vw] font-black uppercase leading-none tracking-tighter text-white/[0.025]">
            INTELLIGENCE
          </span>
        </div>

        <div className="container-page relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-widest text-white">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Applied AI • Zero Hype • High Precision
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              AI embedded directly into operational workflows.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl font-normal">
              Not a standalone chatbot. We weave machine intelligence directly into daily enterprise software, quietly making teams faster, more accurate, and more proactive.
            </p>
          </div>

          {/* AI Domain Showcase Cards - Pure Classy B&W */}
          <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiDomains.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.domain}
                  className="group relative rounded-3xl border border-neutral-800/90 bg-neutral-950/90 p-6 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/50 hover:bg-neutral-900 hover:shadow-[0_20px_50px_rgba(255,255,255,0.08)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-black font-bold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {d.domain}
                    </h3>
                  </div>

                  <span className="inline-block mt-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-white">
                    {d.tag}
                  </span>

                  <ul className="mt-6 space-y-3">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Selected Work ── */}
      <section id="selected-work" className="container-page py-16 sm:py-24 md:py-32">
        <SectionHeading
          eyebrow="Selected Work"
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

      {/* ── 6. Principles ── */}
      <section id="principles" className="border-t border-border bg-surface py-16 sm:py-24 md:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="How We Work" title="Principles that shape our craft." />
          <div className="mt-8 sm:mt-12 md:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="group rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-foreground/40"
              >
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Giant Animated CTA Banner (Contact) ── */}
      <div id="contact">
        <ContactCtaBanner />
      </div>
    </div>
  );
}
