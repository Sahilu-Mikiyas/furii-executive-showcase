import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/section-heading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's Build the Future Together" },
      {
        name: "description",
        content: "Start a conversation with FURII. Enterprise software, AI workflows, and creative production.",
      },
      { property: "og:title", content: "Contact FURII" },
      { property: "og:description", content: "Let's build the future together." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32">
      <section className="container-page pb-16">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build the future together."
          description="Tell us about your organisation and what you're building. We'll respond within two business days."
        />
      </section>

      <section className="container-page pb-32">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-border bg-card p-8 md:p-10"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  Message received
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Thank you. We'll be in touch.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  A member of the FURII team will reach out shortly.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                <Field label="Name" name="name" placeholder="Your full name" />
                <Field label="Company" name="company" placeholder="Organisation" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                <div>
                  <Label>Project Type</Label>
                  <select className="mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary">
                    <option>Enterprise Platform</option>
                    <option>AI Integration</option>
                    <option>Architecture Consulting</option>
                    <option>Media & Production</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <Label>Message</Label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about the problem you'd like to solve."
                    className="mt-2 w-full resize-none rounded-md border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-95"
                >
                  Schedule a Meeting
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                Direct
              </p>
              <p className="mt-3 text-lg font-medium">hello@furii.co</p>
              <p className="mt-1 text-sm text-muted-foreground">
                For partnerships, engineering, and press.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                Elsewhere
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Social href="mailto:hello@furii.co" icon={Mail} label="hello@furii.co" />
                <Social href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
                <Social href="https://github.com" icon={Github} label="GitHub" />
              </div>
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
        className="mt-2 w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle focus:border-primary"
      />
    </div>
  );
}

function Social({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
    >
      <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-background transition-colors group-hover:border-primary group-hover:text-primary">
        <Icon className="h-4 w-4" />
      </span>
      {label}
    </a>
  );
}
