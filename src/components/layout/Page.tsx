import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export const Page = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const loading = document.getElementById("loading");
    if (loading) {
      loading.style.display = "none";
    }
  });
  return <div>{children}</div>;
};
