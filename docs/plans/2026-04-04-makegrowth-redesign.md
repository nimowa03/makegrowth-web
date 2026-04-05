# MakeGrowth Supanova Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the MakeGrowth website from generic AI template aesthetics to $150k Korean agency quality using Supanova design principles — Warm Stone palette, Double-Bezel cards, floating glass nav, blur-fadeInUp motion, mesh gradient hero.

**Architecture:** In-place CSS + component refactor. No structural changes to Next.js App Router, data layer, or hooks. Modify globals.css for design tokens, then update UI components (Button, Card, Badge, SectionWrapper), layout components (Header, Footer), and finally each section/page to apply new themes and copy.

**Tech Stack:** Next.js 16 (App Router), Tailwind CSS v4 (@theme inline), framer-motion, @iconify/react + @iconify-json/solar (replacing lucide-react)

**Design Reference:** `docs/superpowers/specs/2026-04-04-makegrowth-redesign.md`

---

## File Structure

```
Changes by task:

Task 1 — Foundation (tokens, fonts, icons):
  Modify: src/app/globals.css
  Modify: src/app/layout.tsx
  Modify: package.json (install @iconify/react, @iconify-json/solar)

Task 2 — UI Components:
  Modify: src/components/ui/Button.tsx
  Modify: src/components/ui/Card.tsx
  Modify: src/components/ui/Badge.tsx
  Modify: src/components/ui/Counter.tsx
  Modify: src/components/ui/Accordion.tsx
  Modify: src/components/ui/TypewriterText.tsx
  Modify: src/components/ui/Modal.tsx

Task 3 — Layout Components:
  Modify: src/components/layout/SectionWrapper.tsx
  Modify: src/components/layout/Header.tsx
  Modify: src/components/layout/Footer.tsx
  Modify: src/components/layout/StickyBottomCTA.tsx

Task 4 — Home Page Sections:
  Modify: src/components/sections/Hero.tsx
  Modify: src/components/sections/PainPoints.tsx
  Modify: src/components/sections/WhatIsAX.tsx
  Modify: src/components/sections/KillerModule.tsx
  Modify: src/components/sections/BeforeAfter.tsx
  Modify: src/components/sections/SeminarPreview.tsx
  Modify: src/components/sections/InstructorIntro.tsx
  Modify: src/components/sections/NewsletterCTA.tsx
  Modify: src/app/page.tsx

Task 5 — Services Page:
  Modify: src/app/services/ServicesContent.tsx
  Modify: src/components/sections/ProcessSteps.tsx
  Modify: src/components/sections/Pricing.tsx

Task 6 — Seminar Page:
  Modify: src/app/seminar/page.tsx
  Modify: src/components/sections/SeminarHero.tsx
  Modify: src/components/sections/WakeUpCall.tsx
  Modify: src/components/sections/TheProblem.tsx
  Modify: src/components/sections/TheSolution.tsx
  Modify: src/components/sections/Curriculum.tsx
  Modify: src/components/sections/WhatYouGet.tsx
  Modify: src/components/sections/PersonaCards.tsx
  Modify: src/components/sections/HonestWarning.tsx
  Modify: src/components/sections/RefundPolicy.tsx
  Modify: src/components/sections/SeminarFAQ.tsx
  Modify: src/components/sections/FinalCTA.tsx

Task 7 — Contact + About Pages:
  Modify: src/app/contact/page.tsx
  Modify: src/components/forms/ContactForm.tsx
  Modify: src/components/forms/FormField.tsx
  Modify: src/app/about/AboutContent.tsx

Task 8 — Data & Copy Updates:
  Modify: src/data/painPoints.ts
  Modify: src/data/seminars.ts
  Modify: src/data/services.ts

Task 9 — Final Polish + Cleanup:
  Remove dependency: lucide-react (from package.json)
  Modify: src/app/globals.css (noise overlay)
  Verify: all pages build and render
```

---

## Task 1: Foundation — Design Tokens, Fonts, Icons

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Install new icon packages**

```bash
cd C:/Users/MJ/Desktop/makegrowth-web
npm install @iconify/react @iconify-json/solar
```

- [ ] **Step 2: Replace globals.css with Supanova design tokens**

