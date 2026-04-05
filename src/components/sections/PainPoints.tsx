"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { painPointStats } from "@/data/painPoints";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function PainPoints() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-surface" animate={false}>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: supanovaEase }}
        >
          {/* Eyebrow pill */}
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
            Market Reality
          </span>

          {/* Heading */}
          <h2 className="text-[#1A1A1A] mb-10 md:mb-14">
            100만 명이 폐업하는 시대
          </h2>
        </motion.div>

        {/* Stat cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {painPointStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.6,
                delay: 0.12 * index,
                ease: supanovaEase,
              }}
            >
              <Card variant="light" hover>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-accent mb-3">
                    {stat.number}
                  </p>
                  <p className="text-[#444444] text-sm md:text-base mb-4 leading-relaxed">
                    {stat.label}
                  </p>
                  <Badge
                    variant="custom"
                    className="bg-[#1C1917]/5 text-[#666666]"
                  >
                    {stat.source}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: supanovaEase }}
          className="text-center"
        >
          <p className="text-accent font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            &ldquo;문제는 AI가 없는 게 아닙니다.
            <br className="hidden sm:block" />
            AI를 내 체질로 만들지 못하는 겁니다.&rdquo;
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
