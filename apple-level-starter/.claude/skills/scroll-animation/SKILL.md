---
name: scroll-animation
description: Build Apple-style scroll-driven animation websites from an MP4 video and brand.json (Firecrawl output). Handles brand discovery, frame extraction, WebP conversion, canvas rendering, GSAP ScrollTrigger, premium design, and full website build.
---

# Apple-Level Scroll Animation Website Builder

When invoked, this skill builds a complete Apple-style landing page from an MP4 video. The user only provides a video file and brand information. Everything else is automated.

## Full Pipeline

```
User provides: assets/brand.json (Firecrawl output) + assets/video.mp4
         ↓
Step 0: Read brand.json → extract colors, fonts, logo, button styles
Step 1: Analyze video (ffprobe) → calculate optimal fps
Step 2: Extract frames (ffmpeg) → WebP in public/frames/
Step 3: Extract mobile frames → WebP in public/frames/mobile/
Step 4: Scaffold Next.js project with dependencies
Step 5: Build complete Apple-style website with scroll animation, branded
Step 6: Verify with screenshots (Playwright)
```

---

## STEP 0: Brand Discovery

Read `assets/brand.json` first. This is the Firecrawl output containing the user's brand.

Extract these key values and use them throughout the build:

```
FROM brand.json:
├── colors.primary        → CTA buttons, accent elements, hover states
├── colors.accent         → Secondary highlights, links
├── colors.background     → Page background color
├── colors.textPrimary    → Main text color for headings
├── colorScheme           → "light" or "dark" — follow this for the whole site
├── fonts[role=heading]   → Heading font-family (download from Google Fonts if needed)
├── fonts[role=body]      → Body font-family
├── typography.fontStacks → Full fallback stacks for CSS
├── images.logo           → Download and place in public/ for nav + footer
├── images.favicon        → Download and place in public/
├── components.buttonPrimary  → Button styling (bg, text color, border-radius)
├── components.buttonSecondary → Secondary button styling
├── spacing.borderRadius  → Default border radius for cards/elements
└── personality.tone      → Inform copywriting tone
```

**Brand adaptation rules:**
- Follow the brand's `colorScheme` — if "light", build a light website. If "dark", build dark. Match the brand.
- Use the brand's `colors.primary` as the accent/CTA color INSTEAD of the default Apple blue (#0071E3)
- Use the brand's heading font (from `fonts[role=heading]`) — apply Apple-style sizing (clamp, tight line-height, heavy weight)
- Download the logo from `images.logo` URL and save to `public/logo.svg` (or .png)
- Apply `components.buttonPrimary` styling to CTA buttons
- Ensure the animation background matches the first frame's background color for a seamless look

**If `assets/brand.json` is missing:** Ask the user to provide it. Tell them to run Firecrawl's `/extract` endpoint on their website and save the output as `assets/brand.json`.

**Find the video:** Look for any `.mp4` file in `assets/`. If multiple exist, use the largest one or ask the user which to use.

---

## STEP 1: Analyze the Video

Always run this first:

```bash
ffprobe -v error -show_entries format=duration -show_entries stream=width,height,r_frame_rate -of default=noprint_wrappers=1 VIDEO.mp4
```

Calculate: `fps = 150 / duration_in_seconds` (target 150 frames for desktop).

## STEP 2: Extract Desktop Frames

Create the output directory and extract:

```bash
mkdir -p public/frames
ffmpeg -i VIDEO.mp4 \
  -vf "fps=CALCULATED_FPS,scale=1920:-1" \
  -c:v libwebp \
  -quality 80 \
  -compression_level 6 \
  -preset picture \
  -an \
  public/frames/frame-%03d.webp
```

Verify: `ls public/frames/*.webp | wc -l` should be ~150. Total size target: 5-15MB.

## STEP 3: Extract Mobile Frames

Fewer frames, lower resolution for mobile:

```bash
mkdir -p public/frames/mobile
ffmpeg -i VIDEO.mp4 \
  -vf "fps=MOBILE_FPS,scale=1080:-1" \
  -c:v libwebp \
  -quality 75 \
  -compression_level 6 \
  -preset picture \
  -an \
  public/frames/mobile/frame-%03d.webp
```

