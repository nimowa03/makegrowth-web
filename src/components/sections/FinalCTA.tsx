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
          월 5~10만원으로 일하는 AI 직원을 만나보세요.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-[#666] mb-10">
          <span>즉시 시작</span>
          <span className="text-[#E0E0E0]">|</span>
          <span>월 5~10만원</span>
        </div>

        <div id="final-cta-button">
          <Button href="/contact" size="lg" showArrow>
            봇 도입 문의하기
          </Button>
        </div>

        <p className="text-sm text-[#666] mt-4">
          먼저 보고 싶으시면{" "}
          <a href="/seminar" className="underline hover:text-[#444] transition-colors">
            무료 웨비나
          </a>
          에서 라이브 시연을 확인하세요.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
