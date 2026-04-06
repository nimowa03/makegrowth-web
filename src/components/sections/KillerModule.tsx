"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeInUp, clipReveal, staggerContainer } from "@/lib/motionVariants";

const systems = [
  {
    id: "sns-automation",
    eyebrow: "System 01",
    badge: "운영 중",
    badgeColor: "#059669",
    title: "멀티채널 콘텐츠 자동화",
    pain: "매달 100~200만원 나가는 마케팅 대행. 끊으면 블로그도, 인스타도 전부 멈춥니다. 내 브랜드 톤에 맞는 콘텐츠를 직접 만들고, 직접 발행하는 시스템.",
    solution: "트렌드 수집부터 콘텐츠 생성, 5채널 동시 발행까지. 대행사가 아니라 내가 직접 운영하는 시스템이라 끊길 일이 없습니다.",
    outputs: [
      "블로그·인스타·스마트스토어 자동 발행",
      "브랜드 톤에 맞는 콘텐츠 생성",
      "카테고리별 트렌드 키워드 수집",
      "5채널 동시 예약 발행",
    ],
    metrics: [
      { label: "소요 시간", before: "주 5~8시간", after: "주 1~2시간" },
      { label: "비용", before: "월 100~200만원", after: "80%+ 절감 (대표 실제 결과)" },
    ],
    mockupUrl: "n8n.makegrowth.co/workflow",
    mockupPlaceholder: "N8N 워크플로우 실행 화면",
    mockupTitle: "멀티채널 콘텐츠 자동화",
    href: "/services",
    reverse: false,
  },
  {
    id: "detail-page-automation",
    eyebrow: "System 02",
    badge: "설계 완료",
    badgeColor: "#999",
    title: "톤앤매너 AI 상세페이지 자동화",
    pain: "상세페이지 외주 건당 30만원. 수정 요청할 때마다 핑퐁. 내 브랜드 톤을 설명하는 시간까지 포함하면, 직접 만드는 것보다 오래 걸립니다.",
    solution: "내 브랜드 톤앤매너에 맞는 상세페이지를 직접 만드는 워크플로우. 카테고리와 스타일에 맞게 설계할 수 있어서, 많이 만들어서 많은 상품을 등록하는 생산성이 핵심.",
    outputs: [
      "내 브랜드 톤에 맞는 상세페이지 이미지",
      "카테고리·스타일별 커스텀 설계",
      "대량 등록용 배치 생산",
      "배경 제거·합성·리사이징 자동화",
    ],
    metrics: [
      { label: "소요 시간", before: "3~5일", after: "15분 (예상)" },
      { label: "비용", before: "건당 30만원", after: "90%+ 절감 (예상)" },
    ],
    mockupUrl: "ai-studio.makegrowth.co",
    mockupPlaceholder: "AI 이미지 생성 + 상세페이지 제작",
    mockupTitle: "톤앤매너 AI 상세페이지 자동화",
    href: "/services",
    reverse: true,
  },
];

function SystemCard({ system }: { system: (typeof systems)[0] }) {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const mockupY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} className="py-16 md:py-24">
      <div ref={sectionRef}>
        {/* Eyebrow + Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono text-[#999] uppercase tracking-wider">
            {system.eyebrow}
          </span>
          <span
            className="text-xs font-medium px-2.5 py-0.5 rounded-full border"
            style={{ color: system.badgeColor, borderColor: system.badgeColor }}
          >
            {system.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={clipReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[#1A1A1A] text-[32px] md:text-[48px] font-black leading-tight mb-4"
        >
          {system.title}
        </motion.h2>

        {/* Pain */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[#999] text-base md:text-lg mb-10 max-w-2xl"
        >
          {system.pain}
        </motion.p>

        {/* 2-column */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
            system.reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Browser mockup — parallax + tilt */}
          <motion.div
            style={{ y: mockupY }}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={system.reverse ? "lg:col-start-2" : ""}
          >
            <TiltCard tiltAmount={5}>
              <BrowserMockup
                url={system.mockupUrl}
                placeholder={system.mockupPlaceholder}
                subtext="GIF 또는 영상이 들어갈 자리"
                title={system.mockupTitle}
              />
            </TiltCard>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={system.reverse ? "lg:col-start-1 lg:row-start-1" : ""}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#444] text-base md:text-lg leading-relaxed mb-8"
            >
              {system.solution}
            </motion.p>

            {/* Outputs */}
            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-xs font-mono text-[#999] uppercase tracking-wider mb-3">
                산출물
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {system.outputs.map((output) => (
                  <div
                    key={output}
                    className="flex items-center gap-2 text-sm text-[#1A1A1A]"
                  >
                    <Icon
                      icon="solar:check-circle-linear"
                      width={16}
                      className="text-[#059669] shrink-0"
                    />
                    {output}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {system.metrics.map((m) => (
                <TiltCard key={m.label} tiltAmount={4} className="cursor-default">
                  <div className="border border-[#E0E0E0] rounded-xl p-4 hover:border-[#1A1A1A]/20 hover:shadow-sm transition-all duration-500">
                    <p className="text-xs font-mono text-[#999] uppercase tracking-wide mb-2">
                      {m.label}
                    </p>
                    <p className="text-sm text-[#999] line-through mb-0.5">
                      {m.before}
                    </p>
                    <p className="text-base md:text-lg text-[#1A1A1A] font-bold">
                      {m.after}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <MagneticButton>
                <Button href={system.href}>자세히 보기</Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function KillerModule() {
  return (
    <SectionWrapper theme="warm-surface" animate={false}>
      <div className="divide-y divide-[#E0E0E0]">
        {systems.map((system) => (
          <SystemCard key={system.id} system={system} />
        ))}
      </div>
    </SectionWrapper>
  );
}
