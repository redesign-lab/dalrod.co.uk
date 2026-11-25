# DALROD.co.uk — Premium Homepage Redesign

A custom, conversion-focused homepage redesign concept for **DALROD — Drainage Solutions**, built from research on the live website (https://www.dalrod.co.uk/).

> **Status:** Design demonstration / concept. Not the official DALROD website.
> All copy, imagery, branding and contact details are sourced from the existing DALROD website.

## Overview

- **Industry:** 24/7 emergency drainage services (UK)
- **Design direction:** "Utility Precision" — an industrial, trades-premium aesthetic: deep royal blue + brand orange, Oswald display type, Manrope body text, sharp edges, numbered editorial layouts and a roadworks hazard-stripe motif.
- **Brand palette** (extracted from the DALROD logo & van livery):
  - Royal blue `#002D9C` · Livery blue `#1650A1` · Deep navy `#001F6B` / `#02123A`
  - Brand orange `#EF9104` · Mist `#F4F7FB` · Ink `#0A1B3D`
- **Fonts:** [Oswald](https://fonts.google.com/specimen/Oswald) (headings) + [Manrope](https://fonts.google.com/specimen/Manrope) (body) — both from the approved sans-serif list.

## Homepage sections

1. Utility bar (24/7 status + phone + email)
2. Sticky navigation with mobile full-screen menu
3. Signature hero (real DALROD photography, 24/7 CTA, Trustist rating)
4. Trust & authority bar (35+ years · 24/7 · UK-wide · no call-out charges)
5. Expert drainage services (6 services, real imagery, links to dalrod.co.uk)
6. Why choose DALROD (accreditations: SafeContractor, CHAS, NADC, SSIP, Achilles, WJA, ConstructionOnline)
7. Emergency CTA band (24/7 helpline)
8. How it works (4 steps)
9. Genuine customer reviews (Trustist / Google / Checkatrade / Facebook)
10. Service areas across the UK
11. FAQ accordion
12. Final CTA
13. Footer
14. Floating mobile call bar (appears on scroll, mobile only)

## Project structure

```
.
├── index.html
├── .nojekyll
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/     # Optimized WebP photography (original DALROD photos)
    ├── logo/       # Original DALROD logos
    └── icons/      # Favicon + icons (SVG/inline)
```

## Technology

- HTML5 + CSS3 + vanilla JavaScript — no frameworks, no build step
- All images optimized to WebP; SVG icons inlined
- Mobile-first responsive (tested 320 → 1440px)
- Semantic HTML, ARIA, keyboard-accessible menu & accordion
- `noindex` meta so this concept doesn't compete with the live site in search results

## Deployment (GitHub Pages)

Static site served from the repository root — no server-side dependencies.

1. In the repository: **Settings → Pages → Build and deployment**
2. Source: **Deploy from a branch**
3. Branch: `main` (or the branch containing this site), folder: `/ (root)`
4. Save — the site goes live at `https://<username>.github.io/dalrod.co.uk/`

All paths are relative, so the site also works when deployed to a subdirectory.
