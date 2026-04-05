"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { honestWarnings } from "@/data/seminars";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function HonestWarning() {
  return (
    <SectionWrapper theme="warm-bg" id="honest-warning">
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-[#DC2626]/10 text-[#DC2626] mb-4">
          Honest Warning
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#1C1917] leading-snug text-balance">
          이런 분은 신청하지 마세요
        </h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {honestWarnings.map((warning, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: supanovaEase,
            }}
            className="flex items-center gap-4 bg-white ring-1 ring-[rgba(28,25,23,0.06)] rounded-xl p-5 shadow-[0_2px_8px_rgba(28,25,23,0.04)]"
          >
            <div className="shrink-0">
              <Icon icon="solar:close-circle-bold" width={20} className="text-[#DC2626]" />
            </div>
            <p className="text-sm text-[#57534E] font-medium break-keep">
              {warning}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
