# MakeGrowth Website MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Phase 1 MVP of makegrowth.co — a marketing website for an e-commerce AI transformation company, with 6 pages (Home, Services, Seminar, Contact, About, + layout).

**Architecture:** Next.js 14 App Router with Tailwind CSS. Static pages with client-side animations (framer-motion). All content data in TypeScript files under `src/data/`. Dark/light section alternation using a `SectionWrapper` component. No backend — forms are client-side with placeholder submission.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS 3, framer-motion, Lucide React, Pretendard + Syne fonts

**Design Reference:** `DESIGN.md` (root) and `docs/superpowers/specs/2026-04-04-makegrowth-website-design.md`

---

## File Structure

```
makegrowth-web/
├── public/
│   └── images/              # placeholder images
├── src/
│   ├── app/
│   │   ├── layout.tsx       # root layout: fonts, metadata, Header/Footer
│   │   ├── page.tsx         # home page
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── seminar/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── SectionWrapper.tsx
│   │   │   └── StickyBottomCTA.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Counter.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── TypewriterText.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── PainPoints.tsx
│   │   │   ├── WhatIsAX.tsx
│   │   │   ├── KillerModule.tsx
│   │   │   ├── BeforeAfter.tsx
│   │   │   ├── ProcessSteps.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── InstructorIntro.tsx
│   │   │   ├── PersonaCards.tsx
│   │   │   ├── NewsletterCTA.tsx
│   │   │   ├── SeminarPreview.tsx
│   │   │   ├── WakeUpCall.tsx
│   │   │   ├── TheProblem.tsx
│   │   │   ├── TheSolution.tsx
│   │   │   ├── WhatYouGet.tsx
│   │   │   ├── HonestWarning.tsx
│   │   │   ├── RefundPolicy.tsx
│   │   │   └── FinalCTA.tsx
│   │   └── forms/
│   │       ├── ContactForm.tsx
│   │       └── FormField.tsx
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── painPoints.ts
│   │   ├── services.ts
│   │   ├── seminars.ts
│   │   ├── faq.ts
│   │   └── reviews.ts
│   ├── hooks/
│   │   ├── useInView.ts
│   │   ├── useCountUp.ts
│   │   ├── useTypewriter.ts
│   │   └── useScrollHeader.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── styles/
│       └── globals.css
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
├── DESIGN.md
└── WEBSITE_SPEC.md
```

---

## Task 1: Project Setup & Configuration

**Files:**
- Create: `package.json`, `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`
- Create: `src/styles/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/lib/constants.ts`, `src/lib/utils.ts`

