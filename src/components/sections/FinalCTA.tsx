"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { supanovaEase } from "@/lib/motionVariants";

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
        <h2 className="text-[#1A1A1A] leading-snug mb-6" style={{ wordBreak: "keep-all" }}>
          직접 보면 다릅니다
        </h2>

        <p className="text-[#666] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-6 break-keep">
          실제 AI 직원이 매출 조회, 리포트, 경쟁사 모니터링을 하는 모습을
          <br />
          라이브로 시연합니다. 무료 웨비나에서 직접 확인하세요.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-[#666] mb-10">
          <span>무료</span>
          <span className="text-[#E0E0E0]">|</span>
          <span>온라인 (Zoom)</span>
          <span className="text-[#E0E0E0]">|</span>
          <span>90분</span>
        </div>

        <div id="final-cta-button" className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/seminar" size="lg" showArrow>
            웨비나 사전등록하기
          </Button>
          <Button href="/diagnosis" variant="secondary" size="lg">
            먼저 내 루틴 분석해보기
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
