"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Pricing } from "@/components/sections/Pricing";
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
    <section className="relative bg-warm-dark text-white min-h-[70vh] flex items-center overflow-hidden">
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(139, 124, 246, 0.15), transparent)",
            "radial-gradient(ellipse 60% 80% at 80% 60%, rgba(139, 124, 246, 0.08), transparent)",
            "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(41, 37, 36, 0.5), transparent)",
          ].join(", "),
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute -top-[100px] -right-[50px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "rgba(139, 124, 246, 0.12)",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-[80px] -left-[30px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "rgba(139, 124, 246, 0.08)",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite -3s",
        }}
      />

      <div className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32 w-full relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-6">
              Services
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-white mb-5"
          >
            AI로 이커머스의 본질에 집중하세요
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#A8A29E] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            반복 업무를 AI에게 맡기고, 셀러는 상품 기획·고객 관계·브랜드 성장에
            집중하세요. 메이크그로스는 &quot;대신 해주는 대행&quot;이 아니라 &quot;스스로
            할 수 있게 만드는 전환&quot;을 돕습니다.
          </motion.p>
        </div>
      </div>

      {/* Float keyframes injected via style tag */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
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
      <div ref={ref}>
        {/* Eyebrow + Heading */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
            Killer Module
          </span>
          <Badge variant="available" className="ml-2 mb-4">
            지금 바로 시작 가능
          </Badge>
          <h2 className="text-[#1C1917]">SNS 콘텐츠 자동화</h2>
          <p className="mt-3 text-[#57534E] max-w-2xl mx-auto">
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
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <span className="text-accent font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:mt-3">
                <p className="font-semibold text-sm text-[#1C1917]">
                  {step.label}
                </p>
                <p className="text-xs text-[#57534E] mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
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
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon icon={solarIcon} width={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-[#1C1917]">주요 기능</h3>
              </div>
              <ul className="space-y-3">
                {killer.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <Icon
                      icon="solar:check-circle-linear"
                      width={16}
                      className="text-[#059669] shrink-0"
                    />
                    <span className="text-sm text-[#57534E]">{feature}</span>
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
              <h3 className="text-lg font-bold mb-4 text-[#1C1917]">도입 효과</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    icon="solar:clock-circle-linear"
                    width={20}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#1C1917]">시간 절감</p>
                    <p className="text-xs text-[#57534E]">
                      <span className="line-through">
                        {killer.metrics.timeBefore}
                      </span>
                      {" → "}
                      <span className="font-semibold text-accent">
                        {killer.metrics.timeAfter}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    icon="solar:dollar-minimalistic-linear"
                    width={20}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#1C1917]">비용 절감</p>
                    <p className="text-xs text-[#57534E]">
                      <span className="line-through">
                        {killer.metrics.costBefore}
                      </span>
                      {" → "}
                      <span className="font-semibold text-accent">
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

/* ─── Module Grid (WARM-SURFACE, Bento layout) ─── */
function ModuleGridSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-surface">
      <div ref={ref}>
        <div className="text-center mb-12">
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
            Modules
          </span>
          <h2 className="text-[#1C1917]">AI 서비스 모듈</h2>
          <p className="mt-3 text-[#57534E] max-w-lg mx-auto">
            비즈니스 영역별 AI 자동화 모듈을 조합하여 최적의 워크플로를 구성합니다
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            gridTemplateRows: "auto auto",
          }}
        >
          {serviceModules.map((mod: ServiceModule, index: number) => {
            const solarIcon = getSolarIcon(mod.icon);
            /* Bento: alternate row spans — first 2 items col-span-1 in first row,
               then items alternate between 2+1 / 1+2 layout on larger screens */
            const bentoClass =
              index < 2
                ? "md:col-span-1"
                : index === 2
                  ? "md:col-span-1 lg:col-span-1"
                  : index === 3
                    ? "md:col-span-2 lg:col-span-2"
                    : index === 4
                      ? "md:col-span-1 lg:col-span-1"
                      : "md:col-span-2 lg:col-span-3";

            return (
              <motion.div
                key={mod.id}
                variants={fadeInUp}
                className={bentoClass}
              >
                <Card variant="light" hover innerClassName="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon icon={solarIcon} width={22} className="text-accent" />
                    </div>
                    <Badge
                      variant={
                        mod.status === "available" ? "available" : "coming-soon"
                      }
                    >
                      {mod.status === "available" ? "이용 가능" : "Coming Soon"}
                    </Badge>
                  </div>
                  <h3 className="text-base font-bold mb-2 text-[#1C1917]">
                    {mod.name}
                  </h3>
                  <p className="text-sm text-[#57534E] mb-4 flex-1">
                    {mod.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {mod.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-full bg-warm-surface text-[#57534E]"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
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
            className="ring-2 ring-accent/30"
            innerClassName="p-8 md:p-12 text-center"
          >
            <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-6">
              Get Started
            </span>
            <h2 className="text-[#1C1917] mb-4">지금 시작하세요</h2>
            <p className="text-[#57534E] max-w-lg mx-auto mb-8 leading-relaxed">
              AI 전환으로 이커머스 운영의 효율을 극대화하세요. 무료 상담을 통해
              비즈니스에 맞는 최적의 방법을 찾아드립니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" showArrow>
                무료 상담 신청
              </Button>
              <Button href="/seminar" variant="secondary" size="lg">
                세미나 알아보기
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
      <ModuleGridSection />
      <SectionWrapper theme="warm-bg">
        <ProcessSteps />
      </SectionWrapper>
      <SectionWrapper theme="warm-surface">
        <Pricing />
      </SectionWrapper>
      <CTASection />
    </>
  );
}
