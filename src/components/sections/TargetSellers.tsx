"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

const personas = [
  {
    emoji: "⏰",
    accentColor: "#FF6B35",
    accentBg: "rgba(255,107,53,0.08)",
    icon: "solar:clock-circle-bold",
    iconColor: "#FF6B35",
    type: "시간 부족 셀러",
    quote: "소싱하기도 바쁜데 SNS, 상세페이지, CS까지 직접 할 시간이 없어요.",
    pain: "하루 12시간 일해도 끝이 안 보임",
    solution: "봇이 반복 업무를 처리하는 동안, 셀러는 소싱과 전략에 집중",
  },
  {
    emoji: "💸",
    accentColor: "#E53E3E",
    accentBg: "rgba(229,62,62,0.08)",
    icon: "solar:hand-money-bold",
    iconColor: "#E53E3E",
    type: "외주비 부담 셀러",
    quote: "대행사에 매달 200만원 넘게 나가는데, 끊으면 모든 게 멈춰요.",
    pain: "외주비가 매출의 15~20%를 차지",
    solution: "월 4.9만원으로 외주 의존 구조 자체를 전환",
  },
  {
    emoji: "🤖",
    accentColor: "#805AD5",
    accentBg: "rgba(128,90,213,0.08)",
    icon: "solar:restart-circle-bold",
    iconColor: "#805AD5",
    type: "AI 시도했지만 포기한 셀러",
    quote: "AI 도구 써봤는데 내 카테고리랑 안 맞아서 결국 직접 다시 했어요.",
    pain: "범용 AI는 내 업무 흐름과 안 맞음",
    solution: "내 카테고리·내 플랫폼에 맞게 커스텀된 봇",
  },
  {
    emoji: "📈",
    accentColor: "#059669",
    accentBg: "rgba(5,150,105,0.08)",
    icon: "solar:graph-up-bold",
    iconColor: "#059669",
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
          className="text-center mb-12"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {personas.map((p) => (
            <motion.div
              key={p.type}
              variants={fadeInUp}
              className="group relative rounded-2xl border border-[#E0E0E0] bg-white overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ backgroundColor: p.accentColor, opacity: 0.6 }} />

              <div className="p-6 md:p-8">
                {/* Header: big icon + type */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    style={{ backgroundColor: p.accentBg }}
                  >
                    <Icon icon={p.icon} width={28} style={{ color: p.iconColor }} />
                  </div>
                  <div>
                    <span className="text-base font-bold text-[#1A1A1A]">{p.type}</span>
                  </div>
                </div>

                {/* Quote */}
                <p
                  className="text-[#444] text-[15px] md:text-base leading-relaxed mb-5 font-medium"
                  style={{ wordBreak: "keep-all" }}
                >
                  &ldquo;{p.quote}&rdquo;
                </p>

                {/* Pain → Solution */}
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="flex items-start gap-2.5 rounded-lg bg-[#FFF5F5] px-3 py-2.5">
                    <Icon icon="solar:close-circle-bold" width={18} className="text-[#CC0000] mt-0.5 shrink-0" />
                    <span className="text-[#666]" style={{ wordBreak: "keep-all" }}>{p.pain}</span>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-lg bg-[#F0FFF4] px-3 py-2.5">
                    <Icon icon="solar:check-circle-bold" width={18} className="text-[#059669] mt-0.5 shrink-0" />
                    <span className="text-[#1A1A1A] font-semibold" style={{ wordBreak: "keep-all" }}>{p.solution}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
