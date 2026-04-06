"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { reviews } from "@/data/reviews";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

const hasRealReviews = reviews.some((r) => !r.text.includes("[TODO"));

export default function ReviewsPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.1 });
  const { ref: ctaRef, isInView: ctaInView } = useInView({ threshold: 0.1 });

  return (
    <>
      {/* Hero — Dark */}
      <SectionWrapper theme="dark" animate={false}>
        <div ref={heroRef} className="relative overflow-hidden">
          {/* Clean white bg - no gradient orbs */}

          <div className="relative text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={heroInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, ease: supanovaEase }}
            >
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] mb-6">
                <span className="text-[#999]">●</span>
                Reviews
              </span>
            </motion.div>

            <motion.h1
              className="text-[#1A1A1A] mb-6"
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={heroInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: supanovaEase }}
            >
              수강생 후기
            </motion.h1>

            <motion.p
              className="text-[#666666] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={heroInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: supanovaEase }}
            >
              메이크그로스 웨비나를 경험한 셀러들의 이야기입니다.
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      {/* Gradient transition */}
      <SectionWrapper theme="gradient-transition" />

      {/* Reviews content */}
      <SectionWrapper theme="warm-bg" animate={false}>
        <div ref={contentRef}>
          {hasRealReviews ? (
            /* Real reviews grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={contentInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.7, delay: 0.1 * (index + 1), ease: supanovaEase }}
                >
                  <Card variant="light" hover>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} icon="solar:star-bold" width={16} className="text-[#F59E0B]" />
                      ))}
                    </div>
                    <p className="text-[#444444] text-sm leading-relaxed mb-4">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="pt-4 border-t border-[rgba(0,0,0,0.08)]">
                      <p className="font-semibold text-[#1A1A1A] text-sm">{review.name}</p>
                      <p className="text-xs text-[#666666]">
                        {review.role} · {review.category}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Placeholder state */
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={contentInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, ease: supanovaEase }}
            >
              <Card variant="light" hover={false}>
                <div className="text-center py-12 md:py-20">
                  <Icon
                    icon="solar:chat-round-dots-linear"
                    width={56}
                    className="text-[#999] mx-auto mb-6"
                  />
                  <h3 className="text-[#1A1A1A] mb-3">
                    첫 웨비나 준비 중입니다
                  </h3>
                  <p className="text-[#444444] max-w-md mx-auto mb-8">
                    곧 실제 수강생들의 생생한 후기가 채워집니다.
                    웨비나에 참여하고 첫 번째 후기의 주인공이 되어보세요.
                  </p>
                  <Button href="/seminar" showArrow>
                    웨비나 알아보기
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper theme="warm-surface" animate={false}>
        <div ref={ctaRef}>
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={ctaInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: supanovaEase }}
            className="text-center"
          >
            <h2 className="text-[#1A1A1A] mb-4">
              다음 후기의 주인공은 당신입니다
            </h2>
            <p className="text-[#444444] text-lg mb-8 max-w-xl mx-auto">
              AI 자동화 시스템이 어떻게 돌아가는지 직접 확인하세요.
            </p>
            <Button href="/seminar" showArrow>
              웨비나 신청하기
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
