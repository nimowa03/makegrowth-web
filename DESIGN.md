# MakeGrowth Design System — Supanova Premium Redesign

## 1. Visual Theme & Atmosphere

Warm editorial aesthetic meets modern SaaS. Warm Stone base with a single Muted Violet accent. Only the hero section uses dark background — all other sections use warm tones. Noise texture overlay across the entire page for premium depth.

Korean typography optimized with `word-break: keep-all` and `line-height: 1.7`. Generous section padding (`py-24 md:py-32 lg:py-40`). Double-Bezel card system. Floating glass pill navigation.

## 2. Color Palette & Roles

### Warm Stone Base
| Token | Hex | Role |
|-------|-----|------|
| `warm-dark` | `#171717` | Hero-only dark background |
| `warm-dark-surface` | `#292524` | Dark section surfaces |
| `warm-bg` | `#FAF9F7` | Primary body background |
| `warm-surface` | `#F5F5F4` | Alternating section background |
| `warm-surface-elevated` | `#FFFFFF` | Card inner surfaces |
| `warm-heading` | `#1C1917` | Body section headings |
| `warm-body` | `#57534E` | Body text |
| `warm-muted` | `#A8A29E` | Muted text, captions |
| `warm-border` | `rgba(28,25,23,0.06)` | Borders, dividers |
| `warm-shadow` | `rgba(28,25,23,0.04)` | Stone-tint shadows |

### Muted Violet Accent (single accent)
| Token | Hex | Role |
|-------|-----|------|
| `accent` | `#8B7CF6` | Primary accent — CTAs, links, active states |
| `accent-hover` | `#7C6AED` | Accent hover |
| `accent-muted` | `rgba(139,124,246,0.1)` | Background tint, badges |
| `accent-glow` | `rgba(139,124,246,0.2)` | CTA hover glow |

### Semantic
| Token | Hex | Role |
|-------|-----|------|
| `success` | `#059669` | Positive, "After" |
| `danger` | `#DC2626` | Negative, "Before" |
| `warning` | `#D97706` | Caution, "Coming Soon" |

### Gradient Text (selective use)
```css
background: linear-gradient(135deg, #8B7CF6, #A78BFA);
```
Only on hero H1 emphasis words (1-2 words max). Never on section titles.

## 3. Typography Rules

| Element | Desktop | Mobile | Weight | Font | Extra |
|---------|---------|--------|--------|------|-------|
| H1 Hero | 48px (3rem) | 32px (2rem) | 700 | Outfit + Pretendard | `tracking-tight leading-snug text-wrap:balance` |
| H2 Section | 36px (2.25rem) | 28px (1.75rem) | 700 | Pretendard | `leading-snug text-wrap:balance` |
| H3 Card | 24px (1.5rem) | 20px (1.25rem) | 600 | Pretendard | `leading-snug` |
| Body | 16px | 16px | 400 | Pretendard | `leading-relaxed` (line-height 1.7), `break-keep-all` |
| Small | 14px | 14px | 400 | Pretendard | `leading-relaxed` |
| Eyebrow | 11px | 11px | 500 | Pretendard | `uppercase tracking-[0.15em]` |

**Font stacks:**
- Display: `'Outfit', 'Pretendard Variable', 'Pretendard', sans-serif` — hero H1, Final CTA only
- Default: `'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif`

## 4. Component Stylings

### Double-Bezel Card
```html
<!-- Outer Shell -->
<div class="bg-black/[0.03] ring-1 ring-black/[0.04] p-1.5 rounded-[2rem]">
  <!-- Inner Core -->
  <div class="bg-white rounded-[calc(2rem-0.375rem)] p-6
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(28,25,23,0.04)]">
    <!-- content -->
  </div>
</div>
```

### Primary CTA (Solid Accent Pill)
```css
background: #8B7CF6;
color: #FFFFFF;
padding: 16px 32px;
border-radius: 9999px;
font-weight: 600;
transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
/* hover: scale(1.02), box-shadow: 0 0 30px rgba(139,124,246,0.2) */
/* active: scale(0.98) */
```

