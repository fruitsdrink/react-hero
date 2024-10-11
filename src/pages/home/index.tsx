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
            <CardContent>
              {route.meta?.desc && <div>{route.meta?.desc}</div>}
              {route.meta?.url && (
                <div>
                  <a href={route.meta.url} target="_blank" rel="noreferrer">
                    Watch video
                  </a>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              {route.meta?.docs && (
                <div className="mb-4">
                  <div className="mb-2">Docs</div>
                  {route.meta?.docs?.map((doc) => (
                    <a
                      key={doc.title}
                      href={doc.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {doc.title}
                    </a>
                  ))}
                </div>
              )}
              {route.meta?.tags && (
                <div>
                  {route.meta?.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0 mr-2 text-sm text-white bg-red-500 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
