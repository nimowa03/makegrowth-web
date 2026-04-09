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
          AI 직원, 오늘 바로 고용하세요
        </h2>

        <p className="text-[#666] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-6 break-keep">
          매출 확인, 경쟁사 모니터링, 리포트, CS 응대까지.
          <br />
          월 49,000원. 30일 환불 보장. 이 가격에 전부 포함.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-[#666] mb-10">
          <span>즉시 시작</span>
          <span className="text-[#E0E0E0]">|</span>
          <span>월 49,000원</span>
        </div>

        <div id="final-cta-button" className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/payment" size="lg" showArrow>
            결제하고 바로 시작
          </Button>
          <Button href="/diagnosis" variant="secondary" size="lg">
            먼저 무료 진단해보기
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
