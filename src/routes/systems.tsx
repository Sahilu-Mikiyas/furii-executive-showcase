import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/systems")({
  component: SystemsLayout,
});

function SystemsLayout() {
  return <Outlet />;
}
