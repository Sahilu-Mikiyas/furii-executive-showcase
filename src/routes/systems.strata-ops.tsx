import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Building,
  Building2,
  Wrench,
  Radio,
  DollarSign,
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
  Key,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/strata-ops")({
  head: () => ({
    meta: [
      { title: "Strata Ops | Enterprise Property & Real Estate OS | FURII" },
      {
        name: "description",
        content:
          "Strata Ops is a multi-property management operating system providing lease automation, tenant portals, and IoT-driven predictive maintenance.",
      },
    ],
  }),
  component: StrataOpsPage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "99.99%", label: "Telemetry SLA" },
  { value: "25k+", label: "Property Units" },
  { value: "<50ms", label: "MQTT Latency" },
  { value: "30%", label: "Maintenance Savings" },
];

const coreFeatures = [
  {
    icon: Building,
    title: "Automated Lease Management",
    description:
      "End-to-end digital leasing engine handling automated rent escalation clauses, electronic signature workflows, tenant background checks, and lease renewal notifications.",
  },
  {
    icon: Radio,
    title: "IoT Telemetry Monitoring",
    description:
      "Real-time sensor integration tracking HVAC vibration, elevator cycles, water pressure, smart electricity meters, and ambient building temperature across all towers.",
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance Engine",
    description:
      "Machine learning model analyzing IoT vibration and thermal signatures to detect equipment wear before catastrophic breakdowns occur, reducing maintenance downtime by 30%.",
  },
  {
    icon: Key,
    title: "Tenant Self-Service Hub",
    description:
      "Cross-platform tenant portal for digital rent payments, instant maintenance request tickets, digital keycard credentials, and visitor pass generation.",
  },
  {
    icon: DollarSign,
    title: "Rent Collection & Escrow",
    description:
      "Automated multi-gateway rent processing, security deposit escrow tracking, late fee generation, and direct accounting ledger synchronization.",
  },
  {
    icon: BarChart3,
    title: "Multi-Tower Space Analytics",
    description:
      "Portfolio executive dashboards tracking unit occupancy rates, energy consumption optimization, maintenance expense ratios, and asset yield across properties.",
  },
];

const architecturePoints = [
  {
    icon: Server,
    title: "Go Microservices Engine",
    description: "High-concurrency Go services designed to process hundreds of thousands of IoT sensor telemetry packets per second.",
  },
  {
    icon: Database,
    title: "TimescaleDB IoT Core",
    description: "Time-series database optimized for high-volume sensor metric storage, continuous aggregation, and predictive anomaly detection.",
  },
  {
    icon: Zap,
    title: "MQTT Message Broker",
    description: "Lightweight pub/sub protocol ensuring low-bandwidth IoT device connectivity across building gateways and smart meters.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Lease Security",
    description: "Encrypted lease storage, audit-ready financial ledgers, and strict multi-tenant isolation per property owner.",
  },
];

const focusAreas = [
  {
    title: "Sub-Second Sensor Telemetry",
    description:
      "Architected to stream and analyze telemetry data from thousands of connected building sensors in real time, alerting facilities staff within milliseconds.",
  },
  {
    title: "Offline Building Gateway Fallback",
    description:
      "Local building gateways continue recording telemetry and managing access control credentials during internet outages, syncing seamlessly when online.",
  },
  {
    title: "Automated Banking Reconciliation",
    description:
      "Integrates with commercial bank APIs to auto-match incoming wire transfers and mobile money payments to tenant lease ledgers.",
  },
  {
    title: "Multi-Owner Property Hierarchy",
    description:
      "Supports complex real estate portfolios with multi-owner equity splits, property manager permissions, and automated owner payout statements.",
  },
];

