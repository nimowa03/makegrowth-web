# 메이크그로스 웹사이트 디자인 스펙

> **작성일**: 2026-04-04
> **기반 문서**: WEBSITE_SPEC.md
> **벤치마킹**: zexea.io (실제 분석 기반)
> **디자인 기반**: Linear 다크 패턴 + Stripe 섹션 리듬 + zexea 시그니처

---

## 1. 디자인 철학

### 핵심 톤
- **프로페셔널하지만 따뜻한**: 다크 섹션(임팩트/전문성) + 라이트 섹션(친근함/접근성) 교차
- **비개발자 타겟**: zexea.io의 터미널/코드 감성을 셀러 언어로 전환
- **PAS 프레임워크 시각화**: 고통(다크) → 해결(라이트) 감정 곡선을 컬러로 표현

### 디자인 DNA (zexea.io에서 차용)
- Glass-morphism (`backdrop-filter: blur(12px)` + 반투명 배경)
- 그라데이션 텍스트 (`background-clip: text`)
- Pill CTA (`border-radius: 9999px` + 그라데이션 배경)
- 반투명 보더 카드 (`rgba(255,255,255,0.1)`)
- 섹션별 색상 코딩 (레이블 컬러 분리)

### zexea.io에서 차용하지 않는 것
- 터미널 타이핑 히어로 → Typewriter 페인포인트 전환으로 대체
- 3D Spline 애니메이션 → 성능 우선, CSS/framer-motion으로 한정
- 100% 다크 구성 → 다크/라이트 하이브리드

---

## 2. 컬러 팔레트

### 2.1 다크 섹션

```css
/* 배경 */
--dark-bg: #0A0A0F;           /* near-black, 블루 언더톤 (zexea 동일) */
--dark-surface-1: #0F1011;    /* 카드/섹션 배경 (Linear 패턴) */
--dark-surface-2: #1E293B;    /* 강조 섹션 배경 */

/* 텍스트 */
--dark-heading: #FFFFFF;
--dark-body: #9CA3AF;         /* Tailwind gray-400 */
--dark-muted: #64748B;        /* Tailwind gray-500 */

/* 보더 */
--dark-border: rgba(255, 255, 255, 0.1);    /* 카드/구분선 */
--dark-border-hover: rgba(255, 255, 255, 0.2);
```

### 2.2 라이트 섹션

```css
/* 배경 */
--light-bg: #FFFFFF;
--light-surface: #F9FAFB;     /* 교차 섹션 배경 */
--light-highlight: #EFF6FF;   /* 블루 틴트 하이라이트 */

/* 텍스트 */
--light-heading: #111827;     /* Tailwind gray-900 */
--light-body: #374151;        /* Tailwind gray-700 */
--light-muted: #9CA3AF;       /* Tailwind gray-400 */

/* 보더 */
--light-border: #E2E8F0;
```

### 2.3 액센트 & 브랜드

```css
/* Primary Blue */
--primary-600: #2563EB;       /* CTA, 링크, 레이블 */
--primary-700: #1D4ED8;       /* 호버 */
--primary-50: #EFF6FF;        /* 배경 하이라이트 */

/* Accent Purple */
--accent-500: #8B5CF6;        /* 포인트, 뱃지, 레이블 */
--accent-600: #7C3AED;        /* 호버 */

/* CTA Gradient */
--gradient-cta: linear-gradient(to right, #4F46E5, #9333EA);  /* Indigo→Purple */

/* Gradient Text (zexea 시그니처) */
--gradient-text: linear-gradient(to right, #818CF8, #C084FC);  /* Indigo-400→Purple-400 */
```

### 2.4 시맨틱

```css
--success: #10B981;           /* After, 긍정, 운영 중 */
--danger: #EF4444;            /* Before, 문제, 페인포인트 */
--warning: #F59E0B;           /* 주의, 준비 중 */
--info: #818CF8;              /* 섹션 레이블 (다크) */
```

---

## 3. 타이포그래피

### 3.1 폰트 패밀리

```css
/* Display (히어로 H1, Final CTA, 그라데이션 텍스트 — 영문/숫자만) */
font-family: 'Syne', 'Pretendard', sans-serif;

/* Heading & Body (한글 포함 모든 텍스트) */
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
```

