"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TextReveal } from "@/components/ui/TextReveal";
import { Button } from "@/components/ui/Button";
import {
  fadeInUp,
  staggerContainer,
  staggerSlow,
  barGrow,
  scaleUp,
  fadeSwitch,
} from "@/lib/motionVariants";

const costBars = [
  { label: "SNS 대행", cost: "월 100~200만원", width: "85%" },
  { label: "CS 인력", cost: "월 80~150만원", width: "70%" },
  { label: "상세페이지 외주", cost: "건당 30만원", width: "30%" },
  { label: "상품 촬영", cost: "시간당 25만원", width: "25%" },
];

const sellerQuotes = [
  "상세페이지 AI 서비스 써봤는데, 우리 쇼핑몰 톤이랑 안 맞더라구요",
  "밤새 키워드 리서치했는데, 결국 뭘 등록해야 할지 모르겠어요",
  "카톡방 돌며 유통처 찾느라 하루가 또 갔어요",
];

const cycleNodes = [
  { label: "못하는 일", icon: "solar:question-circle-linear" },
  { label: "외주 맡김", icon: "solar:hand-money-linear" },
  { label: "비용 증가", icon: "solar:graph-up-linear" },
  { label: "마진 잠식", icon: "solar:chart-square-linear" },
  { label: "폐업", icon: "solar:danger-triangle-linear", danger: true },
];

