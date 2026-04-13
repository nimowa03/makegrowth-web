"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TextReveal } from "@/components/ui/TextReveal";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, staggerContainer, staggerSlow } from "@/lib/motionVariants";

const steps = [
  {
    number: "01",
    title: "진단",
    description: "어디에 돈이 새는지 먼저 파악합니다",
    detail:
      "셀러 루틴 분석기로 업무 시간·외주비 파악. AI 전환 가능 영역 식별.",
    icon: "solar:stethoscope-linear",
  },
  {
    number: "02",
    title: "구축",
    description: "내 사업에 맞는 AI 직원을 세팅합니다",
    detail:
      "카테고리·채널·판매방식에 맞게 세팅. 오픈마켓 API 연동, 모듈 선택.",
    icon: "solar:settings-linear",
  },
  {
    number: "03",
    title: "커스텀",
    description: "내가 직접 조정할 수 있어야 진짜입니다",
    detail:
      "알림 시간, 리포트 형식, 응대 톤 등. 한국어로 '이것도 해줘'라고 말하면 기능 추가.",
    icon: "solar:tuning-2-linear",
  },
  {
    number: "04",
    title: "자립",
    description: "끊겨도 시스템과 역량이 남는 구조",
    detail:
      "한국어로 '이것도 해줘'라고 말하면 기능 추가. 월정액 유지 또는 셀프 운영 선택 가능.",
    icon: "solar:rocket-2-linear",
  },
];

const architectureLayers = [
  {
    layer: 3,
    title: "기억 레이어",
    subtitle: "운영 지식 누적 · 패턴 학습 · 의사결정 로그",
    description: "시간이 지날수록 더 정확한 제안",
    roadmap: true,
  },
  {
    layer: 2,
    title: "실행 레이어",
    subtitle: "매출 조회 · 경쟁사 모니터링 · 리포트 · CS",
    description: "스킬이 실제 업무를 자동 처리",
    roadmap: false,
  },
  {
    layer: 1,
    title: "대화 레이어",
    subtitle: "휴대폰 메신저에서 바로 지시",
    description: "한국어로 지시하면 봇이 알아서 실행",
    roadmap: false,
  },
];

export function HowItWorks() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-surface" animate={false}>
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Bridge */}
        <p className="text-[#666] text-base text-center mb-4">
          마음에 드셨다면, 도입은 이렇게 진행됩니다
        </p>

        {/* Header */}
        <div className="text-center mb-12">
          <TextReveal
            text="내 사업에 맞는 AI 직원, 이렇게 만들어집니다"
            tag="h2"
            className="text-[#1A1A1A] text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-black leading-tight tracking-tight mb-4"
            style={{ wordBreak: "keep-all" }}
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#444] text-base sm:text-lg md:text-xl"
          >
            진단에서 자립까지, 4단계로 완성됩니다
          </motion.p>
        </div>

        {/* Steps grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative bg-white border border-[#E0E0E0] rounded-2xl p-5 sm:p-6 hover:border-[#666] hover:shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group"
            >
              {/* Step number */}
              <span className="text-[48px] font-black text-[#F0F0F0] absolute top-4 right-4 leading-none select-none group-hover:text-[#E0E0E0] transition-colors duration-500">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#F8F8F8] flex items-center justify-center mb-4 group-hover:bg-[#1A1A1A] transition-colors duration-500">
                <Icon
                  icon={step.icon}
                  width={24}
                  className="text-[#666] group-hover:text-white transition-colors duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">
                {step.title}
              </h3>
              <p className="text-sm font-medium text-[#444] mb-2">
                {step.description}
              </p>
              <p className="text-[13px] text-[#666] leading-relaxed">
                {step.detail}
              </p>

              {/* Connector arrow (desktop, not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <Icon
                    icon="solar:arrow-right-linear"
                    width={16}
                    className="text-[#E0E0E0]"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bot Architecture Visualization ── */}
        <div className="mt-20 max-w-2xl mx-auto">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#1A1A1A] text-lg sm:text-xl md:text-2xl font-black text-center mb-6 sm:mb-8"
            style={{ wordBreak: "keep-all" }}
          >
            그냥 챗봇이 아닙니다. 셀러와 함께 성장하는 AI 직원입니다.
          </motion.h3>

          {/* 3 layers — flex-col-reverse so DOM Layer3→2→1 renders visually 1→2→3 (bottom to top) */}
          <motion.div
            variants={staggerSlow}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col-reverse gap-3"
          >
            {architectureLayers.map((layer) => (
              <motion.div
                key={layer.layer}
                variants={fadeInUp}
                animate={
                  layer.roadmap
                    ? { borderColor: ["rgba(153,153,153,0.4)", "rgba(153,153,153,0.8)", "rgba(153,153,153,0.4)"] }
                    : { boxShadow: ["0 0 0 0 rgba(255,255,255,0)", "0 0 0 1px rgba(255,255,255,0.1)", "0 0 0 0 rgba(255,255,255,0)"] }
                }
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`rounded-xl px-6 py-5 ${
                  layer.roadmap
                    ? "border border-dashed border-[#999] text-[#666]"
                    : "bg-[#1A1A1A] text-white"
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                      layer.roadmap ? "text-[#666]" : "text-white/50"
                    }`}
                  >
                    {layer.layer}층
                  </span>
                  <span
                    className={`font-bold text-sm ${
                      layer.roadmap ? "text-[#666]" : "text-white"
                    }`}
                  >
                    {layer.title}
                  </span>
                  {layer.roadmap && (
                    <Badge variant="coming-soon">로드맵</Badge>
                  )}
                </div>
                <p
                  className={`text-sm ${
                    layer.roadmap ? "text-[#666]" : "text-white/70"
                  }`}
                >
                  {layer.subtitle}
                </p>
                <p
                  className={`text-[13px] mt-1 ${
                    layer.roadmap ? "text-[#666]/70" : "text-white/60"
                  }`}
                >
                  {layer.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#666] text-base text-center mt-6"
            style={{ wordBreak: "keep-all" }}
          >
            일반 챗봇은 세션이 끝나면 잊어버립니다.
            <br className="hidden md:block" />
            메이크그로스 봇은 셀러의 운영 지식을 누적하며 함께 성장합니다.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}
