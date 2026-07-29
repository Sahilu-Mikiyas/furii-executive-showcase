import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Factory,
  Cog,
  Wrench,
  Gauge,
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
  CheckSquare,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/forge-mes")({
  head: () => ({
    meta: [
      { title: "Forge MES | Enterprise Manufacturing Execution System | FURII" },
      {
        name: "description",
        content:
          "Forge MES is an Industry 4.0 manufacturing execution system connecting floor machinery, quality assurance, and automated OEE at plant scale.",
      },
    ],
  }),
  component: ForgeMesPage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "99.99%", label: "Industry 4.0 SLA" },
  { value: "88.5%", label: "Plant OEE" },
  { value: "<10ms", label: "PLC Signal Latency" },
  { value: "99.8%", label: "QA Pass Rate" },
];

const coreFeatures = [
  {
    icon: Factory,
    title: "Machine OPC-UA Connector",
    description:
      "Universal industrial IoT protocol connector interfacing directly with Siemens, Allen-Bradley, and Omron PLCs for sub-10ms telemetry extraction.",
  },
  {
    icon: CheckSquare,
    title: "Real-Time QA Inspection",
    description:
      "Computer-vision quality control engine inspecting manufactured parts at full line speed, flagging dimension tolerances and surface defects instantly.",
  },
  {
    icon: Gauge,
    title: "OEE Performance Dashboard",
    description:
      "Automated Overall Equipment Effectiveness tracking measuring Availability, Performance, and Quality metrics live across all assembly lines.",
  },
  {
    icon: Cog,
    title: "Production Dispatch & Schedule",
    description:
      "Dynamic shop floor scheduling engine optimizing work order sequencing, machine changeovers, and material staging for maximum throughput.",
  },
  {
    icon: Wrench,
    title: "Predictive Tooling & Maintenance",
    description:
      "Continuous machine health monitoring alerting maintenance teams to spindle vibration anomalies and tool bit wear prior to line failure.",
  },
  {
    icon: BarChart3,
    title: "Batch Geneology & Traceability",
    description:
      "Complete raw material to finished product traceability recording component lot numbers, operator badges, and environmental parameters.",
  },
];

const architecturePoints = [
  {
    icon: Server,
    title: "C++ High-Speed Microservices",
    description: "Ultra-low latency C++ execution core compiled natively for industrial edge gateways with microsecond determinism.",
  },
  {
    icon: Database,
    title: "InfluxDB Time-Series Store",
    description: "High-throughput time-series database storing millions of machine sensor datapoints per minute with loss-less retention.",
  },
  {
    icon: Zap,
    title: "OPC-UA Protocol Engine",
    description: "Standardized Industry 4.0 machine-to-machine communication layer ensuring seamless PLC and robotic arm interoperability.",
  },
  {
    icon: Lock,
    title: "Grafana Real-Time Telemetry",
    description: "Industrial dashboard visualization suite streaming live machine vibration, power consumption, and production rate charts.",
  },
];

const focusAreas = [
  {
    title: "Sub-10ms PLC Signal Latency",
    description:
      "Engineered to extract and process high-frequency machine signals without adding latency to critical industrial control loops.",
  },
  {
    title: "Edge Machine Telemetry Buffer",
    description:
      "Factory edge nodes store machine metrics locally during plant network reconfigurations, ensuring continuous OEE calculation.",
  },
  {
    title: "Zero-Defect Quality Control",
    description:
      "Integrates AI vision cameras directly into assembly lines to reject out-of-spec components automatically before packaging.",
  },
  {
    title: "Automated Line Changeover",
    description:
      "Streamlines product tooling changes with digital SOPs, automated PLC recipe uploads, and line clearance verification checklists.",
  },
];

