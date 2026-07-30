const fs = require('fs');

function modifyPulseOs() {
  const path = 'C:\\\\Users\\\\VICTUS\\\\Documents\\\\antigravity\\\\optimistic-mendel\\\\furii-executive-showcase\\\\src\\\\routes\\\\systems.pulse-os.tsx';
  let content = fs.readFileSync(path, 'utf8');

  // Add imports
  content = content.replace('Sparkles,\\n} from "lucide-react";', 'Sparkles,\\n  DollarSign,\\n  TrendingUp,\\n} from "lucide-react";');

  // Add state & tabs
  content = content.replace(
    'const [activeTab, setActiveTab] = useState<"dashboard" | "emr" | "triage" | "lab">("dashboard");',
    'const [activeTab, setActiveTab] = useState<"dashboard" | "emr" | "triage" | "lab" | "flow" | "revenue" | "outcomes">("dashboard");'
  );
  content = content.replace(
    '{ id: "lab", label: "Lab & Pharmacy Command", icon: FlaskConical },\\n  ] as const;',
    '{ id: "lab", label: "Lab & Pharmacy Command", icon: FlaskConical },\\n    { id: "flow", label: "Patient Flow Analytics", icon: Activity },\\n    { id: "revenue", label: "Revenue Cycle Dashboard", icon: DollarSign },\\n    { id: "outcomes", label: "Clinical Outcomes", icon: TrendingUp },\\n  ] as const;'
  );

  // Add content
  const pulseTabs = `
        {/* ── 5. Patient Flow Analytics ── */}
        {activeTab === "flow" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-4 block">Patient Flow & Bed Occupancy</span>
                <div className="flex h-32 items-end gap-2 border-b border-border/50 pb-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-sm transition-all" style={{ height: \\\`\\\${h}%\\\` }}></div>
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
                      <span className="font-mono text-emerald-400">\\\${(row.v * 1.2).toFixed(1)}k</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-border overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: \\\`\\\${row.v}%\\\` }} />
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
                    <div key={i} className="flex-1 bg-emerald-500/80 rounded-t-sm" style={{ height: \\\`\\\${(v/3)*100}%\\\` }}></div>
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
`;
  content = content.replace('      </div>\\n    </div>\\n  );\\n}', pulseTabs + '\\n      </div>\\n    </div>\\n  );\\n}');
  fs.writeFileSync(path, content, 'utf8');
}

