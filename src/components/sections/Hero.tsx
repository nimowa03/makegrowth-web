"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { fadeInUp, scaleUp } from "@/lib/motionVariants";

const HAS_DEMO_VIDEO_HERO = false;
import { heroPainPoints, heroResolution } from "@/data/painPoints";

const HAS_VIDEO = true;
const VIDEO_SRC = "/videos/makegrowth-intro.mp4";
const POSTER_SRC = "/videos/intro-thumbnail.jpg";

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
        <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <motion.span
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] mb-8"
            >
              <span className="text-[#666]">{"//"}</span>
              이커머스 셀러 전용 AI 비서
            </motion.span>

            {/* H1 */}
            <TextReveal
              text="할 줄 모르는 일은 전부 비용입니다"
              tag="h1"
              className="font-display text-[48px] md:text-[72px] lg:text-[104px] font-black text-[#1A1A1A] leading-[0.95] tracking-tight mb-8"
            />

            {/* Subtitle — WHY 중심 공감 카피 */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="text-[#444] text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto mb-8"
              style={{ wordBreak: "keep-all" }}
            >
              매출은 있는데 남는 건 없다. 직접 할 수 있는 게 없으면 비용은 계속 늘어난다.
              <br />
              <span className="text-[#1A1A1A] font-semibold">
                이 구조를 바꾸는 건 AI 도구가 아니라, 내 체질로 만든 시스템입니다.
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
                <Button href="/contact" size="lg" showArrow>
                  AI 직원 도입하기
                </Button>
              </MagneticButton>
              <Button href="#bot-demo" variant="secondary" size="lg">
                어떤 일을 하는지 보기
              </Button>
            </motion.div>
          </div>
        </div>

        {/* ── Zone 2: Video — below fold, deep navy ── */}
        <div
          className="pb-24 md:pb-32 pt-16 md:pt-20 px-6 md:px-8 -mx-6 md:-mx-8"
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1A1A1A 50%, #0F172A 100%)",
          }}
        >
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="text-white/60 text-center text-lg md:text-xl mb-8 max-w-6xl mx-auto"
            style={{ wordBreak: "keep-all" }}
          >
            메이크그로스가 뭘 하는 곳인지, 2분이면 알 수 있습니다
          </motion.p>
          <motion.div
            variants={scaleUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
            className="max-w-6xl mx-auto"
          >
            {HAS_VIDEO ? (
              <BrowserMockup
                videoSrc={VIDEO_SRC}
                posterSrc={POSTER_SRC}
                clickToPlay
                url="makegrowth.dev"
              />
            ) : (
              <BrowserMockup
                url="makegrowth.dev"
                placeholder="AI 비서 봇 소개 영상"
                subtext="리모션 영상 준비 중"
                className="border-white/10 shadow-[0_8px_60px_rgba(0,0,0,0.3)]"
              />
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
