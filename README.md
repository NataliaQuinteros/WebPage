# Portfolio

Personal portfolio site — plain HTML, CSS and JavaScript. No build step, no
dependencies, no framework to update. Deployed with GitHub Pages.

**Live:** https://USERNAME.github.io/portfolio/

## Files

```
index.html        the whole page (all content lives here)
404.html          not-found page
css/styles.css    design tokens at the top, then styles by section
js/main.js        theme toggle, scroll reveal, active nav link
assets/           favicon, resume.pdf, images
.nojekyll         tells GitHub Pages to serve files as-is
```

## Editing

Everything you need to personalise is in `index.html`. Search for these and
replace them:

| Placeholder | Where | Replace with |
| --- | --- | --- |
| `USERNAME` | throughout | your GitHub / LinkedIn username |
| `Project One/Two/Three` | Work section | your real projects |
| About paragraphs | About section | two short paragraphs about you |
| `chips` lists | About section | your actual skills |

To add a project, copy one whole `<article class="project">` block, paste it
after the last one, and bump the number. To remove one, delete its block.

Colours, fonts and spacing are CSS variables at the top of `css/styles.css` —
change `--accent` to restyle the whole site in one edit.

Drop your CV at `assets/resume.pdf` and the Résumé links start working.

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
