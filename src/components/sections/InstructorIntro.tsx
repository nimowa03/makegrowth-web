"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function InstructorIntro() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-bg" id="instructor" animate={false}>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: supanovaEase }}
          className="mb-10 md:mb-14"
        >
          {/* Eyebrow pill */}
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
            Founder
          </span>

          <h2 className="text-[#1A1A1A]">대표 소개</h2>
        </motion.div>

        {/* Editorial Split: left photo, right text */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: supanovaEase }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left: Photo placeholder */}
          <div className="rounded-2xl bg-warm-surface aspect-[4/5] max-w-sm mx-auto lg:mx-0 w-full flex items-center justify-center">
            <span className="text-[#666666] text-sm">Photo</span>
          </div>

          {/* Right: Text content */}
          <div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
              메이크그로스 대표
            </h3>
            <p className="text-sm text-accent font-medium mb-6">
              AI Transformation Specialist
            </p>

            <div className="space-y-4 text-[15px] text-[#444444] leading-relaxed mb-8">
              <p>
                이커머스 업계에서 다년간 셀러로 활동하며 직접 체감한
                운영 비효율을 AI로 해결해 온 실전 전문가입니다.
              </p>
              <p>
                직접 구축한 AI 콘텐츠 자동화 시스템으로 SNS 운영 시간을
                83% 이상 절감하고, 이 노하우를 셀러들에게 전수하고 있습니다.
              </p>
              <p className="text-[#1A1A1A] font-medium italic">
                &ldquo;도구를 알려주는 게 아니라, 내 사업에 맞는 시스템을 함께 만듭니다.&rdquo;
              </p>
            </div>

            <Button href="/about">
              자세히 보기
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