function modifyNexus() {
  const path = 'C:\\\\Users\\\\VICTUS\\\\Documents\\\\antigravity\\\\optimistic-mendel\\\\furii-executive-showcase\\\\src\\\\routes\\\\systems.nexus-campus.tsx';
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace('Check,\\n} from "lucide-react";', 'Check,\\n  TrendingUp,\\n  PieChart,\\n} from "lucide-react";');
  content = content.replace(
    'const [activeTab, setActiveTab] = useState<"dashboard" | "sis" | "analytics" | "portal">("dashboard");',
    'const [activeTab, setActiveTab] = useState<"dashboard" | "sis" | "analytics" | "portal" | "performance_analytics" | "enrollment" | "faculty">("dashboard");'
  );
  content = content.replace(
    '{ id: "portal", label: "Parent & Exam Command", icon: Calendar },\\n  ] as const;',
    '{ id: "portal", label: "Parent & Exam Command", icon: Calendar },\\n    { id: "performance_analytics", label: "Student Performance Analytics", icon: TrendingUp },\\n    { id: "enrollment", label: "Enrollment Trends", icon: Users },\\n    { id: "faculty", label: "Faculty & Resource Dashboard", icon: BookOpen },\\n  ] as const;'
  );

  const nexusTabs = `
        {/* ── 5. Student Performance Analytics ── */}
        {activeTab === "performance_analytics" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-4 block">GPA Distribution</span>
                <div className="flex h-32 items-end gap-1 border-b border-border/50 pb-2">
                  {[10, 20, 45, 80, 60, 30, 15].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm" style={{ height: \\\`\\\${h}%\\\` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-mono text-muted-foreground">
                  <span><2.0</span><span>2.5</span><span>3.0</span><span>3.5</span><span>4.0</span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-4 block">Course Pass Rates</span>
                <div className="space-y-3">
                  {[ { c: 'Computer Science', p: 92 }, { c: 'Engineering', p: 88 }, { c: 'Mathematics', p: 76 } ].map((row, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span>{row.c}</span><span className="text-purple-400">{row.p}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: \\\`\\\${row.p}%\\\` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Avg Dropout Risk</p>
                  <p className="text-xl font-bold text-foreground">4.2%</p>
                </div>
                <div className="relative w-10 h-10 rounded-full" style={{ background: 'conic-gradient(rgb(168 85 247) 0% 4%, rgb(39 39 42) 4% 100%)' }}>
                  <div className="absolute inset-1 rounded-full bg-surface/50"></div>
                </div>
              </div>
              <div className="col-span-2 rounded-xl border border-border bg-surface/50 p-3.5 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-purple-400" />
                <div>
                  <p className="text-sm font-bold text-foreground">Semester-over-Semester Growth</p>
                  <p className="text-xs text-muted-foreground">Overall campus GPA has improved by 0.12 points since Fall 2025.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 6. Enrollment Trends ── */}
        {activeTab === "enrollment" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4 flex flex-col items-center">
                <span className="text-xs font-semibold text-foreground mb-4 w-full text-left">Gender Diversity</span>
                <div className="relative w-28 h-28 rounded-full mb-2" style={{ background: 'conic-gradient(rgb(168 85 247) 0% 52%, rgb(99 102 241) 52% 100%)' }}>
                  <div className="absolute inset-2 rounded-full bg-card flex flex-col items-center justify-center">
                    <span className="text-xs font-bold text-foreground">52% F</span>
                    <span className="text-[9px] text-muted-foreground">48% M</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-4 block">Application Funnel</span>
                <div className="space-y-4 relative">
                  {[ { s: 'Applied', v: 100, n: '12,500' }, { s: 'Admitted', v: 65, n: '8,125' }, { s: 'Enrolled', v: 40, n: '5,000' } ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-[10px] w-16 text-right">{step.s}</span>
                      <div className="flex-1 bg-border h-6 rounded-md overflow-hidden flex">
                        <div className="bg-purple-500 h-full flex items-center px-2 text-[10px] font-bold text-white" style={{ width: \\\`\\\${step.v}%\\\` }}>{step.n}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-surface/50 p-4">
               <span className="text-xs font-semibold text-foreground mb-3 block">Enrollment by Program</span>
               <div className="grid grid-cols-2 gap-4">
                 {[ { p: 'BSc Computer Science', v: '2,400' }, { p: 'MSc Data Science', v: '850' }, { p: 'BSc Software Eng', v: '1,750' }, { p: 'Phd AI Research', v: '120' }].map((prog, i) => (
                    <div key={i} className="flex justify-between items-center text-xs border-b border-border/50 pb-1">
                      <span className="text-muted-foreground">{prog.p}</span>
                      <span className="font-mono text-purple-400 font-semibold">{prog.v}</span>
                    </div>
                 ))}
               </div>
            </div>
          </div>
        )}

        {/* ── 7. Faculty & Resource Dashboard ── */}
        {activeTab === "faculty" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Classroom Utilization</p>
                <div className="mt-2 h-3 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500" style={{ width: '82%' }}></div>
                </div>
                <p className="text-xs mt-2 text-foreground font-semibold">82% Peak Time Usage (09:00 - 15:00)</p>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Student-Faculty</p>
                <p className="mt-1 text-2xl font-bold text-foreground">18:1</p>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Research Pubs</p>
                <p className="mt-1 text-2xl font-bold text-foreground">342</p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <span className="text-xs font-semibold text-foreground mb-4 block">Faculty Workload (Teaching Hours / Week)</span>
              <div className="flex h-24 items-end gap-2">
                {[12, 15, 8, 18, 14, 10, 16, 9].map((h, i) => (
                  <div key={i} className="flex-1 bg-indigo-500/80 rounded-t-sm" style={{ height: \\\`\\\${(h/20)*100}%\\\` }}></div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[9px] font-mono text-muted-foreground">
                <span>Dept 1</span><span>Dept 2</span><span>Dept 3</span><span>Dept 4</span><span>Dept 5</span><span>Dept 6</span><span>Dept 7</span><span>Dept 8</span>
              </div>
            </div>
          </div>
        )}
`;
  content = content.replace('      </div>\\n    </div>\\n  );\\n}', nexusTabs + '\\n      </div>\\n    </div>\\n  );\\n}');
  fs.writeFileSync(path, content, 'utf8');
}

