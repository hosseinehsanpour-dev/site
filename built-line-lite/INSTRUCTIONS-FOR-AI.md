# Paste this entire message to another AI

You are a senior front-end developer. Implement and polish **BUILT LINE Lite** civil engineer portfolio.

## Repo (already created — clone and work)
https://github.com/hosseinehsanpour-dev/site/tree/main/built-line-lite

```bash
git clone https://github.com/hosseinehsanpour-dev/site.git
cd site/built-line-lite
npm install
npm run dev
```

## Content source (already imported into content.json)
From https://github.com/https-sai/ce-portfolio — Projects, Experience, Credentials, Services, Hero, Contact, Footer.

## User must add
1. `public/media/hero.mp4` — Grok cinematic video (muted hero background)
2. `public/media/hero-poster.jpg` — optional
3. Copy PNGs from https://github.com/https-sai/ce-portfolio/tree/main/attached_assets/generated_images to `public/images/projects/`:
   - high-rise_construction_project.png
   - highway_interchange_infrastructure.png
   - pedestrian_bridge_design.png
   - commercial_building_exterior.png
   - water_treatment_infrastructure.png

## Stack (locked)
- Vite + vanilla HTML/CSS/JS
- NO React, NO Three.js, NO scroll hijacking
- `content.json` drives all text via `main.js`

## Sections
Hero video | stats 4 | services 4 | projects 5 (click budget/duration/scale) | experience 7 | credentials | contact mailto | footer

## Design
Dark #0f1117, accent #c4a574, DM Sans

## Your tasks
1. Verify all files present; fix any paths
2. Responsive polish + accessibility
3. `npm run build` → deploy `dist/` to GitHub Pages (or help user set base in vite if needed)
4. User edits `content.json` contact.email and LinkedIn

## Raw files if needed
- https://raw.githubusercontent.com/hosseinehsanpour-dev/site/main/built-line-lite/index.html
- https://raw.githubusercontent.com/hosseinehsanpour-dev/site/main/built-line-lite/styles.css
- https://raw.githubusercontent.com/hosseinehsanpour-dev/site/main/built-line-lite/main.js
- https://raw.githubusercontent.com/hosseinehsanpour-dev/site/main/built-line-lite/content.json
