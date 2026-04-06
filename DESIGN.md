# MakeGrowth Design System — joshua.site Minimal

## 1. Visual Direction

레퍼런스: joshua.site (영구 기준)

순수 타이포그래피 중심 미니멀. 목업/일러스트/대시보드/브라우저 프레임 없음.
순수 모노크롬 (흑/회/백만 사용). 보라색 완전 금지.
전체 화이트 기조. 다크는 CTA 블록과 pivot 블록에만.

## 2. Color Palette

### Base (Pure Monochrome)
| Token | Hex | Role |
|-------|-----|------|
| `warm-dark-surface` | `#1A1A1A` | 다크 CTA/pivot 블록 |
| `warm-bg` | `#FFFFFF` | 기본 바디 배경 |
| `warm-surface` | `#F8F8F8` | 교대 섹션 배경 |
| heading | `#1A1A1A` | 제목 |
| body | `#666666` | 본문 |
| muted | `#999999` | 캡션, 보조 텍스트 |
| border | `#E0E0E0` | 보더, 디바이더 |

### CTA (Dark)
| Token | Hex | Role |
|-------|-----|------|
| `cta` | `#1A1A1A` | Primary CTA 배경 |
| `cta-text` | `#FFFFFF` | CTA 텍스트 |

### Semantic
| Token | Hex | Role |
|-------|-----|------|
| `danger` | `#CC0000` | 부정, ✕ 표시 |

## 3. Typography

| Element | Desktop | Mobile | Weight | Font |
|---------|---------|--------|--------|------|
| H1 Hero | 88px | 48px | 900 (black) | Outfit + Pretendard |
| H2 Section | 56px | 36px | 900 (black) | Pretendard |
| H3 Card | 24px | 20px | 700 | Pretendard |
| Body | 16-18px | 16px | 400 | Pretendard |
| Eyebrow | 11px | 11px | 500 | Pretendard |

**Font Stack:**
- Display: `Outfit, Pretendard Variable, sans-serif` (H1, 대형 숫자)
- Default: `Pretendard Variable, Pretendard, -apple-system, sans-serif`

**Korean Rules:** `word-break: keep-all`, `line-height: 1.7`, `text-wrap: balance` (제목)

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

### Process Flow Node
```
border: #E0E0E0, rounded-full, w-12 h-12
숫자: font-mono, text-[#999]
연결선: 1px #E0E0E0 + draw 애니메이션
```

## 5. Layout

- Max width: 1200px centered
- Section padding: py-32 lg:py-40 (desktop), py-24 (mobile)
- Horizontal: px-8 (desktop), px-6 (mobile)
- 전체 화이트 기조, 다크는 CTA/pivot 블록에만

## 6. Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (Supanova)
- Duration: 0.5-0.7s
- Entry: opacity 0→1, translateY(20-30px)→0, blur(4px)→0
- Stagger: 80ms siblings
- `prefers-reduced-motion` 존중

## 7. Do / Don't

### Do
- 순수 모노크롬 (흑/회/백)
- 타이포그래피와 여백으로 디자인
- Iconify Solar 아이콘 사용
- Supanova easing 전체 적용
- joshua.site 톤 참고

### Don't
- 보라색 사용 금지 (어디에도)
- Double-Bezel 카드 금지
- 과도한 장식 금지 (시스템 시연 비주얼은 적극 활용)
- Lucide 아이콘 사용 금지

## 8. 목업/비주얼 가이드

### 허용
- 브라우저 목업 프레임 (BrowserMockup 컴포넌트)
- GIF/영상 시연 화면
- 3D 카드 틸트, 패럴랙스 효과
- 대표 프로필 사진

### 목업 스타일
- 프레임: 모노크롬, 얇은 보더(#E0E0E0), rounded-2xl
- 브라우저 크롬: 회색 도트 3개 + 주소바
- 배경: #F8F8F8
- 그림자: 최소 (hover 시 강화)
- 콘텐츠: 실제 GIF/스크린샷 우선, 없으면 깔끔한 placeholder
