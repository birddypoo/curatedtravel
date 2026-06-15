# Final Tweaks — Curated Travel by Crystal

Working notes tracking changes on the road to launch. Updated as we go.

**Status:** Pre-launch (private). Code lives on GitHub at
[birddypoo/curatedtravel](https://github.com/birddypoo/curatedtravel).
Not yet connected to Cloudflare Pages — site is **not public** until we flip that switch.

---

## Commit History

| Date & Time (CDT)    | Short Hash | Tag | Description |
|----------------------|------------|-----|-------------|
| 2026-06-11 17:53     | `b0b4b81`  | —   | **Form copy fix + docs refresh.** Fixed the form's JS success message (48 → 24 hours) to match the rest of the site; rewrote `CHANGEME.md` to reflect the current state with an accurate going-live checklist (Formspree at `js/main.js` line 138, form dry-run steps, current photo inventory). |
| 2026-06-11 17:50     | `70eef19`  | —   | **Polished "How It Works" step hover.** Whole step lifts + scales toward the viewer on hover; heading shrinks slightly while the paragraph grows and darkens (emphasis shifts to the description); asymmetric transitions — instant pop-in, delayed/slower settle-back so sweeping across steps doesn't snap or flicker. |
| 2026-06-11 17:36     | `d1424c0`  | —   | **Personalized the Curated Difference band.** Replaced the stock pool background with Crystal's own Zion Canyon panorama (optimized 15 MB → 495 KB, 2560px wide); removed the "Virtuoso Member · 5-Star Rated · 50+ Journeys Curated" trust line from the band. |
| 2026-06-11 17:23     | `1cad34b`  | —   | **Destinations overhaul + service image swap.** Replaced the uneven masonry with a uniform 3×2 landscape grid (removed the `dest-tall` row-span so all six tiles match). Refreshed the imagery with cohesive, warm-toned, commercially-licensed (Unsplash, no attribution) photos: Hawaii (aerial volcanic coast), Alaska (northern lights), Amalfi Coast, Paris (kept), Colorado (snow-capped Rockies), Puerto Rico (vibrant cove); retired Santorini, Bali, Serengeti, Bora Bora, and Maldives. In Services, swapped the photos on cards 02 and 03 (text unchanged). Hero, About, and parallax band untouched. |
| 2026-06-11 16:07     | `94cddc9`  | —   | **Contact, testimonials & form refinements.** Centered testimonial cards on wide screens (`justify-content: safe center`, falls back to scrollable left-align when they overflow); changed contact heading "Begin Your Bespoke Journey" → "Begin Your Journey" with gold "Journey"; split "Follow Along" into per-network rows each with its own icon (Instagram, Facebook, TikTok); added the TikTok link in the contact list and as a footer icon; shortened the response promise from 48 → 24 hours (lead line + form subtitle); alphabetized the "Type of Trip" dropdown (kept "Other" last). |
| 2026-06-11 15:49     | `2044ab9`  | —   | **Polish "How It Works" section.** Fixed duplicate numbering (default `<ol>` markers were rendering next to the styled gold circles — global reset covered `ul` but not `ol`); refined the connector-line alignment; added a gold-fill hover state on each step circle (lift + soft shadow); shortened step 4 heading "Reserve & Travel" → "Travel". |
| 2026-06-11 15:19     | `4185b91`  | —   | **Initial commit.** Full static site (HTML/CSS/JS) pushed to GitHub as the first saved checkpoint: hero, destinations, services, and contact sections, plus privacy and terms pages. Includes the hero tweak below. |

### Changes folded into the initial commit
- Removed the **"Bespoke Luxury Travel"** eyebrow text above the hero title
  (the title now leads straight into "Curated Travel by Crystal"). SEO meta
  description left intact.

---

## Still To Do Before Launch

See `CHANGEME.md` for the authoritative, line-by-line list. Summary:

- [ ] 🔴 **Connect Formspree** — replace `YOUR_FORM_ID` in `js/main.js` line 138.
- [ ] 🔴 **Test the form** end-to-end (real submit → confirm it lands in the inbox).
- [ ] 🔴 **Deploy** via Cloudflare Pages (HTTPS) + attach the custom domain.
- [x] **About portrait** — `images/egypt.jpeg` is Crystal's real photo; keeping as-is.
- [ ] 🟠 Confirm canonical domain (`curatedtravelsbycrystal.com`) matches the Cloudflare domain.
- [ ] 🟠 Review Privacy/Terms drafts; view on a real phone.
- [x] Destination + Curated-Difference imagery refreshed.
- [x] Bio, testimonials, FAQ, services, socials (incl. TikTok), 24-hour promise.
- [ ] ⚪ Optional: phone number, newsletter provider.

---

## Notes
- Every meaningful change gets its own commit (a checkpoint we can roll back to).
- GitHub always mirrors the "last known good" version; the public sees nothing
  until Cloudflare is connected.
- Local preview while we work: http://127.0.0.1:8000/
