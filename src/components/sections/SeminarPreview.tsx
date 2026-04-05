"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Counter } from "@/components/ui/Counter";
import { Button } from "@/components/ui/Button";
import { currentSeminar, seminarCounters } from "@/data/seminars";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function SeminarPreview() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const formattedPrice = new Intl.NumberFormat("ko-KR").format(
    currentSeminar.price
  );

  const seatsLeft =
    currentSeminar.maxParticipants - currentSeminar.currentParticipants;

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
            Upcoming Seminar
          </span>

          <h2 className="text-[#1A1A1A] mb-10 md:mb-14">
            다음 세미나
          </h2>
        </motion.div>

        {/* Single full-width Double-Bezel card */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: supanovaEase }}
        >
          <Card variant="light" hover>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Seminar info — left 3 cols */}
              <div className="lg:col-span-3">
                <h3 className="text-[#1A1A1A] text-lg md:text-xl font-semibold mb-6">
                  {currentSeminar.title}
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Icon icon="solar:calendar-linear" width={20} className="text-accent flex-shrink-0" />
                    <span className="text-[#444444] text-sm">
                      {currentSeminar.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon icon="solar:clock-circle-linear" width={20} className="text-accent flex-shrink-0" />
                    <span className="text-[#444444] text-sm">
                      {currentSeminar.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon icon="solar:map-point-linear" width={20} className="text-accent flex-shrink-0" />
                    <span className="text-[#444444] text-sm">
                      {currentSeminar.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon icon="solar:users-group-rounded-linear" width={20} className="text-accent flex-shrink-0" />
                    <span className="text-[#444444] text-sm">
                      정원 {currentSeminar.maxParticipants}명 (잔여 {seatsLeft}석)
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[rgba(0,0,0,0.08)]">
                  <p className="text-2xl font-bold text-[#1A1A1A]" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {formattedPrice}원
                  </p>
                  <Button href="/seminar" showArrow>
                    세미나 신청하기
                  </Button>
                </div>
              </div>

              {/* Counters — right 2 cols */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <p className="text-sm font-semibold text-[#666666] uppercase tracking-wider mb-6">
                  세미나 성과
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {seminarCounters.map((counter) => (
                    <Counter
                      key={counter.label}
                      end={counter.value}
                      suffix={counter.suffix}
                      label={counter.label}
                      className="text-center"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
