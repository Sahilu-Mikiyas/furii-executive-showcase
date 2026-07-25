import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/section-heading";
import { SystemCard } from "../components/system-card";
import { systems } from "../lib/systems";

export const Route = createFileRoute("/systems")({
  head: () => ({
    meta: [
      { title: "Systems — FURII Enterprise Platforms" },
      {
        name: "description",
        content:
          "Twelve enterprise platforms engineered by FURII — from healthcare and education to logistics and government.",
      },
      { property: "og:title", content: "FURII Systems — Enterprise Platforms" },
      {
        property: "og:description",
        content: "Explore FURII's portfolio of enterprise platforms.",
      },
    ],
  }),
  component: SystemsPage,
});

function SystemsPage() {
  return (
    <div className="pt-32">
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow="Enterprise Systems"
          title="Platforms built to run organisations."
          description="Each system solves a category of enterprise operations end-to-end — with shared architecture, security, and AI foundations."
        />
      </section>
      <section className="container-page pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((s) => (
            <SystemCard key={s.slug} s={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
