// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production origin. Required for canonical URLs and absolute og:image URLs (see MainHead),
  // and by @astrojs/sitemap below. Deploy previews build with this too, so their pages point
  // canonically at production rather than at their own throwaway URL.
  site: 'https://frle.dev',
  integrations: [
    sitemap({
      // 404 is not a real destination; keep it out of the index.
      filter: page => !page.endsWith('/404/'),
    }),
  ],
});
