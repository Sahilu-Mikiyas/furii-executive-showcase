import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Users,
  Briefcase,
  DollarSign,
  TrendingUp,
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
  Building2,
  Clock,
  Check,
  Search,
  Award,
  PieChart,
  UserPlus,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/talent-grid")({
  head: () => ({
    meta: [
      { title: "TalentGrid | Enterprise HR & Workforce Suite | FURII" },
      {
        name: "description",
        content:
          "TalentGrid is an enterprise HR workforce suite covering global recruitment pipelines, payroll processing, and predictive performance reviews.",
      },
    ],
  }),
  component: TalentGridPage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "99.98%", label: "System SLA" },
  { value: "100k+", label: "Employees Managed" },
  { value: "Sub-Second", label: "Payroll Engine" },
  { value: "65%", label: "Faster Hiring" },
];

const coreFeatures = [
  {
    icon: Briefcase,
    title: "ATS Resume Intelligence",
    description:
      "AI-assisted applicant tracking system that automatically parses resumes, ranks candidate skill profiles, and schedules multi-stage interviews without manual screening bottlenecks.",
  },
  {
    icon: DollarSign,
    title: "Automated Multi-Currency Payroll",
    description:
      "Enterprise payroll engine processing localized tax withholdings, benefits deductions, and direct deposits across multiple currencies and international banking gateways.",
  },
  {
    icon: Brain,
    title: "Predictive Performance Reviews",
    description:
      "Continuous performance management with 360-degree feedback loops, AI flight-risk detection, and automated merit increase recommendations.",
  },
  {
    icon: Users,
    title: "Employee Self-Service Hub",
    description:
      "Intuitive mobile and desktop portal enabling staff to request leave, view digitized payslips, update banking details, and manage corporate benefits.",
  },
  {
    icon: TrendingUp,
    title: "Workforce Analytics & Capacity",
    description:
      "Real-time headcount dashboards, turnover trend analysis, department cost allocation, and skill gap forecasting across regional headquarters.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Audit Engine",
    description:
      "Automated labor law compliance checking, GDPR/privacy data protection, contract expiration tracking, and immutable HR audit logging.",
  },
];

const architecturePoints = [
  {
    icon: Server,
    title: "Serverless Worker Mesh",
    description: "Distributed edge compute processing high-volume payroll batch runs and bulk resume processing in parallel.",
  },
  {
    icon: Database,
    title: "TimescaleDB Analytics Core",
    description: "Time-series database tracking historical headcount shifts, compensation changes, and long-term attendance metrics.",
  },
  {
    icon: Zap,
    title: "Redis In-Memory Cache",
    description: "Sub-millisecond data retrieval for active employee profiles, organizational charts, and access control tokens.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Encryption",
    description: "SOC2 and GDPR compliant storage with field-level encryption for social security numbers, salaries, and bank accounts.",
  },
];

const focusAreas = [
  {
    title: "Global Multi-Currency Payroll",
    description:
      "Engineered to seamlessly handle complex tax regulations, social security contributions, and multi-currency payouts across local and international subsidiaries.",
  },
  {
    title: "Zero-Latency Resume Parsing",
    description:
      "Extracts structured work history, technical proficiencies, and contact details from PDF/Word resumes in milliseconds using native NLP models.",
  },
  {
    title: "Privacy & Data Sovereignity",
    description:
      "Strict data isolation and encryption protocols ensure sensitive employee salary and personnel data remain compliant with regional privacy laws.",
  },
  {
    title: "Self-Service Automated Onboarding",
    description:
      "New hires complete contract signing, background verification upload, and IT equipment requests before day one through automated digital workflows.",
  },
];

