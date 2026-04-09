"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

const personas = [
  {
    icon: "solar:clock-circle-linear",
    type: "시간 부족 셀러",
    quote: "소싱하기도 바쁜데 SNS, 상세페이지, CS까지 직접 할 시간이 없어요.",
    pain: "하루 12시간 일해도 끝이 안 보임",
    solution: "봇이 반복 업무를 처리하는 동안, 셀러는 소싱과 전략에 집중",
  },
  {
    icon: "solar:hand-money-linear",
    type: "외주비 부담 셀러",
    quote: "대행사에 매달 200만원 넘게 나가는데, 끊으면 모든 게 멈춰요.",
    pain: "외주비가 매출의 15~20%를 차지",
    solution: "월 4.9만원으로 외주 의존 구조 자체를 전환",
  },
  {
    icon: "solar:question-circle-linear",
    type: "AI 시도했지만 포기한 셀러",
    quote: "AI 도구 써봤는데 내 카테고리랑 안 맞아서 결국 직접 다시 했어요.",
    pain: "범용 AI는 내 업무 흐름과 안 맞음",
    solution: "내 카테고리·내 플랫폼에 맞게 커스텀된 봇",
  },
  {
    icon: "solar:scale-linear",
    type: "성장기 셀러",
    quote: "매출은 느는데 혼자서 감당이 안 돼요. 사람 뽑긴 부담되고.",
    pain: "1인 운영의 한계, 그러나 고용 리스크",
    solution: "사람 대신 AI 직원으로 스케일업",
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
          className="text-center mb-10"
        >
          <span className="inline-block rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] mb-4">
            이런 셀러를 위해 만들었습니다
          </span>
          <h2
            className="font-display font-black text-[28px] md:text-[40px] text-[#1A1A1A] leading-tight tracking-tight"
            style={{ wordBreak: "keep-all", textWrap: "balance" }}
          >
            혹시 이 중에 나와 같은 상황이 있나요?
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {personas.map((p, i) => (
            <motion.div
              key={p.type}
              variants={fadeInUp}
              className="group rounded-2xl border border-[#E0E0E0] bg-white p-6 md:p-8 hover:border-[#CCCCCC] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F8F8F8] flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <Icon icon={p.icon} width={20} className="text-[#1A1A1A] group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">{p.type}</span>
              </div>

              {/* Quote */}
              <p
                className="text-[#444] text-base leading-relaxed mb-4 font-medium"
                style={{ wordBreak: "keep-all" }}
              >
                &ldquo;{p.quote}&rdquo;
              </p>

              {/* Pain → Solution */}
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-start gap-2">
                  <Icon icon="solar:close-circle-linear" width={16} className="text-[#CC0000] mt-0.5 shrink-0" />
                  <span className="text-[#999]">{p.pain}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon icon="solar:check-circle-linear" width={16} className="text-[#059669] mt-0.5 shrink-0" />
                  <span className="text-[#1A1A1A] font-medium">{p.solution}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
