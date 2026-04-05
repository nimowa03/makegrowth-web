"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";

const painPoints = [
  {
    icon: "solar:puzzle-piece-linear",
    title: "범용 AI 도구의 한계",
    description:
      "ChatGPT에 '상세페이지 써줘'라고 해봤자, 내 상품도 내 카테고리도 모릅니다. 범용 도구로는 브랜드 톤에 맞는 결과물을 얻을 수 없습니다.",
  },
  {
    icon: "solar:refresh-circle-linear",
    title: "외주 의존의 악순환",
    description:
      "SNS 운영 외주비 월 100만원, 상세페이지 건당 30만원. 외주를 끊으면 채널이 멈추고, 계속하면 수익이 줄어드는 악순환.",
  },
  {
    icon: "solar:book-2-linear",
    title: "정보 과부하, 실행은 제로",
    description:
      "유튜브 강의 수십 개를 봐도 막상 내 사업에 적용하려면 막막합니다. 지식은 쌓이는데 실행 가능한 시스템은 없습니다.",
  },
];

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function TheProblem() {
  return (
    <SectionWrapper theme="warm-bg" id="the-problem">
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-[#DC2626]/10 text-[#DC2626] mb-4">
          The Problem
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A1A1A] leading-snug text-balance">
          셀러들이 겪고 있는{" "}
          <span className="text-[#DC2626]">진짜 문제</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {painPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              ease: supanovaEase,
            }}
          >
            <Card variant="light" hover>
              <div className="w-12 h-12 rounded-xl bg-[#DC2626]/10 flex items-center justify-center mb-5">
                <Icon icon={point.icon} width={24} className="text-[#DC2626]" />
              </div>
              <h3 className="text-[#1A1A1A] text-lg font-semibold mb-3 leading-snug">
                {point.title}
              </h3>
              <p className="text-[#444444] text-sm leading-relaxed break-keep">
                {point.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
