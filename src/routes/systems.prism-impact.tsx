import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  HeartHandshake,
  Users,
  Globe,
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
  WifiOff,
  MapPin,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/prism-impact")({
  head: () => ({
    meta: [
      { title: "Prism Impact | Enterprise NGO & Impact Measurement Platform | FURII" },
      {
        name: "description",
        content:
          "Prism Impact is an impact measurement engine tracking global beneficiaries, donor disbursements, and field program analytics.",
      },
    ],
  }),
  component: PrismImpactPage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "99.9%", label: "Offline SLA" },
  { value: "1.2M+", label: "Beneficiaries" },
  { value: "$180M+", label: "Grants Tracked" },
  { value: "Real-Time", label: "M&E Analytics" },
];

const coreFeatures = [
  {
    icon: HeartHandshake,
    title: "Beneficiary Identity Registry",
    description:
      "Biometric-ready beneficiary management platform preventing duplicate aid claims, tracking household demographics, and verifying relief distribution.",
  },
  {
    icon: DollarSign,
    title: "Donor Grant Allocation Engine",
    description: "Multi-donor fund accounting system tracking grant disbursements, budget milestones, and compliance requirements for international aid agencies.",
  },
  {
    icon: WifiOff,
    title: "Field Mobile Offline PWA",
    description:
      "Offline-first Progressive Web App enabling field workers in remote off-grid locations to register beneficiaries and conduct M&E surveys with PouchDB sync.",
  },
  {
    icon: BarChart3,
    title: "Real-Time M&E Dashboards",
    description:
      "Monitoring and evaluation analytics generating instant impact metrics, geographical reach heatmaps, and SDG (Sustainable Development Goals) progress reports.",
  },
  {
    icon: MapPin,
    title: "Geotagged Program Tracking",
    description:
      "GIS spatial mapping tracking aid distribution points, water project installations, and medical relief camps with automated GPS coordinates.",
  },
  {
    icon: Lock,
    title: "Audit-Ready NGO Compliance",
    description:
      "Immutable transaction logging ensuring donor funds are fully traceable from international wire transfer down to individual beneficiary receipt.",
  },
];

const architecturePoints = [
  {
    icon: Server,
    title: "Offline PWA Client Architecture",
    description: "Service-worker powered web application executing full offline CRUD operations without requiring an active cellular connection.",
  },
  {
    icon: Database,
    title: "PouchDB Client Storage",
    description: "Embedded browser database storing thousands of offline beneficiary survey responses and local identity records.",
  },
  {
    icon: Zap,
    title: "CouchDB Master Cluster",
    description: "Multi-master sync database cluster handling bidirectional conflict-free data replication when field devices connect to Wi-Fi/4G.",
  },
  {
    icon: Lock,
    title: "Donor Data Protection Vault",
    description: "GDPR and UN-compliant field-level data encryption for vulnerable population data, household locations, and relief voucher codes.",
  },
];

const focusAreas = [
  {
    title: "Offline-First Remote Village Sync",
    description:
      "Designed specifically for off-grid field deployment where cellular connectivity is intermittent or non-existent for weeks at a time.",
  },
  {
    title: "Biometric Duplicate Relief Prevention",
    description:
      "Prevents double-dipping across humanitarian agencies through cross-system identity hashing and biometric fingerprint verification.",
  },
  {
    title: "Multi-Donor Grant Compliance",
    description:
      "Automatically maps project expenditures to specific donor line-item restrictions, generating audit-ready financial statements for USAID, EU, and UN funds.",
  },
  {
    title: "Low-Bandwidth Mobile Optimization",
    description:
      "Compresses field survey uploads to lightweight JSON payloads, enabling complete dataset synchronization even on 2G edge cellular networks.",
  },
];

