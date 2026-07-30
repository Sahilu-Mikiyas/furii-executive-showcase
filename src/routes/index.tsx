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
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";
import { CompassNav } from "../components/compass-nav";
import { ScrollReveal } from "../components/scroll-reveal";

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
    shape: "rounded-tl-[48px] rounded-br-[48px] rounded-tr-[20px] rounded-bl-[20px]",
  },
  {
    title: "Applied AI & Automation",
    body: "Integrating practical AI models into daily operational workflows, document processing, intelligent triage, and predictive decision engines.",
    shape: "rounded-tr-[48px] rounded-bl-[48px] rounded-tl-[20px] rounded-br-[20px]",
  },
  {
    title: "Product Strategy & Execution",
    body: "Bridging business goals with modern technical strategy. Turning complex operational requirements into scalable software products.",
    shape: "rounded-tr-[48px] rounded-bl-[48px] rounded-tl-[20px] rounded-br-[20px]",
  },
  {
    title: "Engineering Leadership",
    body: "Building disciplined, owner-minded engineering cultures focused on speed, reliability, and consumer-grade product polish.",
    shape: "rounded-tl-[48px] rounded-br-[48px] rounded-tr-[20px] rounded-bl-[20px]",
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
    shape: "rounded-tl-[52px] rounded-br-[28px] rounded-tr-[24px] rounded-bl-[24px]",
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
    shape: "rounded-tr-[52px] rounded-bl-[28px] rounded-tl-[24px] rounded-br-[24px]",
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
    shape: "rounded-tl-[52px] rounded-br-[28px] rounded-tr-[24px] rounded-bl-[24px]",
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
    shape: "rounded-tr-[52px] rounded-bl-[28px] rounded-tl-[24px] rounded-br-[24px]",
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
    shape: "rounded-tl-[52px] rounded-br-[28px] rounded-tr-[24px] rounded-bl-[24px]",
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
    shape: "rounded-tl-[40px] rounded-br-[40px] rounded-tr-[20px] rounded-bl-[20px]",
  },
  {
    title: "Pragmatic AI",
    body: "AI is a component, not the whole strategy. We apply machine intelligence where it measurably reduces friction.",
    shape: "rounded-tr-[40px] rounded-bl-[40px] rounded-tl-[20px] rounded-br-[20px]",
  },
  {
    title: "Consumer-Grade Polish",
    body: "Enterprise software shouldn't feel like a legacy chore. Great design builds trust and accelerates adoption.",
    shape: "rounded-tr-[40px] rounded-bl-[40px] rounded-tl-[20px] rounded-br-[20px]",
  },
  {
    title: "Ownership & Standards",
    body: "Small, highly disciplined teams beat large, unfocused organizations when backed by clear standards and high agency.",
    shape: "rounded-tl-[40px] rounded-br-[40px] rounded-tr-[20px] rounded-bl-[20px]",
  },
];

