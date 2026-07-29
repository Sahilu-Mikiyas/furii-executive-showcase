export type SystemInfo = {
  slug: string;
  name: string;
  industry: string;
  description: string;
  metric: string;
  modules: string[];
  tags: string[];
  techStack: string;
  accent: string;
  logo: string;
};

export const systems: SystemInfo[] = [
  {
    slug: "pulse-os",
    name: "Pulse OS",
    industry: "Healthcare",
    description:
      "Full hospital operating system managing clinical workflows, patient histories, and diagnostic intelligence at enterprise scale.",
    metric: "HL7 / FHIR Native",
    modules: ["EMR & Health Records", "Lab & Pharmacy Automation", "AI Clinical Triage"],
    tags: ["EMR", "HL7", "AI Triage"],
    techStack: "Microservices · PostgreSQL · Redis · Kafka",
    accent: "from-sky-500/10 to-transparent",
    logo: "/logos/pulse-os.png",
  },
  {
    slug: "nexus-campus",
    name: "Nexus Campus",
    industry: "Education",
    description:
      "Unified university and school management platform unifying academic records, grading, and automated student analytics.",
    metric: "Multi-Campus Ready",
    modules: ["Student Information System", "AI Grade & Attendance Analytics", "Parent-Teacher Portal"],
    tags: ["SIS", "LMS", "AI Insights"],
    techStack: "Event-Driven · GraphQL · PostgreSQL · WebSockets",
    accent: "from-indigo-500/10 to-transparent",
    logo: "/logos/nexus-campus.png",
  },
  {
    slug: "talent-grid",
    name: "TalentGrid",
    industry: "Human Resources",
    description:
      "Enterprise HR workforce suite covering global recruitment pipelines, payroll processing, and predictive performance reviews.",
    metric: "Automated Screening",
    modules: ["ATS Resume Intelligence", "Automated Multi-Currency Payroll", "Workforce Analytics"],
    tags: ["HRIS", "Payroll", "ATS"],
    techStack: "Serverless Workers · Node.js · TimescaleDB",
    accent: "from-emerald-500/10 to-transparent",
    logo: "/logos/talent-grid.png",
  },
  {
    slug: "strata-ops",
    name: "Strata Ops",
    industry: "Real Estate",
    description: "Multi-property management OS providing lease automation, tenant portals, and IoT-driven predictive maintenance.",
    metric: "Predictive Maintenance",
    modules: ["Automated Lease Management", "IoT Telemetry Monitoring", "Tenant Self-Service Hub"],
    tags: ["Leases", "IoT", "Predictive"],
    techStack: "Go · TimescaleDB · MQTT · WebSockets",
    accent: "from-amber-500/10 to-transparent",
    logo: "/logos/strata-ops.png",
  },
  {
    slug: "velox-commerce",
    name: "Velox Commerce",
    industry: "Retail",
    description: "High-throughput retail management engine integrating point-of-sale, real-time inventory, and customer intelligence.",
    metric: "Sub-50ms Transaction Latency",
    modules: ["Offline-First POS Engine", "Real-Time Inventory Sync", "Customer Loyalty & AI Insights"],
    tags: ["POS", "Inventory", "Omni"],
    techStack: "Rust · Redis Cluster · SQLite · Edge Nodes",
    accent: "from-rose-500/10 to-transparent",
    logo: "/logos/velox-commerce.png",
  },
  {
    slug: "civic-pulse",
    name: "CivicPulse",
    industry: "Government",
    description:
      "High-concurrency public sector portal automating citizen permits, identity verification, and document processing.",
    metric: "Bank-Grade Encryption",
    modules: ["Document OCR Intelligence", "Citizen Permit Workflows", "Audit-Ready Logs & RBAC"],
    tags: ["Workflows", "e-Gov", "OCR"],
    techStack: "Kubernetes · PostgreSQL · Python AI · MinIO",
    accent: "from-blue-500/10 to-transparent",
    logo: "/logos/civic-pulse.png",
  },
  {
    slug: "equinox-ledger",
    name: "Equinox Ledger",
    industry: "Finance",
    description: "Double-entry enterprise financial core providing real-time general ledger, automated reconciliation, and audit reporting.",
    metric: "ACID Compliant Core",
    modules: ["Real-Time General Ledger", "Automated Bank Reconciliation", "Financial Compliance Engine"],
    tags: ["GL", "Budgeting", "Audit"],
    techStack: "Go · CockroachDB · Kafka · Event Sourcing",
    accent: "from-teal-500/10 to-transparent",
    logo: "/logos/equinox-ledger.png",
  },
  {
    slug: "prism-impact",
    name: "Prism Impact",
    industry: "NGO & Impact",
    description: "Impact measurement engine tracking global beneficiaries, donor disbursements, and field program analytics.",
    metric: "Real-Time M&E Tracking",
    modules: ["Beneficiary Identity Registry", "Donor Grant Allocation Engine", "Field Mobile Data Sync"],
    tags: ["M&E", "Donors", "Programs"],
    techStack: "PWA · PouchDB · CouchDB · Node.js",
    accent: "from-lime-500/10 to-transparent",
    logo: "/logos/prism-impact.png",
  },
  {
    slug: "forge-mes",
    name: "Forge MES",
    industry: "Manufacturing",
    description:
      "Manufacturing execution system connecting floor machinery, quality assurance, and automated overall equipment effectiveness.",
    metric: "Industry 4.0 Standard",
    modules: ["Machine OPC-UA Connector", "Real-Time QA Inspection", "OEE Performance Dashboard"],
    tags: ["MES", "QA", "OEE"],
    techStack: "C++ Microservices · InfluxDB · OPC-UA · Grafana",
    accent: "from-orange-500/10 to-transparent",
    logo: "/logos/forge-mes.png",
  },
  {
    slug: "aura-hospitality",
    name: "Aura Hospitality",
    industry: "Hospitality",
    description: "Hotel and resort management suite unifying reservations, front desk operations, room service, and guest messaging.",
    metric: "Instant Guest Sync",
    modules: ["Central Reservation System", "Front Desk & Housekeeping OS", "Guest Mobile Concierge"],
    tags: ["PMS", "POS", "Guest"],
    techStack: "Node.js · PostgreSQL · Redis · WebSockets",
    accent: "from-fuchsia-500/10 to-transparent",
    logo: "/logos/aura-hospitality.png",
  },
  {
    slug: "construct-x",
    name: "ConstructX",
    industry: "Construction",
    description: "Capital project management platform tracking field operations, material procurement, subcontractor bids, and safety.",
    metric: "Field-Offline Capable",
    modules: ["Subcontractor Bid Portal", "Material Procurement Track", "Field Safety & Site Logs"],
    tags: ["Projects", "Procure", "Field"],
    techStack: "React Native · Node.js · S3 · GraphQL",
    accent: "from-yellow-500/10 to-transparent",
    logo: "/logos/construct-x.png",
  },
  {
    slug: "vector-dispatch",
    name: "Vector Dispatch",
    industry: "Logistics",
    description: "Fleet optimization engine featuring AI route planning, automated warehouse dispatch, and last-mile tracking.",
    metric: "Sub-Second Route AI",
    modules: ["Dynamic AI Route Optimizer", "Automated Fleet Dispatch", "Warehouse WMS Hub"],
    tags: ["TMS", "WMS", "Route AI"],
    techStack: "Python OR-Tools · Go · PostGIS · Redis",
    accent: "from-cyan-500/10 to-transparent",
    logo: "/logos/vector-dispatch.png",
  },
];
