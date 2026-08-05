// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  // TEMPORARY: pinned to v6 behavior to isolate the Rust compiler and Vite 8
  // in this step. Both are removed in the following two commits.
  compressHTML: true,
  markdown: {
    processor: unified(),
  },
});
