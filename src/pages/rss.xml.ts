import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const projects = await getCollection('work');

  return rss({
    title: 'Ivan Skorupan: Work',
    description: 'Projects by Ivan Skorupan',
    // `site` from astro.config.mjs; every item link is resolved against it.
    site: context.site!,
    // Same ordering as everywhere else in the repo: newest first.
    items: projects
      .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
      .map(project => ({
        title: project.data.title,
        description: project.data.description,
        pubDate: project.data.publishDate,
        link: `/work/${project.id}/`,
      })),
  });
}
