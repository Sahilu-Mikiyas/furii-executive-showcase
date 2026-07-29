import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Systems",
    links: [
      { to: "/systems", label: "Enterprise Platforms" },
      { to: "/architecture", label: "Architecture" },
      { to: "/ai", label: "AI Workflows" },
      { to: "/media", label: "Media & Production" },
    ],
  },
  {
    title: "Navigation",
    links: [
      { to: "/", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/contact", label: "Privacy" },
      { to: "/contact", label: "Terms" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="group flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-[12px] font-mono font-bold tracking-tight text-background shadow-sm transition-transform duration-200 group-hover:scale-105">
                MS
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[16px] font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  Mikiyas Sahilu
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">
                  CTO & Enterprise Architect
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Intelligent, beautifully engineered enterprise software platforms and AI workflows built for organisations that demand excellence.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium uppercase tracking-widest text-subtle">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="font-mono text-xs text-subtle">
            © {new Date().getFullYear()} Mikiyas Sahilu. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="https://linkedin.com" className="hover:text-foreground">
              LinkedIn
            </a>
            <a href="https://github.com" className="hover:text-foreground">
              GitHub
            </a>
            <a href="mailto:hello@furii.co" className="hover:text-foreground">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
