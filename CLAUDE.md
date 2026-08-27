# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Next.js 16 — read the bundled docs first

This project runs **Next.js 16.3.3 with React 19.2.8**. As `AGENTS.md` warns, this
release has breaking changes relative to older Next.js knowledge. Before writing or
changing any framework code, read the relevant guide under
`node_modules/next/dist/docs/` (`01-app`, `02-pages`, `03-architecture`, `index.md`).

Things already visible in this repo that differ from older Next.js:
- Route component props use framework-generated global types: `RootLayout` takes
  `LayoutProps<"/">`, and pages/route handlers have matching `PageProps` /
  `RouteContext` generics keyed by route path. Don't hand-write these prop types.
- `next dev` regenerates the agent-rules block in `AGENTS.md`. Commit that change
  together with your work instead of reverting it, or it just reappears as an
  uncommitted diff.

## Commands

```bash
npm run dev     # start dev server (Turbopack) at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

No test runner is configured yet. If you add one, wire it into `package.json` scripts
and document how to run a single test here.

## Architecture

- **App Router** only. All routes live in `app/`. Root layout is `app/layout.tsx`
  (loads Geist fonts via `next/font/google` and `app/globals.css`); the landing page
  is `app/page.tsx` (still the create-next-app placeholder).
- **Styling: Tailwind CSS v4**, configured entirely through `postcss.config.mjs`
  (`@tailwindcss/postcss`) and CSS in `app/globals.css` — there is no
  `tailwind.config.*` file. Theme tokens and `@theme` customization go in the CSS.
- **Import alias:** `@/*` maps to the repo root (`tsconfig.json`). TypeScript is
  `strict`.

## Product intent & workflow

`README.md`: "Arcade Vault" is a platform to play games online and compete for the
highest score. Development follows **Spec-Driven Development** using the `/spec` and
`/spec-impl` skills from `Klerith/fernando-skills`
(`npx skills@latest add Klerith/fernando-skills`). Expect feature work to start from a
written spec rather than ad-hoc implementation.
