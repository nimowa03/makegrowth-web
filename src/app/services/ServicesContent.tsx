"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { serviceModules } from "@/data/services";
import type { ServiceModule } from "@/data/services";
import { useInView } from "@/hooks/useInView";

/* ─── Icon mapping: lucide keys → Solar Iconify ─── */
const iconMap: Record<string, string> = {
  "share-2": "solar:share-linear",
  image: "solar:gallery-linear",
  bot: "solar:bot-linear",
  "pen-tool": "solar:pen-2-linear",
  "message-circle": "solar:chat-round-dots-linear",
  "bar-chart-3": "solar:chart-2-linear",
};

function getSolarIcon(iconName: string): string {
  return iconMap[iconName] || "solar:bolt-linear";
}

/* ─── Stagger animation variants (Supanova easing) ─── */
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ─── Hero Section (DARK with mesh gradient) ─── */
function HeroSection() {
  return (
    <section
      className="relative text-white min-h-[70vh] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1A1A1A 50%, #0F172A 100%)",
      }}
    >
      {/* Subtle gradient mesh */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          animation: "svc-float 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
          animation: "svc-float 12s ease-in-out infinite 4s",
        }}
      />

      <div className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32 w-full relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-white/20 text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              Services
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[36px] md:text-[52px] lg:text-[64px] font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            외주가 끝나면
            <br />
            시스템도 멈춥니다
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            대행사가 떠나도 멈추지 않는 구조.
            <br className="hidden md:block" />
            직접 굴릴 수 있는 AI 시스템을 만들어 드립니다.
          </motion.p>
        </div>
      </div>

      <style jsx>{`
        @keyframes svc-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.03); }
      `}</style>
    </section>
  );
}

/* ─── Gradient Transition Band ─── */
function GradientBand() {
  return <SectionWrapper theme="gradient-transition" />;
}

/* ─── Killer Module Detail (WARM-BG, editorial split) ─── */
function KillerModuleSection() {
  const killer = serviceModules[0];
  const solarIcon = getSolarIcon(killer.icon);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const pipelineSteps = [
    { label: "트렌드 분석", desc: "카테고리별 실시간 트렌드 자동 수집" },
    { label: "AI 콘텐츠 생성", desc: "글·이미지·영상 콘텐츠 자동 제작" },
    { label: "Repurposing", desc: "1개 콘텐츠를 다채널용으로 자동 변환" },
    { label: "멀티채널 발행", desc: "블로그·인스타·스마트스토어 예약 발행" },
  ];

  return (
    <SectionWrapper theme="warm-bg">
      <div ref={ref} id="sns-automation">
        {/* Eyebrow + Heading */}
        <div className="text-center mb-12">
          <Badge variant="available" className="mb-4">
            운영 중
          </Badge>
          <h2 className="text-[#1A1A1A]">SNS 콘텐츠 자동화</h2>
          <p className="mt-3 text-[#444444] max-w-2xl mx-auto">
            {killer.description}
          </p>
        </div>

        {/* Pipeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
        >
          {pipelineSteps.map((step, i) => (
            <div
              key={step.label}
              className="flex items-center gap-3 md:flex-col md:text-center"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#F0F0F0] flex items-center justify-center shrink-0">
                <span className="text-[#1A1A1A] font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:mt-3">
                <p className="font-semibold text-sm text-[#1A1A1A]">
                  {step.label}
                </p>
                <p className="text-xs text-[#444444] mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Demo GIF slot */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <BrowserMockup
            url="n8n.makegrowth.co/workflow"
            placeholder="N8N 워크플로우 시연 영상"
            subtext="GIF 또는 영상이 들어갈 자리"
            title="SNS 콘텐츠 자동화 파이프라인"
          />
        </motion.div>

        {/* Editorial split: Features + Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card variant="light" innerClassName="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#F0F0F0] flex items-center justify-center">
                  <Icon icon={solarIcon} width={20} className="text-[#666]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">주요 기능</h3>
              </div>
              <ul className="space-y-3">
                {killer.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <Icon
                      icon="solar:check-circle-linear"
                      width={16}
                      className="text-[#059669] shrink-0"
                    />
                    <span className="text-sm text-[#444444]">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card variant="light" innerClassName="p-6">
              <h3 className="text-lg font-bold mb-4 text-[#1A1A1A]">도입 효과</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    icon="solar:clock-circle-linear"
                    width={20}
                    className="text-[#666] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">시간 절감</p>
                    <p className="text-xs text-[#444444]">
                      <span className="line-through">
                        {killer.metrics.timeBefore}
                      </span>
                      {" → "}
                      <span className="font-semibold text-[#1A1A1A]">
                        {killer.metrics.timeAfter}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    icon="solar:dollar-minimalistic-linear"
                    width={20}
                    className="text-[#666] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">비용 절감</p>
                    <p className="text-xs text-[#444444]">
                      <span className="line-through">
                        {killer.metrics.costBefore}
                      </span>
                      {" → "}
                      <span className="font-semibold text-[#1A1A1A]">
                        {killer.metrics.costAfter}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Upcoming Modules (compact list) ─── */
function UpcomingModulesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const upcoming = serviceModules.filter((m) => m.status === "coming-soon");

  return (
    <SectionWrapper theme="warm-surface">
      <div ref={ref}>
        <div className="text-center mb-8">
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
            확장 예정
          </span>
          <h2 className="text-[#1A1A1A] text-[28px] md:text-[36px]">
            준비 중인 모듈
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto space-y-3"
        >
          {upcoming.map((mod: ServiceModule) => (
            <motion.div
              key={mod.id}
              id={mod.id}
              variants={fadeInUp}
              className="flex items-center justify-between py-3 border-b border-[#E0E0E0] last:border-0"
            >
              <div className="flex items-center gap-3">
                <Icon
                  icon={getSolarIcon(mod.icon)}
                  width={18}
                  className="text-[#999]"
                />
                <span className="text-sm font-medium text-[#1A1A1A]">
                  {mod.name}
                </span>
              </div>
              <Badge variant="coming-soon">준비 중</Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

/* ─── CTA Section (WARM-BG with accent-bordered Double-Bezel card) ─── */
function CTASection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-bg">
      <div ref={ref} className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card
            variant="light"
            className="ring-2 ring-[#1A1A1A]/20"
            innerClassName="p-8 md:p-12 text-center"
          >
            <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-6">
              Get Started
            </span>
            <h2 className="text-[#1A1A1A] mb-8">시작하기</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/seminar" variant="primary" size="lg" showArrow>
                웨비나 신청하기
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                문의하기
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Page Composition ─── */
export function ServicesContent() {
  return (
    <>
      <HeroSection />
      <GradientBand />
      <KillerModuleSection />
      <UpcomingModulesSection />
      <SectionWrapper theme="warm-bg">
        <ProcessSteps />
      </SectionWrapper>
      <CTASection />
    </>
  );
}
