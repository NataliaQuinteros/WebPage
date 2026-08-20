# Portfolio

Personal portfolio site — plain HTML, CSS and JavaScript. No build step, no
dependencies, no framework to update. Deployed with GitHub Pages.

**Live:** https://NataliaQuinteros.github.io/portfolio/

## Files

```
index.html        the whole page (all content lives here)
404.html          not-found page
css/styles.css    design tokens at the top, then styles by section
js/main.js        theme toggle, scroll reveal, active nav link
assets/           favicon, images
.nojekyll         tells GitHub Pages to serve files as-is
```

## Sections

Hero → Selected work → Experience → About (bio, education, CTFs, skills) →
Contact. Content is written directly in `index.html`; there's no CMS or data
file to keep in sync.

- **Add a project:** copy a whole `<article class="project">` block, paste it
  after the last one, bump the number. To make the whole row clickable, swap
  the title's `<span class="project__link">` for
  `<a class="project__link" href="...">`.
- **Add a job:** copy a whole `<li class="job">` block inside `<ol class="timeline">`.
- **Skills:** the `<ul class="chips">` lists in the About section.

Colours, fonts and spacing are CSS variables at the top of `css/styles.css` —
change `--accent` to restyle the whole site in one edit. Dark mode follows the
visitor's system setting, and the header toggle overrides it.

## Publishing the CV

The résumé link is commented out in `index.html` (hero section). The source CV
at `main.pdf` carries a home address and phone number, so it's listed in
`.gitignore` and never pushed. To publish a CV, save a version with those
details removed to `assets/resume.pdf` and uncomment the link.

## Preview locally

Open `index.html` in a browser, or run a local server so paths behave exactly
as they will in production:

```bash
npx serve .          # then open the URL it prints
# or
python -m http.server 8000
```

## Deploy

Push to `main`, then in the repo: **Settings → Pages → Build and deployment →
Deploy from a branch → `main` / `/ (root)`**. First build takes a minute or
two; later pushes go live within seconds.