function FounderPage() {
  return (
    <div className="space-y-0">
      <CompassNav sections={compassSections} />

      {/* ── 1. Intro Hero (The Architect) ── */}
      <section id="the-architect" className="container-page pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-24 relative">
        <ScrollReveal>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:gap-16">
            <div>
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
                  className="group inline-flex items-center gap-2 rounded-[24px] bg-foreground border-2 border-foreground px-6 py-3.5 text-xs sm:text-sm font-semibold text-background transition-all duration-500 ease-out hover:bg-background hover:text-foreground hover:border-foreground hover:-translate-y-1 hover:shadow-lg"
                >
                  <Mail className="h-4 w-4" />
                  Email us
                </a>
                <a
                  href="tel:+251909312671"
                  className="group inline-flex items-center gap-2 rounded-[24px] border-2 border-border bg-background px-6 py-3.5 text-xs sm:text-sm font-semibold text-foreground transition-all duration-500 ease-out hover:border-foreground hover:bg-foreground hover:text-background hover:-translate-y-1 hover:shadow-lg"
                >
                  <Phone className="h-4 w-4" />
                  Call us (+251 909 312 671)
                </a>
                <Link
                  to="/systems"
                  className="group inline-flex items-center gap-2 rounded-[24px] border-2 border-border bg-surface px-6 py-3.5 text-xs sm:text-sm font-semibold text-foreground transition-all duration-500 ease-out hover:border-foreground hover:bg-foreground hover:text-background hover:-translate-y-1 hover:shadow-lg"
                >
                  Explore systems
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative sm:mx-auto sm:max-w-md md:max-w-none">
              <div className="overflow-hidden rounded-[36px] rounded-tr-[16px] rounded-bl-[16px] border border-border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-foreground/30">
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
        </ScrollReveal>
      </section>

      {/* ── 2. Core Disciplines (Organic Curved Cards) ── */}
      <section id="core-disciplines" className="border-y border-border bg-surface/70 py-16 sm:py-24 md:py-32">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Core Disciplines"
              title="Architecture, applied AI, and product engineering."
              description="Four core technical disciplines our team brings to every engagement."
            />
          </ScrollReveal>

          <div className="mt-8 sm:mt-12 md:mt-14 grid gap-5 sm:gap-7 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 100}>
                <div
                  className={`group ${c.shape} border border-border bg-card p-7 sm:p-9 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-foreground/50 relative overflow-hidden`}
                >
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">{c.title}</h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diagonal Angled Section Divider ── */}
      <div className="relative h-16 sm:h-24 w-full bg-black overflow-hidden select-none -mb-1 z-10" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full text-surface/70 fill-current">
          <path d="M1200 0L0 120V0h1200z" />
        </svg>
      </div>

      {/* ── 3. Systems Architecture Section (Stark Inverted Black + Bold Watermark FURII) ── */}
      <section id="architecture" className="relative overflow-hidden bg-black text-white py-24 sm:py-36 border-b border-neutral-800">
        {/* Prominent High-Visibility Watermark - FURII */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
          <span className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[28vw] sm:text-[25vw] font-black uppercase leading-none tracking-tighter text-white/10 sm:text-white/12 transition-all duration-700">
            FURII
          </span>
          <span className="absolute bottom-10 -right-10 font-mono text-[20vw] font-black uppercase leading-none tracking-tighter text-white/[0.08] transition-all duration-700">
            FURII
          </span>
        </div>

        <div className="container-page relative z-10">
          <ScrollReveal>
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
              <span className="shrink-0 rounded-full border border-neutral-800 bg-neutral-900/90 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-300">
                12 Core Pillars
              </span>
            </div>
          </ScrollReveal>

          <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {architecturePillars.map((p, i) => {
              const Icon = p.icon;
              const isEven = i % 2 === 0;
              const shapeClass = isEven
                ? "rounded-tl-[44px] rounded-br-[44px] rounded-tr-[18px] rounded-bl-[18px]"
                : "rounded-tr-[44px] rounded-bl-[44px] rounded-tl-[18px] rounded-br-[18px]";

              return (
                <ScrollReveal key={p.title} delay={(i % 3) * 100}>
                  <div
                    className={`group relative flex flex-col justify-between ${shapeClass} border border-neutral-800/90 bg-neutral-950/90 p-7 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/60 hover:bg-neutral-900 hover:shadow-[0_25px_60px_rgba(255,255,255,0.08)]`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-black transition-transform duration-500 group-hover:scale-110 shadow-md">
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
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Applied AI Workflows Section (Classy Monochrome Dark + Bold Watermark FURII) ── */}
      <section id="applied-ai" className="relative overflow-hidden bg-neutral-950 text-white py-24 sm:py-36 border-b border-neutral-800">
        {/* Prominent High-Visibility Watermark - FURII */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[28vw] sm:text-[25vw] font-black uppercase leading-none tracking-tighter text-white/10 sm:text-white/12 transition-all duration-700">
            FURII
          </span>
        </div>

        <div className="container-page relative z-10">
          <ScrollReveal>
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
          </ScrollReveal>

          {/* AI Domain Showcase Cards - Organic Shapes */}
          <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiDomains.map((d, i) => {
              const Icon = d.icon;
              return (
                <ScrollReveal key={d.domain} delay={(i % 3) * 120}>
                  <div
                    className={`group relative ${d.shape} border border-neutral-800/90 bg-black/90 p-7 sm:p-9 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/60 hover:bg-neutral-900 hover:shadow-[0_25px_60px_rgba(255,255,255,0.09)]`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-black font-bold shadow-md">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {d.domain}
                      </h3>
                    </div>

                    <span className="inline-block mt-4 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-white">
                      {d.tag}
                    </span>

                    <ul className="mt-6 space-y-3">
                      {d.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Diagonal Section Divider Returning to Light ── */}
      <div className="relative h-16 sm:h-24 w-full bg-neutral-950 overflow-hidden select-none -mt-1 z-10" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full text-background fill-current">
          <path d="M0 0l1200 120V0H0z" />
        </svg>
      </div>

      {/* ── 5. Selected Work ── */}
      <section id="selected-work" className="container-page py-16 sm:py-24 md:py-32">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Platforms we've architected and shipped."
          />
        </ScrollReveal>

        <ol className="mt-8 sm:mt-12 md:mt-14 divide-y divide-border overflow-hidden rounded-[36px] border border-border bg-card shadow-xs">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.name} delay={i * 80}>
              <li
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
            </ScrollReveal>
          ))}
        </ol>

        {/* Large Prominent CTA Button to Systems Page */}
        <ScrollReveal delay={300}>
          <div className="mt-10 sm:mt-14 flex justify-center">
            <Link
              to="/systems"
              className="group inline-flex items-center justify-center gap-3 rounded-[28px] bg-foreground border-2 border-foreground px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base md:text-lg font-bold text-background shadow-md transition-all duration-500 ease-out hover:bg-background hover:text-foreground hover:border-foreground hover:-translate-y-1 hover:shadow-2xl"
            >
              <span>Look at more of our projects in detail</span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-500 ease-out group-hover:translate-x-2" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 6. Principles ── */}
      <section id="principles" className="border-t border-border bg-surface/70 py-16 sm:py-24 md:py-32">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading eyebrow="How We Work" title="Principles that shape our craft." />
          </ScrollReveal>

          <div className="mt-8 sm:mt-12 md:mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div
                  className={`group ${p.shape} border border-border bg-card p-7 sm:p-9 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-foreground/50 relative overflow-hidden`}
                >
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Giant Animated CTA Banner (Contact) ── */}
      <div id="contact">
        <ScrollReveal>
          <ContactCtaBanner />
        </ScrollReveal>
      </div>
    </div>
  );
}
