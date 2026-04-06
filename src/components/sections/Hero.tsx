"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { fadeInUp, scaleUp } from "@/lib/motionVariants";

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
      className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden"
    >
      {/* Parallax gradient mesh background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #1A1A1A 0%, transparent 70%)",
            animation: "hero-mesh-float 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #1A1A1A 0%, transparent 70%)",
            animation: "hero-mesh-float 12s ease-in-out infinite 4s",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32 w-full relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.span
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] mb-8"
          >
            <span className="text-[#999]">{"//"}</span>
            1인 이커머스 셀러를 위한 AI 자동화 파트너
          </motion.span>

          {/* H1 — word-by-word reveal */}
          <TextReveal
            text="할 줄 모르는 일은 전부 비용입니다"
            tag="h1"
            className="font-display text-[48px] md:text-[72px] lg:text-[104px] font-black text-[#1A1A1A] leading-[0.95] tracking-tight mb-8"
          />

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-[#444] text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto mb-12"
          >
            사람 뽑자니 부담, 외주 맡기자니 비용, 직접 하자니 시간.
            <br className="hidden md:block" />
            <span className="text-[#1A1A1A] font-semibold">
              끊겨도 멈추지 않는 AI 시스템을 직접 세팅해 드립니다.
            </span>
          </motion.p>

          {/* CTA — magnetic */}
          <motion.div
            id="hero-cta"
            variants={scaleUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <MagneticButton>
              <Button href="#diagnosis" size="lg" showArrow>
                내 루틴 분석해보기
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes hero-mesh-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.05); }
        }
      `}</style>
    </section>
  );
}
