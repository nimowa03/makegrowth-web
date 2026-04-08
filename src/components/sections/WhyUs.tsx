"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TextReveal } from "@/components/ui/TextReveal";
import {
  fadeInUp,
  staggerContainer,
  staggerSlow,
} from "@/lib/motionVariants";

/* ── 의존성 3단계 ── */

const dependencyLevels = [
  {
    level: 0,
    label: "외주에 의존",
    result: "끊기면 멈춤",
    symbol: "✕",
    symbolColor: "text-[#CC0000]",
    bg: "bg-[#F0F0F0]",
    text: "text-[#999]",
  },
  {
    level: 1,
    label: "구독 서비스에 의존",
    result: "끊으면 끝",
    symbol: "△",
    symbolColor: "text-[#999]",
    bg: "bg-[#F5F5F5]",
    text: "text-[#999]",
  },
  {
    level: 2,
    label: "내 시스템 · 내 역량",
    result: "의존 없음",
    symbol: "✓",
    symbolColor: "text-[#059669]",
    bg: "bg-white",
    text: "text-[#1A1A1A]",
    highlight: true,
  },
];

/* ── 4컬럼 비교표 ── */

const competitors = [
  {
    name: "AI 교육",
    approach: "프롬프트 교육",
    after: "듣고 끝",
    dependency: "도구에 의존",
  },
  {
    name: "구독형 서비스",
    approach: "개별 기능",
    after: "끊으면 멈춤",
    dependency: "플랫폼에 의존",
  },
  {
    name: "대행사",
    approach: "결과물 납품",
    after: "떠나면 끝",
    dependency: "사람에 의존",
  },
  {
    name: "타 AI 서비스",
    approach: "범용 도구 제공",
    after: "세팅은 직접",
    dependency: "기술력에 의존",
  },
  {
    name: "메이크그로스",
    approach: "시스템 + 역량",
    after: "끊겨도 남음",
    dependency: "의존 없음 ✓",
    highlight: true,
  },
];

export function WhyUs() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeComp, setActiveComp] = useState(competitors.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveComp((prev) => (prev + 1) % competitors.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper theme="warm-surface" id="why-us" animate={false}>
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Bridge */}
        <p className="text-[#666] text-base text-center mb-4">
          다른 방법도 있지 않나요?
        </p>

        {/* Header */}
        <div className="text-center mb-10">
          <TextReveal
            text="봇을 구축해주는 곳은 많습니다"
            tag="h2"
            className="text-[#1A1A1A] text-[28px] md:text-[40px] lg:text-[48px] font-black leading-tight tracking-tight mb-4"
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#666] text-lg md:text-xl"
            style={{ wordBreak: "keep-all" }}
          >
            셀러의 업무를 이해하고 맞춤 세팅하는 곳은 메이크그로스뿐입니다
          </motion.p>
        </div>

        {/* ── Part 1: 의존성 3단계 ── */}
        <motion.div
          variants={staggerSlow}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto space-y-3 mb-20"
        >
          {dependencyLevels.map((lvl) => (
            <motion.div
              key={lvl.level}
              variants={fadeInUp}
              className={`flex items-center gap-4 rounded-xl px-5 py-4 ${lvl.bg} ${lvl.text} ${
                lvl.highlight
                  ? "border-2 border-[#1A1A1A] font-bold scale-[1.02]"
                  : "border border-transparent"
              } transition-all duration-500`}
            >
              <span className="text-[11px] uppercase tracking-wider text-[#999] w-16 shrink-0 font-mono">
                Level {lvl.level}
              </span>
              <span className="flex-1 text-sm md:text-base">
                {lvl.label}
                <span className="text-[#999] mx-2">→</span>
                {lvl.result}
              </span>
              <span className={`text-lg font-bold ${lvl.symbolColor}`}>
                {lvl.symbol}
              </span>
              {lvl.highlight && (
                <span className="hidden md:inline-block rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] font-medium border border-[#1A1A1A] text-[#1A1A1A] bg-transparent ml-1">
                  메이크그로스 이후
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Part 2: 5컬럼 비교표 ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3"
        >
          {competitors.map((comp, idx) => {
            const isHighlighted = activeComp === idx;
            return (
            <motion.div
              key={comp.name}
              variants={fadeInUp}
              className={`rounded-xl p-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                comp.highlight
                  ? "bg-[#1A1A1A] text-white"
                  : isHighlighted
                    ? "bg-[#F0F0F0] ring-2 ring-[#1A1A1A]/20 scale-[1.02]"
                    : "bg-[#F5F5F5] text-[#666]"
              }`}
            >
              <h3
                className={`font-bold text-base mb-4 ${
                  comp.highlight ? "text-white" : "text-[#666]"
                }`}
              >
                {comp.name}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Icon
                    icon={comp.highlight ? "solar:check-circle-bold" : "solar:close-circle-linear"}
                    width={16}
                    className={`mt-0.5 shrink-0 ${
                      comp.highlight ? "text-[#059669]" : "text-[#CC0000]/40"
                    }`}
                  />
                  <span className={comp.highlight ? "text-white/90" : ""}>
                    {comp.approach}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon
                    icon={comp.highlight ? "solar:check-circle-bold" : "solar:close-circle-linear"}
                    width={16}
                    className={`mt-0.5 shrink-0 ${
                      comp.highlight ? "text-[#059669]" : "text-[#CC0000]/40"
                    }`}
                  />
                  <span className={comp.highlight ? "text-white/90" : ""}>
                    {comp.after}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon
                    icon={comp.highlight ? "solar:check-circle-bold" : "solar:close-circle-linear"}
                    width={16}
                    className={`mt-0.5 shrink-0 ${
                      comp.highlight ? "text-[#059669]" : "text-[#CC0000]/40"
                    }`}
                  />
                  <span
                    className={
                      comp.highlight ? "text-white font-semibold" : ""
                    }
                  >
                    {comp.dependency}
                  </span>
                </li>
              </ul>
            </motion.div>
          );
          })}
        </motion.div>

        {/* ── Part 3: VPS 비교 강조 블록 ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 rounded-2xl border border-[#E0E0E0] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#F5F5F5] px-6 py-6 md:px-8 md:py-8">
              <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#666] mb-3">
                타 AI 서비스
              </p>
              <p className="text-[#666] text-base leading-relaxed" style={{ wordBreak: "keep-all" }}>
                범용 AI 도구를 제공합니다. 이커머스 세팅은 직접 해야 하고,
                셀러 업무를 이해하지 못하는 빈 봇이 남습니다.
              </p>
              <p className="text-[#666] text-sm mt-3 font-medium">빈 땅 + 골조</p>
            </div>
            <div className="bg-[#1A1A1A] px-6 py-6 md:px-8 md:py-8 text-white">
              <p className="text-xs uppercase tracking-[0.15em] font-bold text-white/50 mb-3">
                메이크그로스
              </p>
              <p className="text-white/80 text-base leading-relaxed" style={{ wordBreak: "keep-all" }}>
                매출 조회, 리포트, 알림이 세팅된 봇을 바로 받습니다.
                메신저에서 &ldquo;오늘 매출&rdquo; 한마디면 끝.
              </p>
              <p className="text-white font-bold text-sm mt-3">가구 배치 끝난 사무실 + 직원</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
