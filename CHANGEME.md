# CHANGEME — Going-live guide

Everything on the site is real content now except a few items below. This guide lists
**exactly what's left before launch**, with file names and line numbers.

> How to edit: open the file named, use Find (Ctrl/Cmd-F), replace the text, save.

---

## 🚦 Status — updated 2026-06-11

### ✅ Done & live in the page
- **Contact:** email `Crystal.santiago@fora.travel`, location Dallas/Fort Worth TX.
- **Socials:** Instagram, Facebook, **TikTok** — all `@unchartedwithcrystal` (in the
  "Follow Along" list *and* the footer icons).
- **Bio**, **Est. 2025** badge, **stats** (30+ countries / 50+ journeys / 12+ years).
- **5 real testimonials**, **FAQ** answers (fee, specialties, budget).
- **Services** (4 cards) + polished hover.
- **"How It Works"** steps (Consultation / Design / Refine / Travel) with the lift +
  shrink/expand hover.
- **Destinations** — uniform 3×2 grid with 6 cohesive photos: Hawaii (volcanic),
  Alaska (northern lights), Amalfi Coast, Paris, Colorado (Rockies), Puerto Rico.
- **Curated Difference band** — Crystal's own Zion Canyon panorama; trust line removed.
- **Response promise** standardized to **24 hours** (lead, form subtitle, and the
  form's JS success message).
- **SEO** title/description, **canonical domain** `curatedtravelsbycrystal.com`
  (`<head>` canonical + Open Graph + JSON-LD), trip-type dropdown alphabetized.
- **Privacy + Terms** draft pages (`privacy.html` / `terms.html`).

### ☐ Still to do before launch
| # | Item | Where | Blocker? |
|---|------|-------|----------|
| 1 | ✅ **Connect Formspree** (ID `xeewrgrj`) — endpoint tested, returns `ok:true` | `js/main.js` line 138 | ✅ done |
| 2 | **Confirm a test inquiry lands in your inbox** (verify Formspree recipient email) | see §2 | 🔴 YES |
| 3 | ✅ **Your portrait** — real photo of Crystal, kept as-is | `images/egypt.jpeg` | ✅ done |
| 4 | **Deploy** via Cloudflare Pages over HTTPS | see `GO-LIVE.md` Part C | 🔴 YES |
| 5 | ✅ Canonical = `www.curatedtravelsbycrystal.com`; `_redirects` sends bare→www | `index.html` + `_redirects` | ✅ done |
| 6 | **Phone** — currently hidden so no fake number shows | Contact `<li>` (commented) | ⚪ optional |
| 7 | Review the Privacy/Terms drafts | `privacy.html` / `terms.html` | 🟠 |
| 8 | View on a real phone, not just a resized browser | — | 🟠 |
| 9 | Newsletter provider (if you want signups) | — | ⚪ optional |

**Deploy helper files added** (`2026-06-14`): `_redirects` (bare→www 301), `_headers`
(security + caching), `robots.txt`, `sitemap.xml`, `404.html`. These ship as-is to
Cloudflare Pages — no configuration needed.

---

## 1. Formspree — the one critical edit (so inquiries reach your inbox)

The form is in **demo mode**: it shows a success message but **emails no one yet**.
The code auto-detects the real endpoint — you only change one line.

**Step 1.** Sign up at **[formspree.io](https://formspree.io)** (free tier), create a
form, and copy your form ID (looks like `xwkgabcd`).

**Step 2.** Open **`js/main.js`** and edit **line 138**:
```js
var FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```
Replace `YOUR_FORM_ID` with your real ID, e.g.:
```js
var FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwkgabcd';
```
That's it. The check on **line 198** sees the placeholder is gone and switches from
demo mode to real sending (the `fetch` on **line 203**).

> The honeypot anti-spam field (`website_url`) is already wired in — leave it.

---

## 2. Form dry-run test (do this before AND after going live)

The form requires: **First name, Last name, valid Email, Type of trip, and the message**.

1. **In demo mode (now):** fill it out and submit — you should see the green
   "Thank you, [name]!… within 24 hours" message and the button change to
   "Inquiry Sent ✓". This confirms validation + UX work.
2. **After adding your Formspree ID:** submit a real test inquiry. The **first**
   Formspree submission triggers a confirmation email to verify your address —
   click it. Then confirm the test lands in your inbox.
3. Test the **error path**: leave a required field blank → it should list what's
   missing and highlight the field.

---

## 3. Photos — current state

Destination + band photos are done, and the portrait is Crystal's real photo. **All photos are final.**

| File | Used for | Status |
|------|----------|--------|
| `images/egypt.jpeg` | **Your portrait** (About section) | ✅ real photo of Crystal — keeping as-is |
| `images/hero.jpg` | Hero background | Unsplash placeholder (fine to keep or swap) |
| `images/difference-zion.jpg` | "Your only job is to arrive" band | ✅ your own Zion photo |
| `images/dest-hawaii.jpg` · `dest-alaska.jpg` · `dest-amalfi.jpg` · `dest-paris.jpg` · `dest-colorado.jpg` · `dest-puertorico.jpg` | Destinations grid | ✅ cohesive Unsplash set (free for commercial use, no attribution) |
| `images/service-*.jpg` (hotels, itineraries, weddings, alacarte) | Services cards | Unsplash placeholders (fine to keep) |

To swap your portrait: save a photo of yourself as `images/egypt.jpeg` (same filename),
or add a new file and update the `<img src>` in the About section.

---

## 4. Files

| File | What it holds |
|------|---------------|
| `index.html` | All page content + structure |
| `css/styles.css` | Colors, fonts, layout, animation |
| `js/main.js` | Nav, reveals, count-ups, FAQ, **form** (Formspree on line 138) |
| `images/` | All photos |
| `privacy.html` / `terms.html` | Legal draft pages |
| `final_tweaks.md` | Running log of changes + commit history |
| `README.md` | Preview locally + deploy notes |
