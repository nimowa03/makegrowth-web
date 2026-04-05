"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function NewsletterCTA() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <SectionWrapper theme="warm-surface" animate={false}>
      <div ref={ref} className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: supanovaEase }}
        >
          {/* Center-aligned Double-Bezel card */}
          <Card variant="light">
            <div className="text-center">
              {/* Eyebrow pill */}
              <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
                Newsletter
              </span>

              {/* Heading */}
              <h2 className="text-[#1C1917] mb-4">
                매주 받는 이커머스 AI 실전 팁
              </h2>

              {/* Subtitle */}
              <p className="text-[#57534E] text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
                매주 이커머스 AI 활용 팁과 업계 트렌드를 보내드립니다.
              </p>

              {/* Form or success */}
              {submitted ? (
                <div className="bg-[rgba(5,150,105,0.08)] rounded-xl px-6 py-4 inline-block">
                  <p className="text-[#059669] font-medium">
                    구독 신청이 완료되었습니다. 감사합니다!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    placeholder="이메일 주소를 입력하세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-full bg-warm-bg border border-[rgba(28,25,23,0.06)] text-[#1C1917] placeholder-[#A8A29E] text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-accent text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_0_rgba(139,124,246,0)] hover:shadow-[0_0_30px_rgba(139,124,246,0.2)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    <Icon icon="solar:letter-linear" width={16} />
                    구독하기
                  </button>
                </form>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
