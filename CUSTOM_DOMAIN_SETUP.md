# Custom Domain Setup — `abhinavhooda.in` on GitHub Pages

This guide walks you through hosting this portfolio on your GoDaddy-purchased domain `abhinavhooda.in` via GitHub Pages.

> What this repo includes:
> - `public/CNAME` → `abhinavhooda.in` (copied into `dist/` on build for the custom domain).
> - `.github/workflows/deploy.yml` → on every push to `main`, builds with Vite and publishes **only** `./dist` to the **`gh-pages`** branch (static output only).
> - `vite.config.js` → `base: '/'` (required for a custom apex domain; do **not** use `base: '/portfolio-abhinav/'` here).
> - `public/.nojekyll` → copied to `dist/` so GitHub Pages does not run Jekyll on your static assets.

You still need to do the steps below manually because they involve your GitHub repo settings and your GoDaddy DNS panel.

---

## CRITICAL — Blank page + console: `main.jsx` / MIME type `text/jsx`

That error means the live site is **not** your Vite build. GitHub Pages is publishing the **`main` branch repo root** (dev `index.html` → `/src/main.jsx`). Browsers cannot run JSX as a module.

**Fix — point Pages at the built site (`gh-pages` branch):**

1. Wait for the workflow **Deploy site to gh-pages** to finish green (**Actions** tab). The first successful run creates the `gh-pages` branch containing only `dist/` output (`/assets/index-….js`, `favicon.svg`, `CNAME`, etc.).
2. Repo → **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch** (not “GitHub Actions” for this repo’s setup).
4. Set **Branch** to **`gh-pages`** and folder **`/ (root)`**, then **Save**.  
   **Do not** leave **Branch: `main`** with **/(root)** — that is what causes `main.jsx` + MIME errors.
5. Hard refresh: `Cmd + Shift + R`.

After this, **View Page Source** on `https://abhinavhooda.in` should show `<script type="module" … src="/assets/index-….js">`, **not** `/src/main.jsx`.

If you previously set Source to **GitHub Actions** only, switch to **Deploy from a branch** → **`gh-pages`** / **(root)** so the site matches this workflow.

---

## Step 1 — Commit & push the new files

```bash
git add public/CNAME .github/workflows/deploy.yml CUSTOM_DOMAIN_SETUP.md
git commit -m "chore: configure custom domain (abhinavhooda.in) for GitHub Pages"
git push origin main
```

---

## Step 2 — Enable GitHub Pages from the `gh-pages` branch

1. Go to your repo: <https://github.com/abhinav0023/portfolio-abhinav>
2. Push `main` so **Deploy site to gh-pages** runs (**Actions** tab → wait for green). The first run creates the **`gh-pages`** branch.
3. **Settings** → **Pages** → **Build and deployment** → **Source** → **Deploy from a branch**.
4. **Branch:** `gh-pages` / **Folder:** `/ (root)` → **Save**.  
   Never use **`main` / (root)** for the published site — that serves source files and breaks the app.

---

## Step 3 — Add the custom domain in GitHub

