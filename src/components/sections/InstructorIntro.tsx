"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import {
  fadeInUp,
  staggerContainer,
  staggerSlow,
} from "@/lib/motionVariants";

const stats = [
  { number: "3년차", label: "셀러 경력" },
  { number: "10+", label: "맞춤형 시스템 구축" },
  { number: "5시간", label: "하루 중 절약" },
];

const timelineEvents = [
  {
    year: "2023",
    title: "이커머스 셀러",
    description:
      "상세페이지, SNS, 마케팅, CS — 할 줄 모르는 업무마다 외주비가 나갔습니다.",
    emphasis: "매출은 있는데 남는 건 없는 구조가 반복됐습니다.",
  },
  {
    year: "2024–25",
    title: "AI로 직접 해결",
    description:
      "반복 업무를 AI로 전환하기 시작했습니다. 직접 할 수 있는 영역을 늘리며 메신저 봇으로 SNS·CS·리포트를 자동화했습니다.",
    emphasis: "운영 시간 80%+, 외주비 90%+ 절감을 직접 경험했습니다.",
  },
  {
    year: "2026",
    title: "메이크그로스 창업",
    description:
      "같은 고민을 하는 셀러가 수없이 많다는 걸 알게 됐습니다.",
    emphasis:
      "시스템을 만들어주는 것에서 끝나지 않고, 셀러가 직접 운영하고 확장하는 역량까지 심어주는 사업을 시작했습니다.",
  },
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
          className="mb-8 md:mb-10"
        >
          <p className="text-[#666] text-base text-center lg:text-left mb-4">
            이 서비스를 만든 사람
          </p>
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
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-[#F0F0F0] border border-[#E0E0E0] flex items-center justify-center mb-4">
              <Icon icon="solar:user-rounded-bold" width={80} className="text-[#1A1A1A]/20" />
            </div>
            <p className="text-[#1A1A1A] font-black text-xl">노아</p>
            <p className="text-[#666] text-base">이커머스 셀러, AI 빌더</p>
          </motion.div>

          {/* Right: Content */}
          <div>
            {/* Manifesto quote */}
            <div className="mb-8">
              <TextReveal
                text="셀러의 시간과 비용을 되찾아 주고 싶습니다"
                tag="h2"
                className="text-[#1A1A1A] text-[32px] md:text-[44px] lg:text-[52px] font-black leading-[1.1] tracking-tight"
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
                      <p className="font-display font-black text-2xl md:text-3xl text-[#1A1A1A] mb-1">
                        {stat.number}
                      </p>
                      <p className="text-sm md:text-base text-[#666]">{stat.label}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            {/* ── WHY Timeline ── */}
            <motion.div
              variants={staggerSlow}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative pl-8 mb-8"
            >
              {/* Vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                style={{ transformOrigin: "top" }}
                className="absolute left-3 top-0 bottom-0 w-px bg-[#E0E0E0]"
              />

              {timelineEvents.map((event) => (
                <motion.div
                  key={event.year}
                  variants={fadeInUp}
                  className="relative mb-10 last:mb-0"
                >
                  {/* Dot */}
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-[#1A1A1A]" />

                  {/* Year */}
                  <span className="text-xs font-mono font-black text-[#1A1A1A] uppercase tracking-wider mb-2 block">
                    {event.year}
                  </span>
                  {/* Title */}
                  <p className="text-xl md:text-2xl font-black text-[#1A1A1A] mb-2">
                    {event.title}
                  </p>
                  {/* Description */}
                  <p
                    className="text-base md:text-lg text-[#444] leading-loose"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {event.description}
                  </p>
                  <p
                    className="text-base md:text-lg text-[#1A1A1A] font-bold leading-loose mt-1"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {event.emphasis}
                  </p>
                </motion.div>
              ))}
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
