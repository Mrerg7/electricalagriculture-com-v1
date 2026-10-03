# electricalagriculture.com

Static briefing and domain listing for **electrical agriculture** — food made from renewable electricity, not another cleared acre. Listed at **$33,000**.

The science follows Michael Le Page, “How turning electricity directly into food could help save the planet,” *New Scientist*, 22 September 2026. This site is not affiliated with New Scientist, the researchers, or the companies named.

## Stack

- Astro static output (no adapter) — Cloudflare Workers Static Assets, free plan
- TypeScript
- Sitemap + `robots.txt` + canonical tags + JSON-LD (Organization, WebSite, Product, Article, FAQPage)
- Acquisition mail to **sales@desertrich.com**, escrow off-site, no checkout

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

Or `npm run deploy`.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