Replace the entire `src/app/globals.css` with new Warm Stone palette, Outfit font, updated utilities (gradient-text, gradient-cta, glass, dark-card, glass-card, noise-overlay), updated base typography (H1 48px/32px, H2 36px/28px, H3 24px/20px), `text-wrap: balance` on headings, Supanova easing custom property, and `@keyframes fadeInUp` with blur.

Key tokens to define in `@theme inline`:
- `--color-warm-dark: #171717`
- `--color-warm-dark-surface: #292524`
- `--color-warm-bg: #FAF9F7`
- `--color-warm-surface: #F5F5F4`
- `--color-accent: #8B7CF6`
- `--color-accent-hover: #7C6AED`
- `--font-display: 'Outfit', 'Pretendard Variable', sans-serif`
- `--font-sans: 'Pretendard Variable', 'Pretendard', -apple-system, sans-serif`

Remove old tokens: `--color-dark-bg`, `--color-dark-surface-1`, `--color-dark-surface-2`, `--color-primary-*`, `--color-accent-500`, `--color-accent-600`.

Update `@import` for Outfit font (replace Syne):
```css
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap");
```

Add `@utility noise-overlay`, `@utility supanova-transition`, hero mesh gradient keyframes, floating orb keyframes.

- [ ] **Step 3: Update layout.tsx — add noise overlay div**

