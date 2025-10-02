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

## Accessibility & Performance

- Semantic HTML, focus states, color contrast.
- Minimal JS for interactions.
- Vite build + Netlify CDN.

## SEO

- `public/robots.txt` included.  
- **Recommended:** add domain to **Google Search Console** (and optionally **Bing Webmaster Tools**).

## Troubleshooting

- DNS propagation can take time (up to ~24h).  
- If Chrome shows a stale certificate after migration, clearing **SSL state** or HSTS cache locally usually fixes it (Windows: *Internet Options → Content → Clear SSL state*).

## License

MIT (or adjust to the organization’s policy).

---

### Norwegian summary

Dette repoet inneholder KSA sin nettside (React/TypeScript, Vite, Tailwind, Netlify). Påmelding til kurs håndteres via **Tryggivann**; lenker vedlikeholdes i `src/data/tryggivannLinks.ts`. Nettsiden leveres på **<https://ksa.no>** med automatisk HTTPS (Let’s Encrypt).
