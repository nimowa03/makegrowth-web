"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface FlowNode {
  title: string;
  detail: string;
}

interface ProcessFlowProps {
  nodes: FlowNode[];
  className?: string;
}

const supanovaEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProcessFlow({ nodes, className = "" }: ProcessFlowProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className={className}>
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start gap-0">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-start flex-1">
            {/* Node */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 20, filter: "blur(4px)" }
              }
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: supanovaEase,
              }}
              className="flex flex-col items-center text-center min-w-[120px]"
            >
              {/* Circle */}
              <div className="w-12 h-12 rounded-full border border-[#E0E0E0] flex items-center justify-center mb-3">
                <span className="text-xs font-mono text-[#999]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm font-semibold text-[#1A1A1A] mb-1">
                {node.title}
              </p>
              <p className="text-xs text-[#999]">{node.detail}</p>
            </motion.div>

            {/* Connector line */}
            {i < nodes.length - 1 && (
              <div className="flex-1 flex items-center pt-6 px-2">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.2 + 0.3,
                    ease: supanovaEase,
                  }}
                  className="h-px bg-[#E0E0E0] w-full origin-left relative"
                >
                  {/* Arrow */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.2 + 0.6 }}
                    className="absolute -right-1 -top-[3px] text-[#CCCCCC] text-xs"
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex flex-col gap-0 md:hidden">
        {nodes.map((node, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Node */}
            <motion.div
              initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, filter: "blur(0px)" }
                  : { opacity: 0, x: -20, filter: "blur(4px)" }
              }
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: supanovaEase,
              }}
              className="flex items-center gap-4 w-full"
            >
              <div className="w-10 h-10 rounded-full border border-[#E0E0E0] flex items-center justify-center shrink-0">
                <span className="text-xs font-mono text-[#999]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {node.title}
                </p>
                <p className="text-xs text-[#999]">{node.detail}</p>
              </div>
            </motion.div>

            {/* Vertical connector */}
            {i < nodes.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.15 + 0.2,
                  ease: supanovaEase,
                }}
                className="w-px h-8 bg-[#E0E0E0] ml-5 origin-top"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
