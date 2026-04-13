"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import { freeTrial } from "@/data/services";

/* ── Before/After 데이터 ── */
const beforeAfterRows = [
  { label: "매출 확인", before: "판매자센터 3개 로그인", after: "\"오늘 매출\" 한 줄" },
  { label: "경쟁사 모니터링", before: "매일 수동 체크 30분", after: "자동 알림 (0분)" },
  { label: "일일 리포트", before: "엑셀 정리 1시간", after: "매일 아침 자동 발송" },
  { label: "CS 응대", before: "알바 월 80~150만원", after: "1차 자동 응답" },
  { label: "SNS 콘텐츠", before: "대행 월 100~200만원", after: "봇에게 \"만들어줘\"" },
  { label: "재고 관리", before: "수동 확인, 놓치면 품절", after: "자동 알림 + 발주 제안" },
];

/* ── AI 직원 포함 기능 ── */
const includedFeatures = [
  { icon: "solar:chart-square-linear", name: "매출 조회", desc: "메신저에서 한 줄이면 채널별 매출 즉시 확인" },
  { icon: "solar:eye-linear", name: "경쟁사 모니터링", desc: "가격 변동 감지 시 자동 알림" },
  { icon: "solar:document-text-linear", name: "일일 리포트", desc: "매일 아침 자동 발송. 눈 뜨면 와 있음" },
  { icon: "solar:chat-round-dots-linear", name: "CS 1차 자동 응답", desc: "반복 문의는 AI가 먼저 처리" },
  { icon: "solar:gallery-linear", name: "SNS 콘텐츠 생성", desc: "기획부터 발행까지" },
  { icon: "solar:box-linear", name: "재고 부족 알림", desc: "품절 전 자동 감지" },
];

/* ── 맞춤 커스텀 포함 기능 ── */
const customFeatures = [
  { icon: "solar:stethoscope-linear", name: "1:1 업무 진단", desc: "카테고리·채널·판매방식 분석" },
  { icon: "solar:settings-linear", name: "맞춤 봇 세팅", desc: "API 연동, 추가 모듈 구축" },
  { icon: "solar:users-group-rounded-linear", name: "온보딩 지원", desc: "2~4주 밀착 세팅" },
  { icon: "solar:graduation-cap-linear", name: "운영 가이드", desc: "직접 조정할 수 있도록" },
];

