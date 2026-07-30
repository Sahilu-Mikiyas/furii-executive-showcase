import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Truck,
  MapPin,
  Navigation,
  Fuel,
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
  Radio,
  FileCheck,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/vector-dispatch")({
  head: () => ({
    meta: [
      { title: "Vector Dispatch | Enterprise Logistics & Fleet Engine | FURII" },
      {
        name: "description",
        content:
          "Vector Dispatch is a high-concurrency logistics routing engine for real-time fleet tracking, automated dispatch, fuel optimization, and driver telemetry.",
      },
    ],
  }),
  component: VectorDispatchPage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "99.99%", label: "Fleet SLA" },
  { value: "4,800+", label: "Active Trucks" },
  { value: "<1 Sec", label: "Route Optimization" },
  { value: "18.5%", label: "Fuel Saved" },
];

const coreFeatures = [
  {
    icon: MapPin,
    title: "Real-Time GPS Fleet Tracking",
    description:
      "High-frequency PostGIS spatial tracking engine streaming vehicle coordinates, speed, idle time, and ignition status every second via WebSockets.",
  },
  {
    icon: Navigation,
    title: "AI Dynamic Route Optimization",
    description:
      "Multi-vehicle routing algorithm dynamically calculating optimal delivery paths based on live traffic, road weight limits, and delivery time windows.",
  },
  {
    icon: Fuel,
    title: "Fuel Consumption & Telematics",
    description:
      "Engine CAN-bus telematics reader monitoring real-time fuel burn rate, siphoning alerts, rapid acceleration events, and driver efficiency scores.",
  },
  {
    icon: Truck,
    title: "Automated Dispatch Engine",
    description:
      "Smart load assignment dispatching orders to the nearest available driver based on trailer capacity, license endorsements, and driver HOS (Hours of Service).",
  },
  {
    icon: FileCheck,
    title: "Digital Proof of Delivery (e-POD)",
    description:
      "Mobile driver workflow capturing customer e-signatures, geotagged cargo inspection photos, and automated delivery confirmation receipts.",
  },
  {
    icon: BarChart3,
    title: "Fleet Maintenance & Telematics",
    description:
      "Predictive vehicle maintenance scheduler tracking engine fault codes (DTC), tire pressure, oil service intervals, and brake wear.",
  },
];

const architecturePoints = [
  {
    icon: Server,
    title: "Elixir / BEAM Fault-Tolerant Engine",
    description: "Built on Erlang's BEAM virtual machine handling millions of concurrent WebSocket connections with nine-nines uptime reliability.",
  },
  {
    icon: Database,
    title: "PostGIS Spatial Database",
    description: "High-performance geospatial database executing complex spatial queries, polygon geofence checks, and road network routing.",
  },
  {
    icon: Zap,
    title: "Phoenix Real-Time WebSockets",
    description: "Sub-50ms latency WebSocket broadcast channel streaming live GPS location coordinates directly to dispatcher map screens.",
  },
  {
    icon: Lock,
    title: "Redis Geospatial Index",
    description: "In-memory geospatial cache maintaining real-time driver locations for sub-millisecond proximity search and dispatch matching.",
  },
];

const focusAreas = [
  {
    title: "Sub-Second Multi-Vehicle Route Calculation",
    description:
      "Calculates matrix distance tables and multi-stop vehicle routes for thousands of active delivery trucks in under 1 second.",
  },
  {
    title: "Zero-Downtime BEAM Architecture",
    description:
      "Leverages Elixir lightweight processes to ensure fleet telematics ingestion never halts during software updates or regional network outages.",
  },
  {
    title: "Automated Fuel Theft Prevention",
    description:
      "Cross-references fuel tank level sensors with GPS location and gas station payment logs to detect unauthorized fuel siphoning instantly.",
  },
  {
    title: "Offline Driver Mobile App",
    description:
      "Drivers complete deliveries and capture customer signatures offline in remote transit corridors, auto-syncing upon cellular reconnect.",
  },
];

