"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { homepageFAQ } from "@/data/faq";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

const categories = ["전체", "서비스", "가격", "기술"] as const;

export function HomepageFAQ() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<string>("전체");

  const filtered = activeTab === "전체"
    ? homepageFAQ
    : homepageFAQ.filter((item) => item.category === activeTab);

  return (
    <SectionWrapper theme="warm-surface" id="faq">
      <div ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <p className="text-[#666] text-base mb-4">
            아직 궁금한 점이 있으신가요?
          </p>
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
            Q&A
          </span>
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-black text-[#1A1A1A] leading-snug text-balance">
            자주 묻는 질문
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-3 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer focus:outline-none relative ${
                activeTab === cat
                  ? "text-[#1A1A1A] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-0.5 after:bg-[#1A1A1A] after:rounded-full"
                  : "text-[#999] hover:text-[#666]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto mb-10"
        >
          <Accordion items={filtered} />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <p className="text-[#1A1A1A] text-lg font-bold mb-2" style={{ wordBreak: "keep-all" }}>
            아직 고민되시나요?
          </p>
          <p className="text-[#666] text-sm mb-6" style={{ wordBreak: "keep-all" }}>
            3분이면 내 사업에 맞는지 확인할 수 있습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <MagneticButton className="inline-block">
              <Button href="/diagnosis" showArrow>
                내 루틴 무료 진단하기
              </Button>
            </MagneticButton>
            <Button href="/contact" variant="secondary">
              문의하기
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
