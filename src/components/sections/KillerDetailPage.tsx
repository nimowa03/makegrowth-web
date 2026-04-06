"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProcessFlow } from "@/components/ui/ProcessFlow";
import { Button } from "@/components/ui/Button";
import {
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  fadeInUp,
} from "@/lib/motionVariants";

const pipelineNodes = [
  { title: "상품 사진 입력", detail: "원본 1장이면 충분" },
  { title: "AI 배경·편집", detail: "브랜드 톤 맞춤" },
  { title: "레이아웃 구성", detail: "상세페이지 자동 설계" },
  { title: "완성·등록", detail: "대량 생산 가능" },
];

export function KillerDetailPage() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper theme="light" animate={false}>
      <div ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Process flow */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <ProcessFlow nodes={pipelineNodes} />
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Pain */}
            <p className="text-[#999] text-sm md:text-base mb-3">
              소싱하기도 바쁜데, 상세페이지 외주 30만원에 수정 요청만
              3번째.
              <br />
              톤앤매너를 설명하는 것도, 수정을 기다리는 것도 전부 비용입니다.
            </p>

            <h2 className="text-[#1A1A1A] mb-4">
              잘 만드는 것보다,
              <br />
              많이 만드는 생산성이 중요합니다
            </h2>

            <p className="text-[#666] text-base md:text-lg mb-8 leading-relaxed">
              상품을 10개 소싱했으면, 상세페이지도 10개 만들어야 합니다.
              외주로는 속도가 안 나옵니다. AI로 직접 만드는 워크플로우가 있으면,
              내 브랜드 톤에 맞게, 내가 원하는 만큼 만들 수 있습니다.
            </p>

            {/* Anti-SaaS block */}
            <div className="bg-[#1A1A1A] rounded-xl px-6 py-5 mb-8">
              <p className="text-white text-sm md:text-base font-medium mb-2">
                &ldquo;범용 AI 서비스로 만들어 봤는데, 우리 톤이랑 안 맞더라구요&rdquo;
              </p>
              <p className="text-[#999] text-sm leading-relaxed">
                범용 AI 도구는 &ldquo;누구에게나 맞는&rdquo; 결과를 줍니다.
                내 브랜드, 내 카테고리에 맞는 상세페이지를 원한다면
                자신만의 워크플로우가 필요합니다.
              </p>
            </div>

            {/* Metrics */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <motion.div
                variants={fadeInUp}
                className="border border-[#E0E0E0] rounded-xl p-4"
              >
                <p className="text-xs font-mono text-[#999] uppercase tracking-wide mb-2">
                  소요 시간
                </p>
                <p className="text-sm text-[#999] line-through mb-0.5">
                  3~5일
                </p>
                <p className="text-lg text-[#1A1A1A] font-bold">
                  15분 (예상)
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="border border-[#E0E0E0] rounded-xl p-4"
              >
                <p className="text-xs font-mono text-[#999] uppercase tracking-wide mb-2">
                  비용
                </p>
                <p className="text-sm text-[#999] line-through mb-0.5">
                  건당 30만원
                </p>
                <p className="text-lg text-[#1A1A1A] font-bold">
                  90%+ 절감 (예상)
                </p>
              </motion.div>
            </motion.div>

            <Button href="/services">자세히 보기</Button>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
