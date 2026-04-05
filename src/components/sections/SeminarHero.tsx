"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";
import { currentSeminar } from "@/data/seminars";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function SeminarHero() {
  const seatsRemaining =
    currentSeminar.maxParticipants - currentSeminar.currentParticipants;

  return (
    <section
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 40%, rgba(139,124,246,0.15), transparent),
          radial-gradient(ellipse 60% 80% at 80% 60%, rgba(139,124,246,0.08), transparent),
          radial-gradient(ellipse 100% 100% at 50% 0%, rgba(41,37,36,0.5), transparent),
          #171717
        `,
      }}
    >
      {/* Floating orb 1 */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full top-[-100px] right-[-50px] pointer-events-none"
        style={{
          background: "rgba(139, 124, 246, 0.12)",
          filter: "blur(60px)",
          animation: "seminar-hero-float 8s ease-in-out infinite",
        }}
      />

      {/* Floating orb 2 */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full bottom-[-80px] left-[-30px] pointer-events-none"
        style={{
          background: "rgba(139, 124, 246, 0.08)",
          filter: "blur(60px)",
          animation: "seminar-hero-float 8s ease-in-out infinite -3s",
        }}
      />

      {/* Content */}
      <div className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: supanovaEase }}
        >
          {/* Eyebrow pill badge */}
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-6">
            AX Seminar
          </span>

          {/* H1 */}
          <h1 className="font-display text-[32px] md:text-[48px] font-bold text-white leading-snug tracking-tight max-w-3xl mb-6 text-balance">
            하루 만에 완성하는
            <br />
            <span className="bg-gradient-to-r from-[#8B7CF6] to-[#A78BFA] bg-clip-text text-transparent">
              AI SNS 자동화 시스템
            </span>
          </h1>

          {/* Sub copy */}
          <p className="text-[#A8A29E] text-base md:text-lg max-w-xl mb-8 leading-relaxed break-keep">
            내 상품, 내 카테고리에 맞는 AI 콘텐츠 자동화 파이프라인을
            직접 구축하고 가져가는 원데이 실습 세미나
          </p>
        </motion.div>

        {/* Info pills */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2, ease: supanovaEase }}
          className="flex flex-wrap gap-3 mb-10"
        >
          <div className="flex items-center gap-1.5 text-sm text-[#A8A29E] bg-white/5 ring-1 ring-white/10 px-3 py-1.5 rounded-full">
            <Icon icon="solar:calendar-linear" width={16} className="text-accent" />
            <span>{currentSeminar.date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[#A8A29E] bg-white/5 ring-1 ring-white/10 px-3 py-1.5 rounded-full">
            <Icon icon="solar:clock-circle-linear" width={16} className="text-accent" />
            <span>{currentSeminar.time}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[#A8A29E] bg-white/5 ring-1 ring-white/10 px-3 py-1.5 rounded-full">
            <Icon icon="solar:map-point-linear" width={16} className="text-accent" />
            <span>{currentSeminar.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[#A8A29E] bg-white/5 ring-1 ring-white/10 px-3 py-1.5 rounded-full">
            <Icon icon="solar:users-group-rounded-linear" width={16} className="text-accent" />
            <span>
              잔여 {seatsRemaining}석 / {currentSeminar.maxParticipants}석
            </span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          id="hero-cta"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.4, ease: supanovaEase }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/seminar" size="lg" showArrow>
            세미나 신청하기
          </Button>
          <Button
            href="#curriculum"
            variant="secondary"
            size="lg"
            className="text-white/70 border-white/10 hover:border-accent/30 hover:bg-accent/10 hover:text-white"
          >
            커리큘럼 보기
          </Button>
        </motion.div>
      </div>

      {/* Float keyframes */}
      <style jsx global>{`
        @keyframes seminar-hero-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }
      `}</style>
    </section>
  );
}
