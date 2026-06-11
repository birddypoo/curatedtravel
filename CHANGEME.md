# CHANGEME — Making the site yours

Everything on the site ships with polished **placeholder** content so it looks finished out of the box. This guide shows you exactly what to swap before going live. You only need a text editor — open `index.html`, use Find (Ctrl/Cmd-F) for the text in quotes, and replace it.

> Tip: work top-to-bottom through `index.html`. Each section is marked with a big comment like `<!-- ─── ABOUT ─── -->`.

---

## ✅ Status — updated 2026-06-11

Real info from `Curated.info.md` has been applied to the site.

**Done & live in the page:** email, location (Dallas/Fort Worth, TX), Instagram + Facebook links · your bio · Est. 2025 badge · stats (30+/50+/12+) · trust bar (Virtuoso · ASTA · CLIA · IATA — Four Seasons removed) · all 5 real testimonials · FAQ answers (fee, specialties, budget) · services (Custom Vacation Planning · All-Inclusive & Cruises · Family & Group · Honeymoons & Celebrations) · SEO title/description · hero subtitle · process step · trip-type & budget dropdowns · Privacy + Terms draft pages (`privacy.html` / `terms.html`).

**Still to do (pending your input):**
- ☐ **Phone** — currently *hidden* (so no fake number shows). Send one to display it.
- ☐ **Formspree ID** — form is in demo mode (shows success, sends no email yet).
- ☐ **Photos** — still Unsplash placeholders; add yours to `images/` (portrait → `egypt.jpeg`).
- ☐ **Destination card names** — deferred (your §7/§8 lists conflicted and are tied to images).
- ☐ **Newsletter signup** — needs an email provider (Mailchimp / Flodesk / etc.).
- ☐ **Review** the Privacy/Terms drafts before relying on them.

---

## 1. The essentials (current state)

| What | Current value in the site | Status |
|------|---------------------------|--------|
| **Business email** | `Crystal.santiago@fora.travel` | ✅ done |
| **Phone number** | hidden (commented out in Contact + removed from JSON-LD) | ⏳ add a number to show it |
| **Location** | `Dallas/Fort Worth, Texas` | ✅ done |
| **Instagram handle** | `@Unchartedwithcrystal` | ✅ done |
| **Social links** | Instagram + Facebook (Pinterest removed) | ✅ done |
| **Form delivery** | demo mode (`YOUR_FORM_ID`) | ⏳ add Formspree ID — see §4 |
| **Domain** | `curatedtravelbycrystal.com` | ✅ in `<head>` |

---

## 2. Written content

