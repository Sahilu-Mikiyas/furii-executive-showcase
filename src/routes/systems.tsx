import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/section-heading";
import { SystemCard } from "../components/system-card";
import { systems } from "../lib/systems";

export const Route = createFileRoute("/systems")({
  head: () => ({
    meta: [
      { title: "Enterprise Platforms | Mikiyas Sahilu" },
      {
        name: "description",
        content:
          "Twelve enterprise platforms engineered for scale: from healthcare and education to logistics and government.",
      },
      { property: "og:title", content: "Enterprise Platforms | Mikiyas Sahilu" },
      {
        property: "og:description",
        content: "Portfolio of enterprise software platforms.",
      },
    ],
  }),
  component: SystemsPage,
});

function SystemsPage() {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32">
      <section className="container-page pb-12 sm:pb-16">
        <SectionHeading
          eyebrow="Enterprise Systems"
          title="Platforms built to run organisations."
          description="Each system solves a category of enterprise operations end-to-end with shared architecture, security, and AI foundations."
        />
      </section>
      <section className="container-page pb-24 sm:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s) => (
            <SystemCard key={s.slug} s={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
