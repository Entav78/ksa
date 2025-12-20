
## Ownership & Handover

This repository and site are intended to be maintained by Kristiansand Svømmeallianse.
All ongoing responsibility for content, hosting, third-party services, and billing
should reside with the club (or its designated maintainers), not the original developer.

Before final handover, ensure:

- GitHub repo access is owned by KSA (organization or designated admins)
- Netlify site access is granted to KSA maintainers (Admin)
- Any third-party services are registered under KSA-owned accounts

# Kristiansand Svømmeallianse — Website

**Live:** [ksa.no](https://ksa.no)  
**Fallback:** [Netlify fallback](https://kristiansandsvommeallianse.netlify.app/)

This is the official website for **Kristiansand Svømmeallianse (KSA)**. It presents information about the club, swimming course levels and signup, FAQs, and social links. The site is a fast, modern static app built for easy maintenance and reliable hosting.

## Project status

This site is **live while under active development**. The club wanted to start using the new domain and structure early, so the first production release intentionally exposes only the finished parts.

- **What’s live now:** Home page, course selector / Tryggivann links, basic FAQ, SEO/meta, and theming.
- **In progress (private/unpublished):** Additional pages (news, team bios, training plans), richer FAQ, social embeds, CMS integration.
- **Why some files exist but aren’t visible:** The repo contains WIP components and routes that are not linked or are gated behind build flags. Only completed sections are exposed on the live navigation.

### How we keep drafts out of production

- **Routing:** Unfinished routes aren’t linked and return 404 if accessed directly.
- **Meta:** Draft pages include `<meta name="robots" content="noindex,nofollow">`.
- **Build:** Netlify deploys from `main`; only pages intentionally linked are considered “published.”

If you’re reviewing this for coursework: this is a **phased rollout** to let a real club start using the core flows (course info + signup) while the rest of the content is completed.

## Tech Stack

- **React + TypeScript**
- **Vite** (dev server & build)
- **Tailwind CSS** with CSS variables (light/dark theme, brand colors)
- **Netlify** (CI/CD + HTTPS via Let’s Encrypt)
- **DNS** at Domeneshop (A + CNAME to Netlify)

## Project Structure (selected)

```bash
src/
  components/
    faq/                # FAQ component
    opplaering/         # Course UI (LevelSelector, etc.)
  data/
    tryggivannLinks.ts  # Map: course level -> Tryggivann signup URLs
  pages/
    HomePage.tsx
    KursPage.tsx
public/
  _redirects
  robots.txt
tailwind.config.ts
```

## Development

```bash
git clone https://github.com/Entav78/ksa.git
cd ksa
npm install

# dev server
npm run dev

# production build
npm run build

# preview production build locally
npm run preview
```

## Deployment (Netlify)

- Repo is connected to Netlify. Pushing to `main` triggers build & deploy.
- **Domains:**
  - Apex: `ksa.no` → A records to Netlify load balancer IPs `75.2.60.5`, `99.83.190.102`
  - `www.ksa.no` → CNAME `kristiansandsvommeallianse.netlify.app`
- **TLS:** Let’s Encrypt handled automatically by Netlify (auto‑renew).

## Content Maintenance

- **Course signup links:** `src/data/tryggivannLinks.ts`  
  Update only the URLs; the UI reads from this map.
- **Course page:** `src/pages/KursPage.tsx`  
  Opens Tryggivann in a new tab **after explicit user click** (mobile‑friendly).
- **FAQ:** `src/components/faq/Faq`  
  Includes: minimum age (5 years), ability to stand at 90 cm for beginners, 10‑week rounds, 30/45‑min durations by level.

## Julekalender 2025

The Christmas calendar is content-driven and updated manually.

Data file:
src/data/julekalender-2025.json

Update flow:

1. Edit the JSON file (e.g. add winner name/date)
2. Commit changes
3. Push to main
4. Netlify deploys automatically

Notes:

- No CMS or automation is involved
- main always reflects live production

## Accessibility & Performance

- Semantic HTML, focus states, color contrast.
- Minimal JS for interactions.
- Vite build + Netlify CDN.

## SEO

- `public/robots.txt` is included (allow all; optional `Sitemap: https://ksa.no/sitemap.xml`).
- Add the site to **Google Search Console** (Domain property recommended) and submit the sitemap if/when available.
- Optional: add to **Bing Webmaster Tools**.
- (Nice-to-have) Ensure a `<link rel="canonical" href="https://ksa.no/">` and a concise meta description on key pages.

## Troubleshooting

- DNS changes can take time to propagate (typically minutes, but up to ~24h).
- Certificate errors after migration:
  - Verify apex (`ksa.no`) has A-records → `75.2.60.5`, `99.83.190.102`, and `www.ksa.no` → CNAME `kristiansandsvommeallianse.netlify.app`.
  - In Netlify, use **Verify DNS configuration** under HTTPS if needed.
  - If Chrome shows a stale cert, clear local cache:
    - **Windows**: *Internet Options → Content → Clear SSL state*.
    - Or clear HSTS: `chrome://net-internals/#hsts` → **Delete domain security policies** for `ksa.no`.
    - Hard refresh: `Ctrl+F5`.

## Note to future me

Footer uses gradient veil tokens: --footer-veil, --footer-veil-strong

## License

All rights reserved © Kristiansand Svømmeallianse.

---

## Third-party services & billing

The site may use external widgets or services (e.g. social embeds).
It is recommended that Kristiansand Svømmeallianse maintains its own
accounts for any such services.

Before or after handover:

- Verify no services are billed to a private account
- Replace widget IDs or API keys with KSA-owned ones if applicable

Note: The current Instagram embed is implemented via Elfsight
using a free-tier configuration. Usage limits may apply.
It is recommended that Kristiansand Svømmeallianse sets up
its own Elfsight (or alternative) account and replaces the
widget ID if continued use is desired.

### Norwegian summary

Dette repoet inneholder KSA sin nettside (React/TypeScript, Vite, Tailwind, Netlify). Påmelding til kurs håndteres via **Tryggivann**; lenker vedlikeholdes i `src/data/tryggivannLinks.ts`. Nettsiden leveres på **<https://ksa.no>** med automatisk HTTPS (Let’s Encrypt).
