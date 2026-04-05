# MakeGrowth 리디자인 스펙 — Supanova Premium Redesign

> **작성일**: 2026-04-04
> **기반**: Supanova Redesign Engine + Premium Aesthetic Engine + Output Enforcement
> **방향**: Warm Stone + Muted Violet / Double-Bezel / Outfit Display / 히어로 Only 다크
> **목표**: 현재 다크↔라이트 급격한 전환을 해소하고, $150k 에이전시 퀄리티로 업그레이드

---

## 1. 컬러 팔레트

### 1.1 Warm Stone 베이스

현재 `#0A0A0F`(순수 블랙) ↔ `#FFFFFF`(순수 화이트) 전환을 제거. 전체를 따뜻한 스톤 톤으로 통일.

```css
/* 히어로 전용 다크 (페이지당 1회만) */
--warm-dark: #171717;
--warm-dark-surface: #292524;
--warm-dark-border: rgba(255, 255, 255, 0.08);

/* 라이트 베이스 (모든 본문 섹션) */
--warm-bg: #FAF9F7;
--warm-surface: #F5F5F4;          /* 교차 섹션 */
--warm-surface-elevated: #FFFFFF;  /* 카드 내부 */

/* 텍스트 */
--warm-heading: #1C1917;
--warm-body: #57534E;
--warm-muted: #A8A29E;

/* 보더 & 쉐도우 */
--warm-border: rgba(28, 25, 23, 0.06);
--warm-shadow: rgba(28, 25, 23, 0.04);  /* 스톤 틴트 쉐도우 */

/* 단일 악센트: 뮤트 바이올렛 */
--accent: #8B7CF6;
--accent-hover: #7C6AED;
--accent-muted: rgba(139, 124, 246, 0.1);  /* 배경/뱃지 */
--accent-glow: rgba(139, 124, 246, 0.2);   /* CTA 호버 글로우 */

/* 시맨틱 */
--success: #059669;       /* 채도 낮춤 (기존 #10B981) */
--danger: #DC2626;        /* 채도 낮춤 (기존 #EF4444) */
--warning: #D97706;
```

### 1.2 다크 섹션 사용 규칙

- **히어로만 다크**. 각 페이지의 첫 번째 섹션(히어로)만 `--warm-dark` 배경.
- Final CTA, NewsletterCTA, HonestWarning → 전부 Warm 톤으로 전환.
  - Final CTA: `--warm-surface` 배경 + 악센트 보더 강조
  - NewsletterCTA: `--warm-bg` + 악센트 pill 카드
  - HonestWarning: `--warm-surface` + 레드 악센트 텍스트
- 히어로 → 본문 전환: `--warm-dark` → `--warm-bg` 사이에 96px 그라데이션 밴드.
- PainPoints: 다크 제거. `--warm-surface` 배경 + 스톤 틴트 카드.

### 1.3 서피스 텍스처

```css
/* Noise overlay — 전체 페이지에 고정 */
.noise-overlay {
  position: fixed;
  inset: 0;
  z-index: 60;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,..."); /* inline noise SVG */
}
```

### 1.4 그라데이션 텍스트

기존 indigo→purple 제거. 뮤트 바이올렛 단일 톤 그라데이션:

```css
--gradient-text: linear-gradient(135deg, #8B7CF6, #A78BFA);
```

사용처: 히어로 H1의 강조 단어 1-2개에만 선택적 적용. 섹션 타이틀에는 사용하지 않음.

---

## 2. 타이포그래피

### 2.1 폰트 스택

