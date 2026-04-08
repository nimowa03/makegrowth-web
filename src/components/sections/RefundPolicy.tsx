"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { refundPolicy } from "@/data/seminars";

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function RefundPolicy() {
  return (
    <SectionWrapper theme="warm-bg" id="refund-policy">
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] bg-transparent mb-4">
          Refund Policy
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A1A1A] leading-snug text-balance">
          환불 정책
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: supanovaEase }}
        className="max-w-md mx-auto"
      >
        <Card variant="light" innerClassName="!p-0 !overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(0,0,0,0.08)] bg-warm-surface">
                <th className="text-left text-sm font-semibold text-[#1A1A1A] py-3.5 px-5">
                  취소 시점
                </th>
                <th className="text-right text-sm font-semibold text-[#1A1A1A] py-3.5 px-5">
                  환불 금액
                </th>
              </tr>
            </thead>
            <tbody>
              {refundPolicy.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index < refundPolicy.length - 1
                      ? "border-b border-[rgba(0,0,0,0.08)]"
                      : ""
                  }
                >
                  <td className="text-sm text-[#444444] py-3.5 px-5">
                    {item.period}
                  </td>
                  <td className="text-sm text-[#1A1A1A] font-medium py-3.5 px-5 text-right">
                    {item.refund}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <p className="text-xs text-[#666666] text-center mt-4">
          환불 요청은 이메일(charlee@makegrowth.dev)로 접수해 주세요.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
