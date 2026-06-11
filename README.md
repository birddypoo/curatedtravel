# Curated Travel by Crystal — Landing Page (V3)

A polished, single-page marketing site for a luxury leisure travel-design business. Its job is to grab a visitor's attention and convert them into an inquiry.

- **Pure static** — HTML, CSS, and vanilla JavaScript. No build step, no frameworks, no dependencies.
- **Fast & self-contained** — all photos are bundled locally; nothing to compile.
- **Conversion-focused** — cinematic hero, social proof, FAQ, and a refined inquiry form with a persistent "Inquire" call-to-action.

To customize the content (text, photos, form delivery), see **[`CHANGEME.md`](CHANGEME.md)**.

---

## Preview it locally

Because the page loads images and JS with relative paths, view it through a tiny local server (not by double-clicking the file):

```bash
cd curated_V3
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

(Any static server works — e.g. `npx serve` if you have Node.)

---

## Deploy it (free)

This site is ready for **Cloudflare Pages** (or Netlify / GitHub Pages) — there's no build step.

### Cloudflare Pages
1. Push this folder to a GitHub repo (or use Cloudflare's direct upload).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages**.
3. Connect the repo. When asked for build settings:
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (the folder containing `index.html`)
4. Deploy. You'll get a free `*.pages.dev` URL with HTTPS; add your custom domain in the Pages settings.

### Before launch
Work through the **Going-live checklist** in [`CHANGEME.md`](CHANGEME.md) — most importantly, connect the form to Formspree and send yourself a test inquiry.

---

## Structure

```
curated_V3/
├── index.html        # all content + structure
├── css/styles.css    # design system + section styles
├── js/main.js        # nav, scroll reveals, count-ups, FAQ, form
├── favicon.svg       # browser-tab icon
├── images/           # all photography (swap with your own)
├── CHANGEME.md       # content & form customization guide
└── README.md         # this file
```

## Credits
Placeholder photography from [Unsplash](https://unsplash.com) (free under the Unsplash License). Fonts: Cormorant Garamond, Jost & Pinyon Script via Google Fonts. Replace the placeholder photos and copy with your own before launch — see `CHANGEME.md`.
