# Copilot Instructions

## Commands

```bash
pnpm dev        # Start dev server with Turbopack (http://localhost:3000)
pnpm build      # Production build
pnpm lint       # ESLint
```

There are no tests in this project.

## Architecture

This is a **Next.js 16 App Router** landing site using React 19, TypeScript, Tailwind CSS v4, and shadcn/ui primitives.

- **`app/`** — App Router entrypoint. `layout.tsx` wraps all pages with `ThemeProvider`, the `Header`, and the `Analytics` component. `page.tsx` is the only route.
- **`components/ui/`** — Reusable UI primitives (Button, DropdownMenu, Header, Link, MobileNav, ModeToggle). These follow the shadcn/ui pattern: Radix UI primitives styled with Tailwind via `cn()`.
- **`components/analytics/`** — Pluggable analytics. `index.tsx` renders only in production; currently supports Umami via `UMAMI_WEBSITE_ID` env var.
- **`config/site.ts`** — Central site metadata (`SiteConfig`). All metadata, base URL, icon, and analytics config live here.
- **`config/nav.ts`** — Header navigation links array. Add/remove nav items here.
- **`lib/utils.ts`** — Single export: `cn()` using `clsx` + `tailwind-merge`.

## Key Conventions

- **Path alias `@/`** maps to the repo root. Always use `@/` imports (e.g. `@/components/ui/button`, `@/config/site`).
- **Tailwind CSS v4** — No `tailwind.config.ts`; all theme customisation lives in `styles/globals.css` via `@theme inline {}`. Animations come from `tw-animate-css` (imported in `globals.css`). PostCSS is configured via `@tailwindcss/postcss`.
- **`cn()` for class merging** — always use `cn()` from `@/lib/utils` for any conditional or merged Tailwind classes.
- **`@/components/ui/link`** — Use this custom `LinkWrapper` instead of `next/link` or `<a>` directly. It auto-detects internal (`/`), anchor (`#`), and external links, adding `target="_blank" rel="noopener noreferrer"` for external ones.
- **Dark mode** uses the `class` strategy (via `next-themes`). Use `dark:` Tailwind variants; the toggle in the header switches `light` / `dark` / `system`.
- **Prettier** enforces: no semis, single quotes, 100-char print width, `es5` trailing commas. Import order is auto-sorted by `@ianvs/prettier-plugin-sort-imports` — react → next → third-party → internal (`@/`) → relative.
- **Copyright header** — Source files carry a `Copyright (c) 202x Quadient Group AG / SPDX-License-Identifier: MIT` block comment. Add this to new files.
- **Package manager is `pnpm`** — do not use `npm` or `yarn`.
- **`components.json`** — shadcn/ui config is present; use `pnpm dlx shadcn@latest add <component>` to add new primitives rather than hand-coding them.
