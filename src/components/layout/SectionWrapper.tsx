"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children?: React.ReactNode;
  theme?: "dark" | "warm-bg" | "warm-surface" | "gradient-transition" | "light" | "light-alt";
  className?: string;
  id?: string;
  animate?: boolean;
}

const bgMap: Record<string, string> = {
  dark: "bg-warm-dark text-white",
  "warm-bg": "bg-warm-bg text-[#1A1A1A]",
  "warm-surface": "bg-warm-surface text-[#1A1A1A]",
  "gradient-transition": "bg-gradient-to-b from-warm-dark to-warm-bg",
  light: "bg-warm-bg text-[#1A1A1A]",
  "light-alt": "bg-warm-surface text-[#1A1A1A]",
};

export function SectionWrapper({
  children,
  theme = "warm-bg",
  className,
  id,
  animate = true,
}: SectionWrapperProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const isGradientTransition = theme === "gradient-transition";

  const content = animate ? (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  ) : (
    children
  );

  if (isGradientTransition) {
    return (
      <div
        ref={ref}
        id={id}
        className={cn("h-24", bgMap[theme], className)}
      />
    );
  }

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "py-24 md:py-32 lg:py-40 px-6 md:px-8",
        bgMap[theme],
        className
      )}
    >
      <div className="max-w-content mx-auto">{content}</div>
    </section>
  );
}