const testimony = {
  quote:
    "Prism Impact changed how our NGO operates in remote regions. Managing relief distribution for over 1.2 million beneficiaries across off-grid villages used to mean weeks of paper survey delays and lost data. With Prism Impact, our field officers collect data completely offline, and donor compliance reporting is 100% automated.",
  name: "Dr. Bethlehem Tadesse",
  title: "Country Director",
  organization: "UNICEF / Red Cross Humanitarian Alliance",
  metric: "Real-time M&E tracking across 1.2M beneficiaries",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function PrismImpactUiSnapshots() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "beneficiary" | "grants" | "pwa" | "impact" | "geo" | "outcomes">("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive Impact Command", icon: LayoutDashboard },
    { id: "beneficiary", label: "Beneficiary Registry", icon: Users },
    { id: "grants", label: "Donor Grant Engine", icon: DollarSign },
    { id: "pwa", label: "Offline Field Sync", icon: WifiOff },
      { id: "impact", label: "Impact Metrics Dashboard", icon: TrendingUp },
    { id: "geo", label: "Geographic Coverage", icon: Globe },
    { id: "outcomes", label: "Program Outcomes", icon: BarChart3 },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-lime-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Prism Impact v4.8 • UNICEF Field Instance
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
        {/* ── 1. Executive Impact Command Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Active Beneficiaries</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">1,245,800</span>
                  <span className="text-[10px] font-mono text-lime-400 font-semibold">+14% Growth</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-lime-500 rounded-full" style={{ width: "94%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Donor Grants Allocated</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">$184.5M</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">100% Tracked</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Field Program Rate</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">94.2%</span>
                  <span className="text-[10px] font-mono text-lime-400 font-semibold">On Target</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: "94%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Offline Field Sync</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">420 Teams</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">PouchDB Active</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Program Overview */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <HeartHandshake className="h-3.5 w-3.5 text-lime-400" /> Active Regional Relief Programs
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">Humanitarian Alliance</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { prog: "Clean Water & Sanitation Initiative", ben: "420,000 Beneficiaries", fund: "$45.2M Budget", status: "Active Field Operations" },
                    { prog: "Emergency Food & Nutrition Distribution", ben: "580,000 Beneficiaries", fund: "$82.0M Budget", status: "Active Field Operations" },
                    { prog: "Primary Healthcare & Immunization", ben: "245,800 Beneficiaries", fund: "$57.3M Budget", status: "Active Field Operations" },
                  ].map((row) => (
                    <div key={row.prog} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-lime-400">●</span>
                        <div>
                          <p className="font-medium text-foreground">{row.prog}</p>
                          <p className="text-[10px] text-muted-foreground">{row.ben}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-lime-500/10 border border-lime-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-lime-400">
                          {row.fund}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time Field Stream */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Globe className="h-3.5 w-3.5 text-lime-400" /> Live Field Sync Stream
                </span>
                <div className="space-y-3">
                  {[
                    { event: "PouchDB Batch Synced", time: "4 min ago", detail: "Afar Region • 1,240 Records" },
                    { event: "USAID Grant Tranche Dispatched", time: "18 min ago", detail: "Ref #GRANT-8820" },
                    { event: "Biometric ID Verified", time: "45 min ago", detail: "Household #BEN-90412" },
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

        {/* ── 2. Beneficiary Registry Screen ── */}
        {activeTab === "beneficiary" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Beneficiary Header */}
            <div className="flex items-center justify-between rounded-xl border border-lime-500/20 bg-lime-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-lime-500 text-background font-bold">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Prism Biometric Beneficiary Registry</h4>
                  <p className="text-xs text-muted-foreground">UNHCR/WFP compliant unique identification • Zero duplicate claims</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 100% Biometric Verification
              </span>
            </div>

            {/* Beneficiary Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Registered Household Profiles</span>
                <span className="font-mono text-[10px] text-muted-foreground">Afar & Somali Region Field Stations</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    name: "Fatuma Ahmed & Family (6 members)",
                    ref: "ID #BEN-90412",
                    aid: "Monthly Food Basket & Clean Water Voucher",
                    status: "DISPENSED • BIOMETRIC MATCH",
                    style: "bg-lime-500/10 text-lime-400 border-lime-500/30",
                  },
                  {
                    name: "Mohammed Ibrahim & Family (4 members)",
                    ref: "ID #BEN-90415",
                    aid: "Primary Healthcare Voucher & Nutrition Package",
                    status: "DISPENSED • BIOMETRIC MATCH",
                    style: "bg-lime-500/10 text-lime-400 border-lime-500/30",
                  },
                ].map((b) => (
                  <div key={b.name} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{b.name}</span>
                        <span className="text-[10px] font-mono text-muted-foreground">{b.ref}</span>
                      </div>
                      <p className="text-xs font-medium text-lime-400 mt-1">{b.aid}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${b.style}`}>
                        {b.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 3. Donor Grant Engine Screen ── */}
        {activeTab === "grants" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Grants Overview */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">USAID Humanitarian Grant</span>
                <p className="text-2xl font-bold text-foreground mt-1">$85.0M</p>
                <p className="text-[10px] font-mono text-lime-400 mt-1">Audit-Ready Compliance</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">EU Horizon Relief Fund</span>
                <p className="text-2xl font-bold text-foreground mt-1">$62.5M</p>
                <p className="text-[10px] font-mono text-emerald-400 mt-1">Milestone 4 Cleared</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Global Fund Healthcare</span>
                <p className="text-2xl font-bold text-lime-400 mt-1">$37.0M</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">100% Allocated</p>
              </div>
            </div>

            {/* Grant Disbursements Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <DollarSign className="h-3.5 w-3.5 text-lime-400" /> Multi-Donor Grant Allocation Ledger
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">UNICEF Treasury</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { grant: "USAID Grant #US-8820", project: "Emergency Water Drilling", amount: "$12.4M Dispatched", status: "AUDIT APPROVED" },
                  { grant: "EU Horizon #EU-4019", project: "Mobile Medical Clinics", amount: "$8.5M Dispatched", status: "AUDIT APPROVED" },
                ].map((g) => (
                  <div key={g.grant} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-lime-400">{g.grant}</span>
                      <div>
                        <p className="font-medium text-foreground">{g.project}</p>
                        <p className="text-[10px] text-muted-foreground">{g.amount}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                        {g.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 4. Offline Field Sync Screen ── */}
        {activeTab === "pwa" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* PWA Banner */}
            <div className="flex items-center justify-between rounded-xl border border-lime-500/20 bg-lime-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-lime-500 text-background font-bold">
                  <WifiOff className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">PouchDB / CouchDB Bidirectional Offline Sync</h4>
                  <p className="text-xs text-muted-foreground">Field officers collect surveys in zero-cellular villages, auto-syncing on connection</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 100% Conflict-Free Sync
              </span>
            </div>

            {/* Offline Sync Log Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Field Device Sync Queue & PouchDB Status</span>
                <span className="font-mono text-[10px] text-muted-foreground">Remote Station Stream</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    team: "Team Afar North - Mobile Unit 04",
                    records: "1,240 Survey Forms & Biometrics",
                    sync: "SYNC COMPLETED (CouchDB Cluster)",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                  {
                    team: "Team Somali East - Mobile Unit 12",
                    records: "890 Food Distribution Vouchers",
                    sync: "LOCAL POUCHDB READY (Offline Mode)",
                    style: "bg-lime-500/10 text-lime-400 border-lime-500/30",
                  },
                ].map((s) => (
                  <div key={s.team} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{s.team}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{s.records}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${s.style}`}>
                        {s.sync}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 5. Impact Metrics Dashboard ── */}
        {activeTab === "impact" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <TrendingUp className="h-3.5 w-3.5 text-lime-400" /> SDG Progress by Goal
                </span>
                <div className="space-y-3">
                  {[
                    { label: "SDG 1: No Poverty", width: "75%", color: "bg-lime-500" },
                    { label: "SDG 2: Zero Hunger", width: "60%", color: "bg-green-500" },
                    { label: "SDG 3: Good Health", width: "85%", color: "bg-emerald-500" },
                    { label: "SDG 4: Quality Ed", width: "45%", color: "bg-lime-400" },
                  ].map((r, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-1">
                        <span>{r.label}</span><span>{r.width}</span>
                      </div>
                      <div className="h-2.5 w-full bg-surface rounded-full overflow-hidden">
                        <div className={`h-full ${r.color} rounded-full`} style={{ width: r.width }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 flex flex-col items-center justify-center">
                <span className="text-xs font-semibold text-foreground mb-4">Program Effectiveness</span>
                <div className="relative w-24 h-24 rounded-full" style={{ background: "conic-gradient(from 0deg, #84cc16 0% 82%, #1e293b 82% 100%)" }}>
                  <div className="absolute inset-2 bg-card rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-lime-400">82<span className="text-[10px]">pts</span></span>
                  </div>
                </div>
                <div className="mt-4 text-[10px] font-mono text-center text-muted-foreground">
                  Composite effectiveness score based on real-time field M&E data.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Beneficiary Reach Over Time</p>
                <div className="mt-2 text-2xl font-bold text-foreground">1.24M Lives</div>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono text-lime-400 font-semibold">
                  <TrendingUp className="h-3 w-3" /> Exceeding Q3 targets by 14%
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Impact Per Dollar Spent Trend</p>
                <div className="mt-2 text-2xl font-bold text-foreground">3.8x ROI</div>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-semibold">
                  Social Return on Investment
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 6. Geographic Coverage ── */}
        {activeTab === "geo" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Globe className="h-3.5 w-3.5 text-lime-400" /> Urban vs Rural Reach
                </span>
                <div className="flex justify-center mt-2">
                  <div className="relative w-28 h-28 rounded-full" style={{ background: "conic-gradient(from 0deg, #84cc16 0% 70%, #10b981 70% 100%)" }}>
                    <div className="absolute inset-3 bg-card rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-mono">Demographics</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between px-2 text-[10px] font-mono">
                  <span className="text-lime-400">● Rural (70%)</span>
                  <span className="text-emerald-400">● Urban (30%)</span>
                </div>
              </div>
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  Beneficiaries by Region (Bar Chart)
                </span>
                <div className="flex items-end gap-4 h-32 mt-4 px-2">
                  {[
                    { val: 85, lbl: "Afar" },
                    { val: 65, lbl: "Somali" },
                    { val: 40, lbl: "Tigray" },
                    { val: 55, lbl: "Oromia" },
                    { val: 30, lbl: "Amhara" }
                  ].map((item, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-1">
                      <div className="w-full bg-gradient-to-t from-lime-600 to-lime-400 rounded-t-md" style={{ height: `${item.val}%` }}></div>
                      <div className="text-[9px] font-mono text-muted-foreground text-center">{item.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-4 border-l-2 border-l-amber-500">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Coverage Gap Analysis Indicators</p>
                <div className="mt-2 text-lg font-bold text-foreground">2 Regions Underserved</div>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono text-amber-400 font-semibold">
                  Resource reallocation required
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Field Station Distribution</p>
                <div className="mt-2 text-2xl font-bold text-foreground">42 Active Sites</div>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-semibold">
                  Fully synchronized via PouchDB
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 7. Program Outcomes ── */}
        {activeTab === "outcomes" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            <div className="grid grid-cols-4 gap-4 mb-4">
               <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Food Security Index</p>
                  <p className="mt-1 text-xl font-bold text-lime-400">+24.5%</p>
               </div>
               <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Health Outcomes</p>
                  <p className="mt-1 text-xl font-bold text-emerald-400">+18.2%</p>
               </div>
               <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Education Gains</p>
                  <p className="mt-1 text-xl font-bold text-lime-400">+32% Enrolled</p>
               </div>
               <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Avg. Completion</p>
                  <p className="mt-1 text-xl font-bold text-foreground">88%</p>
               </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <BarChart3 className="h-3.5 w-3.5 text-lime-400" /> Program Completion Rates
                </span>
                <div className="space-y-3">
                  {[
                    { label: "WASH Projects", val: 92 },
                    { label: "Nutrition Packs", val: 88 },
                    { label: "Vaccinations", val: 95 },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <span className="w-24 text-[10px] font-mono truncate">{p.label}</span>
                       <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                          <div className="h-full bg-lime-500" style={{ width: `${p.val}%` }}></div>
                       </div>
                       <span className="w-8 text-right text-[10px] font-mono font-bold">{p.val}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-4 block text-center">Food Security Trend</span>
                <div className="flex items-end justify-center gap-1 h-24 mt-2">
                  {[20, 30, 45, 60, 75, 85].map((h, i) => (
                     <div key={i} className="w-4 bg-gradient-to-t from-green-600 to-lime-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="mt-3 text-[10px] font-mono text-center text-muted-foreground">Consistent MoM Growth</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

/* ─── Component ─── */

function PrismImpactPage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-lime-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
                  NGO & Impact • UNICEF / Red Cross Instance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Prism Impact
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Impact measurement engine tracking global beneficiaries, donor disbursements,
                and field program analytics at nation scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["M&E", "Donors", "Programs", "PWA", "CouchDB"].map((tag) => (
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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-lime-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/prism-impact.png"
                  alt="Prism Impact logo"
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
            description="Explore the live executive impact command center, biometric beneficiary registry, donor grant allocation engine, and offline PWA field sync."
          />
          <div className="mt-12">
            <PrismImpactUiSnapshots />
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What Prism Impact Delivers"
            description="Six integrated modules that track humanitarian programs, beneficiary relief distribution, and donor grant compliance."
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
            title="Built for Off-Grid Field Operations"
            description="Offline-first Progressive Web App architecture with PouchDB to CouchDB bidirectional data replication."
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
              PWA · PouchDB · CouchDB · Node.js · Docker · Tailwind
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
            description="The core tenets behind the development of Prism Impact."
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