function modifyTalentGrid() {
  const path = 'C:\\\\Users\\\\VICTUS\\\\Documents\\\\antigravity\\\\optimistic-mendel\\\\furii-executive-showcase\\\\src\\\\routes\\\\systems.talent-grid.tsx';
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace('Award,\\n} from "lucide-react";', 'Award,\\n  PieChart,\\n  UserPlus,\\n} from "lucide-react";');
  content = content.replace(
    'const [activeTab, setActiveTab] = useState<"dashboard" | "ats" | "payroll" | "performance">("dashboard");',
    'const [activeTab, setActiveTab] = useState<"dashboard" | "ats" | "payroll" | "performance" | "workforce" | "recruitment" | "compensation">("dashboard");'
  );
  content = content.replace(
    '{ id: "performance", label: "AI Performance & Risk", icon: Brain },\\n  ] as const;',
    '{ id: "performance", label: "AI Performance & Risk", icon: Brain },\\n    { id: "workforce", label: "Workforce Analytics", icon: PieChart },\\n    { id: "recruitment", label: "Recruitment Pipeline", icon: UserPlus },\\n    { id: "compensation", label: "Compensation Analytics", icon: DollarSign },\\n  ] as const;'
  );

  const talentTabs = `
        {/* ── 5. Workforce Analytics ── */}
        {activeTab === "workforce" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground mb-4 block">Headcount by Department</span>
                <div className="flex h-32 items-end gap-2 border-b border-border/50 pb-2">
                  {[85, 40, 60, 25, 50].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-sky-400 rounded-t-sm" style={{ height: \\\`\\\${h}%\\\` }}></div>
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
                  <span><1 yr</span><span>1-3 yrs</span><span>3-5 yrs</span><span>5+ yrs</span>
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
                        <div className="bg-gradient-to-r from-cyan-600 to-sky-400 h-full flex items-center px-2 text-[10px] font-bold text-white" style={{ width: \\\`\\\${step.v}%\\\` }}>{step.n}</div>
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
                      <span>{band.g}</span><span>\\\${band.min}k - \\\${band.max}k</span>
                    </div>
                    <div className="relative h-4 w-full rounded-full bg-border">
                      <div className="absolute top-0 h-full bg-cyan-500/30 rounded-full" style={{ left: \\\`\\\${(band.min/250)*100}%\\\`, width: \\\`\\\${((band.max-band.min)/250)*100}%\\\` }}></div>
                      <div className="absolute top-0 h-full w-2 bg-cyan-500 rounded-full" style={{ left: \\\`\\\${(band.avg/250)*100}%\\\` }}></div>
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
`;
  content = content.replace('      </div>\\n    </div>\\n  );\\n}', talentTabs + '\\n      </div>\\n    </div>\\n  );\\n}');
  fs.writeFileSync(path, content, 'utf8');
}

modifyPulseOs();
modifyNexus();
modifyTalentGrid();
console.log('Successfully updated 3 system files!');
