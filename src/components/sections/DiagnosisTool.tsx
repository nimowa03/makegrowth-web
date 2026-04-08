"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  tasks,
  categories,
  revenueRanges,
  revenueMidpoints,
  painPointOptions,
  sellerStatusOptions,
  aiInterestOptions,
  type TaskItem,
} from "@/data/diagnosis";
import { fadeInUp } from "@/lib/motionVariants";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";

/* ── Easing ── */
const supanovaEase = [0.16, 1, 0.3, 1] as const;

/* ── Helpers ── */
function formatWon(manwon: number): string {
  if (manwon >= 10000) return `${(manwon / 10000).toFixed(1).replace(/\.0$/, "")}억`;
  return `${manwon.toLocaleString()}만`;
}

function initHours(): Record<string, number> {
  const h: Record<string, number> = {};
  tasks.forEach((t) => (h[t.id] = t.defaultHours));
  return h;
}

function initRecord<T>(val: T): Record<string, T> {
  const r: Record<string, T> = {};
  tasks.forEach((t) => (r[t.id] = val));
  return r;
}

/* ── Donut Chart Colors (varying opacity of #1A1A1A) ── */
const donutColors = [
  "rgba(26,26,26,1)",
  "rgba(26,26,26,0.85)",
  "rgba(26,26,26,0.7)",
  "rgba(26,26,26,0.55)",
  "rgba(26,26,26,0.4)",
  "rgba(26,26,26,0.3)",
  "rgba(26,26,26,0.2)",
];

/* ── Compute Results ── */
interface CostBreakdownItem {
  task: TaskItem;
  cost: number;
  savings: number;
  rate: number;
}

interface DiagnosisResults {
  totalHours: number;
  totalMonthlyCost: number;
  totalAnnualCost: number;
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  savingsRate: number;
  costBreakdown: CostBreakdownItem[];
  costRatio: number | null;
}

function computeResults(
  hours: Record<string, number>,
  outsourceUsing: Record<string, boolean>,
  outsourceCosts: Record<string, number>,
  revenue: string
): DiagnosisResults {
  const totalHours = Object.values(hours).reduce((a, b) => a + b, 0);
  let totalMonthlyCost = 0;
  const costBreakdown: CostBreakdownItem[] = [];

  tasks.forEach((task) => {
    if (!outsourceUsing[task.id]) return;
    const costIdx = outsourceCosts[task.id] || 0;
    const monthlyCost = task.outsource.costMidpoints[costIdx];
    if (monthlyCost > 0) {
      const savings = Math.round(monthlyCost * task.outsource.aiSavingsRate);
      totalMonthlyCost += monthlyCost;
      costBreakdown.push({ task, cost: monthlyCost, savings, rate: task.outsource.aiSavingsRate });
    }
  });

  const totalMonthlySavings = costBreakdown.reduce((a, b) => a + b.savings, 0);
  const estimatedRevenue = revenueMidpoints[revenue] || 0;
  const costRatio =
    estimatedRevenue > 0 ? Math.round((totalMonthlyCost / estimatedRevenue) * 100) : null;

  return {
    totalHours,
    totalMonthlyCost,
    totalAnnualCost: totalMonthlyCost * 12,
    totalMonthlySavings,
    totalAnnualSavings: totalMonthlySavings * 12,
    savingsRate:
      totalMonthlyCost > 0 ? Math.round((totalMonthlySavings / totalMonthlyCost) * 100) : 0,
    costBreakdown,
    costRatio,
  };
}

/* ── Animated Number ── */
function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: supanovaEase }}
      className="inline-block"
    >
      {prefix}{value.toLocaleString()}{suffix}
    </motion.span>
  );
}

/* ── Progress Dots ── */
function ProgressDots({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full transition-colors duration-500"
          style={{
            backgroundColor: i <= step ? "#1A1A1A" : "#E0E0E0",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      ))}
    </div>
  );
}