- [ ] **Step 1: Scaffold Next.js project**

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-git
```

Select defaults: ESLint yes, import alias `@/*`.

- [ ] **Step 2: Install dependencies**

```bash
npm install lucide-react framer-motion
```

- [ ] **Step 3: Configure Tailwind with custom design tokens**

Replace `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0A0A0F",
          "surface-1": "#0F1011",
          "surface-2": "#1E293B",
        },
        primary: {
          50: "#EFF6FF",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        accent: {
          500: "#8B5CF6",
          600: "#7C3AED",
        },
      },
      fontFamily: {
        display: ["Syne", "Pretendard", "sans-serif"],
        sans: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 4: Set up globals.css with fonts and base styles**

Replace `src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap");

@layer base {
  html {
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  body {
    @apply font-sans text-gray-900 bg-white antialiased;
    line-height: 1.7;
  }

  h1 {
    @apply font-display text-[28px] md:text-[40px] font-extrabold leading-[1.2] tracking-tight;
  }

  h2 {
    @apply font-sans text-[24px] md:text-[32px] font-bold leading-[1.3];
  }

  h3 {
    @apply font-sans text-[20px] md:text-[24px] font-semibold leading-[1.4];
  }
}

@layer utilities {
  .gradient-text {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(to right, #818CF8, #C084FC);
  }

  .gradient-cta {
    background-image: linear-gradient(to right, #4F46E5, #9333EA);
    background-size: 200% 100%;
    transition: background-position 0.4s ease;
  }

  .gradient-cta:hover {
    background-position: 100% 0;
  }

  .glass {
    @apply bg-white/60 backdrop-blur-xl;
    border-bottom: 1px solid rgba(229, 231, 235, 0.4);
  }

  .dark-card {
    @apply bg-transparent border border-white/10 rounded-2xl overflow-hidden;
  }

  .glass-card {
    @apply bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl;
  }
}
```

- [ ] **Step 5: Create constants and utils**

Create `src/lib/constants.ts`:

```ts
export const SITE_NAME = "메이크그로스";
export const SITE_DESCRIPTION = "이커머스 셀러를 위한 AI Transformation 파트너";
export const SITE_URL = "https://makegrowth.co";

export const CONTACT_EMAIL = "hello@makegrowth.co";
export const COMPANY_NAME = "메이크그로스";
export const CEO_NAME = "[TODO: 대표자명]";
export const BUSINESS_NUMBER = "[TODO: 사업자등록번호]";
export const ADDRESS = "[TODO: 주소]";

export const SNS_LINKS = {
  instagram: "[TODO: Instagram URL]",
  youtube: "[TODO: YouTube URL]",
  kakao: "[TODO: 카카오톡 채널 URL]",
};
```

Create `src/lib/utils.ts`:

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Install clsx and tailwind-merge:

```bash
npm install clsx tailwind-merge
```

- [ ] **Step 6: Create root layout with fonts and metadata**

Replace `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — 이커머스 셀러를 위한 AI Transformation 파트너`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
```

Note: `globals.css` import path — Next.js App Router resolves `./globals.css` relative to `src/app/`. Move the CSS file or adjust the import path so it points to `@/styles/globals.css`. Update `layout.tsx` import to:

```tsx
import "@/styles/globals.css";
```

- [ ] **Step 7: Verify build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "chore: project setup with Next.js, Tailwind, fonts, design tokens"
```

---

## Task 2: Data Layer

**Files:**
- Create: `src/data/navigation.ts`
- Create: `src/data/painPoints.ts`
- Create: `src/data/services.ts`
- Create: `src/data/seminars.ts`
- Create: `src/data/faq.ts`
- Create: `src/data/reviews.ts`

- [ ] **Step 1: Create navigation data**

Create `src/data/navigation.ts`:

```ts
export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "서비스", href: "/services" },
  { label: "세미나", href: "/seminar" },
  { label: "대표 소개", href: "/about" },
  { label: "견적 문의", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "SNS 콘텐츠 자동화", href: "/services#sns-automation" },
    { label: "AI Image Studio", href: "/services#image-studio" },
    { label: "서비스 프로세스", href: "/services#process" },
    { label: "패키지 비교", href: "/services#pricing" },
  ],
  company: [
    { label: "대표 소개", href: "/about" },
    { label: "수강 후기", href: "/reviews" },
    { label: "무료 리소스", href: "/resources" },
  ],
  legal: [
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용약관", href: "/terms" },
  ],
};
```

- [ ] **Step 2: Create pain points data**

Create `src/data/painPoints.ts`:

```ts
export const heroPainPoints = [
  "상세페이지 AI 서비스 써봤는데, 우리 쇼핑몰 톤이랑 안 맞더라구요",
  "상세페이지 외주 30만원, 수정 요청만 3번째...",
  "밤새 키워드 리서치했는데, 결국 뭘 등록해야 할지 모르겠어요",
  "카톡방 돌며 유통처 찾느라 하루가 또 갔어요",
  "SNS 운영? 할 시간이 어디 있어요",
];

export const heroResolution = "내 상품, 내 카테고리에 맞는 AI. 이제 직접 만드세요.";

export interface StatCard {
  number: string;
  label: string;
  source: string;
}

export const painPointStats: StatCard[] = [
  {
    number: "100만 8,282",
    label: "2024년 폐업 사업자 수 — 사상 최초 100만 명 돌파",
    source: "국세청",
  },
  {
    number: "29만 9,642",
    label: "소매업 폐업 건수 — 전 업종 1위",
    source: "세계일보",
  },
  {
    number: "40.2%",
    label: "자영업자 5년 생존율 — 10곳 중 6곳이 폐업",
    source: "한국경제",
  },
];
```

- [ ] **Step 3: Create services data**

Create `src/data/services.ts`:

```ts
export interface ServiceModule {
  id: string;
  name: string;
  icon: string;
  status: "available" | "coming-soon";
  isKiller: boolean;
  description: string;
  features: string[];
  metrics: {
    timeBefore: string;
    timeAfter: string;
    costBefore: string;
    costAfter: string;
  };
}

export const serviceModules: ServiceModule[] = [
  {
    id: "sns-automation",
    name: "SNS 콘텐츠 자동화",
    icon: "share-2",
    status: "available",
    isKiller: true,
    description:
      "트렌드 기반 주제 기획부터 글·이미지 콘텐츠 생성, 멀티 채널 예약 발행까지 전 과정 자동화",
    features: ["트렌드 분석", "AI 콘텐츠 생성", "Repurposing", "멀티채널 발행"],
    metrics: {
      timeBefore: "주 5~8시간",
      timeAfter: "주 1~2시간",
      costBefore: "월 100~200만원 (담당자)",
      costAfter: "80%+ 절감",
    },
  },
  {
    id: "image-studio",
    name: "AI Image Studio",
    icon: "image",
    status: "coming-soon",
    isKiller: true,
    description: "브랜드 맞춤 제품컷·상세페이지 이미지 자동 생성",
    features: ["제품컷 생성", "상세페이지 이미지", "브랜드 톤 맞춤"],
    metrics: {
      timeBefore: "3~5일",
      timeAfter: "15분",
      costBefore: "건당 30만원",
      costAfter: "90%+ 절감",
    },
  },
  {
    id: "seller-bot",
    name: "AI 셀러 비서 봇",
    icon: "bot",
    status: "coming-soon",
    isKiller: false,
    description: "오픈마켓 API 연동, 매출·주문 실시간 조회, 셀러 업무 위임",
    features: ["매출 조회", "주문 관리", "업무 자동화"],
    metrics: {
      timeBefore: "매일 1~2시간",
      timeAfter: "자동",
      costBefore: "수동 관리",
      costAfter: "90%+ 시간 절감",
    },
  },
  {
    id: "marketing-copy",
    name: "AI 마케팅 카피",
    icon: "pen-tool",
    status: "coming-soon",
    isKiller: false,
    description: "광고 카피, 상품명 최적화, SEO 텍스트 자동 생성",
    features: ["광고 카피", "상품명 최적화", "SEO 텍스트"],
    metrics: {
      timeBefore: "건당 5~30만원",
      timeAfter: "API 비용만",
      costBefore: "카피라이터 외주",
      costAfter: "90%+ 절감",
    },
  },
  {
    id: "cs-automation",
    name: "AI CS 자동화",
    icon: "message-circle",
    status: "coming-soon",
    isKiller: false,
    description: "고객 문의 자동 분류 + 응답 초안 작성",
    features: ["문의 분류", "응답 초안", "FAQ 자동 생성"],
    metrics: {
      timeBefore: "월 80~150만원 (알바)",
      timeAfter: "인건비 대비 99% 절감",
      costBefore: "인력 대응",
      costAfter: "AI 챗봇",
    },
  },
  {
    id: "review-analysis",
    name: "AI 리뷰 분석",
    icon: "bar-chart-3",
    status: "coming-soon",
    isKiller: false,
    description: "고객 리뷰 감성 분석 + 상세페이지 개선 인사이트",
    features: ["감성 분석", "키워드 추출", "개선 인사이트"],
    metrics: {
      timeBefore: "수동 분석",
      timeAfter: "자동 리포트",
      costBefore: "시간 소요",
      costAfter: "실시간",
    },
  },
];

export interface BeforeAfterItem {
  category: string;
  before: string;
  after: string;
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    category: "SNS 콘텐츠 운영",
    before: "담당자 월 100~200만원",
    after: "AI 자동 생성·발행, 80%+ 절감",
  },
  {
    category: "상세페이지 이미지",
    before: "외주 건당 30만원, 3~5일",
    after: "AI 생성 장당 28원, 90%+ 절감",
  },
  {
    category: "상품 데이터 수집",
    before: "수동 리서치 매일 1~2시간",
    after: "AI 자동 크롤링, 90%+ 시간 절감",
  },
  {
    category: "CS 고객 응대",
    before: "알바 월 80~150만원",
    after: "AI 챗봇, 인건비 대비 99% 절감",
  },
  {
    category: "마케팅 카피",
    before: "카피라이터 외주 건당 5~30만원",
    after: "AI 자동 생성, API 비용만 발생",
  },
];

export interface PricingTier {
  name: string;
  target: string;
  format: string;
  duration: string;
  includes: string;
  price: string;
  highlight: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "AX 세미나",
    target: "입문~중급 셀러",
    format: "그룹 실습 (10명 소규모)",
    duration: "1일 (8시간)",
    includes: "실습 시스템, AI 템플릿, 커뮤니티",
    price: "인당 20만원",
    highlight: true,
  },
  {
    name: "AX 라이트",
    target: "운영 중 셀러",
    format: "1:1 코칭 + 모듈 1~2개",
    duration: "2~4주",
    includes: "시스템 세팅, 운영 가이드",
    price: "200~300만원",
    highlight: false,
  },
  {
    name: "AX 풀 패키지",
    target: "스케일업 셀러·소규모 팀",
    format: "전체 진단 + 맞춤 구축 + 교육",
    duration: "4~8주",
    includes: "전체 모듈 + 지속 지원",
    price: "300~500만원",
    highlight: false,
  },
];
```

- [ ] **Step 4: Create seminars data**

Create `src/data/seminars.ts`:

```ts
export interface CurriculumStep {
  time: string;
  stage: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface Seminar {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  maxParticipants: number;
  currentParticipants: number;
  status: "upcoming" | "sold-out" | "completed";
  curriculum: CurriculumStep[];
}

export const currentSeminar: Seminar = {
  id: "ax-seminar-2026-07",
  slug: "ax-sns-automation-0725",
  title: "AI SNS 콘텐츠 자동화 원데이 클래스",
  date: "2026-07-25",
  time: "10:00 - 18:00",
  location: "서울 은평구 (은평창업지원센터)",
  price: 200000,
  maxParticipants: 10,
  currentParticipants: 0,
  status: "upcoming",
  curriculum: [
    {
      time: "10:00 – 11:30",
      stage: "1단계",
      title: "진단",
      description: "내 셀러 루틴 분석 + AI 전환 가능 영역 식별",
      deliverable: "나만의 AX 우선순위 맵",
    },
    {
      time: "11:30 – 13:00",
      stage: "2단계",
      title: "시연",
      description: "AI 콘텐츠 자동화 시스템 라이브 시연",
      deliverable: "주제 기획 → 글·이미지 생성 → 멀티채널 발행까지",
    },
    {
      time: "14:00 – 16:30",
      stage: "3단계",
      title: "실습",
      description: "내 상품·브랜드로 직접 시스템 셋업 + N8N 워크플로우 자동화 연동",
      deliverable: "내 카테고리 맞춤 AI 자동화 파이프라인 (실제 작동)",
    },
    {
      time: "16:30 – 18:00",
      stage: "4단계",
      title: "코칭",
      description: "운영 노하우 전수 + Q&A + 커뮤니티 온보딩",
      deliverable: "운영 로드맵 + 커뮤니티 접근 + 향후 지원 안내",
    },
  ],
};

export const seminarCounters = [
  { value: 80, suffix: "%+", label: "콘텐츠 제작 시간 절감" },
  { value: 90, suffix: "%+", label: "이미지 외주비 절감" },
  { value: 5, suffix: "채널", label: "동시 발행 자동화" },
  { value: 0, suffix: "명", label: "수강생 (누적)" },
];

export const whatYouGet = [
  "AI SNS 콘텐츠 자동화 시스템 (최신 버전)",
  "카테고리별 프롬프트 템플릿",
  "N8N 자동화 워크플로우 파일",
  "셀러 운영 매뉴얼",
  "커뮤니티 접근 (지속 업데이트)",
  "[TODO: 추가 혜택]",
];

export const seminarPersonas = [
  {
    emoji: "⏰",
    title: "시간 부족 셀러",
    description: "상품은 잘 팔리는데 SNS·콘텐츠 만들 시간이 없다",
  },
  {
    emoji: "💸",
    title: "외주 의존 셀러",
    description: "SNS 운영 외주비가 매달 100만원+, 끊으면 채널이 멈춘다",
  },
  {
    emoji: "🤖",
    title: "AI 입문 셀러",
    description: 'ChatGPT는 써봤지만 "상세페이지 써줘" 수준에서 벗어나지 못한다',
  },
  {
    emoji: "📈",
    title: "스케일업 셀러",
    description: "1인 운영의 한계, 사람 안 뽑고 시스템으로 해결하고 싶다",
  },
  {
    emoji: "👥",
    title: "소규모 팀/중소기업",
    description: "마케팅팀 인력을 늘리지 않고 AI로 생산성을 높이고 싶다",
  },
];

export const honestWarnings = [
  "AI가 알아서 다 해줄 거라 기대하는 분",
  "실습 없이 듣기만 하고 싶은 분",
  "내 상품·카테고리에 대한 기본 이해가 없는 분",
  "노트북을 지참하지 않는 분",
];

export const refundPolicy = [
  { period: "7일 이상 전", refund: "전액 환불" },
  { period: "3일 이상 전", refund: "50% 환불" },
  { period: "2일 이내", refund: "환불 불가" },
];
```

- [ ] **Step 5: Create FAQ data**

Create `src/data/faq.ts`:

```ts
export interface FAQItem {
  question: string;
  answer: string;
}

export const seminarFAQ: FAQItem[] = [
  {
    question: "코딩을 전혀 몰라도 괜찮을까요?",
    answer:
      "네, 전혀 문제 없습니다. 세미나는 비개발자를 대상으로 설계되었습니다. 코딩 없이 노코드 도구(N8N)와 AI 프롬프트만으로 시스템을 구축합니다.",
  },
  {
    question: "하루 만에 정말 시스템을 가져갈 수 있나요?",
    answer:
      "네. 세미나 당일 내 상품·카테고리로 직접 실습하여, 실제 작동하는 AI 콘텐츠 자동화 파이프라인을 완성합니다. 세미나 이후에도 커뮤니티를 통해 지속 지원합니다.",
  },
  {
    question: "어떤 카테고리 셀러에게 적합한가요?",
    answer:
      "뷰티, 건강기능식품, 패션, 가전, 생활용품 등 대부분의 이커머스 카테고리에 적용 가능합니다. 세미나에서 내 카테고리에 맞게 커스터마이징합니다.",
  },
  {
    question: "세미나 이후 추가 비용이 있나요?",
    answer:
      "세미나 자체는 1회 비용(20만원)으로 끝납니다. AI 시스템 운영에 필요한 API 비용(월 1~2만원 수준)은 별도입니다. 추가 코칭이나 구축 대행이 필요하면 AX 라이트/풀 패키지를 안내드립니다.",
  },
  {
    question: "노트북 사양 조건이 있나요?",
    answer:
      "인터넷 접속이 가능한 노트북이면 충분합니다. 모든 작업은 클라우드 기반으로 진행되므로 고사양이 필요하지 않습니다.",
  },
  {
    question: "녹화본이 제공되나요?",
    answer:
      "아니요. 소규모 실습 중심 세미나이므로 녹화본은 제공하지 않습니다. 대신 세미나 자료와 운영 매뉴얼을 제공합니다.",
  },
];
```

- [ ] **Step 6: Create reviews placeholder data**

Create `src/data/reviews.ts`:

```ts
export interface Review {
  id: string;
  name: string;
  role: string;
  category: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "review-001",
    name: "김OO",
    role: "쿠팡 셀러",
    category: "건강기능식품",
    rating: 5,
    text: "[TODO: 실제 후기 입력]",
    date: "2026-07-25",
  },
  {
    id: "review-002",
    name: "이OO",
    role: "스마트스토어 셀러",
    category: "뷰티",
    rating: 5,
    text: "[TODO: 실제 후기 입력]",
    date: "2026-07-25",
  },
  {
    id: "review-003",
    name: "박OO",
    role: "자사몰 운영",
    category: "패션",
    rating: 5,
    text: "[TODO: 실제 후기 입력]",
    date: "2026-07-25",
  },
];
```

- [ ] **Step 7: Verify build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 8: Commit**

```bash
git add src/data/
git commit -m "feat: add all content data files (navigation, painPoints, services, seminars, faq, reviews)"
```

---

## Task 3: Custom Hooks

**Files:**
- Create: `src/hooks/useInView.ts`
- Create: `src/hooks/useCountUp.ts`
- Create: `src/hooks/useTypewriter.ts`
- Create: `src/hooks/useScrollHeader.ts`

- [ ] **Step 1: Create useInView hook**

Create `src/hooks/useInView.ts`:

```ts
"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView({ threshold = 0.2, triggerOnce = true }: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, isInView };
}
```

- [ ] **Step 2: Create useCountUp hook**

Create `src/hooks/useCountUp.ts`:

```ts
"use client";

import { useEffect, useState } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  enabled?: boolean;
}

export function useCountUp({ end, duration = 2000, enabled = false }: UseCountUpOptions) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOut curve: fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, enabled]);

  return count;
}
```

- [ ] **Step 3: Create useTypewriter hook**

Create `src/hooks/useTypewriter.ts`:

```ts
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseTypewriterOptions {
  texts: string[];
  resolution: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  resolutionDuration?: number;
}

export function useTypewriter({
  texts,
  resolution,
  typeSpeed = 50,
  deleteSpeed = 30,
  pauseDuration = 2000,
  resolutionDuration = 5000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [isResolution, setIsResolution] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const typeText = useCallback(
    (text: string, charIndex: number, onComplete: () => void) => {
      if (charIndex <= text.length) {
        setDisplayText(text.slice(0, charIndex));
        timeoutRef.current = setTimeout(
          () => typeText(text, charIndex + 1, onComplete),
          typeSpeed
        );
      } else {
        timeoutRef.current = setTimeout(onComplete, pauseDuration);
      }
    },
    [typeSpeed, pauseDuration]
  );

  const deleteText = useCallback(
    (text: string, charIndex: number, onComplete: () => void) => {
      if (charIndex >= 0) {
        setDisplayText(text.slice(0, charIndex));
        timeoutRef.current = setTimeout(
          () => deleteText(text, charIndex - 1, onComplete),
          deleteSpeed
        );
      } else {
        onComplete();
      }
    },
    [deleteSpeed]
  );

  const runCycle = useCallback(() => {
    const currentText = texts[indexRef.current];
    setIsResolution(false);
    setIsTyping(true);

    typeText(currentText, 0, () => {
      setIsTyping(false);
      deleteText(currentText, currentText.length, () => {
        indexRef.current = (indexRef.current + 1) % texts.length;

        if (indexRef.current === 0) {
          // Show resolution after cycling through all texts
          setIsResolution(true);
          setDisplayText(resolution);
          timeoutRef.current = setTimeout(runCycle, resolutionDuration);
        } else {
          runCycle();
        }
      });
    });
  }, [texts, resolution, resolutionDuration, typeText, deleteText]);

  useEffect(() => {
    runCycle();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [runCycle]);

  return { displayText, isResolution, isTyping };
}
```

- [ ] **Step 4: Create useScrollHeader hook**

Create `src/hooks/useScrollHeader.ts`:

```ts
"use client";

import { useEffect, useState } from "react";

export function useScrollHeader(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
```

- [ ] **Step 5: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 6: Commit**

```bash
git add src/hooks/
git commit -m "feat: add custom hooks (useInView, useCountUp, useTypewriter, useScrollHeader)"
```

---

## Task 4: UI Components

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/Counter.tsx`
- Create: `src/components/ui/Accordion.tsx`
- Create: `src/components/ui/Modal.tsx`
- Create: `src/components/ui/TypewriterText.tsx`

- [ ] **Step 1: Create Button component**

Create `src/components/ui/Button.tsx`:

```tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "standard" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  dark?: boolean;
}

const variants = {
  primary:
    "gradient-cta text-white rounded-full font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200",
  secondary:
    "bg-transparent border rounded-full font-semibold transition-all duration-200",
  standard:
    "bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors",
  ghost:
    "bg-transparent hover:bg-gray-100 rounded-lg font-medium transition-colors",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
  dark = false,
}: ButtonProps) {
  const secondaryColors = dark
    ? "text-purple-300 border-purple-500/40 hover:border-purple-400/60"
    : "text-primary-600 border-primary-600/40 hover:border-primary-600/60";

  const classes = cn(
    variants[variant],
    sizes[size],
    variant === "secondary" && secondaryColors,
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn("inline-block", classes)}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Create Card component**

Create `src/components/ui/Card.tsx`:

```tsx
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "dark" | "light" | "glass";
  className?: string;
  hover?: boolean;
}

const cardVariants = {
  dark: "dark-card",
  light: "bg-white border border-gray-200 rounded-xl shadow-sm",
  glass: "glass-card",
};

export function Card({ children, variant = "light", className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        cardVariants[variant],
        hover && variant === "light" && "hover:shadow-md hover:-translate-y-0.5 transition-all duration-200",
        hover && variant === "dark" && "hover:border-white/20 transition-colors duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 3: Create Badge component**

Create `src/components/ui/Badge.tsx`:

```tsx
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "available" | "coming-soon" | "new" | "custom";
  className?: string;
}

const badgeVariants = {
  available: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  "coming-soon": "bg-amber-500/10 text-amber-500 border-amber-500/30",
  new: "bg-primary-600/10 text-primary-600 border-primary-600/30",
  custom: "",
};

export function Badge({ children, variant = "new", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium border",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 4: Create Counter component**

Create `src/components/ui/Counter.tsx`:

```tsx
"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function Counter({ end, suffix = "", label, className }: CounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const count = useCountUp({ end, enabled: isInView });

  return (
    <div ref={ref} className={className}>
      <span className="text-2xl md:text-3xl font-extrabold">
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="text-sm mt-1 opacity-70">{label}</p>
    </div>
  );
}
```

- [ ] **Step 5: Create Accordion component**

Create `src/components/ui/Accordion.tsx`:

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  dark?: boolean;
}

function AccordionItem({ question, answer, isOpen, onToggle, dark }: AccordionItemProps) {
  return (
    <div
      className={cn(
        "border-b",
        dark ? "border-white/10" : "border-gray-200"
      )}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "font-medium text-[15px]",
            dark ? "text-white" : "text-gray-900"
          )}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown
            className={cn("w-5 h-5 flex-shrink-0 ml-4", dark ? "text-gray-400" : "text-gray-500")}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className={cn(
                "pb-5 text-sm leading-relaxed",
                dark ? "text-gray-400" : "text-gray-600"
              )}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  dark?: boolean;
}

export function Accordion({ items, dark }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          dark={dark}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 6: Create Modal component**

Create `src/components/ui/Modal.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 mx-4">
              <div className="flex items-center justify-between mb-4">
                {title && <h3 className="font-semibold text-lg">{title}</h3>}
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors ml-auto"
                  aria-label="닫기"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 7: Create TypewriterText component**

Create `src/components/ui/TypewriterText.tsx`:

```tsx
"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  texts: string[];
  resolution: string;
  className?: string;
}

export function TypewriterText({ texts, resolution, className }: TypewriterTextProps) {
  const { displayText, isResolution, isTyping } = useTypewriter({
    texts,
    resolution,
  });

  return (
    <div className={cn("min-h-[3em]", className)}>
      <AnimatePresence mode="wait">
        {isResolution ? (
          <motion.p
            key="resolution"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-purple-300 text-lg md:text-xl font-semibold"
          >
            {displayText}
          </motion.p>
        ) : (
          <p className="text-red-400/80 text-base md:text-lg italic">
            &ldquo;{displayText}
            <span
              className={cn(
                "inline-block w-[2px] h-[1em] bg-red-400 ml-0.5 align-middle",
                isTyping && "animate-pulse"
              )}
            />
            &rdquo;
          </p>
        )}
      </AnimatePresence>
    </div>
  );
}
```

- [ ] **Step 8: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 9: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add UI components (Button, Card, Badge, Counter, Accordion, Modal, TypewriterText)"
```

---

## Task 5: Layout Components (Header, Footer, SectionWrapper, StickyBottomCTA)

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/SectionWrapper.tsx`
- Create: `src/components/layout/StickyBottomCTA.tsx`
- Modify: `src/app/layout.tsx` — wrap children with Header + Footer

- [ ] **Step 1: Create SectionWrapper**

Create `src/components/layout/SectionWrapper.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  theme?: "dark" | "light" | "light-alt" | "gradient-transition";
  className?: string;
  id?: string;
  animate?: boolean;
  stagger?: boolean;
}

const bgMap = {
  dark: "bg-dark-bg text-white",
  light: "bg-white text-gray-900",
  "light-alt": "bg-gray-50 text-gray-900",
  "gradient-transition":
    "bg-gradient-to-b from-dark-bg via-slate-800 to-white text-gray-900",
};

export function SectionWrapper({
  children,
  theme = "light",
  className,
  id,
  animate = true,
  stagger = false,
}: SectionWrapperProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const content = animate ? (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...(stagger && {
        transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
      })}
    >
      {children}
    </motion.div>
  ) : (
    children
  );

  return (
    <section
      ref={ref}
      id={id}
      className={cn("py-12 md:py-20 px-6 md:px-8", bgMap[theme], className)}
    >
      <div className="max-w-content mx-auto">{content}</div>
    </section>
  );
}
```

- [ ] **Step 2: Create Header**

Create `src/components/layout/Header.tsx`:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = useScrollHeader();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "glass" : "bg-transparent"
      )}
    >
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg">
            <span
              className={cn(
                "transition-colors",
                isScrolled ? "text-gray-900" : "text-white"
              )}
            >
              메이크그로스
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  isScrolled ? "text-gray-700" : "text-gray-300 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/seminar" size="sm">
              세미나 신청
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            {mobileOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-gray-900" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 p-6 shadow-xl lg:hidden"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMobileOpen(false)} aria-label="닫기">
                  <X className="w-6 h-6 text-gray-900" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-900 font-medium text-lg py-2 hover:text-primary-600 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4">
                  <Button href="/seminar" className="w-full text-center">
                    세미나 신청
                  </Button>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
```

- [ ] **Step 3: Create Footer**

Create `src/components/layout/Footer.tsx`:

```tsx
import Link from "next/link";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { footerNav } from "@/data/navigation";
import {
  COMPANY_NAME,
  CEO_NAME,
  BUSINESS_NUMBER,
  ADDRESS,
  CONTACT_EMAIL,
  SNS_LINKS,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-content mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-bold text-lg text-gray-900">
              메이크그로스
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              이커머스 사업자의 시간과 비용을 되찾아주는 AI 파트너
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={SNS_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SNS_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={SNS_LINKS.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="카카오톡"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              서비스
            </h4>
            <ul className="space-y-2">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              회사
            </h4>
            <ul className="space-y-2">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              문의
            </h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gray-700 transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-700 transition-colors">
                  견적 문의하기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-xs text-gray-400 space-y-1">
              <p>
                {COMPANY_NAME} | 대표: {CEO_NAME} | 사업자등록번호: {BUSINESS_NUMBER}
              </p>
              <p>{ADDRESS}</p>
            </div>
            <div className="flex gap-4">
              {footerNav.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            © 2026 {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Create StickyBottomCTA**

Create `src/components/layout/StickyBottomCTA.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCTA = document.getElementById("hero-cta");
    const footer = document.querySelector("footer");
    if (!heroCTA) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show when hero CTA is NOT visible
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false);
      },
      { threshold: 0 }
    );

    observer.observe(heroCTA);
    if (footer) footerObserver.observe(footer);

    return () => {
      observer.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] lg:hidden">
      <Button href="/seminar" className="w-full text-center">
        세미나 신청하기
      </Button>
    </div>
  );
}
```

- [ ] **Step 5: Update root layout with Header and Footer**

Replace `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBottomCTA } from "@/components/layout/StickyBottomCTA";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — 이커머스 셀러를 위한 AI Transformation 파트너`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBottomCTA />
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Create placeholder home page**

Replace `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <h1 className="text-white">메이크그로스</h1>
    </div>
  );
}
```

- [ ] **Step 7: Verify build and run dev**

```bash
npm run build && npm run dev
```

Open http://localhost:3000 — verify header renders, footer renders, mobile menu works.

- [ ] **Step 8: Commit**

```bash
git add src/components/layout/ src/app/layout.tsx src/app/page.tsx
git commit -m "feat: add layout components (Header, Footer, SectionWrapper, StickyBottomCTA)"
```

---

## Task 6: Home Page Sections

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/PainPoints.tsx`
- Create: `src/components/sections/WhatIsAX.tsx`
- Create: `src/components/sections/KillerModule.tsx`
- Create: `src/components/sections/BeforeAfter.tsx`
- Create: `src/components/sections/SeminarPreview.tsx`
- Create: `src/components/sections/InstructorIntro.tsx`
- Create: `src/components/sections/NewsletterCTA.tsx`
- Modify: `src/app/page.tsx` — compose all sections

This is a large task. Each section is a self-contained component. Build them sequentially and compose on the home page.

- [ ] **Step 1: Create Hero section**

Create `src/components/sections/Hero.tsx` — full PainPoint Led hero with dark background, typewriter animation, parallax, gradient CTA. Reference DESIGN.md Section 9 "Hero section prompt" and design spec Section 6.1. Include `id="hero-cta"` on the CTA container for StickyBottomCTA.

- [ ] **Step 2: Create PainPoints section**

Create `src/components/sections/PainPoints.tsx` — 3 stat cards on dark background with Counter animation. Quote: "문제는 AI가 없는 게 아닙니다. AI를 내 체질로 만들지 못하는 겁니다."

- [ ] **Step 3: Create WhatIsAX section**

Create `src/components/sections/WhatIsAX.tsx` — 3-step process (진단→구축→교육) with stagger animation on light background. Differentiation quote at bottom.

- [ ] **Step 4: Create KillerModule section**

Create `src/components/sections/KillerModule.tsx` — SNS automation pipeline visualization + AI Image Studio secondary card. CTA to /services.

- [ ] **Step 5: Create BeforeAfter section**

Create `src/components/sections/BeforeAfter.tsx` — 2-column comparison table using `beforeAfterItems` data. Red (before) / Green (after) color coding.

- [ ] **Step 6: Create SeminarPreview section**

Create `src/components/sections/SeminarPreview.tsx` — next seminar card with date/location/price from `currentSeminar` data. CTA to /seminar.

- [ ] **Step 7: Create InstructorIntro section**

Create `src/components/sections/InstructorIntro.tsx` — photo placeholder + one-liner + 3 counters. CTA to /about.

- [ ] **Step 8: Create NewsletterCTA section**

Create `src/components/sections/NewsletterCTA.tsx` — dark section with email inline form. Client-side only (no API yet).

- [ ] **Step 9: Compose home page**

Replace `src/app/page.tsx` — import and compose all sections in order with correct dark/light SectionWrapper themes. Follow the section order from design spec Section 7.1.

- [ ] **Step 10: Verify in browser**

```bash
npm run dev
```

Check: all sections render, typewriter animation runs, counter counts up on scroll, mobile responsive, dark/light transitions visible.

- [ ] **Step 11: Commit**

```bash
git add src/components/sections/ src/app/page.tsx
git commit -m "feat: add home page with all 8 sections"
```

---

## Task 7: Services Page

**Files:**
- Create: `src/components/sections/ProcessSteps.tsx`
- Create: `src/components/sections/Pricing.tsx`
- Create: `src/app/services/page.tsx`

- [ ] **Step 1: Create ProcessSteps section**

4-step process (진단→구축→교육→자립) with numbered steps, icons, descriptions. Light background.

- [ ] **Step 2: Create Pricing section**

3-tier comparison table (AX 세미나 / AX 라이트 / AX 풀 패키지) from `pricingTiers` data. Highlight the seminar tier.

- [ ] **Step 3: Compose services page**

Create `src/app/services/page.tsx` — Dark hero with service philosophy, killer module detail sections (SNS + Image Studio), module card grid, ProcessSteps, Pricing, dark CTA. Add page metadata.

- [ ] **Step 4: Verify and commit**

```bash
npm run dev
# Check /services page
git add src/components/sections/ProcessSteps.tsx src/components/sections/Pricing.tsx src/app/services/
git commit -m "feat: add services page with modules, process, and pricing"
```

---

## Task 8: Seminar Page (14 Sections)

**Files:**
- Create: `src/components/sections/WakeUpCall.tsx`
- Create: `src/components/sections/TheProblem.tsx`
- Create: `src/components/sections/TheSolution.tsx`
- Create: `src/components/sections/WhatYouGet.tsx`
- Create: `src/components/sections/PersonaCards.tsx`
- Create: `src/components/sections/HonestWarning.tsx`
- Create: `src/components/sections/RefundPolicy.tsx`
- Create: `src/components/sections/FinalCTA.tsx`
- Create: `src/app/seminar/page.tsx`

- [ ] **Step 1: Create seminar-specific sections**

Create all 7 new section components. Each is self-contained with its data imports. Follow the dark/light theme map from design spec Section 7.2.

- WakeUpCall: 3-column comparison table (유튜브 vs 일반강의 vs 메이크그로스), dark theme
- TheProblem: 3 pain points with red accent, dark theme
- TheSolution: 3 deliverables cards, light theme
- WhatYouGet: 6-card grid, light-alt theme
- PersonaCards: 5 persona items with checkmarks, light theme
- HonestWarning: warning items with X marks, dark theme
- RefundPolicy: simple table, light theme
- FinalCTA: full-bleed dark gradient with emotional copy and CTA

- [ ] **Step 2: Compose seminar page**

Create `src/app/seminar/page.tsx` — compose all 14 sections in emotional arc order. Reuse Hero (with seminar-specific props), WakeUpCall, TheProblem, gradient-transition, TheSolution, Curriculum (from ProcessSteps variant), BeforeAfter, WhatYouGet, PersonaCards, HonestWarning, InstructorIntro, Reviews placeholder, RefundPolicy, FAQ, FinalCTA. Add page metadata.

- [ ] **Step 3: Verify and commit**

```bash
npm run dev
# Check /seminar page — all 14 sections, dark/light transitions, emotional arc
git add src/components/sections/ src/app/seminar/
git commit -m "feat: add seminar landing page with 14 sections"
```

---

## Task 9: Contact Page

**Files:**
- Create: `src/components/forms/FormField.tsx`
- Create: `src/components/forms/ContactForm.tsx`
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Create FormField component**

Create `src/components/forms/FormField.tsx` — reusable form field supporting text, email, tel, select, multi-select (checkboxes), textarea, checkbox. Includes label, required indicator, validation styling.

- [ ] **Step 2: Create ContactForm**

Create `src/components/forms/ContactForm.tsx` — full form matching WEBSITE_SPEC.md Section 4.6 fields. Client-side validation. On submit: show success Modal. No API integration yet.

Fields: 이름, 이메일, 전화번호, 현재 판매 채널 (multi-select), 월 평균 매출 (select), 관심 서비스 (multi-select), 현재 가장 큰 운영 고민 (textarea), 프로젝트 상세 설명 (textarea, optional), 희망 예산 (select), 개인정보 동의 (checkbox).

- [ ] **Step 3: Compose contact page**

Create `src/app/contact/page.tsx` — light theme, form with side info panel. Add page metadata.

- [ ] **Step 4: Verify and commit**

```bash
npm run dev
# Check /contact — form renders, validation works, submit shows modal
git add src/components/forms/ src/app/contact/
git commit -m "feat: add contact page with full inquiry form"
```

---

## Task 10: About Page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Compose about page**

Create `src/app/about/page.tsx` — Dark hero with photo placeholder + philosophy quote. Light timeline (3 stages: 셀러→빌더→창업). Light capability cards (2-column: 이커머스 실전, AI 시스템 빌더, AX 방법론, 교육/코칭). Dark CTA. Add page metadata.

- [ ] **Step 2: Verify and commit**

```bash
npm run dev
# Check /about — hero, timeline, capabilities, CTA
git add src/app/about/
git commit -m "feat: add about page with story timeline and capabilities"
```

---

## Task 11: Legal Pages + Final Polish

**Files:**
- Create: `src/app/privacy/page.tsx`
- Create: `src/app/terms/page.tsx`

- [ ] **Step 1: Create privacy and terms pages**

Create minimal placeholder pages with `[TODO: 내용]` content. Light theme, simple text layout.

- [ ] **Step 2: Final build verification**

```bash
npm run build
```

Expected: Build succeeds with zero errors. Check all pages render at:
- `/` (home)
- `/services`
- `/seminar`
- `/contact`
- `/about`
- `/privacy`
- `/terms`

- [ ] **Step 3: Mobile responsiveness check**

Open dev tools, check each page at 375px (mobile), 768px (tablet), 1280px (desktop). Verify:
- Header hamburger menu works on mobile
- Card grids collapse correctly (3→2→1)
- Text scales appropriately
- StickyBottomCTA appears on mobile
- No horizontal overflow

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: add legal pages and complete MVP build"
```

---

## Execution Summary

| Task | Description | Estimated Steps |
|------|-------------|-----------------|
| 1 | Project Setup | 8 |
| 2 | Data Layer | 8 |
| 3 | Custom Hooks | 6 |
| 4 | UI Components | 9 |
| 5 | Layout Components | 8 |
| 6 | Home Page | 11 |
| 7 | Services Page | 4 |
| 8 | Seminar Page | 3 |
| 9 | Contact Page | 4 |
| 10 | About Page | 2 |
| 11 | Legal + Polish | 4 |
| **Total** | | **67 steps** |

Tasks 1-5 are foundational and must be sequential. Tasks 6-10 (pages) can be parallelized after Task 5 completes. Task 11 is final.
