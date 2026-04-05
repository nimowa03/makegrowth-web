"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: 1,
    title: "진단",
    description:
      "현재 업무 프로세스를 분석하고 AI 전환 가능 영역을 식별합니다",
    icon: "solar:magnifer-linear",
  },
  {
    number: 2,
    title: "구축",
    description:
      "내 상품·카테고리에 최적화된 AI 시스템을 직접 셋업합니다",
    icon: "solar:settings-linear",
  },
  {
    number: 3,
    title: "교육",
    description: "시스템 운영 방법과 최적화 노하우를 전수합니다",
    icon: "solar:square-academic-cap-linear",
  },
  {
    number: 4,
    title: "자립",
    description:
      "스스로 운영·확장하며 지속 성장하는 구조를 만듭니다",
    icon: "solar:rocket-2-linear",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ProcessSteps() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <div ref={ref}>
      <div className="text-center mb-12">
        <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
          Process
        </span>
        <h2 className="text-[#1A1A1A]">진행 프로세스</h2>
        <p className="mt-3 text-[#444444] max-w-lg mx-auto">
          4단계 프로세스로 AI 전환을 완성합니다
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative"
      >
        {/* Connecting line — visible on md+ */}
        <div className="hidden md:block absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-accent/20" />

        {steps.map((step) => (
          <motion.div
            key={step.number}
            variants={itemVariants}
            className="flex flex-col items-center text-center relative"
          >
            {/* Numbered circle */}
            <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mb-5 relative z-10">
              {step.number}
            </div>

            {/* Icon */}
            <div className="mb-3">
              <Icon
                icon={step.icon}
                width={28}
                className="text-accent"
              />
            </div>

            <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">
              {step.title}
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed max-w-[220px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
