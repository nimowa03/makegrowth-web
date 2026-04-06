"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { systemItems } from "@/data/systems";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function SystemsPreview() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // 킬러 서비스 2개만
  const topSystems = systemItems.slice(0, 2);

  return (
    <SectionWrapper theme="warm-bg" animate={false}>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: supanovaEase }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-[#1A1A1A] mb-4">
            직접 만들고, 직접 운영합니다
          </h2>

          <p className="text-[#999] text-lg max-w-xl">
            이론이 아닙니다. 실제로 돌아가는 시스템입니다.
          </p>
        </motion.div>

        {/* 킬러 서비스 2개 — 심플 리스트 */}
        <div className="space-y-0">
          {topSystems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.1 * (index + 1), ease: supanovaEase }}
              className="py-10 md:py-14 border-t border-[#E0E0E0] last:border-b"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
                {/* 좌: 번호 + 제목 */}
                <div>
                  <span className="text-[60px] md:text-[80px] font-black text-[#E0E0E0] leading-none block mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[#1A1A1A] text-2xl md:text-3xl font-bold">
                    {system.title}
                  </h3>
                </div>

                {/* 우: 설명 + 기술스택 */}
                <div className="lg:pt-20">
                  <p className="text-[#666] text-base md:text-lg leading-relaxed mb-6">
                    {system.description}
                  </p>

                  {/* 기술 스택 */}
                  <div className="flex flex-wrap gap-2">
                    {system.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-full px-3 py-1 text-xs font-medium border border-[#E0E0E0] text-[#666]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 시연 영상 자리 — GIF/MP4 준비되면 교체 */}
        {/*
        <motion.div className="mt-16 md:mt-20">
          <div className="aspect-video rounded-2xl overflow-hidden bg-[#F5F5F5] border border-[#E0E0E0]">
            <video src="/demo.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>
        </motion.div>
        */}
      </div>
    </SectionWrapper>
  );
}
