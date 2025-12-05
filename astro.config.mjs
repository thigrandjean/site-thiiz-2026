// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://thiiz.com.br",
  integrations: [mdx(), sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare({
    imageService: "compile"
  })
});

