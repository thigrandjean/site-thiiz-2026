import type { APIRoute } from "astro";

const getRobotsTxt: APIRoute = (context) => {
  const sitemapURL = new URL("/sitemap-index.xml", context.site);
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapURL.href}`, {
    headers: { "Content-Type": "text/plain" }
  });
};

export const GET = getRobotsTxt;
