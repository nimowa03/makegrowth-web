# 메이크그로스(MakeGrowth) 웹사이트 현행 스펙 (v8)

> **문서 목적**: 현재 코드베이스와 1:1 대응하는 실제 구현 스펙
>
> **최종 동기화일**: 2026-04-09
>
> **디자인 기준**: joshua.site (영구) → DESIGN.md 참조

---

## 1. 프로젝트 개요

### 1.1 사이트 목적

메이크그로스는 이커머스 1인 셀러를 1인 기업가로 육성하는 AX(AI Transformation) 파트너.
잠재 고객(이커머스 셀러)에게 서비스를 소개하고, 셀러 루틴 분석기(리드 마그넷) → 웨비나 → 도입 문의 퍼널을 운영.

### 1.2 핵심 메시지

* **메인 카피**: "할 줄 모르는 일은 전부 비용입니다"
* **서브 카피**: "이커머스 사업자의 시간과 비용을 되찾아주는 AI 파트너"
* **포지셔닝**: 진단 → 구축 → 교육 AX 프레임워크

### 1.3 타겟 유저

* **Primary**: 쿠팡/스마트스토어 1인 셀러 (월 매출 500만~5,000만원)
* **Secondary**: 이커머스 창업 준비자, 소규모 셀러 팀 (2~5인)

### 1.4 기술 스택 (실제 구현)

| 항목 | 실제 사용 |
|------|----------|
| Framework | Next.js 16.2.2 (App Router, React 19) |
| Styling | Tailwind CSS v4 (@theme inline, @utility) |
| Animation | framer-motion 12.38.0 |
| Icons | @iconify/react + @iconify-json/solar |
| Display Font | Outfit |
| Body Font | Pretendard Variable |
| Form Backend | Google Sheets API + N8N Webhook |
| Deployment | Vercel (예정) |

---

## 2. 사이트맵 (현재 구현)

```
makegrowth.dev
│
├── /                   홈 (Hook → Bridge → Promise → Deepen → Trust → Close)
├── /services           서비스 소개 (다크 히어로 + 모듈 + 가격 + 프로세스)
├── /seminar            웨비나 (SeminarHero → Curriculum → WhatYouGet → FAQ → FinalCTA)
├── /about              대표 소개 (타임라인 + 역량 + CTA)
├── /diagnosis          셀러 루틴 분석기 (인터랙티브 리드 마그넷)
├── /contact            도입 문의 (폼 + 정보 패널)
├── /reviews            수강 후기 (placeholder 상태)
├── /systems            구축 시스템 쇼케이스
├── /privacy            개인정보처리방침
└── /terms              이용약관 (미구현)
```

**총 9개 주요 페이지** + 법적 페이지 2개

---

## 3. 페이지별 현행 구조

### 3.1 홈페이지 (`/`)

**구조**: Hook → Bridge → Promise → Deepen → Trust → Close

| 순서 | 섹션 | 컴포넌트 | 역할 |
|------|------|----------|------|
| 1 | Hook | Hero | TypewriterText 페인포인트 타이핑 → 해결 전환 |
| 2 | Hook | VideoIntro | BrowserMockup 영상 슬롯 (placeholder) |
| 3 | Bridge | PainCost | 시장 통계 3개 + Before/After 비교 |
| 4 | Promise | BotDemo | 인터랙티브 봇 기능 시연 (승인 플로우) |
| 5 | Promise | HomePricing | 3블록: 비교 앵커 + 가격 카드 (월 49,000원) + 비교표 |
| 6 | Deepen | DiagnosisTool | 4스텝 리드 마그넷 계산기 (시간/비용/절감) |
| 7 | Trust | HowItWorks | 3스텝 AX 프로세스 (진단 → 구축 → 교육) |
| 8 | Trust | WhyUs | 6개 차별화 카드 |
| 9 | Close | HomepageFAQ | 아코디언 FAQ |

### 3.2 서비스 (`/services`)

ServicesContent.tsx (클라이언트 컴포넌트)
- 다크 히어로 (딥 네이비 그라디언트)
- 코어 봇 프로덕트 소개
- SNS 자동화 + AI 상세페이지 모듈
- Modules (봇 모듈 그리드, TiltCard)
- HomePricing (가격)
- HowItWorks (프로세스)

### 3.3 웨비나 (`/seminar`)

| 순서 | 컴포넌트 | 역할 |
|------|----------|------|
| 1 | SeminarHero | 웨비나 히어로 + CTA |
| 2 | Curriculum | 커리큘럼/타임테이블 |
| 3 | WhatYouGet | 제공 가치 카드 |
| 4 | SeminarFAQ | 웨비나 전용 FAQ |
| 5 | FinalCTA | 최종 전환 CTA |

