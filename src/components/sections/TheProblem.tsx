"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";

const painPoints = [
  {
    icon: "solar:puzzle-piece-linear",
    title: "AI 서비스 써봤는데, 내 브랜드에 안 맞습니다",
    description:
      "뷰티 셀러와 가전 셀러의 톤은 완전히 다릅니다. 범용 도구는 이 차이를 모릅니다.",
  },
  {
    icon: "solar:refresh-circle-linear",
    title: "외주 끊으면 채널이 멈춥니다",
    description:
      "매달 100만원씩 나가는 외주비. 끊으면 SNS가 멈추고, 계속하면 수익이 줄어듭니다.",
  },
  {
    icon: "solar:book-2-linear",
    title: "배워도 적용이 안 됩니다",
    description:
      "강의는 '도구 사용법'을 알려주지, '내 사업에 맞는 시스템'은 안 만들어줍니다.",
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
