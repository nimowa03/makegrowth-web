"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TextReveal } from "@/components/ui/TextReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import { pricingTiers, monthlyPlan } from "@/data/services";

const tierIcons = [
  "solar:monitor-linear",
  "solar:users-group-rounded-linear",
  "solar:settings-linear",
];

const tierCTA = [
  { label: "봇 시작하기", href: "/contact" },
  { label: "맞춤 문의", href: "/contact" },
  { label: "웨비나 참가", href: "/seminar" },
];

const beforeAfterRows = [
  { label: "매출 확인", before: "판매자센터 3개 로그인", after: "\"오늘 매출\" 한 줄" },
  { label: "경쟁사 모니터링", before: "매일 수동 체크 30분", after: "자동 알림 (0분)" },
  { label: "일일 리포트", before: "엑셀 정리 1시간", after: "매일 아침 자동 발송" },
  { label: "CS 응대", before: "알바 월 80~150만원", after: "1차 자동 응답" },
  { label: "SNS 콘텐츠", before: "대행 월 100~200만원", after: "봇에게 \"만들어줘\"" },
  { label: "재고 관리", before: "수동 확인, 놓치면 품절", after: "자동 알림 + 발주 제안" },
];

export function HomePricing() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper id="pricing" theme="warm-surface" animate={false}>
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Bridge */}
        <p className="text-[#666] text-base text-center mb-4">
          알바 한 명 월 200만원, AI 직원은?
        </p>

        {/* Header */}
        <div className="text-center mb-10">
          <TextReveal
            text="AI 직원, 이렇게 고용합니다"
            tag="h2"
            className="text-[#1A1A1A] text-[28px] md:text-[40px] lg:text-[48px] font-black leading-tight tracking-tight mb-4"
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#444] text-lg md:text-xl"
          >
            월 5~10만원으로 시작하고, 필요할 때 확장하세요
          </motion.p>
        </div>

        {/* ── Before/After Comparison Table ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-14"
        >
          {/* Table header */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-[1fr_1fr_1fr] gap-2 mb-3"
          >
            <div className="px-4 py-2">
              <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#666]">
                항목
              </span>
            </div>
            <div className="px-4 py-2 bg-[#F5F5F5] rounded-t-lg">
              <span className="text-xs uppercase tracking-[0.15em] font-bold text-[#666]">
                AI 비서 없이
              </span>
            </div>
            <div className="px-4 py-2 bg-white rounded-t-lg border border-[#E0E0E0] border-b-0">
              <span className="text-xs uppercase tracking-[0.15em] font-bold text-[#1A1A1A]">
                AI 비서 도입 후
              </span>
            </div>
          </motion.div>

          {/* Table rows */}
          {beforeAfterRows.map((row, i) => (
            <motion.div
              key={row.label}
              variants={fadeInUp}
              className="grid grid-cols-[1fr_1fr_1fr] gap-2 mb-1.5"
            >
              <div className="px-4 py-3.5 flex items-center">
                <span className="text-base font-semibold text-[#1A1A1A]">
                  {row.label}
                </span>
              </div>
              <div className={`px-4 py-3.5 bg-[#F5F5F5] flex items-center ${i === beforeAfterRows.length - 1 ? "rounded-b-lg" : ""}`}>
                <span className="text-base text-[#666]">{row.before}</span>
              </div>
              <div className={`px-4 py-3.5 bg-white border-x border-[#E0E0E0] flex items-center ${i === beforeAfterRows.length - 1 ? "rounded-b-lg border-b" : ""}`}>
                <span className="text-base text-[#1A1A1A] font-bold">
                  {row.after}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {pricingTiers.map((tier, i) => (
            <motion.div key={tier.name} variants={fadeInUp}>
              <TiltCard tiltAmount={4}>
                <div
                  className={`rounded-2xl p-6 h-full flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    tier.highlight
                      ? "bg-[#1A1A1A] text-white border border-[#1A1A1A]"
                      : "bg-white border border-[#E0E0E0] hover:border-[#666]"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                      tier.highlight ? "bg-white/10" : "bg-[#F8F8F8]"
                    }`}
                  >
                    <Icon
                      icon={tierIcons[i]}
                      width={22}
                      className={tier.highlight ? "text-white/80" : "text-[#666]"}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
                  <p
                    className={`text-sm mb-4 ${
                      tier.highlight ? "text-white/60" : "text-[#666]"
                    }`}
                  >
                    {tier.target}
                  </p>

                  {/* Price */}
                  <p className="text-2xl font-black mb-4">{tier.price}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {[tier.format, tier.duration, tier.includes].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Icon
                          icon="solar:check-circle-linear"
                          width={16}
                          className={`mt-0.5 shrink-0 ${
                            tier.highlight ? "text-white/50" : "text-[#666]"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            tier.highlight ? "text-white/80" : "text-[#666]"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {tier.highlight ? (
                    <MagneticButton>
                      <Button
                        href={tierCTA[i].href}
                        className="w-full bg-white text-[#1A1A1A] hover:bg-white/90"
                      >
                        {tierCTA[i].label}
                      </Button>
                    </MagneticButton>
                  ) : (
                    <Button
                      href={tierCTA[i].href}
                      variant="secondary"
                      className="w-full"
                    >
                      {tierCTA[i].label}
                    </Button>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Monthly plan addon */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#F8F8F8] border border-[#E0E0E0] rounded-2xl px-8 py-6 text-center"
        >
          <p className="text-[#1A1A1A] font-bold text-lg mb-1">
            + {monthlyPlan.name}: {monthlyPlan.price}
          </p>
          <p className="text-[#666] text-sm">{monthlyPlan.description}</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
