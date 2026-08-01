# electricalagriculture.com

Static informational site for **electrical agriculture** — electrified farm machinery, market context, and domain acquisition.

## Stack

- [Astro](https://astro.build) static output (no adapter)
- TypeScript + Tailwind CSS
- Content Collections (`topics`, `insights`)
- Cloudflare Workers Static Assets (`wrangler.toml` → `./dist`)
- Cloudflare Images CDN (`imagedelivery.net`)
- Sitemap + `robots.txt` + full OG / JSON-LD

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
npx wrangler deploy
```

Or: `npm run deploy`

Acquisition CTA routes to **sales@desertrich.com**.
