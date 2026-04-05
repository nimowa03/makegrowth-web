"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { currentSeminar } from "@/data/seminars";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function FinalCTA() {
  const seatsRemaining =
    currentSeminar.maxParticipants - currentSeminar.currentParticipants;

  return (
    <SectionWrapper theme="warm-bg" id="final-cta">
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: supanovaEase }}
        className="max-w-2xl mx-auto"
      >
        {/* Accent-bordered Double-Bezel card */}
        <div className="bg-accent/[0.06] ring-1 ring-accent/20 p-1.5 rounded-[2rem]">
          <div className="bg-white rounded-[calc(2rem-0.375rem)] p-8 md:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(28,25,23,0.04)] text-center">
            <h2 className="font-display text-[28px] md:text-[36px] font-bold text-[#1A1A1A] leading-snug mb-6 text-balance">
              다음 세미나에서 만나요
            </h2>

            <p className="text-[#444444] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 break-keep">
              AI는 더 이상 선택이 아닙니다.
              <br />
              내 사업에 맞는 AI를 직접 만드는 그날,
              <br />
              당신의 이커머스는 달라집니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-[#444444] mb-8">
              <div className="flex items-center gap-1.5">
                <Icon icon="solar:calendar-linear" width={16} className="text-accent" />
                <span>{currentSeminar.date}</span>
              </div>
              <span className="hidden sm:inline text-[#666666]">|</span>
              <div className="flex items-center gap-1.5">
                <Icon icon="solar:users-group-rounded-linear" width={16} className="text-accent" />
                <span>잔여 {seatsRemaining}석</span>
              </div>
            </div>

            <div id="final-cta-button">
              <Button href="/seminar" size="lg" showArrow>
                세미나 신청하기
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
