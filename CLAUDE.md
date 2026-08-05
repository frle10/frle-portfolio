# CLAUDE.md

Personal portfolio site for Ivan Skorupan. Static Astro site, no framework integrations, no
server runtime. Forked from the official `astro portfolio` starter template and customized.

## Commands

```sh
npm install          # install deps
npm run dev          # dev server at http://localhost:4321
npm run build        # static build to ./dist/
npm run preview      # serve ./dist/ locally
npx astro check          # type-check (no npm script for this yet)
npx prettier --write .   # format (no npm script for this yet)
```

There is no test suite, no linter, and no CI. `astro check` is the only automated gate — keep it
at 0 errors / 0 warnings / 0 hints.

Verified working: `npm run build` produces 9 pages in ~540ms; `npm run dev` serves `/`, `/work/`,
and `/work/<slug>/` with 200s. Requires Node >=22.12.0 (Astro 7 engine constraint).

## Architecture

Astro 7, `output: 'static'` (the default — `astro.config.mjs` is an empty `defineConfig({})`).
Every page is prerendered at build time. No client-side framework; interactivity is a handful of
vanilla-TS custom elements defined inline in `.astro` `<script>` blocks.

Astro 7 specifics that constrain how you write markup here:

- **Rust compiler.** Invalid HTML is no longer auto-corrected and unclosed tags are errors. Never
  nest block elements inside `<p>`. Self-closing non-void elements (`<h2 set:html={x} />`) are
  fine.
- **`compressHTML: 'jsx'`** (the default). Whitespace spanning a newline between inline elements
  is dropped, JSX-style. Where a space is load-bearing and the container is not `flex` + `gap`,
  write it explicitly as `{' '}` — see [Footer.astro](src/components/Footer.astro). Same-line
  spaces survive.
- **Sätteri** is the Markdown pipeline, not remark/rehype. Applies GFM + SmartyPants natively. To
  use remark/rehype plugins you would have to install `@astrojs/markdown-remark` and set
  `markdown.processor` to `unified()`.

### Routing

| Route           | File                                                                 |
| --------------- | -------------------------------------------------------------------- |
| `/`             | [src/pages/index.astro](src/pages/index.astro)                       |
| `/work/`        | [src/pages/work.astro](src/pages/work.astro)                         |
| `/work/<slug>/` | [src/pages/work/[...slug].astro](src/pages/work/%5B...slug%5D.astro) |
| `/about/`       | [src/pages/about.astro](src/pages/about.astro)                       |
| 404             | [src/pages/404.astro](src/pages/404.astro)                           |

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
by gating them behind a `:root.loaded` class added on `window.load` (and carried onto the incoming
document in `astro:before-swap`, since `load` never fires again after a soft navigation).

### Theming

Dark mode is a `theme-dark` class on `<html>`. `localStorage.theme` is the single source of truth;
the class is only ever derived from it. The `is:inline` script in
[src/components/MainHead.astro](src/components/MainHead.astro) runs blocking in `<head>` to avoid a
flash — it reads `localStorage.theme`, falls back to `prefers-color-scheme`, applies the class, and
re-applies it to `event.newDocument` on `astro:before-swap` so the theme survives view transitions
(see below). [ThemeToggle.astro](src/components/ThemeToggle.astro) is the only writer: it sets
`localStorage.theme` on click, then re-derives the class. Keep that direction — never persist
`localStorage` _from_ the class, which is what the old `MutationObserver` did and why the theme used
to reset on every soft navigation.

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

The swap replaces **all** `<html>` attributes with the incoming document's, so any class set at
runtime on `:root` (`theme-dark`, `loaded`) is dropped unless it is re-applied in an
`astro:before-swap` listener. Both are; add new ones there too rather than in `astro:after-swap`,
which repaints after the class is already missing.

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

## Deployment

Netlify, site `frle-portfolio`, live at **https://frle.dev**. Repo is
`git@github.com:frle10/frle-portfolio.git`; the default branch is `main` (renamed from `master` on
2026-08-05). Pushing to `main` builds and publishes; PRs get deploy previews.

[netlify.toml](netlify.toml) holds the build command, publish dir, a `[dev]` block, and cache
headers, and it **overrides the dashboard's build settings** — change the file, not the UI.

Two things the toml deliberately does not own:

- **Production branch** and `allowed_branches` are site settings, unsettable from any file. They
  are also read-only on the API's `build_settings` projection, so a `netlify api updateSite` call
  carrying `build_settings` is silently ignored — writes must go through a full `repo` object, or
  just use the dashboard.
- **Node version** comes from [.nvmrc](.nvmrc) (currently `24`), which both `nvm use` and Netlify
  read. A `NODE_VERSION` env var would override it; the site has none set, keep it that way.

`netlify dev` runs the Astro dev server behind Netlify's proxy so the headers apply locally, unlike
plain `npm run dev`. `netlify link` state lives in gitignored `.netlify/`.

There is no static adapter and none is needed — `output: 'static'` means Netlify just serves
`dist/`.

## Known gaps

Worth knowing before proposing changes; these are current facts, not a backlog:

- `astro.config.mjs` sets no `site`, so no canonical URLs, no sitemap, no absolute OG URLs.
- No `og:image`, no `twitter:` tags, no `robots.txt`, no sitemap, no RSS. `MainHead` emits only
  `description` doubled as `og:description`.
- Images are raw files in `public/` — no `astro:assets`, so no responsive/optimized output.
- `README.md` is still unmodified Astro starter boilerplate.
- No CI (`.github/` does not exist). Deploys are Netlify-side only — see [Deployment](#deployment).
- ~~Theme is lost on soft navigation.~~ Fixed — see [Theming](#theming).
