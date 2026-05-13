# Brookside Party Warehouse

**Client**: Jerri Brandon
**Domain**: brooksideparty.com
**GitHub**: https://github.com/simonlpaige/brooksideparty.github.io
**Live site**: https://brooksideparty.com

## Workflow

```
node scripts/preview.js                  # local server + browser
node scripts/audit.js --no-a11y         # quick file/HTML audit
node scripts/audit.js                   # full audit (needs server running)
node scripts/gemma-review.js            # local AI suggestions
node scripts/commit.js "message"        # audit -> screenshot -> verify -> commit + push
```

## Structure

See [DESIGN.md](DESIGN.md) for brand rules and design tokens.
See [PHOTO-STYLE-GUIDE.md](PHOTO-STYLE-GUIDE.md) for image guidelines.

## Design System

The `design-system/` directory contains:
- `tokens.css` - CSS custom properties (source of truth)
- `styles.css` - full brand stylesheet
- `logo.jsx` - logo design reference
- `uploads/` - client photos and style guide assets

## TODO

- [ ] favicon.ico - extract from logo, convert to 32x32 ICO
- [ ] Alt text audit: `node scripts/gemma-review.js --task alt-text`
- [ ] Sitemap.xml - add all pages (contact.html, spookier.html)
- [ ] llms.txt - fill in business description + hours

## Deploy

Auto-deploys on push to `main` via GitHub Pages.
Custom domain: brooksideparty.com (CNAME in repo root)
