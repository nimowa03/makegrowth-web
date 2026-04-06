"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import {
  clipReveal,
  fadeInUp,
  staggerContainer,
} from "@/lib/motionVariants";

const competitors = [
  "대행사는 떠나면 끝. 시스템도 같이 멈춥니다.",
  "구독형 서비스는 끊으면 끝. 다시 원점입니다.",
  "강의는 듣고 끝. 혼자서 못 합니다.",
];

const dependencyLevels = [
  {
    level: "Level 0",
    icon: "solar:user-hand-up-linear",
    label: "사람에 의존",
    desc: "할 줄 모르니까 외주를 맡긴다",
    active: false,
  },
  {
    level: "Level 1",
    icon: "solar:cloud-linear",
    label: "플랫폼에 의존",
    desc: "AI 구독 서비스를 이것저것 쓴다. 끊으면 끝.",
    active: false,
  },
  {
    level: "Level 2",
    icon: "solar:shield-check-linear",
    label: "의존 없음",
    desc: "핵심 AI만 구독, 나머지는 직접 만든 내 시스템",
    active: true,
  },
];

const steps = [
  {
    number: "01",
    title: "진단",
    description:
      "셀러의 현재 루틴을 분석하고, AI 전환 가능 영역을 식별합니다. 어디에 시간이 빠지고, 어디에 외주비가 나가는지.",
  },
  {
    number: "02",
    title: "구축",
    description:
      "내 사업에 맞는 AI 자동화 시스템을 맞춤 설계하고 구축합니다. 범용이 아닌, 내 카테고리와 브랜드에 맞는 커스텀.",
  },
  {
    number: "03",
    title: "자립",
    description:
      "셀러가 직접 운영하고 확장할 수 있는 AI 리터러시를 교육합니다. 시스템을 만들어주는 것이 아니라, 이해하는 힘을 만들어 드립니다.",
  },
];

export function WhatIsAX() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-bg" animate={false}>
      <div ref={ref}>
        {/* Big headline */}
        <motion.div
          variants={clipReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-[#1A1A1A] text-[36px] md:text-[56px] font-black leading-[1.05] tracking-tight">
            대행사도, 구독 서비스도,
            <br />
            강의도 아닙니다
          </h2>
        </motion.div>

        {/* Competitor strikethrough */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-3 mb-8"
        >
          {competitors.map((text) => (
            <motion.div
              key={text}
              variants={fadeInUp}
              className="flex items-center gap-4"
            >
              <span className="text-[#CC0000] text-lg font-bold shrink-0">
                ✕
              </span>
              <span className="text-[#999] text-base md:text-lg line-through decoration-1">
                {text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Differentiator */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="flex items-start gap-4 mb-16 md:mb-20"
        >
          <span className="text-[#1A1A1A] text-lg font-bold mt-0.5 shrink-0">
            →
          </span>
          <span className="text-[#1A1A1A] text-lg md:text-xl font-bold">
            대행해주는 게 아니라, 직접 할 수 있게 만들어줍니다.
            <br />
            외주가 끊기면 멈추는 구조에서, 외주 없이도 돌아가는 구조로.
          </span>
        </motion.div>

        {/* AI Literacy message */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#1A1A1A] rounded-2xl px-8 py-10 md:px-12 md:py-12 mb-16 md:mb-20"
        >
          <p className="text-white text-lg md:text-xl font-bold mb-4">
            AI를 &ldquo;쓰는 것&rdquo;과 &ldquo;이해하는 것&rdquo;은 다릅니다.
          </p>
          <p className="text-[#999] text-base md:text-lg leading-relaxed">
            프롬프트를 복붙하는 건 &lsquo;쓰는 것&rsquo;.
            <br />
            내 사업에 맞게 시스템을 설계하고, 결과를 판단하고, 개선하는 건 &lsquo;이해하는 것&rsquo;.
            <br />
            <span className="text-white font-medium">
              메이크그로스는 &lsquo;쓰는 법&rsquo;이 아니라 &lsquo;이해하는 힘&rsquo;을 만들어줍니다.
            </span>
          </p>
        </motion.div>

        {/* Dependency levels */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 md:mb-20"
        >
          {dependencyLevels.map((item) => (
            <motion.div
              key={item.level}
              variants={fadeInUp}
              className={`rounded-xl p-5 md:p-6 border hover:scale-[1.03] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                item.active
                  ? "border-[#1A1A1A] bg-[#1A1A1A] hover:shadow-lg"
                  : "border-[#E0E0E0] bg-white hover:border-[#1A1A1A]/20 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon
                  icon={item.icon}
                  width={18}
                  className={item.active ? "text-[#999]" : "text-[#CCCCCC]"}
                />
                <p
                  className={`text-xs font-mono uppercase tracking-wider ${
                    item.active ? "text-[#999]" : "text-[#CCCCCC]"
                  }`}
                >
                  {item.level}
                </p>
              </div>
              <p
                className={`text-base font-bold mb-1 ${
                  item.active ? "text-white" : "text-[#999]"
                }`}
              >
                {item.label}
              </p>
              <p
                className={`text-sm ${
                  item.active ? "text-[#999]" : "text-[#CCCCCC]"
                }`}
              >
                {item.desc}
              </p>
              {item.active && (
                <p className="text-xs text-white font-medium mt-3">
                  ★ 메이크그로스 이후
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Process header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8"
        >
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
            Process
          </span>
          <h3 className="text-[#1A1A1A] text-2xl md:text-[36px] font-black leading-tight">
            진단에서 자립까지
          </h3>
        </motion.div>

        {/* 3-step bar */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative border-t-4 border-[#1A1A1A] pt-8 pb-6 md:pb-0 px-0 md:pr-8 hover:bg-[#FAFAFA] rounded-b-lg transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <span className="text-[48px] md:text-[56px] font-black text-[#E0E0E0] leading-none block mb-3">
                {step.number}
              </span>
              <h4 className="text-[#1A1A1A] text-xl md:text-2xl font-bold mb-3">
                {step.title}
              </h4>
              <p className="text-[#666] text-base leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 text-[#E0E0E0] text-2xl font-light">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
