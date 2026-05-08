# AGENTS.md - Developer Guide for thiiz-astro

## Project Overview

Astro-based personal portfolio deployed on Cloudflare Pages. Uses Tailwind CSS
v4, MDX, sitemap, Umami analytics, and icon support.

## Build Commands

```bash
npm run dev      # Start dev server (runs on all interfaces)
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run generate # Generate new content (posts)
npm run astro    # Run Astro CLI directly
```

## Code Style Guidelines

### General Principles

- **No comments** - Avoid unless absolutely necessary
- **Minimal code** - Prefer concise, self-documenting code
- **Use existing patterns** - Follow established conventions

### File Organization

```
src/
├── components/       # Astro components
├── layouts/         # Page layouts
├── pages/           # Route pages (file-based routing)
└── content/         # MDX content collections
```

### Astro Components

- Frontmatter uses TypeScript interface for Props
- Props destructuring: `const { prop1, prop2 } = Astro.props;`
- Inline styles for dynamic values, Tailwind for static
- Script tags use vanilla JavaScript

```astro
---
interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props;
---

<element class="tailwind-classes">{title}</element>
```

### TypeScript

- Strict mode via `astro/tsconfigs/strict`
- Strict null checks enabled
- Use Zod schemas for content collections

### Import Conventions

- Relative imports: `../components/Logo.astro`
- Package imports: `import { x } from "package"`
- Group: external first, then relative

### Tailwind CSS

- Tailwind CSS v4 with Vite plugin
- Use utility classes for styling
- View transitions: use `view-transition-name`

### Formatting

- 80 character line width
- Trailing commas: none
- Prettier with `prettier-plugin-astro`
- Run `npx prettier --write .` to format

### Naming

- Components: PascalCase (`Header.astro`)
- Files: kebab-case
- CSS: Tailwind utilities

### Content Collections

Defined in `src/content.config.ts`:

1. **posts** - `src/content/posts/**/*.mdx`
2. **services** - `src/content/services/**/.*mdx`

```typescript
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
```

### Error Handling

- Optional chaining (`?.`) for null/undefined
- Let Astro handle errors via built-in boundaries

### Scripts

Vanilla JavaScript in `<script>` tags, no client: directives unless hydrating:

```astro
<script>
  const el = document.getElementById("id");
  el?.classList.add("class");
</script>
```

## Configuration

- `astro.config.mjs` - Integrations and adapter
- `tsconfig.json` - Strict TypeScript
- `.prettierrc.mjs` - Formatting rules

### Integrations

- `@astrojs/mdx` - MDX support
- `@astrojs/sitemap` - Sitemap generation
- `@astrojs/cloudflare` - Cloudflare Pages
- `astro-icon` - Icon support
- `@tailwindcss/vite` - Tailwind CSS v4

## Adding Content

```bash
npm run generate  # Interactive prompts
```

Or manually create `.mdx` in `src/content/posts/`:

```mdx
---
title: "Post Title"
slug: "post-slug"
description: "..."
category: "work|dreams"
date: 2024-01-01
---
```

## Deployment

Cloudflare Pages. Build: `npm run build`. Output: `dist`.
