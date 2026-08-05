# CLAUDE.md

Personal portfolio site for Ivan Skorupan. Static Astro site, no framework integrations, no
server runtime. Forked from the official `astro portfolio` starter template and customized.

## Commands

```sh
npm install          # install deps
npm run dev          # dev server at http://localhost:4321
npm run build        # static build to ./dist/
npm run preview      # serve ./dist/ locally
npx prettier --write .   # format (no npm script for this yet)
```

There is no test suite, no linter, and no CI. `npx astro check` is not usable as-is — it prompts
to install `@astrojs/check` + `typescript`, which are not in `devDependencies`.

Verified working: `npm run build` produces 9 pages; `npm run dev` serves `/`, `/work/`, and
`/work/<slug>/` with 200s. Node v24, npm v12.

## Architecture

Astro 5, `output: 'static'` (the default — `astro.config.mjs` is an empty `defineConfig({})`).
Every page is prerendered at build time. No client-side framework; interactivity is a handful of
vanilla-TS custom elements defined inline in `.astro` `<script>` blocks.

### Routing

| Route | File |
| --- | --- |
| `/` | [src/pages/index.astro](src/pages/index.astro) |
| `/work/` | [src/pages/work.astro](src/pages/work.astro) |
| `/work/<slug>/` | [src/pages/work/[...slug].astro](src/pages/work/%5B...slug%5D.astro) |
| `/about/` | [src/pages/about.astro](src/pages/about.astro) |
| 404 | [src/pages/404.astro](src/pages/404.astro) |

### Content

Projects live as Markdown in [src/content/work/](src/content/work/), loaded by the `work`
collection defined in [src/content.config.ts](src/content.config.ts) via the `glob` loader. The
Zod schema is strict — adding a project means matching it exactly:

```
title, publishDate (coerced Date), img, description, tags[], role, client, year
img_alt?, liveUrl?, repoUrl?
```

`img` is a **string path into `public/`** (e.g. `/assets/instrugo.png`), not an `astro:assets`
image reference. Project ordering everywhere is `publishDate` descending; the homepage slices the
first 5.

### Layout chain

`BaseLayout` → `MainHead` (head tags, fonts, blocking theme script) + `Nav` + `<slot />` +
`Footer`. `BaseLayout` also owns the whole layered-background system: CSS custom properties for
light/dark background images at 800w/1440w breakpoints, composited in a single `background`
shorthand on `.backgrounds` with `background-blend-mode`. Below-the-fold backgrounds are lazy-loaded
by gating them behind a `:root.loaded` class added on `window.load`.

### Theming

Dark mode is a `theme-dark` class on `<html>`. Set by an `is:inline` script in
[src/components/MainHead.astro](src/components/MainHead.astro) that runs blocking in `<head>` to
avoid a flash — it reads `localStorage.theme`, falls back to `prefers-color-scheme`, and installs a
`MutationObserver` that persists any class change back to `localStorage`.
[ThemeToggle.astro](src/components/ThemeToggle.astro) just toggles the class; it never touches
storage directly. Keep that split if you change theming.

### Styling

All CSS is hand-written. [src/styles/global.css](src/styles/global.css) holds the design tokens —
`--gray-0`..`--gray-999` (which **invert** under `.theme-dark`), accent colors, gradients, shadows,
`--text-sm`..`--text-5xl`, fonts, and the `.wrapper` / `.stack` / `.gap-*` / `.lg:gap-*` utilities.
Everything else is scoped `<style>` inside its component. Use the tokens rather than raw hex/px.

Breakpoints are inconsistent by inheritance: most layout switches at `min-width: 50em`, but `Nav`
and the project-detail sidebar switch at `62em`. Match whichever the surrounding file uses.

### Icons

[IconPaths.ts](src/components/IconPaths.ts) is a map of name → raw SVG path string;
[Icon.astro](src/components/Icon.astro) injects it with `set:html` into a fixed
`0 0 256 256` viewBox. Adding an icon = adding an entry to that map. `gradient` prop swaps
stroke/fill to a generated `linearGradient` id.

### View transitions

`<ClientRouter />` is enabled in `MainHead`, so navigation is client-side. Anything relying on
first-load-only setup (the `load` listener, custom-element `constructor` work) can silently break
across transitions — verify nav/theme behavior after soft navigation, not just hard reload.

## Conventions

- Prettier config in [.prettierrc.json](.prettierrc.json): single quotes, semicolons, `printWidth`
  100, `arrowParens: avoid`, `prettier-plugin-astro`. Run it before committing; the repo is
  currently fully formatted.
- TypeScript extends `astro/tsconfigs/strict`. Components type their props with an
  `interface Props`.
- Component-local data (nav links, social links, skills) is defined as a typed `const` array in the
  component frontmatter, not in a shared config file. Social links are duplicated between
  [Nav.astro](src/components/Nav.astro) and
  [ContactCTA.astro](src/components/ContactCTA.astro) — edit both.
- Personal details (name, email, LinkedIn/GitHub/YouTube URLs, "Amsterdam") are hardcoded across
  components. There is no site-config module.

## Known gaps

Worth knowing before proposing changes; these are current facts, not a backlog:

- `astro.config.mjs` sets no `site`, so no canonical URLs, no sitemap, no absolute OG URLs.
- No `og:image`, no `twitter:` tags, no `robots.txt`, no sitemap, no RSS. `MainHead` emits only
  `description` doubled as `og:description`.
- Images are raw files in `public/` — no `astro:assets`, so no responsive/optimized output.
- `README.md` is still unmodified Astro starter boilerplate.
- No deploy configuration in the repo (no `.github/`, no adapter, no host config). Remote is
  `git@github.com:frle10/frle-portfolio.git`.
- Astro is pinned at `^5.12.1` (5.18.2 available on the current major, 7.x is latest). A major
  upgrade is a deliberate task, not a drive-by.