### 3.4 대표 소개 (`/about`)

- 대표 프로필 (charleepic.png, 노아/이창수)
- 타임라인 (2023 → 2024 → 2026)
- 역량 카드 3개
- CTA

### 3.5 셀러 루틴 분석기 (`/diagnosis`)

- 4스텝 인터랙티브 폼
- 업무 선택 → 소요 시간 → 외주 비용 → 결과 (도넛 차트)
- 절감 효과 계산 (연간/월간)
- Google Sheets + N8N 제출

### 3.6 도입 문의 (`/contact`)

- 2컬럼: 폼 + 정보 사이드바
- 필드: 이름, 이메일, 주요 고민, 개인정보 동의
- 제출 → Google Sheets + N8N + 모달 확인

### 3.7 수강 후기 (`/reviews`)

- 후기 그리드 (placeholder, 실제 데이터 대기)

### 3.8 구축 시스템 (`/systems`)

- 직접 구축한 시스템 쇼케이스

---

## 4. 컴포넌트 인벤토리 (현행)

### Layout (3)
- `Header.tsx` — 고정 상단 네비 + 모바일 메뉴
- `Footer.tsx` — 회사 정보 + 네비게이션 링크
- `SectionWrapper.tsx` — 섹션 래퍼 (dark/light/gradient 테마)

### UI (13)
- `Accordion.tsx` — FAQ 아코디언
- `Badge.tsx` — 상태 뱃지 (included/addon/coming-soon)
- `BrowserMockup.tsx` — 브라우저 프레임 (이미지/영상/placeholder)
- `Button.tsx` — CTA 버튼 (primary/secondary, arrow 옵션)
- `Card.tsx` — 범용 카드 (light/dark, hover)
- `ChatSimulation.tsx` — 채팅 시뮬레이션 애니메이션
- `MagneticButton.tsx` — 커서 추적 버튼
- `Modal.tsx` — 모달 다이얼로그
- `PhoneMockup.tsx` — 폰 프레임 (텔레그램 스타일)
- `ScrollProgress.tsx` — 스크롤 진행 바
- `StickyBottomCTA.tsx` — 하단 고정 CTA
- `TextReveal.tsx` — 스크롤 텍스트 공개 애니메이션
- `TiltCard.tsx` — 3D 마우스 추적 틸트
- `TypewriterText.tsx` — 타자기 효과

### Sections (13)
- `Hero.tsx` — 홈 히어로 (TypewriterText 페인포인트)
- `VideoIntro.tsx` — 영상 소개 (BrowserMockup)
- `PainCost.tsx` — 시장 통계 + Before/After
- `BotDemo.tsx` — 봇 기능 인터랙티브 시연
- `HomePricing.tsx` — 3블록 가격 구조
- `DiagnosisTool.tsx` — 리드 마그넷 계산기
- `HowItWorks.tsx` — 3스텝 AX 프로세스
- `WhyUs.tsx` — 6개 차별화 포인트
- `HomepageFAQ.tsx` — 홈 FAQ
- `Modules.tsx` — 봇 모듈 그리드
- `SeminarHero.tsx` — 웨비나 히어로
- `Curriculum.tsx` — 커리큘럼
- `WhatYouGet.tsx` — 제공 가치
- `SeminarFAQ.tsx` — 웨비나 FAQ
- `FinalCTA.tsx` — 최종 CTA

### Forms (2)
- `ContactForm.tsx` — 문의 폼 (유효성 검증 + 모달)
- `FormField.tsx` — 재사용 폼 필드

---

## 5. 데이터 파일 (`src/data/`)

| 파일 | 내용 |
|------|------|
| `navigation.ts` | 메인 네비 + 푸터 네비 |
| `modules.ts` | 11개 봇 모듈 (아이콘/상태/설명) |
| `services.ts` | 6개 서비스 모듈 |
| `botDemo.ts` | 봇 시연 시나리오 |
| `diagnosis.ts` | 진단기 업무/카테고리/매출 범위 |
| `faq.ts` | 홈 FAQ 항목 |
| `painPoints.ts` | 히어로 페인포인트 + 해결 메시지 |
| `reviews.ts` | 후기 데이터 구조 |
| `seminars.ts` | 웨비나 일정/상세 |

---

## 6. 네비게이션 (현행)

**헤더**: 서비스 | 가격 | 웨비나 | 프로필 | 도입 문의

**푸터**:
- Services: AI 셀러 비서 봇, 봇 모듈, 가격 안내, 무료 웨비나
- Company: About
- Legal: 개인정보처리방침, 이용약관

---

## 7. API 라우트

