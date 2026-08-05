// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TEMPORARY: pinned to v6 behavior. Removed in the next commit.
  compressHTML: true,
});
