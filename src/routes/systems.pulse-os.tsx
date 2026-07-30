import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  Quote,
  LayoutDashboard,
  FileText,
  AlertTriangle,
  FlaskConical,
  Search,
  Plus,
  User,
  Clock,
  ChevronRight,
  Sparkles,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/pulse-os")({
  head: () => ({
    meta: [
      { title: "Pulse OS | Enterprise Hospital Operating System | GERJI General Hospital" },
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
  organization: "GERJI General Hospital",
  metric: "35% reduction in ER wait times",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function PulseOsUiSnapshots() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "emr" | "triage" | "lab" | "flow" | "revenue" | "outcomes">("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive Dashboard", icon: LayoutDashboard },
    { id: "emr", label: "Electronic Medical Records", icon: FileText },
    { id: "triage", label: "AI Clinical Triage", icon: AlertTriangle },
    { id: "lab", label: "Lab & Pharmacy Command", icon: FlaskConical },
    { id: "flow", label: "Patient Flow Analytics", icon: Activity },
    { id: "revenue", label: "Revenue Cycle Dashboard", icon: DollarSign },
    { id: "outcomes", label: "Clinical Outcomes", icon: TrendingUp },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Pulse OS v4.2 • GERJI General Hospital Instance
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
        {/* ── 1. Executive Dashboard Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* System Top Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">ICU Bed Capacity</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">84%</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">18 / 22 Beds</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full" style={{ width: "84%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Emergency Wait Time</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">14 min</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">-35% vs Avg</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "35%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Active Admissions</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">312</span>
                  <span className="text-[10px] font-mono text-sky-400 font-semibold">4 Departments</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-sky-400 rounded-full" style={{ width: "72%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Lab Orders Pending</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">28</span>
                  <span className="text-[10px] font-mono text-yellow-500 font-semibold">Fast-tracked</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "40%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Section */}
            <div className="grid grid-cols-3 gap-4">
              {/* Live Triage Queue */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Activity className="h-3.5 w-3.5 text-sky-500" /> Active Emergency Triage Stream
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">GERJI Main Wing</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { id: "P-401", patient: "Marta Haile", triage: "Level 1 - Critical", time: "2 min ago", doctor: "Dr. Alemayehu", status: "In Trauma Room 2" },
                    { id: "P-402", patient: "Solomon Worku", triage: "Level 2 - Urgent", time: "8 min ago", doctor: "Dr. Bethlem", status: "ECG Completed" },
                    { id: "P-403", patient: "Tewodros Kassaye", triage: "Level 3 - Moderate", time: "15 min ago", doctor: "Dr. Yonas", status: "Triage Assessment" },
                  ].map((row) => (
                    <div key={row.id} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-sky-400">{row.id}</span>
                        <div>
                          <p className="font-medium text-foreground">{row.patient}</p>
                          <p className="text-[10px] text-muted-foreground">{row.doctor} • {row.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-mono font-semibold ${
                          row.triage.includes("Level 1") ? "bg-red-500/10 text-red-500 border border-red-500/20" : "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                        }`}>
                          {row.triage}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Vitals Gauge */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Department Vitals
                </span>
                <div className="space-y-3">
                  {[
                    { dept: "Emergency Wing", status: "Optimal", count: "42 Active" },
                    { dept: "Pediatrics", status: "Normal", count: "19 Active" },
                    { dept: "Surgical Suite", status: "Busy", count: "6 Surgeries" },
                    { dept: "Outpatient Clinic", status: "Normal", count: "128 Seen" },
                  ].map((d) => (
                    <div key={d.dept} className="flex items-center justify-between text-xs border-b border-border/40 pb-2">
                      <span className="text-muted-foreground">{d.dept}</span>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-emerald-400 font-semibold">{d.status}</span>
                        <p className="text-[9px] text-muted-foreground">{d.count}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 2. Electronic Medical Record Screen ── */}
        {activeTab === "emr" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Patient Header Card */}
            <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-500/10 text-sky-400 font-bold border border-sky-500/20">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-foreground">Kebede Tesfaye</h4>
                    <span className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground">ID: #GERJI-89241</span>
                    <span className="rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-500 font-semibold">Active Inpatient</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">45 Yrs • Male • Blood Type: O+ • Ward 3, Bed 12B</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground">
                  <FileText className="h-3.5 w-3.5" /> Order Lab
                </button>
                <button className="flex items-center gap-1.5 rounded-lg bg-foreground text-background px-3 py-1.5 text-xs font-medium">
                  <Plus className="h-3.5 w-3.5" /> Prescribe Note
                </button>
              </div>
            </div>

            {/* Patient Clinical Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Vital Signs Chart Card */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-3 border-b border-border pb-2">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Activity className="h-3.5 w-3.5 text-sky-400" /> Continuous Telemetry Vitals
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400">Live Stream • Bed 12B</span>
                </div>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  <div className="rounded-lg bg-surface/50 p-2.5 text-center border border-border/60">
                    <p className="text-[10px] font-mono text-muted-foreground">Heart Rate</p>
                    <p className="text-lg font-bold text-sky-400">72 <span className="text-[10px] font-normal text-muted-foreground">bpm</span></p>
                  </div>
                  <div className="rounded-lg bg-surface/50 p-2.5 text-center border border-border/60">
                    <p className="text-[10px] font-mono text-muted-foreground">Blood Pressure</p>
                    <p className="text-lg font-bold text-emerald-400">120/80</p>
                  </div>
                  <div className="rounded-lg bg-surface/50 p-2.5 text-center border border-border/60">
                    <p className="text-[10px] font-mono text-muted-foreground">SpO2</p>
                    <p className="text-lg font-bold text-sky-400">98%</p>
                  </div>
                  <div className="rounded-lg bg-surface/50 p-2.5 text-center border border-border/60">
                    <p className="text-[10px] font-mono text-muted-foreground">Temp</p>
                    <p className="text-lg font-bold text-foreground">36.8°C</p>
                  </div>
                </div>
                <div className="rounded-lg bg-surface/30 p-3 border border-border/50">
                  <p className="text-xs font-semibold text-foreground mb-1">Doctor's Progress Note</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    "Patient responds well to IV fluids and antibiotic course. Lungs clear on auscultation. Scheduled for follow-up chest X-ray at 14:00."
                  </p>
                  <p className="text-[10px] font-mono text-muted-foreground mt-2 text-right">Dr. Alemayehu Tadesse • 10:45 AM</p>
                </div>
              </div>

              {/* Prescriptions & Allergies */}
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-card p-4">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-2">
                    <Pill className="h-3.5 w-3.5 text-emerald-400" /> Active Medications
                  </span>
                  <div className="space-y-2">
                    <div className="text-xs border-b border-border/40 pb-1.5">
                      <p className="font-semibold text-foreground">Ceftriaxone 1g IV</p>
                      <p className="text-[10px] text-muted-foreground">Every 12h • Dispensed by GERJI Pharmacy</p>
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-foreground">Paracetamol 500mg PO</p>
                      <p className="text-[10px] text-muted-foreground">PRN Pain • Active</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3.5">
                  <span className="text-xs font-semibold text-red-400 flex items-center gap-2 mb-1">
                    <AlertTriangle className="h-3.5 w-3.5" /> Allergy Alert
                  </span>
                  <p className="text-xs text-muted-foreground">Penicillin (Anaphylactic risk). Flagged by AI Triage on entry.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 3. AI Clinical Triage Screen ── */}
        {activeTab === "triage" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* AI Banner */}
            <div className="flex items-center justify-between rounded-xl border border-sky-500/20 bg-sky-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500 text-background font-bold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Pulse AI Triage Engine v2.4</h4>
                  <p className="text-xs text-muted-foreground">Real-time symptom NLP processing & vital pattern risk scoring</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-500">
                ● 100% Diagnostic Accuracy Verified
              </span>
            </div>

            {/* AI Queue Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Incoming Emergency Triage Priority Queue</span>
                <span className="font-mono text-[10px] text-muted-foreground">GERJI General Hospital ER</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    name: "Aster Gebre",
                    symptoms: "Acute dyspnea, SpO2 88%, elevated D-dimer risk",
                    score: "Risk Index: 9.4 / 10",
                    badge: "CRITICAL - IMMEDIATE ICU",
                    badgeStyle: "bg-red-500/10 text-red-400 border-red-500/30",
                    action: "Trauma Bay Assigned",
                  },
                  {
                    name: "Binyam Yilma",
                    symptoms: "Right lower quadrant abdominal pain, fever 38.5°C",
                    score: "Risk Index: 7.1 / 10",
                    badge: "HIGH - SURGICAL EVAL",
                    badgeStyle: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
                    action: "Ultrasound Ordered",
                  },
                  {
                    name: "Sara Mohammed",
                    symptoms: "Mild laceration on forearm, vitals stable",
                    score: "Risk Index: 2.1 / 10",
                    badge: "ROUTINE - OUTPATIENT",
                    badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                    action: "Minor Procedure Room",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{item.name}</span>
                        <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${item.badgeStyle}`}>
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.symptoms}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs font-bold text-sky-400">{item.score}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 4. Lab & Pharmacy Command ── */}
        {activeTab === "lab" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Lab & Pharmacy Top Bar */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Lab Orders Processed Today</span>
                <p className="text-2xl font-bold text-foreground mt-1">1,240</p>
                <p className="text-[10px] font-mono text-emerald-400 mt-1">Automated Barcode Match: 99.9%</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Pharmacy Dispense Time</span>
                <p className="text-2xl font-bold text-foreground mt-1">3.2 min</p>
                <p className="text-[10px] font-mono text-sky-400 mt-1">Integrated Prescriber Sync</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Automated Reagent Stock</span>
                <p className="text-2xl font-bold text-emerald-400 mt-1">Optimal</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">Auto-Restock Alert Active</p>
              </div>
            </div>

            {/* Specimen Tracking Grid */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <FlaskConical className="h-3.5 w-3.5 text-sky-400" /> Barcode Specimen Tracking Stream
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">GERJI Central Pathology Lab</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { specId: "SPEC-9901", test: "Complete Blood Count (CBC)", patient: "Patient #P-89241", status: "Analyzer Processing", time: "ETA 4 min" },
                  { specId: "SPEC-9902", test: "Comprehensive Metabolic Panel", patient: "Patient #P-89244", status: "Verified & Sent to EMR", time: "Completed" },
                  { specId: "SPEC-9903", test: "Blood Culture & Sensitivity", patient: "Patient #P-89249", status: "Incubation (24h)", time: "In Progress" },
                ].map((spec) => (
                  <div key={spec.specId} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-sky-400">{spec.specId}</span>
                      <div>
                        <p className="font-medium text-foreground">{spec.test}</p>
                        <p className="text-[10px] text-muted-foreground">{spec.patient}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                        {spec.status}
                      </span>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{spec.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 5. Patient Flow Analytics ── */}
        {activeTab === "flow" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-4 block">Patient Flow & Bed Occupancy</span>
                <div className="flex h-32 items-end gap-2 border-b border-border/50 pb-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-sm transition-all" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-mono text-muted-foreground">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 flex flex-col items-center justify-center">
                <span className="text-xs font-semibold text-foreground mb-4 w-full text-left">Readmission Rate</span>
                <div className="relative w-24 h-24 rounded-full" style={{ background: 'conic-gradient(rgb(16 185 129) 0% 12%, rgb(39 39 42) 12% 100%)' }}>
                  <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                    <span className="text-xl font-bold text-foreground">12%</span>
                  </div>
                </div>
                <p className="mt-4 text-[10px] text-muted-foreground text-center">30-day readmissions across all departments</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {['ER Arrivals', 'Admissions', 'Discharges', 'Transfers'].map((t, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface/50 p-3.5">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">{t}</p>
                  <p className="mt-1 text-xl font-bold text-foreground">{[142, 45, 38, 12][i]}</p>
                  <p className="mt-1 text-[10px] text-emerald-500 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> +{[5, 2, 8, 1][i]}% vs last week
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── 6. Revenue Cycle Dashboard ── */}
        {activeTab === "revenue" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Daily Revenue</p>
                <p className="mt-1 text-xl font-bold text-foreground">$124.5k</p>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Outstanding AR</p>
                <p className="mt-1 text-xl font-bold text-foreground">$2.1M</p>
              </div>
              <div className="col-span-2 rounded-xl border border-border bg-surface/50 p-3.5 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full shrink-0" style={{ background: 'conic-gradient(rgb(16 185 129) 0% 94%, rgb(39 39 42) 94% 100%)' }}>
                  <div className="absolute inset-1.5 rounded-full bg-surface/50 flex items-center justify-center">
                    <span className="text-xs font-bold text-foreground">94%</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Insurance Claim Approval Rate</p>
                  <p className="text-[10px] text-muted-foreground">First-pass clean claim rate across all payers.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-semibold text-foreground mb-4 block">Revenue by Department</span>
              <div className="space-y-3">
                {[ { d: 'Surgery', v: 85 }, { d: 'Emergency', v: 60 }, { d: 'Outpatient', v: 45 }, { d: 'Pharmacy', v: 30 } ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{row.d}</span>
                      <span className="font-mono text-emerald-400">${(row.v * 1.2).toFixed(1)}k</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-border overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${row.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 7. Clinical Outcomes ── */}
        {activeTab === "outcomes" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-3 block">Mortality Rate Trend</span>
                <div className="flex h-24 items-end gap-1">
                  {[3, 2.8, 2.5, 2.6, 2.2, 1.9, 1.8].map((v, i) => (
                    <div key={i} className="flex-1 bg-emerald-500/80 rounded-t-sm" style={{ height: `${(v/3)*100}%` }}></div>
                  ))}
                </div>
                <p className="mt-2 text-[10px] font-mono text-emerald-400 text-center">Currently 1.8% (Below avg)</p>
              </div>
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-3 block">Clinical Quality Metrics</span>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] w-24">Patient Satisfaction</span>
                    <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                      <div className="h-full bg-emerald-400" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-[10px] font-mono w-8">92%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] w-24">Surgical Success</span>
                    <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                      <div className="h-full bg-emerald-500" style={{ width: '98%' }}></div>
                    </div>
                    <span className="text-[10px] font-mono w-8">98%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] w-24">Infection Rate</span>
                    <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                      <div className="h-full bg-red-400" style={{ width: '4%' }}></div>
                    </div>
                    <span className="text-[10px] font-mono w-8">4.2%</span>
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
                  Healthcare • GERJI General Hospital
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

      {/* ── System UI Snapshots Showcase ── */}
      <section className="border-b border-border bg-surface/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Interface Preview"
            title="Interactive System Snapshots"
            description="Explore the live clinical interfaces, EMR records view, AI triage engine, and lab command modules."
          />
          <div className="mt-12">
            <PulseOsUiSnapshots />
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
