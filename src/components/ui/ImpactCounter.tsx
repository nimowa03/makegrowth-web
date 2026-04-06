"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeInUp } from "@/lib/motionVariants";

interface ImpactCounterProps {
  value: number;
  suffix?: string;
  label: string;
  before: string;
  after: string;
  className?: string;
}

export function ImpactCounter({
  value,
  suffix = "",
  label,
  before,
  after,
  className = "",
}: ImpactCounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const count = useCountUp({ end: value, duration: 1800, enabled: isInView });

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center lg:text-left"
      >
        {/* Large number */}
        <p
          className="font-display text-[80px] md:text-[100px] lg:text-[120px] font-black text-[#1A1A1A] leading-none tracking-tight"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {count}
          <span className="text-[60px] md:text-[72px] lg:text-[88px]">
            {suffix}
          </span>
        </p>

        {/* Label */}
        <p className="text-[#666] text-lg md:text-xl mt-2 mb-6">{label}</p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="h-px bg-[#E0E0E0] origin-left mb-6"
        />

        {/* Before → After */}
        <div className="flex items-center gap-3 text-sm md:text-base">
          <span className="text-[#999] line-through">{before}</span>
          <span className="text-[#CCCCCC]">→</span>
          <span className="text-[#1A1A1A] font-semibold">{after}</span>
        </div>
      </motion.div>
    </div>
  );
}
