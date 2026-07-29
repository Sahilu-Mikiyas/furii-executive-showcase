import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  GraduationCap,
  BookOpen,
  Users,
  Award,
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
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/nexus-campus")({
  head: () => ({
    meta: [
      { title: "Nexus Campus | Enterprise Education & University Operating System | FURII" },
      {
        name: "description",
        content:
          "Nexus Campus is a unified university and school management platform unifying academic records, grading, and automated student analytics at enterprise scale.",
      },
    ],
  }),
  component: NexusCampusPage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "99.95%", label: "System Uptime" },
  { value: "50k+", label: "Active Students" },
  { value: "Multi-Campus", label: "Architecture" },
  { value: "<150ms", label: "API Latency" },
];

const coreFeatures = [
  {
    icon: GraduationCap,
    title: "Student Information System (SIS)",
    description:
      "Centralized registry for student demographics, academic transcripts, degree progress tracking, and multi-campus enrollment history with strict role-based access control.",
  },
  {
    icon: BookOpen,
    title: "Curriculum & Course Management",
    description:
      "Flexible course catalog engine supporting credit hours, prerequisites, elective tracks, and dynamic class scheduling across faculties and departments.",
  },
  {
    icon: Brain,
    title: "AI Grade & Attendance Analytics",
    description:
      "Predictive machine learning models that detect early warning signs of student dropouts, track attendance patterns, and automate grade curve calculations.",
  },
  {
    icon: Users,
    title: "Parent & Student Self-Service Portal",
    description:
      "Cross-platform portal giving students and parents instant access to live grades, attendance logs, tuition statements, and direct professor communication.",
  },
  {
    icon: Award,
    title: "Automated Exam & Evaluation Hub",
    description:
      "End-to-end exam lifecycle management: room seating generation, invigilation rosters, automated optical mark grading, and tamper-proof transcript issuing.",
  },
  {
    icon: BarChart3,
    title: "Tuition & Multi-Currency Billing",
    description:
      "Financial core automating tuition fee structures, scholarship disbursements, installment plans, and digital payment gateway integrations.",
  },
];

const architecturePoints = [
  {
    icon: Database,
    title: "PostgreSQL Data Vault",
    description: "ACID-compliant relational database with automated daily snapshots, multi-tenant isolation, and encrypted transcript archives.",
  },
  {
    icon: Server,
    title: "GraphQL API Gateway",
    description: "High-performance unified API layer enabling rapid mobile app and web portal data querying with zero over-fetching.",
  },
  {
    icon: Zap,
    title: "WebSocket Live Sync",
    description: "Real-time event push for instant attendance notifications, grade publication alerts, and emergency campus announcements.",
  },
  {
    icon: Lock,
    title: "FERPA & Data Privacy Guard",
    description: "Enterprise security architecture with granular role-based permissions, student data privacy compliance, and full audit trails.",
  },
];

const focusAreas = [
  {
    title: "Multi-Campus Hierarchy",
    description:
      "Architected to support multi-branch universities with centralized executive oversight alongside autonomous department-level operational controls.",
  },
  {
    title: "Offline-First Examination",
    description:
      "Exam evaluation and attendance logging modules function seamlessly during internet outages, syncing automatically when connectivity resumes.",
  },
  {
    title: "Seamless Payment Gateway Integration",
    description:
      "Pre-built connectors for local mobile money and digital banking platforms, enabling friction-free tuition payments for parents and students.",
  },
  {
    title: "AI-Powered Early Intervention",
    description:
      "Identifies academic performance drops before final exams occur, allowing counselors and department heads to provide proactive student support.",
  },
];

