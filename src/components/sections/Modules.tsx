"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TextReveal } from "@/components/ui/TextReveal";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp } from "@/lib/motionVariants";
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
            text="기본 기능만으로 충분합니다"
            tag="h2"
            className="text-[#1A1A1A] text-[28px] md:text-[40px] lg:text-[48px] font-black leading-tight tracking-tight mb-4"
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#666] text-base md:text-lg"
          >
            필요하면 더 붙일 수 있습니다
          </motion.p>
        </div>

        {/* Bento: 기본 포함 3개 크게 (다크) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {botModules.filter((mod) => mod.badge === "기본 포함").map((mod, i) => (
            <motion.div
              key={mod.id}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-[#1A1A1A] p-6 md:p-7 group hover:shadow-[0_8px_40px_rgba(15,23,42,0.15)] transition-shadow duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.08] ring-1 ring-white/10 flex items-center justify-center group-hover:bg-white/[0.12] transition-colors duration-500">
                  <Icon icon={mod.icon} width={22} className="text-white/60" />
                </div>
                <Badge variant="included">{mod.badge}</Badge>
              </div>
              <h3 className="text-base font-bold text-white mb-1">{mod.name}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{mod.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 추가 모듈 3개 작게 (라이트) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {botModules.filter((mod) => mod.badge === "추가 모듈").map((mod, i) => (
            <motion.div
              key={mod.id}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: (i + 3) * 0.08 }}
              className="rounded-2xl border border-[#E0E0E0] bg-white p-5 md:p-6 group hover:shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:border-[#CCCCCC] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center mb-3 group-hover:bg-[#1A1A1A] transition-colors duration-500">
                <Icon icon={mod.icon} width={20} className="text-[#1A1A1A] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-1">{mod.name}</h3>
              <p className="text-xs text-[#666] leading-relaxed">{mod.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
