"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { scaleUp, fadeInUp } from "@/lib/motionVariants";

export function NewsletterCTA() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <SectionWrapper theme="warm-bg" animate={false}>
      <div ref={ref} className="max-w-2xl mx-auto">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#1A1A1A] rounded-2xl px-8 py-12 md:px-12 md:py-16 text-center"
        >
          {/* Primary: Webinar */}
          <h2 className="text-white text-[28px] md:text-[36px] font-bold mb-4">
            AI 자동화, 직접 보여드립니다
          </h2>

          <p className="text-[#999] text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
            실제로 돌아가는 시스템을 무료 웨비나에서 시연합니다.
          </p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <Button href="/seminar" variant="secondary" size="lg" showArrow>
              웨비나 신청하기
            </Button>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-xs mx-auto mb-8">
            <div className="flex-1 h-px bg-[#333]" />
            <span className="text-[#666] text-xs">또는</span>
            <div className="flex-1 h-px bg-[#333]" />
          </div>

          {/* Secondary: Newsletter */}
          <p className="text-[#999] text-sm mb-4">
            매주 셀러용 AI 자동화 실전 팁을 보내드립니다.
          </p>

          {submitted ? (
            <div className="border border-[#333] rounded-xl px-6 py-4 inline-block">
              <p className="text-white font-medium">
                구독 신청이 완료되었습니다. 감사합니다!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-full bg-[#2A2A2F] border border-[#333] text-white placeholder-[#666] text-sm focus:outline-none focus:border-[#666] focus:ring-1 focus:ring-[#666]/30 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-[#1A1A1A] px-6 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#F0F0F0] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                구독하기
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