const testimony = {
  quote:
    "Forge MES revolutionized our plant floor operations across three manufacturing facilities. Our Overall Equipment Effectiveness jumped from 68% to 88.5% within six months of deployment. The OPC-UA machine connector and predictive tooling alerts reduced our unplanned line stoppages by 45%.",
  name: "Eng. Yared Bekele",
  title: "Plant Operations Director",
  organization: "Midroc Industrial / Ethio Cement & Steel Works",
  metric: "88.5% Plant OEE achieved",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function ForgeMesUiSnapshots() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "opcua" | "qa" | "maintenance">("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive Plant Command", icon: LayoutDashboard },
    { id: "opcua", label: "OPC-UA Machine Telemetry", icon: Cog },
    { id: "qa", label: "Real-Time QA Inspection", icon: CheckSquare },
    { id: "maintenance", label: "Tooling & Maintenance", icon: Wrench },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Forge MES v5.2 • Ethio Steel Works Instance
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
        {/* ── 1. Executive Plant Command Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Overall Plant OEE</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">88.5%</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">World-Class</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{ width: "88.5%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Production Rate</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">4,250 / hr</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">Line 1 & 2 Active</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "95%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Quality Yield Rate</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">99.8%</span>
                  <span className="text-[10px] font-mono text-orange-400 font-semibold">Vision Verified</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full" style={{ width: "99.8%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Active PLC Nodes</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">128 PLCs</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">OPC-UA Sync</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Assembly Line Status */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Factory className="h-3.5 w-3.5 text-orange-400" /> Plant Assembly Line Matrix
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">Ethio Steel Works Main Plant</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { line: "Assembly Line 01 - Heavy Rolling Mill", rate: "1,800 units/hr", oee: "OEE 91.2%", status: "RUNNING NORMAL" },
                    { line: "Assembly Line 02 - Precision CNC Cut", rate: "1,450 units/hr", oee: "OEE 87.8%", status: "RUNNING NORMAL" },
                    { line: "Assembly Line 03 - Robotic Welding Bay", rate: "1,000 units/hr", oee: "OEE 86.5%", status: "TOOLING CHANGEOVER" },
                  ].map((row) => (
                    <div key={row.line} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-orange-400">●</span>
                        <div>
                          <p className="font-medium text-foreground">{row.line}</p>
                          <p className="text-[10px] text-muted-foreground">{row.rate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-orange-400">
                          {row.oee}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time Machine Telemetry Log */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Cog className="h-3.5 w-3.5 text-orange-400" /> Live OPC-UA Machine Stream
                </span>
                <div className="space-y-3">
                  {[
                    { event: "CNC Spindle #04 Cycle Completed", time: "1 sec ago", detail: "Batch #B-90412" },
                    { event: "Robotic Arm Arm-02 Calibrated", time: "18 sec ago", detail: "Welding Pass 100%" },
                    { event: "InfluxDB Time-Series Batch", time: "40 sec ago", detail: "14,200 Datapoints" },
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

        {/* ── 2. OPC-UA Machine Telemetry Screen ── */}
        {activeTab === "opcua" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* OPC-UA Banner */}
            <div className="flex items-center justify-between rounded-xl border border-orange-500/20 bg-orange-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500 text-background font-bold">
                  <Cog className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">OPC-UA Machine Protocol Connector Engine</h4>
                  <p className="text-xs text-muted-foreground">Sub-10ms signal extraction from Siemens S7 & Allen-Bradley ControlLogix PLCs</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 10ms Microsecond Determinism
              </span>
            </div>

            {/* Machine Sensors Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-3 border-b border-border pb-2">
                  <span className="text-xs font-semibold text-foreground">Machine Node: Siemens S7-1500 PLC #NODE-08</span>
                  <span className="font-mono text-[10px] text-orange-400">OPC-UA Active Connection</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { sensor: "Main Spindle Motor Speed", value: "3,600 RPM", status: "Optimal" },
                    { sensor: "Hydraulic Pressure Sensor", value: "210 Bar", status: "Optimal" },
                    { sensor: "Bearing Thermal Probe", value: "62.4°C (Limit 85°C)", status: "Optimal" },
                  ].map((s) => (
                    <div key={s.sensor} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-muted-foreground">{s.sensor}</span>
                        <p className="font-bold text-foreground">{s.value}</p>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                          {s.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Machine Health Widget */}
              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <span className="text-xs font-semibold text-foreground border-b border-border pb-2 block">
                  Machine Health Score
                </span>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Spindle Health:</span>
                    <span className="text-emerald-400 font-semibold">98.5%</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Vibration Index:</span>
                    <span className="text-emerald-400 font-semibold">0.8 mm/s</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Predicted Remaining Life:</span>
                    <span className="text-orange-400 font-semibold">420 Operating Hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 3. Real-Time QA Inspection Screen ── */}
        {activeTab === "qa" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* QA Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Computer-Vision Quality Assurance Stream</span>
                <span className="font-mono text-[10px] text-muted-foreground">Ethio Steel Works Quality Lab</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    part: "PART #P-9020 - Precision Steel Gear Assembly",
                    tol: "Tolerance: ±0.002mm • Surface Defects: None",
                    status: "PASS • QA CERTIFIED",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                  {
                    part: "PART #P-9021 - Heavy Structural Flange",
                    tol: "Tolerance: ±0.001mm • Surface Defects: None",
                    status: "PASS • QA CERTIFIED",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                ].map((q) => (
                  <div key={q.part} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{q.part}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{q.tol}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${q.style}`}>
                        {q.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 4. Tooling & Maintenance Screen ── */}
        {activeTab === "maintenance" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Maintenance Banner */}
            <div className="flex items-center justify-between rounded-xl border border-orange-500/20 bg-orange-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500 text-background font-bold">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Forge MES Predictive Maintenance & Work Orders</h4>
                  <p className="text-xs text-muted-foreground">Automated technician dispatch, spare parts reservation, and tooling lifecycle tracking</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 45% Downtime Reduction
              </span>
            </div>

            {/* Work Orders Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Plant Maintenance Work Order Queue</span>
                <span className="font-mono text-[10px] text-muted-foreground">Preventive Maintenance Stream</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    wo: "WORK ORDER #WO-8012 - CNC Spindle Bit Replacement",
                    machine: "Machine Node #04 (Line 02)",
                    status: "SCHEDULED • PARTS RESERVED",
                    style: "bg-orange-500/10 text-orange-400 border-orange-500/30",
                  },
                ].map((w) => (
                  <div key={w.wo} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{w.wo}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{w.machine}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${w.style}`}>
                        {w.status}
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

function ForgeMesPage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-orange-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
                  Manufacturing • Midroc / Ethio Steel Instance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Forge MES
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Manufacturing execution system connecting floor machinery, quality assurance,
                and automated overall equipment effectiveness at plant scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["MES", "QA", "OEE", "OPC-UA", "C++"].map((tag) => (
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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-orange-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/forge-mes.png"
                  alt="Forge MES logo"
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
            description="Explore the live executive plant command dashboard, OPC-UA machine telemetry stream, real-time QA vision inspection, and predictive maintenance Work Orders."
          />
          <div className="mt-12">
            <ForgeMesUiSnapshots />
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What Forge MES Delivers"
            description="Six integrated Industry 4.0 modules connecting factory PLCs, quality inspection, work order dispatch, and equipment effectiveness."
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
            title="Built for Industry 4.0 Factory Scale"
            description="High-frequency C++ microservices processing millions of sensor datapoints per minute with zero loss."
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
              C++ Microservices · InfluxDB · OPC-UA · Grafana · Docker · Redis
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
            description="The core tenets behind the development of Forge MES."
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
