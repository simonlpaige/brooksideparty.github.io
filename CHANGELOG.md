## 2026-05-14 — switch contact form from legacy Formspree to our own Cloudflare Worker + Resend
- **Author**: Simon Paige
- **Branch**: main
- **Audit**: PASSED
- **Screenshots**: C:\Users\simon\code\brooksideparty\screenshots\2026-05-14T12-23-18
- **Visual verify**: yes

## 2026-05-14 — speed up mobile marquee from 18s to 12s
- **Author**: Simon Paige
- **Branch**: main
- **Audit**: PASSED
- **Screenshots**: C:\Users\simon\code\brooksideparty\screenshots\2026-05-14T11-28-18
- **Visual verify**: yes

# Changelog - Brookside Party Warehouse

## 2026-05-13 - Website workflow migration
- Added scripts/ directory (audit, screenshot, commit gate, preview, gemma-review)
- Extracted design system to design-system/ (tokens.css, styles.css, logo.jsx, components)
- Created DESIGN.md with full brand documentation
- Added required files: robots.txt, sitemap.xml, 404.html, llms.txt
- Added .gitignore, PHOTO-STYLE-GUIDE.md placeholder
- TODO: favicon.ico still needed (extract from logo, convert to ICO)
- TODO: alt text audit needed (run: node scripts/gemma-review.js --task alt-text)

