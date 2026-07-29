import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Heart,
  Activity,
  Stethoscope,
  Pill,
  Brain,
  Database,
  Server,
  Lock,
  Zap,
  BarChart3,
  Users,
  Clock,
  Quote,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/pulse-os")({
  head: () => ({
    meta: [
      { title: "Pulse OS | Enterprise Hospital Operating System | FURII" },
      {
        name: "description",
        content:
          "Pulse OS is a full hospital operating system managing clinical workflows, patient histories, and diagnostic intelligence at enterprise scale.",
      },
    ],
  }),
  component: PulseOsPage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "99.97%", label: "Uptime SLA" },
  { value: "<200ms", label: "Avg Response" },
  { value: "HL7/FHIR", label: "Standards" },
  { value: "50k+", label: "Daily Records" },
];

const coreFeatures = [
  {
    icon: Heart,
    title: "Electronic Medical Records",
    description:
      "Comprehensive patient histories with structured clinical notes, multimedia attachments, and full audit trails. Every record is versioned and tamper-evident.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Workflow Engine",
    description:
      "Automated care pathways that guide clinical teams from admission through discharge. Smart task routing, escalation rules, and real-time status boards.",
  },
  {
    icon: Pill,
    title: "Lab & Pharmacy Automation",
    description:
      "End-to-end lab order management with barcode specimen tracking, automated result interpretation, and pharmacy dispensing integrated with prescriber workflows.",
  },
  {
    icon: Brain,
    title: "AI Clinical Triage",
    description:
      "Intelligent patient prioritization using symptom analysis, vital trend correlation, and historical pattern matching. Reduces triage time by up to 40%.",
  },
  {
    icon: Activity,
    title: "Real-Time Patient Monitoring",
    description:
      "Live dashboards streaming vitals from bedside devices. Threshold-based alerting with configurable escalation chains and nurse station integration.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Operational intelligence dashboards covering bed occupancy, department throughput, revenue cycle metrics, and clinical outcome tracking across all departments.",
  },
];

const architecturePoints = [
  {
    icon: Database,
    title: "PostgreSQL Core",
    description: "ACID-compliant relational core with row-level security and encrypted-at-rest patient data.",
  },
  {
    icon: Server,
    title: "Microservices Architecture",
    description: "Independently deployable services for EMR, labs, pharmacy, billing, and analytics.",
  },
  {
    icon: Zap,
    title: "Kafka Event Bus",
    description: "Async event streaming for real-time data propagation across clinical subsystems.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "HIPAA-compliant infrastructure with end-to-end encryption, RBAC, and comprehensive audit logging.",
  },
];

const focusAreas = [
  {
    title: "Interoperability First",
    description:
      "Native HL7 v2.x and FHIR R4 compliance means Pulse OS integrates with existing hospital information systems, insurance networks, and diagnostic equipment without custom adapters.",
  },
  {
    title: "Offline Resilience",
    description:
      "Critical clinical modules operate in offline mode during network interruptions. Data syncs automatically when connectivity is restored, zero patient data is lost.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Built from the ground up to meet HIPAA, GDPR, and local health authority requirements. Every access event is logged, every record is auditable.",
  },
  {
    title: "Scalable Multi-Facility",
    description:
      "Single deployment supports multiple hospitals, clinics, and satellite facilities under one unified tenant with facility-level data isolation and shared analytics.",
  },
];

const testimony = {
  quote:
    "Pulse OS transformed the way our clinical staff operates. We went from paper-based chaos to a unified digital workflow in under six months. The AI triage module alone has reduced our emergency wait times by 35%. This is not just software, it is the backbone of our hospital.",
  name: "Dr. Alemayehu Tadesse",
  title: "Chief Medical Officer",
  organization: "Addis General Hospital",
  metric: "35% reduction in ER wait times",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── Component ─── */

function PulseOsPage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-sky-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-6xl">
          {/* Back Link */}
          <Link
            to="/systems"
            className="group/back mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors duration-500 hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 group-hover/back:-translate-x-1" />
            All Systems
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text */}
            <div className="animate-fade-in">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Healthcare
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Pulse OS
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                A full hospital operating system managing clinical workflows, patient histories,
                and diagnostic intelligence at enterprise scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["EMR", "HL7", "FHIR", "AI Triage", "Microservices"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl border border-border bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Logo + Stats */}
            <div className="flex flex-col items-center gap-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-sky-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/pulse-os.png"
                  alt="Pulse OS logo"
                  className="h-full w-full object-contain drop-shadow-lg"
                />
              </div>
              <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
                {heroStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="animate-fade-in rounded-2xl border border-border bg-card p-4 text-center"
                    style={stagger(i + 2)}
                  >
                    <p className="text-xl font-bold tracking-tight text-foreground">{stat.value}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What Pulse OS Delivers"
            description="Six integrated modules that cover the full clinical lifecycle, from first contact through discharge and follow-up."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group/card animate-fade-in rounded-[24px] border border-border bg-card p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl"
                  style={stagger(i)}
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-border bg-surface text-foreground transition-all duration-500 group-hover/card:border-foreground group-hover/card:bg-foreground group-hover/card:text-background">
                    <Icon className="h-5 w-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{feature.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Architecture ── */}
      <section className="border-y border-border bg-surface/40 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Architecture"
            title="Built for Hospital Scale"
            description="Production-grade infrastructure that runs 24/7 in mission-critical clinical environments."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {architecturePoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="animate-fade-in flex items-start gap-5 rounded-[24px] border border-border bg-card p-7 transition-all duration-500 ease-out hover:border-foreground/20"
                  style={stagger(i)}
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border bg-surface text-foreground">
                    <Icon className="h-5 w-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{point.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Tech Stack Bar */}
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 animate-fade-in" style={stagger(5)}>
            <Cpu className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="font-mono text-xs tracking-wider text-muted-foreground">
              Microservices · PostgreSQL · Redis · Kafka · Docker · Kubernetes
            </span>
          </div>
        </div>
      </section>

      {/* ── What We Focused On ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Our Focus"
            title="Engineering Priorities"
            description="The non-negotiable principles that shaped every line of code in Pulse OS."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {focusAreas.map((area, i) => (
              <div
                key={area.title}
                className="animate-fade-in rounded-[24px] border border-border bg-card p-7 transition-all duration-500 ease-out hover:border-foreground/20"
                style={stagger(i)}
              >
                <div className="mb-3 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-foreground/70 shrink-0" />
                  <h3 className="text-base font-semibold tracking-tight text-foreground">{area.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground pl-8">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Testimony ── */}
      <section className="border-t border-border bg-surface/40 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            tag="Testimony"
            title="What Our Client Says"
          />
          <div className="mt-12 animate-fade-in rounded-[28px] border border-border bg-card p-8 sm:p-12 transition-all duration-500 hover:border-foreground/20 hover:shadow-xl">
            <Quote className="h-10 w-10 text-foreground/10 mb-6" />
            <blockquote className="text-lg sm:text-xl leading-relaxed text-foreground font-medium italic">
              "{testimony.quote}"
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div>
                <p className="text-base font-semibold text-foreground">{testimony.name}</p>
                <p className="text-sm text-muted-foreground">{testimony.title}</p>
                <p className="font-mono text-xs text-muted-foreground mt-0.5">{testimony.organization}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface px-5 py-3 text-center">
                <p className="text-lg font-bold text-foreground">{testimony.metric.split(" ")[0]}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {testimony.metric.split(" ").slice(1).join(" ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <ContactCtaBanner />
    </div>
  );
}
