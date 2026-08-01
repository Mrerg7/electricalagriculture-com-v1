import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Pure static output for Cloudflare Workers Static Assets (no adapter).
// Deploy: npm run build && npx wrangler deploy
export default defineConfig({
  site: 'https://electricalagriculture.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date('2026-08-01'),
    }),
  ],
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
    ],
  },
  vite: {
    build: {
      assetsInlineLimit: 4096,
    },
  },
});
