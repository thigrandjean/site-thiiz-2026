// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import umami from "@yeskunall/astro-umami";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://thiiz.com.br",
  integrations: [
    mdx(),
    sitemap(),
    icon(),
    umami({ id: "dc4fd9b6-fe68-46e4-a1b2-73055732c966" })
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare({
    imageService: "compile"
  })
});