Use `MOBILE_FPS = 80 / duration_in_seconds` (target 80 frames for mobile).

## STEP 4: Scaffold the Project

Use Next.js with App Router:

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-eslint --import-alias "@/*"
npm install gsap lenis
```

Move the extracted frames into `public/frames/` if not already there.

**CRITICAL: After scaffolding, check globals.css for wildcard CSS resets like `* { margin: 0; padding: 0; }`. If present, REMOVE THEM. They override Tailwind v4 utility classes (`mx-auto`, `px-6`, etc.) and break all spacing/centering across the entire site. Tailwind v4's preflight already handles base resets — never add your own.**

## STEP 5: Build the Website

### A. DESIGN SYSTEM — Apple-Style Rules

Follow these rules for EVERY element on the page. This is what makes it look Apple-level instead of AI slop.

#### Colors

Adapt to the brand's `colorScheme` from brand.json. Use the brand's actual colors — don't override them.

**If colorScheme is "dark":**
```css
--bg-primary: #000000;
--bg-section: #101010;
--bg-card: #1D1D1F;
--text-primary: #F5F5F7;
--text-secondary: #86868B;
--accent: /* brand colors.primary */;
```

**If colorScheme is "light":**
```css
--bg-primary: /* brand colors.background */;
--bg-section: /* slightly darker/lighter variant */;
--bg-card: #FFFFFF;
--text-primary: /* brand colors.textPrimary */;
--text-secondary: /* muted version of textPrimary */;
--accent: /* brand colors.primary */;
```

NEVER use: purple gradients, rainbow gradients, indigo-500, or any "AI default" colors. Use the brand's actual palette.

#### Typography

```css
/* Headings: large, tight, heavy */
font-family: 'SF Pro Display', 'Inter Tight', 'Outfit', system-ui, sans-serif;
/* Pick ONE premium font. NEVER use Inter, Roboto, or Arial alone. */

h1 { font-size: clamp(2.5rem, 6vw, 5rem); line-height: 1.08; font-weight: 700; letter-spacing: -0.03em; }
h2 { font-size: clamp(2rem, 4vw, 3.5rem); line-height: 1.1; font-weight: 600; letter-spacing: -0.02em; }
h3 { font-size: clamp(1.25rem, 2vw, 1.75rem); line-height: 1.2; font-weight: 600; }

/* Body text */
p { font-size: clamp(1rem, 1.5vw, 1.25rem); line-height: 1.5; color: var(--text-secondary); }
```

Key rules:
- Headings: TIGHT line-height (1.08-1.1), NEGATIVE letter-spacing, LARGE size
- Body: relaxed line-height (1.5), gray color (#86868B), max-width for readability
- Use `clamp()` for fluid responsive sizing — never use fixed breakpoint jumps
- If user specifies a font, use it. Otherwise pick something distinctive (NOT Inter/Roboto).

#### Spacing

```css
/* Section padding: generous */
section { padding: 120px 0; }  /* 80px minimum, 140px for hero */

/* Content width: constrained text, full-bleed media */
.content { max-width: 980px; margin: 0 auto; padding: 0 24px; }

/* Cards */
.card { padding: 40px; border-radius: 24px; background: var(--bg-card); }
```

Apple uses GENEROUS whitespace. When in doubt, add more padding, not less.

**CRITICAL: Every content section MUST wrap its content in a centered container:**
```html
<div className="max-w-[980px] mx-auto px-6">
  <!-- section content here -->