```css
/* Display (히어로 H1, Final CTA — 영문/숫자만) */
font-family: 'Outfit', 'Pretendard Variable', sans-serif;

/* Body (한글 포함 모든 텍스트) */
font-family: 'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Outfit** (Google Fonts, 700 weight, ~12KB): 둥근 기하학 산세리프. Syne보다 세련되면서 테크 느낌 유지. Warm Editorial과 자연스럽게 어울림.

### 2.2 타입 스케일 업그레이드

| 요소 | Desktop | Mobile | Weight | Extra |
|------|---------|--------|--------|-------|
| H1 히어로 | 48px (3rem) | 32px (2rem) | 700 | `tracking-tight leading-snug text-wrap:balance` |
| H2 섹션 | 36px (2.25rem) | 28px (1.75rem) | 700 | `leading-snug text-wrap:balance` |
| H3 카드 | 24px (1.5rem) | 20px (1.25rem) | 600 | `leading-snug` |
| Body | 16px | 16px | 400 | `leading-relaxed break-keep-all` (line-height 1.7) |
| Small | 14px | 14px | 400 | `leading-relaxed` |
| Eyebrow | 11px | 11px | 500 | `uppercase tracking-[0.15em]` |

H1을 40px→48px로 키움. 헤드라인 프레즌스 강화.

### 2.3 한글 최적화

- `word-break: keep-all` 전역
- `text-wrap: balance` 모든 헤딩에
- `font-variant-numeric: tabular-nums` 통계/가격 숫자에
- `leading-snug` 한글 헤드라인 (leading-none 금지)

---

## 3. 컴포넌트 업그레이드

### 3.1 Double-Bezel 카드

모든 카드를 2중 구조로 교체:

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

- 라이트 섹션: `bg-black/[0.03]` 외부 + `bg-white` 내부
- 히어로(다크): `bg-white/[0.05]` 외부 + `bg-white/[0.03]` 내부 + `ring-white/10`
- 호버: `ring-accent/20` 전환 + `scale-[1.01]`

### 3.2 CTA 버튼

```html
<button class="inline-flex items-center gap-3 rounded-full px-8 py-4
               bg-accent text-white font-semibold text-base
               hover:scale-[1.02] active:scale-[0.98]
               shadow-[0_0_0_rgba(139,124,246,0)] hover:shadow-[0_0_30px_rgba(139,124,246,0.2)]
               transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
  세미나 신청하기
  <span class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
    <ArrowRight class="w-4 h-4" />
  </span>
</button>
```

- 그라데이션 제거 → 솔리드 악센트 컬러
- Arrow nested in circle wrapper
- Glow on hover
- `active:scale-[0.98]` 클릭 피드백

### 3.3 Secondary CTA

```html
<button class="inline-flex items-center gap-3 rounded-full px-8 py-4
               bg-transparent border border-warm-border text-warm-heading font-semibold
               hover:border-accent/30 hover:bg-accent-muted
               transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
  서비스 살펴보기
</button>
```

### 3.4 Eyebrow Tags (섹션 레이블)

기존 텍스트 레이블 → pill badge:

```html
<span class="inline-block rounded-full px-3 py-1 text-[11px] uppercase
             tracking-[0.15em] font-medium bg-accent/10 text-accent">
  Our Approach
</span>
```

### 3.5 Badge

현재 유지하되 보더 제거, 배경만:

```css
/* Available */
background: rgba(5, 150, 105, 0.08);
color: #059669;

/* Coming Soon */
background: rgba(217, 119, 6, 0.08);
color: #D97706;
```

### 3.6 아이콘

Lucide React 제거 → **Iconify Solar set** (Supanova 표준).

```html
<script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"></script>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
```

단, Next.js 프로젝트이므로 `@iconify/react` npm 패키지 사용:

```bash
npm install @iconify/react @iconify-json/solar
```

```tsx
import { Icon } from "@iconify/react";
<Icon icon="solar:arrow-right-linear" width={20} />
```

---

## 4. 레이아웃 업그레이드

### 4.1 섹션 패딩

현재 `py-12 md:py-20` → **`py-24 md:py-32 lg:py-40`**. 디자인이 숨을 쉬게.

### 4.2 Asymmetrical Bento Grid

3-column 균등 그리드 반복 금지. 섹션마다 다른 레이아웃:

| 섹션 | 레이아웃 |
|------|----------|
| 히어로 | 풀블리드 + 센터 정렬 |
| PainPoints (통계) | 3-column 유지 (숫자 데이터에 적합) |
| WhatIsAX (프로세스) | 3-step 가로 → numbered timeline |
| KillerModule | Editorial Split (좌: 텍스트, 우: 시각화) |
| BeforeAfter | 2-column 비교 테이블 유지 |
| SeminarPreview | 풀폭 단일 카드 |
| InstructorIntro | Editorial Split (좌: 사진, 우: 텍스트) |
| NewsletterCTA | 센터 정렬 단일 카드 |
| Services 모듈 그리드 | Bento Grid (2+1, 1+2 교차) |
| Pricing | 3-column 유지 + 추천 카드 scale(1.03) |

### 4.3 Floating Glass Navigation

현재 sticky top → floating pill:

```css
/* 기본 상태 */
position: fixed;
top: 1rem;
left: 50%;
transform: translateX(-50%);
width: max-content;
border-radius: 9999px;
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.1);
padding: 8px 8px 8px 20px;
z-index: 50;

