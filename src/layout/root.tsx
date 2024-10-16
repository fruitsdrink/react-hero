import { Outlet, useMatches } from "react-router-dom";

const Root = () => {
  // const { pathname } = useLocation();
  // const match = useMatch(pathname);
  // console.log({ match });
  // console.log({ location });
  const matches = useMatches();

  if (matches && matches[matches.length - 1]?.handle) {
    const { title } = matches[matches.length - 1]?.handle as { title: string };
    if (title) {
      document.title = title;
    }
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
