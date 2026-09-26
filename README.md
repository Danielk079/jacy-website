# My Sunday Person 🌿

A small, responsive tribute site for Jacy — built around the idea of the path you two have walked, lost, and found again.

## Adding photos

Drop photos into an `images` folder next to `index.html`. Each one is optional — anything you don't add just quietly disappears rather than showing a broken image, so you can deploy now and fill these in over time. Expected names:

| File | Where it shows | Essential? |
|---|---|---|
| `images/hero.jpg` | The main photo at the very top | Yes — shows a placeholder until added |
| `images/then.jpg` | Timeline: "four years ago" | Optional |
| `images/reconciliation.jpg` | Timeline: "june 2026" (the Sunday-after photo) | Optional |
| `images/ruracio.jpg` | Timeline: "august 29, 2026" | Optional |
| `images/gallery-1.jpg` through `gallery-4.jpg` | The "favorite Sundays" gallery | Optional |

That's up to 8 photos total. A square-ish or portrait photo works best for `hero.jpg` (it's cropped to a 4:5 frame); the gallery crops to squares.

## Make it yours

Everything's plain text in `index.html`:
- **Headline/subline** — top of `<section class="hero">`
- **The timeline** — `<ol class="timeline">`, one `<li>` per beat in your story
- **The six reason cards** — each `<button class="flip-card">`; edit `card-front`, `card-back`, and the matching `aria-label`
- **The rotating messages** — the `messages` array near the top of `script.js`
- **Your signature** — replace `[Your Name]` in the closing section

## Deploy

Same as before — no build step, it's a static site.

**Vercel**: vercel.com/new → import the repo (or `vercel` from the CLI in this folder) → deploy, no config needed.

**Render**: render.com → New → Static Site → connect the repo, leave the build command blank, publish directory `.`.

## What's already handled

- Fully responsive, phone to desktop
- Respects `prefers-reduced-motion`
- Keyboard-navigable interactive elements with visible focus states
- Semantic HTML with a skip-to-content link and screen-reader-friendly labels
- Every photo slot fails gracefully if the file isn't there yet
