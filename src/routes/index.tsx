import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index
});

function Index() {
  return (
    <div className="p-2">
      <h3>Motion 动画</h3>
      <ul>
        <li>
          <Link to="/motion/motion-1">滚动显示动画</Link>
        </li>
      </ul>
    </div>
  );
}
