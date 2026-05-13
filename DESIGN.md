# DESIGN.md — Brookside Party Warehouse

> Source of truth for brand identity, visual rules, and voice.
> Updated: 2026-05-13. Built by Simon L. Paige.

## Brand Overview

- **Client**: Jerri Brandon — Brookside Party Warehouse
- **Domain**: brooksideparty.com
- **Purpose**: Party supply store serving KC metro. Walk-in retail + online browsing.
- **Audience**: KC families planning parties, events, celebrations. Halloween is a major season.

## Visual Identity

- **Background**: `--cream: #FFF8EC` (warm off-white) / `--paper: #FFFDF7`
- **Primary text**: `--ink: #1B1A1F`
- **Muted/secondary**: `--ink-mute: #6E6C75`
- **Accent rainbow**: balloons and confetti use `--red`, `--orange`, `--yellow`, `--green`, `--blue`, `--pink`
- **Spookier (Halloween mode)**: `--void: #07070A`, `--blood: #C8102E`, `--bone: #EDE6D2`, `--acid: #B6FF3D`

## Typography

- **Display/headings**: Bricolage Grotesque (fallback: Recoleta, Georgia, serif)
- **Body**: DM Sans (fallback: Helvetica Neue, Arial, sans-serif)
- **Mono/eyebrow labels**: JetBrains Mono
- H1: clamp(48px, 7vw, 96px), tight line-height 0.96
- H2: clamp(32px, 4vw, 56px)
- Eyebrow labels: 12px, 0.18em letter-spacing, uppercase, mono font

## Layout Rules

- Max content width: 1280px (`--container`)
- Padding: 32px horizontal on container
- Corner radii: `--r-sm: 8px`, `--r-md: 14px`, `--r-lg: 22px`, `--r-pill: 999px`
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- Mobile-first

## Voice

- Warm, celebratory, a little playful
- Not corporate -- this is a neighborhood party store run by a real person
- Jerri's store has been serving KC families for years. The voice should feel like her.
- No AI-speak, no marketing superlatives like "best-in-class" or "seamless"

## Seasonal Modes

The site has two modes -- regular and Spookier (Halloween). CSS custom props swap on `.spookier` class:
- Spookier uses the void/blood/bone/acid palette
- Keep both modes working when making any CSS changes

## Required on Every Page

- `<html lang="en">`
- Meta title + description
- JSON-LD LocalBusiness schema
- `<main>`, `<nav>`, `<footer>` landmarks
- Footer credit: **Designed in KCMO -- simonlpaige.com**
- Alt text on all images (currently lacking -- Gemma review needed)

## Logo

- Logo lives in `images/` (old-logo.png) and design-system/uploads/
- The `logo.jsx` in design-system is the design reference
- When creating favicon: extract from logo, export as 32x32 PNG then convert to ICO

## Change Log

| Date | What changed |
|------|-------------|
| 2026-05-13 | Website-workflow migration: added scripts/, design-system/, required files |
