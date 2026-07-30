import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  HardHat,
  Truck,
  ClipboardList,
  Building,
  Brain,
  Database,
  Server,
  Lock,
  Zap,
  BarChart3,
  Quote,
  LayoutDashboard,
  FileText,
  AlertTriangle,
  Calendar,
  Sparkles,
  UserCheck,
  Clock,
  Check,
  Hammer,
  DollarSign,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/construct-x")({
  head: () => ({
    meta: [
      { title: "ConstructX | Enterprise Capital Project & Construction OS | FURII" },
      {
        name: "description",
        content:
          "ConstructX is a capital project management platform tracking field operations, material procurement, subcontractor bids, and safety at enterprise scale.",
      },
    ],
  }),
  component: ConstructXPage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "99.9%", label: "System SLA" },
  { value: "$450M+", label: "Projects Managed" },
  { value: "100%", label: "Offline Field Sync" },
  { value: "22%", label: "Cost Savings" },
];

const coreFeatures = [
  {
    icon: HardHat,
    title: "Field Safety & Daily Site Logs",
    description:
      "Offline-first mobile site log capture allowing field engineers to record daily labor headcount, weather delays, safety incidents, and geotagged progress photos.",
  },
  {
    icon: ClipboardList,
    title: "Subcontractor Bid Portal",
    description:
      "Competitive RFP bidding platform unifying multi-trade subcontractor bids, contract milestones, milestone completion sign-offs, and progress payments.",
  },
  {
    icon: Truck,
    title: "Material Procurement Tracking",
    description:
      "Supply chain logistics engine tracking raw material orders, delivery dispatch notices, site arrival verifications, and warehouse inventory levels.",
  },
  {
    icon: DollarSign,
    title: "Capital Budget & Earned Value",
    description:
      "Financial engineering core tracking Earned Value Management (EVM), budget variance, change order approvals, and contractor payout schedules.",
  },
  {
    icon: Building,
    title: "BIM Model & Blueprint Viewer",
    description:
      "High-performance 3D CAD/BIM drawing viewer enabling field teams to inspect structural blueprints and mark up revision issues directly on mobile tablets.",
  },
  {
    icon: BarChart3,
    title: "Quality Inspection & Punch Lists",
    description:
      "Automated quality assurance inspection workflows for pre-handover punch list resolution, building code compliance, and structural sign-offs.",
  },
];

const architecturePoints = [
  {
    icon: Server,
    title: "Node.js GraphQL API Core",
    description: "High-performance unified API gateway enabling flexible mobile querying of complex multi-project construction datasets.",
  },
  {
    icon: Database,
    title: "AWS S3 Blueprint Vault",
    description: "Secure versioned object storage holding gigabytes of CAD drawings, BIM models, structural calculations, and site photos.",
  },
  {
    icon: Zap,
    title: "Offline SQLite Mobile Sync",
    description: "Local device storage engine for React Native mobile apps ensuring field engineers can work continuously in remote zero-bar zones.",
  },
  {
    icon: Lock,
    title: "Multi-Contractor RBAC Security",
    description: "Granular role-based security protecting sensitive project cost estimates, bidding documents, and proprietary engineering designs.",
  },
];

const focusAreas = [
  {
    title: "Field-Offline Site Log Capture",
    description:
      "Engineered specifically for remote construction sites with zero cellular coverage, auto-syncing field logs when engineers return to headquarters.",
  },
  {
    title: "High-Resolution Mobile CAD Viewer",
    description:
      "Renders multi-layer 2D blueprints and 3D BIM models at 60fps on field mobile tablets with pinch-to-zoom and markup tools.",
  },
  {
    title: "Automated Milestone Billing",
    description:
      "Reconciles subcontractor milestone claims against verified field site inspection logs before releasing escrow progress payments.",
  },
  {
    title: "Geotagged Safety Compliance",
    description:
      "Requires site engineers to geotag safety hazard reports with GPS coordinates and timestamps for audit-ready compliance reporting.",
  },
];

