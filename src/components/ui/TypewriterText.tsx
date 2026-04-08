"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  texts: string[];
  resolution: string;
  className?: string;
}

export function TypewriterText({ texts, resolution, className }: TypewriterTextProps) {
  const { displayText, isResolution, isTyping } = useTypewriter({
    texts,
    resolution,
  });

  return (
    <div className={cn("min-h-[3em]", className)}>
      <AnimatePresence mode="wait">
        {isResolution ? (
          <motion.p
            key="resolution"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#1A1A1A] text-xl md:text-2xl font-bold"
          >
            {displayText}
          </motion.p>
        ) : (
          <p className="text-[#666] text-lg md:text-xl">
            &ldquo;{displayText}
            <span
              className={cn(
                "inline-block w-[2px] h-[1.1em] bg-[#666] ml-0.5 align-middle",
                isTyping && "animate-pulse"
              )}
            />
            &rdquo;
          </p>
        )}
      </AnimatePresence>
    </div>
  );
}