**Syne** (Google Fonts): 히어로/CTA 등 Display 용도에만 한정. 기하학적 볼드 자형으로 "AI/테크" 임팩트. 700, 800 weight만 로드 (~15KB).
**Pretendard** (CDN): 한글/영문 통합 본문 폰트. 모든 한글 텍스트 + 일반 헤딩에 사용.
zexea.io와 동일한 검증된 조합.

Syne은 한글을 지원하지 않으므로, 한글 텍스트에서는 자동으로 Pretendard 폴백.

### 3.2 타입 스케일

| 요소 | Desktop | Mobile | Weight | Line-Height | 폰트 | 비고 |
|------|---------|--------|--------|-------------|------|------|
| H1 히어로 | 40px (2.5rem) | 28px (1.75rem) | 800 | 1.2 | Syne + Pretendard | letter-spacing: -0.5px |
| H2 섹션 타이틀 | 32px (2rem) | 24px (1.5rem) | 700 | 1.3 | Pretendard | |
| H3 카드 타이틀 | 24px (1.5rem) | 20px (1.25rem) | 600 | 1.4 | Pretendard | |
| Body | 16px (1rem) | 16px (1rem) | 400 | 1.7 | Pretendard | word-break: keep-all |
| Small | 14px (0.875rem) | 14px | 400 | 1.6 | Pretendard | 카드 설명, 네비 |
| Section Label | 12px (0.75rem) | 12px | 500 | — | Pretendard | uppercase, letter-spacing: 0.7px |
| Display CTA | 24-32px | 20-24px | 700-800 | 1.2 | Syne + Pretendard | Final CTA, 그라데이션 텍스트 |

### 3.3 Syne 적용 범위 (한정적 사용)
- 홈페이지 히어로 H1
- 세미나 히어로 H1
- Final CTA 감성 카피
- 그라데이션 텍스트가 적용되는 강조 헤딩
- **그 외 모든 텍스트는 Pretendard**

### 3.4 한글 최적화
- `word-break: keep-all` — 단어 단위 줄바꿈
- `line-height: 1.7` — 한글 가독성 최적화
- `letter-spacing: -0.5px` — H1에만 적용 (한글 타이트닝)

---

## 4. 레이아웃 시스템

### 4.1 그리드 & 간격

```css
/* 콘텐츠 영역 */
max-width: 1200px;
margin: 0 auto;

/* 섹션 패딩 */
Desktop: py-20 (80px)
Mobile:  py-12 (48px)

/* 좌우 여백 */
Desktop: px-8 (32px)
Mobile:  px-6 (24px)

/* 카드 그리드 */
Desktop: grid-cols-3, gap-6 (24px)
Tablet:  grid-cols-2, gap-6
Mobile:  grid-cols-1, gap-4 (16px)
```

### 4.2 반응형 브레이크포인트

```css
sm: 640px    /* 모바일 (기본) */
md: 768px    /* 태블릿 */
lg: 1024px   /* 노트북 */
xl: 1280px   /* 데스크톱 */
```

---

## 5. 컴포넌트 스타일

### 5.1 버튼

```css
/* Primary CTA (Pill + Gradient) */
background: linear-gradient(to right, #4F46E5, #9333EA);
color: white;
padding: 12px 28px;
border-radius: 9999px;
font-size: 15px;
font-weight: 600;
/* 호버: background-position shift + scale(1.02) + shadow 강화 */

/* Secondary (Outlined Pill) */
background: transparent;
color: #2563EB;  /* 다크 섹션에서는 #a78bfa */
border: 1px solid rgba(37, 99, 235, 0.4);
padding: 12px 28px;
border-radius: 9999px;
font-size: 15px;
font-weight: 600;

/* Standard Button (라이트 섹션) */
background: #2563EB;
color: white;
padding: 10px 24px;
border-radius: 8px;
font-size: 14px;
font-weight: 600;
```

### 5.2 카드

```css
/* Dark Card (Linear 패턴) */
background: transparent;  /* 또는 rgba(255,255,255,0.03) */
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 16px;
overflow: hidden;

/* Light Card */
background: #FFFFFF;
border: 1px solid #E2E8F0;
border-radius: 12px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

/* Glass Card (다크 섹션 특수) */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 12px;
```