Add a `<div className="noise-overlay" />` inside `<body>` in `src/app/layout.tsx`. This is a fixed overlay for the subtle grain texture.

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: Build succeeds with zero errors.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx package.json package-lock.json
git commit -m "refactor: supanova design tokens, Outfit font, iconify solar icons"
```

---

## Task 2: UI Components Redesign

**Files:**
- Modify: `src/components/ui/Button.tsx`
- Modify: `src/components/ui/Card.tsx`
- Modify: `src/components/ui/Badge.tsx`
- Modify: `src/components/ui/Counter.tsx`
- Modify: `src/components/ui/Accordion.tsx`
- Modify: `src/components/ui/TypewriterText.tsx`
- Modify: `src/components/ui/Modal.tsx`

- [ ] **Step 1: Rewrite Button.tsx — Supanova CTA architecture**

Replace with Supanova pill + nested arrow icon pattern:
- Primary: solid `bg-accent` + gradient shift hover + glow shadow + nested arrow circle (`w-8 h-8 rounded-full bg-white/20`)
- Secondary: transparent + `border-warm-border` + hover `border-accent/30 bg-accent/10`
- Standard: solid `bg-accent` + `rounded-lg`
- Ghost: `hover:bg-warm-surface`
- All variants: `transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]` + `active:scale-[0.98]`
- Replace all `lucide-react` ArrowRight with `@iconify/react` `solar:arrow-right-linear`

- [ ] **Step 2: Rewrite Card.tsx — Double-Bezel architecture**

Replace with 2-layer nested structure:
- Light variant: outer `bg-black/[0.03] ring-1 ring-black/[0.04] p-1.5 rounded-[2rem]` + inner `bg-white rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(28,25,23,0.04)]`
- Dark variant: outer `bg-white/[0.05] ring-1 ring-white/10 p-1.5 rounded-[2rem]` + inner `bg-white/[0.03] rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]`
- Glass variant: same as dark with `backdrop-blur-2xl`
- Hover: `ring-accent/20` transition + `scale-[1.01]`

- [ ] **Step 3: Update Badge.tsx — remove borders, background only**

- Available: `bg-[rgba(5,150,105,0.08)] text-[#059669]` (no border)
- Coming Soon: `bg-[rgba(217,119,6,0.08)] text-[#D97706]` (no border)
- New: `bg-accent/10 text-accent` (no border)

- [ ] **Step 4: Update Counter.tsx — tabular-nums**

Add `font-variant-numeric: tabular-nums` to the number display. Update text colors to `text-warm-heading` and `text-warm-muted`.

- [ ] **Step 5: Update Accordion.tsx — Warm Stone colors + Supanova easing**

Replace `border-gray-200` → `border-warm-border`. Replace `text-gray-900` → `text-warm-heading`. Replace `text-gray-600` → `text-warm-body`. Replace framer-motion transition easing with `[0.16, 1, 0.3, 1]`. Replace ChevronDown lucide icon with `solar:alt-arrow-down-linear` from Iconify.

- [ ] **Step 6: Update TypewriterText.tsx — Warm tones**

Replace `text-purple-300` → `text-accent`. Replace `text-red-400/80` → `text-[#DC2626]/70`. Replace `bg-red-400` cursor → `bg-[#DC2626]`.

- [ ] **Step 7: Update Modal.tsx — Warm Stone + Supanova easing**

Replace `bg-white` → `bg-warm-bg`. Replace `hover:bg-gray-100` → `hover:bg-warm-surface`. Replace X icon with `solar:close-circle-linear`. Update framer-motion easing to `[0.16, 1, 0.3, 1]`.

- [ ] **Step 8: Verify build**

```bash
npm run build
```

- [ ] **Step 9: Commit**

```bash
git add src/components/ui/
git commit -m "refactor: supanova UI components — double-bezel cards, pill CTAs, warm tones"
```

---

## Task 3: Layout Components Redesign

**Files:**
- Modify: `src/components/layout/SectionWrapper.tsx`
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/layout/StickyBottomCTA.tsx`

- [ ] **Step 1: Rewrite SectionWrapper.tsx — Warm Stone themes + macro whitespace**

Replace theme map:
- `dark`: `bg-warm-dark text-white` (히어로 only)
- `warm-bg`: `bg-warm-bg text-warm-heading` (기본)
- `warm-surface`: `bg-warm-surface text-warm-heading` (교차)
- `gradient-transition`: 96px gradient band from `warm-dark` → `warm-bg`

Update padding: `py-24 md:py-32 lg:py-40 px-6 md:px-8`.

Update framer-motion animation: add `filter: blur(4px)` to initial state, easing `[0.16, 1, 0.3, 1]`, duration 0.7s.

- [ ] **Step 2: Rewrite Header.tsx — Floating Glass Pill navigation**

Replace sticky top bar with:
- `fixed top-4 left-1/2 -translate-x-1/2 w-max z-50 rounded-full`
- Dark state (히어로 위): `bg-white/10 backdrop-blur-xl border border-white/10`
- Light state (스크롤 후): `bg-[rgba(250,249,247,0.8)] backdrop-blur-xl border border-[rgba(28,25,23,0.06)] shadow-[0_4px_24px_rgba(28,25,23,0.06)]`
- Pill padding: `py-2 px-2 pl-5`
- CTA button inside nav: small pill `px-4 py-2 bg-accent text-white rounded-full`
- Mobile menu: full-screen overlay with `backdrop-blur-3xl bg-warm-dark/90` + stagger-reveal nav links
- Replace all lucide icons (Menu, X) with solar equivalents

- [ ] **Step 3: Update Footer.tsx — Warm Stone tones**

Replace `bg-gray-50` → `bg-warm-surface`. Replace `border-gray-200` → `border-[rgba(28,25,23,0.06)]`. Replace all text-gray-* colors with warm-heading/warm-body/warm-muted equivalents. Replace lucide icons with Iconify Solar.

- [ ] **Step 4: Update StickyBottomCTA.tsx — Warm tones**

Replace `bg-white/90` → `bg-warm-bg/90`. Replace `border-gray-200` → `border-warm-border`. Update Button usage to match new variant API.

- [ ] **Step 5: Verify build**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/
git commit -m "refactor: floating glass nav, warm stone layout, supanova spacing"
```

---

## Task 4: Home Page Sections Redesign

**Files:**
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/components/sections/PainPoints.tsx`
- Modify: `src/components/sections/WhatIsAX.tsx`
- Modify: `src/components/sections/KillerModule.tsx`
- Modify: `src/components/sections/BeforeAfter.tsx`
- Modify: `src/components/sections/SeminarPreview.tsx`
- Modify: `src/components/sections/InstructorIntro.tsx`
- Modify: `src/components/sections/NewsletterCTA.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Rewrite Hero.tsx — Mesh gradient + floating orbs + updated copy**

- Background: `bg-warm-dark` + CSS mesh gradient (3 radial-gradients with accent color at low opacity) + 2 floating orb divs with blur(60px) and infinite float animation
- Eyebrow: pill badge `bg-accent/10 text-accent rounded-full px-3 py-1 text-[11px]`
- H1: `font-display text-[32px] md:text-[48px] font-bold text-white leading-snug`
- Copy change: "AI로 매출을 만드는 셀러는 다릅니다"
- TypewriterText: keep, update colors to warm palette
- CTAs: new Button with nested arrow icon
- Add `id="hero-cta"` on CTA container
- Hero→본문 transition: 96px gradient band at bottom (`bg-gradient-to-b from-warm-dark to-warm-bg`)
- Replace all lucide icons with Iconify Solar

- [ ] **Step 2: Rewrite PainPoints.tsx — WARM-SURFACE theme**

- Change theme from dark → `warm-surface`
- Eyebrow pill badge
- H2 copy: "100만 명이 폐업하는 시대"
- 3 stat cards: Double-Bezel Card (light variant)
- Text colors: warm-heading, warm-body, warm-muted
- Bottom quote: `text-accent font-medium` (no gradient-text)
- Counter numbers: `font-variant-numeric: tabular-nums`

- [ ] **Step 3: Update WhatIsAX.tsx — WARM-BG theme + numbered timeline**

- Eyebrow pill badge
- H2 copy: "AX — 내 사업에 맞는 AI를 직접 만드는 과정"
- 3-step layout: numbered circles (1/2/3) connected by line + title + description
- Double-Bezel cards for each step
- Replace icons with Iconify Solar

- [ ] **Step 4: Update KillerModule.tsx — Editorial Split layout + WARM-SURFACE**

- Eyebrow pill badge
- Two-column layout: left = text (title, description, features), right = visual card with metrics
- Feature chips: `bg-accent/10 text-accent rounded-full px-3 py-1`
- Before/After metrics in Double-Bezel card
- Replace icons with Iconify Solar

- [ ] **Step 5: Update BeforeAfter.tsx — WARM-BG + updated copy**

- Eyebrow pill badge
- H2 copy: "외주비 91%, 시간 83% 절감"
- Before column: `text-[#DC2626]` accent, strikethrough
- After column: `text-[#059669]` accent
- Double-Bezel card wrapping the comparison table

- [ ] **Step 6: Update SeminarPreview.tsx — WARM-SURFACE + full-width card**

- Single full-width Double-Bezel card
- Eyebrow pill badge
- Seminar details inside card
- Counter components for stats

- [ ] **Step 7: Update InstructorIntro.tsx — WARM-BG + Editorial Split**

- Two-column: left = photo placeholder (rounded-2xl, not full-circle), right = text
- Eyebrow pill badge
- Replace icons with Iconify Solar

- [ ] **Step 8: Rewrite NewsletterCTA.tsx — WARM-SURFACE (no dark)**

- Remove dark background → `warm-surface`
- Center-aligned Double-Bezel card containing the form
- H2: "매주 받는 이커머스 AI 실전 팁" (warm-heading, no gradient-text)
- Email input + accent CTA button inside the card
- Text colors: all warm-* palette

- [ ] **Step 9: Update page.tsx — new section theme order**

Update SectionWrapper themes for each section per spec section 7.1. Remove any remaining dark theme references except Hero.

- [ ] **Step 10: Verify build and visual check**

```bash
npm run build && npm run dev
```

Open http://localhost:3000 and verify all 8 sections render with warm stone palette.

- [ ] **Step 11: Commit**

```bash
git add src/components/sections/ src/app/page.tsx
git commit -m "refactor: home page supanova redesign — warm stone, double-bezel, editorial layouts"
```

---

## Task 5: Services Page Redesign

**Files:**
- Modify: `src/app/services/ServicesContent.tsx`
- Modify: `src/components/sections/ProcessSteps.tsx`
- Modify: `src/components/sections/Pricing.tsx`

- [ ] **Step 1: Update ServicesContent.tsx**

- Hero section: `warm-dark` with mesh gradient background
- All other sections: alternate `warm-bg` / `warm-surface`
- Module grid: Bento layout (2+1, 1+2 alternating) with Double-Bezel cards
- Eyebrow pill badges on all sections
- Replace all lucide icons with Iconify Solar
- CTA section: `warm-surface` (not dark) with accent-bordered card

- [ ] **Step 2: Update ProcessSteps.tsx — Supanova styling**

- Numbered circles: `bg-accent text-white rounded-full w-12 h-12`
- Connecting line: `bg-accent/20`
- Step titles/descriptions: warm-heading/warm-body
- Replace icons with Iconify Solar
- Supanova easing on stagger animation

- [ ] **Step 3: Update Pricing.tsx — highlighted tier with scale**

- All tiers: Double-Bezel cards
- Highlighted tier (AX 세미나): `scale-[1.03]` + `ring-accent/30` + "추천" accent badge
- Price numbers: `font-variant-numeric: tabular-nums`
- CTA buttons: accent pill on highlighted, secondary on others

- [ ] **Step 4: Verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/app/services/ src/components/sections/ProcessSteps.tsx src/components/sections/Pricing.tsx
git commit -m "refactor: services page supanova redesign — bento grid, warm tones"
```

---

## Task 6: Seminar Page Redesign

**Files:**
- Modify: `src/app/seminar/page.tsx`
- Modify: all seminar section components (SeminarHero, WakeUpCall, TheProblem, TheSolution, Curriculum, WhatYouGet, PersonaCards, HonestWarning, RefundPolicy, SeminarFAQ, FinalCTA)

- [ ] **Step 1: Update SeminarHero.tsx — mesh gradient + warm dark**

- Same mesh gradient background as home Hero
- Floating orbs
- Accent pill eyebrow badge
- Updated CTA buttons with Supanova architecture
- Replace icons with Iconify Solar

- [ ] **Step 2: Update all dark sections → warm tones**

Apply per spec section 7.2:
- WakeUpCall: `warm-surface` (was dark). Highlight column: accent bg instead of dark card.
- TheProblem: `warm-bg`. Red accent via text color, not dark background.
- HonestWarning: `warm-bg`. Red text + X icons, not dark background.
- FinalCTA: `warm-bg`. Accent-bordered Double-Bezel card, not dark full-bleed.

- [ ] **Step 3: Update all light sections — warm palette + Double-Bezel**

- TheSolution: `warm-surface`. Green accent `#059669` on icons/badges.
- Curriculum: `warm-bg`. Timeline with accent-colored numbered circles.
- WhatYouGet: `warm-bg`. Grid of Double-Bezel cards with check icons.
- PersonaCards: `warm-surface`. Double-Bezel cards with accent check icons.
- RefundPolicy: `warm-bg`. Clean table in Double-Bezel card.
- SeminarFAQ: `warm-surface`. Accordion with warm colors.

- [ ] **Step 4: Update seminar/page.tsx — theme assignments**

Update all SectionWrapper themes per spec section 7.2. Add gradient-transition band after hero. Replace icons with Iconify Solar throughout.

- [ ] **Step 5: Verify build**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/app/seminar/ src/components/sections/
git commit -m "refactor: seminar page supanova redesign — all warm tones, no dark body sections"
```

---

## Task 7: Contact + About Pages Redesign

**Files:**
- Modify: `src/app/contact/page.tsx`
- Modify: `src/components/forms/ContactForm.tsx`
- Modify: `src/components/forms/FormField.tsx`
- Modify: `src/app/about/AboutContent.tsx`

- [ ] **Step 1: Update FormField.tsx — warm tones**

- Input borders: `border-[rgba(28,25,23,0.1)]`
- Focus ring: `focus:ring-accent/20 focus:border-accent`
- Label: `text-warm-heading`
- Error: `text-[#DC2626]`
- Background: `bg-white` (elevated surface)

- [ ] **Step 2: Update ContactForm.tsx — warm palette + Iconify**

- Replace all lucide icons with Iconify Solar
- Submit button: accent pill CTA
- Form container: Double-Bezel card

- [ ] **Step 3: Update contact/page.tsx — warm layout**

- Background: `warm-bg`
- H1: warm-heading with font-display
- Info panel: Double-Bezel card with warm tones
- Replace all gray-* colors with warm-* equivalents
- Replace icons with Iconify Solar

- [ ] **Step 4: Update AboutContent.tsx — warm palette + hero dark only**

- Hero: `warm-dark` with mesh gradient
- Timeline: `warm-bg` with accent-colored numbered circles
- Capabilities: `warm-surface` with Double-Bezel cards
- CTA: `warm-bg` with accent-bordered card (not dark)
- Replace all lucide icons with Iconify Solar
- Replace all gray-* colors with warm-* equivalents

- [ ] **Step 5: Verify build**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/app/contact/ src/app/about/ src/components/forms/
git commit -m "refactor: contact and about pages supanova redesign"
```

---

## Task 8: Data & Copy Updates

**Files:**
- Modify: `src/data/painPoints.ts`
- Modify: `src/data/seminars.ts`
- Modify: `src/data/services.ts`

- [ ] **Step 1: Update painPoints.ts — organic numbers**

Change `painPointStats` numbers from generic to organic:
- Keep exact numbers as they are real data (100만 8,282 etc.)
- These are sourced statistics, not claims — keep as-is.

- [ ] **Step 2: Update seminars.ts — organic metrics + copy cleanup**

Change `seminarCounters`:
- `{ value: 83, suffix: "%", label: "콘텐츠 제작 시간 절감" }` (was 80, "%+")
- `{ value: 91, suffix: "%", label: "이미지 외주비 절감" }` (was 90, "%+")
- `{ value: 5, suffix: "채널", label: "동시 발행 자동화" }` (keep)
- `{ value: 0, suffix: "명", label: "수강생 (누적)" }` (keep)

Remove emoji from `seminarPersonas` titles (if any remain).

- [ ] **Step 3: Update services.ts — organic metrics**

Change `serviceModules[0].metrics.costAfter`: "83% 절감" (was "80%+ 절감")
Change `serviceModules[1].metrics.costAfter`: "91% 절감" (was "90%+ 절감")
Change `serviceModules[4].metrics.timeAfter`: "인건비 대비 98.7% 절감" (was "99% 절감")

Update `beforeAfterItems` to match organic numbers.

- [ ] **Step 4: Verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/data/
git commit -m "refactor: organic metrics, supanova copy standards"
```

---

## Task 9: Final Polish + Cleanup

**Files:**
- Modify: `package.json`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Remove lucide-react dependency**

```bash
npm uninstall lucide-react
```

- [ ] **Step 2: Verify no lucide imports remain**

```bash
grep -r "lucide-react" src/
```

Expected: No results. If any remain, replace with Iconify Solar equivalents.

- [ ] **Step 3: Add noise overlay SVG to globals.css**

Add inline SVG data URI for subtle grain texture in the `noise-overlay` utility class.

- [ ] **Step 4: Add prefers-reduced-motion media query**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 5: Full build verification**

```bash
npm run build
```

Expected: Zero errors, zero warnings, all 8 routes generated.

- [ ] **Step 6: Visual verification**

```bash
npm run dev
```

Open all pages and verify:
- `/` — warm stone palette, mesh gradient hero, Double-Bezel cards, no dark body sections
- `/services` — bento grid modules, warm tones
- `/seminar` — 14 sections all warm except hero, emotional arc via text color not background
- `/contact` — warm form, accent CTA
- `/about` — dark hero only, warm body
- `/privacy`, `/terms` — warm background

- [ ] **Step 7: Final commit**

```bash
git add -A
git commit -m "refactor: complete supanova redesign — warm stone, premium components, clean motion"
```

---

## Execution Summary

| Task | Description | Files |
|------|-------------|-------|
| 1 | Foundation (tokens, fonts, icons) | 3 |
| 2 | UI Components | 7 |
| 3 | Layout Components | 4 |
| 4 | Home Page Sections | 9 |
| 5 | Services Page | 3 |
| 6 | Seminar Page | 12 |
| 7 | Contact + About | 4 |
| 8 | Data & Copy | 3 |
| 9 | Final Polish | 2 |
| **Total** | | **~47 files** |

Tasks 1-3 are foundational and must be sequential. Tasks 4-7 (pages) can be parallelized after Task 3. Task 8 can run in parallel with pages. Task 9 is final.
