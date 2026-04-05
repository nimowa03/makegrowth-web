"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { serviceModules } from "@/data/services";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function KillerModule() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const snsModule = serviceModules[0];
  const imageModule = serviceModules[1];

  return (
    <SectionWrapper theme="warm-surface" animate={false}>
      <div ref={ref}>
        {/* Editorial Split: left text, right visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: supanovaEase }}
          >
            {/* Eyebrow pill */}
            <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
              Killer Module
            </span>

            {/* Heading */}
            <h2 className="text-[#1C1917] mb-4">
              SNS 콘텐츠 자동화
            </h2>

            {/* Description */}
            <p className="text-[#57534E] text-base md:text-lg mb-8 leading-relaxed">
              {snsModule.description}
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {snsModule.features.map((feature, index) => (
                <div key={feature} className="flex items-center gap-2">
                  <span className="bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-medium">
                    {feature}
                  </span>
                  {index < snsModule.features.length - 1 && (
                    <Icon
                      icon="solar:arrow-right-linear"
                      width={16}
                      className="text-[#A8A29E] hidden sm:block"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button href="/services">
              모든 서비스 살펴보기
            </Button>
          </motion.div>

          {/* Right: Visual cards */}
          <div className="space-y-6">
            {/* Metrics card */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: supanovaEase }}
            >
              <Card variant="light" hover>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Time metric */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon icon="solar:clock-circle-linear" width={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#A8A29E] mb-1">소요 시간</p>
                      <p className="text-sm text-[#DC2626] line-through mb-0.5">
                        Before: {snsModule.metrics.timeBefore}
                      </p>
                      <p className="text-sm text-[#059669] font-semibold">
                        After: {snsModule.metrics.timeAfter}
                      </p>
                    </div>
                  </div>

                  {/* Cost metric */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon icon="solar:dollar-minimalistic-linear" width={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#A8A29E] mb-1">비용</p>
                      <p className="text-sm text-[#DC2626] line-through mb-0.5">
                        Before: {snsModule.metrics.costBefore}
                      </p>
                      <p className="text-sm text-[#059669] font-semibold">
                        After: {snsModule.metrics.costAfter}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* AI Image Studio - Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: supanovaEase }}
            >
              <Card variant="light">
                <div>
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <h3 className="text-[#1C1917] text-lg font-semibold">
                      {imageModule.name}
                    </h3>
                    <Badge variant="coming-soon">Coming Soon</Badge>
                  </div>
                  <p className="text-[#57534E] text-sm mb-4 leading-relaxed">
                    {imageModule.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {imageModule.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-block px-3 py-1 bg-[#1C1917]/5 text-[#57534E] rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-5 border-t border-[rgba(28,25,23,0.06)]">
                    <div>
                      <p className="text-xs text-[#A8A29E] mb-0.5">시간</p>
                      <p className="text-xs text-[#DC2626] line-through">{imageModule.metrics.timeBefore}</p>
                      <p className="text-xs text-[#059669] font-semibold">{imageModule.metrics.timeAfter}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#A8A29E] mb-0.5">비용</p>
                      <p className="text-xs text-[#DC2626] line-through">{imageModule.metrics.costBefore}</p>
                      <p className="text-xs text-[#059669] font-semibold">{imageModule.metrics.costAfter}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
