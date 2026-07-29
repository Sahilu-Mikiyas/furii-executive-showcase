import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Hotel,
  BedDouble,
  Utensils,
  KeyRound,
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
  PhoneCall,
  Sparkle,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/aura-hospitality")({
  head: () => ({
    meta: [
      { title: "Aura Hospitality | Enterprise Hotel & Resort OS | FURII" },
      {
        name: "description",
        content:
          "Aura Hospitality is an enterprise hotel and resort management suite unifying reservations, front desk operations, room service, and guest messaging.",
      },
    ],
  }),
  component: AuraHospitalityPage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "99.98%", label: "System SLA" },
  { value: "98.4%", label: "Peak Occupancy" },
  { value: "<100ms", label: "OTA Sync Speed" },
  { value: "+28%", label: "Guest Spend" },
];

const coreFeatures = [
  {
    icon: Hotel,
    title: "Central Reservation System (CRS)",
    description:
      "Unified multi-channel booking engine synchronizing room rates and availability across direct web portals, Booking.com, Expedia, and travel agencies in real time.",
  },
  {
    icon: BedDouble,
    title: "Front Desk & Housekeeping OS",
    description:
      "Automated front desk check-in workflow paired with a mobile housekeeping management grid tracking live room cleaning status, turndown services, and maintenance.",
  },
  {
    icon: KeyRound,
    title: "Guest Mobile Concierge App",
    description:
      "Mobile web app giving resort guests digital bluetooth room keys, mobile check-in/checkout, in-room dining ordering, and instant WhatsApp concierge messaging.",
  },
  {
    icon: Utensils,
    title: "Resort POS & Dining Integration",
    description:
      "Integrated food & beverage POS system linking hotel restaurants, poolside bars, and spa centers directly to the guest room folio ledger.",
  },
  {
    icon: Calendar,
    title: "Multi-Channel OTA Manager",
    description:
      "Prevents double bookings by updating room inventories across all connected online travel agency distribution channels in less than 100 milliseconds.",
  },
  {
    icon: BarChart3,
    title: "RevPAR & Yield Analytics",
    description:
      "Dynamic pricing engine automatically adjusting room rates based on seasonal demand, local events, historical occupancy trends, and competitor rates.",
  },
];

const architecturePoints = [
  {
    icon: Server,
    title: "Node.js High-Concurrency Backend",
    description: "Event-driven asynchronous backend handling thousands of simultaneous guest mobile interactions and channel manager API queries.",
  },
  {
    icon: Database,
    title: "PostgreSQL Relational Storage",
    description: "ACID-compliant storage for guest folios, reservation history, payment logs, and multi-property financial ledgers.",
  },
  {
    icon: Zap,
    title: "Redis Sub-Millisecond Cache",
    description: "In-memory caching layer storing room availability calendars, dynamic pricing matrices, and active digital key tokens.",
  },
  {
    icon: Lock,
    title: "WebSockets Real-Time Sync",
    description: "Instant push notification protocol updating front desk monitors, housekeeping tablets, and guest phones without page refreshes.",
  },
];

const focusAreas = [
  {
    title: "Sub-100ms Multi-Channel OTA Sync",
    description:
      "Eliminates overbookings by propagating room availability updates to global distribution channels immediately upon booking.",
  },
  {
    title: "Contactless Guest Journey",
    description:
      "Enables guests to bypass front desk queues entirely using digital mobile room keys, mobile ID upload, and instant payment settlement.",
  },
  {
    title: "Seamless Folio Room Charge Integration",
    description:
      "Connects spa, restaurant, and activity charges directly to the main room bill with signature capture and instant folio updates.",
  },
  {
    title: "Offline Front Desk Resilience",
    description:
      "Front desk terminals continue issuing physical keycards and processing check-ins during network interruptions, auto-syncing when online.",
  },
];

