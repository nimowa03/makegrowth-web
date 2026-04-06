"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import {
  fadeInUp,
  staggerContainer,
} from "@/lib/motionVariants";

const stats = [
  { number: "3년차", label: "셀러 경력" },
  { number: "10+", label: "맞춤형 시스템 구축" },
  { number: "5시간", label: "하루 중 절약" },
];

export function InstructorIntro() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="light" id="instructor" animate={false}>
      <div ref={ref}>
        {/* Eyebrow */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-10 md:mb-14"
        >
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
          {/* Left: Photo */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Photo placeholder */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-[#F0F0F0] border border-[#E0E0E0] flex items-center justify-center mb-4">
              <span className="text-[#999] text-sm">Photo</span>
            </div>
            <p className="text-[#1A1A1A] font-bold text-lg">노아</p>
            <p className="text-[#999] text-sm">이커머스 셀러, AI 빌더</p>
          </motion.div>

          {/* Right: Content */}
          <div>
            {/* Manifesto quote — text reveal */}
            <div className="mb-8">
              <TextReveal
                text="셀러의 시간과 비용을 되찾아 주고 싶습니다"
                tag="h2"
                className="text-[#1A1A1A] text-[28px] md:text-[40px] lg:text-[48px] font-black leading-[1.15] tracking-tight"
              />
            </div>

            {/* Stat cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-3 gap-3 md:gap-4 mb-10"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <TiltCard tiltAmount={6} className="cursor-default">
                    <div className="border border-[#E0E0E0] rounded-xl p-3 md:p-5 text-center hover:border-[#1A1A1A]/20 hover:shadow-sm transition-all duration-500">
                      <p className="font-display font-black text-xl md:text-2xl text-[#1A1A1A] mb-1">
                        {stat.number}
                      </p>
                      <p className="text-xs md:text-sm text-[#999]">{stat.label}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Story */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4 text-[15px] md:text-base text-[#666] leading-relaxed mb-8"
            >
              <p>
                쿠팡과 스마트스토어에서 직접 팔았습니다. 상세페이지, SNS,
                마케팅 &mdash; 못하는 일마다 외주를 맡겼고, 매출은 있는데
                남는 건 없는 구조에 지쳤습니다.
              </p>
              <p>
                그래서 직접 AI 시스템을 만들었습니다. 대행사에 의존하지
                않고, 구독 서비스 이것저것 쓰지 않고, 핵심 AI만 구독하고
                나머지는 직접 만드는 구조. SNS 운영 시간 80%+, 상세페이지
                외주비 90%+ 절감. 이 경험과 시스템을 같은 고민을 하는
                셀러들에게 전하고 있습니다.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <MagneticButton>
                <Button href="/about">자세히 보기</Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
