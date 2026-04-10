# MakeGrowth Web Project

## Project Overview
MakeGrowth (메이크그로스) - 이커머스 셀러를 위한 AI 비서 봇 서비스.
리드마그넷(셀러 루틴 분석기) → 결제(토스페이먼츠) 퍼널 운영.

## Tech Stack
- Next.js 16 (App Router, React 19)
- Tailwind CSS v4 (@theme inline, @utility)
- framer-motion 12.x (animations)
- @iconify/react + @iconify-json/solar + @iconify-json/simple-icons
- @tosspayments/tosspayments-sdk (빌링 결제)
- Outfit (display font) + Pretendard Variable (Korean body)

## Analytics
- GA4: G-QPZ9MYY2Z6
- Clarity: w96h0ewwdu

## Design System
- 디자인 기준: joshua.site (영구 레퍼런스)
- 디자인 토큰: `DESIGN.md` (Pure Monochrome)
- 웹사이트 스펙: `WEBSITE_SPEC.md`
- Supanova 리디자인 스펙: `docs/superpowers/specs/`

## Design Direction
- 순수 모노크롬 (#1A1A1A / #666 / #999 / #E0E0E0 / #FFFFFF)
- 악센트: #059669 (그린, 성공/CTA), #CC0000 (레드, 경고/손실)
- 딥 네이비: #0F172A (히어로/다크 블록)
- 보라색 완전 금지
- 그림자: navy-tinted rgba(15,23,42,x) 사용
- Supanova easing: cubic-bezier(0.16, 1, 0.3, 1)

## Homepage Flow (11섹션)
Hero → VideoIntro → TargetSellers → PainCost → BotDemo → HowItWorks → WhyUs → TrustLogos → DiagnosisTool → HomePricing → FAQ

## Funnel Structure
- Primary CTA → /diagnosis (리드마그넷)
- 결제 CTA → /payment (토스페이먼츠 빌링)
- 문의 CTA → /contact (맞춤 커스텀만)
- 웨비나 → /seminar (네비에서만 접근)

## Copywriting Philosophy
- WHY 중심 설득 구조 (기능 나열 X, 공감 스토리텔링 O)
- 페인포인트 → 공감 → 솔루션 → 증거 흐름
- 손실 프레이밍 > 절감 프레이밍
- 통화: "만원" (₩ 기호 사용 금지)
- 금지어: 깔아주는, 무료 상담, ChatGPT, SaaS, 0원, 혁신적

## Conventions
- 한국어 퍼스트 타이포그래피 (`word-break: keep-all`)
- Iconify Solar 아이콘 (Lucide 금지), 브랜드 로고는 simple-icons
- 모션: Supanova 퀄리티, 비주얼: joshua 미니멀
- 모달 CTA: DiagnosisTool 결과 2초 후 자동 팝업