| 경로 | 메서드 | 역할 |
|------|--------|------|
| `/api/contact` | POST | 문의 폼 → Google Sheets + N8N |
| `/api/diagnosis` | POST | 진단 결과 → Google Sheets + N8N |

---

## 8. 메타데이터 & SEO (현행)

### 전역 (layout.tsx)
- title: `메이크그로스 — 이커머스 셀러 전용 AI 비서 봇`
- description: `이커머스 셀러 전용 AI 비서 봇`
- metadataBase: `https://makegrowth.dev`
- openGraph: ko_KR, website

### 페이지별 title
| 페이지 | title |
|--------|-------|
| /seminar | 웨비나 |
| /contact | 문의하기 |
| /about | 회사 소개 |
| /services | 서비스 |
| /diagnosis | 셀러 루틴 분석기 |
| /reviews | 수강 후기 |
| /privacy | 개인정보처리방침 |

### 미완 항목
- **og:image**: 전 페이지 미설정
- **twitter:card**: 미설정
- **페이지별 description**: 대부분 미설정 (전역 description만 사용)

---

## 9. 에셋 현황

| 에셋 | 상태 | 위치 |
|------|------|------|
| 대표 사진 | ✅ | `/public/charleepic.png` |
| robots.txt | ✅ | `/public/robots.txt` |
| OG 이미지 | ❌ | 미생성 |
| 로고 SVG | ❌ | 텍스트 로고 사용 중 |
| 비디오/GIF | ❌ | placeholder 상태 |
| favicon | ❌ | 기본 |

---

## 10. 회사 정보

| 항목 | 값 |
|------|---|
| 브랜드명 | 메이크그로스 |
| 법인명 | 모아바인드 |
| 대표 | 이창수 (브랜드명: 노아) |
| 사업자번호 | 399-25-01936 |
| 주소 | 인천광역시 남동구 남동서로236번길, 30 222-J307호 |
| 이메일 | charlee@makegrowth.dev |
| 전화 | 010-4694-7801 |
| 도메인 | makegrowth.dev |

---

## 11. 미구현/대기 항목

| 항목 | 우선순위 | 비고 |
|------|----------|------|
| OG/SNS 공유 이미지 | 높음 | 전 페이지 필요 |
| Terms 페이지 | 중간 | /terms 라우트 미구현 |
| SNS 링크 | 중간 | constants.ts에 빈 값 |
| 비디오 에셋 | 중간 | BrowserMockup 슬롯 대기 |
| 웨비나 실제 일정 | 낮음 | 웨비나 0회 (창업 초기) |
| 결제 연동 | 낮음 | 웨비나 결제 시스템 |
| GA4 | 낮음 | 배포 후 설정 |

---

## 부록 A: 카피라이팅 톤앤매너

### 쓰는 말
- "외주비 절감" → 구체적 수치 ("월 100만원 → 80%+ 절감")
- "자동화" → "시스템이 대신합니다"
- "AI 도입" → "AI를 내 체질로 만드는"
- "교육" → "직접 하실 수 있을 때까지"

### 안 쓰는 말
- ❌ "0원" (AI도 비용 존재)
- ❌ "혁신적 솔루션" (추상적)
- ❌ "원스톱 서비스" (식상)
- ❌ "ChatGPT" (범용 도구명 노출 금지)
- ❌ "SaaS" (타겟 비개발자)
- ❌ "깔아주는" (시혜적 어감)
- ❌ "무료 상담" (전문성 저하)

### 톤
- WHY 중심 설득 구조 (기능 나열 X, 공감 스토리텔링 O)
- 페인포인트 → 공감 → 솔루션 → 증거 흐름
- 공감형 + 현실적 + 직접적 + 정직한

---

## 부록 B: 사업계획서 일관성 체크

| 항목 | 사업계획서 기준 | 웹사이트 적용 |
|------|----------------|---------------|
| 핵심 프레이밍 | "할 줄 모르는 일 = 비용" | 메인 카피 동일 |
| 3단계 프로세스 | 진단 → 구축 → 교육 | HowItWorks 동일 |
| 킬러 모듈 1순위 | SNS 콘텐츠 자동화 (운영 중) | BotDemo 동일 |
| 킬러 모듈 2순위 | AI Image Studio (설계 완료) | 서비스 "준비 중" 뱃지 |
| 폐업 통계 | 100만 8,282명 (2024, 국세청) | PainCost 동일 |
| 비용 절감 표현 | "0원" 금지, "80%+ 절감" | 동일 |
| 타겟 범위 | 사업계획서: "1인 셀러" | 웹사이트: "이커머스 사업자" (확장) |
| 가격 | 월 49,000원 / 14일 무료 | HomePricing 동일 |
