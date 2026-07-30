import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Landmark,
  FileCheck,
  Building,
  Lock,
  Brain,
  Database,
  Server,
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
  Shield,
  FileCode,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/civic-pulse")({
  head: () => ({
    meta: [
      { title: "CivicPulse | Enterprise Public Sector & e-Gov Operating System | FURII" },
      {
        name: "description",
        content:
          "CivicPulse is a high-concurrency public sector portal automating citizen permits, identity verification, and document processing at nation-scale.",
      },
    ],
  }),
  component: CivicPulsePage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "99.99%", label: "Government SLA" },
  { value: "5M+", label: "Citizens Served" },
  { value: "85%", label: "Faster Permits" },
  { value: "Zero-Trust", label: "Security Spec" },
];

const coreFeatures = [
  {
    icon: FileCheck,
    title: "Document OCR Intelligence",
    description:
      "AI-driven optical character recognition that automatically parses national IDs, land deeds, and business tax certificates with 99.4% field extraction accuracy.",
  },
  {
    icon: Landmark,
    title: "Citizen Permit Workflows",
    description:
      "Multi-agency approval engine routing business licenses, construction permits, and environmental clearances through automated sequential review chains.",
  },
  {
    icon: Shield,
    title: "Audit-Ready Logs & RBAC",
    description:
      "Immutable cryptographic audit trails tracking every document view, modification, and approval event with strict government role-based access control.",
  },
  {
    icon: UserCheck,
    title: "Digital Identity Verification",
    description:
      "Interoperable citizen identity gateway linking biometric databases, tax registers, and civil registry databases for instant background validation.",
  },
  {
    icon: Building,
    title: "Municipal Fee & Revenue Engine",
    description:
      "Automated government service fee calculation, electronic receipting, and real-time reconciliation with national treasury accounts.",
  },
  {
    icon: BarChart3,
    title: "Agency Throughput Analytics",
    description:
      "Executive public sector dashboards measuring bureau processing times, application backlog bottlenecks, and citizen satisfaction ratings.",
  },
];

const architecturePoints = [
  {
    icon: Server,
    title: "Kubernetes Cloud Native Engine",
    description: "Autoscaling container infrastructure capable of bursting to handle deadline tax filings and national registration drives.",
  },
  {
    icon: Database,
    title: "PostgreSQL Secure Vault",
    description: "Encrypted relational core isolating government agency schemas while enabling cross-bureau interoperability.",
  },
  {
    icon: Brain,
    title: "Python AI Verification Pipeline",
    description: "Asynchronous Python worker pool performing automated document forgery checks, facial matching, and OCR parsing.",
  },
  {
    icon: Lock,
    title: "MinIO Immutable Storage",
    description: "S3-compatible object storage with WORM (Write Once Read Many) policies ensuring government records cannot be altered.",
  },
];

const focusAreas = [
  {
    title: "High-Concurrency Citizen Traffic",
    description:
      "Architected to maintain sub-second response times during peak national application cycles when millions of citizens access the portal simultaneously.",
  },
  {
    title: "Zero-Trust Security Architecture",
    description:
      "Enforces multi-factor authentication, hardware security module (HSM) key storage, and end-to-end payload encryption for all public transactions.",
  },
  {
    title: "Inter-Agency Interoperability",
    description:
      "Standardized RESTful and gRPC interfaces connect municipal offices, revenue authorities, and trade ministries into a single unified citizen portal.",
  },
  {
    title: "Offline Field Inspector Sync",
    description: "Municipal building inspectors collect site data, geotagged photos, and compliance checklists offline, auto-syncing upon network connection.",
  },
];

