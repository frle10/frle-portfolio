import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
  work: defineCollection({
    loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
    schema: z.object({
      title: z.string(),
      publishDate: z.coerce.date(),
      img: z.string(),
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