### 5.3 뱃지

```css
/* 상태 뱃지 (공통 구조) */
padding: 3px 10px;
border-radius: 9999px;
font-size: 11px;
font-weight: 500;

/* Available / 운영 중 */
background: rgba(16, 185, 129, 0.1);
color: #10B981;
border: 1px solid rgba(16, 185, 129, 0.3);

/* Coming Soon / 준비 중 */
background: rgba(245, 158, 11, 0.1);
color: #F59E0B;
border: 1px solid rgba(245, 158, 11, 0.3);

/* New */
background: rgba(37, 99, 235, 0.1);
color: #2563EB;
border: 1px solid rgba(37, 99, 235, 0.3);
```

### 5.4 네비게이션 (Glass Header)

```css
/* 초기 상태 (히어로 위) */
position: sticky;
top: 0;
background: transparent;

/* 스크롤 후 */
background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(229, 231, 235, 0.4);

/* 전환 */
transition: background 0.3s ease, backdrop-filter 0.3s ease;
```

### 5.5 그라데이션 텍스트

```css
/* zexea 시그니처 — 히어로, 섹션 타이틀에 선택적 적용 */
background: linear-gradient(to right, #818CF8, #C084FC);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 6. 애니메이션 & 인터랙션

### 6.1 히어로 페인포인트 전환: Typewriter Delete

셀러의 고충 텍스트가 타이핑되듯 나타나고 → 역방향으로 지워지며 → 다음 문장이 등장.
5개 페인포인트 순환 후 해결 메시지로 최종 전환.

```
구현: Custom hook (useTypewriter) + requestAnimationFrame
타이핑 속도: 50ms/글자
삭제 속도: 30ms/글자
문장 간 대기: 2000ms
최종 전환: fade-in + scale(1.02), duration 0.6s
무한 반복: 해결 메시지 5초 유지 후 페인포인트 재시작
```

페인포인트 텍스트 목록:
1. "상세페이지 AI 서비스 써봤는데, 우리 쇼핑몰 톤이랑 안 맞더라구요"
2. "상세페이지 외주 30만원, 수정 요청만 3번째..."
3. "밤새 키워드 리서치했는데, 결국 뭘 등록해야 할지 모르겠어요"
4. "카톡방 돌며 유통처 찾느라 하루가 또 갔어요"
5. "SNS 운영? 할 시간이 어디 있어요"
→ 전환: "내 상품, 내 카테고리에 맞는 AI. 이제 직접 만드세요."

### 6.2 섹션 진입: Fade Up + Stagger 혼합

```
텍스트 섹션:
  opacity: 0 → 1
  translateY: 30px → 0
  duration: 0.6s
  easing: ease-out
  trigger: IntersectionObserver (threshold: 0.2)

카드 그리드 (통계, 서비스, What You Get 등):
  부모: staggerChildren: 0.1s
  자식: opacity 0→1 + translateY 20px→0
  duration: 0.5s
```

### 6.3 숫자 카운터: Spring Count-Up

```
0 → 목표 숫자
duration: 2s
easing: easeOut (빠르게 시작 → 느리게 도착)
trigger: IntersectionObserver (뷰포트 진입 시 1회)
구현: useCountUp custom hook
```

### 6.4 네비게이션: Glass Header

```
초기: background transparent
스크롤 > 50px: background rgba(255,255,255,0.6) + backdrop-filter blur(12px)
transition: 0.3s ease
```

### 6.5 모바일 Sticky Bottom CTA

```
트리거: 히어로 CTA가 뷰포트를 벗어날 때 등장
위치: fixed bottom, 좌우 패딩 포함
내용: [세미나 신청하기] 풀폭 그라데이션 버튼
사라짐: 히어로 CTA가 다시 보이거나 Footer 진입 시
적용 페이지: 홈, 세미나
구현: IntersectionObserver
```

### 6.6 추가 인터랙션

```
Parallax (히어로):
  배경: transform translateY(scrollY * 0.3)
  콘텐츠: 기본 스크롤
  모바일: 비활성화 (성능)

Gradient Shift (CTA 호버):
  background-size: 200% 100%
  hover: background-position 100% 0
  transition: 0.4s ease

