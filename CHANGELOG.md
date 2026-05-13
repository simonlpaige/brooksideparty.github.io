# Changelog - Brookside Party Warehouse

## 2026-05-13 - Website workflow migration
- Added scripts/ directory (audit, screenshot, commit gate, preview, gemma-review)
- Extracted design system to design-system/ (tokens.css, styles.css, logo.jsx, components)
- Created DESIGN.md with full brand documentation
- Added required files: robots.txt, sitemap.xml, 404.html, llms.txt
- Added .gitignore, PHOTO-STYLE-GUIDE.md placeholder
- TODO: favicon.ico still needed (extract from logo, convert to ICO)
- TODO: alt text audit needed (run: node scripts/gemma-review.js --task alt-text)

