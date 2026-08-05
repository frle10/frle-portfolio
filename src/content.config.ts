import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

export const collections = {
  work: defineCollection({
    loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
    // Function form so `image()` is available: it turns `img` into an ImageMetadata object that
    // astro:assets can optimize, and makes a bad path a build error instead of a 404.
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        publishDate: z.coerce.date(),
        img: image(),
        img_alt: z.string().optional(),
        description: z.string(),
        tags: z.array(z.string()),
        role: z.string(),
        client: z.string(),
        year: z.string(),
        liveUrl: z.string().optional(),
        repoUrl: z.string().optional(),
      }),
  }),
};