/* 스크롤 후 (라이트 섹션 진입 시) */
background: rgba(250, 249, 247, 0.8);
border: 1px solid rgba(28, 25, 23, 0.06);
box-shadow: 0 4px 24px rgba(28, 25, 23, 0.06);
```

모바일: 풀스크린 오버레이 + `backdrop-blur-3xl` + nav link stagger reveal.

---

## 5. 모션 & 인터랙션

### 5.1 Supanova 모션 시그니처

모든 인터랙티브 요소에 적용:

```css
transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
```

기존 `ease-out`, `ease-in-out`, `linear` 전부 교체.

### 5.2 Scroll Entry — Blur FadeInUp

모든 섹션 콘텐츠 진입 애니메이션:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
```

- `filter: blur(4px)` 추가 — 현재는 opacity + translateY만 있음
- Stagger: `animation-delay: calc(var(--index) * 80ms)`
- IntersectionObserver `threshold: 0.1`

### 5.3 히어로 3D 배경 아트

히어로 배경에 CSS 기반 Mesh Gradient + Floating Orbs:

```css
/* Mesh Gradient Background */
.hero-bg {
  background:
    radial-gradient(ellipse 80% 60% at 20% 40%, rgba(139, 124, 246, 0.15), transparent),
    radial-gradient(ellipse 60% 80% at 80% 60%, rgba(139, 124, 246, 0.08), transparent),
    radial-gradient(ellipse 100% 100% at 50% 0%, rgba(41, 37, 36, 0.5), transparent),
    #171717;
}

/* Floating Orbs */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 400px; height: 400px;
  background: rgba(139, 124, 246, 0.12);
  top: -100px; right: -50px;
  animation-delay: 0s;
}

.orb-2 {
  width: 300px; height: 300px;
  background: rgba(139, 124, 246, 0.08);
  bottom: -80px; left: -30px;
  animation-delay: -3s;
}
```

### 5.4 Gradient Shift (CTA 호버)

CTA 버튼에 미묘한 배경 그라데이션 이동:

```css
background: linear-gradient(135deg, #8B7CF6 0%, #A78BFA 100%);
background-size: 200% 200%;
background-position: 0% 50%;

&:hover {
  background-position: 100% 50%;
}
```

### 5.5 카운터 애니메이션

현재 유지 (Spring Count-Up). easing을 Supanova 시그니처로 교체.

### 5.6 Typewriter

현재 유지. 히어로 다크 배경에서 동작.

### 5.7 Parallax

히어로 배경 orbs에 미세 패럴랙스:
- Orb들이 `scrollY * 0.15` 속도로 이동
- 모바일 비활성화

### 5.8 성능 가드레일

- 모든 애니메이션 `transform` + `opacity` + `filter`만 사용
- `backdrop-blur`는 fixed/sticky 요소(네비게이션)에만
- `prefers-reduced-motion` 존중 — 모션 비활성화 시 즉시 표시
- Noise overlay: `position: fixed`, `pointer-events: none`

---

## 6. 톤앤매너 (Supanova Korean Content Excellence)

### 6.1 카피 원칙

- **합니다/하세요** 일관 사용. 격식 혼합 금지.
- **구체적 수치 > 추상적 표현**: "80%+ 시간 절감" O / "혁신적인 효율" X
- **AI 클리셰 금지**: "혁신적인", "원활한", "차세대", "한 차원 높은", "게임 체인저" 제거
- **액션 지향 CTA**: "무료로 시작하기", "지금 신청하기", "직접 만들어보기"

### 6.2 수정 대상 카피

