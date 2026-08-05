# frle.dev

Personal portfolio site for Ivan Skorupan — engineer and solution architect based in Amsterdam.

**Live at [frle.dev](https://frle.dev).**

Built with [Astro](https://astro.build) 7 as a fully static site: every page is prerendered at
build time, there is no UI framework and no server runtime. Interactivity is a handful of vanilla
custom elements, and all CSS is hand-written against a small set of design tokens.

## Getting started

Requires Node 24 (see [.nvmrc](.nvmrc); Astro 7 itself needs >=22.12.0).

```sh
nvm use
npm install
npm run dev
```

The dev server runs at [localhost:4321](http://localhost:4321).

| Command                  | Action                                       |
| :----------------------- | :------------------------------------------- |
| `npm run dev`            | Dev server at `localhost:4321`               |
| `npm run build`          | Static build to `./dist/`                    |
| `npm run preview`        | Serve `./dist/` locally                      |
| `npx astro check`        | Type-check — expected to stay at zero errors |
| `npx prettier --write .` | Format; the repo is kept fully formatted     |

There is no test suite. CI runs `astro check` and `prettier --check .` on every pull request and on
`main`; Netlify handles the deploy separately.

## Structure

```
src/
  assets/       images processed by astro:assets (pre-sized, see note below)
  components/   Astro components, each owning its own scoped styles
  content/work/ one Markdown file per project
  layouts/      BaseLayout — head, nav, footer, layered backgrounds
  pages/        file-based routes, plus rss.xml.ts
  styles/       global.css — design tokens and layout utilities
public/         static passthrough: robots.txt, favicon, background images
```

Routes: `/`, `/work/`, `/work/<slug>/`, `/about/`, `/rss.xml`, and a 404.

## Adding a project

Drop a Markdown file into `src/content/work/`. The schema in
[src/content.config.ts](src/content.config.ts) is strict, so the frontmatter has to match exactly:

```yaml
---
title: Project Name
publishDate: 2024-02-20 00:00:00
img: ../../assets/project-name.webp
img_alt: What the image shows
description: |
  One or two sentences. Also used as the RSS item description and the meta description.
tags:
  - TypeScript
  - Astro

role: Your role
client: Client name
year: '2024'
liveUrl: https://example.com # optional
repoUrl: https://github.com/... # optional
---
```

Projects are ordered by `publishDate` descending everywhere; the homepage shows the newest five.

**Keep image sources small.** The largest width any `<Image>` requests is 1280, so sources are
capped at 1600px wide and stored as quality-90 webp. This is not just about page weight: Astro
ships every content-collection image's original into the build whether or not anything links to it
([astro#11887](https://github.com/withastro/astro/issues/11887)), so an oversized source is dead
weight in every deploy.

## Deployment

Netlify, from `main` — pushing deploys, pull requests get preview URLs. Build settings live in
[netlify.toml](netlify.toml), which overrides the Netlify dashboard.

## Notes

Architecture details, conventions and the reasoning behind the less obvious choices are documented
in [CLAUDE.md](CLAUDE.md).

Forked from the official Astro `portfolio` starter and reworked since.