export function HomePricing() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [isAnnual, setIsAnnual] = useState(false);

  const monthlyPrice = isAnnual ? "39,000" : "49,000";
  const priceSuffix = isAnnual ? "원/월" : "원";
  const savingsBadge = isAnnual ? "연 120,000원 절약" : null;

  return (
    <SectionWrapper id="pricing" theme="warm-surface" animate={false}>
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* ══════ 블록 1: 비교 앵커 ══════ */}
        <p className="text-[#666] text-base text-center mb-4">
          지금 이 비용, 매달 나가고 있지 않나요?
        </p>
        <div className="text-center mb-10">
          <TextReveal
            text="AI 직원, 이렇게 고용합니다"
            tag="h2"
            className="text-[#1A1A1A] text-[28px] md:text-[40px] lg:text-[48px] font-black leading-tight tracking-tight mb-4"
          />
        </div>

        {/* Before/After — 데스크톱: 테이블 / 모바일: 카드 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8"
        >
          {/* 데스크톱 테이블 (md+) */}
          <div className="hidden md:block">
            <motion.div variants={fadeInUp} className="grid grid-cols-[1fr_1fr_1fr] gap-2 mb-3">
              <div className="px-4 py-2">
                <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#666]">항목</span>
              </div>
              <div className="px-4 py-2 bg-[#F5F5F5] rounded-t-lg">
                <span className="text-xs uppercase tracking-[0.15em] font-bold text-[#666]">AI 직원 없이</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-t-lg border border-[#E0E0E0] border-b-0">
                <span className="text-xs uppercase tracking-[0.15em] font-bold text-[#1A1A1A]">AI 직원 도입 후</span>
              </div>
            </motion.div>
            {beforeAfterRows.map((row, i) => (
              <motion.div key={row.label} variants={fadeInUp} className="grid grid-cols-[1fr_1fr_1fr] gap-2 mb-1.5">
                <div className="px-4 py-3.5 flex items-center">
                  <span className="text-base font-semibold text-[#1A1A1A]">{row.label}</span>
                </div>
                <div className={`px-4 py-3.5 bg-[#F5F5F5] flex items-center ${i === beforeAfterRows.length - 1 ? "rounded-b-lg" : ""}`}>
                  <span className="text-base text-[#666]">{row.before}</span>
                </div>
                <div className={`px-4 py-3.5 bg-white border-x border-[#E0E0E0] flex items-center ${i === beforeAfterRows.length - 1 ? "rounded-b-lg border-b" : ""}`}>
                  <span className="text-base text-[#1A1A1A] font-bold">{row.after}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 모바일 카드 (md 미만) */}
          <div className="md:hidden space-y-3">
            {beforeAfterRows.map((row) => (
              <motion.div key={row.label} variants={fadeInUp} className="rounded-xl border border-[#E0E0E0] overflow-hidden">
                <div className="px-4 py-3 bg-[#FAFAFA] border-b border-[#E0E0E0]">
                  <span className="text-sm font-bold text-[#1A1A1A]">{row.label}</span>
                </div>
                <div className="px-4 py-2.5 flex items-center gap-2 border-b border-[#F0F0F0]">
                  <Icon icon="solar:close-circle-bold" width={14} className="text-[#CC0000]/50 shrink-0" />
                  <span className="text-sm text-[#666]">{row.before}</span>
                </div>
                <div className="px-4 py-2.5 flex items-center gap-2">
                  <Icon icon="solar:check-circle-bold" width={14} className="text-[#059669] shrink-0" />
                  <span className="text-sm text-[#1A1A1A] font-semibold">{row.after}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 합산 비교 앵커 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#1A1A1A] text-white rounded-2xl p-6 text-center mb-12"
        >
          <p className="text-white/70 text-sm mb-2">외주+알바로 처리하면</p>
          <p className="text-2xl font-black mb-1">월 350~600만원</p>
          <div className="w-12 h-px bg-white/20 mx-auto my-4" />
          <p className="text-white/70 text-sm mb-2">AI 직원은</p>
          <p className="text-2xl font-black text-[#059669]">월 49,000원</p>
          <p className="text-[#059669] text-sm font-bold mt-2">외주 대비 97% 절감</p>
          <p className="text-white/60 text-xs mt-1">LLM · 서버 · 유지보수 전부 포함</p>
        </motion.div>

        {/* ══════ 블록 2: 가격 카드 2열 ══════ */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10"
        >
          {/* 왼쪽: AI 직원 고용 (highlight) */}
          <motion.div variants={fadeInUp}>
            <div className="border-2 border-[#1A1A1A] rounded-2xl p-5 sm:p-8 relative h-full flex flex-col">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-xs font-bold px-4 py-1 rounded-full">
                추천
              </span>

              <h3 className="text-xl font-black text-[#1A1A1A] mb-3">AI 직원 고용</h3>

              {/* 월/연 토글 */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-sm font-medium transition-colors duration-300 ${!isAnnual ? "text-[#1A1A1A]" : "text-[#999]"}`}>월간</span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative w-12 h-7 rounded-full transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/20 ${isAnnual ? "bg-[#059669]" : "bg-[#E0E0E0]"}`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isAnnual ? "translate-x-5" : "translate-x-0"}`} />
                </button>
                <span className={`text-sm font-medium transition-colors duration-300 ${isAnnual ? "text-[#1A1A1A]" : "text-[#999]"}`}>연간</span>
                {isAnnual && (
                  <span className="text-xs font-bold text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded-full">20% 할인</span>
                )}
              </div>

              <p className="text-3xl md:text-4xl font-black text-[#1A1A1A] tabular-nums mb-1">
                월 {monthlyPrice}{priceSuffix}
              </p>
              {savingsBadge && <p className="text-xs text-[#059669] font-semibold mb-1">{savingsBadge}</p>}
              <p className="text-sm text-[#666] mb-6">14일 무료 체험 후 자동 전환</p>

              <div className="w-full h-px bg-[#E0E0E0] mb-6" />

              <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#666] mb-4">포함되는 것</p>
              <ul className="space-y-4 mb-8 flex-1">
                {includedFeatures.map((f) => (
                  <li key={f.name} className="flex gap-3 items-start">
                    <Icon icon="solar:check-circle-bold" className="text-[#059669] mt-0.5 shrink-0" width={20} />
                    <div>
                      <p className="font-bold text-[#1A1A1A] text-sm">{f.name}</p>
                      <p className="text-[#666] text-xs">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="w-full h-px bg-[#E0E0E0] mb-4" />
              <p className="text-xs text-[#666] text-center mb-5" style={{ wordBreak: "keep-all" }}>
                LLM + 서버 + 유지보수 올인클루시브.
                <br />
                <strong className="text-[#1A1A1A]">추가 비용 없음. 이 가격이 전부입니다.</strong>
              </p>

              <MagneticButton className="w-full">
                <Button href="/diagnosis" size="lg" showArrow className="w-full">
                  내 루틴 진단하고 시작하기
                </Button>
              </MagneticButton>
              <div className="mt-4 flex flex-col items-center gap-1.5">
                <p className="flex items-center gap-1.5 text-xs text-[#059669] font-medium">
                  <Icon icon="solar:shield-check-linear" width={14} className="shrink-0" />
                  30일 환불 보장 · 언제든 해지 가능
                </p>
                <p className="text-[11px] text-[#999]">해지 시 추가 비용 없음</p>
              </div>
            </div>
          </motion.div>

          {/* 오른쪽: 맞춤 커스텀 */}
          <motion.div variants={fadeInUp}>
            <div className="border border-[#E0E0E0] bg-[#F8F8F8] rounded-2xl p-5 sm:p-8 h-full flex flex-col">
              <h3 className="text-xl font-black text-[#1A1A1A] mb-2">맞춤 커스텀</h3>
              <p className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-1">별도 협의</p>
              <p className="text-sm text-[#666] mb-6">내 사업에 딱 맞게 세팅이 필요한 셀러</p>

              <div className="w-full h-px bg-[#E0E0E0] mb-6" />

              <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#666] mb-4">포함되는 것</p>
              <ul className="space-y-4 mb-8 flex-1">
                {customFeatures.map((f) => (
                  <li key={f.name} className="flex gap-3 items-start">
                    <Icon icon="solar:check-circle-bold" className="text-[#1A1A1A] mt-0.5 shrink-0" width={20} />
                    <div>
                      <p className="font-bold text-[#1A1A1A] text-sm">{f.name}</p>
                      <p className="text-[#666] text-xs">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="w-full h-px bg-[#E0E0E0] mb-4" />
              <p className="text-xs text-[#666] text-center mb-5" style={{ wordBreak: "keep-all" }}>
                구독 중 &ldquo;더 깊은 커스텀&rdquo;이 필요할 때.
              </p>

              <Button href="/contact" variant="secondary" className="w-full">
                맞춤 문의
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* ══════ 블록 3: 무료 체험 vs 유료 비교표 ══════ */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#1A1A1A] rounded-2xl px-3 py-5 sm:px-5 sm:py-6 md:px-8 md:py-8"
        >
          <p className="text-white/60 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium text-center mb-6">
            무료 체험에서 뭐가 되나요?
          </p>
          <div className="grid grid-cols-[auto_1fr_1fr] gap-x-2 sm:gap-x-3 gap-y-0.5 text-sm">
            {/* 헤더 */}
            <div className="px-3 py-2" />
            <div className="px-3 py-2 text-center"><span className="text-white/60 text-xs font-bold">무료 (14일)</span></div>
            <div className="px-3 py-2 text-center rounded-t-lg bg-[#059669]/10"><span className="text-[#059669] text-xs font-bold">월 49,000원</span></div>
            {/* 행 */}
            {freeTrial.features.map((f, i) => (
              <div key={f.label} className="contents">
                <div className="px-3 py-3 flex items-center gap-2">
                  <span className="text-white/70 text-sm">{f.label}</span>
                </div>
                <div className="px-3 py-3 text-center text-white/70 text-sm">{f.free}</div>
                <div className={`px-3 py-3 text-center text-white font-semibold text-sm bg-[#059669]/5 ${i === freeTrial.features.length - 1 ? "rounded-b-lg" : ""}`}>
                  {f.paid}
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/70 text-sm text-center mt-6" style={{ wordBreak: "keep-all" }}>
            무료 체험에서도 모든 기능을 사용할 수 있습니다.
            <br />
            충분히 써보고 결정하세요.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
