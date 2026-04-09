"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { whatYouGet } from "@/data/seminars";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

const icons = [
  "solar:monitor-smartphone-bold",
  "solar:target-bold",
  "solar:widget-5-bold",
  "solar:document-text-bold",
  "solar:users-group-rounded-bold",
  "solar:link-round-bold",
];

export function WhatYouGet() {
  return (
    <SectionWrapper theme="warm-bg" id="what-you-get">
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
          What You Get
        </span>
        <h2
          className="font-display font-black text-[28px] md:text-[40px] text-[#1A1A1A] leading-tight tracking-tight"
          style={{ textWrap: "balance" }}
        >
          웨비나에서 가져가는 것
        </h2>
      </div>

      {/* Bento: first 2 large, next 4 compact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {whatYouGet.slice(0, 2).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: supanovaEase }}
            className="rounded-2xl bg-[#1A1A1A] p-6 md:p-8 group hover:shadow-[0_8px_40px_rgba(15,23,42,0.15)] transition-shadow duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <div className="w-12 h-12 rounded-xl bg-white/[0.08] ring-1 ring-white/10 flex items-center justify-center mb-4 group-hover:bg-white/[0.12] transition-colors duration-500">
              <Icon icon={icons[index]} width={24} className="text-white/60" />
            </div>
            <p className="text-white font-bold text-base md:text-lg leading-relaxed" style={{ wordBreak: "keep-all" }}>
              {item}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {whatYouGet.slice(2).map((item, index) => (
          <motion.div
            key={index + 2}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index + 2) * 0.08, ease: supanovaEase }}
            className="rounded-2xl border border-[#E0E0E0] bg-white p-5 md:p-6 group hover:shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:border-[#CCCCCC] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center mb-3 group-hover:bg-[#1A1A1A] transition-colors duration-500">
              <Icon icon={icons[index + 2]} width={20} className="text-[#1A1A1A] group-hover:text-white transition-colors duration-500" />
            </div>
            <p className="text-sm text-[#1A1A1A] font-semibold leading-relaxed" style={{ wordBreak: "keep-all" }}>
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
