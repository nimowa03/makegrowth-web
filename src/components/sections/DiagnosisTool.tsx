"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  tasks,
  categories,
  revenueRanges,
  revenueMidpoints,
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

/* ── Donut Chart Colors ── */
const donutColors = [
  "rgba(26,26,26,1)",
  "rgba(26,26,26,0.85)",
  "rgba(26,26,26,0.7)",
  "rgba(26,26,26,0.55)",
  "rgba(26,26,26,0.4)",
  "rgba(26,26,26,0.3)",
  "rgba(26,26,26,0.2)",
];

/* ── Results ── */
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

/* ── Enhanced Progress Bar ── */
function ProgressBar({ step }: { step: number }) {
  const labels = ["시작", "시간 분석", "비용 분석", "결과"];
  return (
    <div className="mb-10">
      {/* Progress track */}
      <div className="relative h-1 bg-[#E0E0E0] rounded-full mb-3 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-[#1A1A1A] rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${(step / 3) * 100}%` }}
          transition={{ duration: 0.6, ease: supanovaEase }}
        />
      </div>
      {/* Labels */}
      <div className="flex justify-between">
        {labels.map((label, i) => (
          <span
            key={label}
            className="text-[10px] font-medium transition-colors duration-500"
            style={{
              color: i <= step ? "#1A1A1A" : "#CCCCCC",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {label}
          </span>
        ))}
      </div>
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
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E0E0E0" strokeWidth={strokeWidth} />
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
        <text x={size / 2} y={size / 2 - 6} textAnchor="middle" className="font-display font-black text-2xl" fill="#1A1A1A">
          {totalHours.toFixed(1)}
        </text>
        <text x={size / 2} y={size / 2 + 14} textAnchor="middle" className="text-xs" fill="#666">
          시간/일
        </text>
      </svg>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
        {segments.map((seg) => (
          <div key={seg.id} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: seg.color }} />
            <span className="text-[#666] truncate">{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Reward Preview Cards ── */
const rewards = [
  { icon: "solar:chart-square-linear", title: "절감 리포트", desc: "내 외주비 중 AI 전환 가능 금액" },
  { icon: "solar:chat-round-dots-linear", title: "봇 체험 가이드", desc: "텔레그램 봇 온보딩 자료" },
  { icon: "solar:letter-linear", title: "셀러 AI 실전 레터", desc: "내 사업에 바로 적용할 수 있는 AI 트렌드 큐레이션" },
];

/* ═══════════════════════════════════════════════════ */
/*  MAIN COMPONENT                                    */
/* ═══════════════════════════════════════════════════ */
export function DiagnosisTool() {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState("");
  const [revenue, setRevenue] = useState("");
  const [hours, setHours] = useState<Record<string, number>>(initHours);
  const [outsourceCosts, setOutsourceCosts] = useState<Record<string, number>>(() => initRecord(0));
  const [outsourceUsing, setOutsourceUsing] = useState<Record<string, boolean>>(() => initRecord(false));
  const [email, setEmail] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCTAModal, setShowCTAModal] = useState(false);

  // Auto-open CTA modal 2s after entering Step 3
  useEffect(() => {
    if (step === 3 && !submitted) {
      const timer = setTimeout(() => setShowCTAModal(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [step, submitted]);

  const results = useMemo(
    () => computeResults(hours, outsourceUsing, outsourceCosts, revenue),
    [hours, outsourceUsing, outsourceCosts, revenue]
  );

  const topTask = useMemo(() => {
    let max = 0;
    let label = "";
    tasks.forEach((t) => {
      if (hours[t.id] > max) { max = hours[t.id]; label = t.label; }
    });
    return label;
  }, [hours]);

  const activeTasks = useMemo(() => tasks.filter((t) => hours[t.id] > 0), [hours]);

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
          email, category, revenue, hours, outsourceUsing, outsourceCosts, results,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  }, [email, privacyConsent, category, revenue, hours, outsourceUsing, outsourceCosts, results]);

  const stepVariants = {
    initial: { opacity: 0, y: 30, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -20, filter: "blur(4px)" },
  };

  const selectClass =
    "w-full px-4 py-3 rounded-lg border border-[#E0E0E0] bg-white text-[#1A1A1A] text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 transition-all duration-300";
  const selectClassDark =
    "w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white text-sm appearance-none cursor-pointer focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition-all duration-300 [&>option]:bg-[#1A1A1A] [&>option]:text-white";

  return (
    <SectionWrapper theme="warm-bg" id="diagnosis" animate={false}>
      <ProgressBar step={step} />

      <AnimatePresence mode="wait">
        {/* ═══════ STEP 0: Intro + Reward Preview ═══════ */}
        {step === 0 && (
          <motion.div
            key="step-0"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: supanovaEase }}
          >
            <div className="max-w-2xl mx-auto">
              {/* Dark intro card */}
              <div className="rounded-2xl bg-[#1A1A1A] p-8 md:p-12 relative overflow-hidden">
                {/* Ambient glow */}
                <div
                  className="absolute top-[-30%] right-[-20%] w-[400px] h-[400px] rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)" }}
                />

                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: supanovaEase }}
                  className="flex items-center gap-2 mb-6"
                >
                  <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-medium border border-white/15 text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                    무료 · 90초 · 이메일만 있으면 됩니다
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: supanovaEase }}
                  className="font-display font-black text-[28px] md:text-[40px] lg:text-[48px] text-white leading-[1.1] tracking-tight mb-4"
                  style={{ wordBreak: "keep-all", textWrap: "balance" }}
                >
                  대부분의 셀러는
                  <br />
                  자기가 어디에 돈을
                  <br className="hidden md:block" />
                  쓰는지 모릅니다
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25, ease: supanovaEase }}
                  className="text-white/50 text-base md:text-lg mb-8 max-w-md"
                  style={{ wordBreak: "keep-all" }}
                >
                  3분이면 매달 얼마를 AI로 줄일 수 있는지 알 수 있습니다
                </motion.p>

                {/* Reward preview — 3 glass cards */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: supanovaEase }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10"
                >
                  {rewards.map((r, i) => (
                    <motion.div
                      key={r.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.35 + i * 0.08, ease: supanovaEase }}
                      className="rounded-xl bg-white/[0.06] ring-1 ring-white/10 p-4 backdrop-blur-sm"
                    >
                      <Icon icon={r.icon} width={20} className="text-white/40 mb-2" />
                      <p className="text-white/80 text-sm font-semibold mb-0.5">{r.title}</p>
                      <p className="text-white/40 text-xs">{r.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Form inputs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45, ease: supanovaEase }}
                  className="space-y-4 mb-8"
                >
                  <div className="relative">
                    <label className="block text-xs text-white/40 mb-1.5 font-medium">카테고리</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className={selectClassDark}>
                      <option value="">카테고리를 선택하세요</option>
                      {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
                    </select>
                    <Icon icon="solar:alt-arrow-down-linear" className="absolute right-3 top-[30px] text-white/30 pointer-events-none" width={16} />
                  </div>
                  <div className="relative">
                    <label className="block text-xs text-white/40 mb-1.5 font-medium">월 매출 규모</label>
                    <select value={revenue} onChange={(e) => setRevenue(e.target.value)} className={selectClassDark}>
                      <option value="">매출 규모를 선택하세요</option>
                      {revenueRanges.map((r) => (<option key={r.value} value={r.value}>{r.label}</option>))}
                    </select>
                    <Icon icon="solar:alt-arrow-down-linear" className="absolute right-3 top-[30px] text-white/30 pointer-events-none" width={16} />
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55, ease: supanovaEase }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-white text-[#1A1A1A] hover:bg-white/90 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] active:scale-[0.98]"
                    onClick={nextStep}
                    disabled={!category || !revenue}
                  >
                    내 루틴 분석하기 →
                  </Button>
                </motion.div>
              </div>
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
            <div className="mb-10">
              <button onClick={prevStep} className="text-[#999] text-sm flex items-center gap-1 hover:text-[#1A1A1A] transition-colors duration-300 mb-4 cursor-pointer">
                <Icon icon="solar:arrow-left-linear" width={16} />
                이전
              </button>
              <h3
                className="font-display font-black text-[28px] md:text-[40px] text-[#1A1A1A] mb-3 leading-tight tracking-tight"
                style={{ wordBreak: "keep-all", textWrap: "balance" }}
              >
                하루 중 이 시간이
                <br className="md:hidden" />
                전부 비용입니다
              </h3>
              <p className="text-[#666] text-base md:text-lg" style={{ wordBreak: "keep-all" }}>
                각 업무에 쓰는 시간을 선택하세요
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
              {/* Task cards */}
              <div className="space-y-3">
                {tasks.map((task, i) => {
                  const minuteOptions = [
                    { label: "안 함", value: 0 },
                    { label: "30분", value: 0.5 },
                    { label: "1시간", value: 1 },
                    { label: "2시간", value: 2 },
                    { label: "3시간", value: 3 },
                    ...(task.maxHours > 3 ? [{ label: `${task.maxHours}시간+`, value: task.maxHours }] : []),
                  ].filter((o) => o.value <= task.maxHours);

                  return (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05, ease: supanovaEase }}
                      className="rounded-2xl border border-[#E0E0E0] bg-white p-5 md:p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center shrink-0">
                          <Icon icon={task.icon} width={22} className="text-[#1A1A1A]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-base font-bold text-[#1A1A1A] block">{task.label}</span>
                          <span className="text-xs text-[#999]">{task.description}</span>
                        </div>
                        {hours[task.id] > 0 && (
                          <span className="font-display font-black text-lg tabular-nums text-[#1A1A1A]">
                            {hours[task.id] >= 1 ? `${hours[task.id]}시간` : "30분"}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {minuteOptions.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setHour(task.id, opt.value)}
                            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer active:scale-[0.95] ${
                              hours[task.id] === opt.value
                                ? "bg-[#1A1A1A] text-white shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                                : "bg-[#F5F5F5] text-[#666] hover:bg-[#E8E8E8]"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Donut chart — sticky right */}
              <div className="hidden lg:block sticky top-8">
                <DonutChart hours={hours} />
                <div className="mt-6 text-center">
                  <p className="font-display font-black text-[40px] tabular-nums text-[#1A1A1A] leading-none">
                    {results.totalHours.toFixed(1)}시간
                  </p>
                  <p className="text-[#999] text-sm mt-1">하루 반복 업무</p>
                </div>
              </div>

              {/* Donut — mobile */}
              <div className="lg:hidden flex flex-col items-center">
                <DonutChart hours={hours} />
                <p className="font-display font-black text-[32px] tabular-nums text-[#1A1A1A] leading-none mt-4">
                  {results.totalHours.toFixed(1)}시간
                </p>
                <p className="text-[#999] text-sm mt-1">하루 반복 업무</p>
              </div>
            </div>

            {/* Simple summary */}
            {topTask && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: supanovaEase }}
                className="text-center text-[#666] text-sm mt-8 mb-8"
                style={{ wordBreak: "keep-all" }}
              >
                가장 많은 시간을 쓰는 업무: <strong className="text-[#1A1A1A]">{topTask}</strong>
              </motion.p>
            )}

            <div className="flex justify-end">
              <Button variant="primary" size="lg" onClick={nextStep} className="active:scale-[0.98]">
                외주비 확인하기 →
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
              <button onClick={prevStep} className="text-[#999] text-sm flex items-center gap-1 hover:text-[#1A1A1A] transition-colors duration-300 mb-4 cursor-pointer">
                <Icon icon="solar:arrow-left-linear" width={16} />
                이전
              </button>
              <h3
                className="font-display font-black text-2xl md:text-[36px] text-[#1A1A1A] mb-2 leading-tight tracking-tight"
                style={{ wordBreak: "keep-all", textWrap: "balance" }}
              >
                이 돈이 매달 빠져나갑니다
              </h3>
              <p className="text-[#666] text-sm" style={{ wordBreak: "keep-all" }}>
                현재 외주하고 있는 업무를 체크해주세요
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
              <div className="space-y-4">
                {activeTasks.map((task, i) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: supanovaEase }}
                    className="p-4 rounded-xl border border-[#E0E0E0] bg-white hover:border-[#CCCCCC] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon icon={task.icon} width={20} className="text-[#1A1A1A]" />
                      <span className="text-sm font-semibold text-[#1A1A1A]">{task.label}</span>
                      <span className="text-xs text-[#999] ml-auto tabular-nums">{hours[task.id] >= 1 ? `${hours[task.id]}시간/일` : hours[task.id] > 0 ? "30분/일" : ""}</span>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer mb-3">
                      <input
                        type="checkbox"
                        checked={outsourceUsing[task.id]}
                        onChange={(e) => setOutsourceUse(task.id, e.target.checked)}
                        className="w-4 h-4 rounded border-[#E0E0E0] accent-[#1A1A1A] cursor-pointer"
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
                          <label className="block text-xs text-[#999] mb-1">{task.outsource.label} 월 비용</label>
                          <select
                            value={outsourceCosts[task.id]}
                            onChange={(e) => setOutsourceCost(task.id, parseInt(e.target.value))}
                            className={selectClass}
                          >
                            {task.outsource.costOptions.map((opt, idx) => (
                              <option key={idx} value={idx}>{opt}</option>
                            ))}
                          </select>
                          <Icon icon="solar:alt-arrow-down-linear" className="absolute right-3 top-[26px] text-[#999] pointer-events-none" width={16} />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                {activeTasks.length === 0 && (
                  <p className="text-center text-[#999] text-sm py-8">이전 단계에서 시간을 배분한 업무가 없습니다.</p>
                )}
              </div>

              {/* Live Summary Panel */}
              <div className="lg:sticky lg:top-8">
                <div className="rounded-xl border border-[#E0E0E0] bg-[#F8F8F8] p-6">
                  <h4 className="text-xs font-semibold text-[#999] uppercase tracking-wider mb-4">외주 비용 요약</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-[#999] mb-0.5">월 외주비 합계</p>
                      <p className="font-display font-black text-2xl tabular-nums text-[#1A1A1A]">
                        <AnimatedNumber value={results.totalMonthlyCost} suffix="만원" />
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#999] mb-0.5">연간 환산</p>
                      <p className="font-display font-black text-lg tabular-nums text-[#1A1A1A]">
                        <AnimatedNumber value={results.totalAnnualCost} suffix="만원" />
                      </p>
                    </div>
                    {results.costRatio !== null && results.costRatio > 0 && (
                      <div>
                        <p className="text-xs text-[#999] mb-0.5">매출 대비 외주비</p>
                        <p className="font-display font-black text-lg tabular-nums text-[#CC0000]">
                          매출의 <AnimatedNumber value={results.costRatio} suffix="%" /> 수준
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#E0E0E0]">
                    <p className="text-xs text-[#999]" style={{ wordBreak: "keep-all" }}>
                      이 중 AI가 대신할 수 있는 금액을 보여드릴게요
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button variant="primary" size="lg" onClick={nextStep} className="active:scale-[0.98]">
                AI 절감액 확인 →
              </Button>
            </div>
          </motion.div>
        )}

        {/* ═══════ STEP 3: Results (Loss Framing) + Dual CTA ═══════ */}
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
              <button onClick={prevStep} className="text-[#999] text-sm flex items-center gap-1 hover:text-[#1A1A1A] transition-colors duration-300 mb-4 cursor-pointer">
                <Icon icon="solar:arrow-left-linear" width={16} />
                이전
              </button>
            </div>

            {/* ── Hero Result Card: ONE killer number ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: supanovaEase }}
              className="rounded-2xl bg-[#1A1A1A] p-8 md:p-12 mb-8 relative overflow-hidden"
            >
              <div
                className="absolute top-[-20%] right-[-15%] w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(204,0,0,0.06) 0%, transparent 70%)" }}
              />

              <div className="relative z-10 text-center">
                <p className="text-white/40 text-sm md:text-base mb-4" style={{ wordBreak: "keep-all" }}>
                  매달 반복 업무에 빠져나가는 비용
                </p>

                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: supanovaEase }}
                  className="font-display font-black text-[56px] md:text-[80px] tabular-nums text-[#CC0000] leading-none mb-2"
                >
                  {formatWon(results.totalMonthlyCost)}원
                </motion.p>
                <p className="text-white/30 text-sm tabular-nums mb-8">
                  연간 {formatWon(results.totalAnnualCost)}원
                </p>

                {/* Before / After bar comparison */}
                <div className="max-w-md mx-auto space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-white/50 mb-1.5">
                      <span>현재 외주비</span>
                      <span className="tabular-nums">{formatWon(results.totalMonthlyCost)}원/월</span>
                    </div>
                    <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-white/30"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: supanovaEase }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white/50 mb-1.5">
                      <span>AI 전환 후</span>
                      <span className="tabular-nums text-[#059669] font-semibold">
                        {formatWon(results.totalMonthlyCost - results.totalMonthlySavings)}원/월
                      </span>
                    </div>
                    <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-[#059669]"
                        initial={{ width: 0 }}
                        animate={{ width: `${results.totalMonthlyCost > 0 ? Math.max(100 - results.savingsRate, 5) : 0}%` }}
                        transition={{ duration: 1, delay: 0.5, ease: supanovaEase }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-white/60 text-lg md:text-xl font-bold mt-8" style={{ wordBreak: "keep-all" }}>
                  이 중 약 <span className="text-[#059669]">{results.savingsRate}%</span>는 AI가 대신할 수 있습니다
                </p>
              </div>
            </motion.div>

            {/* ── Collapsible detail ── */}
            {results.costBreakdown.length > 0 && (
              <details className="mb-8 group">
                <summary className="flex items-center justify-center gap-2 text-sm text-[#999] cursor-pointer hover:text-[#666] transition-colors duration-300 py-3">
                  <span>업무별 상세 보기</span>
                  <Icon icon="solar:alt-arrow-down-linear" width={14} className="group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="mt-4 space-y-2">
                  {results.costBreakdown.map(({ task, cost, savings, rate }) => (
                    <div key={task.id} className="flex items-center gap-3 rounded-xl border border-[#E0E0E0] bg-white px-4 py-3">
                      <Icon icon={task.icon} width={18} className="text-[#1A1A1A] shrink-0" />
                      <span className="text-sm font-semibold text-[#1A1A1A] flex-1">{task.label}</span>
                      <span className="text-xs text-[#999] tabular-nums">{cost}만원 →</span>
                      <span className="text-xs text-[#059669] font-bold tabular-nums">{cost - savings}만원</span>
                      <span className="text-xs text-[#059669] font-bold tabular-nums">-{Math.round(rate * 100)}%</span>
                    </div>
                  ))}
                </div>
              </details>
            )}

            {/* ── Inline CTA buttons ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: supanovaEase }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
            >
              <Button
                variant="primary"
                size="lg"
                className="active:scale-[0.98]"
                onClick={() => setShowCTAModal(true)}
              >
                이 비용 줄이는 방법 받기 →
              </Button>
              <Button
                href="/payment"
                variant="secondary"
                size="lg"
                className="active:scale-[0.98]"
              >
                바로 결제하고 시작
              </Button>
            </motion.div>

            <p className="text-center text-xs text-[#999]">아직 결정이 어렵다면 먼저 웨비나를 확인해보세요</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════ CTA Modal Popup ═══════ */}
      <AnimatePresence>
        {showCTAModal && !submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowCTAModal(false)}
            />

            {/* Modal — large, two-section */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: supanovaEase }}
              className="relative z-10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.25)]"
            >
              {/* Close */}
              <button
                onClick={() => setShowCTAModal(false)}
                className="absolute top-5 right-5 z-20 text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <Icon icon="solar:close-circle-linear" width={28} />
              </button>

              {/* Top: Shock recap — dark */}
              <div className="bg-[#1A1A1A] px-8 py-10 md:px-12 md:py-12 text-center">
                <p className="text-white/50 text-base mb-3">매달 반복 업무에 빠지는 비용</p>
                <p className="font-display font-black text-[52px] md:text-[68px] tabular-nums text-[#CC0000] leading-none mb-2">
                  {formatWon(results.totalMonthlyCost)}원
                </p>
                <p className="text-[#059669] font-bold text-xl">
                  약 {results.savingsRate}% 절감 가능
                </p>
              </div>

              {/* Bottom: Two paths — white */}
              <div className="bg-white px-8 py-8 md:px-12 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Free path — lead magnet */}
                  <div className="rounded-2xl border border-[#E0E0E0] p-6 md:p-8">
                    <p className="text-xs uppercase tracking-[0.12em] font-bold text-[#999] mb-3">무료</p>
                    <p className="text-[#1A1A1A] font-bold text-lg mb-2">온보딩 자료 받기</p>
                    <p className="text-[#666] text-sm mb-5" style={{ wordBreak: "keep-all" }}>
                      이메일로 체험 자료와 실전 인사이트를 보내드립니다
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {[
                        "내 외주비 절감 리포트",
                        "AI 봇 체험 온보딩 가이드",
                        "셀러 AI 실전 레터 (주간)",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-[#444]">
                          <Icon icon="solar:check-circle-bold" width={16} className="text-[#1A1A1A] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="이메일 주소"
                      className="w-full px-5 py-4 rounded-xl border border-[#E0E0E0] bg-[#F8F8F8] text-[#1A1A1A] text-base focus:outline-none focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 transition-all duration-300 mb-3"
                    />
                    <label className="flex items-start gap-2.5 cursor-pointer mb-4">
                      <input
                        type="checkbox"
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        className="w-5 h-5 rounded border-[#E0E0E0] accent-[#1A1A1A] mt-0.5 cursor-pointer"
                      />
                      <span className="text-sm text-[#999]">개인정보 수집 및 이용에 동의합니다</span>
                    </label>
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full active:scale-[0.98] text-base"
                      onClick={() => { handleSubmitEmail(); setShowCTAModal(false); }}
                      disabled={!email || !privacyConsent}
                    >
                      무료 자료 받기 →
                    </Button>
                  </div>

                  {/* Paid path — direct payment */}
                  <div className="rounded-2xl bg-[#1A1A1A] p-6 md:p-8 relative overflow-hidden">
                    <div
                      className="absolute top-[-20%] right-[-15%] w-[200px] h-[200px] rounded-full pointer-events-none"
                      style={{ background: "radial-gradient(circle, rgba(5,150,105,0.1) 0%, transparent 70%)" }}
                    />
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-bold bg-[#059669]/20 text-[#059669] mb-3">
                        바로 시작
                      </div>
                      <p className="text-white font-bold text-lg mb-2">AI 비서 봇 도입</p>
                      <p className="text-white/50 text-sm mb-5" style={{ wordBreak: "keep-all" }}>
                        결제 후 바로 봇 세팅을 시작합니다
                      </p>

                      <ul className="space-y-2.5 mb-6">
                        {[
                          "AI 셀러 비서 봇 즉시 세팅",
                          "1:1 온보딩 지원",
                          "30일 환불 보장",
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                            <Icon icon="solar:check-circle-bold" width={16} className="text-[#059669] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mb-5">
                        <span className="font-display font-black text-[36px] text-white tabular-nums">49,000</span>
                        <span className="text-white/40 text-base">원/월</span>
                      </div>

                      <Button
                        href="/payment"
                        variant="primary"
                        size="lg"
                        className="w-full bg-[#059669] text-white hover:bg-[#047857] active:scale-[0.98] text-base"
                      >
                        결제하고 바로 시작 →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submitted success (replaces modal) */}
      <AnimatePresence>
        {submitted && showCTAModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowCTAModal(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.2)]"
            >
              <Icon icon="solar:check-circle-bold" width={56} className="text-[#059669] mx-auto mb-4" />
              <p className="font-display font-black text-2xl text-[#1A1A1A] mb-2">이메일을 확인해주세요!</p>
              <p className="text-[#666] text-base mb-6" style={{ wordBreak: "keep-all" }}>
                절감 리포트와 봇 체험 가이드를 보내드렸습니다.
              </p>
              <Button variant="primary" size="md" onClick={() => setShowCTAModal(false)}>
                확인
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Global styles ── */}
      <style jsx global>{`
        #diagnosis select {
          background-image: none;
        }
      `}</style>
    </SectionWrapper>
  );
}
