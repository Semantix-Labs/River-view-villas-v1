# Apple-Level Website Builder

You provide a few things. Claude Code builds everything else.

---

## What You Provide

Drop these in the `assets/` folder:

### 1. `brand.json` — Your brand assets

Extract your brand from any website using Firecrawl's `/extract` endpoint. Save the output as `assets/brand.json`.

Includes colors, fonts, logo URL, button styles, and design tokens. Claude Code reads it all automatically.

### 2. `first-frame.png` — Your hero product image

The image Claude Code analyzes to understand what to display in the hero section. May also be a `.jpg` file.

---

## How to Use

Open Claude Code in this folder and say:

> Build me an Apple-level landing page for [product/company name]. It's a [one-line description].

That's it.

---

## What You Get

A production-ready Next.js website with:
- Your brand colors, fonts, and logo applied everywhere
- Premium typography, spacing, and animations
- Responsive (desktop + mobile)
- Smooth scrolling via Lenis

## Prerequisites

- **Node.js 18+**

---

## Brand Asset Rules — CRITICAL

> **These rules apply to every agent in every phase. No exceptions.**

### Colors
- Use ONLY the hex values in `assets/brand.json` → `branding.colors`
- Do NOT invent, add, or guess any additional colors from prior knowledge of the brand
- If a color isn't in brand.json, it does not exist — do not use it
- You MAY create utility variants (e.g. `--text-secondary`) but they MUST be opacity or lightness variants of brand.json colors, not invented values

### Logo
- Use the exact logo file from `assets/brand.json` → `branding.images.logo`
- Render it as an `<img>` tag pointing to that URL — do not substitute text, SVGs, or placeholders
- Do not invent a logo or draw one from memory
- If the logo URL is a data URI, use it directly as the `src`

### Fonts
- Load only the font families listed in `assets/brand.json` → `branding.fonts`
- Use Google Fonts or system fonts only if they're named there
- Do not add decorative or display fonts that aren't in brand.json

### Buttons & Components
- Apply border-radius, background, and text colors from `branding.components.buttonPrimary` and `buttonSecondary`
- Do not invent rounded corners, gradients, or shadows unless they're in brand.json

### The Rule
**If it's not in brand.json, don't use it.** Inventing brand assets makes the output look wrong and breaks trust.

---

## Layout Rules — CRITICAL

> Edge-hugging content looks broken. Follow these rules for every section.

### Centering
- Every section's content must be wrapped in a centered container: `max-width: 1100px; margin: 0 auto; padding: 0 48px`
- Never let text or content touch the viewport edges
- On mobile, minimum `padding: 0 24px`

### Spacing
- Sections need breathing room: minimum `padding: 120px 0` vertically
- Cards and grid items need gaps: minimum `gap: 32px`
- Headlines need `margin-bottom: 24px` before body text

### Typography
- Body text should never exceed `640px` wide (it becomes unreadable)
- Use `max-width: 640px` on paragraph containers

---

## How Claude Code Builds This (Orchestration)

When a user asks to build a page, follow this exact workflow using sub-agents:

### Phase 1 — Research & Analysis (2 sub-agents in parallel)

**Agent 1: Brand Research**
- Read `assets/brand.json`
- Use the brand name and metadata to understand what this company does, their industry, and tone of voice
- Do NOT look up the brand or use prior knowledge to invent brand colors, logos, or design choices — everything visual comes from brand.json only
- Output: Brand research summary (company description, value props, target audience, key messaging themes, tone)

**Agent 2: Technical Strategy**
- Read `assets/brand.json` (colors, fonts, components)
- Output a complete CSS variable map. Every variable must trace back to a brand.json value:
  ```css
  --brand-primary: [brand.json colors.primary]
  --brand-accent:  [brand.json colors.accent]
  --brand-bg:      [brand.json colors.background]
  --brand-text:    [brand.json colors.textPrimary]
  --text-secondary: [brand.json colors.textPrimary at 55% opacity — use rgba or hex variant]
  ```
- Decide layout and design approach based strictly on what brand.json provides
- Output: Technical plan (CSS variable map, layout structure, component choices, typography setup)

### Phase 2 — Build (1 sub-agent)

**Agent 3: Page Builder**
- Receives all outputs from Agents 1 and 2
- Scaffolds the Next.js project
- Writes `globals.css` using ONLY the CSS variable map from Agent 2 — no invented colors
- **Hero section:** Must include the product image (`assets/first-frame.png` or `.jpg`) as an `<img>` or Next.js `<Image>` — large, prominent, centered or right-column
- **Logo:** Rendered as `<img src="[brand.json logo URL]">` in the navigation — not text, not an invented SVG
- **All sections:** Wrapped in `max-width: 1100px; margin: 0 auto; padding: 0 48px` containers
- Output: The finished website

### Phase 3 — Verify

After the build agent finishes:

1. Run `npm run build` — must pass with zero errors
2. Start `npm run dev` on a free port
3. Take a full-page screenshot with Playwright:
   ```bash
   npx playwright screenshot --browser chromium --full-page http://localhost:PORT /tmp/verify-screenshot.png
   ```
4. **Read the screenshot** and visually confirm:
   - Hero section has visible headline, subheadline, CTA buttons, AND the product image
   - Logo is visible in the nav (not a broken image or fallback letter)
   - No large blank sections — every section has visible content
   - Content is centered, not edge-hugging the viewport
5. If anything looks wrong, fix it before declaring done
