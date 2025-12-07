import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/posts/" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      category: z.string(),
      heroImage: image().optional()
    })
});

export const collections = { posts };
