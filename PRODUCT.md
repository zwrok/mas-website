# Modular Art Studio — Product Context

## What is this?
Website for Modular Art Studio (MAS) — an art gallery, workshop space, and film/photo studio in Warsaw, Poland.

## Users
- **Primary:** Adults (25–55) interested in art, attending workshops or exhibitions
- **Secondary:** Professional photographers and filmmakers renting the studio
- **Tertiary:** Children (via parents) attending kids' workshops

## Brand & Tone
- Clean, minimal, "gallery white" aesthetic
- Serious but welcoming — not pretentious
- Polish language throughout
- Logo: geometric black MMS monogram + navy "Modular Art Studio" wordmark

## Design System
- **Colors:** White `#FFFFFF`, near-black `#0A0A0A`, navy `#1B2259`, off-white `#F7F7F5`, mid-gray `#E5E5E1`
- **Fonts:** Space Grotesk (headings, geometric, bold) + Inter (body)
- **Style:** Lots of whitespace, strong typographic hierarchy, grid-based layouts
- **No:** gradients, rounded corners, drop shadows, decorative elements

## Pages
- `/` — Homepage: hero, 3 services, upcoming events preview, about stats
- `/warsztaty` — Workshops with availability and pricing
- `/wydarzenia` — Upcoming events + archive
- `/galeria` — Current + upcoming exhibitions, archive by year
- `/galeria/[slug]` — Exhibition detail: curator note, artworks, artist bios
- `/studio` — Studio rental with equipment list and pricing
- `/kontakt` — Contact form + info

## Offer
1. **Warsztaty** (Workshops) — adults mainly, some kids; painting, drawing, ceramics, photography
2. **Studio** — photography and film studio for rent, 80m², full lighting equipment
3. **Galeria** — temporary exhibitions, openings, artist residencies

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Content managed via `data/*.ts` files (warsztaty.ts, wydarzenia.ts, galeria.ts)
- Deployed on Vercel via GitHub

## Anti-references
- Avoid: colorful/playful art school aesthetics
- Avoid: heavy imagery without whitespace
- Avoid: cluttered navigation
- Model after: minimal European gallery websites, clean editorial design