const testimony = {
  quote:
    "CivicPulse has modernized our municipal service delivery. Permit approvals that previously required six physical visits and weeks of waiting are now processed digitally in under 48 hours. The automated OCR verification and audit trail have eliminated corruption opportunities and given citizens complete transparency.",
  name: "Hon. Abreham Belay",
  title: "Director General",
  organization: "Ministry of Innovation & Technology / Addis Ababa City Administration",
  metric: "85% faster permit processing times",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function CivicPulseUiSnapshots() {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "ocr" | "permit" | "audit" | "citizen" | "bureau" | "revenue"
  >("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive Command", icon: LayoutDashboard },
    { id: "ocr", label: "Document OCR AI", icon: FileCheck },
    { id: "permit", label: "Permit Workflows", icon: Landmark },
    { id: "audit", label: "Audit & Security", icon: Shield },
    { id: "citizen", label: "Citizen Service", icon: TrendingUp },
    { id: "bureau", label: "Bureau Matrix", icon: BarChart3 },
    { id: "revenue", label: "Revenue Collection", icon: DollarSign },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            CivicPulse v5.4 • City Administration Portal Instance
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
        {/* ── 1. Executive Public Sector Command Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Daily Citizen Permits</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">18,420</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">+85% Speedup</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "94%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">OCR AI Verification</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">99.4%</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">Auto-Validated</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "99%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Active Bureaus Connected</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">24 Agencies</span>
                  <span className="text-[10px] font-mono text-sky-400 font-semibold">Interoperable</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-sky-400 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Security Audit Status</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">Zero Breach</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">WORM Encrypted</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Bureau Performance Leaderboard */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Landmark className="h-3.5 w-3.5 text-blue-400" /> Municipal Bureau Workflows
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">City Administration Portal</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { bureau: "Trade & Business Registration Bureau", app: "4,820 Applications", speed: "1.2 Days Avg", status: "Active Stream" },
                    { bureau: "Construction & Land Management Office", app: "3,110 Permits", speed: "2.4 Days Avg", status: "Active Stream" },
                    { bureau: "Revenue & Tax Administration Authority", app: "8,940 Filings", speed: "0.1 Days Avg", status: "Active Stream" },
                  ].map((row) => (
                    <div key={row.bureau} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-blue-400">●</span>
                        <div>
                          <p className="font-medium text-foreground">{row.bureau}</p>
                          <p className="text-[10px] text-muted-foreground">{row.app}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-blue-400">
                          {row.speed}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time e-Gov Event Log */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <FileCheck className="h-3.5 w-3.5 text-blue-400" /> Live e-Gov Activity Stream
                </span>
                <div className="space-y-3">
                  {[
                    { event: "Commercial License Approved", time: "2 sec ago", detail: "Ref #PERMIT-90412" },
                    { event: "Land Title OCR Validated", time: "14 sec ago", detail: "Ref #DEED-88401" },
                    { event: "Tax Revenue Receipt Sync", time: "40 sec ago", detail: "Treasury Sync #59021" },
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

        {/* ── 2. Document OCR AI Screen ── */}
        {activeTab === "ocr" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* OCR Banner */}
            <div className="flex items-center justify-between rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500 text-background font-bold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">CivicPulse Document OCR & Verification Pipeline</h4>
                  <p className="text-xs text-muted-foreground">Deep learning vision model extracting structured metadata from scanned IDs & title deeds</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 99.4% Field Extraction Precision
              </span>
            </div>

            {/* OCR Extracted Data Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-3 border-b border-border pb-2">
                  <span className="text-xs font-semibold text-foreground">Scanned Document: National Digital ID #990421</span>
                  <span className="font-mono text-[10px] text-emerald-400">Authenticity Passed (0.99 Score)</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { field: "Full Citizen Name", value: "Dawit Worku Haile", confidence: "100% Match" },
                    { field: "Tax Identification (TIN)", value: "0049281042", confidence: "100% Match" },
                    { field: "Civil Registry Reference", value: "AA-DISTRICT-04-892", confidence: "100% Match" },
                  ].map((f) => (
                    <div key={f.field} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-muted-foreground">{f.field}</span>
                        <p className="font-bold text-foreground">{f.value}</p>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                          {f.confidence}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Clearance Widget */}
              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <span className="text-xs font-semibold text-foreground border-b border-border pb-2 block">
                  Automated Security Audit
                </span>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Forgery Detection:</span>
                    <span className="text-emerald-400 font-semibold">PASSED</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Biometric Face Match:</span>
                    <span className="text-emerald-400 font-semibold">99.8% Match</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Treasury Debts:</span>
                    <span className="text-emerald-400 font-semibold">CLEARED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 3. Citizen Permit Workflows Screen ── */}
        {activeTab === "permit" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Permit Workflow Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Live Citizen Permit Approval Queue</span>
                <span className="font-mono text-[10px] text-muted-foreground">Addis Ababa City Administration</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    permit: "PERMIT #BUS-9020 - Grade 1 Commercial Trade License",
                    applicant: "TechVentures Ethiopia LLC",
                    status: "APPROVED • DIGITAL CERTIFICATE ISSUED",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                  {
                    permit: "PERMIT #CON-4012 - Commercial High-Rise Clearance",
                    applicant: "Midroc Construction Directorate",
                    status: "IN REVIEW • ENVIRONMENTAL BOARD STEP 3/4",
                    style: "bg-blue-500/10 text-blue-400 border-blue-500/30",
                  },
                  {
                    permit: "PERMIT #LND-1104 - Land Title Ownership Transfer",
                    applicant: "Solomon Tekle & Associates",
                    status: "FEE PAID • WAITING SIGNATURE",
                    style: "bg-sky-500/10 text-sky-400 border-sky-500/30",
                  },
                ].map((p) => (
                  <div key={p.permit} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{p.permit}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{p.applicant}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${p.style}`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 4. Audit & Security Screen ── */}
        {activeTab === "audit" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Audit Security Banner */}
            <div className="flex items-center justify-between rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500 text-background font-bold">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">MinIO WORM Cryptographic Audit Trail</h4>
                  <p className="text-xs text-muted-foreground">Write-Once-Read-Many immutable event ledger for full anti-corruption transparency</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 100% Cryptographically Verified
              </span>
            </div>

            {/* Audit Logs Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">System Audit Log & RBAC Verification</span>
                <span className="font-mono text-[10px] text-muted-foreground">Immutable Ledger Stream</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    event: "Permit #BUS-9020 Digital Signature Applied",
                    user: "Officer ID #OFF-4402 (Trade Bureau)",
                    ip: "10.200.4.12 • HSM Hash Matched",
                    status: "VERIFIED",
                  },
                  {
                    event: "Land Record Document Access",
                    user: "Officer ID #OFF-1109 (Land Bureau)",
                    ip: "10.200.8.44 • Role Scope OK",
                    status: "VERIFIED",
                  },
                ].map((a) => (
                  <div key={a.event} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{a.event}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{a.user} • {a.ip}</p>
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

        {/* ── 5. Citizen Service Analytics ── */}
        {activeTab === "citizen" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <TrendingUp className="h-4 w-4 text-blue-500" /> Service Requests by Type (30 Days)
                </span>
                <div className="flex h-32 items-end gap-2 px-1">
                  {[45, 60, 50, 85, 70, 95, 40].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-1">
                      <div className="w-full bg-gradient-to-t from-blue-600 to-sky-400 rounded-t-sm" style={{ height: `${val}%` }}></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 px-1 text-[8px] font-mono text-muted-foreground">
                  <span>ID</span>
                  <span>Tax</span>
                  <span>Trade</span>
                  <span>Land</span>
                  <span>Birth</span>
                  <span>Health</span>
                  <span>Visa</span>
                </div>
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-surface/50 p-4 flex flex-col justify-center">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Avg Processing Time</p>
                  <span className="text-3xl font-bold text-foreground mt-2">1.8 Days</span>
                  <div className="mt-2 text-[10px] font-mono text-emerald-500 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" /> -14% vs Last Month
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground mb-3">Citizen Satisfaction</span>
                  <div className="relative h-20 w-20 rounded-full border-4 border-surface shadow-inner"
                       style={{ background: "conic-gradient(from 0deg, #3b82f6 0% 88%, #1e293b 88% 100%)" }}>
                    <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                      <span className="text-[10px] font-bold text-foreground">4.4/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-semibold text-foreground mb-3 block">Digital vs In-Person Service Ratio</span>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs">
                  <div className="w-24 font-medium text-foreground text-right">Digital Portal</div>
                  <div className="flex-1">
                    <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "72%" }}></div>
                    </div>
                  </div>
                  <div className="w-12 text-right font-mono text-blue-400 font-semibold">72%</div>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="w-24 font-medium text-foreground text-right">In-Person Kiosk</div>
                  <div className="flex-1">
                    <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-slate-500 rounded-full" style={{ width: "28%" }}></div>
                    </div>
                  </div>
                  <div className="w-12 text-right font-mono text-slate-400 font-semibold">28%</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 6. Bureau Performance Matrix ── */}
        {activeTab === "bureau" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Total Backlog</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-foreground">4,280</span>
                  <span className="flex items-center text-[10px] font-mono text-emerald-500 font-semibold">
                    <TrendingUp className="h-3 w-3 mr-1 transform rotate-180" />-12% MoM
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Staff Productivity</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-foreground">94.2%</span>
                  <span className="text-[10px] font-mono text-blue-400 font-semibold">Efficiency Score</span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Auto-Approval Rate</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-foreground">38.5%</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">AI Handled</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <BarChart3 className="h-4 w-4 text-blue-500" /> Bureau Efficiency Rankings
                </span>
                <div className="space-y-4">
                  {[
                    { label: "Revenue & Tax", val: 95, color: "bg-blue-600" },
                    { label: "Trade Registry", val: 82, color: "bg-blue-500" },
                    { label: "Civil Identity", val: 76, color: "bg-sky-500" },
                    { label: "Land Management", val: 64, color: "bg-sky-400" },
                  ].map((bar) => (
                    <div key={bar.label} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                        <span>{bar.label}</span>
                        <span>{bar.val} Score</span>
                      </div>
                      <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                        <div className={`h-full ${bar.color} rounded-full transition-all duration-500`} style={{ width: `${bar.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-4 w-4 text-blue-500" /> Approval Rate by Dept
                </span>
                <div className="flex items-center gap-6 mt-2">
                  <div className="relative h-24 w-24 rounded-full border-4 border-surface shadow-inner"
                       style={{ background: "conic-gradient(from 0deg, #2563eb 0% 65%, #38bdf8 65% 85%, #818cf8 85% 100%)" }}>
                    <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                      <span className="text-[10px] font-bold text-foreground">88% Avg</span>
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-blue-600"></span> Trade
                      </span>
                      <span className="font-mono font-medium text-foreground">92%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-sky-400"></span> ID
                      </span>
                      <span className="font-mono font-medium text-foreground">84%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-indigo-400"></span> Land
                      </span>
                      <span className="font-mono font-medium text-foreground">68%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 7. Revenue Collection Dashboard ── */}
        {activeTab === "revenue" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-card p-4 col-span-1 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Total Collected YTD</span>
                <span className="text-3xl font-bold text-foreground">$4.2B</span>
                <div className="flex items-center text-[10px] text-emerald-500 font-mono mt-1">
                  <Check className="h-3 w-3 mr-1" /> 98% Collection Rate
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 col-span-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Landmark className="h-4 w-4 text-blue-500" /> Tax Revenue by Category
                </span>
                <div className="flex h-16 items-end gap-2">
                  {[
                    { h: 80, c: "bg-blue-600", t: "Income Tax" },
                    { h: 65, c: "bg-blue-500", t: "Corporate" },
                    { h: 45, c: "bg-sky-500", t: "VAT" },
                    { h: 30, c: "bg-sky-400", t: "Property" },
                    { h: 20, c: "bg-indigo-400", t: "Customs" },
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
                <span className="text-xs font-semibold text-foreground mb-3 block">Payment Method Distribution</span>
                <div className="flex items-center justify-between">
                  <div className="relative h-20 w-20 rounded-full border-4 border-surface shadow-inner"
                       style={{ background: "conic-gradient(from 0deg, #2563eb 0% 55%, #0ea5e9 55% 85%, #64748b 85% 100%)" }}>
                    <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                      <span className="text-[10px] font-bold text-foreground">Mix</span>
                    </div>
                  </div>
                  <div className="space-y-2 flex-1 ml-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-blue-600"></span> Bank Transfer
                      </span>
                      <span className="font-mono font-medium text-foreground">55%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-sky-500"></span> Digital Wallet
                      </span>
                      <span className="font-mono font-medium text-foreground">30%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-slate-500"></span> Cash/In-Person
                      </span>
                      <span className="font-mono font-medium text-foreground">15%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl border border-border bg-surface/30 p-4">
                <span className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" /> Delinquency Aging Buckets
                </span>
                <p className="text-[10px] text-muted-foreground mb-4">Outstanding balances by age</p>
                
                <div className="space-y-2.5 mt-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="w-16 font-mono text-muted-foreground">30-60 Days</span>
                    <div className="flex-1 mx-3">
                      <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                    <span className="w-16 text-right font-mono text-foreground font-semibold">$14.2M</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="w-16 font-mono text-muted-foreground">60-90 Days</span>
                    <div className="flex-1 mx-3">
                      <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <span className="w-16 text-right font-mono text-foreground font-semibold">$8.5M</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="w-16 font-mono text-muted-foreground">90+ Days</span>
                    <div className="flex-1 mx-3">
                      <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    <span className="w-16 text-right font-mono text-foreground font-semibold">$22.4M</span>
                  </div>
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

function CivicPulsePage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-blue-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
                  Government • MInT / City Admin Instance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                CivicPulse
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                High-concurrency public sector portal automating citizen permits, identity verification,
                and document processing at nation scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Workflows", "e-Gov", "OCR", "Kubernetes", "MinIO"].map((tag) => (
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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-blue-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/civic-pulse.png"
                  alt="CivicPulse logo"
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
            description="Explore the live executive public sector dashboard, document OCR AI pipeline, citizen permit workflow queue, and immutable audit trail."
          />
          <div className="mt-12">
            <CivicPulseUiSnapshots />
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What CivicPulse Delivers"
            description="Six integrated modules automating public sector services, digital verification, and municipal revenue collection."
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
            title="Built for Nation-Scale Government"
            description="High-concurrency cloud native infrastructure engineered to process millions of public service requests."
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
              Kubernetes · PostgreSQL · Python AI · MinIO · Docker · Redis
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
            description="The core tenets behind the development of CivicPulse."
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
