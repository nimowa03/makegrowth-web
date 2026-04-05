"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CEO_NAME } from "@/lib/constants";

/* ─────────────────────────────────────────────
   Data
   ───────────────────────────────────────────── */

const timelineStages = [
  {
    number: 1,
    title: "셀러",
    description:
      "이커머스 셀러로서 직접 상품 소싱, 리스팅, 마케팅, CS를 경험. 현장의 고충을 몸으로 체감.",
  },
  {
    number: 2,
    title: "빌더",
    description:
      "반복 업무를 자동화하기 위해 AI·노코드 시스템 구축 시작. N8N, GPT, 이미지 생성 AI 등 실전 파이프라인 개발.",
  },
  {
    number: 3,
    title: "창업",
    description:
      "셀러 경험 + AI 빌딩 역량을 결합, 메이크그로스를 설립. 이커머스 사업자의 AI Transformation 파트너.",
  },
];

const capabilities = [
  {
    icon: "solar:cart-large-2-linear",
    title: "이커머스 실전",
    description:
      "5년 이상 이커머스 운영 경험. 쿠팡, 스마트스토어, 자사몰 전 채널 실전.",
  },
  {
    icon: "solar:cpu-bolt-linear",
    title: "AI 시스템 빌더",
    description:
      "GPT, Claude, Midjourney, N8N 등 AI·자동화 도구 전문. 셀러 맞춤 파이프라인 설계.",
  },
  {
    icon: "solar:target-linear",
    title: "AX 방법론",
    description:
      "단순 도구 교육이 아닌, 비즈니스 프로세스 전환(AX) 중심 접근.",
  },
  {
    icon: "solar:users-group-rounded-linear",
    title: "교육·코칭",
    description:
      "비개발자도 이해할 수 있는 실습 중심 교육. 소규모 밀착 코칭.",
  },
];

/* ─────────────────────────────────────────────
   Animation helpers
   ───────────────────────────────────────────── */

const supanovaEase = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: i * 0.15, ease: supanovaEase },
  }),
};

/* ─────────────────────────────────────────────
   Component
   ───────────────────────────────────────────── */

export function AboutContent() {
  return (
    <>
      {/* ── 1. Hero (DARK with mesh gradient) ──── */}
      <section
        className="relative min-h-[70dvh] flex items-center overflow-hidden"
        id="about-hero"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(139,124,246,0.15), transparent),
            radial-gradient(ellipse 60% 80% at 80% 60%, rgba(139,124,246,0.08), transparent),
            radial-gradient(ellipse 100% 100% at 50% 0%, rgba(0,0,0,0.3), transparent),
            #000000
          `,
        }}
      >
        {/* Floating orb 1 */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full top-[-100px] right-[-50px] pointer-events-none"
          style={{
            background: "rgba(139, 124, 246, 0.12)",
            filter: "blur(60px)",
            animation: "hero-float 8s ease-in-out infinite",
          }}
        />

        {/* Floating orb 2 */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full bottom-[-80px] left-[-30px] pointer-events-none"
          style={{
            background: "rgba(139, 124, 246, 0.08)",
            filter: "blur(60px)",
            animation: "hero-float 8s ease-in-out infinite -3s",
          }}
        />

        {/* Content */}
        <div className="max-w-content mx-auto px-6 md:px-8 py-32 md:py-40 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: supanovaEase }}
            className="flex flex-col items-center text-center"
          >
            {/* Eyebrow pill */}
            <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-8">
              About
            </span>

            {/* Photo placeholder */}
            <div className="w-[200px] h-[200px] rounded-full bg-white/[0.05] ring-1 ring-white/10 mb-8" />

            <h1 className="font-display text-white mb-4">{CEO_NAME}</h1>

            <p className="text-lg md:text-xl text-[#666666] max-w-xl leading-relaxed">
              &ldquo;이커머스 현장에서 직접 부딪히며 배운 것들을, AI 시스템으로
              담아드립니다.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Gradient transition band ──────────── */}
      <SectionWrapper theme="gradient-transition" animate={false} />

      {/* ── 2. Story Timeline (warm-bg) ────────── */}
      <SectionWrapper theme="warm-bg" id="about-timeline">
        <h2 className="text-center text-[#1A1A1A] mb-12">성장 스토리</h2>

        {/* Timeline container */}
        <div className="relative">
          {/* ── Mobile: vertical timeline ── */}
          <div className="md:hidden relative pl-10">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-accent/20" />

            <div className="flex flex-col gap-10">
              {timelineStages.map((stage, i) => (
                <motion.div
                  key={stage.number}
                  className="relative"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={i}
                >
                  {/* Numbered circle */}
                  <div className="absolute -left-10 top-0 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold z-10">
                    {stage.number}
                  </div>

                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-[#444444] text-[15px] leading-relaxed">
                    {stage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Desktop: horizontal timeline ── */}
          <div className="hidden md:block">
            <div className="relative mx-auto max-w-3xl">
              {/* Horizontal line */}
              <div className="absolute top-[18px] left-[calc(16.67%)] right-[calc(16.67%)] h-px bg-accent/20" />

              <div className="grid grid-cols-3 gap-8">
                {timelineStages.map((stage, i) => (
                  <motion.div
                    key={stage.number}
                    className="flex flex-col items-center text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    custom={i}
                  >
                    {/* Numbered circle */}
                    <div className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold mb-4 z-10 relative">
                      {stage.number}
                    </div>

                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-[#444444] text-[15px] leading-relaxed">
                      {stage.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 3. Capabilities (warm-surface) ──────── */}
      <SectionWrapper theme="warm-surface" id="about-capabilities">
        <h2 className="text-center text-[#1A1A1A] mb-10">핵심 역량</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <Card variant="light" hover className="h-full">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon icon={cap.icon} width={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                  {cap.title}
                </h3>
                <p className="text-[#444444] text-[15px] leading-relaxed">
                  {cap.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── 4. CTA (warm-bg, NOT dark) ─────────── */}
      <SectionWrapper theme="warm-bg" id="about-cta">
        <div className="max-w-2xl mx-auto">
          <Card variant="light" className="ring-accent/20">
            <div className="flex flex-col items-center text-center py-4">
              <h2 className="text-[#1A1A1A] mb-8">
                함께 성장할 준비가 되셨나요?
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" showArrow>
                  견적 문의하기
                </Button>
                <Button href="/seminar" variant="secondary" size="lg">
                  세미나 알아보기
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
