import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/section-heading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Mikiyas Sahilu" },
      {
        name: "description",
        content: "Start a conversation. Enterprise software, AI workflows, and software architecture.",
      },
      { property: "og:title", content: "Contact | Mikiyas Sahilu" },
      { property: "og:description", content: "Let's build the future together." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32">
      <section className="container-page pb-12 sm:pb-16">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build the future together."
          description="Tell us about your organisation and what you're building. We'll respond within two business days."
        />
      </section>

      <section className="container-page pb-24 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-sm"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  Message received
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Thank you. We'll be in touch.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Our team will reach out shortly.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                <Field label="Name" name="name" placeholder="Your full name" />
                <Field label="Company" name="company" placeholder="Organisation" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                <div>
                  <Label>Project Type</Label>
                  <select className="mt-2 w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-all duration-300 ease-in-out focus:border-foreground">
                    <option>Enterprise Platform</option>
                    <option>AI Integration</option>
                    <option>Architecture Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <Label>Message</Label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about the problem you'd like to solve."
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-all duration-300 ease-in-out focus:border-foreground"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground border border-foreground px-5 py-3 text-sm font-medium text-background transition-all duration-300 ease-in-out hover:bg-background hover:text-foreground hover:border-foreground hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
                >
                  Schedule a Meeting
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 transition-all duration-300 ease-in-out hover:border-foreground/20 hover:shadow-md">
              <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                Direct Contact
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="mailto:furiimotionlabsceo@outlook.com"
                  className="group flex items-center gap-3 text-sm font-medium text-foreground transition-colors duration-300 hover:text-foreground/80"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-background transition-all duration-300 ease-in-out group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="break-all">furiimotionlabsceo@outlook.com</span>
                </a>
                <a
                  href="tel:+251909312671"
                  className="group flex items-center gap-3 text-sm font-medium text-foreground transition-colors duration-300 hover:text-foreground/80"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-background transition-all duration-300 ease-in-out group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>+251 909 312 671</span>
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Click to send an email directly or call now.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-all duration-300 ease-in-out placeholder:text-subtle focus:border-foreground"
      />
    </div>
  );
}
