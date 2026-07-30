import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import { MonogramMenu } from "../components/monogram-menu";
import { SiteFooter } from "../components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Error 404</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground">Page not found</h1>
        <p className="mt-3 text-base text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-foreground border border-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-500 ease-out hover:bg-background hover:text-foreground"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-foreground border border-foreground px-4 py-2 text-sm font-medium text-background transition-all duration-500 ease-out hover:bg-background hover:text-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all duration-500 ease-out hover:bg-foreground hover:text-background"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-dvh flex-col bg-background text-foreground overflow-x-hidden">
        {/* Luxury Background Brand Watermark "FURII" */}
        <div
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
          aria-hidden="true"
        >
          <span className="absolute -top-12 -right-8 font-mono text-[24vw] sm:text-[20vw] font-black uppercase leading-none tracking-tighter text-foreground/[0.035]">
            FURII
          </span>
          <span className="absolute top-[48%] -left-12 font-mono text-[22vw] sm:text-[18vw] font-black uppercase leading-none tracking-tighter text-foreground/[0.025]">
            FURII
          </span>
        </div>

        <MonogramMenu />
        <main className="relative z-10 flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
