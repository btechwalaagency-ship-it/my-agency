# BTech Marketing Wala

Website for BTech Marketing Wala — a full-service digital marketing studio based in Delhi.

**Services:** website design & development, logo & brand identity, Facebook/Instagram Ads, Google Ads, UGC & short-form video, performance marketing, SEO, social media management, and Google Maps / local ranking.

## Files

| File | What it is |
|---|---|
| `index.html` | The entire website — HTML, CSS and JavaScript in one self-contained file. No build step, no dependencies. |
| `assets/og-image.png` | Social share preview image (Open Graph / Twitter card), 1200×630. |
| `robots.txt` | Tells search engines which pages to crawl and points to the sitemap. |
| `sitemap.xml` | Lists the site's pages for search engines. |
| `CNAME` | Custom domain for GitHub Pages (`btechmarketingwala.in`). |

## SEO

The site ships with on-page and technical SEO already in place:

- Unique `<title>` and meta description targeting "digital marketing agency in Delhi"
- Canonical URL, `robots` meta tag, `robots.txt` and `sitemap.xml`
- Open Graph and Twitter Card tags with a branded social preview image
- `AdvertisingAgency` (LocalBusiness) JSON-LD structured data listing services, price range and service area
- Semantic HTML (single `h1`, ordered `h2`/`h3`), `preconnect` for Google Fonts, decorative icons marked `aria-hidden`

If the business gets a phone number or a specific street address, add them to the `address`/`telephone` fields in the JSON-LD block near the top of `index.html` — that strengthens local (Google Maps) ranking further.

## Running it locally

Download `index.html` and double-click it. It opens in any browser.

## Publishing with GitHub Pages

1. Go to this repository's **Settings → Pages**.
2. Under **Source**, choose **Deploy from a branch**.
3. Pick the `main` branch and the `/ (root)` folder, then **Save**.
4. Wait a minute, then the site is live at `https://<username>.github.io/<repo-name>/`.

To use a custom domain later, add it under Settings → Pages → Custom domain, then point the domain's DNS at GitHub Pages.

## Editing content

Everything is plain text inside `index.html`:

- **Contact email** — search for `btechwalaagency@gmail.com`
- **Prices** — search for `9,000`, `8,000`, `1,500`, `500`, `7,000`
- **Headlines and copy** — find the text and change it

Avoid editing anything inside `< >` brackets unless you know what it does — that's the page structure.

## Contact

btechwalaagency@gmail.com
