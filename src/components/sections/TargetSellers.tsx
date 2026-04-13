"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

const personas = [
  {
    icon: "solar:clock-circle-bold",
    type: "시간 부족 셀러",
    quote: "SNS, 상세페이지, CS까지\n직접 할 시간이 없어요",
    before: "하루 12시간, 끝이 안 보임",
    after: "봇이 반복 업무를 대신 처리",
    featured: true,
  },
  {
    icon: "solar:hand-money-bold",
    type: "외주비 부담",
    quote: "대행사비 매달 200만원,\n끊으면 모든 게 멈춰요",
    before: "외주비 = 매출의 15~20%",
    after: "월 4.9만원으로 구조 전환",
  },
  {
    icon: "solar:restart-circle-bold",
    type: "AI 포기 경험",
    quote: "AI 써봤는데\n내 업무랑 안 맞았어요",
    before: "범용 AI = 내 카테고리 불일치",
    after: "내 플랫폼 맞춤 봇",
  },
  {
    icon: "solar:graph-up-bold",
    type: "성장기 셀러",
    quote: "혼자선 감당 불가,\n사람 뽑긴 부담돼요",
    before: "1인 한계 vs 고용 리스크",
    after: "AI 직원으로 스케일업",
  },
];

export function TargetSellers() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-surface">
      <div ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] mb-4">
            이런 셀러를 위해 만들었습니다
          </span>
          <h2
            className="font-display font-black text-[22px] sm:text-[28px] md:text-[40px] lg:text-[44px] text-[#1A1A1A] leading-tight tracking-tight"
            style={{ wordBreak: "keep-all", textWrap: "balance" }}
          >
            혹시 이 중에 나와 같은 상황이 있나요?
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {/* Featured card — full width */}
          {personas.filter((p) => p.featured).map((p) => (
            <motion.div
              key={p.type}
              variants={fadeInUp}
              className="group rounded-2xl bg-[#1A1A1A] p-4 sm:p-6 md:p-10 lg:p-12 relative overflow-hidden cursor-default"
            >
              {/* Ambient */}
              <div
                className="absolute top-[-20%] right-[-10%] w-[400px] max-w-[80vw] h-[400px] max-h-[80vw] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
              />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
                {/* Icon */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/[0.08] ring-1 ring-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/[0.12] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <Icon icon={p.icon} width={48} className="text-white/70" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-[0.15em] font-medium text-white/40 mb-3 block">{p.type}</span>
                  <p
                    className="font-display font-black text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] text-white leading-snug tracking-tight mb-4 sm:mb-6 whitespace-pre-line"
                    style={{ wordBreak: "keep-all" }}
                  >
                    &ldquo;{p.quote}&rdquo;
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 text-sm">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] ring-1 ring-white/10 px-4 py-2 text-white/50">
                      <Icon icon="solar:close-circle-bold" width={16} className="text-[#CC0000]/70" />
                      {p.before}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] ring-1 ring-white/10 px-4 py-2 text-white/80 font-semibold">
                      <Icon icon="solar:check-circle-bold" width={16} className="text-[#059669]" />
                      {p.after}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* 3-column compact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {personas.filter((p) => !p.featured).map((p) => (
              <motion.div
                key={p.type}
                variants={fadeInUp}
                className="group rounded-2xl border border-[#E0E0E0] bg-white p-5 sm:p-6 md:p-8 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:border-[#CCCCCC] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#F0F0F0] flex items-center justify-center mb-5 group-hover:bg-[#1A1A1A] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <Icon icon={p.icon} width={28} className="text-[#1A1A1A] group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Type */}
                <span className="text-xs uppercase tracking-[0.15em] font-medium text-[#999] mb-3 block">{p.type}</span>

                {/* Quote */}
                <p
                  className="font-bold text-[#1A1A1A] text-base md:text-lg leading-snug mb-5 whitespace-pre-line"
                  style={{ wordBreak: "keep-all" }}
                >
                  &ldquo;{p.quote}&rdquo;
                </p>

                {/* Before → After */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#999]">
                    <Icon icon="solar:close-circle-bold" width={14} className="text-[#CC0000]/60 shrink-0" />
                    <span>{p.before}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#1A1A1A] font-semibold">
                    <Icon icon="solar:check-circle-bold" width={14} className="text-[#059669] shrink-0" />
                    <span>{p.after}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
