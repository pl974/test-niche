import { getCollection } from 'astro:content';

export async function GET() {
  const allPosts = await getCollection('blog');
  const pages = [
    '/',
    '/about',
    '/services',
    '/blog',
    '/contact',
    ...allPosts.map(post => `/blog/${post.slug}`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>https://votresite.com${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}