/* ── SVG Donut Chart ── */
function DonutChart({ hours }: { hours: Record<string, number> }) {
  const totalHours = Object.values(hours).reduce((a, b) => a + b, 0);
  const size = 260;
  const radius = 95;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 32;

  const segments = useMemo(() => {
    if (totalHours === 0) return [];
    let cumulative = 0;
    return tasks
      .filter((t) => hours[t.id] > 0)
      .map((t, i) => {
        const fraction = hours[t.id] / totalHours;
        const dashLength = circumference * fraction;
        const dashOffset = circumference * (1 - cumulative) + circumference * 0.25;
        cumulative += fraction;
        return {
          id: t.id,
          label: t.label,
          dashArray: `${dashLength} ${circumference - dashLength}`,
          dashOffset,
          color: donutColors[i % donutColors.length],
        };
      });
  }, [hours, totalHours, circumference]);

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
        />
        {/* Segments */}
        {segments.map((seg) => (
          <circle
            key={seg.id}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth={strokeWidth}
            strokeDasharray={seg.dashArray}
            strokeDashoffset={seg.dashOffset}
            strokeLinecap="butt"
            style={{
              transition: "stroke-dasharray 0.5s cubic-bezier(0.16, 1, 0.3, 1), stroke-dashoffset 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        ))}
        {/* Center text */}
        <text
          x={size / 2}
          y={size / 2 - 6}
          textAnchor="middle"
          className="font-display font-black text-2xl"
          fill="#1A1A1A"
        >
          {totalHours.toFixed(1)}
        </text>
        <text
          x={size / 2}
          y={size / 2 + 14}
          textAnchor="middle"
          className="text-xs"
          fill="#666"
        >
          시간/일
        </text>
      </svg>
      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
        {segments.map((seg) => (
          <div key={seg.id} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-sm shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className="text-[#666] truncate">{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ── */
export function DiagnosisTool() {
  /* State */
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState("");
  const [revenue, setRevenue] = useState("");
  const [hours, setHours] = useState<Record<string, number>>(initHours);
  const [outsourceCosts, setOutsourceCosts] = useState<Record<string, number>>(() => initRecord(0));
  const [outsourceUsing, setOutsourceUsing] = useState<Record<string, boolean>>(() => initRecord(false));
  const [email, setEmail] = useState("");
  const [painPoint, setPainPoint] = useState("");
  const [painDetail, setPainDetail] = useState("");
  const [sellerStatus, setSellerStatus] = useState("");
  const [aiInterest, setAiInterest] = useState("");
  const [freeComment, setFreeComment] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* Computed */
  const results = useMemo(
    () => computeResults(hours, outsourceUsing, outsourceCosts, revenue),
    [hours, outsourceUsing, outsourceCosts, revenue]
  );

  const topTask = useMemo(() => {
    let max = 0;
    let label = "";
    tasks.forEach((t) => {
      if (hours[t.id] > max) {
        max = hours[t.id];
        label = t.label;
      }
    });
    return label;
  }, [hours]);

  const activeTasks = useMemo(
    () => tasks.filter((t) => hours[t.id] > 0),
    [hours]
  );

  /* Handlers */
  const setHour = useCallback((id: string, val: number) => {
    setHours((prev) => ({ ...prev, [id]: val }));
  }, []);

  const setOutsourceCost = useCallback((id: string, val: number) => {
    setOutsourceCosts((prev) => ({ ...prev, [id]: val }));
  }, []);

  const setOutsourceUse = useCallback((id: string, val: boolean) => {
    setOutsourceUsing((prev) => ({ ...prev, [id]: val }));
  }, []);

  const nextStep = useCallback(() => setStep((s) => Math.min(s + 1, 3)), []);
  const prevStep = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);

  const handleSubmitEmail = useCallback(async () => {
    if (!email || !privacyConsent) return;
    try {
      await fetch("/api/diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          category,
          revenue,
          hours,
          outsourceUsing,
          outsourceCosts,
          painPoint,
          painDetail,
          sellerStatus,
          aiInterest,
          freeComment,
          results,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  }, [email, privacyConsent, category, revenue, hours, outsourceUsing, outsourceCosts, painPoint, painDetail, results]);

  /* Transition variants */
  const stepVariants = {
    initial: { opacity: 0, y: 30, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -20, filter: "blur(4px)" },
  };

  /* Select base styles */
  const selectClass =
    "w-full px-4 py-3 rounded-lg border border-[#E0E0E0] bg-white text-[#1A1A1A] text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#1A1A1A] transition-colors duration-300";
  const selectClassDark =
    "w-full px-4 py-3 rounded-lg border border-[#333] bg-[#222] text-white text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#666] transition-colors duration-300";

  return (
    <SectionWrapper theme="warm-bg" id="diagnosis" animate={false}>
      {/* Narrative bridge */}
      {step === 0 && (
        <p
          className="text-[#666] text-center text-base mb-6 max-w-lg mx-auto"
          style={{ wordBreak: "keep-all" }}
        >
          내 사업에선 어디에 시간과 비용이 쓰이고 있을까요?
        </p>
      )}

      <ProgressDots step={step} />

      <AnimatePresence mode="wait">
        {/* ═══════ STEP 0: Basic Info ═══════ */}
        {step === 0 && (
          <motion.div
            key="step-0"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: supanovaEase }}
          >
            <div className="max-w-lg mx-auto rounded-2xl bg-[#1A1A1A] p-8 md:p-12 text-center">
              <h2 className="font-display font-black text-[32px] md:text-[44px] text-white mb-3 leading-tight">
                내 하루는 어디에
                <br />
                쓰이고 있을까?
              </h2>
              <p className="text-[#999] text-base md:text-lg mb-8">
                3분이면 외주비 얼마를 AI로 줄일 수 있는지 알 수 있습니다
              </p>

              <div className="space-y-4 text-left mb-8">
                <div className="relative">
                  <label className="block text-xs text-[#999] mb-1.5">카테고리</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={selectClassDark}
                  >
                    <option value="">카테고리를 선택하세요</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className="absolute right-3 top-[34px] text-[#666] pointer-events-none"
                    width={16}
                  />
                </div>

                <div className="relative">
                  <label className="block text-xs text-[#999] mb-1.5">월 매출 규모</label>
                  <select
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    className={selectClassDark}
                  >
                    <option value="">매출 규모를 선택하세요</option>
                    {revenueRanges.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className="absolute right-3 top-[34px] text-[#666] pointer-events-none"
                    width={16}
                  />
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full bg-white text-[#1A1A1A] hover:bg-[#F0F0F0]"
                onClick={nextStep}
                disabled={!category || !revenue}
              >
                분석 시작하기 →
              </Button>
            </div>
          </motion.div>
        )}

        {/* ═══════ STEP 1: Time Allocation ═══════ */}
        {step === 1 && (
          <motion.div
            key="step-1"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: supanovaEase }}
          >
            <div className="mb-8">
              <button
                onClick={prevStep}
                className="text-[#999] text-sm flex items-center gap-1 hover:text-[#1A1A1A] transition-colors mb-4"
              >
                <Icon icon="solar:arrow-left-linear" width={16} />
                이전
              </button>
              <h3 className="font-display font-black text-2xl md:text-[32px] text-[#1A1A1A] mb-2 leading-tight">
                하루 중 이 시간이
                <br className="md:hidden" />
                전부 비용입니다
              </h3>
              <p className="text-[#666] text-sm md:text-base">
                슬라이더를 움직여서 내 하루를 입력해 보세요
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
              {/* Donut - mobile top */}
              <div className="lg:hidden flex justify-center">
                <DonutChart hours={hours} />
              </div>

              {/* Sliders */}
              <div className="space-y-5">
                {tasks.map((task) => (
                  <div key={task.id}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Icon icon={task.icon} width={18} className="text-[#1A1A1A]" />
                        <span className="text-sm font-semibold text-[#1A1A1A]">{task.label}</span>
                      </div>
                      <span className="font-display font-black text-sm tabular-nums text-[#1A1A1A]">
                        {hours[task.id].toFixed(1)}h
                      </span>
                    </div>
                    <p className="text-xs text-[#999] mb-2">{task.description}</p>
                    <input
                      type="range"
                      min={0}
                      max={task.maxHours}
                      step={0.5}
                      value={hours[task.id]}
                      onChange={(e) => setHour(task.id, parseFloat(e.target.value))}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #1A1A1A ${(hours[task.id] / task.maxHours) * 100}%, #E0E0E0 ${(hours[task.id] / task.maxHours) * 100}%)`,
                      }}
                    />
                  </div>
                ))}

                {/* Summary */}
                <div className="pt-4 border-t border-[#E0E0E0]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-[#666]">하루 총 업무 시간</span>
                    <span className="font-display font-black text-lg tabular-nums text-[#1A1A1A]">
                      {results.totalHours.toFixed(1)}시간
                    </span>
                  </div>
                  {topTask && (
                    <p className="text-xs text-[#999]">
                      가장 많은 시간을 쓰는 업무:{" "}
                      <span className="text-[#1A1A1A] font-semibold">{topTask}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Donut - desktop right */}
              <div className="hidden lg:flex justify-center sticky top-8">
                <DonutChart hours={hours} />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button variant="primary" size="lg" onClick={nextStep}>
                다음 →
              </Button>
            </div>
          </motion.div>
        )}

        {/* ═══════ STEP 2: Outsourcing Costs ═══════ */}
        {step === 2 && (
          <motion.div
            key="step-2"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: supanovaEase }}
          >
            <div className="mb-8">
              <button
                onClick={prevStep}
                className="text-[#999] text-sm flex items-center gap-1 hover:text-[#1A1A1A] transition-colors mb-4"
              >
                <Icon icon="solar:arrow-left-linear" width={16} />
                이전
              </button>
              <h3 className="font-display font-black text-2xl md:text-[32px] text-[#1A1A1A] mb-2 leading-tight">
                이 외주비가 매달 나갑니다
              </h3>
              <p className="text-[#666] text-sm">
                이 외주비가 매달 나갑니다
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
              {/* Task rows */}
              <div className="space-y-4">
                {activeTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 rounded-xl border border-[#E0E0E0] bg-white"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon icon={task.icon} width={20} className="text-[#1A1A1A]" />
                      <span className="text-sm font-semibold text-[#1A1A1A]">{task.label}</span>
                      <span className="text-xs text-[#999] ml-auto">
                        {hours[task.id].toFixed(1)}h/일
                      </span>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer mb-3">
                      <input
                        type="checkbox"
                        checked={outsourceUsing[task.id]}
                        onChange={(e) => setOutsourceUse(task.id, e.target.checked)}
                        className="w-4 h-4 rounded border-[#E0E0E0] accent-[#1A1A1A]"
                      />
                      <span className="text-sm text-[#666]">외주 쓰고 있음</span>
                    </label>

                    {outsourceUsing[task.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: supanovaEase }}
                      >
                        <div className="relative">
                          <label className="block text-xs text-[#999] mb-1">
                            {task.outsource.label} 월 비용
                          </label>
                          <select
                            value={outsourceCosts[task.id]}
                            onChange={(e) => setOutsourceCost(task.id, parseInt(e.target.value))}
                            className={selectClass}
                          >
                            {task.outsource.costOptions.map((opt, idx) => (
                              <option key={idx} value={idx}>{opt}</option>
                            ))}
                          </select>
                          <Icon
                            icon="solar:alt-arrow-down-linear"
                            className="absolute right-3 top-[26px] text-[#999] pointer-events-none"
                            width={16}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}

                {activeTasks.length === 0 && (
                  <p className="text-center text-[#999] text-sm py-8">
                    이전 단계에서 시간을 배분한 업무가 없습니다.
                  </p>
                )}
              </div>

              {/* Live Summary Panel */}
              <div className="lg:sticky lg:top-8">
                <div className="rounded-xl border border-[#E0E0E0] bg-[#F8F8F8] p-6">
                  <h4 className="text-xs font-semibold text-[#999] uppercase tracking-wider mb-4">
                    외주 비용 요약
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-[#999] mb-0.5">월 외주비 합계</p>
                      <p className="font-display font-black text-2xl tabular-nums text-[#1A1A1A]">
                        <AnimatedNumber value={results.totalMonthlyCost} prefix="₩" suffix="만" />
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#999] mb-0.5">연간 환산</p>
                      <p className="font-display font-black text-lg tabular-nums text-[#1A1A1A]">
                        <AnimatedNumber value={results.totalAnnualCost} prefix="₩" suffix="만" />
                      </p>
                    </div>
                    {results.costRatio !== null && results.costRatio > 0 && (
                      <div>
                        <p className="text-xs text-[#999] mb-0.5">매출 대비 외주비 비율</p>
                        <p className="font-display font-black text-lg tabular-nums text-[#CC0000]">
                          매출의 <AnimatedNumber value={results.costRatio} suffix="%" />
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button variant="primary" size="lg" onClick={nextStep}>
                결과 보기 →
              </Button>
            </div>
          </motion.div>
        )}

        {/* ═══════ STEP 3: Results ═══════ */}
        {step === 3 && (
          <motion.div
            key="step-3"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: supanovaEase }}
          >
            <div className="mb-8">
              <button
                onClick={prevStep}
                className="text-[#999] text-sm flex items-center gap-1 hover:text-[#1A1A1A] transition-colors mb-4"
              >
                <Icon icon="solar:arrow-left-linear" width={16} />
                이전
              </button>
              <h3 className="font-display font-black text-xl md:text-2xl text-[#1A1A1A] mb-1">
                분석 결과
              </h3>
              <p className="text-[#666] text-sm">
                현재 운영 현황과 AI 전환 시 예상 절감액입니다
              </p>
            </div>

            {/* Section A: Current State Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl border border-[#E0E0E0] bg-[#F8F8F8] p-5">
                <p className="text-sm text-[#666] mb-2">하루 업무 시간</p>
                <p className="font-display font-black text-2xl tabular-nums text-[#1A1A1A]">
                  ⏰ {results.totalHours.toFixed(1)}시간 중{" "}
                  <span className="text-[#CC0000]">{results.totalHours.toFixed(1)}시간</span>이 반복 업무
                </p>
              </div>
              <div className="rounded-xl border border-[#E0E0E0] bg-[#F8F8F8] p-5">
                <p className="text-sm text-[#666] mb-2">월 외주비</p>
                <p className="font-display font-black text-2xl tabular-nums text-[#1A1A1A]">
                  💸 약 {formatWon(results.totalMonthlyCost)}원{" "}
                  <span className="text-[#999] text-base font-normal">
                    (연 {formatWon(results.totalAnnualCost)}원)
                  </span>
                </p>
              </div>
            </div>

            {/* Section B: AI Conversion Areas */}
            {results.costBreakdown.length > 0 && (
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[#1A1A1A] mb-4">
                  AI 전환 가능 영역
                </h4>
                <div className="space-y-3">
                  {results.costBreakdown.map(({ task, cost, savings, rate }) => (
                    <div
                      key={task.id}
                      className="rounded-xl border border-[#E0E0E0] bg-white p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon icon={task.icon} width={18} className="text-[#1A1A1A]" />
                        <span className="text-sm font-semibold text-[#1A1A1A]">
                          {task.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-[#666] mb-2">
                        <span>현재 ₩{cost}만/월</span>
                        <span className="text-[#E0E0E0]">→</span>
                        <span className="text-[#059669] font-semibold">
                          AI 전환 시 ₩{cost - savings}만/월
                        </span>
                        <span className="text-[#059669] font-semibold ml-auto">
                          -{Math.round(rate * 100)}%
                        </span>
                      </div>

                      {/* Savings bar */}
                      <div className="w-full h-2 rounded-full bg-[#E0E0E0] overflow-hidden mb-2">
                        <motion.div
                          className="h-full rounded-full bg-[#059669]"
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.round(rate * 100)}%` }}
                          transition={{ duration: 0.8, ease: supanovaEase, delay: 0.2 }}
                        />
                      </div>

                      <p className="text-xs text-[#999]">{task.outsource.aiDescription}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section C: Savings Summary */}
            <div className="rounded-2xl bg-[#1A1A1A] p-6 md:p-8 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-xs text-[#999] mb-1">예상 월 절감액</p>
                  <p className="font-display font-black text-3xl md:text-4xl tabular-nums text-[#059669]">
                    ₩{formatWon(results.totalMonthlySavings)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#999] mb-1">예상 연 절감액</p>
                  <p className="font-display font-black text-3xl md:text-4xl tabular-nums text-[#059669]">
                    ₩{formatWon(results.totalAnnualSavings)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#999] mb-1">절감률</p>
                  <p className="font-display font-black text-3xl md:text-4xl tabular-nums text-[#059669]">
                    {results.savingsRate}%
                  </p>
                </div>
              </div>
            </div>

            {/* Next Step CTA */}
            <div className="rounded-xl border border-[#E0E0E0] bg-[#F8F8F8] p-6 mb-8 text-center">
              <p className="text-[#1A1A1A] font-bold text-lg mb-2">
                이 비용, AI 직원이 대신 처리할 수 있습니다
              </p>
              <p className="text-[#666] text-sm mb-5" style={{ wordBreak: "keep-all" }}>
                14일 무료 체험으로 AI 직원이 어떤 일을 하는지 직접 확인해보세요
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button href="/contact" variant="primary" size="sm">
                  14일 무료 체험 시작
                </Button>
                <Button href="/services" variant="secondary" size="sm">
                  서비스 자세히 보기
                </Button>
              </div>
            </div>

            {/* Section D: Email Collection */}
            <div className="rounded-xl border border-[#E0E0E0] bg-[#F8F8F8] p-6 md:p-8 mb-8">
              {!submitted ? (
                <>
                  <h4 className="text-sm font-semibold text-[#1A1A1A] mb-2">
                    분석 결과를 이메일로 받아보시겠어요?
                  </h4>
                  <p className="text-xs text-[#666] mb-5">
                    영역별 절감 방법과 다음 단계를 정리해서 보내드립니다. 다른 용도로 사용되지 않습니다.
                  </p>

                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-xs text-[#999] mb-1">이메일 *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] bg-white text-[#1A1A1A] text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors duration-300"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-xs text-[#999] mb-1">가장 큰 고민 (선택)</label>
                      <select
                        value={painPoint}
                        onChange={(e) => setPainPoint(e.target.value)}
                        className={selectClass}
                      >
                        <option value="">선택하세요</option>
                        {painPointOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <Icon
                        icon="solar:alt-arrow-down-linear"
                        className="absolute right-3 top-[26px] text-[#999] pointer-events-none"
                        width={16}
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-xs text-[#666] mb-1">셀러 활동 현황 (선택)</label>
                      <select
                        value={sellerStatus}
                        onChange={(e) => setSellerStatus(e.target.value)}
                        className={selectClass}
                      >
                        <option value="">선택하세요</option>
                        {sellerStatusOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <Icon
                        icon="solar:alt-arrow-down-linear"
                        className="absolute right-3 top-[34px] text-[#666] pointer-events-none"
                        width={16}
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-xs text-[#666] mb-1">AI 솔루션 관심도 (선택)</label>
                      <select
                        value={aiInterest}
                        onChange={(e) => setAiInterest(e.target.value)}
                        className={selectClass}
                      >
                        <option value="">선택하세요</option>
                        {aiInterestOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <Icon
                        icon="solar:alt-arrow-down-linear"
                        className="absolute right-3 top-[34px] text-[#666] pointer-events-none"
                        width={16}
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#666] mb-1">하고 싶은 말 (선택)</label>
                      <textarea
                        value={freeComment}
                        onChange={(e) => setFreeComment(e.target.value)}
                        placeholder="셀러 생활에서 가장 해결하고 싶은 문제, AI에 기대하는 점, 또는 어떤 이야기든 자유롭게 적어주세요"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-[#E0E0E0] bg-white text-[#1A1A1A] text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors duration-300 resize-none"
                      />
                    </div>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        className="w-4 h-4 rounded border-[#E0E0E0] accent-[#1A1A1A] mt-0.5"
                      />
                      <span className="text-xs text-[#999]">
                        개인정보 수집 및 이용에 동의합니다 *
                      </span>
                    </label>

                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleSubmitEmail}
                      disabled={!email || !privacyConsent}
                    >
                      리포트 받기 →
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <Icon icon="solar:check-circle-bold" width={40} className="text-[#059669] mx-auto mb-3" />
                  <p className="text-sm font-semibold text-[#1A1A1A] mb-1">
                    리포트가 발송되었습니다!
                  </p>
                  <p className="text-xs text-[#666]">
                    입력하신 이메일로 분석 리포트를 보내드립니다.
                  </p>
                </div>
              )}
            </div>

            {/* Section E: Alternative CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/seminar" variant="primary" size="lg">
                웨비나 알아보기 →
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                서비스 살펴보기 →
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Global slider styles ── */}
      <style jsx global>{`
        #diagnosis input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 9999px;
          outline: none;
        }
        #diagnosis input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #1A1A1A;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        #diagnosis input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        #diagnosis input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #1A1A1A;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }
        #diagnosis select {
          background-image: none;
        }
      `}</style>
    </SectionWrapper>
  );
}
