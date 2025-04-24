import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Page } from "../components/layout/Page";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        name: "description",
        content: "React Hero, Motion, Framer Motion, React Router",
      },
      {
        title: "React Hero",
      },
    ],
  }),
  component: () => (
    <>
      <HeadContent />
      <Page>
        <Outlet />
      </Page>
      <TanStackRouterDevtools />
    </>
  ),
});
