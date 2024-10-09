import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { routes } from "@/router";
import { Link } from "react-router-dom";

const Home = () => {
  const filterRoutes = routes.filter(
    (route) => route.path && route.meta?.title && route.meta?.showOnHome
  );
  return (
    <div className="flex flex-row flex-wrap gap-8 items-start p-8 w-full min-h-screen bg-slate-800">
      {filterRoutes.map((route) => {
        return (
          <Card key={route.path}>
            <CardHeader>
              <Link to={route.path!}>{route.meta?.title}</Link>
            </CardHeader>
            {route.meta?.desc && <CardContent>{route.meta.desc}</CardContent>}
            {route.meta?.url && (
              <CardFooter>
                <a href={route.meta.url} target="_blank" rel="noreferrer">
                  Watch video
                </a>
              </CardFooter>
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
