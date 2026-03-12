import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/posts/" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      category: z.string(),
      heroImage: image().optional(),
      date: z.coerce.date()
    })
});

const services = defineCollection({
  loader: glob({ pattern: "**/.*mdx", base: "./src/content/services/" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      heroImage: image().optional()
    })
});

export const collections = { posts, services };