const testimony = {
  quote:
    "Vector Dispatch transformed our national freight logistics operations. Managing over 4,800 heavy trucks across long-haul corridors used to mean constant blind spots and fuel waste. Vector's sub-second route optimization and real-time GPS telematics cut our fuel costs by 18.5% and pushed our on-time delivery rate to 96.4%.",
  name: "Ato Dawit Bekele",
  title: "Chief Logistics Officer",
  organization: "Ethiopian Shipping & Logistics / Velocity Transport",
  metric: "18.5% fuel cost reduction across 4,800+ trucks",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function VectorDispatchUiSnapshots() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "tracking" | "routing" | "pod" | "fleet-analytics" | "route-efficiency" | "driver-scoreboard">("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive Fleet Command", icon: LayoutDashboard },
    { id: "tracking", label: "GPS Telematics", icon: MapPin },
    { id: "routing", label: "AI Route Optimizer", icon: Navigation },
    { id: "pod", label: "Driver Mobile e-POD", icon: FileCheck },
    { id: "fleet-analytics", label: "Fleet Performance", icon: TrendingUp },
    { id: "route-efficiency", label: "Route Efficiency", icon: BarChart3 },
    { id: "driver-scoreboard", label: "Driver Scoreboard", icon: UserCheck },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-purple-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Vector Dispatch v6.2 • Velocity Transport Instance
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
        {/* ── 1. Executive Fleet Command Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Active Fleet Units</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">4,820</span>
                  <span className="text-[10px] font-mono text-purple-400 font-semibold">98.2% Active</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "98.2%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">On-Time Delivery Rate</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">96.4%</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">+12% Industry Avg</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "96.4%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Monthly Fuel Saved</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">$142,500</span>
                  <span className="text-[10px] font-mono text-purple-400 font-semibold">-18.5% Burn</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-purple-400 rounded-full" style={{ width: "88%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">PostGIS GPS Latency</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">&lt;50ms</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">Live WebSocket</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Regional Freight Corridors */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Truck className="h-3.5 w-3.5 text-purple-400" /> Active Freight Transport Corridors
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">Velocity Transport Fleet</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { route: "Corridor 01 - Djibouti Port to Addis Ababa", fleet: "1,420 Heavy Trucks", speed: "68 km/h Avg", status: "NORMAL FLOW" },
                    { route: "Corridor 02 - Mojo Dry Port to Hawassa", fleet: "890 Medium Trucks", speed: "72 km/h Avg", status: "NORMAL FLOW" },
                    { route: "Corridor 03 - Dire Dawa to Kombolcha", fleet: "640 Container Units", speed: "64 km/h Avg", status: "AI REROUTED" },
                  ].map((row) => (
                    <div key={row.route} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-purple-400">●</span>
                        <div>
                          <p className="font-medium text-foreground">{row.route}</p>
                          <p className="text-[10px] text-muted-foreground">{row.fleet}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-purple-400">
                          {row.speed}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time Telematics Stream */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Radio className="h-3.5 w-3.5 text-purple-400" /> Live Vehicle Telematics
                </span>
                <div className="space-y-3">
                  {[
                    { event: "Truck #TRK-8901 Entered Geofence", time: "1 sec ago", detail: "Mojo Dry Port Gate 4" },
                    { event: "Speed Optimization Alert", time: "12 sec ago", detail: "Truck #TRK-4012 • 70 km/h" },
                    { event: "e-POD Digital Signature", time: "38 sec ago", detail: "Order #DEL-90412" },
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

        {/* ── 2. Real-Time GPS & Map Telemetry Screen ── */}
        {activeTab === "tracking" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* GPS Banner */}
            <div className="flex items-center justify-between rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500 text-background font-bold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">PostGIS High-Frequency GPS Tracking Core</h4>
                  <p className="text-xs text-muted-foreground">Live vehicle coordinates, engine diagnostics, and geofence alerts broadcast via Phoenix WebSockets</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● Sub-50ms WebSocket Broadcast
              </span>
            </div>

            {/* GPS Vehicles Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Live Heavy Freight GPS Positions</span>
                <span className="font-mono text-[10px] text-muted-foreground">Djibouti - Addis Corridor</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    truck: "TRUCK #TRK-8901 - Volvo FH16 (40ft Container)",
                    driver: "Driver Solomon Tekle",
                    pos: "GPS: 8.9806° N, 38.7578° E • Speed: 68 km/h",
                    status: "ON ROUTE • FUEL OPTIMAL",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                  {
                    truck: "TRUCK #TRK-8905 - Scania R500 (Flatbed Steel)",
                    driver: "Driver Kebede Zeleke",
                    pos: "GPS: 9.0102° N, 38.8201° E • Speed: 65 km/h",
                    status: "ON ROUTE • FUEL OPTIMAL",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                ].map((t) => (
                  <div key={t.truck} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{t.truck}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.driver} • {t.pos}</p>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${t.style}`}>
                        {t.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 3. AI Dynamic Route Optimization Screen ── */}
        {activeTab === "routing" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Routing Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <Navigation className="h-3.5 w-3.5 text-purple-400" /> AI Dynamic Route Calculation Engine
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Sub-Second Matrix Routing</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { dispatch: "DISPATCH #DIS-9020 - 12 Stop Multimodal Delivery", dist: "480 km Route", time: "Sub-Second Calculated", status: "SAVED 42 KM (TRAFFIC BYPASS)" },
                  { dispatch: "DISPATCH #DIS-9024 - Heavy Machinery Transport", dist: "320 km Route", time: "Sub-Second Calculated", status: "SAVED 28 KM (WEIGHT COMPLIANT)" },
                ].map((r) => (
                  <div key={r.dispatch} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-purple-400">{r.dispatch.split(" ")[0]}</span>
                      <div>
                        <p className="font-medium text-foreground">{r.dispatch}</p>
                        <p className="text-[10px] text-muted-foreground">{r.dist} • {r.time}</p>
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

        {/* ── 4. Driver Mobile e-POD Screen ── */}
        {activeTab === "pod" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* e-POD Banner */}
            <div className="flex items-center justify-between rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500 text-background font-bold">
                  <FileCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Vector Driver Mobile e-POD & Signature App</h4>
                  <p className="text-xs text-muted-foreground">Digital Proof of Delivery, geotagged cargo photos, instant driver settlement</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 100% Digital POD Verification
              </span>
            </div>

            {/* e-POD Log Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Recent Digital Proof of Deliveries</span>
                <span className="font-mono text-[10px] text-muted-foreground">Mojo Logistics Hub</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    pod: "DELIVERY #DEL-90412 - 40ft Container (Electronics)",
                    consignee: "Shoppers Mart Logistics Depot",
                    status: "DELIVERED • E-SIGNATURE VERIFIED",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                ].map((p) => (
                  <div key={p.pod} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{p.pod}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{p.consignee}</p>
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
        {/* ── 5. Fleet Performance Analytics Screen ── */}
        {activeTab === "fleet-analytics" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Fleet Banner */}
            <div className="flex items-center justify-between rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500 text-background font-bold">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Fleet Performance Analytics</h4>
                  <p className="text-xs text-muted-foreground">Truck utilization rates, idle time trends, and vehicle availability</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● Utilization +8.4%
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Truck Utilization Bar Chart */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <TrendingUp className="h-3.5 w-3.5 text-purple-400" /> Truck Utilization by Corridor
                </span>
                <div className="flex h-32 items-end gap-3 border-b border-border/40 pb-2">
                  {[
                    { label: "Corridor 1", value: 92, height: "92%" },
                    { label: "Corridor 2", value: 85, height: "85%" },
                    { label: "Corridor 3", value: 78, height: "78%" },
                    { label: "Corridor 4", value: 88, height: "88%" },
                    { label: "Corridor 5", value: 95, height: "95%" },
                  ].map((bar) => (
                    <div key={bar.label} className="flex flex-1 flex-col items-center justify-end group">
                      <span className="text-[10px] font-mono mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{bar.value}%</span>
                      <div className="w-full max-w-[32px] rounded-t-md bg-gradient-to-t from-purple-600 to-purple-400" style={{ height: bar.height }} />
                      <span className="mt-2 text-[9px] font-mono text-muted-foreground">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehicle Availability Donut & Metrics */}
              <div className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Truck className="h-3.5 w-3.5 text-purple-400" /> Vehicle Availability
                  </span>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="relative h-16 w-16 rounded-full" style={{ background: "conic-gradient(#a855f7 85%, #6366f1 10%, #27272a 0)" }}>
                      <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                        <span className="text-xs font-bold">85%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-purple-400">■ Active (85%)</p>
                      <p className="text-[10px] font-mono text-indigo-400 mt-1">■ Maint. (10%)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/40">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Avg Idle Time</p>
                  <p className="text-lg font-bold text-foreground mt-1">1.2 Hrs/Day <span className="text-xs font-normal text-emerald-400">↓ 15%</span></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 6. Route Efficiency Dashboard Screen ── */}
        {activeTab === "route-efficiency" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Route Banner */}
            <div className="flex items-center justify-between rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500 text-background font-bold">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Route Efficiency Dashboard</h4>
                  <p className="text-xs text-muted-foreground">On-time delivery performance, AI route savings, and traffic delays</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 14,200 km Saved
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* On-Time Delivery Bar Chart */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <BarChart3 className="h-3.5 w-3.5 text-purple-400" /> On-Time Delivery by Route (%)
                </span>
                <div className="flex h-32 items-end gap-3 border-b border-border/40 pb-2">
                  {[
                    { label: "North", value: 96, height: "96%" },
                    { label: "South", value: 92, height: "92%" },
                    { label: "East", value: 88, height: "88%" },
                    { label: "West", value: 94, height: "94%" },
                    { label: "Central", value: 98, height: "98%" },
                  ].map((bar) => (
                    <div key={bar.label} className="flex flex-1 flex-col items-center justify-end group">
                      <span className="text-[10px] font-mono mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{bar.value}%</span>
                      <div className="w-full max-w-[32px] rounded-t-md bg-gradient-to-t from-indigo-500 to-purple-500" style={{ height: bar.height }} />
                      <span className="mt-2 text-[9px] font-mono text-muted-foreground">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimization Savings Donut */}
              <div className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Database className="h-3.5 w-3.5 text-purple-400" /> AI Route Savings
                  </span>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="relative h-16 w-16 rounded-full" style={{ background: "conic-gradient(#10b981 75%, #27272a 0)" }}>
                      <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                        <span className="text-xs font-bold text-emerald-400">75%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-muted-foreground">Optimal Routes</p>
                      <p className="text-[10px] font-mono text-muted-foreground mt-1">Generated</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/40">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Avg Traffic Delay</p>
                  <p className="text-lg font-bold text-foreground mt-1">22 Mins <span className="text-xs font-normal text-emerald-400">↓ 8 Mins</span></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 7. Driver Scoreboard Screen ── */}
        {activeTab === "driver-scoreboard" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Driver Banner */}
            <div className="flex items-center justify-between rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500 text-background font-bold">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Driver Scoreboard</h4>
                  <p className="text-xs text-muted-foreground">Driver efficiency rankings, safety score distribution, and HOS compliance</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● Fleet Safety 96/100
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Driver Rankings Horizontal Bars */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-4">
                  <UserCheck className="h-3.5 w-3.5 text-purple-400" /> Top Driver Efficiency Rankings
                </span>
                <div className="space-y-4">
                  {[
                    { label: "Driver 1042 (Solomon)", score: 98, width: "98%", color: "bg-emerald-500" },
                    { label: "Driver 8091 (Dawit)", score: 95, width: "95%", color: "bg-purple-500" },
                    { label: "Driver 3301 (Abebe)", score: 91, width: "91%", color: "bg-indigo-400" },
                    { label: "Driver 9912 (Kebede)", score: 88, width: "88%", color: "bg-violet-400" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-1.5">
                        <span>{item.label}</span>
                        <span>{item.score} Score</span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-border overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: item.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* HOS Compliance Donut */}
              <div className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                    <Clock className="h-3.5 w-3.5 text-purple-400" /> HOS Compliance
                  </span>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="relative h-16 w-16 rounded-full" style={{ background: "conic-gradient(#10b981 99%, #ef4444 1%)" }}>
                      <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                        <span className="text-xs font-bold text-emerald-400">99.1%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-muted-foreground">Hours of Service</p>
                      <p className="text-[10px] font-mono text-emerald-400 mt-1">Compliant</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/40">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground">Avg Fuel Efficiency</p>
                  <p className="text-lg font-bold text-foreground mt-1">3.4 km/L <span className="text-xs font-normal text-emerald-400">+0.2 km/L</span></p>
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

function VectorDispatchPage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-purple-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
                  Logistics • ESL / Velocity Transport Instance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Vector Dispatch
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Logistics routing engine for real-time fleet tracking, automated dispatch,
                fuel optimization, and driver telemetry at national scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Fleet", "Routing", "Telematics", "Elixir", "PostGIS"].map((tag) => (
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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-purple-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/vector-dispatch.png"
                  alt="Vector Dispatch logo"
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
            description="Explore the live executive fleet command dashboard, PostGIS high-frequency GPS tracking core, AI dynamic route optimizer, and driver mobile e-POD app."
          />
          <div className="mt-12">
            <VectorDispatchUiSnapshots />
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What Vector Dispatch Delivers"
            description="Six integrated modules that automate freight dispatching, vehicle GPS tracking, fuel management, and driver electronic proof of delivery."
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
            title="Built for High-Concurrency Fleet Scale"
            description="Fault-tolerant Elixir/BEAM architecture streaming real-time GPS locations from thousands of trucks simultaneously."
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
              Elixir · Phoenix · PostGIS · WebSockets · Redis · Docker
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
            description="The core tenets behind the development of Vector Dispatch."
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
