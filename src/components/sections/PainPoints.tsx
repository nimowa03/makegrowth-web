"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { painPointStats } from "@/data/painPoints";
import {
  fadeInUp,
  clipReveal,
  staggerContainer,
  barGrow,
} from "@/lib/motionVariants";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

const costBars = [
  { label: "상세페이지 외주", cost: "30만원/건", width: "30%" },
  { label: "SNS 대행", cost: "월 100~200만원", width: "85%" },
  { label: "상품 촬영", cost: "시간당 25만원", width: "25%" },
  { label: "CS 인력", cost: "월 150~200만원", width: "80%" },
];

export function PainPoints() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-bg" animate={false}>
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Header — left aligned */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <h2 className="text-[#1A1A1A] text-left mb-4">
            못하는 일이 많을수록, 나가는 돈이 늘어납니다
          </h2>
          <p className="text-[#666] text-base md:text-lg leading-relaxed max-w-2xl">
            할 줄 모르는 일이 하나 늘 때마다, 고정비가 하나씩 추가됩니다.
          </p>
        </motion.div>

        {/* Cost bars — animated */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4 mb-16"
        >
          {costBars.map((bar) => (
            <motion.div
              key={bar.label}
              variants={fadeInUp}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-[#666] w-28 md:w-36 shrink-0 text-right font-medium">
                {bar.label}
              </span>
              <div className="flex-1 h-10 bg-[#F0F0F0] rounded-lg overflow-hidden relative">
                <motion.div
                  variants={barGrow(bar.width)}
                  className="h-full bg-[#1A1A1A] rounded-lg flex items-center justify-end pr-3"
                >
                  <span className="text-white text-xs font-mono font-bold">
                    {bar.cost}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stat cards — stagger grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {painPointStats.map((stat) => (
            <motion.div
              key={stat.number}
              variants={fadeInUp}
              className="border border-[#E0E0E0] rounded-2xl p-6 text-center"
            >
              <p className="text-[28px] md:text-[32px] font-black text-[#1A1A1A] mb-2 tabular-nums">
                {stat.number}
              </p>
              <p className="text-sm text-[#666] leading-snug mb-3">
                {stat.label}
              </p>
              <p className="text-xs text-[#999]">출처: {stat.source}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pivot — dark block */}
        <motion.div
          variants={clipReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#1A1A1A] rounded-2xl px-8 py-10 md:px-12 md:py-14 text-center"
        >
          <p className="text-white font-bold text-xl md:text-2xl leading-relaxed">
            이 비용을 줄이는 방법은 하나입니다.
            <br />
            <span className="text-[#999]">
              외주로 나가는 일을 AI로 자동화하고, 직접 할 수 있게 되는 것.
            </span>
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
