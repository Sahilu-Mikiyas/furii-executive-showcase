import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Scale,
  Landmark,
  FileText,
  Lock,
  Brain,
  Database,
  Server,
  Zap,
  BarChart3,
  Quote,
  LayoutDashboard,
  FileCheck,
  AlertTriangle,
  Calendar,
  Sparkles,
  UserCheck,
  Clock,
  Check,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/equinox-ledger")({
  head: () => ({
    meta: [
      { title: "Equinox Ledger | Enterprise Financial Core & General Ledger | FURII" },
      {
        name: "description",
        content:
          "Equinox Ledger is a double-entry enterprise financial core providing real-time general ledger, automated reconciliation, and audit reporting at bank scale.",
      },
    ],
  }),
  component: EquinoxLedgerPage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "99.999%", label: "Financial SLA" },
  { value: "$50B+", label: "Annual Volume" },
  { value: "ACID", label: "Compliant Core" },
  { value: "Sub-Second", label: "Trial Balance" },
];

const coreFeatures = [
  {
    icon: Scale,
    title: "Real-Time General Ledger",
    description:
      "Double-entry accounting core that maintains immutable debits and credits with zero balance drift across millions of daily multi-currency entries.",
  },
  {
    icon: DollarSign,
    title: "Automated Bank Reconciliation",
    description:
      "AI transaction matching engine parsing MT940/CAMT bank feeds, automatically reconciling 99.2% of transactions with zero human intervention.",
  },
  {
    icon: Lock,
    title: "Financial Compliance Core",
    description:
      "Built-in Sarbanes-Oxley, IFRS, and local tax authority rules enforcing strict separation of duties, approval thresholds, and automated tax withholding.",
  },
  {
    icon: BarChart3,
    title: "Instant Trial Balance & P&L",
    description:
      "Real-time aggregation engine generating instant trial balances, income statements, and balance sheets without waiting for month-end batch runs.",
  },
  {
    icon: Landmark,
    title: "Multi-Currency Engine",
    description:
      "Native support for global currencies with automated revaluation, realized/unrealized gain-loss calculations, and central bank exchange rate feeds.",
  },
  {
    icon: FileText,
    title: "Immutable Event Audit Log",
    description:
      "Event-sourced ledger architecture recording every transaction modification, reversal, and approval into a tamper-evident audit vault.",
  },
];

const architecturePoints = [
  {
    icon: Server,
    title: "Go Financial Microservices",
    description: "Ultra-fast Go microservices delivering millisecond transaction processing with strict concurrency controls.",
  },
  {
    icon: Database,
    title: "CockroachDB Distributed SQL",
    description: "Serializable ACID-compliant distributed SQL database guaranteeing zero lost updates across regional data centers.",
  },
  {
    icon: Zap,
    title: "Kafka Event Sourcing Pipeline",
    description: "Event-driven stream processing architecture capturing immutable transaction logs for instant replay and auditability.",
  },
  {
    icon: Lock,
    title: "HSM Key Management Vault",
    description: "Hardware-security-module key management for payload signatures, audit hashing, and strict bank-level data encryption.",
  },
];

const focusAreas = [
  {
    title: "Strict ACID Transaction Guarantees",
    description:
      "Zero tolerance for partial state writes. Every financial transfer is executed in an isolated atomic transaction with serializable guarantees.",
  },
  {
    title: "Sub-Second Trial Balance Compilation",
    description:
      "Eliminates traditional month-end closing delays by continuously computing account balances in memory as transactions flow.",
  },
  {
    title: "Multi-Entity Consolidated Reporting",
    description:
      "Supports complex holding company structures with automated intercompany elimination, foreign currency translation, and consolidated balance sheets.",
  },
  {
    title: "Automated Fraud Anomaly Detection",
    description:
      "Machine learning algorithms flag out-of-pattern ledger entries, duplicate payments, and unauthorized approval threshold bypasses in real time.",
  },
];

