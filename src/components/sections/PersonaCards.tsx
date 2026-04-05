"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { seminarPersonas } from "@/data/seminars";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function PersonaCards() {
  return (
    <SectionWrapper theme="warm-surface" id="persona-cards">
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
          Who Is This For
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A1A1A] leading-snug text-balance">
          이런 분을 위한 세미나입니다
        </h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {seminarPersonas.map((persona, index) => (
          <motion.div
            key={persona.title}
            initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: supanovaEase,
            }}
          >
            <Card variant="light" hover innerClassName="!p-5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  <Icon icon="solar:check-circle-bold" width={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-1">
                    {persona.title}
                  </h3>
                  <p className="text-sm text-[#444444] leading-relaxed break-keep">
                    {persona.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
