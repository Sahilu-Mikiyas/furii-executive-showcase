import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  ShoppingBag,
  ShoppingCart,
  Zap,
  Store,
  CreditCard,
  Brain,
  Database,
  Server,
  Lock,
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
  Package,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { ContactCtaBanner } from "../components/contact-cta-banner";

export const Route = createFileRoute("/systems/velox-commerce")({
  head: () => ({
    meta: [
      { title: "Velox Commerce | High-Throughput Retail & POS Platform | FURII" },
      {
        name: "description",
        content:
          "Velox Commerce is a high-throughput retail management engine integrating point-of-sale, real-time inventory, and customer intelligence.",
      },
    ],
  }),
  component: VeloxCommercePage,
});

/* ─── Data ─── */

const heroStats = [
  { value: "<50ms", label: "Checkout Latency" },
  { value: "2.5M+", label: "Daily Transactions" },
  { value: "100%", label: "Offline Resilience" },
  { value: "4.2x", label: "Faster Checkout" },
];

const coreFeatures = [
  {
    icon: ShoppingCart,
    title: "Offline-First POS Engine",
    description:
      "Ultra-fast terminal checkout interface built in Rust that processes transactions locally in milliseconds during internet outages, syncing automatically when online.",
  },
  {
    icon: Package,
    title: "Real-Time Inventory Sync",
    description:
      "Sub-second multi-location stock synchronization preventing overselling across physical retail branches, e-commerce storefronts, and central warehouses.",
  },
  {
    icon: Brain,
    title: "AI Customer Loyalty & Insights",
    description:
      "Personalized checkout promotion engine analyzing customer purchase history to deliver real-time targeted discounts and loyalty points.",
  },
  {
    icon: Store,
    title: "Omnichannel Order Routing",
    description:
      "Unified order fulfillment pipeline supporting buy-online-pickup-in-store (BOPIS), ship-from-store, and automated local delivery dispatching.",
  },
  {
    icon: CreditCard,
    title: "Multi-Tender Payment Gateway",
    description:
      "Native integration with barcode scanners, receipt printers, card readers, contact-less mobile wallets, and cash drawer hardware.",
  },
  {
    icon: BarChart3,
    title: "Retail Margin & Peak Analytics",
    description:
      "Real-time sales velocity dashboards tracking gross margins, top-selling SKUs, peak hourly foot-traffic trends, and store manager performance metrics.",
  },
];

const architecturePoints = [
  {
    icon: Server,
    title: "Rust Core POS Engine",
    description: "Memory-safe high-speed execution core providing sub-50ms transaction processing and zero garbage collection pauses.",
  },
  {
    icon: Database,
    title: "Redis Cluster Cache",
    description: "In-memory database distributing price books, product catalogs, and barcode lookups to edge registers globally.",
  },
  {
    icon: Zap,
    title: "Local SQLite Embedded DB",
    description: "Embedded local store database on every POS terminal ensuring zero downtime even if regional internet connectivity fails completely.",
  },
  {
    icon: Lock,
    title: "PCI-DSS Level 1 Security",
    description: "Bank-grade payment card encryption, tokenized customer transaction storage, and tamper-proof register audit trails.",
  },
];

const focusAreas = [
  {
    title: "Sub-50ms Checkout Latency",
    description:
      "Engineered to eliminate register queue delays by compiling critical transaction logic down to native Rust machine code.",
  },
  {
    title: "True Offline Resilience",
    description:
      "Registers process cash, offline cards, and local barcodes without network dependency, synchronizing conflict-free when reconnection occurs.",
  },
  {
    title: "Real-Time Multi-Branch Stock Tracking",
    description:
      "Instantly reflects stock deductions across all regional stores the moment an item barcode is scanned at any register.",
  },
  {
    title: "Automated Supplier Reordering",
    description:
      "Triggers automated purchase orders to suppliers when inventory drops below safety stock levels, preventing stockouts.",
  },
];

const testimony = {
  quote:
    "Velox Commerce completely transformed our retail operations across 120 supermarket locations. During peak holiday shopping rushes, our checkout lines moved 4.2x faster, and when an ISP fiber line was severed at three major branches, our registers kept scanning and processing without missing a single beat.",
  name: "Kebede Zeleke",
  title: "Chief Operating Officer",
  organization: "Kaldi's Retail / Shoppers Mart Supermarkets",
  metric: "4.2x faster checkout speed",
};

/* ─── Animated stagger helper ─── */

function stagger(index: number) {
  return {
    animationDelay: `${index * 120}ms`,
  };
}

/* ─── UI Snapshots Mock Component ─── */

