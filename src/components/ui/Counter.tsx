"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function Counter({ end, suffix = "", label, className }: CounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const count = useCountUp({ end, enabled: isInView });

  return (
    <div ref={ref} className={className}>
      <span
        className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="text-sm mt-1 text-[#666666]">{label}</p>
    </div>
  );
}