| 현재 | Supanova 기준 수정 |
|------|---------------------|
| "이커머스 셀러의 생존 공식이 바뀌고 있습니다" | "AI로 매출을 만드는 셀러는 다릅니다" |
| "당신만의 문제가 아닙니다" | "100만 명이 폐업하는 시대" |
| "AX — AI Transformation" | "AX — 내 사업에 맞는 AI를 직접 만드는 과정" |
| "AI가 만드는 실질적 변화" | "외주비 90%, 시간 80% 절감" |
| "AI로 앞서가는 셀러의 인사이트" | "매주 받는 이커머스 AI 실전 팁" |
| "지금이 시작할 때입니다" | "다음 세미나에서 만나요" |

### 6.3 가짜 라운드 수치 교체

| 현재 | 수정 |
|------|------|
| "80%+" | "83%" |
| "90%+" | "91%" |
| "99%" | "98.7%" |
| "5채널" | 유지 (실제 수치) |

---

## 7. 페이지별 섹션 테마 재배분

### 7.1 홈페이지 (/)

| 섹션 | 테마 (수정 후) | 배경 |
|------|---------------|------|
| 히어로 | DARK | `#171717` + mesh gradient orbs |
| 히어로→본문 전환 | GRADIENT | 96px 밴드 |
| PainPoints (통계) | WARM-SURFACE | `#F5F5F4` |
| WhatIsAX | WARM-BG | `#FAF9F7` |
| KillerModule | WARM-SURFACE | `#F5F5F4` |
| BeforeAfter | WARM-BG | `#FAF9F7` |
| SeminarPreview | WARM-SURFACE | `#F5F5F4` |
| InstructorIntro | WARM-BG | `#FAF9F7` |
| NewsletterCTA | WARM-SURFACE | `#F5F5F4` + accent pill card |

### 7.2 세미나 (/seminar)

| 섹션 | 테마 (수정 후) |
|------|---------------|
| 히어로 | DARK |
| 전환 | GRADIENT 밴드 |
| WakeUpCall | WARM-SURFACE |
| TheProblem | WARM-BG (red accent 텍스트로 긴장 표현) |
| TheSolution | WARM-SURFACE (green accent) |
| Curriculum | WARM-BG |
| BeforeAfter | WARM-SURFACE |
| WhatYouGet | WARM-BG |
| PersonaCards | WARM-SURFACE |
| HonestWarning | WARM-BG (red accent, 다크 제거) |
| InstructorIntro | WARM-SURFACE |
| RefundPolicy | WARM-BG |
| FAQ | WARM-SURFACE |
| FinalCTA | WARM-BG + accent 보더 강조 카드 |

### 7.3 서비스, 대표소개, 견적문의

동일 패턴: 히어로 DARK → 나머지 WARM-BG / WARM-SURFACE 교차.

---

## 8. 기술 변경 사항 요약

| 항목 | 현재 | 변경 |
|------|------|------|
| 다크 배경 | `#0A0A0F` (4+ 섹션) | `#171717` (히어로만) |
| 라이트 배경 | `#FFFFFF` / `#F9FAFB` | `#FAF9F7` / `#F5F5F4` |
| 악센트 | `#2563EB` + `#8B5CF6` (2색) | `#8B7CF6` (뮤트 바이올렛 1색) |
| CTA | indigo→purple 그라데이션 | 솔리드 악센트 + glow hover |
| Display 폰트 | Syne 700/800 | Outfit 700 |
| 아이콘 | Lucide React | @iconify/react + Solar set |
| 카드 | 플랫 border + shadow | Double-Bezel 2중 구조 |
| 섹션 패딩 | `py-12 md:py-20` | `py-24 md:py-32 lg:py-40` |
| 네비게이션 | Sticky top bar | Floating glass pill |
| 섹션 레이블 | 텍스트 | Pill badge |
| 모션 easing | `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Scroll entry | opacity + translateY | + `filter: blur(4px)` |
| 히어로 배경 | 솔리드 다크 | Mesh gradient + floating orbs |
| 노이즈 텍스처 | 없음 | `opacity: 0.03` 오버레이 |
| CTA 버튼 | 기본 pill | Pill + nested arrow circle + glow |

---

## 9. 변경하지 않는 것

- Next.js App Router 구조
- 컴포넌트 파일 구조 (sections/, ui/, layout/, forms/)
- 데이터 파일 (src/data/)
- 커스텀 훅 로직 (useInView, useCountUp, useTypewriter, useScrollHeader)
- Tailwind v4 CSS 기반 설정
- 폼 필드 및 유효성 검사 로직
- 페이지 라우팅 및 메타데이터