</div>
```
Text must NEVER touch the viewport edges. This is the #1 cause of "looks like AI slop" — missing containers.

#### Animations & Transitions

- Scroll animations: `scrub: 1.5` (1.5s catch-up lag for buttery feel — 0.5 is too snappy)
- Hover transitions: `transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)`
- Text reveals: staggered opacity + translateY with `ease: "power2.out"`
- Page load: single orchestrated reveal with staggered delays (0.1s between elements)
- NEVER: bouncy springs, excessive jitter, or animations that feel "playful" — Apple is CALM

#### Layout Patterns

- Full-viewport hero section (`min-h-screen`)
- Pinned scroll-animation sections (canvas locked while user scrolls)
- Alternating: full-bleed media section → constrained text section
- Feature grids: 2-3 columns with generous gaps (gap-8 minimum)
- Sticky navigation: fixed top, black/dark with `backdrop-filter: blur(20px) saturate(180%)`
- Footer: minimal, dark, small text

### B. SCROLL ANIMATION COMPONENT

The core scroll-driven animation using canvas + GSAP. **IMPORTANT: Use GSAP `pin: true` for pinning — do NOT use CSS `position: sticky`. GSAP pin works reliably with Lenis smooth scroll; CSS sticky does not.**

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  frameDir: string;
  frameCount: number;
}

export function ScrollAnimation({ frameDir, frameCount }: ScrollAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Track when first bitmap is ready — shows static img until then (LCP)
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const playhead = { frame: 0 };
    let currentFrameIndex = -1;

    // Detect mobile and use appropriate frame set
    const isMobile = window.innerWidth <= 768;
    const dir = isMobile ? `${frameDir}/mobile` : frameDir;
    const count = isMobile ? Math.round(frameCount * 0.53) : frameCount;

    canvas.width = isMobile ? 1080 : 1920;
    canvas.height = isMobile ? 1080 : 1920;

    const urls = Array.from({ length: count }, (_, i) =>
      `${dir}/frame-${String(i + 1).padStart(3, '0')}.webp`
    );

    // Pre-decode all frames via createImageBitmap — runs off the main thread.
    // This prevents scroll jank: bitmaps are GPU-ready before the user reaches
    // the animation section. Using new Image() + drawImage() decodes on the
    // main thread during scroll and causes visible stuttering.
    const bitmaps: (ImageBitmap | null)[] = new Array(count).fill(null);
    let loadedCount = 0;
    let failedCount = 0;

    urls.forEach((url, i) => {
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => createImageBitmap(blob))
        .then((bitmap) => {
          bitmaps[i] = bitmap;
          loadedCount++;
          if (i === 0) {
            drawBitmap(bitmap);
            setFirstFrameReady(true); // hide static fallback img
          }
          if (loadedCount + failedCount === count) initAnimation(count);
        })
        .catch(() => {
          failedCount++;
          if (loadedCount + failedCount === count) initAnimation(count);
        });
    });

    function drawBitmap(bitmap: ImageBitmap) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    }

    function render() {
      const newIndex = Math.round(playhead.frame);
      if (newIndex !== currentFrameIndex && bitmaps[newIndex]) {
        currentFrameIndex = newIndex;
        drawBitmap(bitmaps[newIndex]!);
      }
    }

    function initAnimation(totalFrames: number) {
      gsap.to(playhead, {
        frame: totalFrames - 1,
        ease: 'none',
        onUpdate: render,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=400%',    // 400% of viewport = 400vh of scroll distance
          scrub: 1.5,       // 1.5s catch-up lag — buttery smooth; 0.5 felt too snappy
          pin: true,         // GSAP handles pinning — NOT CSS sticky
          pinSpacing: true,  // Adds scroll height automatically
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      // Release GPU memory when component unmounts
      bitmaps.forEach((b) => b?.close());
    };
  }, [frameDir, frameCount]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Static first frame — visible until canvas renders its first bitmap.
          Serves as the LCP element: browser can display it from HTML without
          waiting for JS. fetchpriority="high" ensures it loads immediately. */}
      {!firstFrameReady && (
        <img
          src={`${frameDir}/frame-001.webp`}
          alt=""
          className="absolute left-1/2 top-1/2 max-w-full max-h-full w-auto h-auto pointer-events-none"
          style={{ transform: 'translate(-50%, -50%)' }}
          // @ts-ignore — fetchpriority not yet in React types
          fetchpriority="high"
        />
      )}
      {/* Canvas — centered, maintains 16:9 aspect ratio, NEVER stretched */}
      <canvas
        ref={canvasRef}
        className="absolute left-1/2 top-1/2"
        style={{
          transform: 'translate(-50%, -50%)',
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          opacity: firstFrameReady ? 1 : 0,
        }}
      />
    </div>
  );
}
```

