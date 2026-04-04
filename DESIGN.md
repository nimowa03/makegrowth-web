# MakeGrowth Design System

## 1. Visual Theme & Atmosphere

Professional warmth meets modern SaaS. The design alternates between dark immersive sections (tech credibility, urgency) and light approachable sections (trust, accessibility). Inspired by zexea.io's dark polish but adapted for non-developer e-commerce sellers — less terminal, more human.

Dark sections use near-black backgrounds with blue undertones and translucent glass elements. Light sections are clean white with subtle blue tints. The transition between dark and light follows the PAS (Problem-Agitate-Solution) emotional arc: pain in darkness, resolution in light.

Density is moderate — generous whitespace for readability but enough content density to convey expertise. Korean typography optimized with `word-break: keep-all` and `line-height: 1.7` for comfortable reading.

## 2. Color Palette & Roles

### Dark Sections
| Token | Hex | Role |
|-------|-----|------|
| `dark-bg` | `#0A0A0F` | Primary dark background (near-black, blue undertone) |
| `dark-surface-1` | `#0F1011` | Card background, elevated surfaces |
| `dark-surface-2` | `#1E293B` | Emphasized sections, secondary surfaces |
| `dark-heading` | `#FFFFFF` | Headings on dark |
| `dark-body` | `#9CA3AF` | Body text on dark (gray-400) |
| `dark-muted` | `#64748B` | Muted, captions on dark (gray-500) |
| `dark-border` | `rgba(255,255,255,0.1)` | Card borders, dividers |

### Light Sections
| Token | Hex | Role |
|-------|-----|------|
| `light-bg` | `#FFFFFF` | Primary light background |
| `light-surface` | `#F9FAFB` | Alternating section background |
| `light-highlight` | `#EFF6FF` | Blue-tinted highlight areas |
| `light-heading` | `#111827` | Headings on light (gray-900) |
| `light-body` | `#374151` | Body text on light (gray-700) |
| `light-muted` | `#9CA3AF` | Muted text on light (gray-400) |
| `light-border` | `#E2E8F0` | Card borders, dividers |

### Accent & Brand
| Token | Hex | Role |
|-------|-----|------|
| `primary-600` | `#2563EB` | Primary blue — CTA, links, active states |
| `primary-700` | `#1D4ED8` | Primary hover |
| `primary-50` | `#EFF6FF` | Primary background tint |
| `accent-500` | `#8B5CF6` | Accent purple — badges, points, labels |
| `accent-600` | `#7C3AED` | Accent hover |
| `gradient-cta-start` | `#4F46E5` | CTA gradient start (indigo-600) |
| `gradient-cta-end` | `#9333EA` | CTA gradient end (purple-600) |
| `gradient-text-start` | `#818CF8` | Gradient text start (indigo-400) |
| `gradient-text-end` | `#C084FC` | Gradient text end (purple-400) |

### Semantic
| Token | Hex | Role |
|-------|-----|------|
| `success` | `#10B981` | Positive, "After", available |
| `danger` | `#EF4444` | Negative, "Before", problems |
| `warning` | `#F59E0B` | Caution, "Coming Soon" |
| `info` | `#818CF8` | Section labels on dark |

## 3. Typography Rules

| Element | Size (Desktop) | Size (Mobile) | Weight | Line-Height | Font | Extra |
|---------|---------------|--------------|--------|-------------|------|-------|
| H1 Hero | 40px / 2.5rem | 28px / 1.75rem | 800 | 1.2 | Syne + Pretendard | letter-spacing: -0.5px |
| Display CTA | 24-32px | 20-24px | 700-800 | 1.2 | Syne + Pretendard | Final CTA, gradient text |
| H2 Section | 32px / 2rem | 24px / 1.5rem | 700 | 1.3 | Pretendard | — |
| H3 Card | 24px / 1.5rem | 20px / 1.25rem | 600 | 1.4 | Pretendard | — |
| Body | 16px / 1rem | 16px / 1rem | 400 | 1.7 | Pretendard | word-break: keep-all |
| Small | 14px / 0.875rem | 14px | 400 | 1.6 | Pretendard | — |
| Section Label | 12px / 0.75rem | 12px | 500 | — | Pretendard | uppercase, letter-spacing: 0.7px |
| Nav Link | 14px | 14px | 500 | — | Pretendard | — |

