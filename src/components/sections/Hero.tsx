"use client";

import { motion } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Button } from "@/components/ui/Button";
import { heroPainPoints, heroResolution } from "@/data/painPoints";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 40%, rgba(139,124,246,0.12), transparent),
          radial-gradient(ellipse 60% 80% at 80% 60%, rgba(139,124,246,0.06), transparent),
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
        >
          {/* Eyebrow pill */}
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-6">
            AI Transformation
          </span>

          {/* H1 */}
          <h1 className="font-display text-[32px] md:text-[48px] font-bold text-white leading-snug tracking-tight max-w-2xl mb-6">
            AI로 매출을 만드는
            <br />
            셀러는 다릅니다
          </h1>
        </motion.div>

        {/* Typewriter cycling pain points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: supanovaEase }}
          className="mb-10"
        >
          <TypewriterText
            texts={heroPainPoints}
            resolution={heroResolution}
            className="max-w-xl"
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          id="hero-cta"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.5, ease: supanovaEase }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/seminar" size="lg" showArrow>
            세미나 신청하기
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="lg"
            className="text-white/70 border-white/10 hover:border-accent/30 hover:bg-accent/10 hover:text-white"
          >
            서비스 살펴보기
          </Button>
        </motion.div>
      </div>

    </section>
  );
}
