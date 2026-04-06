"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function FinalCTA() {
  return (
    <SectionWrapper theme="warm-bg" id="final-cta">
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: supanovaEase }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-[#1A1A1A] leading-snug mb-6">
          AI 자동화, 직접 보여드립니다
        </h2>

        <p className="text-[#666] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-6 break-keep">
          실제로 돌아가는 시스템을 무료 웨비나에서 시연합니다.
          <br />
          내 사업에 어떻게 적용할 수 있는지 직접 확인하세요.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-[#999] mb-10">
          <span>무료 온라인</span>
          <span className="text-[#E0E0E0]">|</span>
          <span>1~2시간</span>
        </div>

        <div id="final-cta-button">
          <Button href="/seminar" size="lg" showArrow>
            웨비나 신청하기
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