1. Still in **Settings → Pages**, scroll to **Custom domain**.
2. Enter: `abhinavhooda.in`
3. Click **Save**.
   - GitHub will run a DNS check. It will fail right now (because we haven't set DNS yet) — that's fine.
   - This step also re-creates / verifies the `CNAME` file in the deployed branch.

---

## Step 4 — Configure DNS in GoDaddy

Log in to GoDaddy → **My Products** → find `abhinavhooda.in` → click **DNS** (or "Manage DNS").

You're going to:
- Point the **apex** (`abhinavhooda.in`) to GitHub Pages with **A records**.
- Point the **www** subdomain to your GitHub Pages site with a **CNAME**.

### 4a. Delete conflicting default records

GoDaddy ships every new domain with a "Parked" `A` record on `@` and sometimes a `CNAME` on `www` pointing to a GoDaddy parking page. **Delete those first**, otherwise the new ones will conflict.

In the DNS table, remove:
- Any `A` record where **Name = `@`** that does not match the four IPs below.
- Any `CNAME` record where **Name = `www`** pointing to GoDaddy (e.g. `_domainconnect...`, parking, etc.).

### 4b. Add the four GitHub Pages A records (apex)

Add these four records (one at a time):

| Type | Name | Value             | TTL       |
| ---- | ---- | ----------------- | --------- |
| A    | @    | `185.199.108.153` | 1 Hour    |
| A    | @    | `185.199.109.153` | 1 Hour    |
| A    | @    | `185.199.110.153` | 1 Hour    |
| A    | @    | `185.199.111.153` | 1 Hour    |

### 4c. (Recommended) Add AAAA records for IPv6

| Type | Name | Value                       | TTL    |
| ---- | ---- | --------------------------- | ------ |
| AAAA | @    | `2606:50c0:8000::153`       | 1 Hour |
| AAAA | @    | `2606:50c0:8001::153`       | 1 Hour |
| AAAA | @    | `2606:50c0:8002::153`       | 1 Hour |
| AAAA | @    | `2606:50c0:8003::153`       | 1 Hour |

### 4d. Add the `www` CNAME

| Type  | Name | Value                          | TTL    |
| ----- | ---- | ------------------------------ | ------ |
| CNAME | www  | `abhinav0023.github.io` *(note the trailing dot is added automatically by GoDaddy — just type `abhinav0023.github.io`)* | 1 Hour |

This makes both `https://abhinavhooda.in` and `https://www.abhinavhooda.in` work, with `www` redirecting to the apex (GitHub handles that automatically).

### 4e. Save and wait

Click **Save** for each record. DNS propagation usually takes **5–30 minutes** but can take up to 24 hours.

You can check propagation with:
```bash
dig abhinavhooda.in +noall +answer
dig www.abhinavhooda.in +noall +answer
```
or via <https://dnschecker.org/#A/abhinavhooda.in>.

---

## Step 5 — Re-verify the custom domain in GitHub & enable HTTPS

1. Go back to **Settings → Pages**.
2. The "DNS check in progress" / "DNS check unsuccessful" message should turn into a **green checkmark** once DNS has propagated.
3. **Tick the "Enforce HTTPS" checkbox.**
   - This may be greyed out for ~10–60 minutes after DNS resolves while GitHub provisions a Let's Encrypt cert. Just come back later and tick it.

---

## Step 6 — Test it

Open in your browser:
- <https://abhinavhooda.in>
- <https://www.abhinavhooda.in> (should redirect to the apex)

Hard-refresh with `Cmd+Shift+R` if you see a stale page.

---

## Re-deploying in the future

Just push to `main`:
```bash
git push origin main
```
The Actions workflow will rebuild `dist/` and redeploy automatically. The `CNAME` file is preserved on every deploy because it lives in `public/`.

---

## Troubleshooting

| Symptom | Likely cause / fix |
| --- | --- |
| Blank page; console: `main.jsx` / MIME `text/jsx` | Pages is publishing **`main` / (root)** (source). Set **Pages → Deploy from a branch → `gh-pages` / (root)** and ensure **Deploy site to gh-pages** workflow is green. See **CRITICAL** section above. |
| `favicon.svg` 404 | Same as above — wrong folder is being published; built site includes `favicon.svg` at site root. |
| GitHub keeps saying "Domain's DNS record could not be retrieved" | DNS hasn't propagated yet, or old GoDaddy parked `A`/`CNAME` records still exist. Delete conflicts and wait. |
| Site loads but assets (CSS/JS) are 404 | Your `vite.config.js` has a non-`/` `base`. For a custom domain it must be `/`. |
| `CNAME` file disappears from `gh-pages` after a deploy | Make sure `public/CNAME` exists in the repo — Vite copies everything in `public/` into `dist/` verbatim on each build. |
| HTTPS toggle is greyed out | Wait — Let's Encrypt cert can take up to an hour after DNS resolves. |
| `www` doesn't redirect to apex | Verify the `www` CNAME points to `abhinav0023.github.io` (your GitHub username, not the repo). |
| Old GitHub Pages URL `abhinav0023.github.io/portfolio-abhinav` still loads broken | Once a custom domain is set, GitHub redirects the old URL to the custom one. Clear cache. |

---

## Quick reference — what each piece does

- **`public/CNAME`** → tells GitHub Pages "this site should be served at `abhinavhooda.in`".
- **`A` records (apex)** → tell DNS "send `abhinavhooda.in` traffic to GitHub's servers".
- **`CNAME` record (www)** → tells DNS "`www.abhinavhooda.in` is an alias for `abhinav0023.github.io`".
- **GitHub Actions workflow** → builds the Vite app and pushes **only** `dist/` contents to the **`gh-pages`** branch on every push to `main`. Pages must read from **`gh-pages`**, not **`main`**.
