"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { currentSeminar } from "@/data/seminars";
import { supanovaEase } from "@/lib/motionVariants";

export function Curriculum() {
  return (
    <SectionWrapper theme="warm-bg" id="curriculum">
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
          Curriculum
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A1A1A] leading-snug text-balance">
          1~2시간, 핵심만 담은 커리큘럼
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E0E0E0] hidden md:block" />

          <div className="space-y-6">
            {currentSeminar.curriculum.map((step, index) => (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: supanovaEase,
                }}
                className="relative flex gap-5"
              >
                {/* Timeline numbered circle */}
                <div className="hidden md:flex shrink-0 w-10 items-start justify-center pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-sm font-bold z-10 shadow-[0_0_16px_rgba(0,0,0,0.1)]">
                    {index + 1}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1">
                  <div className="bg-black/[0.03] ring-1 ring-black/[0.04] p-1.5 rounded-[2rem]">
                    <div className="bg-white rounded-[calc(2rem-0.375rem)] p-5 md:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(28,25,23,0.04)]">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-[#1A1A1A] border border-[#E0E0E0] bg-transparent px-2.5 py-1 rounded-full">
                          {step.stage}
                        </span>
                        <h3 className="text-base font-semibold text-[#1A1A1A]">
                          {step.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-[#666666] mb-3">
                        <Icon icon="solar:clock-circle-linear" width={14} />
                        <span>{step.time}</span>
                      </div>

                      <p className="text-sm text-[#444444] leading-relaxed mb-3 break-keep">
                        {step.description}
                      </p>

                      <div className="flex items-start gap-2 bg-warm-surface rounded-lg p-3">
                        <Icon
                          icon="solar:box-linear"
                          width={16}
                          className="text-[#666] shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="text-[11px] font-semibold text-[#666666] uppercase tracking-wider mb-0.5">
                            결과물
                          </p>
                          <p className="text-sm text-[#1A1A1A] font-medium break-keep">
                            {step.deliverable}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