function VeloxCommerceUiSnapshots() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "pos" | "inventory" | "loyalty">("dashboard");

  const tabs = [
    { id: "dashboard", label: "Executive Command", icon: LayoutDashboard },
    { id: "pos", label: "Offline-First POS", icon: ShoppingCart },
    { id: "inventory", label: "Multi-Store Inventory", icon: Package },
    { id: "loyalty", label: "AI Loyalty & Promo", icon: Brain },
  ] as const;

  return (
    <div className="rounded-[28px] border border-border bg-card p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Top Header & Tab Bar */}
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-pink-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Velox Commerce v6.2 • Shoppers Mart Instance
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
        {/* ── 1. Executive Retail Command Screen ── */}
        {activeTab === "dashboard" && (
          <div className="min-w-[640px] space-y-6 animate-fade-in">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Daily Gross Volume</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">$8.42M</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">+18.4% vs Avg</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: "88%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Transactions Processed</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">142,800</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">120 Branches</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "95%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Avg Checkout Speed</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">18.4s</span>
                  <span className="text-[10px] font-mono text-rose-400 font-semibold">4.2x Faster</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-rose-400 rounded-full" style={{ width: "98%" }} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-3.5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground">Active POS Terminals</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">480 Terminals</span>
                  <span className="text-[10px] font-mono text-emerald-500 font-semibold">100% Online</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            {/* Dashboard Middle Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Store Branch Sales Leaderboard */}
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                    <Store className="h-3.5 w-3.5 text-rose-400" /> Regional Supermarket Branches
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">Live Retail Stream</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { branch: "Shoppers Mart - Bole Main Branch", tx: "14,200 Checkout Tx", gv: "$1.85M Sales", status: "Sub-50ms Sync" },
                    { branch: "Shoppers Mart - Kazanchis Hub", tx: "11,800 Checkout Tx", gv: "$1.42M Sales", status: "Sub-50ms Sync" },
                    { branch: "Shoppers Mart - Sarbet Superstore", tx: "9,400 Checkout Tx", gv: "$1.15M Sales", status: "Sub-50ms Sync" },
                  ].map((row) => (
                    <div key={row.branch} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-rose-400">●</span>
                        <div>
                          <p className="font-medium text-foreground">{row.branch}</p>
                          <p className="text-[10px] text-muted-foreground">{row.tx}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-md bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-rose-400">
                          {row.gv}
                        </span>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{row.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time Transaction Log */}
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2 mb-3">
                  <ShoppingCart className="h-3.5 w-3.5 text-rose-400" /> Live Register Stream
                </span>
                <div className="space-y-3">
                  {[
                    { event: "Register #04 - Bole Branch", time: "1 sec ago", detail: "Items: 14 • Total: $142.50" },
                    { event: "Register #12 - Kazanchis", time: "3 sec ago", detail: "Items: 6 • Total: $48.00" },
                    { event: "Register #08 - Sarbet Branch", time: "5 sec ago", detail: "Items: 22 • Total: $285.10" },
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

        {/* ── 2. Offline-First POS Screen ── */}
        {activeTab === "pos" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* POS Terminal Header */}
            <div className="flex items-center justify-between rounded-xl border border-rose-500/20 bg-rose-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-rose-500 text-background font-bold">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Velox Rust POS Edge Terminal #04</h4>
                  <p className="text-xs text-muted-foreground">Embedded SQLite local database • Zero network latency dependence</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● Local Embedded DB Ready (0ms Latency)
              </span>
            </div>

            {/* Terminal Cart View */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between mb-3 border-b border-border pb-2">
                  <span className="text-xs font-semibold text-foreground">Active Checkout Cart — Customer #8902</span>
                  <span className="font-mono text-[10px] text-rose-400">Barcode Scanner Active</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { sku: "SKU-88201", item: "Organic Whole Milk 1L", qty: "2x", price: "$4.50", total: "$9.00" },
                    { sku: "SKU-44021", item: "Fresh Roasted Coffee Beans 500g", qty: "1x", price: "$14.00", total: "$14.00" },
                    { sku: "SKU-11920", item: "Artisanal Sourdough Bread", qty: "2x", price: "$5.50", total: "$11.00" },
                  ].map((i) => (
                    <div key={i.sku} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                      <div>
                        <span className="font-mono font-bold text-rose-400">{i.sku}</span>
                        <p className="font-medium text-foreground">{i.item}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-xs font-bold text-foreground">{i.total}</span>
                        <p className="text-[10px] text-muted-foreground">{i.qty} @ {i.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Action Widget */}
              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <span className="text-xs font-semibold text-foreground border-b border-border pb-2 block">
                  Payment Calculation
                </span>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal:</span>
                    <span>$34.00</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax (15% VAT):</span>
                    <span>$5.10</span>
                  </div>
                  <div className="flex justify-between font-bold text-foreground text-sm pt-2 border-t border-border">
                    <span>Total Due:</span>
                    <span className="text-rose-400">$39.10</span>
                  </div>
                </div>
                <button className="w-full mt-3 rounded-lg bg-foreground text-background py-2 text-xs font-bold transition-transform active:scale-95">
                  COMPLETE CHECKOUT (RUST 12ms)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── 3. Multi-Store Inventory Screen ── */}
        {activeTab === "inventory" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Inventory Overview */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Total SKUs Monitored</span>
                <p className="text-2xl font-bold text-foreground mt-1">42,500 SKUs</p>
                <p className="text-[10px] font-mono text-emerald-400 mt-1">100% Real-Time Sync</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Low-Stock Alert Triggered</span>
                <p className="text-2xl font-bold text-rose-400 mt-1">8 Items</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">Auto Purchase Order Sent</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <span className="text-[10px] font-mono uppercase text-muted-foreground">Inter-Store Transfer Orders</span>
                <p className="text-2xl font-bold text-emerald-400 mt-1">12 Active</p>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">In Transit Between Hubs</p>
              </div>
            </div>

            {/* Inventory Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <Package className="h-3.5 w-3.5 text-rose-400" /> Multi-Branch Stock Matrix
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Central Inventory Hub</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { sku: "SKU-9901", item: "Organic Extra Virgin Olive Oil 750ml", Bole: "140 units", Kazanchis: "85 units", status: "In Stock" },
                  { sku: "SKU-9904", item: "Premium Dark Chocolate Bar 100g", Bole: "12 units", Kazanchis: "4 units", status: "Low Stock Alert" },
                  { sku: "SKU-9908", item: "Fresh Espresso Beans 1kg", Bole: "310 units", Kazanchis: "240 units", status: "In Stock" },
                ].map((s) => (
                  <div key={s.sku} className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-2.5 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-rose-400">{s.sku}</span>
                      <div>
                        <p className="font-medium text-foreground">{s.item}</p>
                        <p className="text-[10px] text-muted-foreground">Bole: {s.Bole} • Kazanchis: {s.Kazanchis}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-md border px-2 py-0.5 font-mono text-[10px] font-semibold ${
                        s.status.includes("Low") ? "bg-rose-500/10 text-rose-400 border-rose-500/30" : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      }`}>
                        {s.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 4. AI Loyalty & Promo Screen ── */}
        {activeTab === "loyalty" && (
          <div className="min-w-[640px] space-y-5 animate-fade-in">
            {/* Loyalty Banner */}
            <div className="flex items-center justify-between rounded-xl border border-rose-500/20 bg-rose-500/5 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-rose-500 text-background font-bold">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Velox AI Recommendation & Loyalty Engine</h4>
                  <p className="text-xs text-muted-foreground">Personalized checkout promo recommendations & points redemption</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                ● 24.8% Higher Basket Size
              </span>
            </div>

            {/* Customer Loyalty Table */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-semibold text-foreground">Active Customer VIP Profiles & Recommendations</span>
                <span className="font-mono text-[10px] text-muted-foreground">Checkout AI Engine</span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    cust: "Tewodros Kassaye",
                    tier: "VIP GOLD MEMBER",
                    pts: "4,250 PTS",
                    promo: "AI MATCH: 15% Off Artisanal Coffee (Based on frequent buys)",
                    style: "bg-rose-500/10 text-rose-400 border-rose-500/30",
                  },
                  {
                    cust: "Bethlehem Worku",
                    tier: "PLATINUM MEMBER",
                    pts: "8,900 PTS",
                    promo: "AI MATCH: Free Organic Dairy Coupon Applied",
                    style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                  },
                ].map((c) => (
                  <div key={c.cust} className="flex items-center justify-between rounded-lg border border-border/80 bg-surface/50 p-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{c.cust}</span>
                        <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono font-semibold ${c.style}`}>
                          {c.tier}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-rose-400 mt-1">{c.promo}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs font-bold text-foreground">{c.pts}</p>
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

function VeloxCommercePage() {
  return (
    <div className="min-h-dvh">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-rose-500/5 via-background to-background px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
                  Retail • Kaldi's / Shoppers Mart Instance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Velox Commerce
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                High-throughput retail management engine integrating point-of-sale, real-time inventory,
                and customer intelligence at enterprise scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["POS", "Inventory", "Omni", "Rust", "Redis"].map((tag) => (
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
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[32px] border border-border bg-gradient-to-br from-rose-500/10 to-transparent p-6 shadow-lg">
                <img
                  src="/logos/velox-commerce.png"
                  alt="Velox Commerce logo"
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
            description="Explore the live executive retail command dashboard, Rust offline-first checkout terminal, multi-store inventory matrix, and AI recommendation engine."
          />
          <div className="mt-12">
            <VeloxCommerceUiSnapshots />
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            tag="Capabilities"
            title="What Velox Commerce Delivers"
            description="Six integrated modules that manage retail operations from point-of-sale registers to multi-store inventory and customer loyalty."
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
            title="Built for High-Throughput Retail"
            description="Ultra-low latency Rust core compiled for edge devices and distributed cloud sync."
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
              Rust · Redis Cluster · SQLite · Edge Nodes · WebSockets · Docker
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
            description="The core tenets behind the development of Velox Commerce."
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