const testimony = {
  quote:
    "ConstructX revolutionized how we manage our $450M+ capital construction portfolio. Before ConstructX, site reports from remote highway and building projects took days to reach headquarters. Now, daily site logs, material deliveries, and safety audits sync instantly. We've cut project cost overruns by 22%.",
  name: "Eng. Dawit Kassa",
  title: "VP of Infrastructure Development",
  organization: "Flintstone Engineering / Varnero Construction",
  metric: "22% reduction in project cost overruns",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function ConstructXUiSnapshots() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "logs" | "bids" | "materials">("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive Project Command", icon: LayoutDashboard },
    { id: "logs", label: "Field Logs & Safety", icon: HardHat },
    { id: "bids", label: "Subcontractor Bids", icon: ClipboardList },
    { id: "materials", label: "Material Procurement", icon: Truck },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            ConstructX v4.5 • Flintstone Infrastructure Instance
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-1.5 rounded-2xl border border-border bg-surface p-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen Frame */}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border/80 bg-background p-4 sm:p-6 font-sans">
        {/* ── 1. Executive Project Command Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Active Capital Portfolio</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">$485.0M</span>
                  <span className="text-[10px] font-mono text-yellow-500 font-semibold">14 Mega Projects</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "92%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Overall Site Progress</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">84.2%</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">On Schedule</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "84%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Material Deliveries</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">98.5%</span>
                  <span className="text-[10px] font-mono text-yellow-400 font-semibold">Verified On Site</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: "98%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Site Safety Audit</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">99.1%</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">Zero Incident</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "99%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Capital Projects List */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Building className="h-3.5 w-3.5 text-yellow-400" /> Active Capital Construction Sites
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">Flintstone Engineering</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { site: "Site #01 - Bole Expressway Interchange", budget: "$142M Budget", prog: "78% Completed", status: "ON SCHEDULE" },
                    { site: "Site #02 - Commercial Tower Complex B", budget: "$185M Budget", prog: "91% Completed", status: "ON SCHEDULE" },
                    { site: "Site #03 - Regional Logistics Terminal", budget: "$158M Budget", prog: "82% Completed", status: "ON SCHEDULE" },
                  ].map((row) => (
                    <div key={row.site} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-yellow-400">●</span>
                        <div>
                          <p className="font-medium text-foreground">{row.site}</p>
                          <p className="text-[10px] text-muted-foreground">{row.budget}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-yellow-400">
                          {row.prog}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time Site Stream */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <HardHat className="h-3.5 w-3.5 text-yellow-400" /> Live Field Log Stream
                </span>
                <div className="space-y-3">
                  {[
                    { event: "Concrete Pour Logged", time: "2 min ago", detail: "Site #02 • 450m³ Poured" },
                    { event: "Steel Delivery Verified", time: "14 min ago", detail: "Site #01 • 120 Tons Rebar" },
                    { event: "Safety Audit Passed", time: "35 min ago", detail: "Site #03 • Geotagged OK" },
                  ].map((e) => (
                    <div key={e.event} className="border-b border-border/40 pb-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{e.event}</span>
                        <span className="text-[9px] font-mono text-muted-foreground">{e.time}</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">{e.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 2. Field Logs & Safety Screen ── */}
        {activeTab === "logs" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Field Banner */}
            <div className="flex items-center justify-between rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-500 text-background font-bold">
                  <HardHat className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">ConstructX Mobile Field Log Engine</h4>
                  <p className="text-xs text-muted-foreground">Offline SQLite device storage • Geotagged photo attachments & safety audits</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 100% Offline Mobile Sync
              </span>
            </div>

            {/* Field Logs Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Daily Site Inspection & Safety Stream</span>
                <span className="font-mono text-[10px] text-muted-foreground">Site #01 - Bole Interchange</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    log: "DAILY LOG #DL-8820 - Pier 4 Foundation Inspection",
                    eng: "Lead Eng. Samuel Abera",
                    status: "PASSED • 8 PHOTOS ATTACHED",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                  {
                    log: "SAFETY AUDIT #SA-4019 - Crane Wire Inspection",
                    eng: "Safety Officer Worku Tadesse",
                    status: "PASSED • ZERO DEFECTS",
                    style: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
                  },
                ].map((l) => (
                  <div key={l.log} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{l.log}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{l.eng}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${l.style}`}>
                        {l.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 3. Subcontractor Bids Screen ── */}
        {activeTab === "bids" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Bids Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <ClipboardList className="h-3.5 w-3.5 text-yellow-400" /> Multi-Trade RFP Subcontractor Bids
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Project #02 - Commercial Tower</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { rfp: "RFP-201 - Electrical & High-Voltage Cabling", vendor: "Ethio Power Solutions", bid: "$4.2M Bid", status: "AWARDED & ESCROW RELEASED" },
                  { rfp: "RFP-204 - HVAC & Climate Piping Trade", vendor: "CoolTech Engineering", bid: "$3.8M Bid", status: "MILESTONE 2 CLEARED" },
                ].map((b) => (
                  <div key={b.rfp} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-yellow-400">{b.rfp.split(" ")[0]}</span>
                      <div>
                        <p className="font-medium text-foreground">{b.rfp}</p>
                        <p className="text-[10px] text-muted-foreground">{b.vendor} • {b.bid}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                        {b.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 4. Material Procurement Screen ── */}
        {activeTab === "materials" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Material Banner */}
            <div className="flex items-center justify-between rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-500 text-background font-bold">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">ConstructX Material Supply Chain Logistics</h4>
                  <p className="text-xs text-muted-foreground">Automated delivery dispatch notices, weighbridge verification, site stock sync</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 100% Verified Deliveries
              </span>
            </div>

            {/* Material Log Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Recent Site Raw Material Deliveries</span>
                <span className="font-mono text-[10px] text-muted-foreground">Site #01 Dispatch Hub</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    mat: "PO #MAT-8840 - Structural Steel Rebar Grade 60 (120 Tons)",
                    supplier: "Ethio Steel Mills",
                    status: "WEIGHBRIDGE VERIFIED & STAGED",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                ].map((m) => (
                  <div key={m.mat} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{m.mat}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{m.supplier}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${m.style}`}>
                        {m.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Component ─── */

function ConstructXPage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-yellow-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
                  Construction • Flintstone / Varnero Instance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                ConstructX
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Capital project management platform tracking field operations, material procurement,
                subcontractor bids, and safety at enterprise scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Projects", "Procure", "Field", "React Native", "GraphQL"].map((tag) => (
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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-yellow-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/construct-x.png"
                  alt="ConstructX logo"
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

      {/* ── System UI Snapshots Showcase ── */}
      <section className="border-b border-border bg-surface/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Interface Preview"
            title="Interactive System Snapshots"
            description="Explore the live executive project command dashboard, field inspection daily logs, subcontractor RFP bidding portal, and material supply chain tracking."
          />
          <div className="mt-12">
            <ConstructXUiSnapshots />
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What ConstructX Delivers"
            description="Six integrated modules that manage capital construction projects from blueprint design to site execution and handover."
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
            title="Built for Off-Grid Capital Construction"
            description="High-performance mobile and GraphQL architecture engineered to operate reliably on zero-coverage site locations."
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
              React Native · Node.js · AWS S3 · GraphQL · SQLite · Docker
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
            description="The core tenets behind the development of ConstructX."
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