const testimony = {
  quote:
    "Nexus Campus revolutionized our academic administration. Managing over 12,000 students across three campuses was once an operational nightmare. With Nexus Campus, grading publication, transcript generation, and tuition reconciliation happen in minutes instead of weeks. The AI dropout prevention module alone saved scores of students this semester.",
  name: "Dr. Solomon Tekle",
  title: "Academic Vice President",
  organization: "HilCoE School of Computer Science & Technology",
  metric: "40% reduction in administrative overhead",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function NexusCampusUiSnapshots() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "sis" | "analytics" | "portal">("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive Overview", icon: LayoutDashboard },
    { id: "sis", label: "Student Information (SIS)", icon: FileText },
    { id: "analytics", label: "AI Academic Analytics", icon: Brain },
    { id: "portal", label: "Parent & Exam Command", icon: Calendar },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-purple-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Nexus Campus v3.8 • HilCoE Instance
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
        {/* ── 1. Executive University Dashboard Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Total Enrolled Students</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">12,480</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">+8.4% YoY</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: "88%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Average Attendance</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">94.2%</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">Optimal</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "94%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Semester GPA Average</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">3.42</span>
                  <span className="text-[10px] font-mono text-purple-400 font-semibold">Scale 4.0</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-purple-400 rounded-full" style={{ width: "85%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Tuition Cleared</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">91.5%</span>
                  <span className="text-[10px] font-mono text-indigo-400 font-semibold">Automated Sync</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-indigo-400 rounded-full" style={{ width: "91%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Faculty Breakdown */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="h-3.5 w-3.5 text-indigo-400" /> Faculty & Department Overview
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">Semester II 2026</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { dept: "Computer Science & Software Eng", enrolled: "3,840 Students", gpa: "3.58 Avg GPA", status: "Active Classes" },
                    { dept: "Electrical & Computer Engineering", enrolled: "2,910 Students", gpa: "3.41 Avg GPA", status: "Active Classes" },
                    { dept: "Information Systems & Data Science", enrolled: "2,450 Students", gpa: "3.49 Avg GPA", status: "Active Classes" },
                  ].map((row) => (
                    <div key={row.dept} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-indigo-400">●</span>
                        <div>
                          <p className="font-medium text-foreground">{row.dept}</p>
                          <p className="text-[10px] text-muted-foreground">{row.enrolled}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-indigo-400">
                          {row.gpa}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time Live Feed */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <UserCheck className="h-3.5 w-3.5 text-emerald-400" /> Live Campus Stream
                </span>
                <div className="space-y-3">
                  {[
                    { event: "Grading Batch Published", time: "2 min ago", detail: "CS401 Software Arch" },
                    { event: "Tuition Auto-Reconciled", time: "12 min ago", detail: "Student #STU-49021" },
                    { event: "Exam Timetable Dispatched", time: "30 min ago", detail: "Finals Week Schedule" },
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

        {/* ── 2. Student Information System (SIS) Screen ── */}
        {activeTab === "sis" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Student Profile Card */}
            <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-500/10 text-indigo-400 font-bold border border-indigo-500/20">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-foreground">Helen Yohannes</h4>
                    <span className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground">ID: #STU-49021</span>
                    <span className="rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-400 font-semibold">Honors Standing</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">B.Sc. Software Engineering • Year 4 • Cumulative GPA: 3.89</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground">
                  <FileText className="h-3.5 w-3.5" /> Official Transcript
                </button>
                <button className="flex items-center gap-1.5 rounded-lg bg-foreground text-background px-3 py-1.5 text-xs font-medium">
                  <Check className="h-3.5 w-3.5" /> Degree Clearance
                </button>
              </div>
            </div>

            {/* Course Enrollment & Grade History */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-3 border-b border-border pb-2">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-indigo-400" /> Current Semester Coursework
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400">18 Credit Hours Enrolled</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { code: "SE-4101", title: "Distributed Microservices Architecture", grade: "A (4.0)", attendance: "98% Attendance" },
                    { code: "AI-3202", title: "Applied Neural Networks & Machine Learning", grade: "A (4.0)", attendance: "95% Attendance" },
                    { code: "CS-4900", title: "Senior Capstone Software Engineering", grade: "A+ (4.0)", attendance: "100% Attendance" },
                  ].map((c) => (
                    <div key={c.code} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div>
                        <span className="font-mono font-bold text-indigo-400">{c.code}</span>
                        <p className="font-medium text-foreground">{c.title}</p>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 text-[10px] font-mono font-bold text-indigo-400">
                          {c.grade}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{c.attendance}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial Clearance Widget */}
              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <Award className="h-3.5 w-3.5 text-emerald-400" /> Tuition & Clearance Status
                </span>
                <div className="rounded-lg bg-surface/50 p-3 border border-border/60">
                  <p className="text-[10px] font-mono text-muted-foreground">Tuition Fee Clearance</p>
                  <p className="text-base font-bold text-emerald-400 mt-0.5">Cleared 100%</p>
                  <p className="text-[9px] text-muted-foreground mt-1">Receipt Ref: #REC-884920</p>
                </div>
                <div className="rounded-lg bg-surface/50 p-3 border border-border/60">
                  <p className="text-[10px] font-mono text-muted-foreground">Library & Lab Access</p>
                  <p className="text-xs font-semibold text-foreground mt-0.5">Unrestricted Access</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 3. AI Academic & Dropout Analytics Screen ── */}
        {activeTab === "analytics" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* AI Analytics Banner */}
            <div className="flex items-center justify-between rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500 text-background font-bold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Nexus AI Early Warning Engine</h4>
                  <p className="text-xs text-muted-foreground">Machine learning model predicting academic risk before midterm evaluations</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 98.4% Early Risk Detection Rate
              </span>
            </div>

            {/* Risk Assessment Matrix */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Academic Intervention & Risk Matrix</span>
                <span className="font-mono text-[10px] text-muted-foreground">Department of Computer Science</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    student: "Student #STU-3104",
                    issue: "Attendance dropped below 75% in Data Structures, Midterm score trend -18%",
                    risk: "HIGH RISK - ADVISOR ALERT",
                    style: "bg-red-500/10 text-red-400 border-red-500/30",
                    recommendation: "Assigned Peer Tutor & Counselor Meeting",
                  },
                  {
                    student: "Student #STU-2909",
                    issue: "Missing 2 lab assignments in Operating Systems",
                    risk: "MODERATE RISK",
                    style: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
                    recommendation: "Automated Student SMS Reminder Sent",
                  },
                  {
                    student: "Student #STU-4812",
                    issue: "GPA trending upward from 2.9 to 3.4 in core major courses",
                    risk: "POSITIVE GROWTH",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                    recommendation: "Recommended for Dean's List Consideration",
                  },
                ].map((r) => (
                  <div key={r.student} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{r.student}</span>
                        <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${r.style}`}>
                          {r.risk}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{r.issue}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-indigo-400 font-medium">{r.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 4. Parent & Exam Command Screen ── */}
        {activeTab === "portal" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Exam Command Header */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Upcoming Finals Scheduled</span>
                <p className="text-2xl font-bold text-foreground mt-1">142 Exams</p>
                <p className="text-[10px] font-mono text-indigo-400 mt-1">Auto Room & Invigilator Matched</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Parent SMS Notifications</span>
                <p className="text-2xl font-bold text-foreground mt-1">45,800 Sent</p>
                <p className="text-[10px] font-mono text-emerald-400 mt-1">Instant Grade & Absence Alerts</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">OMR Exam Auto-Grading</span>
                <p className="text-2xl font-bold text-purple-400 mt-1">Sub-Second</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">Optical Scan & Transcript Sync</p>
              </div>
            </div>

            {/* Exam Room Seating Grid */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-indigo-400" /> Automated Examination Hall Roster
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">HilCoE Main Auditorium</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { hall: "Hall A - Block 3", exam: "CS401 Microservices Final Exam", capacity: "240 Candidates", invigilator: "Prof. Worku & Dr. Bethlem", status: "Room Allocated" },
                  { hall: "Hall B - Block 1", exam: "SE320 Database Systems Final Exam", capacity: "180 Candidates", invigilator: "Dr. Yonas & Instructor Sara", status: "Room Allocated" },
                  { hall: "Hall C - Lab 4", exam: "AI201 Machine Learning Practical", capacity: "60 Candidates", invigilator: "Dr. Solomon Tekle", status: "Terminal Ready" },
                ].map((ex) => (
                  <div key={ex.hall} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-indigo-400">{ex.hall}</span>
                      <div>
                        <p className="font-medium text-foreground">{ex.exam}</p>
                        <p className="text-[10px] text-muted-foreground">{ex.invigilator}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 font-mono text-[10px] text-indigo-400 font-semibold">
                        {ex.status}
                      </span>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{ex.capacity}</p>
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

function NexusCampusPage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-indigo-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
                  Education • HilCoE Instance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Nexus Campus
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Unified university and school management platform unifying academic records, grading,
                and automated student analytics at enterprise scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["SIS", "LMS", "AI Insights", "Multi-Campus", "GraphQL"].map((tag) => (
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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-indigo-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/nexus-campus.png"
                  alt="Nexus Campus logo"
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
            description="Explore the live academic dashboards, student record management, AI dropout warning matrix, and automated exam hub."
          />
          <div className="mt-12">
            <NexusCampusUiSnapshots />
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What Nexus Campus Delivers"
            description="Six integrated modules that manage the entire academic journey from student application to graduation."
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
            title="Built for Educational Excellence"
            description="High-throughput infrastructure engineered to process millions of academic transactions securely."
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
              Event-Driven · GraphQL · PostgreSQL · WebSockets · Node.js · Docker
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
            description="The core tenets behind the development of Nexus Campus."
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
