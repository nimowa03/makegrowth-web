"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { whatYouGet } from "@/data/seminars";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function WhatYouGet() {
  return (
    <SectionWrapper theme="warm-bg" id="what-you-get">
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
          What You Get
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#1C1917] leading-snug text-balance">
          세미나에서 가져가는 것
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {whatYouGet.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
              ease: supanovaEase,
            }}
          >
            <Card variant="light" innerClassName="!p-5">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="solar:check-circle-bold" width={14} className="text-accent" />
                </div>
                <span className="text-sm text-[#1C1917] font-medium leading-relaxed break-keep">
                  {item}
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
