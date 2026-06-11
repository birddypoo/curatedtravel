# Final Tweaks — Curated Travel by Crystal

Working notes tracking changes on the road to launch. Updated as we go.

**Status:** Pre-launch (private). Code lives on GitHub at
[birddypoo/curatedtravel](https://github.com/birddypoo/curatedtravel).
Not yet connected to Cloudflare Pages — site is **not public** until we flip that switch.

---

## Commit History

| Date & Time (CDT)    | Short Hash | Tag | Description |
|----------------------|------------|-----|-------------|
| 2026-06-11 16:07     | `94cddc9`  | —   | **Contact, testimonials & form refinements.** Centered testimonial cards on wide screens (`justify-content: safe center`, falls back to scrollable left-align when they overflow); changed contact heading "Begin Your Bespoke Journey" → "Begin Your Journey" with gold "Journey"; split "Follow Along" into per-network rows each with its own icon (Instagram, Facebook, TikTok); added the TikTok link in the contact list and as a footer icon; shortened the response promise from 48 → 24 hours (lead line + form subtitle); alphabetized the "Type of Trip" dropdown (kept "Other" last). |
| 2026-06-11 15:49     | `2044ab9`  | —   | **Polish "How It Works" section.** Fixed duplicate numbering (default `<ol>` markers were rendering next to the styled gold circles — global reset covered `ul` but not `ol`); refined the connector-line alignment; added a gold-fill hover state on each step circle (lift + soft shadow); shortened step 4 heading "Reserve & Travel" → "Travel". |
| 2026-06-11 15:19     | `4185b91`  | —   | **Initial commit.** Full static site (HTML/CSS/JS) pushed to GitHub as the first saved checkpoint: hero, destinations, services, and contact sections, plus privacy and terms pages. Includes the hero tweak below. |

### Changes folded into the initial commit
- Removed the **"Bespoke Luxury Travel"** eyebrow text above the hero title
  (the title now leads straight into "Curated Travel by Crystal"). SEO meta
  description left intact.

---

## Still To Do Before Launch

- [ ] **Add real photos** — replace placeholder images in `/images`
      (hero, destinations, services, feature shots).
- [ ] A couple more small tweaks (TBD as we review).
- [ ] Final content/proofread pass.
- [ ] Connect repo to **Cloudflare Pages** and attach the custom domain → go live.

---

## Notes
- Every meaningful change gets its own commit (a checkpoint we can roll back to).
- GitHub always mirrors the "last known good" version; the public sees nothing
  until Cloudflare is connected.
- Local preview while we work: http://127.0.0.1:8000/
