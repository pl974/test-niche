import { getCollection } from 'astro:content';

export async function GET({ url }) {
  const page = parseInt(url.searchParams.get('page') || '1');
  const postsPerPage = 12;

  // Récupérer et trier les articles
  const allPosts = await getCollection('blog');
  const sortedPosts = allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  // Calculer la pagination
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = sortedPosts.slice(start, end);

  return new Response(JSON.stringify(paginatedPosts), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}