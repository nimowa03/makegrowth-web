"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { fadeInUp } from "@/lib/motionVariants";

const platforms = [
  { name: "Telegram", icon: "simple-icons:telegram", color: "#26A5E4" },
  { name: "Coupang", icon: "solar:bag-4-bold", color: "#E01E1E" },
  { name: "Naver", icon: "simple-icons:naver", color: "#03C75A" },
  { name: "N8N", icon: "simple-icons:n8n", color: "#EA4B71" },
  { name: "Google Sheets", icon: "simple-icons:googlesheets", color: "#34A853" },
  { name: "Instagram", icon: "simple-icons:instagram", color: "#E4405F" },
  { name: "YouTube", icon: "simple-icons:youtube", color: "#FF0000" },
  { name: "Claude AI", icon: "simple-icons:claude", color: "#D97757" },
];

export function TrustLogos() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-14 md:py-20 px-6 md:px-8 bg-[#FAFAFA] border-t border-b border-[#F0F0F0]">
      <div className="max-w-content mx-auto">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-xs uppercase tracking-[0.15em] font-medium text-[#999] mb-10"
        >
          연동 플랫폼 & 기술 스택
        </motion.p>

        {/* Marquee */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex animate-marquee"
          >
            {[...platforms, ...platforms, ...platforms].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex items-center gap-3 px-8 shrink-0 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E0E0] flex items-center justify-center group-hover:border-transparent group-hover:shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <Icon icon={p.icon} width={22} style={{ color: p.color }} />
                </div>
                <span className="text-sm font-semibold text-[#666] whitespace-nowrap">{p.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