export function PainCost() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [activeNode, setActiveNode] = useState(0);
  const [activeTimelineRow, setActiveTimelineRow] = useState(0);
  const [showBreak, setShowBreak] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % sellerQuotes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Infinite cycle highlight
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % cycleNodes.length);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  // Timeline row highlight
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTimelineRow((prev) => (prev + 1) % 7);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setShowBreak(true), 3500);
    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <SectionWrapper theme="warm-bg" animate={false}>
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Bridge */}
        <p className="text-[#666] text-base text-center mb-4">
          매달 나가는 비용, 정확히 얼마인지 아세요?
        </p>

        {/* Header */}
        <div className="mb-8">
          <TextReveal
            text="할 줄 모르는 일이 하나 늘 때마다, 고정비가 하나씩 추가됩니다"
            tag="h2"
            className="text-[#1A1A1A] text-[28px] md:text-[40px] lg:text-[52px] font-black leading-tight tracking-tight text-left mb-4"
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#444] text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            1인 셀러에게 &ldquo;못하는 일&rdquo;은 곧 &ldquo;나가는
            돈&rdquo;입니다.
          </motion.p>
        </div>

        {/* ── 셀러의 하루 타임라인 — 다크 카드 + 순차 하이라이트 ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#1A1A1A] rounded-2xl px-5 py-6 md:px-8 md:py-8 mb-8"
        >
          <p className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-medium text-center mb-6">
            어느 1인 셀러의 하루
          </p>
          <div className="space-y-1.5">
            {[
              { time: "06:00", task: "기상, 판매자센터 매출 확인", ai: "자동 리포트" },
              { time: "08:00", task: "어제 CS 문의 3건 처리", ai: "1차 자동 응답" },
              { time: "10:00", task: "상세페이지 외주 수정 요청 (3번째)", ai: "직접 생성" },
              { time: "13:00", task: "SNS 콘텐츠 고민 → 결국 포기", ai: "자동 발행" },
              { time: "15:00", task: "경쟁사 가격 수동 체크", ai: "자동 모니터링" },
              { time: "19:00", task: "재고 확인, 발주", ai: "자동 알림" },
              { time: "21:00", task: "내일도 똑같은 하루...", ai: "24시간 대신 일함" },
            ].map((row, i) => {
              const isActive = activeTimelineRow === i;
              return (
                <div
                  key={row.time}
                  className={`flex items-center gap-3 md:gap-4 rounded-lg px-4 py-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "bg-white/10 ring-1 ring-white/20"
                      : "bg-transparent"
                  }`}
                >
                  <span className={`text-xs font-mono font-bold w-12 shrink-0 transition-colors duration-700 ${
                    isActive ? "text-white" : "text-white/30"
                  }`}>
                    {row.time}
                  </span>
                  <span
                    className={`flex-1 text-sm md:text-base transition-colors duration-700 ${
                      isActive ? "text-white" : "text-white/50"
                    }`}
                    style={{ wordBreak: "keep-all" }}
                  >
                    {row.task}
                  </span>
                  <span className={`text-sm font-bold shrink-0 transition-all duration-700 ${
                    isActive ? "text-[#059669] opacity-100" : "text-white/20 opacity-60"
                  }`}>
                    → {row.ai}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-center text-white font-bold text-base md:text-lg mt-6">
            이 중 <span className="text-[#059669]">6개</span>, AI 직원이 대신합니다.
          </p>
        </motion.div>

        {/* ── A. Seller quote rotation ── */}
        <div className="h-16 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              variants={fadeSwitch}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[#666] italic text-center text-lg md:text-xl font-medium"
              style={{ wordBreak: "keep-all" }}
            >
              &ldquo;{sellerQuotes[quoteIndex]}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ── B. Cost bars ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4 mb-10"
        >
          {costBars.map((bar) => (
            <motion.div
              key={bar.label}
              variants={fadeInUp}
              className="flex items-center gap-4 md:gap-6"
            >
              <span className="text-sm md:text-base text-[#1A1A1A] w-28 md:w-40 shrink-0 text-right font-semibold">
                {bar.label}
              </span>
              <div className="flex-1 h-12 md:h-14 bg-[#F0F0F0] rounded-xl overflow-hidden relative">
                <motion.div
                  variants={barGrow(bar.width)}
                  className="h-full bg-[#1A1A1A] rounded-xl flex items-center justify-end pr-4"
                >
                  <span className="text-white text-sm md:text-base font-mono font-bold">
                    {bar.cost}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── C. Vicious cycle — infinite highlight ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#1A1A1A] rounded-2xl px-6 py-8 md:px-10 md:py-10 mb-8"
        >
          <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium text-center mb-6">
            1인 셀러의 악순환 구조
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2 mb-6">
            {cycleNodes.map((node, i) => {
              const isActive = activeNode === i;
              const isDanger = !!node.danger;
              return (
                <div
                  key={node.label}
                  className="flex flex-col md:flex-row items-center gap-3 md:gap-2"
                >
                  <div
                    className={`flex flex-col items-center gap-2 rounded-xl px-5 py-4 min-w-[80px] md:min-w-[100px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isDanger
                        ? isActive
                          ? "bg-[#CC0000]/30 ring-2 ring-[#CC0000]/50 scale-105"
                          : "bg-[#CC0000]/15 border border-[#CC0000]/30"
                        : isActive
                          ? "bg-white/20 ring-2 ring-white/30 scale-105"
                          : "bg-white/[0.07] border border-white/10"
                    }`}
                  >
                    <Icon
                      icon={node.icon}
                      width={22}
                      className={`transition-colors duration-500 ${
                        isDanger
                          ? "text-[#CC0000]"
                          : isActive
                            ? "text-white"
                            : "text-white/50"
                      }`}
                    />
                    <span
                      className={`text-sm font-bold whitespace-nowrap transition-colors duration-500 ${
                        isDanger
                          ? "text-[#CC0000]"
                          : isActive
                            ? "text-white"
                            : "text-white/70"
                      }`}
                    >
                      {node.label}
                    </span>
                  </div>
                  {i < cycleNodes.length - 1 && (
                    <>
                      <Icon
                        icon="solar:arrow-right-linear"
                        width={18}
                        className={`hidden md:block transition-colors duration-500 ${
                          activeNode === i ? "text-white/60" : "text-white/20"
                        }`}
                      />
                      <Icon
                        icon="solar:arrow-down-linear"
                        width={18}
                        className={`md:hidden transition-colors duration-500 ${
                          activeNode === i ? "text-white/60" : "text-white/20"
                        }`}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Loop arrow */}
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-2 text-white/20">
              <div className="h-px w-12 bg-white/20" />
              <Icon icon="solar:refresh-circle-linear" width={22} className="animate-spin" style={{ animationDuration: "6s" }} />
              <div className="h-px w-12 bg-white/20" />
            </div>
          </div>

          {/* Break */}
          <AnimatePresence>
            {showBreak && (
              <motion.div
                variants={scaleUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-3">
                  <Icon icon="solar:close-circle-bold" width={28} className="text-[#1A1A1A]" />
                </div>
                <p className="text-white font-bold text-lg md:text-xl">
                  이 악순환, 끊을 수 있습니다
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── D. Solution bridge ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#F8F8F8] border border-[#E0E0E0] rounded-2xl px-8 py-8 md:px-12 md:py-10 text-center"
        >
          <p className="text-[#1A1A1A] text-2xl md:text-3xl font-black mb-3">
            이 비용, AI 비서 하나면 90% 이상 줄일 수 있습니다
          </p>
          <p
            className="text-[#444] text-base md:text-lg mb-5"
            style={{ wordBreak: "keep-all" }}
          >
            문제는 AI가 없는 게 아닙니다.
            <strong className="text-[#1A1A1A]"> AI를 내 체질로 만들지 못하는 겁니다.</strong>
          </p>
          <p
            className="text-[#666] text-sm mb-5"
            style={{ wordBreak: "keep-all" }}
          >
            그렇다면 지금 내 사업에서 얼마가 새고 있을까요?
          </p>
          <Button href="#diagnosis" size="lg" showArrow>
            내 외주비 진단해보기
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
