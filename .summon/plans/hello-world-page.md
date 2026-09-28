---
status: pending
title: Hello World Page
---

1. Scaffold the base project files at the repo root: `package.json` (ESM, npm scripts for dev/build/preview), `vite.config.ts` (React plugin, `@tailwindcss/vite`, `@tanstack/router-plugin/vite`, `@/` alias to `src/`), `tsconfig.json` + `tsconfig.node.json` (with the `@/*` path mapping), and `index.html` with a `#root` div and a module script pointing at `src/main.tsx`. Outcome: `npm run dev` can start once dependencies are installed.

2. Create `src/styles/global.css` containing exactly the single line importing Tailwind. Outcome: Tailwind v4 utilities available app-wide.

3. Create `src/main.tsx`: import `src/styles/global.css` once, create the router from the generated `src/routeTree.gen.ts`, and mount `RouterProvider` into `#root` inside `StrictMode`. Outcome: app boots and renders the matched route.

4. Create `src/routes/__root.tsx` as the app shell: a root route with a minimal full-height page wrapper and an `Outlet`. Keep navigation out for now since there is only one page. Outcome: consistent shell around all routes.

5. Create `src/routes/index.tsx` as the `/` route: a flex-centered, min-h-screen container with a large bold "Hello World" heading and a short friendly subtitle, styled with Tailwind utility classes only. Outcome: visiting `/` shows a centered Hello World page.

6. Verify: run the dev server, confirm `src/routeTree.gen.ts` is generated automatically by the router plugin (never hand-edited), confirm the page renders centered with no TypeScript errors. Outcome: working Hello World page.
