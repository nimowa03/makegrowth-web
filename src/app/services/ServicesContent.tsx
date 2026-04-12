"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { ChatSimulation } from "@/components/ui/ChatSimulation";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { Modules } from "@/components/sections/Modules";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { HomePricing } from "@/components/sections/HomePricing";
import { useInView } from "@/hooks/useInView";
import { heroScenarios } from "@/data/botDemo";
import { serviceModules } from "@/data/services";

/* ─── Icon mapping ─── */
const iconMap: Record<string, string> = {
  "share-2": "solar:share-linear",
  image: "solar:gallery-linear",
  bot: "solar:chat-round-dots-linear",
  "pen-tool": "solar:pen-2-linear",
  "message-circle": "solar:chat-round-dots-linear",
  "bar-chart-3": "solar:chart-2-linear",
};

function getSolarIcon(iconName: string): string {
  return iconMap[iconName] || "solar:bolt-linear";
}

import { supanovaEase } from "@/lib/motionVariants";

/* ─── Section 1: Hero — Core Product ─── */
function HeroSection() {
  return (
    <section
      className="relative text-white min-h-[70vh] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1A1A1A 50%, #0F172A 100%)",
      }}
    >
      <div
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          animation: "svc-float 12s ease-in-out infinite",
        }}
      />

      <div className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: supanovaEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-white/20 text-white/70 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                Core Product
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1, ease: supanovaEase }}
              className="font-display text-[36px] md:text-[52px] lg:text-[64px] font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              이커머스 셀러 전용
              <br />
              AI 직원
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.2, ease: supanovaEase }}
              className="text-white/60 text-base md:text-lg max-w-md leading-relaxed mb-8"
            >
              텔레그램·디스코드·슬랙에서 매출 조회, 경쟁사 모니터링, 리포트 자동 생성까지. 기본 기능은 구축 즉시 사용 가능합니다.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: supanovaEase }}
              className="flex gap-3"
            >
              <MagneticButton>
                <Button href="/diagnosis" className="bg-white text-[#1A1A1A] hover:bg-white/90" size="lg" showArrow>
                  내 루틴 무료 진단하기
                </Button>
              </MagneticButton>
              <Button href="/payment" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10">
                바로 결제하기
              </Button>
            </motion.div>
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.3, ease: supanovaEase }}
            className="flex justify-center"
          >
            <PhoneMockup className="w-[280px] md:w-[300px]">
              <ChatSimulation
                messages={heroScenarios[0].messages}
                autoPlay
                loop
              />
            </PhoneMockup>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes svc-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.03); }
        }
      `}</style>
    </section>
  );
}

/* ─── Demo Video Slot ─── */
const HAS_SERVICE_DEMO = false;

function ServiceDemoVideo() {
  if (!HAS_SERVICE_DEMO) return null;

  return (
    <section className="py-12 md:py-16 px-6 md:px-8" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 50%, #F0F0F0 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-[#1A1A1A] text-center text-lg md:text-xl font-bold mb-2">
          실제 AI 직원의 작동 시연 영상입니다
        </p>
        <p className="text-[#666] text-center text-base mb-8">
          메신저에서 한 줄이면 매출 조회, 리포트, 경쟁사 모니터링까지 — 직접 확인하세요
        </p>
        <BrowserMockup
          videoSrc="/videos/service-demo.mp4"
          clickToPlay
          url="makegrowth.dev"
        />
      </div>
    </section>
  );
}

/* ─── Section 5: Portfolio / Case Studies ─── */
function PortfolioSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const killer = serviceModules.find((m) => m.id === "sns-automation");

  if (!killer) return null;

  return (
    <SectionWrapper theme="warm-bg">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
            구축 사례
          </span>
          <h2 className="text-[#1A1A1A] text-[28px] md:text-[40px] font-black">
            이런 시스템을 만들어드렸습니다
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: supanovaEase }}
        >
          <TiltCard tiltAmount={4}>
            <div className="border border-[#E0E0E0] rounded-2xl p-6 md:p-8 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="available">운영 중</Badge>
                <span className="text-sm font-bold text-[#1A1A1A]">{killer.name}</span>
              </div>
              <p className="text-sm text-[#666] mb-6">{killer.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F8F8F8] rounded-xl p-4">
                  <p className="text-xs text-[#999] mb-1">시간 절감</p>
                  <p className="text-sm">
                    <span className="line-through text-[#999]">{killer.metrics.timeBefore}</span>
                    {" → "}
                    <span className="font-bold text-[#1A1A1A]">{killer.metrics.timeAfter}</span>
                  </p>
                </div>
                <div className="bg-[#F8F8F8] rounded-xl p-4">
                  <p className="text-xs text-[#999] mb-1">비용 절감</p>
                  <p className="text-sm">
                    <span className="line-through text-[#999]">{killer.metrics.costBefore}</span>
                    {" → "}
                    <span className="font-bold text-[#1A1A1A]">{killer.metrics.costAfter}</span>
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-surface">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: supanovaEase }}
          className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-white font-black text-2xl md:text-3xl mb-4">
            AI 직원, 직접 확인하세요
          </h2>
          <p className="text-white/70 text-sm mb-8">
            무료 웨비나에서 실제 봇을 라이브 시연합니다
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <Button href="/diagnosis" className="bg-white text-[#1A1A1A] hover:bg-white/90" size="lg" showArrow>
                내 루틴 무료 진단하기
              </Button>
            </MagneticButton>
            <Button href="/payment" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10">
              바로 결제하기
            </Button>
          </div>
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
      <ServiceDemoVideo />
      <Modules />
      <HowItWorks />
      <HomePricing />
      <PortfolioSection />
      <CTASection />
    </>
  );
}