Smooth Accordion (FAQ):
  framer-motion AnimatePresence
  height: 0 → auto
  화살표: rotate(0 → 180deg)
  duration: 0.3s
```

### 6.7 성능 원칙

- 모든 애니메이션은 `transform`과 `opacity`만 사용 (GPU 가속)
- `prefers-reduced-motion` 미디어쿼리 존중 — 모션 비활성화 시 즉시 표시
- IntersectionObserver로 뷰포트 진입 시에만 트리거
- framer-motion은 히어로 전환, 카운터, 섹션 fade-in, 아코디언에만 한정
- 이미지: Next.js `<Image>` + WebP + lazy loading
- Parallax: 모바일에서 비활성화

---

## 7. 페이지별 다크/라이트 섹션 배분

### 7.1 홈페이지 (/)

| 섹션 | 테마 | 배경 |
|------|------|------|
| 히어로 (PainPoint Led) | DARK | `#0A0A0F` → `#1E293B` gradient |
| 문제 정의 (Pain Point) | DARK | `#0A0A0F` |
| **전환점** | **그라데이션** | **다크→라이트** |
| AX란 무엇인가 | LIGHT | `#FFFFFF` |
| 킬러 모듈 (SNS 자동화) | LIGHT | `#F9FAFB` |
| Before / After | LIGHT | `#FFFFFF` |
| 세미나 프리뷰 | LIGHT | `#F9FAFB` |
| 대표 소개 미리보기 | LIGHT | `#FFFFFF` |
| 뉴스레터 CTA | DARK | `#0A0A0F` |

### 7.2 세미나 (/seminar)

| 섹션 | 테마 | 감정 곡선 |
|------|------|-----------|
| 1. 히어로 | DARK | 주목 |
| 2. Wake-Up Call | DARK | 위기감 |
| 3. The Problem | DARK | 고통 극대화 |
| **전환점** | **그라데이션** | **고통→해결** |
| 4. The Solution | LIGHT | 희망 시작 |
| 5. Curriculum | LIGHT | 구체적 계획 |
| 6. Before & After | LIGHT | 변화 확인 |
| 7. What You Get | LIGHT | 가치 인식 |
| 8. Is This You | LIGHT | 공감 |
| 9. Honest Warning | DARK | 역심리 (긴장 재투입) |
| 10. Instructor | LIGHT | 신뢰 |
| 11. Reviews | LIGHT | 사회적 증명 |
| 12. 환불 정책 | LIGHT | 안전장치 |
| 13. FAQ | LIGHT | 질문 해소 |
| 14. Final CTA | DARK | 감성 클로징 |

### 7.3 서비스 (/services)

| 섹션 | 테마 |
|------|------|
| 서비스 철학 히어로 | DARK |
| 킬러 모듈 상세 | LIGHT |
| 추가 모듈 리스트 | LIGHT (교차) |
| 서비스 프로세스 | LIGHT |
| 패키지 비교 | LIGHT |
| CTA | DARK |

### 7.4 대표 소개 (/about)

| 섹션 | 테마 |
|------|------|
| 히어로 | DARK |
| 스토리 타임라인 | LIGHT |
| 핵심 역량 | LIGHT |
| CTA | DARK |

### 7.5 견적 문의 (/contact)

| 섹션 | 테마 |
|------|------|
| 전체 | LIGHT |

### 7.6 공통

| 요소 | 테마 |
|------|------|
| Header | Glass (투명 → 반투명 블러) |
| Footer | LIGHT (`#F9FAFB`) — zexea 동일 패턴 |

---

## 8. 기술 스택 & 구현 원칙

### 8.1 기술 스택
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animation**: framer-motion (한정적 사용)
- **Icons**: Lucide React
- **Font**: Pretendard (CDN)
- **Deployment**: Vercel

### 8.2 구현 원칙
- **모바일 퍼스트**: Tailwind 기본 → sm/md/lg/xl 순서
- **Lighthouse 90+**: Image 최적화, 폰트 프리로드, 불필요한 JS 제거
- **시맨틱 HTML**: alt 텍스트, 키보드 내비게이션, 색 대비 4.5:1+
- **데이터 분리**: 모든 콘텐츠 데이터 `src/data/` 폴더에 TypeScript 파일로 분리
- **placeholder**: `[TODO: 내용]` 형식 통일
- **한글 최적화**: `word-break: keep-all`, Pretendard 폰트 우선

