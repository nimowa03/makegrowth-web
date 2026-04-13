"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TextReveal } from "@/components/ui/TextReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { ChatSimulation } from "@/components/ui/ChatSimulation";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import {
  fadeInUp,
  scaleUp,
  staggerContainer,
  slideFromRight,
  fadeSwitch,
} from "@/lib/motionVariants";
import { botFunctions } from "@/data/botDemo";

const HAS_DEMO_VIDEO = false;
const DEMO_VIDEO_SRC = "/videos/bot-demo.mp4";
const DEMO_POSTER_SRC = "/videos/bot-demo-thumbnail.jpg";

const approvalSteps = [
  { icon: "solar:document-text-linear", label: "봇이 초안 생성" },
  { icon: "solar:eye-linear", label: "셀러가 확인" },
  { icon: "solar:check-circle-linear", label: "승인 후 실행" },
];

const AUTO_CYCLE_INTERVAL = 4000;
const MANUAL_PAUSE_DURATION = 12000;

export function BotDemo() {
  const { ref, isInView } = useInView({ threshold: 0.05 });
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeApproval, setActiveApproval] = useState(0);
  const manualUntilRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const selectedFn = botFunctions[selectedIdx].id;
  const currentFn = botFunctions[selectedIdx];

  // Auto-cycle function cards
  const startAutoCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (Date.now() < manualUntilRef.current) return;
      setSelectedIdx((prev) => (prev + 1) % botFunctions.length);
    }, AUTO_CYCLE_INTERVAL);
  }, []);

  useEffect(() => {
    startAutoCycle();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startAutoCycle]);

  const handleManualSelect = (idx: number) => {
    setSelectedIdx(idx);
    manualUntilRef.current = Date.now() + MANUAL_PAUSE_DURATION;
  };

  // Approval gate infinite cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveApproval((prev) => (prev + 1) % approvalSteps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper id="bot-demo" theme="warm-bg" animate={false}>
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Bridge */}
        <p className="text-[#666] text-base text-center mb-4">
          이 AI 직원이 실제로 하는 일을 보여드립니다
        </p>

        {/* Header */}
        <div className="text-center mb-10">
          <TextReveal
            text="AI 직원이 하루에 하는 일"
            tag="h2"
            className="text-[#1A1A1A] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] font-black leading-tight tracking-tight mb-4"
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#444] text-base sm:text-lg md:text-xl"
            style={{ wordBreak: "keep-all" }}
          >
            기능을 눌러보세요. 실제 대화를 바로 확인할 수 있습니다.
          </motion.p>
        </div>

        {/* ── Bot Demo Video Slot ── */}
        {HAS_DEMO_VIDEO && (
          <div
            className="rounded-2xl px-6 py-8 md:px-10 md:py-10 mb-10 -mx-2 md:mx-0"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #1A1A1A 50%, #0F172A 100%)" }}
          >
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-white/70 text-center text-base mb-6"
            >
              실제 봇이 일하는 모습을 확인하세요
            </motion.p>
            <motion.div
              variants={scaleUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="max-w-4xl mx-auto"
            >
              <BrowserMockup
                videoSrc={DEMO_VIDEO_SRC}
                posterSrc={DEMO_POSTER_SRC}
                clickToPlay
                url="makegrowth.dev"
                className="border-white/10 shadow-[0_8px_60px_rgba(15,23,42,0.4)]"
              />
            </motion.div>
          </div>
        )}

        {/* Content: cards + phone */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12">
          {/* ── Left: Function selector ── */}
          <div>
            {/* Mobile: horizontal scroll tabs */}
            <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-3 lg:hidden scrollbar-hide -mx-2 px-2">
              {botFunctions.map((fn, idx) => (
                <button
                  key={fn.id}
                  onClick={() => handleManualSelect(idx)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full whitespace-nowrap text-sm font-semibold snap-start transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/20 ${
                    selectedFn === fn.id
                      ? "bg-[#1A1A1A] text-white shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                      : "bg-white text-[#666] border border-[#E0E0E0] hover:border-[#999]"
                  }`}
                >
                  <Icon icon={fn.icon} width={16} />
                  {fn.label}
                </button>
              ))}
            </div>

            {/* Desktop: card grid — auto-cycling highlight */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="hidden lg:grid grid-cols-2 gap-3"
            >
              {botFunctions.map((fn, idx) => (
                <motion.button
                  key={fn.id}
                  variants={fadeInUp}
                  onClick={() => handleManualSelect(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer group ${
                    selectedFn === fn.id
                      ? "border-[#1A1A1A] bg-[#FAFAFA] shadow-sm"
                      : "border-[#E0E0E0] bg-white hover:border-[#666]"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500 ${
                        selectedFn === fn.id
                          ? "bg-[#1A1A1A]"
                          : "bg-[#F8F8F8] group-hover:bg-[#F0F0F0]"
                      }`}
                    >
                      <Icon
                        icon={fn.icon}
                        width={18}
                        className={
                          selectedFn === fn.id
                            ? "text-white"
                            : "text-[#666]"
                        }
                      />
                    </div>
                    <span
                      className={`text-base font-bold transition-colors duration-300 ${
                        selectedFn === fn.id ? "text-[#1A1A1A]" : "text-[#444]"
                      }`}
                    >
                      {fn.label}
                    </span>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed pl-12">
                    {fn.description}
                  </p>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Phone mockup (sticky on desktop) ── */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex justify-center lg:sticky lg:top-24 lg:self-start"
          >
            <TiltCard tiltAmount={5} className="cursor-default">
              <PhoneMockup className="w-[240px] sm:w-[270px] md:w-[300px] lg:w-[340px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedFn}
                    variants={fadeSwitch}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="h-full"
                  >
                    <ChatSimulation
                      messages={currentFn.conversation}
                      autoPlay
                    />
                  </motion.div>
                </AnimatePresence>
              </PhoneMockup>
            </TiltCard>
          </motion.div>
        </div>

        {/* ── Human Approval Gate ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#1A1A1A] rounded-2xl px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 mt-10"
        >
          <h3 className="text-white font-black text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-6 sm:mb-8"
            style={{ wordBreak: "keep-all" }}>
            완전 자동이 아닙니다
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6">
            {approvalSteps.map((step, i) => {
              const isActive = activeApproval === i;
              return (
                <div key={step.label} className="flex items-center gap-4 md:gap-6">
                  <div className="flex flex-col items-center gap-2.5">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? "bg-white/25 scale-110 ring-2 ring-white/30"
                          : "bg-white/10"
                      }`}
                    >
                      <Icon
                        icon={step.icon}
                        width={26}
                        className={`transition-all duration-500 ${
                          isActive ? "text-white" : "text-white/70"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-base font-semibold text-center whitespace-nowrap transition-all duration-500 ${
                        isActive ? "text-white" : "text-white/60"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < approvalSteps.length - 1 && (
                    <>
                      <Icon
                        icon="solar:arrow-right-linear"
                        width={20}
                        className={`hidden md:block transition-colors duration-500 ${
                          activeApproval === i ? "text-white/70" : "text-white/25"
                        }`}
                      />
                      <Icon
                        icon="solar:arrow-down-linear"
                        width={20}
                        className={`md:hidden transition-colors duration-500 ${
                          activeApproval === i ? "text-white/70" : "text-white/25"
                        }`}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <p
            className="text-white/60 text-base text-center max-w-lg mx-auto"
            style={{ wordBreak: "keep-all" }}
          >
            가격 변경, CS 응답, 콘텐츠 발행 &mdash; 중요한 결정은 항상 <strong className="text-white font-semibold">사람이 최종 확인</strong>합니다.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