const testimony = {
  quote:
    "Aura Hospitality transformed how we run our luxury resorts and hotel towers. Managing 850 rooms and five fine dining restaurants used to require endless manual synchronization. Aura's central reservation system and guest mobile concierge boosted our in-room dining spend by 28% while maintaining a 98.4% peak occupancy rate.",
  name: "Worku Haile",
  title: "Operations Director",
  organization: "Haile Grand Resorts / Skylight Hotel Group",
  metric: "+28% increase in guest spend",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function AuraHospitalityUiSnapshots() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "crs" | "housekeeping" | "guest">("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive Command", icon: LayoutDashboard },
    { id: "crs", label: "Central Reservations", icon: Hotel },
    { id: "housekeeping", label: "Housekeeping OS", icon: BedDouble },
    { id: "guest", label: "Guest Concierge & POS", icon: KeyRound },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-pink-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-purple-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Aura Hospitality v5.0 • Haile Grand Resort Instance
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
        {/* ── 1. Executive Resort Command Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Resort Occupancy</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">98.4%</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">836 / 850 Rooms</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-fuchsia-500 rounded-full" style={{ width: "98.4%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Daily RevPAR</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">$340.50</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">+22% vs Avg</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "92%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Guest In-Room Spend</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">$48,200</span>
                  <span className="text-[10px] font-mono text-fuchsia-400 font-semibold">+28% Growth</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-fuchsia-400 rounded-full" style={{ width: "88%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">OTA Channel Sync</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">&lt;100ms</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">10 Channels Sync</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Room Category Distribution */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Hotel className="h-3.5 w-3.5 text-fuchsia-400" /> Haile Grand Resort Suites Overview
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">Live Occupancy Stream</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { cat: "Presidential & Executive Suites", count: "48 / 50 Occupied", rate: "$850 / night", status: "Sub-100ms Sync" },
                    { cat: "Ocean View Luxury Villas", count: "120 / 120 Occupied", rate: "$480 / night", status: "FULLY BOOKED" },
                    { cat: "Deluxe Resort Rooms", count: "668 / 680 Occupied", rate: "$280 / night", status: "Sub-100ms Sync" },
                  ].map((row) => (
                    <div key={row.cat} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-fuchsia-400">●</span>
                        <div>
                          <p className="font-medium text-foreground">{row.cat}</p>
                          <p className="text-[10px] text-muted-foreground">{row.count}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-fuchsia-500/10 border border-fuchsia-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-fuchsia-400">
                          {row.rate}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time Guest Activity Stream */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <KeyRound className="h-3.5 w-3.5 text-fuchsia-400" /> Live Concierge Stream
                </span>
                <div className="space-y-3">
                  {[
                    { event: "Mobile Check-in Completed", time: "1 min ago", detail: "Suite #804 • Digital Key Issued" },
                    { event: "Room Service Order Placed", time: "8 min ago", detail: "Villa #12 • $140 Folio Charge" },
                    { event: "Booking.com Reservation", time: "22 min ago", detail: "Deluxe Room • OTA Auto-Sync" },
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

        {/* ── 2. Central Reservation System Screen ── */}
        {activeTab === "crs" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* CRS Banner */}
            <div className="flex items-center justify-between rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-fuchsia-500 text-background font-bold">
                  <Hotel className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Aura Multi-Channel Reservation & OTA Engine</h4>
                  <p className="text-xs text-muted-foreground">Sub-100ms rate and inventory synchronization across Booking.com, Expedia, and Direct</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● Zero Double-Bookings Guarantee
              </span>
            </div>

            {/* CRS Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Live Booking Stream</span>
                <span className="font-mono text-[10px] text-muted-foreground">Haile Grand Resort Front Office</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    res: "RESERVATION #RES-90412 - Presidential Suite #804",
                    guest: "Mr. Marcus Vance (5 Nights)",
                    channel: "DIRECT WEBSITE • DIGITAL KEY ISSUED",
                    style: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30",
                  },
                  {
                    res: "RESERVATION #RES-90418 - Ocean Villa #14",
                    guest: "Elena Rostova (3 Nights)",
                    channel: "BOOKING.COM • AUTO-CONFIRMED",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                ].map((r) => (
                  <div key={r.res} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{r.res}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{r.guest}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${r.style}`}>
                        {r.channel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 3. Housekeeping OS Screen ── */}
        {activeTab === "housekeeping" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Housekeeping Grid Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <BedDouble className="h-3.5 w-3.5 text-fuchsia-400" /> Housekeeping Room Inspection Stream
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Resort Floor Management</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { room: "Suite #802", maid: "Cleaner Bethlehem", status: "CLEAN & INSPECTED", time: "Ready for Guest" },
                  { room: "Villa #10", maid: "Cleaner Solomon", status: "TURNDOWN IN PROGRESS", time: "ETA 10 min" },
                  { room: "Room #412", maid: "Cleaner Tigist", status: "CLEAN & INSPECTED", time: "Ready for Guest" },
                ].map((h) => (
                  <div key={h.room} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-fuchsia-400">{h.room}</span>
                      <div>
                        <p className="font-medium text-foreground">{h.status}</p>
                        <p className="text-[10px] text-muted-foreground">{h.maid}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                        {h.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 4. Guest Concierge & POS Screen ── */}
        {activeTab === "guest" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Guest Banner */}
            <div className="flex items-center justify-between rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-fuchsia-500 text-background font-bold">
                  <KeyRound className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Aura Guest Mobile Concierge & Dining POS</h4>
                  <p className="text-xs text-muted-foreground">Digital Bluetooth room key, in-room dining orders, direct folio charging</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 28% Higher Guest In-Room Spend
              </span>
            </div>

            {/* Guest Concierge Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Active Mobile Concierge Requests & Dining POS Charges</span>
                <span className="font-mono text-[10px] text-muted-foreground">Folio Sync Stream</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    item: "IN-ROOM DINING ORDER #POS-4029 - Fine Dining Steakhouse",
                    guest: "Suite #804 (Marcus Vance)",
                    amount: "$185.00 CHARGED TO FOLIO",
                    style: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30",
                  },
                  {
                    item: "SPA RESERVATION - Deep Tissue Massage (2 Persons)",
                    guest: "Villa #14 (Elena Rostova)",
                    amount: "$240.00 CHARGED TO FOLIO",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                ].map((g) => (
                  <div key={g.item} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{g.item}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{g.guest}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${g.style}`}>
                        {g.amount}
                      </span>
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

function AuraHospitalityPage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-fuchsia-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
                  Hospitality • Haile Grand / Skylight Instance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Aura Hospitality
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Hotel and resort management suite unifying reservations, front desk operations,
                room service, and guest messaging at enterprise scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["PMS", "POS", "Guest", "Node.js", "WebSockets"].map((tag) => (
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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-fuchsia-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/aura-hospitality.png"
                  alt="Aura Hospitality logo"
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
            description="Explore the live executive resort command dashboard, central reservation engine, housekeeping OS grid, and guest mobile concierge."
          />
          <div className="mt-12">
            <AuraHospitalityUiSnapshots />
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What Aura Hospitality Delivers"
            description="Six integrated modules that manage hotel and resort operations from booking to guest checkout and folio settlement."
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
            title="Built for High-Touch Resort Scale"
            description="Asynchronous event-driven architecture streaming real-time room status updates across guest apps and staff tablets."
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
              Node.js · PostgreSQL · Redis · WebSockets · Docker · React Native
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
            description="The core tenets behind the development of Aura Hospitality."
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
