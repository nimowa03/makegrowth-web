"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useInView } from "@/hooks/useInView";
import { fadeInUp } from "@/lib/motionVariants";

const platforms = [
  { name: "Telegram", icon: "simple-icons:telegram" },
  { name: "Coupang", icon: "solar:bag-4-linear", brand: false },
  { name: "Naver", icon: "simple-icons:naver" },
  { name: "N8N", icon: "simple-icons:n8n" },
  { name: "Google Sheets", icon: "simple-icons:googlesheets" },
  { name: "Instagram", icon: "simple-icons:instagram" },
  { name: "YouTube", icon: "simple-icons:youtube" },
  { name: "Claude AI", icon: "simple-icons:claude" },
];

export function TrustLogos() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-12 md:py-16 px-6 md:px-8 bg-white border-t border-b border-[#F0F0F0]">
      <div className="max-w-content mx-auto">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-xs uppercase tracking-[0.15em] font-medium text-[#999] mb-8"
        >
          연동 플랫폼 & 기술 스택
        </motion.p>

        {/* Marquee */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex animate-marquee"
          >
            {[...platforms, ...platforms].map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex items-center gap-2.5 px-7 shrink-0">
                <Icon icon={p.icon} width={22} className="text-[#999]" />
                <span className="text-sm font-medium text-[#999] whitespace-nowrap">{p.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  );
}
