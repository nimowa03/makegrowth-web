"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { beforeAfterItems } from "@/data/services";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function BeforeAfter() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-bg" id="before-after" animate={false}>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: supanovaEase }}
          className="text-center mb-10 md:mb-14"
        >
          {/* Eyebrow pill */}
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
            Before &amp; After
          </span>

          {/* Heading */}
          <h2 className="text-[#1A1A1A]">
            외주비 91%, 시간 83% 절감
          </h2>
        </motion.div>

        {/* Comparison wrapped in Double-Bezel card */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: supanovaEase }}
          className="max-w-3xl mx-auto"
        >
          <Card variant="light">
            <div className="space-y-0">
              {beforeAfterItems.map((item, index) => (
                <div
                  key={item.category}
                  className={`py-5 ${
                    index < beforeAfterItems.length - 1
                      ? "border-b border-[rgba(0,0,0,0.08)]"
                      : ""
                  }`}
                >
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                    {item.category}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex-1">
                      <p className="text-sm text-[#DC2626] line-through">
                        {item.before}
                      </p>
                    </div>
                    <Icon
                      icon="solar:arrow-right-linear"
                      width={16}
                      className="text-[#666666] shrink-0 hidden sm:block"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-[#059669] font-medium">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