const testimony = {
  quote:
    "Strata Ops transformed how we manage our 45 commercial and residential towers. The IoT predictive maintenance engine flagged an impending main chiller pump failure two weeks before it broke, saving us over $80,000 in repair costs and avoiding building shutdown. Rent collection is 98% automated now.",
  name: "Eng. Samuel Abera",
  title: "Director of Property Operations",
  organization: "Sunshine Real Estate / Gift Real Estate",
  metric: "30% reduction in maintenance downtime",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function StrataOpsUiSnapshots() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "lease" | "iot" | "tenant" | "valuation" | "revenue" | "operations">("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive Command", icon: LayoutDashboard },
    { id: "lease", label: "Lease & Rent Core", icon: FileText },
    { id: "iot", label: "IoT Telemetry", icon: Radio },
    { id: "tenant", label: "Tenant Hub", icon: Key },
    { id: "valuation", label: "Portfolio Valuation", icon: TrendingUp },
    { id: "revenue", label: "Occupancy & Revenue", icon: DollarSign },
    { id: "operations", label: "Maintenance & Ops", icon: Wrench },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Strata Ops v4.6 • Sunshine Towers Instance
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
        {/* ── 1. Executive Portfolio Command Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Portfolio Occupancy</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">96.8%</span>
                  <span className="text-[10px] font-mono text-amber-500 font-semibold">25,400 / 26,200</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: "96.8%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Monthly Rent Collected</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">$12.4M</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">98.2% Auto-Cleared</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "98%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Active IoT Sensors</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">18,250</span>
                  <span className="text-[10px] font-mono text-amber-400 font-semibold">45 Towers</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: "99%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Open Work Orders</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">14 Tickets</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">Avg 18m Response</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "25%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Property Portfolio List */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="h-3.5 w-3.5 text-amber-400" /> Commercial & Residential Towers
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">Sunshine Real Estate Group</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { tower: "Sunshine Financial Tower A", units: "420 Commercial Units", occ: "98.5% Occupied", status: "Telemetry Normal" },
                    { tower: "Gift Real Estate Heights", units: "680 Luxury Apartments", occ: "96.2% Occupied", status: "Telemetry Normal" },
                    { tower: "Central Plaza Plaza B", units: "310 Retail Spaces", occ: "95.1% Occupied", status: "HVAC Maintenance Alert" },
                  ].map((row) => (
                    <div key={row.tower} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-amber-400">●</span>
                        <div>
                          <p className="font-medium text-foreground">{row.tower}</p>
                          <p className="text-[10px] text-muted-foreground">{row.units}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-amber-400">
                          {row.occ}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time IoT Alert Stream */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Radio className="h-3.5 w-3.5 text-amber-400" /> IoT Sensor Stream
                </span>
                <div className="space-y-3">
                  {[
                    { event: "HVAC Bearing Vibration Alert", time: "4 min ago", detail: "Tower A • Chiller #2" },
                    { event: "Rent Payment Auto-Cleared", time: "15 min ago", detail: "Unit #1402 • $4,200" },
                    { event: "Water Pressure Regulated", time: "38 min ago", detail: "Tower B • Booster Pump" },
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

        {/* ── 2. Lease & Rent Core Screen ── */}
        {activeTab === "lease" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Lease Header Banner */}
            <div className="flex items-center justify-between rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500 text-background font-bold">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Strata Ops Lease Automation Core</h4>
                  <p className="text-xs text-muted-foreground">Digital e-signatures, auto-escalation, security deposit escrow</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 98.2% Automated Rent Collection
              </span>
            </div>

            {/* Lease Ledger Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Active Commercial Lease Contracts</span>
                <span className="font-mono text-[10px] text-muted-foreground">Sunshine Financial Tower A</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    tenant: "Ethio Software Corp",
                    unit: "Unit 1801-1804 (Floor 18)",
                    rent: "$14,500 / mo",
                    status: "PAID • AUTO BANK SYNC",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                  {
                    tenant: "Global Logistics Ltd",
                    unit: "Unit 1205 (Floor 12)",
                    rent: "$6,800 / mo",
                    status: "PAID • AUTO BANK SYNC",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                  {
                    tenant: "Apex Capital Partners",
                    unit: "Unit 2201 (Penthouse Office)",
                    rent: "$22,000 / mo",
                    status: "RENEWAL DUE IN 30 DAYS",
                    style: "bg-amber-500/10 text-amber-400 border-amber-500/30",
                  },
                ].map((l) => (
                  <div key={l.tenant} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{l.tenant}</span>
                        <span className="text-[10px] text-muted-foreground">• {l.unit}</span>
                      </div>
                      <p className="text-xs font-semibold text-amber-400 mt-1">{l.rent}</p>
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

        {/* ── 3. IoT Telemetry Screen ── */}
        {activeTab === "iot" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* IoT Telemetry Top Overview */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Connected MQTT Sensors</span>
                <p className="text-2xl font-bold text-foreground mt-1">18,250 Devices</p>
                <p className="text-[10px] font-mono text-emerald-400 mt-1">100% Online Stream</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Predictive Maintenance Alerts</span>
                <p className="text-2xl font-bold text-amber-400 mt-1">1 Active Alert</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">Chiller Bearing Vibration</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Building Energy Efficiency</span>
                <p className="text-2xl font-bold text-emerald-400 mt-1">94.8% Score</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">Auto HVAC Scheduling</p>
              </div>
            </div>

            {/* Sensor Live Stream Grid */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <Radio className="h-3.5 w-3.5 text-amber-400" /> Building Systems Telemetry Matrix
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Tower A • Main Plant</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { sensor: "HVAC Primary Chiller #2", metric: "Vibration: 2.1 mm/s (Normal: <3.0)", status: "Optimal", alert: "No Faults Detected" },
                  { sensor: "Elevator Bank #4 Motor", metric: "Thermal: 48.2°C (Limit: 75.0°C)", status: "Optimal", alert: "No Faults Detected" },
                  { sensor: "Main Water Booster Pump 1B", metric: "Pressure: 6.2 Bar (Target: 6.0 Bar)", status: "Regulated", alert: "Pressure Stable" },
                ].map((s) => (
                  <div key={s.sensor} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-amber-400">●</span>
                      <div>
                        <p className="font-medium text-foreground">{s.sensor}</p>
                        <p className="text-[10px] text-muted-foreground">{s.metric}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                        {s.status}
                      </span>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{s.alert}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 4. Tenant Self-Service Screen ── */}
        {activeTab === "tenant" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Tenant Banner */}
            <div className="flex items-center justify-between rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500 text-background font-bold">
                  <Key className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Tenant Mobile & Web Portal Hub</h4>
                  <p className="text-xs text-muted-foreground">Digital keycard access, rent payments, maintenance ticketing, visitor logs</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 100% Tenant Adoption Rate
              </span>
            </div>

            {/* Tenant Work Order Tickets */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Recent Maintenance Work Orders & Access Logs</span>
                <span className="font-mono text-[10px] text-muted-foreground">Tenant Self-Service Stream</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    ticket: "TICKET #TK-4029 - Lighting Adjustment",
                    unit: "Unit 1802 • Ethio Software",
                    status: "COMPLETED (14 min response)",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                  {
                    ticket: "TICKET #TK-4031 - Visitor Keycard Pass",
                    unit: "Unit 2201 • Apex Capital",
                    status: "DIGITAL PASS ISSUED",
                    style: "bg-amber-500/10 text-amber-400 border-amber-500/30",
                  },
                  {
                    ticket: "TICKET #TK-4034 - Thermostat Calibration",
                    unit: "Unit 1205 • Global Logistics",
                    status: "IN PROGRESS - TECHNICIAN DISPATCHED",
                    style: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
                  },
                ].map((t) => (
                  <div key={t.ticket} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{t.ticket}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.unit}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${t.style}`}>
                        {t.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 5. Portfolio Valuation Analytics ── */}
        {activeTab === "valuation" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Total AUM</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-foreground">$1.45B</span>
                  <span className="flex items-center text-[10px] font-mono text-emerald-500 font-semibold">
                    <TrendingUp className="h-3 w-3 mr-1" />+4.2% YTD
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Avg Cap Rate</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-foreground">6.8%</span>
                  <span className="text-[10px] font-mono text-amber-500 font-semibold">Target: 6.5%</span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Net Asset Value</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-foreground">$1.12B</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">Audited Q2</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Building2 className="h-4 w-4 text-amber-500" /> Property Value by Region
                </span>
                <div className="flex h-32 items-end gap-3 px-2">
                  {[
                    { label: "East", val: 85, color: "bg-amber-500" },
                    { label: "West", val: 60, color: "bg-orange-400" },
                    { label: "North", val: 40, color: "bg-yellow-500" },
                    { label: "South", val: 75, color: "bg-amber-400" },
                    { label: "Central", val: 95, color: "bg-amber-600" },
                  ].map((bar) => (
                    <div key={bar.label} className="flex flex-1 flex-col items-center gap-2 group">
                      <div
                        className={`w-full rounded-t-sm ${bar.color} transition-all duration-300 group-hover:opacity-80`}
                        style={{ height: `${bar.val}%` }}
                      />
                      <span className="text-[9px] font-mono text-muted-foreground">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-2">
                  <LayoutDashboard className="h-4 w-4 text-amber-500" /> Portfolio Diversity
                </span>
                <div className="flex items-center gap-6 mt-2">
                  <div className="relative h-24 w-24 rounded-full border-4 border-surface shadow-inner"
                       style={{ background: "conic-gradient(from 0deg, #f59e0b 0% 45%, #fbbf24 45% 75%, #d97706 75% 100%)" }}>
                    <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                      <span className="text-[10px] font-bold text-foreground">45%</span>
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-amber-500"></span> Commercial
                      </span>
                      <span className="font-mono font-medium text-foreground">45%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-yellow-400"></span> Residential
                      </span>
                      <span className="font-mono font-medium text-foreground">30%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-amber-600"></span> Industrial
                      </span>
                      <span className="font-mono font-medium text-foreground">25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 6. Occupancy & Revenue Dashboard ── */}
        {activeTab === "revenue" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <DollarSign className="h-4 w-4 text-amber-500" /> Revenue vs Target (Monthly)
                </span>
                <div className="flex h-28 items-end gap-2 px-1">
                  {[45, 60, 55, 75, 70, 85, 90, 88, 95].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-1">
                      <div className="w-full bg-surface rounded-t-sm h-full relative">
                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-sm" style={{ height: `${val}%` }}></div>
                      </div>
                      <span className="text-[8px] font-mono text-center text-muted-foreground text-opacity-50">M{i+1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-surface/50 p-4 flex flex-col justify-center">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Avg Rev Per Sqm</p>
                  <span className="text-3xl font-bold text-foreground mt-2">$42.50</span>
                  <div className="mt-2 text-[10px] font-mono text-emerald-500 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" /> +2.1% MoM
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-surface/50 p-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}></div>
                  <div className="text-center z-10">
                    <p className="text-[10px] font-mono uppercase text-muted-foreground mb-1">Lease Renewal Rate</p>
                    <span className="text-3xl font-bold text-amber-500">87.4%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-semibold text-foreground mb-3 block">Top Performing Properties (Revenue)</span>
              <div className="space-y-2">
                {[
                  { name: "Sunshine Financial Center", rev: "$4.2M", occ: "99%", prog: 90 },
                  { name: "Gift Real Estate Heights", rev: "$2.8M", occ: "95%", prog: 75 },
                  { name: "Central Plaza Plaza B", rev: "$1.9M", occ: "92%", prog: 60 },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-4 text-xs">
                    <div className="w-1/3 truncate font-medium text-foreground">{item.name}</div>
                    <div className="flex-1">
                      <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: `${item.prog}%` }}></div>
                      </div>
                    </div>
                    <div className="w-16 text-right font-mono text-amber-400 font-semibold">{item.rev}</div>
                    <div className="w-12 text-right font-mono text-muted-foreground">{item.occ}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 7. Maintenance & Operations ── */}
        {activeTab === "operations" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-card p-4 col-span-1 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Work Orders</span>
                <span className="text-3xl font-bold text-foreground">1,248</span>
                <div className="flex items-center text-[10px] text-emerald-500 font-mono mt-1">
                  <Check className="h-3 w-3 mr-1" /> 92% SLA Met
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 col-span-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Wrench className="h-4 w-4 text-amber-500" /> Work Orders by Category
                </span>
                <div className="flex h-16 items-end gap-1">
                  {[
                    { h: 80, c: "bg-amber-600", t: "HVAC" },
                    { h: 40, c: "bg-amber-500", t: "Plumbing" },
                    { h: 60, c: "bg-yellow-500", t: "Electrical" },
                    { h: 30, c: "bg-orange-400", t: "Access" },
                    { h: 50, c: "bg-amber-400", t: "Janitorial" },
                    { h: 90, c: "bg-yellow-400", t: "Elevator" },
                  ].map((b, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-1 items-center group">
                      <div className={`w-full rounded-t-sm ${b.c} transition-all duration-300 opacity-90 group-hover:opacity-100`} style={{ height: `${b.h}%` }}></div>
                      <span className="text-[8px] font-mono text-muted-foreground truncate w-full text-center">{b.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-3 block">Vendor Performance Scores</span>
                <div className="space-y-3">
                  {[
                    { v: "EthioFacilities Ltd", s: "4.8/5", m: "32m avg response", p: 96 },
                    { v: "Apex Elevator Tech", s: "4.5/5", m: "45m avg response", p: 90 },
                    { v: "CleanSpace Pro", s: "4.2/5", m: "2h avg response", p: 84 },
                  ].map((v) => (
                    <div key={v.v} className="flex justify-between items-center bg-surface/50 p-2 rounded-lg text-xs">
                      <div>
                        <p className="font-medium text-foreground">{v.v}</p>
                        <p className="text-[10px] text-muted-foreground">{v.m}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-amber-400 font-semibold">{v.s}</span>
                        <div className="w-16 h-1.5 bg-border rounded-full">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: `${v.p}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/30 p-4">
                <span className="text-xs font-semibold text-foreground mb-2 block">Maintenance Cost Trends</span>
                <p className="text-[10px] text-muted-foreground mb-4">Cost per unit tracking across quarters</p>
                
                <div className="relative h-24 w-full flex items-end">
                  <div className="absolute inset-0 border-b border-l border-border/50"></div>
                  <div className="w-full flex justify-between items-end h-full px-2 relative z-10">
                    {[70, 65, 55, 45, 50, 40].map((val, i) => (
                      <div key={i} className="w-6 bg-gradient-to-t from-amber-600/80 to-amber-400/80 rounded-t-sm" style={{ height: `${val}%` }}></div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between px-2 mt-2">
                  <span className="text-[9px] font-mono text-muted-foreground">Q1</span>
                  <span className="text-[9px] font-mono text-muted-foreground">Q2</span>
                  <span className="text-[9px] font-mono text-muted-foreground">Q3</span>
                  <span className="text-[9px] font-mono text-muted-foreground">Q4</span>
                  <span className="text-[9px] font-mono text-muted-foreground">Q1</span>
                  <span className="text-[9px] font-mono text-muted-foreground">Q2</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Component ─── */

function StrataOpsPage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-amber-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
                  Real Estate • Sunshine / Gift Instance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Strata Ops
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Multi-property management OS providing lease automation, tenant portals,
                and IoT-driven predictive maintenance at enterprise scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Leases", "IoT", "Predictive", "MQTT", "Go"].map((tag) => (
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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-amber-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/strata-ops.png"
                  alt="Strata Ops logo"
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
            description="Explore the live real estate command center, digital lease engine, IoT sensor telemetry matrix, and tenant self-service portal."
          />
          <div className="mt-12">
            <StrataOpsUiSnapshots />
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What Strata Ops Delivers"
            description="Six integrated modules that manage commercial and residential property portfolios end-to-end."
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
            title="Built for Multi-Tower IoT Scale"
            description="High-concurrency microservices infrastructure streaming real-time sensor metrics and managing thousands of properties."
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
              Go · TimescaleDB · MQTT · WebSockets · Docker · Redis
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
            description="The core tenets behind the development of Strata Ops."
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