### Secondary CTA (Outlined Pill)
```css
background: transparent;
border: 1px solid rgba(28,25,23,0.06);
color: #1C1917;
padding: 16px 32px;
border-radius: 9999px;
/* hover: border-color accent/30, bg accent-muted */
```

### Eyebrow Tags
```css
display: inline-block;
padding: 4px 12px;
border-radius: 9999px;
font-size: 11px;
text-transform: uppercase;
letter-spacing: 0.15em;
font-weight: 500;
background: rgba(139,124,246,0.1);
color: #8B7CF6;
```

### Floating Glass Navigation
```css
/* After scroll */
position: fixed;
top: 16px;
left: 50%;
transform: translateX(-50%);
max-width: 800px;
background: rgba(250, 249, 247, 0.8);
backdrop-filter: blur(16px);
border: 1px solid rgba(28, 25, 23, 0.06);
border-radius: 9999px;
padding: 8px 24px;
box-shadow: 0 4px 24px rgba(28, 25, 23, 0.06);
```

## 5. Layout Principles

- **Max content width**: 1200px, centered
- **Section padding**: Desktop `py-32 lg:py-40`, Mobile `py-24`
- **Horizontal padding**: Desktop `px-8`, Mobile `px-6`
- **Card grid**: Asymmetrical Bento — not repetitive 3-column
- **Dark sections**: Hero only. Hero-to-body transition via 96px gradient band.
- **Surface alternation**: `warm-bg` (#FAF9F7) and `warm-surface` (#F5F5F4) alternate

## 6. Depth & Elevation

| Level | Usage | Value |
|-------|-------|-------|
| Card outer | Double-Bezel shell | `ring-1 ring-black/[0.04]` |
| Card inner | Double-Bezel core | `shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(28,25,23,0.04)]` |
| Card hover | Interactive cards | `ring-accent/20` + `scale-[1.01]` |
| Nav float | Glass nav | `shadow-[0_4px_24px_rgba(28,25,23,0.06)]` |
| CTA hover | Button glow | `shadow-[0_0_30px_rgba(139,124,246,0.2)]` |

Stone-tint shadows only. No pure black shadows.

## 7. Do's and Don'ts

### Do
- Use solid accent color for primary CTAs (no gradients)
- Alternate `warm-bg` and `warm-surface` for consecutive sections
- Use Eyebrow pill badges for section labels
- Keep body text at `line-height: 1.7` for Korean readability
- Use `word-break: keep-all` globally
- Apply `text-wrap: balance` to all headings
- Use Supanova easing: `cubic-bezier(0.16, 1, 0.3, 1)`

### Don't
- Don't use dark background for any section except hero
- Don't apply gradient text to anything except hero H1 emphasis words
- Don't use box-shadow with pure black — always stone-tint
- Don't skip the Double-Bezel outer shell on cards
- Don't use Lucide icons — use Iconify Solar only
- Don't animate anything other than `transform` and `opacity`
- Don't use repetitive 3-column grid for every section

## 8. Responsive Behavior

| Breakpoint | Key Changes |
|------------|-------------|
| < 640px | Single column, `px-6`, `py-24`, hamburger nav, sticky bottom CTA |
| 768px (md) | 2-column grids, `px-8` |
| 1024px (lg) | Full floating pill nav, larger type scale |
| 1280px (xl) | 3-column grids, max-width 1200px content |

## 9. Motion

- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (Supanova standard)
- **Duration**: 0.5s default, 0.7s for larger elements
- **Entry**: blur-fadeInUp (opacity 0 + translateY(20px) + blur(8px) -> clear)
- **Stagger**: 80ms between siblings
- **Hero orbs**: Mesh gradient blobs with `animation: hero-float 8s ease-in-out infinite`
- **Reduced motion**: Respect `prefers-reduced-motion`
