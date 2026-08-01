import { defineCollection, z } from 'astro:content';

const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    label: z.string(),
    order: z.number().default(1),
  }),
});

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    source: z.string().optional(),
    order: z.number().default(1),
  }),
});

export const collections = {
  topics,
  insights,
};
