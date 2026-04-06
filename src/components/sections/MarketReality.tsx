"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TextReveal } from "@/components/ui/TextReveal";
import {
  fadeInUp,
  staggerContainer,
  barGrow,
} from "@/lib/motionVariants";

const costBars = [
  { label: "상세페이지 외주", cost: "30만원/건", width: "30%" },
  { label: "SNS 대행", cost: "월 100~200만원", width: "85%" },
  { label: "상품 촬영", cost: "시간당 25만원", width: "25%" },
  { label: "CS 인력", cost: "월 80~150만원", width: "70%" },
];

export function MarketReality() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-bg" animate={false}>
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <TextReveal
            text="할 줄 모르는 일이 하나 늘 때마다, 고정비가 하나씩 추가됩니다"
            tag="h2"
            className="text-[#1A1A1A] text-[28px] md:text-[40px] lg:text-[48px] font-black leading-tight tracking-tight text-left mb-4"
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#444] text-base md:text-lg leading-relaxed max-w-2xl"
          >
            1인 셀러에게 &ldquo;못하는 일&rdquo;은 곧 &ldquo;나가는 돈&rdquo;입니다.
          </motion.p>
        </div>

        {/* Cost bars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-5 mb-14"
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

        {/* Transition — dark block */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#1A1A1A] rounded-2xl px-8 py-8 md:px-12 md:py-10 text-center"
        >
          <p className="text-white text-lg md:text-xl font-bold">
            이 비용을 줄이는 방법이 있습니다.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