const testimony = {
  quote:
    "TalentGrid fundamentally changed how we manage human capital across our 15,000 employees. What used to take our HR team three full weeks of manual processing every payday now runs automatically in under four minutes with zero errors. The ATS intelligence module reduced our time-to-hire by 65%.",
  name: "Dr. Dawit Haile",
  title: "Vice President of Human Capital",
  organization: "Midroc Investment Group / Ethio Telecom",
  metric: "65% reduction in time-to-hire",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function TalentGridUiSnapshots() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "ats" | "payroll" | "performance" | "workforce" | "recruitment" | "compensation">("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive HR Command", icon: LayoutDashboard },
    { id: "ats", label: "ATS & Resume Intelligence", icon: Briefcase },
    { id: "payroll", label: "Multi-Currency Payroll", icon: DollarSign },
    { id: "performance", label: "AI Performance & Risk", icon: Brain },
    { id: "workforce", label: "Workforce Analytics", icon: PieChart },
    { id: "recruitment", label: "Recruitment Pipeline", icon: UserPlus },
    { id: "compensation", label: "Compensation", icon: DollarSign },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            TalentGrid v5.1 • Midroc Enterprise Instance
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
        {/* ── 1. Executive HR Command Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Active Headcount</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">15,420</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">+12% YoY</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "92%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Monthly Payroll</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">$4.85M</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">100% Cleared</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Open ATS Requisitions</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">34 Jobs</span>
                  <span className="text-[10px] font-mono text-teal-400 font-semibold">412 Applicants</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-teal-400 rounded-full" style={{ width: "68%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Retention Rate</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">96.4%</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">Top Tier</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "96%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Department Headcount */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="h-3.5 w-3.5 text-emerald-400" /> Regional Department Distribution
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">Q3 2026 Fiscal</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { dept: "Engineering & Systems Architecture", count: "4,210 Staff", budget: "$1.85M / mo", status: "Active" },
                    { dept: "Operations & Logistics Hub", count: "6,840 Staff", budget: "$1.92M / mo", status: "Active" },
                    { dept: "Finance & Enterprise Administration", count: "4,370 Staff", budget: "$1.08M / mo", status: "Active" },
                  ].map((row) => (
                    <div key={row.dept} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-emerald-400">●</span>
                        <div>
                          <p className="font-medium text-foreground">{row.dept}</p>
                          <p className="text-[10px] text-muted-foreground">{row.count}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-400">
                          {row.budget}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time HR Stream */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <UserCheck className="h-3.5 w-3.5 text-emerald-400" /> HR Activity Stream
                </span>
                <div className="space-y-3">
                  {[
                    { event: "Payroll Batch Approved", time: "3 min ago", detail: "15,420 Payslips Dispatched" },
                    { event: "Senior Dev Onboarded", time: "18 min ago", detail: "Software Unit • Contract Signed" },
                    { event: "ATS AI Rank Completed", time: "45 min ago", detail: "48 Candidates Filtered" },
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

        {/* ── 2. ATS & Resume Intelligence Screen ── */}
        {activeTab === "ats" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* ATS Header Banner */}
            <div className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500 text-background font-bold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">TalentGrid AI Resume Screening Engine</h4>
                  <p className="text-xs text-muted-foreground">Automated skill vector matching, resume parsing, and interview ranking</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 65% Time-to-Hire Reduction
              </span>
            </div>

            {/* Candidate Pipeline Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Active Recruitment Pipeline — Lead Systems Architect</span>
                <span className="font-mono text-[10px] text-muted-foreground">Requisition #REQ-9012</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    name: "Natnael Berhanu",
                    exp: "9 Yrs Exp • Distributed Systems, Go, Rust, Kafka",
                    score: "AI Match: 98.4%",
                    stage: "FINAL EXECUTIVE INTERVIEW",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                  {
                    name: "Selamawit Girma",
                    exp: "7 Yrs Exp • Cloud Architecture, PostgreSQL, Kubernetes",
                    score: "AI Match: 94.1%",
                    stage: "TECHNICAL ASSESSMENT CLEARED",
                    style: "bg-teal-500/10 text-teal-400 border-teal-500/30",
                  },
                  {
                    name: "Yonas Abebe",
                    exp: "6 Yrs Exp • Microservices, Node.js, TimescaleDB",
                    score: "AI Match: 89.2%",
                    stage: "SCREENING INTERVIEW SCHEDULED",
                    style: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
                  },
                ].map((c) => (
                  <div key={c.name} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{c.name}</span>
                        <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${c.style}`}>
                          {c.stage}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{c.exp}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs font-bold text-emerald-400">{c.score}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">Resume Verified</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 3. Multi-Currency Payroll Screen ── */}
        {activeTab === "payroll" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Payroll Top Overview */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Monthly Total Payroll</span>
                <p className="text-2xl font-bold text-foreground mt-1">$4,850,000</p>
                <p className="text-[10px] font-mono text-emerald-400 mt-1">Multi-Currency Bank Sync</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Automated Tax Withholdings</span>
                <p className="text-2xl font-bold text-foreground mt-1">$1,210,000</p>
                <p className="text-[10px] font-mono text-teal-400 mt-1">100% Tax Compliant</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Batch Run Execution</span>
                <p className="text-2xl font-bold text-emerald-400 mt-1">3.4 Sec</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">15,420 Direct Deposits</p>
              </div>
            </div>

            {/* Payroll Breakdown Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <DollarSign className="h-3.5 w-3.5 text-emerald-400" /> Regional Payroll Dispatches
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Pay Period: July 2026</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { region: "ETB - Ethiopia Subsidiary (HQ)", count: "11,200 Staff", amount: "ETB 450M", status: "Direct Deposit Sent", date: "Jul 28, 2026" },
                  { region: "USD - Global Technical Operations", count: "2,420 Staff", amount: "USD 2.85M", status: "SWIFT / ACH Sent", date: "Jul 28, 2026" },
                  { region: "EUR - European Regional Office", count: "1,800 Staff", amount: "EUR 1.20M", status: "SEPA Transfer Sent", date: "Jul 28, 2026" },
                ].map((p) => (
                  <div key={p.region} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-emerald-400">{p.region.split(" ")[0]}</span>
                      <div>
                        <p className="font-medium text-foreground">{p.region}</p>
                        <p className="text-[10px] text-muted-foreground">{p.count}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                        {p.amount}
                      </span>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{p.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 4. AI Performance & Risk Screen ── */}
        {activeTab === "performance" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* AI Performance Banner */}
            <div className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500 text-background font-bold">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">TalentGrid AI Flight-Risk & Merit Engine</h4>
                  <p className="text-xs text-muted-foreground">Predictive retention analytics, performance trajectory scoring, and promotion readiness</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 96.4% Retention Model Precision
              </span>
            </div>

            {/* Performance Review Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Engineering Division Performance & Merit Matrix</span>
                <span className="font-mono text-[10px] text-muted-foreground">Q3 Review Cycle</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    staff: "Ephrem Tadesse",
                    role: "Principal Systems Architect",
                    rating: "Exceeds Expectations (4.9 / 5.0)",
                    action: "RECOMMENDED FOR PRINCIPAL PROMOTION & MERIT BONUS",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                  {
                    staff: "Tigist Alemu",
                    role: "Senior Backend Engineer",
                    rating: "Strong Performer (4.6 / 5.0)",
                    action: "RETENTION ALERT - SKILL RETAINER OFFER DISPATCHED",
                    style: "bg-teal-500/10 text-teal-400 border-teal-500/30",
                  },
                  {
                    staff: "Kaleb Worku",
                    role: "DevOps Engineer",
                    rating: "Meets Expectations (4.1 / 5.0)",
                    action: "ADVANCED CLOUD CERTIFICATION SPONSORSHIP ASSIGNED",
                    style: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
                  },
                ].map((m) => (
                  <div key={m.staff} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{m.staff}</span>
                        <span className="text-[10px] text-muted-foreground">• {m.role}</span>
                      </div>
                      <p className="text-xs font-semibold text-emerald-400 mt-1">{m.rating}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${m.style}`}>
                        {m.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 5. Workforce Analytics ── */}
        {activeTab === "workforce" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-4 block">Headcount by Department</span>
                <div className="flex h-32 items-end gap-2 border-b border-border/50 pb-2">
                  {[85, 40, 60, 25, 50].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-sky-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[9px] font-mono text-muted-foreground">
                  <span>ENG</span><span>HR</span><span>SALES</span><span>MKTG</span><span>OPS</span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 flex flex-col items-center">
                <span className="text-xs font-semibold text-foreground mb-4 w-full text-left">Diversity Breakdown</span>
                <div className="relative w-28 h-28 rounded-full mb-2" style={{ background: 'conic-gradient(rgb(6 182 212) 0% 45%, rgb(14 165 233) 45% 75%, rgb(39 39 42) 75% 100%)' }}>
                  <div className="absolute inset-2 rounded-full bg-card"></div>
                </div>
                <div className="flex gap-4 text-[10px] text-muted-foreground mt-2">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-500"></span> Group A</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-500"></span> Group B</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-zinc-700"></span> Other</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Age & Tenure Distribution</p>
                <div className="flex mt-3 h-4 rounded-full overflow-hidden bg-border">
                  <div className="bg-cyan-600" style={{width: '20%'}}></div>
                  <div className="bg-cyan-500" style={{width: '45%'}}></div>
                  <div className="bg-sky-400" style={{width: '25%'}}></div>
                  <div className="bg-sky-200" style={{width: '10%'}}></div>
                </div>
                <div className="flex justify-between text-[9px] mt-1 text-muted-foreground">
                  <span>&lt;1 yr</span><span>1-3 yrs</span><span>3-5 yrs</span><span>5+ yrs</span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Attrition Trend</p>
                <p className="text-2xl font-bold text-foreground mt-1">8.2%</p>
                <p className="text-[10px] text-cyan-400 mt-1">-1.5% from last year</p>
              </div>
            </div>
          </div>
        )}

        {/* ── 6. Recruitment Pipeline ── */}
        {activeTab === "recruitment" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-4 block">Open Positions Funnel</span>
                <div className="space-y-3 relative">
                  {[ { s: 'Sourced', v: 100, n: '1,200' }, { s: 'Screened', v: 45, n: '540' }, { s: 'Interviewed', v: 15, n: '180' }, { s: 'Offers', v: 5, n: '60' } ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-[10px] w-16 text-right">{step.s}</span>
                      <div className="flex-1 bg-border h-6 rounded-md overflow-hidden flex">
                        <div className="bg-gradient-to-r from-cyan-600 to-sky-400 h-full flex items-center px-2 text-[10px] font-bold text-white" style={{ width: `${step.v}%` }}>{step.n}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 flex flex-col items-center justify-center">
                <span className="text-xs font-semibold text-foreground mb-4 w-full text-left">Offer Acceptance</span>
                <div className="relative w-24 h-24 rounded-full" style={{ background: 'conic-gradient(rgb(6 182 212) 0% 88%, rgb(39 39 42) 88% 100%)' }}>
                  <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                    <span className="text-xl font-bold text-foreground">88%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Source Effectiveness</p>
                <div className="flex items-end gap-2 h-16 mt-2">
                  <div className="w-8 bg-cyan-500 rounded-t-sm" style={{height: '80%'}}></div>
                  <div className="w-8 bg-sky-400 rounded-t-sm" style={{height: '40%'}}></div>
                  <div className="w-8 bg-zinc-600 rounded-t-sm" style={{height: '20%'}}></div>
                </div>
                <div className="flex gap-2 text-[9px] mt-1 text-muted-foreground">
                  <span className="w-8 text-center">LinkedIn</span><span className="w-8 text-center">Referral</span><span className="w-8 text-center">Direct</span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4 flex flex-col justify-center">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Avg Time-to-Hire</p>
                <p className="text-3xl font-bold text-foreground mt-2">24 <span className="text-sm font-normal text-muted-foreground">Days</span></p>
                <p className="text-[10px] text-cyan-400 mt-1">Faster than industry avg (36 days)</p>
              </div>
            </div>
          </div>
        )}

        {/* ── 7. Compensation Analytics ── */}
        {activeTab === "compensation" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-surface/50 p-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Pay Equity Ratio (F:M)</p>
                  <p className="text-2xl font-bold text-foreground mt-1">0.99</p>
                </div>
                <div className="flex gap-1 text-cyan-400 items-center bg-cyan-500/10 px-2 py-1 rounded-md text-xs font-mono">
                  <CheckCircle2 className="h-4 w-4" /> Balanced
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Total Comp Vs Market</p>
                <p className="text-xl font-bold text-cyan-400 mt-1">+12%</p>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Benefits Util</p>
                <p className="text-xl font-bold text-foreground mt-1">78%</p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-semibold text-foreground mb-4 block">Salary Bands by Grade (USD)</span>
              <div className="space-y-4">
                {[ { g: 'L6 - Principal', min: 140, max: 220, avg: 185 }, { g: 'L5 - Senior', min: 110, max: 160, avg: 135 }, { g: 'L4 - Mid-Level', min: 80, max: 120, avg: 95 }].map((band, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span>{band.g}</span><span>${band.min}k - ${band.max}k</span>
                    </div>
                    <div className="relative h-4 w-full rounded-full bg-border">
                      <div className="absolute top-0 h-full bg-cyan-500/30 rounded-full" style={{ left: `${(band.min/250)*100}%`, width: `${((band.max-band.min)/250)*100}%` }}></div>
                      <div className="absolute top-0 h-full w-2 bg-cyan-500 rounded-full" style={{ left: `${(band.avg/250)*100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-[9px] text-muted-foreground">
                <span className="w-2 h-2 bg-cyan-500/30 rounded-sm"></span> Band Range
                <span className="w-2 h-4 bg-cyan-500 rounded-sm ml-2"></span> Current Average
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Component ─── */

function TalentGridPage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-emerald-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
                  Human Resources • Midroc / Ethio Telecom Instance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                TalentGrid
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Enterprise HR workforce suite covering global recruitment pipelines, payroll processing,
                and predictive performance reviews at enterprise scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["HRIS", "Payroll", "ATS", "AI Insights", "TimescaleDB"].map((tag) => (
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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-emerald-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/talent-grid.png"
                  alt="TalentGrid logo"
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
            description="Explore the live executive HR command center, AI ATS recruitment pipeline, multi-currency payroll engine, and performance review matrix."
          />
          <div className="mt-12">
            <TalentGridUiSnapshots />
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What TalentGrid Delivers"
            description="Six integrated modules covering the full employment lifecycle from talent acquisition to performance growth and payroll."
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
            title="Built for Enterprise Workforce Scale"
            description="High-throughput serverless infrastructure that processes global payroll and recruitment data with sub-second response times."
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
              Serverless Workers · Node.js · TimescaleDB · Redis · Docker · Tailwind
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
            description="The core tenets behind the development of TalentGrid."
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
