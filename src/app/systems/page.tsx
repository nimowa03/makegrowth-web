"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { systemItems } from "@/data/systems";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

const statusConfig = {
  live: { label: "운영 중", variant: "available" as const },
  "design-complete": { label: "설계 완료", variant: "coming-soon" as const },
  development: { label: "개발 중", variant: "coming-soon" as const },
};

const categoryIcons: Record<string, string> = {
  "콘텐츠 자동화": "solar:document-text-linear",
  "이미지 생성": "solar:gallery-wide-linear",
  "업무 자동화": "solar:settings-linear",
};

export default function SystemsPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });
  const { ref: ctaRef, isInView: ctaInView } = useInView({ threshold: 0.1 });

  return (
    <>
      {/* Hero — Dark */}
      <SectionWrapper theme="dark" animate={false}>
        <div ref={heroRef} className="relative overflow-hidden">
          {/* Clean white bg - no gradient orbs */}

          <div className="relative text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={heroInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, ease: supanovaEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] mb-6">
                <span className="text-[#999]">●</span>
                Built Systems
              </span>
            </motion.div>

            <motion.h1
              className="text-[#1A1A1A] mb-6"
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={heroInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: supanovaEase }}
            >
              직접 만들고,{" "}
              직접 운영합니다
            </motion.h1>

            <motion.p
              className="text-[#666666] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={heroInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: supanovaEase }}
            >
              이론이 아닌 실전. 메이크그로스 대표가 직접 구축하고 운영 중인 시스템입니다.
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      {/* Gradient transition */}
      <SectionWrapper theme="gradient-transition" />

      {/* Systems Grid */}
      <SectionWrapper theme="warm-bg" animate={false}>
        <div ref={gridRef}>
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={gridInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: supanovaEase }}
            className="mb-12"
          >
            <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
              Works
            </span>
            <h2 className="text-[#1A1A1A]">Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {systemItems.map((system, index) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={gridInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.7, delay: 0.1 * (index + 1), ease: supanovaEase }}
              >
                <Card variant="light" hover>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Image placeholder — left 2 cols */}
                    <div className="lg:col-span-2 bg-[#F5F5F4] rounded-xl flex items-center justify-center min-h-[200px]">
                      <Icon
                        icon={categoryIcons[system.category] || "solar:code-linear"}
                        width={48}
                        className="text-[#666666]"
                      />
                    </div>

                    {/* Content — right 3 cols */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={statusConfig[system.status].variant}>
                          {statusConfig[system.status].label}
                        </Badge>
                        <span className="text-xs text-[#666666]">{system.category}</span>
                      </div>

                      <h3 className="text-[#1A1A1A] mb-3">{system.title}</h3>
                      <p className="text-[#444444] text-sm leading-relaxed mb-5">
                        {system.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {system.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-[#F5F5F4] text-[#444444]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {system.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium border border-[#E0E0E0] text-[#666] bg-transparent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper theme="warm-surface" animate={false}>
        <div ref={ctaRef}>
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={ctaInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: supanovaEase }}
          >
            <Card variant="light" hover={false}>
              <div className="text-center py-6 md:py-10">
                <h2 className="text-[#1A1A1A] mb-4">
                  이 시스템을, 당신의 비즈니스에 맞게
                </h2>
                <p className="text-[#444444] text-lg mb-8 max-w-xl mx-auto">
                  웨비나에서 직접 만들고 가져가세요.
                  내 상품, 내 카테고리에 맞는 AI 시스템이 어떻게 만들어지는지 보여드립니다.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button href="/seminar" showArrow>
                    웨비나 알아보기
                  </Button>
                  <Button href="/contact" variant="secondary">
                    문의하기
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
