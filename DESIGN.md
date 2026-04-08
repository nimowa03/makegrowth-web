# MakeGrowth Design System

## 1. Visual Direction

레퍼런스: joshua.site (영구 기준)

타이포그래피 중심 미니멀. 목업은 허용(폰/브라우저 프레임).
모노크롬 + 딥 네이비 조합. 보라색 완전 금지.
전체 화이트 기조. 다크/네이비는 CTA·pivot·영상 블록에만.

## 2. Brand Color System

### Primary — 모노크롬 (기본 시스템)

| Token | Hex | 대비율(on white) | 용도 |
|-------|-----|:---:|------|
| `ink` | `#1A1A1A` | 14.5:1 | 제목, CTA 배경, 다크 블록 |
| `body` | `#444444` | 9.7:1 | 본문 텍스트, 서브카피 |
| `caption` | `#666666` | 5.7:1 | 보조 텍스트, 설명 (WCAG AA 통과) |
| `border` | `#E0E0E0` | — | 보더, 디바이더 |
| `surface` | `#F8F8F8` | — | 교대 섹션 배경 |
| `bg` | `#FFFFFF` | — | 기본 바디 배경 |

> `#999999` (2.8:1) — WCAG 미달. UI 장식 요소에만 제한적 사용. 텍스트에 사용 금지.

### Accent — 딥 네이비 (브랜드 시그니처)

| Token | Hex | 용도 |
|-------|-----|------|
| `deep-navy` | `#0F172A` | 히어로 영상 존, 기능/웨비나 페이지 히어로 |
| `navy-gradient` | `135deg: #0F172A → #1A1A1A → #0F172A` | 풀-블리드 그라데이션 배경 |

### Signal — 기능적 색상

| Token | Hex | 용도 |
|-------|-----|------|
| `accent-green` | `#059669` | 라이브 인디케이터, 활성 상태, ✓ 표시 |
| `danger` | `#CC0000` | 부정, ✕ 표시, 경고 |

### 사용 규칙

```
화이트 섹션:  bg #FFFFFF, 텍스트 #1A1A1A ~ #666
서피스 섹션:  bg #F8F8F8, 텍스트 #1A1A1A ~ #666
다크 블록:    bg #1A1A1A, 텍스트 white ~ white/60
네이비 블록:  bg gradient(#0F172A), 텍스트 white ~ white/60
```

## 3. Typography

### 스케일

| Element | Desktop | Mobile | Weight | Font |
|---------|---------|--------|--------|------|
| H1 Hero | 88–104px | 48px | 900 (black) | Outfit + Pretendard |
| H2 Section | 44–52px | 32px | 900 (black) | Pretendard |
| H3 Card | 24–28px | 20px | 800 (extrabold) | Pretendard |
| Body | 18px | 16px | 400 | Pretendard |
| Body Bold | 18px | 16px | 700 | Pretendard |
| Eyebrow | 11px | 11px | 500 | Pretendard |

### 강조 기법 (모노크롬 내)

| 기법 | CSS | 용도 |
|------|-----|------|
| 볼드 강조 | `font-bold text-[#1A1A1A]` | 문장 내 핵심 구절 |
| 블랙 강조 | `font-black tracking-tight` | 섹션 타이틀, 숫자 |
| 인라인 하이라이트 | `<strong className="text-[#1A1A1A]">` | 회색 본문 속 핵심 부분 |
| 크기 점프 | 본문 대비 2–3배 | 임팩트 숫자, 통계 |

### Font Stack

- Display: `Outfit, Pretendard Variable, sans-serif`
- Default: `Pretendard Variable, Pretendard, -apple-system, sans-serif`

### Korean Rules

- `word-break: keep-all`
- `line-height: 1.7` (본문), `leading-loose` (타임라인)
- `text-wrap: balance` (제목)

## 4. Components

### Primary CTA Button
```
bg: #1A1A1A → hover: scale(1.02)
text: white, font-semibold, rounded-full
active: scale(0.98)
```

### Eyebrow Pill
```
border: #E0E0E0, text: #666
px-4 py-1.5, rounded-full, text-[11px]
uppercase, tracking-[0.15em], font-medium
```

### Card
```
border: #E0E0E0, rounded-2xl, p-6
배경: white 또는 transparent
Double-Bezel 금지
```

## 5. Layout

- Max width: 1200px centered (`max-w-content`)
- Section padding: `py-8 md:py-12 lg:py-16`
- Horizontal: `px-6 md:px-8`
- 전체 화이트 기조, 다크/네이비는 CTA·pivot·영상 블록에만

## 6. Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (Supanova)
- Duration: 0.5–0.7s
- Entry: opacity 0→1, translateY(20-30px)→0, blur(4px)→0
- Stagger: 80ms siblings
- 무한 애니메이션: CSS transition 기반 (scale + ring + opacity 전환), JS interval로 state 순환
- `prefers-reduced-motion` 존중

## 7. Do / Don't

### Do
- 모노크롬 + 딥 네이비 조합
- 타이포그래피와 여백으로 디자인
- Iconify Solar 아이콘 사용
- Supanova easing 전체 적용
- 핵심 카피에 `font-bold/black` + `text-[#1A1A1A]` 강조
- 본문 최소 `#666` (WCAG AA)

### Don't
- 보라색 사용 금지
- `#999` 텍스트 사용 금지 (장식 요소 외)
- Double-Bezel 카드 금지
- 과도한 장식 금지
- Lucide 아이콘 사용 금지

## 8. 목업/비주얼 가이드

### 허용
- 브라우저 목업 프레임 (BrowserMockup)
- 폰 목업 프레임 (PhoneMockup — 텔레그램 스타일)
- GIF/영상 시연 화면
- 3D 카드 틸트, 패럴랙스 효과

### 목업 스타일
- 프레임: 모노크롬, 얇은 보더(#E0E0E0), rounded-2xl
- 다크 배경 위: `border-white/10, shadow-[0_8px_60px_rgba(0,0,0,0.3)]`
- 콘텐츠: 실제 GIF/스크린샷 우선, 없으면 깔끔한 placeholder