const testimony = {
  quote:
    "Equinox Ledger gave us true real-time visibility into our financial position across $50B+ in annual transaction volume. In the past, month-end trial balance compilation took our finance team five days of round-the-clock work. With Equinox Ledger, it generates in less than a second with 100% mathematical precision.",
  name: "Ato Henok Worku",
  title: "Chief Financial Officer",
  organization: "Commercial Bank / Awash Financial Group",
  metric: "Sub-second trial balance compilation",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function EquinoxLedgerUiSnapshots() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "gl" | "reconcile" | "audit" | "cashflow" | "risk" | "revenue">("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive Command", icon: LayoutDashboard },
    { id: "gl", label: "General Ledger", icon: Scale },
    { id: "reconcile", label: "Bank Reconciliation", icon: DollarSign },
    { id: "audit", label: "Audit & Compliance", icon: Lock },
      { id: "cashflow", label: "Cash Flow Analytics", icon: TrendingUp },
    { id: "risk", label: "Risk & Exposure Dashboard", icon: AlertTriangle },
    { id: "revenue", label: "Revenue & P&L Trends", icon: BarChart3 },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Equinox Ledger v7.0 • Awash Financial Group Instance
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
        {/* ── 1. Executive Financial Command Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Ledger Volume (24h)</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">$142.5M</span>
                  <span className="text-[10px] font-mono text-teal-400 font-semibold">100% Balanced</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Trial Balance Speed</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">0.42 Sec</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">Real-Time</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Bank Reconciled</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">99.2%</span>
                  <span className="text-[10px] font-mono text-teal-400 font-semibold">AI Match</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-teal-400 rounded-full" style={{ width: "99%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">ACID Audit Status</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">VERIFIED</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">0 Discrepancy</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Account Ledgers Overview */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Scale className="h-3.5 w-3.5 text-teal-400" /> Multi-Currency General Ledger Status
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">Awash Financial Group</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { account: "1000 - Cash & Central Bank Reserves", debit: "$420,500,000", credit: "$0.00", status: "Balanced" },
                    { account: "2000 - Customer Deposit Liabilities", debit: "$0.00", credit: "$380,200,000", status: "Balanced" },
                    { account: "3000 - Commercial Loan Receivables", debit: "$65,400,000", credit: "$0.00", status: "Balanced" },
                  ].map((row) => (
                    <div key={row.account} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-teal-400">●</span>
                        <div>
                          <p className="font-medium text-foreground">{row.account}</p>
                          <p className="text-[10px] text-muted-foreground">Debit: {row.debit} • Credit: {row.credit}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-teal-400">
                          {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time Ledger Event Stream */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <FileText className="h-3.5 w-3.5 text-teal-400" /> Live Journal Stream
                </span>
                <div className="space-y-3">
                  {[
                    { event: "Journal #JNL-9021 Posted", time: "1 sec ago", detail: "Interbank Transfer • $1.2M" },
                    { event: "FX Revaluation Auto-Run", time: "12 sec ago", detail: "USD/ETB Rate Sync" },
                    { event: "Trial Balance Verified", time: "45 sec ago", detail: "Checksum 0x88F9A" },
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

        {/* ── 2. Double-Entry General Ledger Screen ── */}
        {activeTab === "gl" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* GL Banner */}
            <div className="flex items-center justify-between rounded-xl border border-teal-500/20 bg-teal-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500 text-background font-bold">
                  <Scale className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Equinox Double-Entry General Ledger</h4>
                  <p className="text-xs text-muted-foreground">CockroachDB serializable ACID transactions with zero balance drift</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 100% Mathematical Precision
              </span>
            </div>

            {/* Journal Entries Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Recent Immutable Journal Entries</span>
                <span className="font-mono text-[10px] text-muted-foreground">Awash Main Financial Vault</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    jnl: "JNL #8901 - Interbank Settlement",
                    dr: "DR 1010 Central Reserve: $5,000,000",
                    cr: "CR 2010 Treasury Payable: $5,000,000",
                    status: "POSTED & HASHED",
                    style: "bg-teal-500/10 text-teal-400 border-teal-500/30",
                  },
                  {
                    jnl: "JNL #8902 - Commercial Interest Accrual",
                    dr: "DR 1200 Interest Income: $120,400",
                    cr: "CR 4000 Reserve Fund: $120,400",
                    status: "POSTED & HASHED",
                    style: "bg-teal-500/10 text-teal-400 border-teal-500/30",
                  },
                ].map((j) => (
                  <div key={j.jnl} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{j.jnl}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{j.dr} • {j.cr}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${j.style}`}>
                        {j.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 3. Bank Reconciliation Screen ── */}
        {activeTab === "reconcile" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Reconciliation Overview */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Parsed MT940 Bank Feeds</span>
                <p className="text-2xl font-bold text-foreground mt-1">42,800 Tx</p>
                <p className="text-[10px] font-mono text-teal-400 mt-1">99.2% Auto-Matched</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Unreconciled Items</span>
                <p className="text-2xl font-bold text-emerald-400 mt-1">0 Items</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">Zero Pending Queue</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">AI Matching Speed</span>
                <p className="text-2xl font-bold text-teal-400 mt-1">1.2 Sec</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">Real-Time Feed Processing</p>
              </div>
            </div>

            {/* Reconciliation Stream Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <DollarSign className="h-3.5 w-3.5 text-teal-400" /> Automated Bank Statement Match
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">National Banking Gateway</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { ref: "MT940-001", bank: "National Bank SWIFT Feed", ledger: "JNL #8901 Match", amount: "$5,000,000", status: "MATCHED (1.0 Confidence)" },
                  { ref: "MT940-002", bank: "Commercial Wire Transfer", ledger: "JNL #8902 Match", amount: "$120,400", status: "MATCHED (1.0 Confidence)" },
                ].map((r) => (
                  <div key={r.ref} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-teal-400">{r.ref}</span>
                      <div>
                        <p className="font-medium text-foreground">{r.bank}</p>
                        <p className="text-[10px] text-muted-foreground">{r.ledger}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                        {r.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 4. Audit & Compliance Screen ── */}
        {activeTab === "audit" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Audit Banner */}
            <div className="flex items-center justify-between rounded-xl border border-teal-500/20 bg-teal-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500 text-background font-bold">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Kafka Event Sourcing & HSM Audit Vault</h4>
                  <p className="text-xs text-muted-foreground">Sarbanes-Oxley & IFRS audit compliance with zero-trust cryptographic hashing</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 100% Cryptographic Verification
              </span>
            </div>

            {/* Audit Log Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Sarbanes-Oxley Audit Verification Stream</span>
                <span className="font-mono text-[10px] text-muted-foreground">Immutable Ledger Hash</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    event: "Period Close Execution - Q2 2026",
                    by: "CFO Henok Worku (MFA Dual Sign)",
                    hash: "SHA256: 88F9A0194B...",
                    status: "VERIFIED",
                  },
                ].map((a) => (
                  <div key={a.event} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{a.event}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{a.by} • {a.hash}</p>
                    </div>
                    <div className="text-right">
                      <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                        {a.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 5. Cash Flow Analytics ── */}
        {activeTab === "cashflow" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <TrendingUp className="h-3.5 w-3.5 text-teal-400" /> Daily Cash Inflow vs Outflow
                </span>
                <div className="flex items-end gap-2 h-32 mt-4">
                  {[40, 60, 45, 75, 50, 85, 90, 65, 80].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-1 group relative">
                      <div className="w-full bg-teal-500/20 rounded-t-sm" style={{ height: `${h}%` }}>
                        <div className="w-full bg-teal-400 rounded-t-sm transition-all duration-300" style={{ height: `${h * 0.7}%` }}></div>
                      </div>
                      <div className="text-[9px] font-mono text-muted-foreground text-center">D{i+1}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 flex flex-col items-center justify-center">
                <span className="text-xs font-semibold text-foreground mb-4">Operating vs Investing vs Financing</span>
                <div className="relative w-24 h-24 rounded-full" style={{ background: "conic-gradient(from 0deg, #14b8a6 0% 55%, #06b6d4 55% 85%, #10b981 85% 100%)" }}>
                  <div className="absolute inset-2 bg-card rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground">Cash</span>
                  </div>
                </div>
                <div className="w-full mt-4 space-y-1">
                  <div className="flex justify-between text-[10px] font-mono"><span className="text-teal-400">● Ops</span><span>55%</span></div>
                  <div className="flex justify-between text-[10px] font-mono"><span className="text-cyan-400">● Inv</span><span>30%</span></div>
                  <div className="flex justify-between text-[10px] font-mono"><span className="text-emerald-400">● Fin</span><span>15%</span></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Net Cash Position Trend</p>
                <div className="mt-2 text-2xl font-bold text-foreground">$824.5M</div>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono text-teal-400 font-semibold">
                  <TrendingUp className="h-3 w-3" /> +12.4% vs last month
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Liquidity Ratio Gauge</p>
                <div className="mt-2 text-2xl font-bold text-foreground">1.8x</div>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-semibold">
                  Above target (1.5x)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 6. Risk & Exposure Dashboard ── */}
        {activeTab === "risk" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-3.5 w-3.5 text-red-400" /> Currency Exposure
                </span>
                <div className="flex justify-center mt-2">
                  <div className="relative w-28 h-28 rounded-full" style={{ background: "conic-gradient(from 0deg, #14b8a6 0% 45%, #06b6d4 45% 75%, #3b82f6 75% 90%, #f43f5e 90% 100%)" }}>
                    <div className="absolute inset-3 bg-card rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-mono">FX Risk</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  Credit Risk Distribution
                </span>
                <div className="space-y-3">
                  {[
                    { label: "AAA / AA Rated", width: "65%", color: "bg-emerald-500" },
                    { label: "A / BBB Rated", width: "25%", color: "bg-teal-500" },
                    { label: "Sub-Investment", width: "10%", color: "bg-cyan-500" },
                  ].map((r, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-1">
                        <span>{r.label}</span><span>{r.width}</span>
                      </div>
                      <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                        <div className={`h-full ${r.color} rounded-full`} style={{ width: r.width }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-4 border-l-2 border-l-red-500">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Counterparty Exposure Heat</p>
                <div className="mt-2 text-lg font-bold text-foreground">Top 5 Clients = 14.2%</div>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono text-red-400 font-semibold">
                  <AlertTriangle className="h-3 w-3" /> Concentration warning
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">VaR (Value at Risk) Trend</p>
                <div className="mt-2 text-2xl font-bold text-foreground">$12.5M</div>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-semibold">
                  Within 99% confidence interval
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 7. Revenue & P&L Trends ── */}
        {activeTab === "revenue" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            <div className="grid grid-cols-4 gap-4 mb-4">
               <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">YTD Revenue</p>
                  <p className="mt-1 text-xl font-bold text-foreground">$4.2B</p>
               </div>
               <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">EBITDA Margin</p>
                  <p className="mt-1 text-xl font-bold text-teal-400">32.4%</p>
               </div>
               <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">OpEx Trend</p>
                  <p className="mt-1 text-xl font-bold text-foreground">-4.2%</p>
               </div>
               <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Net Income</p>
                  <p className="mt-1 text-xl font-bold text-emerald-400">$850M</p>
               </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <BarChart3 className="h-3.5 w-3.5 text-teal-400" /> Monthly Revenue Trend
                </span>
                <div className="flex items-end gap-3 h-32 mt-4 px-2">
                  {[40, 45, 55, 50, 65, 75, 80, 85, 95, 90, 100, 110].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-1">
                      <div className="w-full bg-gradient-to-t from-teal-500 to-cyan-400 rounded-sm" style={{ height: `${h * 0.8}%` }}></div>
                      <div className="text-[8px] font-mono text-muted-foreground text-center">M{i+1}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-4 block text-center">Expense Breakdown</span>
                <div className="flex justify-center mt-2">
                  <div className="relative w-24 h-24 rounded-full" style={{ background: "conic-gradient(from 0deg, #14b8a6 0% 40%, #06b6d4 40% 70%, #10b981 70% 90%, #64748b 90% 100%)" }}>
                    <div className="absolute inset-2 bg-card rounded-full flex items-center justify-center">
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-1.5">
                   <div className="flex justify-between text-[9px] font-mono"><span className="text-teal-400">● Payroll</span><span>40%</span></div>
                   <div className="flex justify-between text-[9px] font-mono"><span className="text-cyan-400">● Tech</span><span>30%</span></div>
                   <div className="flex justify-between text-[9px] font-mono"><span className="text-emerald-400">● Real Estate</span><span>20%</span></div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-3 block">Department-Level P&L Comparison</span>
                <div className="space-y-2 text-[10px] font-mono">
                   <div className="flex justify-between bg-surface/50 p-2 rounded"><span className="font-bold">Retail Banking</span><span className="text-teal-400">+$1.2B</span></div>
                   <div className="flex justify-between bg-surface/50 p-2 rounded"><span className="font-bold">Corporate Finance</span><span className="text-teal-400">+$2.4B</span></div>
                   <div className="flex justify-between bg-surface/50 p-2 rounded"><span className="font-bold">Wealth Mgmt</span><span className="text-emerald-400">+$600M</span></div>
                </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

/* ─── Component ─── */

function EquinoxLedgerPage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-teal-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
                  Finance • Awash / Commercial Bank Instance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Equinox Ledger
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Double-entry enterprise financial core providing real-time general ledger, automated reconciliation,
                and audit reporting at bank scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["GL", "Budgeting", "Audit", "CockroachDB", "Kafka"].map((tag) => (
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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-teal-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/equinox-ledger.png"
                  alt="Equinox Ledger logo"
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
            description="Explore the live executive financial command center, double-entry general ledger stream, AI bank reconciliation engine, and Sarbanes-Oxley audit vault."
          />
          <div className="mt-12">
            <EquinoxLedgerUiSnapshots />
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What Equinox Ledger Delivers"
            description="Six integrated modules that manage financial operations from general ledger posting to automated reconciliation and regulatory compliance."
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
            title="Built for Bank-Grade Financial Scale"
            description="Serializable ACID-compliant distributed SQL infrastructure processing over $50 billion in annual volume."
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
              Go · CockroachDB · Kafka · Event Sourcing · Docker · Redis
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
            description="The core tenets behind the development of Equinox Ledger."
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
