import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [index('routes/home.tsx'), route('about', 'routes/about.tsx'), route('demo', 'routes/demo.tsx')] satisfies RouteConfig
// export default [
//     layout("./marketing/layout.tsx", [
//       index("./marketing/home.tsx"),
//       route("contact", "./marketing/contact.tsx"),
//     ]),
//     ...prefix("projects", [
//       index("./projects/home.tsx"),
//       layout("./projects/project-layout.tsx", [
//         route(":pid", "./projects/project.tsx"),
//         route(":pid/edit", "./projects/edit-project.tsx"),
//       ]),
//     ]),
//   ] satisfies RouteConfig;