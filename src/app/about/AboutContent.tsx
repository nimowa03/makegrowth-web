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
      "SeSAC AI·데이터 분석 과정 수료. AI 해커톤 참여. AI 빌더 도구와 노코드 자동화로 셀러용 시스템 구축.",
  },
  {
    number: 3,
    title: "창업",
    description:
      "셀러 경험 + AI 빌딩 역량을 결합해 메이크그로스를 설립. 이커머스 셀러를 위한 AI 자동화 파트너.",
  },
];

const capabilities = [
  {
    icon: "solar:cart-large-2-linear",
    title: "이커머스 실전",
    description:
      "이커머스 운영 경험. 쿠팡, 스마트스토어, 자사몰 전 채널 실전.",
  },
  {
    icon: "solar:cpu-bolt-linear",
    title: "AI 시스템 빌더",
    description:
      "AI 시스템 설계·구축 전문. 셀러 맞춤 자동화 파이프라인.",
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
          background: "linear-gradient(135deg, #0F172A 0%, #1A1A1A 50%, #0F172A 100%)",
        }}
      >
        {/* Subtle gradient mesh */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
            animation: "about-float 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
            animation: "about-float 12s ease-in-out infinite 4s",
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
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-white/20 text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              About
            </span>

            {/* Photo placeholder */}
            <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-2xl bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center mb-8">
              <span className="text-white/30 text-sm">Photo</span>
            </div>

            <h1 className="font-display text-[36px] md:text-[52px] lg:text-[64px] font-black text-white leading-[1.05] tracking-tight mb-4">
              {CEO_NAME}
            </h1>
            <p className="text-sm text-white/50 mb-6">이커머스 셀러, AI 빌더</p>

            <p className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
              &ldquo;이커머스 셀러로 시작했습니다. 상세페이지, SNS, 마케팅 — 할 줄 모르는 일마다 외주비가 나갔습니다.
              비용을 줄이려고 직접 AI 시스템을 만들었고, 지금은 같은 처지의 셀러들에게 그 방법을 전하고 있습니다.&rdquo;
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
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-[#E0E0E0]" />

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
                  <div className="absolute -left-10 top-0 w-9 h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-sm font-bold z-10">
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
              <div className="absolute top-[18px] left-[calc(16.67%)] right-[calc(16.67%)] h-px bg-[#E0E0E0]" />

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
                    <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-sm font-bold mb-4 z-10 relative">
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
                <div className="w-10 h-10 rounded-lg bg-[#F0F0F0] flex items-center justify-center mb-4">
                  <Icon icon={cap.icon} width={20} className="text-[#666]" />
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

    </>
  );
}
