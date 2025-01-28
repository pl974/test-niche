import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    updatedDate: z.string().transform((str) => new Date(str)).optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    author: z.string().default('Taxi Buëch'),
    tags: z.array(z.string()).optional()
  })
});

export const collections = { blog };