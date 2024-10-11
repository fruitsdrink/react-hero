import LazyLoad from "@/utils/LazyLoad";
import { RouteObject } from "react-router-dom";

type Route = RouteObject & {
  page: string;
  meta?: {
    title: string;
    desc?: string;
    url?: string;
    showOnHome?: boolean;
    tags?: string[];
    docs?: { title: string; url: string }[];
  };
  children?: Route[];
};

const staticRoutes: Route[] = [
  {
    path: "/day001",
    page: "/day001/index",
    meta: {
      title: "day001",
      desc: "Build a Form with Validation using Shadcn/ui - Step by Step",
      url: "https://youtu.be/LeWhCsQk1PM?si=80Y_fDKRDhwMB6JO",
      tags: ["react hook form", "validation", "shadcn/ui"],
      showOnHome: true
    }
  },
  {
    path: "/day001/login",
    page: "/src/pages/day001/pages/login/page.tsx",
    meta: {
      title: "Login"
    }
  },
  {
    path: "/day001/register",
    page: "/src/pages/day001/pages/register/page.tsx",
    meta: {
      title: "Register"
    }
  },
  {
    path: "/day002",
    page: "/day002/page",
    meta: {
      title: "day002",
      desc: "React Query in 40 Minutes - Everything You Need to Know About Tanstack React Query",
      url: "https://youtu.be/NOvx4LB6Hfk?si=syVOT7sMS4y7Xqqn",
      tags: ["react query", "tanstack"],
      docs: [
        {
          title: "React Query 介紹",
          url: "https://alex-flow-state.netlify.app/react-js/react-query-intro"
        }
      ],
      showOnHome: true
    }
  }
];

export const routes: Route[] = staticRoutes.map((route) => {
  const data: Route = {
    path: route.path,
    page: route.page,
    element: LazyLoad(route.page),
    meta: route.meta,
    handle: route.meta,
    children: []
  };

  if (route.children && route.children.length > 0) {
    for (const child of route.children) {
      data.children?.push({
        path: child.path ?? "",
        page: child.page ?? "",
        handle: route.meta,
        element: LazyLoad(child.page)
      });
    }
  }

  return data;
});