**Critical rules for this component:**
- Container is `h-screen` — GSAP `pinSpacing: true` adds the scroll distance automatically
- `end: '+=400%'` means 400vh of scroll scrubbing (adjust for longer/shorter animations)
- **Canvas MUST NOT stretch** — use `inset-0 w-full h-full` for the canvas element, but in the `drawFrame` function, fill with `#FFFFFF` first, then draw the image CENTERED maintaining aspect ratio. This prevents stretching while ensuring no edge gaps.
- Set `canvas.width` and `canvas.height` to `offsetWidth * devicePixelRatio` for crisp rendering, then `ctx.scale(dpr, dpr)`.
- Apply `style={{ filter: 'brightness(1.06)', mixBlendMode: 'multiply' }}` on the canvas to eliminate the near-gray frame backgrounds. Video frames are never pure white — this pushes them to white.
- Set `--bg-primary: #FFFFFF` (pure white) in globals.css — the page bg MUST match the frame bg. Override the brand's bg color if it's not pure white.
- NEVER use CSS `position: sticky` on the canvas — it breaks with Lenis smooth scroll
- NEVER use `end: 'bottom bottom'` with a tall container — use `+=` percentage instead
- Always include `onerror` handler so animation initializes even if some frames fail to load
- Check `img.complete && img.naturalWidth > 0` before drawing to skip broken frames

### C. SMOOTH SCROLLING SETUP

Always add Lenis for buttery-smooth scroll:

```tsx
// In layout.tsx or a provider component
'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => { lenis.destroy(); };
  }, []);

  return <>{children}</>;
}
```

### D. TEXT REVEAL ANIMATIONS

Staggered text reveals for headings and paragraphs as they scroll into view:

```tsx
useEffect(() => {
  gsap.utils.toArray('.reveal-text').forEach((el) => {
    gsap.from(el as Element, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el as Element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}, []);
```

### E. GLASSMORPHISM NAVIGATION

```tsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10">
  <div className="max-w-[980px] mx-auto px-6 h-14 flex items-center justify-between">
    {/* Logo + nav items */}
  </div>
</nav>
```

### F. WEBSITE SECTIONS TO BUILD

Build these sections in this order:

1. **Navigation** — glassmorphism fixed nav with logo + minimal links
2. **Hero** — full-viewport, large headline, subtitle, CTA button. **MUST include a product image** using the first animation frame (`/frames/frame-001.webp`). Style it with `rounded-2xl shadow-2xl` for a premium look. Consider showing first AND last frame together to hint at the animation. Never leave the hero as text-only.
3. **Scroll Animation** — the canvas frame sequence section. **The page background (`--bg-primary`) MUST be set to match the video frame background color (usually `#FFFFFF` pure white).** Even if the brand's Firecrawl output has a slightly different background like `#FFFEFB`, override it to match the frames. Any mismatch — even 1-2% — creates an ugly visible color shift where the canvas meets the page. Check the frame backgrounds and set `--bg-primary` accordingly. Add **edge callouts** (see section H below) that label product parts during the animation.
4. **Feature Highlights** — 2-3 column grid with icons/images. Staggered reveal on scroll.
5. **Specs/Details** — alternating text + image sections with parallax.
6. **Social Proof / Testimonials** — if applicable.
7. **CTA** — final call-to-action section. Large headline + button.
8. **Footer** — minimal, dark, small text.

### G. ANTI-SLOP CHECKLIST

Before finalizing, verify NONE of these are present:

- [ ] Inter, Roboto, or Arial as heading font
- [ ] Purple/indigo gradients on white backgrounds
- [ ] Generic hero with "Welcome to..." or "Discover the future of..."
- [ ] Evenly-distributed rainbow color palette
- [ ] Card grid with identical borders and shadows (cookie-cutter)
- [ ] Small, timid typography (headings under 2.5rem)
- [ ] Tight spacing (sections with less than 80px padding)
- [ ] Generic backgrounds that don't match the brand palette
- [ ] Stock-looking gradient backgrounds
- [ ] Bouncy/playful animations (springs, jiggle, etc.)
- [ ] `* { margin: 0; padding: 0; }` wildcard CSS reset — this BREAKS Tailwind v4 utilities. NEVER use it.
- [ ] Content sections without `max-w-[980px] mx-auto px-6` container — text must never touch the viewport edges
- [ ] Hero section with no product image — always include a visual
- [ ] Animation section background that doesn't match the frame backgrounds (creates ugly edge)

If ANY of these are present, fix them immediately.

### H. SCROLL ANIMATION CALLOUTS

During the scroll animation, add labeled callouts that identify product parts. These appear and disappear at different scroll progress points, like an Apple product teardown.

**Key principle: The video is always 16:9 with the product centered and WHITE edges. Callouts go in the white margin areas, NOT on top of the product.**

**Positioning approach (works for ANY product, ANY animation):**
- Place callout labels on the LEFT and RIGHT edges of the viewport, in the white margin zones
- Use thin dashed horizontal lines extending INWARD from the label toward the center
- Lines should stop at roughly 30-35% from the edge — do NOT try to reach the exact product part
- This works regardless of the animation frame because the product is always in the center area

**Implementation:**
```tsx
{/* Callout positioned in the left margin */}
<div className="absolute left-[5%] top-[45%] opacity-0 callout-label">
  <div className="flex items-center gap-3">
    <div className="text-right">
      <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent">SHELL</p>
      <p className="text-sm text-gray-500">Recycled composite</p>
    </div>
    <div className="w-[120px] border-t border-dashed border-gray-400" />
  </div>
</div>
```

- Use 3-4 callouts, spread across the animation (e.g., 20-40%, 35-55%, 50-70%, 65-85% scroll progress)
- Each callout fades in with `opacity: 0 → 1` and `x: -20 → 0` (or `x: 20 → 0` for right-side)
- Use GSAP ScrollTrigger with `scrub: true` tied to the animation container's scroll progress
- Alternate sides: left, right, left, right for visual balance

---

## Performance Best Practices

### Preloading with IntersectionObserver

For scroll sections below the fold:

```js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        preloadFrames();
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '300px' }
);
```

### Core Web Vitals

- **LCP:** Draw first frame immediately. Add a loading state/skeleton.
- **CLS:** Canvas must have explicit dimensions via CSS (`w-screen h-screen`).
- **INP:** Use GSAP (handles rAF internally). Never use raw scroll event listeners.
- Only animate GPU-accelerated properties: `transform`, `opacity`. NEVER animate `top`, `left`, `width`, `height`.

### Image Optimization

- All frames: WebP format, quality 80, compression level 6
- Desktop: 1920px wide, ~150 frames, total 5-15MB
- Mobile: 1080px wide, ~80 frames, total 2-5MB
- Per frame target: 30-80KB (desktop), 20-50KB (mobile)

---

## Checklist Before Done

- [ ] FFmpeg extracted frames successfully (check count + total size)
- [ ] First frame renders immediately on page load (no blank canvas)
- [ ] Scroll animation is smooth (scrub: 1.5)
- [ ] Mobile uses reduced frame set automatically
- [ ] Lenis smooth scroll is active
- [ ] Navigation has glassmorphism blur
- [ ] Typography follows Apple rules (large, tight, heavy headings)
- [ ] Spacing is generous (120px+ section padding)
- [ ] Color scheme matches brand.json colorScheme (dark or light)
- [ ] Anti-slop checklist passes (no generic AI patterns)
- [ ] Text reveals animate on scroll
- [ ] All interactive elements have hover states
- [ ] `overflow-x: hidden` on body (no horizontal scroll artifacts)
- [ ] Responsive: works on mobile, tablet, desktop
