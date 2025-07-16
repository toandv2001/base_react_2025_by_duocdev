import type { Route } from "./+types/demo";

export default function Demo() {
  return <div>Demo</div>;
}
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Demo app" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
