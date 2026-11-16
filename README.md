# Baixora official website

Static website for **Baixora**, an independent Chrome extension for downloading public
TikTok videos in bulk, saving single videos, collecting creator videos and short drama
episodes, and exporting selected metadata to XLSX.

- Production domain: `https://baixora.app`
- Repository: `git@github.com:pandahicc/baixora.app.git`
- Chrome Web Store: [Video Downloader for TikTok](https://chromewebstore.google.com/detail/video-downloader-for-tikt/gjhfeagkgkfmhbgladfbimflnmiedjem?hl=pt_BR) (pt-BR listing: **Baixador de Vídeos para o TikTok**)
- Content language: Brazilian Portuguese (`pt-BR`)
- Extension version referenced by the site: `1.3.3`
- Support and privacy email: `pandahi.cc@gmail.com`
- Core positioning: bulk download first, then single video, creator profiles, short
  drama, and XLSX export.

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 7.4.x, static output |
| Styling | Tailwind CSS 4.3.x via `@tailwindcss/vite` |
| Content | Astro Content Collections + MDX (`@astrojs/mdx` 8.x) |
| Hosting | Cloudflare Workers/Pages or any static host |
| Client JS | JSON-LD plus GA4 (`G-08VK2P35MW`) in production; no framework client JS |
| Images | Sharp for icon and Open Graph generation |

The site has no backend, database, CMS, user accounts, contact form, or URL-paste
download service. It is a static product site for the extension.

## Commands

```bash
npm install --cache .tmp-npm-cache   # this environment may have a read-only ~/.npm
npm run dev                          # http://localhost:4321
npm run build                        # dist/
npm run check                        # link, metadata, JSON-LD, sitemap and asset checks
npm run verify                       # build + check
npm run preview                      # preview the production build
npm run icons                        # regenerate public/images/brand/* from src/assets
npm run og                           # regenerate public/og/baixora-og.png
```

The project requires Node 22.23.4 or newer. `.nvmrc` pins CI to Node 22.

## Analytics

Production builds enable Google Analytics 4 with `G-08VK2P35MW` by default. The site
loads the GA tag from `googletagmanager.com` on every page, with IP anonymization.

- Override the ID with `PUBLIC_GA_MEASUREMENT_ID`.
- Set `PUBLIC_GA_MEASUREMENT_ID=` (empty) to disable GA for a build.
- `npm run dev` does not load GA; the default ID is only applied in production.
- The extension itself contains no analytics or telemetry.
- The site loads GA immediately and does not include a cookie-consent banner. If the
  applicable jurisdiction requires prior consent, add Consent Mode or a banner before
  relying on analytics data.

## Domain

The domain is stored in one place: [`site.config.json`](site.config.json).

```json
{
  "url": "https://baixora.app"
}
```

`astro.config.mjs`, `src/data/site.ts`, and `scripts/check-site.mjs` all read the same
file. Update this value and rebuild if the production domain changes. This repository
does not configure DNS or deploy the site.

## Project structure

```text
src/
  components/           Shared UI (header, footer, CTA, FAQ, SEO, product shots, icons)
  content/guides/       5 pt-BR MDX guides
  content.config.ts     Guides collection schema
  data/                 Site config, FAQ copy, screenshot registry
  layouts/              BaseLayout and ArticleLayout
  lib/                  Content helpers and JSON-LD schema builders
  pages/                Routes under /recursos/, /guias/, /planos/, /suporte/, /sobre/, /novidades/,
                        plus /privacidade/, /termos/, sitemap.xml.ts and robots.txt.ts
  styles/global.css     Tailwind theme, prose, placeholders, print/reduced-motion
public/
  images/brand/         Baixora icons generated from src/assets/baixora-icon-128.png
  images/screenshots/   Product captures
  og/                   Default 1200×630 Open Graph image
  _headers              Edge security/cache headers
  site.webmanifest
docs/screenshot-guide.md
scripts/check-site.mjs
scripts/generate-icons.mjs
scripts/generate-og.mjs
```

## Content authoring

Guides are MDX files in `src/content/guides/`. Frontmatter:

```yaml
---
title: Como baixar vídeos do TikTok em lote
description: Uma descrição curta e única, usada nos cards e nos metadados.
pubDate: 2026-11-16
updatedDate: 2026-11-16
readingTime: 9
category: Downloads em lote
featured: true
featureHref: /recursos/baixar-em-lote/
featureLabel: Download em lote
related:
  - como-baixar-videos-do-tiktok
takeaways:
  - Uma conclusão principal.
draft: false
---
```

Categories: `Baixar vídeos`, `Downloads em lote`, `Fluxos com criadores`,
`Novelas curtas`, `Exportação de dados`.

Rules:

- Do not start the body with an H1; the article layout renders the title.
- Use H2/H3 headings. The table of contents is generated from them.
- Link to the relevant feature page and at least two related guides.
- Include a limits section. Never imply complete TikTok coverage or affiliation.
- Keep `draft: true` for unfinished content; drafts are excluded from production builds,
  the Guides index, and the sitemap.
- Write Brazilian Portuguese, not a literal translation. Avoid PT-PT terms such as
  *ficheiro* and *transferir*; use *arquivo* and *baixar*.

## Content accuracy rules

- The site brand is **Baixora**. The pt-BR Chrome Web Store title is
  **Baixador de Vídeos para o TikTok**; use it as the extension listing name.
- “Sem marca d’água” and “HD” must always be qualified by source availability. Baixora
  does not re-encode media and cannot remove a watermark embedded in the only source.
- “Sem login” refers to Baixora. TikTok may still show a login wall for some public
  content; Baixora does not bypass it.
- The free plan has a daily limit for batch, export, and playlists — currently 10 items
  per day by default. The extension is the source of truth; the site says “por padrão”
  and links to the extension for current limits.
- Premium is activated by a subscription/token inside the extension. Do not display a
  price or claim a web checkout.
- Do not claim a complete creator archive, all of TikTok, guaranteed HD, unlimited
  downloads, official affiliation, or a fixed price.
- Do not display Chrome Web Store user counts or ratings.
- Every download page carries a rights notice. Availability is not authorization.
- The five screenshots currently show the English extension UI. Captions must note that
  the interface follows the browser language and is available in pt-BR.

## Privacy and permissions

The Privacy Policy is written from the current extension manifest and behaviour, and
includes LGPD (Lei nº 13.709/2018) rights. It discloses `storage`, `tabs`, `webRequest`,
`declarativeNetRequest`, the `pandahi.cc` / TikTok host permissions, the optional TikTok
CDN host permission, local storage, Premium token validation, hosting logs, and optional
GA4. If the manifest changes, review the Privacy page.

## Deployment

Build the static output and deploy `dist/` to Cloudflare Workers/Pages or any static
host:

```bash
npm run verify
npx wrangler deploy
```

`wrangler.jsonc` is configured for static assets with a 404 page. Before deploying:

1. Point `baixora.app` DNS at the host.
2. Confirm the canonical, OG, sitemap, and robots URLs use the production domain.
3. Run `npm run verify`.
4. Submit the sitemap in Google Search Console.

## Known open items

- The domain is reserved but not deployed or DNS-configured here.
- The screenshots show the English extension UI. Replace them with pt-BR captures when
  available, keeping the same filenames and dimensions.
- The legal pages are a product-specific template adapted to LGPD, not legal advice.
  Have them reviewed by Brazilian counsel before launch.
- GA4 (`G-08VK2P35MW`) loads immediately in production; no consent banner or Consent
  Mode is configured.
- Plan prices and current limits are shown in the extension, not on this site.
