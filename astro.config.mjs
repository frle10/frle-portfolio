// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Production origin. Required for canonical URLs and absolute og:image URLs (see MainHead),
  // and by @astrojs/sitemap if that is ever added. Deploy previews build with this too, so their
  // pages point canonically at production rather than at their own throwaway URL.
  site: 'https://frle.dev',
});
