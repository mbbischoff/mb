# Modern Astro Site

A modern, performant Astro site built with best practices.

## ✨ Features

- **TypeScript**: Strictest configuration for type safety
- **Blog Support**: Content collections with type-safe frontmatter
- **RSS Feed**: Automatically generated at `/feed/`
- **Markdown**: Write posts in Markdown with frontmatter
- **Modern CSS**: CSS custom properties with dark mode support
- **Performance**: Optimized builds with CSS minification and HTML compression
- **Code Quality**: Prettier formatting and Astro type checking
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with semantic markup
- **Responsive**: Mobile-first design with fluid typography

## 🚀 Project Structure

```text
/
├── public/          # Static assets
├── src/
│   ├── content/     # Content collections
│   │   ├── blog/    # Blog posts (Markdown)
│   │   └── config.ts # Content schema
│   ├── layouts/     # Layout components
│   ├── pages/       # File-based routing
│   └── env.d.ts     # TypeScript definitions
├── .prettierrc.json # Prettier configuration
├── astro.config.mjs # Astro configuration
└── tsconfig.json    # TypeScript configuration
```

## 🧞 Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview production build locally     |
| `npm run check`   | Run Astro type checking              |
| `npm run format`  | Format code with Prettier            |

## 🎨 Best Practices Included

- **Component-based architecture** with reusable layouts
- **CSS custom properties** for theming and maintainability
- **Modern CSS reset** for consistent rendering
- **Automatic dark mode** based on system preferences
- **Optimized fonts** using system font stack
- **Scoped styles** with Astro's built-in CSS scoping
- **Semantic HTML5** for better accessibility and SEO

## 📝 Blog

Blog posts are stored in `src/content/blog/` as Markdown files with frontmatter:

```markdown
---
title: 'Your Post Title'
description: 'A brief description'
pubDate: 2025-11-23
draft: false # optional, defaults to false
---

Your content here...
```

### Blog URLs

- Blog index: `/blog`
- Individual posts: `/{slug}/` (e.g., `/hello-world/`)
- RSS feed: `/feed/`

### Configuration

Update `site` in `astro.config.mjs` for proper RSS feed URLs:

```js
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro Discord](https://astro.build/chat)
