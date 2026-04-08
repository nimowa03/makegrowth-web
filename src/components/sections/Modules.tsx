"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TextReveal } from "@/components/ui/TextReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import { botModules } from "@/data/modules";
import type { BotModule } from "@/data/modules";

const badgeVariantMap: Record<BotModule["badge"], "included" | "addon" | "coming-soon"> = {
  "기본 포함": "included",
  "추가 모듈": "addon",
  "준비 중": "coming-soon",
};

export function Modules() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-bg" animate={false}>
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#666] text-base text-center mb-4">
            AI 직원에게 맡길 수 있는 업무들
          </p>
          <TextReveal
            text="필요한 기능만 골라 붙이세요"
            tag="h2"
            className="text-[#1A1A1A] text-[28px] md:text-[40px] lg:text-[48px] font-black leading-tight tracking-tight mb-4"
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#666] text-base md:text-lg"
          >
            AI 비서 봇에 모듈을 추가하면 기능이 확장됩니다
          </motion.p>
        </div>

        {/* Module cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {botModules.map((mod) => (
            <motion.div key={mod.id} variants={fadeInUp}>
              <TiltCard tiltAmount={4}>
                <div className="border border-[#E0E0E0] rounded-xl p-5 hover:border-[#666] hover:shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F8F8F8] flex items-center justify-center">
                      <Icon
                        icon={mod.icon}
                        width={22}
                        className="text-[#666]"
                      />
                    </div>
                    <Badge variant={badgeVariantMap[mod.badge]}>
                      {mod.badge}
                    </Badge>
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-1">
                    {mod.name}
                  </h3>
                  <p className="text-[13px] text-[#666] leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
