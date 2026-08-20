# Portfolio

Personal portfolio site. Plain HTML, CSS and JavaScript, no build step.
Deployed with GitHub Pages.

**Live:** https://NataliaQuinteros.github.io/portfolio/

## Credit

Built on the [Portfolio Responsive Complete](https://github.com/bedimcode/portfolio-responsive-complete)
template by [Bedimcode](https://www.youtube.com/@Bedimcode). The upstream repo
ships no licence file, so treat it as a tutorial template used with credit, kept
in the page footer and in the head of `index.html`. None of the original
author's photos are included here.

## Files

```
index.html            the whole page (all content lives here)
404.html              not-found page
assets/css/styles.css template styles, retheming and additions at the bottom
assets/js/main.js     mobile menu, active nav link, ScrollReveal, footer year
assets/img/           placeholder artwork, all meant to be replaced
assets/favicon.svg    browser tab icon
.nojekyll             tells GitHub Pages to serve files as-is
```

## Placeholder images to replace

`profile.svg` is your real cutout photo. The rest of `assets/img/` is still
generated placeholder art.

| File | Shows | Replace with |
| --- | --- | --- |
| `about.svg` | abstract shapes | a photo for the About section |
| `work1.svg` to `work4.svg` | project name cards | screenshots of each project |

Keep the filenames and the images swap in with no code changes. If you switch
to `.jpg` or `.png`, update the `src` in `index.html` too.

## Editing

- **Projects:** the `work__img` blocks in the Work section. Each has an image,
  a title, a description and a tag line. To make a card clickable, swap its
  wrapping `<div class="work__img">` for `<a href="..." class="work__img">`.
- **Experience:** the `experience__item` blocks.
- **Skills:** the `skills__data` blocks. The bar width comes from
  `skills__advanced` (90%) or `skills__intermediate` (65%), and the label text
  next to it is plain text.
- **Colour:** `--hue-color` at the top of `assets/css/styles.css` drives the
  palette. Note that `--first-color` is darkened from the template's original
  60% lightness to 27%, because white button text on the lighter teal fell
  below readable contrast. If you change the hue, check contrast again.
- **Fonts:** Inter for body text, Roboto for numerals and small labels. The
  template originally used Poppins, restored by changing `--body-font`.

## Contact form

The form posts to Formspree, which needs a free account. Create a form at
[formspree.io](https://formspree.io) and paste your endpoint into the `action`
attribute in the Contact section, replacing `YOUR_FORM_ID`. Until then the form
will not deliver anything, but the email link beside it works.

## The cutout photo

`assets/img/profile.svg` is you, cut out of `20251008_135650.heic` with the
background and the backpack removed. It embeds a WebP, which keeps it at about
80KB instead of the 1MB a PNG would cost, and every current browser renders it.
Some desktop vector editors do not read WebP, so `assets/img/natalia-cutout.png`
holds the same cutout as a plain transparent PNG for anything outside a browser.

The source `.heic` is gitignored. It is a full resolution personal photo the
site does not need.

## Publishing the CV

There is no résumé link on the page. The source CV at `main.pdf` carries a home
address and phone number, so it is listed in `.gitignore` and never pushed. To
publish one, save a version with those details removed to `assets/resume.pdf`
and link it.

## External dependencies

Two CDN files, both needed for the template to look right:

- Boxicons, for every icon on the page
- ScrollReveal, for the scroll animations

## Preview locally

Open `index.html` in a browser, or run a local server:

```bash
npx serve .
# or
python -m http.server 8000
```

## Deploy

Push to `main`, then in the repo: **Settings → Pages → Build and deployment →
Deploy from a branch → `main` / `/ (root)`**.
