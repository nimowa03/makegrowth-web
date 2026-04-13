"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { fadeInUp, scaleUp } from "@/lib/motionVariants";
import { heroPainPoints, heroResolution } from "@/data/painPoints";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative bg-white overflow-hidden"
    >
      {/* Parallax gradient mesh background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] max-w-[80vw] h-[600px] max-h-[80vw] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #1A1A1A 0%, transparent 70%)",
            animation: "hero-mesh-float 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] max-w-[60vw] h-[400px] max-h-[60vw] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #1A1A1A 0%, transparent 70%)",
            animation: "hero-mesh-float 12s ease-in-out infinite 4s",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10"
      >
        {/* ── Zone 1: Text — viewport centered ── */}
        <div className="min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <motion.span
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] mb-6 sm:mb-8"
            >
              <span className="text-[#666]">{"//"}</span>
              이커머스 셀러 전용 AI 직원
            </motion.span>

            {/* H1 */}
            <TextReveal
              text="할 줄 모르는 일은 전부 비용입니다"
              tag="h1"
              className="font-display text-[28px] sm:text-[40px] md:text-[64px] lg:text-[88px] xl:text-[104px] font-black text-[#1A1A1A] leading-[0.95] tracking-tight mb-6 sm:mb-8"
              style={{ wordBreak: "keep-all" }}
            />

            {/* Subtitle — WHY 중심 공감 카피 */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="text-[#444] text-[15px] sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8"
              style={{ wordBreak: "keep-all" }}
            >
              소싱, 등록, 상세페이지, CS, SNS까지. 대표님, 혼자 다 하고 계신가요?
              <br />
              <span className="text-[#1A1A1A] font-semibold">
                그 시간과 비용, AI 직원 하나가 바꿀 수 있습니다.
              </span>
            </motion.p>

            {/* Pain point typewriter — 셀러 목소리 */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <TypewriterText
                texts={heroPainPoints}
                resolution={heroResolution}
                className="mb-10"
              />
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={scaleUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.0 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <MagneticButton>
                <Button href="/diagnosis" size="lg" showArrow>
                  내 루틴 무료 진단하기
                </Button>
              </MagneticButton>
              <Button href="#bot-demo" variant="secondary" size="lg">
                실제 시연 보기 ↓
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
