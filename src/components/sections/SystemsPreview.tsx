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

export function SystemsPreview() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Show top 3 items for preview
  const previewItems = systemItems.slice(0, 3);

  return (
    <SectionWrapper theme="warm-bg" animate={false}>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: supanovaEase }}
        >
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
            Built Systems
          </span>

          <h2 className="text-[#1A1A1A] mb-4">
            직접 만들고, 직접 운영합니다
          </h2>

          <p className="text-[#444444] text-lg mb-10 md:mb-14 max-w-2xl">
            이론이 아닙니다. 메이크그로스가 실제로 구축하고 돌리고 있는 시스템들입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {previewItems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.08 * (index + 1), ease: supanovaEase }}
            >
              <Card variant="light" hover>
                {/* Image placeholder */}
                <div className="bg-[#F5F5F4] rounded-xl flex items-center justify-center h-36 mb-5 -mx-2 -mt-2">
                  <Icon
                    icon={categoryIcons[system.category] || "solar:code-linear"}
                    width={36}
                    className="text-[#666666]"
                  />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={statusConfig[system.status].variant}>
                    {statusConfig[system.status].label}
                  </Badge>
                </div>

                <h3 className="text-[#1A1A1A] text-lg font-semibold mb-2">
                  {system.title}
                </h3>

                <p className="text-[#444444] text-sm leading-relaxed mb-4 line-clamp-2">
                  {system.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {system.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-full px-2 py-0.5 text-[10px] font-medium bg-accent/10 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                  {system.techStack.length > 3 && (
                    <span className="inline-block rounded-full px-2 py-0.5 text-[10px] font-medium bg-[#F5F5F4] text-[#666666]">
                      +{system.techStack.length - 3}
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease: supanovaEase }}
          className="text-center"
        >
          <Button href="/systems" variant="secondary">
            전체 시스템 보기
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
