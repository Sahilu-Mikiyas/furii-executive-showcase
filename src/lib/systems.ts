export type SystemInfo = {
  slug: string;
  name: string;
  industry: string;
  description: string;
  tags: string[];
  accent: string;
};

export const systems: SystemInfo[] = [
  {
    slug: "pulse-os",
    name: "Pulse OS",
    industry: "Healthcare",
    description:
      "Hospital operating system spanning EMR, appointments, pharmacy, labs, billing, and AI-assisted diagnostics.",
    tags: ["EMR", "HL7", "AI Triage"],
    accent: "from-sky-500/10 to-transparent",
  },
  {
    slug: "nexus-campus",
    name: "Nexus Campus",
    industry: "Education",
    description:
      "End-to-end school platform: SIS, grading, attendance, parent portal, and AI performance insights.",
    tags: ["SIS", "LMS", "AI Insights"],
    accent: "from-indigo-500/10 to-transparent",
  },
  {
    slug: "talent-grid",
    name: "TalentGrid",
    industry: "Human Resources",
    description:
      "HR suite covering recruitment, onboarding, payroll, performance and workforce analytics.",
    tags: ["HRIS", "Payroll", "ATS"],
    accent: "from-emerald-500/10 to-transparent",
  },
  {
    slug: "strata-ops",
    name: "Strata Ops",
    industry: "Real Estate",
    description:
      "Property, lease, tenant, and maintenance operations with predictive maintenance intelligence.",
    tags: ["Leases", "IoT", "Predictive"],
    accent: "from-amber-500/10 to-transparent",
  },
  {
    slug: "velox-commerce",
    name: "Velox Commerce",
    industry: "Retail",
    description: "POS, inventory, e-commerce and customer intelligence across every storefront.",
    tags: ["POS", "Inventory", "Omni"],
    accent: "from-rose-500/10 to-transparent",
  },
  {
    slug: "civic-pulse",
    name: "CivicPulse",
    industry: "Government",
    description:
      "Citizen services, permits, workflows and document intelligence for public institutions.",
    tags: ["Workflows", "e-Gov", "OCR"],
    accent: "from-blue-500/10 to-transparent",
  },
  {
    slug: "equinox-ledger",
    name: "Equinox Ledger",
    industry: "Finance",
    description: "Core accounting, ledgers, budgeting, and financial reporting for enterprises.",
    tags: ["GL", "Budgeting", "Audit"],
    accent: "from-teal-500/10 to-transparent",
  },
  {
    slug: "prism-impact",
    name: "Prism Impact",
    industry: "NGO & Impact",
    description: "Beneficiary management, program tracking, and donor reporting for NGOs.",
    tags: ["M&E", "Donors", "Programs"],
    accent: "from-lime-500/10 to-transparent",
  },
  {
    slug: "forge-mes",
    name: "Forge MES",
    industry: "Manufacturing",
    description:
      "MES, production planning, quality, and asset intelligence for modern factories.",
    tags: ["MES", "QA", "OEE"],
    accent: "from-orange-500/10 to-transparent",
  },
  {
    slug: "aura-hospitality",
    name: "Aura Hospitality",
    industry: "Hospitality",
    description: "PMS, reservations, POS, and guest experience for hotels and resorts.",
    tags: ["PMS", "POS", "Guest"],
    accent: "from-fuchsia-500/10 to-transparent",
  },
  {
    slug: "construct-x",
    name: "ConstructX",
    industry: "Construction",
    description: "Projects, sites, procurement, and workforce operations for contractors.",
    tags: ["Projects", "Procure", "Field"],
    accent: "from-yellow-500/10 to-transparent",
  },
  {
    slug: "vector-dispatch",
    name: "Vector Dispatch",
    industry: "Logistics",
    description: "Fleet, dispatch, warehouse, and last-mile intelligence for logistics operators.",
    tags: ["TMS", "WMS", "Route AI"],
    accent: "from-cyan-500/10 to-transparent",
  },
];
