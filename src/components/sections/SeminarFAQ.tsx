"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Accordion } from "@/components/ui/Accordion";
import { fadeInUp } from "@/lib/motionVariants";
import { seminarFAQ } from "@/data/faq";

export function SeminarFAQ() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-surface" id="faq">
      <div ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
            FAQ
          </span>
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A1A1A] leading-snug text-balance">
            자주 묻는 질문
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          <Accordion items={seminarFAQ} />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
