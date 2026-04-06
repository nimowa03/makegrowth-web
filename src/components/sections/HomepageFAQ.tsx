"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { homepageFAQ } from "@/data/faq";
import { fadeInUp } from "@/lib/motionVariants";

export function HomepageFAQ() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="warm-surface" id="faq">
      <div ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
            Q&A
          </span>
          <h2 className="text-[28px] md:text-[40px] font-black text-[#1A1A1A] leading-snug text-balance">
            자주 묻는 질문
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto mb-12"
        >
          <Accordion items={homepageFAQ} />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <p className="text-[#999] text-sm mb-4">
            더 궁금한 점이 있으신가요?
          </p>
          <MagneticButton className="inline-block">
            <Button href="/contact" variant="secondary">
              문의하기
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
