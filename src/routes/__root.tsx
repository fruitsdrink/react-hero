import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        name: "description",
        content: "React Hero, Motion, Framer Motion, React Router"
      },
      {
        title: "React Hero"
      }
    ]
  }),
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
});