**Font stacks**:
- Display: `'Syne', 'Pretendard', sans-serif` — hero H1, Final CTA, gradient text only
- Default: `'Pretendard', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif` — everything else

Syne (Google Fonts, 700+800 weights, ~15KB) provides geometric bold impact for "AI/tech" hero moments. Pretendard handles all Korean text. Same proven pairing as zexea.io.

## 4. Component Stylings

### Buttons

**Primary CTA (Pill + Gradient):**
```css
background: linear-gradient(to right, #4F46E5, #9333EA);
background-size: 200% 100%;
color: #FFFFFF;
padding: 12px 28px;
border-radius: 9999px;
font-size: 15px;
font-weight: 600;
transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.2s ease;
/* hover: background-position: 100% 0; transform: scale(1.02); box-shadow: 0 8px 25px rgba(79,70,229,0.3); */
```

**Secondary CTA (Outlined Pill):**
```css
background: transparent;
color: #2563EB; /* dark sections: #A78BFA */
border: 1px solid rgba(37, 99, 235, 0.4); /* dark: rgba(139,92,246,0.4) */
padding: 12px 28px;
border-radius: 9999px;
font-size: 15px;
font-weight: 600;
```

**Standard Button:**
```css
background: #2563EB;
color: #FFFFFF;
padding: 10px 24px;
border-radius: 8px;
font-size: 14px;
font-weight: 600;
```

### Cards

**Dark Card:**
```css
background: transparent; /* or rgba(255,255,255,0.03) */
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 16px;
overflow: hidden;
/* hover: border-color: rgba(255,255,255,0.2); */
```

**Light Card:**
```css
background: #FFFFFF;
border: 1px solid #E2E8F0;
border-radius: 12px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
/* hover: box-shadow: 0 4px 12px rgba(0,0,0,0.1); transform: translateY(-2px); */
```

**Glass Card (dark sections only):**
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 12px;
```

### Badges
```css
/* Common */
padding: 3px 10px;
border-radius: 9999px;
font-size: 11px;
font-weight: 500;

/* Available: */ background: rgba(16,185,129,0.1); color: #10B981; border: 1px solid rgba(16,185,129,0.3);
/* Coming Soon: */ background: rgba(245,158,11,0.1); color: #F59E0B; border: 1px solid rgba(245,158,11,0.3);
/* New: */ background: rgba(37,99,235,0.1); color: #2563EB; border: 1px solid rgba(37,99,235,0.3);
```

### Navigation (Glass Header)
```css
/* Initial (over hero) */
position: sticky; top: 0; z-index: 50;
background: transparent;

