"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { currentSeminar } from "@/data/seminars";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function SeminarHero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F172A 0%, #1A1A1A 50%, #0F172A 100%)",
      }}
    >
      {/* Subtle gradient mesh */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          animation: "seminar-hero-float 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
          animation: "seminar-hero-float 12s ease-in-out infinite 4s",
        }}
      />

      {/* Content */}
      <div className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: supanovaEase }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-white/20 text-white/70 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
            무료 웨비나 · 사전 등록 중
          </span>

          {/* H1 */}
          <h1 className="font-display text-[36px] md:text-[52px] lg:text-[64px] font-black text-white leading-[1.05] tracking-tight mb-6">
            AI 셀러 비서 봇
            <br />
            라이브 시연 웨비나
          </h1>

          {/* Sub copy */}
          <p className="text-white/60 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            실제 쿠팡 매출 조회, 경쟁사 가격 모니터링, 자동 리포트까지.
            내 사업에 맞는 AI 비서 봇을 눈앞에서 보여드립니다.
          </p>
        </motion.div>

        {/* Info pills */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2, ease: supanovaEase }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {[
            { icon: "solar:calendar-linear", text: "2026 하반기 예정" },
            { icon: "solar:clock-circle-linear", text: currentSeminar.time },
            { icon: "solar:monitor-linear", text: currentSeminar.location },
            { icon: "solar:users-group-rounded-linear", text: "소규모 10명 제한" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-sm text-white/50 bg-white/[0.06] ring-1 ring-white/10 px-4 py-2 rounded-full"
            >
              <Icon icon={item.icon} width={16} className="text-white/40" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          id="hero-cta"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.4, ease: supanovaEase }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <MagneticButton>
            <Button
              href="#faq"
              size="lg"
              showArrow
              className="bg-white text-[#1A1A1A] hover:bg-white/90 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
            >
              사전 등록하기
            </Button>
          </MagneticButton>
          <Button
            href="#curriculum"
            variant="secondary"
            size="lg"
            className="text-white/70 border-white/20 hover:border-white/40 hover:bg-white/[0.06] hover:text-white"
          >
            커리큘럼 보기
          </Button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes seminar-hero-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.03); }
        }
      `}</style>
    </section>
  );
}
