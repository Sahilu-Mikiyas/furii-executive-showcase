import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/section-heading";
import founderAsset from "../assets/founder.png.asset.json";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Mikiyas Sahilu — CTO & Co-Founder, FURII" },
      {
        name: "description",
        content:
          "Mikiyas Sahilu is the CTO & Co-Founder of FURII, building intelligent enterprise software and AI-powered workflows.",
      },
      { property: "og:title", content: "Mikiyas Sahilu — CTO & Co-Founder, FURII" },
      {
        property: "og:description",
        content:
          "Engineering discipline, product thinking, AI innovation, and design excellence in one cohesive vision.",
      },
      { property: "og:image", content: founderAsset.url },
      { name: "twitter:image", content: founderAsset.url },
    ],
  }),
  component: FounderPage,
});

const timeline = [
  { year: "Origins", label: "Student" },
  { year: "Craft", label: "Software Engineer" },
  { year: "Systems", label: "Product Builder" },
  { year: "Company", label: "Co-Founder" },
  { year: "Today", label: "CTO, FURII" },
];

const pillars = [
  {
    title: "Leadership Philosophy",
    body: "Empower engineers to think like owners. Ship with taste. Optimise for long-term compounding, not short-term applause.",
  },
  {
    title: "Engineering Philosophy",
    body: "Simplicity scales. Clear boundaries beat clever code. Every system should be understandable a year from now.",
  },
  {
    title: "Vision",
    body: "Enterprise software that feels like consumer software — intelligent, elegant, effortless.",
  },
  {
    title: "Core Values",
    body: "Precision. Intentionality. Respect for the user. Engineering excellence as a form of care.",
  },
];

function FounderPage() {
  return (
    <div className="pt-32">
      <section className="container-page pb-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Founder
            </p>
            <h1 className="mt-3 text-balance text-5xl font-bold tracking-tight md:text-6xl">
              Mikiyas Sahilu
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              CTO & Co-Founder, FURII
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Mikiyas leads engineering, architecture, and applied AI at FURII — designing
              platforms that quietly run the operations of hospitals, schools, governments,
              and enterprises. His work sits at the intersection of engineering discipline,
              product thinking, and cinematic design.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface">
              <img
                src={founderAsset.url}
                alt="Mikiyas Sahilu, CTO & Co-Founder of FURII"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-surface py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Journey" title="From student to CTO." />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
            {timeline.map((t, i) => (
              <li key={t.label} className="bg-card p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-subtle">
                  Step {i + 1} · {t.year}
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight">{t.label}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-page py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
