"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "1",
    title: "진단",
    description: "내 셀러 루틴 분석 + AI 전환 가능 영역 식별",
    icon: "solar:magnifer-linear",
  },
  {
    number: "2",
    title: "구축",
    description: "맞춤 AI 시스템 셋업 + 자동화 파이프라인 연결",
    icon: "solar:settings-linear",
  },
  {
    number: "3",
    title: "교육",
    description: "스스로 운영하는 역량 + 지속 지원",
    icon: "solar:graduation-cap-linear",
  },
];

export function WhatIsAX() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-bg" animate={false}>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: supanovaEase }}
        >
          {/* Eyebrow pill */}
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
            Our Approach
          </span>

          {/* Heading */}
          <h2 className="text-[#1C1917] mb-4">
            AX — 내 사업에 맞는 AI를 직접 만드는 과정
          </h2>

          {/* Subtitle */}
          <p className="text-[#57534E] text-base md:text-lg max-w-2xl mb-12 md:mb-16 leading-relaxed">
            단순 AI 도구 소개가 아닌, 내 비즈니스에 맞는 AI 시스템을 직접 구축하고 운영하는 역량을 키웁니다.
          </p>
        </motion.div>

        {/* 3-step numbered timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[3.25rem] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-[#1C1917]/10 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * index,
                ease: supanovaEase,
              }}
              className="relative z-10"
            >
              <Card variant="light" hover>
                <div>
                  {/* Number circle */}
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold mb-5">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon
                      icon={step.icon}
                      width={24}
                      className="text-accent"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#1C1917] text-xl font-semibold mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#57534E] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
