# 🚀 Go-Live Guide — Curated Travels by Crystal

A simple, step-by-step walkthrough to take the website from "on GitHub" to
"live on the internet." Follow the parts in order. Take your time — nothing here
can break anything, and every step is reversible.

**Your domain:** `curatedtravelsbycrystal.com` (bought on Cloudflare)
**Your code:** lives on GitHub at `birddypoo/curatedtravel`

---

## The big picture (what we're doing)

Think of it like opening a shop:
1. **The form** needs a mailbox so customer messages reach you → *Formspree*.
2. **The website files** need to be put on the internet → *Cloudflare Pages*.
3. **Your web address** needs to point at the shop → *attach your domain*.

That's it. Three parts.

---

## PART A — Set up the form (Formspree) 📬 ✅ DONE

**This part is already finished.** The form is connected to a live Formspree form
(ID `xeewrgrj`, wired into `js/main.js` line 138) and a connectivity test came back
successful — Formspree accepted the submission.

The only thing left is to **confirm a test inquiry actually lands in your inbox**
(Part B). The earlier `@fora.travel` problem was about the *recipient* address inside
Formspree's dashboard — make sure the email Formspree delivers to is one that received
and confirmed Formspree's verification email.

---

## PART B — Test the form 🧪

After Claude adds your Formspree ID:

1. Open the website preview (Claude will give you the link).
2. Scroll to **"Send an Inquiry"** at the bottom.
3. Fill it in with your OWN info and hit **Send My Inquiry**.
4. The **first** time, Formspree emails you to confirm it's really you —
   open that email and click the **confirm** button.
5. Send the test again. Within a minute, the message should arrive in your inbox. ✅

If it shows up in your inbox → the form works. 🎉

---

## PART C — Put the website on the internet (Cloudflare Pages) 🌐

This connects your GitHub code to Cloudflare so the world can see it.

1. Log in to **dash.cloudflare.com**.
2. On the left menu, click **Workers & Pages**.
3. Click **Create**, then the **Pages** tab, then **Connect to Git**.
4. Click **Connect GitHub** and allow Cloudflare to see your `curatedtravel` repo.
   (If it asks which repos, pick `curatedtravel` or "All repos.")
5. Choose the **curatedtravel** repository → click **Begin setup**.
6. On the settings screen, fill in EXACTLY:
   - **Project name:** `curated-travels` (or anything you like)
   - **Production branch:** `main`
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`  ← just a single slash
7. Click **Save and Deploy**.
8. Wait about 30 seconds. Cloudflare gives you a free test web address like
   `curated-travels.pages.dev`. **Click it** — your website is now live there! 🎉

> From now on, every time Claude saves a change to GitHub, Cloudflare updates the
> live site automatically in about 30 seconds. You never upload anything by hand.

---

## PART D — Connect your real domain 🏷️

Now we point your domain at the site. We use **`www.curatedtravelsbycrystal.com`**
as the primary address (the "canonical" one), and the bare
`curatedtravelsbycrystal.com` automatically redirects to it.

1. Still in your Pages project, click the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Type **`www.curatedtravelsbycrystal.com`** and click **Continue** → **Activate domain**.
4. Click **Set up a custom domain** again and add the bare
   **`curatedtravelsbycrystal.com`** too, so both addresses resolve. (To make the bare
   domain *redirect* to `www`, add a **Redirect Rule** later: dashboard → your domain →
   **Rules → Redirect Rules**. Not required for launch — `<link rel="canonical">`
   already tells Google `www` is the real one.)
5. Because the domain is already on Cloudflare, it sets everything up for you
   automatically.
6. Wait a few minutes. When both show **Active**, type your domain into a browser —
   your site loads, with the secure 🔒 lock (HTTPS). **You are LIVE.** 🥳

---

## PART E — Final checks before you share it 👀

- [ ] Open the live site on your **phone** (not just a computer). Scroll the whole page.
- [ ] Tap the **Instagram, Facebook, and TikTok** links — they open your profiles.
- [ ] Send **one real inquiry** from the live site and confirm it reaches your inbox.
- [ ] Click the **Privacy** and **Terms** links in the footer; read them once.
- [ ] (Recommended) Replace the **About photo** with a real picture of you
      (send it to Claude — see below).

---

## What Claude needs from YOU

| To finish... | Send Claude... |
|--------------|----------------|
| The form | Your **Formspree Form ID** (e.g. `xwkgabcd`) |
| Your portrait | A **photo of yourself** (portrait/vertical looks best) — put it in a folder and tell Claude the path, like you did with the Zion photo |
| (Optional) phone | The **phone number** you want shown |

## What Claude will do for you

- Paste in the Formspree ID and save it to GitHub.
- Swap in your portrait photo and optimize it.
- Be here to fix anything that looks off during the Cloudflare steps —
  just tell Claude what screen you're on.

---

### Quick order of operations
1. You get the **Formspree ID** → send to Claude. *(Part A)*
2. Test the form. *(Part B)*
3. Connect **Cloudflare Pages**. *(Part C)*
4. Attach your **domain**. *(Part D)*
5. Final phone/inbox checks → **share your link!** *(Part E)*