| Section | What to edit (search text) |
|---------|----------------------------|
| **Page title / SEO** | `<title>` and `<meta name="description">` in `<head>` |
| **Hero** | `Bespoke Luxury Travel`, the `Curated Travel / by Crystal` headline, and the subtitle starting `Extraordinary journeys…` |
| **Trust bar** | the list items `VIRTUOSO`, `ASTA`, `CLIA`, `IATA`, `FOUR SEASONS PREFERRED` — use the consortia / partners you actually belong to (remove any you don't) |
| **Intro quote** | `Every extraordinary journey begins…` |
| **About — your bio** | the two paragraphs under `Hi, I'm Crystal` (currently placeholder prompts) |
| **About — stats** | the `data-count` numbers `45`, `200`, `12` and their labels. These animate when scrolled into view |
| **About — Est. year** | the badge over your photo: search `2014` |
| **Destinations** | each card's region + name (e.g. `Mediterranean` / `Santorini, Greece`) |
| **Services** | the four card titles + descriptions |
| **Process** | the four steps (Consultation / Design / Refine / Travel) |
| **Difference band** | `Your only job is to arrive.` + the line below |
| **Testimonials** | replace the five sample quotes with **real client reviews** once you have them (these are written samples) |
| **FAQ** | five questions + answers — fill in your real planning fee, specialties, lead time, and budget range |
| **Contact** | the intro paragraph and the `48 hours` response promise |

---

## 3. Photos

All placeholder photos live in `images/` and are free to use under the **[Unsplash License](https://unsplash.com/license)**. Replace any of them by dropping in your own image with the **same filename** (keep it roughly the same shape).

| File | Used for | Unsplash source (photo ID) |
|------|----------|----------------------------|
| `hero.jpg` | Hero background | `1507525428034-b723cf961d3e` |
| `egypt.jpeg` | **Your portrait** in the About section — swap this for a photo of you | (your own) |
| `feature-pool.jpg` | The "Your only job is to arrive" band | `1551918120-9739cb430c6d` |
| `dest-santorini.jpg` | Destinations — tall card | `1533105079780-92b9be482077` |
| `dest-maldives.jpg` | Destinations | `1573843981267-be1999ff37cd` |
| `dest-paris.jpg` | Destinations | `1502602898657-3e91760cbb34` |
| `dest-bali.jpg` | Destinations | `1537953773345-d172ccf13cf1` |
| `dest-safari.jpg` | Destinations | `1535941339077-2dd1c7963098` |
| `dest-borabora.jpg` | Destinations | `1505228395891-9a51e7e86bf6` |
| `service-hotels.jpg` | Services 01 | `1540541338287-41700207dee6` |
| `service-itineraries.jpg` | Services 02 | `1530789253388-582c481c54b0` |
| `service-weddings.jpg` | Services 03 | `1571003123894-1f0594d2b5d9` |
| `service-alacarte.jpg` | Services 04 | `1512100356356-de1b84283e18` |

**Swap your portrait:** put a photo of yourself at `images/egypt.jpeg` (or add a new file and update the `src` in the About section). Portrait orientation (taller than wide) looks best.

If you change a card's `alt` text too, keep it descriptive — it helps accessibility and SEO. Remember to also update the `<meta property="og:image">` in `<head>` if you change the hero.

---

## 4. Form — where inquiries go

The form works in **demo mode** right out of the box (it shows a success message but doesn't email anyone yet). Pick one of these to receive real inquiries:

### Option A — Formspree (recommended, free tier)
1. Sign up at **[formspree.io](https://formspree.io)** and create a form. You'll get an ID like `xwkgabcd`.
2. Open `js/main.js`, find:
   ```js
   var FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
   Replace `YOUR_FORM_ID` with your ID. That's it — the page auto-detects the real endpoint and starts sending.

### Option B — Plain email (mailto, zero signup)
If you'd rather skip Formspree, change the form so it opens the visitor's email app. In `index.html`, change the opening form tag to:
```html
<form class="contact-form" id="inquiryForm" action="mailto:hello@youremail.com" method="post" enctype="text/plain">
```
(Note: mailto is the simplest option but less reliable — it depends on the visitor having an email app set up. Formspree is smoother.)

Either way, the **honeypot** anti-spam field is already in place — leave it.

---

## 5. Optional: a video hero

The hero is built to drop in a looping video later. In `index.html`, inside `<div class="hero-media">`, replace the `<img>` with:
```html
<video class="hero-img" autoplay muted loop playsinline poster="images/hero.jpg">
  <source src="images/hero.mp4" type="video/mp4">
</video>
```
Keep the file short (10–20s), muted, and compressed (a few MB max). The `poster` shows instantly while the video loads.

---

## 6. Going-live checklist

- [x] Email, location, social links (§1) — ☐ phone still pending
- [~] Your bio ✅ — ☐ portrait photo still placeholder
- [x] Real testimonials (your 5 reviews are in)
- [ ] Formspree connected **and tested** (submit a real inquiry, confirm it lands in your inbox)
- [x] FAQ answers reflect your actual policies
- [x] Trust bar shows only consortia you truly belong to
- [x] Domain in the `<head>` (canonical + Open Graph + JSON-LD)
- [ ] Viewed on a real phone, not just a resized browser
- [ ] Deployed over HTTPS (see `README.md`)
- [ ] Review Privacy/Terms drafts; connect a newsletter provider

---

## Files

| File | What it holds |
|------|---------------|
| `index.html` | All page content + structure |
| `css/styles.css` | All colours, fonts, layout, animation |
| `js/main.js` | Nav, reveals, count-ups, FAQ, form |
| `images/` | All photos |
| `favicon.svg` | The little "C" browser-tab icon |
| `README.md` | How to preview locally + deploy |
