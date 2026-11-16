import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.number().int().min(1).max(20),
    category: z.enum([
      'Baixar vídeos',
      'Downloads em lote',
      'Fluxos com criadores',
      'Novelas curtas',
      'Exportação de dados',
    ]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    featureHref: z.string().regex(/^\/recursos\//).optional(),
    featureLabel: z.string().optional(),
    related: z.array(z.string()).default([]),
    takeaways: z.array(z.string()).min(1).max(5).default([]),
  }),
});

export const collections = { guides };
