import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/section-heading";
import { Building2, GraduationCap, Users, Home, Landmark } from "lucide-react";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI — Embedded Into Every Workflow" },
      {
        name: "description",
        content:
          "FURII embeds AI as integrated workflows — not chatbots — across healthcare, education, HR, real estate, and government platforms.",
      },
      { property: "og:title", content: "AI Workflows — FURII" },
      {
        property: "og:description",
        content: "AI embedded into every enterprise workflow.",
      },
    ],
  }),
  component: AIPage,
});

const domains = [
  {
    icon: Building2,
    domain: "Hospital",
    items: [
      "Patient Summary",
      "Diagnosis Assistance",
      "Medical Timeline",
      "Prescription Review",
    ],
  },
  {
    icon: GraduationCap,
    domain: "School",
    items: [
      "Performance Insights",
      "Attendance Prediction",
      "Parent Report Generation",
    ],
  },
  {
    icon: Users,
    domain: "HR",
    items: ["Resume Screening", "Employee Analytics", "Training Recommendations"],
  },
  {
    icon: Home,
    domain: "Property",
    items: ["Lease Summary", "Maintenance Prediction"],
  },
  {
    icon: Landmark,
    domain: "Government",
    items: ["Document Intelligence", "Citizen Service Assistant"],
  },
];

function AIPage() {
  return (
    <div className="pt-32">
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow="Applied AI"
          title="AI embedded into every workflow."
          description="Not a chatbot. AI is woven into the systems people already use — quietly making them faster, more accurate, and more insightful."
        />
      </section>

      <section className="container-page pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            <div
              key={d.domain}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{d.domain}</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {d.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
