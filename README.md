# Samriddhi — Himachal Rural Enterprise Initiative

A multi-page marketing website for **Samriddhi**, a women-led rural enterprise
movement empowering 3,000 rural women across 15 villages in Himachal Pradesh.
Built with the **Next.js (App Router)** stack.

> *Empowering Women. Enriching Villages. Building Sustainable Futures.*

---

## Quick start

You need **Node.js 18.17+** installed.

```bash
# 1. install dependencies
npm install

# 2. run the dev server
npm run dev
```

Then open **http://localhost:3000** in your browser.

### Production build

```bash
npm run build
npm run start
```

---

## What's inside

| Route | Page |
|-------|------|
| `/` | Home — hero, animated impact stats, story, model chain, product teaser |
| `/about` | The Samriddhi story, vision & mission, what makes it unique, the model |
| `/products` | 6 product categories (agro-processed, herbal teas, essential oils, cosmetics, eco-friendly, ayurvedic) |
| `/smart-village-centres` | The 3 Smart Village Centres and their 4 key functions |
| `/impact` | Economic, social, environmental & regional impact |
| `/investment` | ₹10 Crore / 3-year plan, funding structure & revenue streams |
| `/women-entrepreneurs` | Program components for women entrepreneurs |
| `/partners` | Academic, financial & market partners; news & events |
| `/csr` | CSR & investor partnership — areas of collaboration, why partner |
| `/contact` | Contact details + working contact form |

A custom **404** page is included.

---

## Tech & design notes

- **Next.js 14 (App Router)** with JavaScript and the `@/*` path alias.
- **Plain CSS design system** in `app/globals.css` — a botanical palette
  (deep evergreen, cream paper, terracotta, gold, moss) with a Fraunces serif
  display + Inter body type pairing loaded from Google Fonts.
- **Signature touches:** leaf-shaped list bullets, decorative botanical sprigs,
  an animated count-up impact ribbon, sticky scroll-aware navbar with a mobile
  drawer, and scroll-reveal animations.
- **Images** in `public/images/` were extracted and cropped from the source
  Samriddhi brochure PDF, so the look matches the document's photography.
- The contact form opens the visitor's mail client (`mailto:`) with a
  pre-filled message — no backend required. Swap in your own form handler /
  API route when you're ready to collect submissions server-side.

### Project structure

```
samriddhi/
├── app/                  # routes (App Router) + globals.css + layout
│   ├── layout.js         # root layout, metadata, fonts, navbar/footer
│   ├── page.js           # home
│   └── <route>/page.js   # one folder per page
├── components/           # reusable UI (Navbar, Footer, StatRibbon, etc.)
├── public/images/        # photography cropped from the brochure
├── package.json
└── next.config.mjs
```

---

## Customising

- **Colours & type:** edit the CSS variables at the top of `app/globals.css`.
- **Copy / content:** each page lives in its own `app/<route>/page.js`.
- **Contact details:** update `app/contact/page.js` and the `Footer` component
  (phone and email are placeholders from the brochure).
- **Navigation links:** edit the `LINKS` array in `components/Navbar.js`.

---

*Content and imagery are derived from the official Samriddhi initiative brochure.*
