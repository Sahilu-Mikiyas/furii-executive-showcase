import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/section-heading";
import { Play } from "lucide-react";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media & Production — FURII Studios" },
      {
        name: "description",
        content:
          "Cinematic commercial films, corporate videos, photography, motion graphics, and brand identity work by FURII.",
      },
      { property: "og:title", content: "Media & Production — FURII" },
      {
        property: "og:description",
        content: "Creative production for brands that value cinematic craft.",
      },
    ],
  }),
  component: MediaPage,
});

const categories = [
  { title: "Commercial Films", tag: "Cinematic", ratio: "aspect-[16/10]" },
  { title: "Corporate Videos", tag: "Brand", ratio: "aspect-[4/5]" },
  { title: "Photography", tag: "Editorial", ratio: "aspect-[16/10]" },
  { title: "Motion Graphics", tag: "Design", ratio: "aspect-[4/5]" },
  { title: "Drone Footage", tag: "Aerial", ratio: "aspect-[16/10]" },
  { title: "Brand Identity", tag: "Systems", ratio: "aspect-[4/5]" },
];

function MediaPage() {
  return (
    <div className="pt-32">
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow="Media & Production"
          title="Craft that moves brands."
          description="FURII's creative studio produces cinematic films, brand identities, and visual systems for organisations that value considered craft."
        />
      </section>

      <section className="container-page pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <figure
              key={c.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface ${c.ratio}`}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br"
                style={{
                  backgroundImage: `linear-gradient(135deg, hsl(${(i * 60) % 360} 30% 15%), hsl(${
                    (i * 60 + 30) % 360
                  } 25% 8%))`,
                }}
              />
              <div className="absolute inset-0 grid-bg opacity-[0.08]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-5 w-5 fill-white" />
                </div>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                    {c.tag}
                  </p>
                  <p className="mt-1 text-lg font-semibold tracking-tight">{c.title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