/* After scroll > 50px */
background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.4);
transition: all 0.3s ease;
```

### Gradient Text
```css
background: linear-gradient(to right, #818CF8, #C084FC);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

## 5. Layout Principles

- **Max content width**: 1200px, centered with `margin: 0 auto`
- **Section vertical padding**: Desktop `py-20` (80px), Mobile `py-12` (48px)
- **Horizontal padding**: Desktop `px-8` (32px), Mobile `px-6` (24px)
- **Card grid**: Desktop 3-col, Tablet 2-col, Mobile 1-col; gap `24px` desktop, `16px` mobile
- **Whitespace philosophy**: Generous between sections, moderate within — trust the breathing room
- **Dark-to-light transitions**: Use a CSS gradient band (`#0A0A0F` → `#1E293B` → `#CBD5E1` → `#FFFFFF`) as a visual bridge between dark and light sections

## 6. Depth & Elevation

| Level | Usage | Value |
|-------|-------|-------|
| 0 | Flat elements | No shadow |
| 1 | Light cards | `0 1px 3px rgba(0, 0, 0, 0.08)` |
| 2 | Hover cards, dropdowns | `0 4px 12px rgba(0, 0, 0, 0.1)` |
| 3 | Modals, sticky elements | `0 8px 25px rgba(0, 0, 0, 0.15)` |
| 4 | Sticky Bottom CTA | `0 -4px 12px rgba(0, 0, 0, 0.1)` |
| Dark-1 | Dark card borders | `1px solid rgba(255,255,255,0.1)` — depth via border, not shadow |
| Dark-2 | Dark hover borders | `1px solid rgba(255,255,255,0.2)` |

Dark sections use border-based depth (Linear pattern), not shadows. Light sections use shadow-based depth (Stripe pattern).

## 7. Do's and Don'ts

### Do
- Use gradient CTA buttons for primary actions (seminar signup, contact)
- Alternate white (`#FFFFFF`) and gray (`#F9FAFB`) backgrounds in consecutive light sections
- Apply section labels with `uppercase`, `letter-spacing: 0.7px`, and section-specific colors
- Use glass-morphism for elements that overlay dark backgrounds
- Keep body text at `line-height: 1.7` for Korean readability
- Use `word-break: keep-all` globally for natural Korean line breaks

### Don't
- Don't use more than 2 consecutive dark sections before transitioning to light (except seminar hero flow)
- Don't apply gradient text to body copy — reserve for hero headings and section titles
- Don't use box-shadow on dark sections — use border-based depth instead
- Don't mix rounded-full (9999px) and rounded-lg (8-16px) within the same component group
- Don't use opacity below 0.6 for readable body text
- Don't animate anything other than `transform` and `opacity` (performance rule)

## 8. Responsive Behavior

| Breakpoint | Target | Key Changes |
|------------|--------|-------------|
| < 640px (default) | Mobile | Single column, `px-6`, `py-12`, hamburger nav, sticky bottom CTA |
| 640px (sm) | Large mobile | Minor adjustments |
| 768px (md) | Tablet | 2-column grids, `px-8` |
| 1024px (lg) | Laptop | Full navigation visible, larger type scale begins |
| 1280px (xl) | Desktop | 3-column grids, max-width 1200px content |

- **Touch targets**: Minimum 44x44px for all interactive elements
- **Sticky Bottom CTA**: Mobile only, appears when hero CTA scrolls out of viewport
- **Hamburger menu**: Below `lg` breakpoint, slide-in from right with backdrop overlay
- **Card grids**: Collapse 3→2→1 columns
- **Hero text**: Scale from 40px→28px, adjust padding proportionally
- **Parallax**: Disabled on mobile (performance)

## 9. Agent Prompt Guide

**Quick color reference:**
- Dark bg: `#0A0A0F`, surfaces `#0F1011` / `#1E293B`
- Light bg: `#FFFFFF`, surface `#F9FAFB`, highlight `#EFF6FF`
- Primary: `#2563EB`, accent: `#8B5CF6`
- CTA gradient: `from-indigo-600 to-purple-600`
- Text gradient: `from-indigo-400 to-purple-400`

**Hero section prompt:**
Create a full-width hero on `#0A0A0F` background. Typewriter animation cycling through pain points in `#F87171` italic text. Main heading at 40px weight 800, color white. Gradient CTA button `from-#4F46E5 to-#9333EA`, pill shape. Secondary outlined button with `rgba(139,92,246,0.4)` border.

**Dark section prompt:**
Section background `#0A0A0F`. Section label 12px weight 500 uppercase `#818CF8` with 0.7px letter-spacing. Heading white 32px weight 700. Body `#9CA3AF` 16px. Cards with `rgba(255,255,255,0.1)` border, 16px border-radius, transparent background.

**Light section prompt:**
Section background `#FFFFFF` or alternating `#F9FAFB`. Section label 12px weight 500 uppercase `#2563EB`. Heading `#111827` 32px weight 700. Body `#374151` 16px line-height 1.7. Cards with `#E2E8F0` border, 12px radius, `0 1px 3px rgba(0,0,0,0.08)` shadow.

**Glass element prompt:**
Background `rgba(255,255,255,0.05)`, `backdrop-filter: blur(12px)`, border `rgba(255,255,255,0.1)`, 12px radius. Use only on dark backgrounds.
