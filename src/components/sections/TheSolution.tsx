"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";

const solutions = [
  {
    icon: "solar:target-linear",
    title: "내 카테고리 맞춤 AI 시스템",
    description:
      "범용 AI가 아닌, 내 상품과 카테고리에 최적화된 프롬프트와 워크플로우를 직접 구축합니다. 내 브랜드 톤에 맞는 결과물을 바로 얻을 수 있습니다.",
  },
  {
    icon: "solar:bolt-linear",
    title: "실시간 시연, 바로 이해",
    description:
      "웨비나에서 실제 작동하는 AI 콘텐츠 자동화 파이프라인을 시연합니다. 이론이 아닌, 실제 돌아가는 시스템을 직접 확인할 수 있습니다.",
  },
  {
    icon: "solar:users-group-rounded-linear",
    title: "커뮤니티 기반 지속 성장",
    description:
      "웨비나 이후에도 커뮤니티를 통해 최신 업데이트, 노하우 공유, 상호 피드백을 받을 수 있습니다. 혼자가 아닌, 함께 성장합니다.",
  },
];

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function TheSolution() {
  return (
    <SectionWrapper theme="warm-surface" id="the-solution">
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-[#059669]/10 text-[#059669] mb-4">
          The Solution
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A1A1A] leading-snug text-balance">
          메이크그로스가 제안하는{" "}
          <span className="text-[#059669]">해결책</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
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
              <div className="w-12 h-12 rounded-xl bg-[#059669]/10 flex items-center justify-center mb-5">
                <Icon icon={solution.icon} width={24} className="text-[#059669]" />
              </div>
              <h3 className="text-[#1A1A1A] text-lg font-semibold mb-3 leading-snug">
                {solution.title}
              </h3>
              <p className="text-[#444444] text-sm leading-relaxed break-keep">
                {solution.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
