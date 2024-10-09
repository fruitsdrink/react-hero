import loadable from "@loadable/component";

import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    "0": "#00ffe2",
    "1.0": "#00ffe2"
  },
  shadowBlur: 5
});

const modules = import.meta.glob("@/pages/**/*.tsx");

function LazyLoad(url: string) {
  // 去除开头的/src/pages
  url = url.replace("/src/pages", "");
  // 去除结尾的.tsx
  url = url.replace(".tsx", "");

  const module = modules[`/src/pages${url}.tsx`];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ComponentNode = loadable(module as any, {
    fallback: <TopBarProgress />
  });

  return (
    <>
      <ComponentNode />
    </>
  );
}
export default LazyLoad;