---

## 9. 파일 구조

```
src/
├── app/
│   ├── layout.tsx              # 루트 레이아웃 (폰트, 메타데이터)
│   ├── page.tsx                # 홈
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── seminar/page.tsx
│   ├── contact/page.tsx
│   ├── reviews/page.tsx        # Phase 2
│   ├── resources/page.tsx      # Phase 2
│   ├── privacy/page.tsx
│   └── terms/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Glass Header
│   │   ├── Footer.tsx
│   │   ├── SectionWrapper.tsx  # 다크/라이트 섹션 래퍼
│   │   └── StickyBottomCTA.tsx # 모바일 고정 CTA
│   ├── ui/
│   │   ├── Button.tsx          # Primary/Secondary/Standard
│   │   ├── Card.tsx            # Dark/Light/Glass variants
│   │   ├── Badge.tsx           # 상태 뱃지
│   │   ├── Counter.tsx         # Spring Count-Up
│   │   ├── Accordion.tsx       # Smooth Accordion (FAQ)
│   │   ├── Carousel.tsx        # 후기 캐러셀 (Phase 2)
│   │   ├── Modal.tsx           # 폼 제출 확인
│   │   └── TypewriterText.tsx  # 히어로 타이핑 효과
│   ├── sections/
│   │   ├── Hero.tsx            # PainPoint Led 히어로
│   │   ├── PainPoints.tsx      # 통계 카드 3개
│   │   ├── WhatIsAX.tsx        # 3단계 프로세스
│   │   ├── KillerModule.tsx    # SNS 자동화 미리보기
│   │   ├── BeforeAfter.tsx     # 비교 표
│   │   ├── ProcessSteps.tsx    # 서비스 프로세스 4단계
│   │   ├── FAQ.tsx             # 아코디언
│   │   ├── Pricing.tsx         # 패키지 비교 표
│   │   ├── InstructorIntro.tsx # 강사 소개
│   │   ├── PersonaCards.tsx    # Is This You
│   │   ├── NewsletterCTA.tsx   # 이메일 수집
│   │   ├── SeminarPreview.tsx  # 다음 세미나 카드
│   │   └── FinalCTA.tsx        # 풀블리드 클로징
│   └── forms/
│       ├── ContactForm.tsx     # 견적 문의 폼
│       └── FormField.tsx       # 공용 폼 필드
│
├── data/
│   ├── seminars.ts
│   ├── reviews.ts
│   ├── services.ts
│   ├── faq.ts
│   ├── painPoints.ts
│   └── navigation.ts
│
├── hooks/
│   ├── useInView.ts            # IntersectionObserver
│   ├── useCountUp.ts           # 카운터 애니메이션
│   ├── useTypewriter.ts        # 타이핑 효과
│   └── useScrollHeader.ts      # Glass Header 전환
│
├── lib/
│   ├── utils.ts
│   └── constants.ts
│
└── styles/
    └── globals.css             # Tailwind base + 커스텀 유틸리티
```

---

## 10. Phase 1 MVP 범위

Phase 1 마감: 2026-04-13

| 순서 | 페이지 | 핵심 섹션 |
|------|--------|-----------|
| 1 | 프로젝트 세팅 | Next.js, Tailwind, 폰트, 컬러 시스템 |
| 2 | 공통 레이아웃 | Header (Glass), Footer, SectionWrapper |
| 3 | 홈 (/) | 히어로, 문제정의, AX소개, 킬러모듈, B/A, 세미나프리뷰, 대표소개, 뉴스레터 |
| 4 | 서비스 (/services) | 서비스철학, 킬러모듈 상세, 모듈리스트, 프로세스, 패키지비교 |
| 5 | 세미나 (/seminar) | 14개 전체 섹션 |
| 6 | 견적문의 (/contact) | 폼 + 제출 확인 모달 |
| 7 | 대표소개 (/about) | 히어로, 스토리, 역량 |

Phase 2 (4월 말): 수강후기, 무료리소스, 캐러셀, 카운터 애니메이션 완성
Phase 3 (5월~): 동적 세미나 페이지, API 연동, 블로그
