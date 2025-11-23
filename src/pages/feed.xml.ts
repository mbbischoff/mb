import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });

  const sortedPosts = blog.sort((a, b) => {
    return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  });

  return rss({
    title: 'My Blog',
    description: 'A blog built with Astro',
    site: context.site ?? 'http://localhost:4321',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}