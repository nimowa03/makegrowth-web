"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

interface ComparisonRow {
  criteria: string;
  youtube: { text: string; status: "good" | "neutral" | "bad" };
  offline: { text: string; status: "good" | "neutral" | "bad" };
  makegrowth: { text: string; status: "good" | "neutral" | "bad" };
}

const comparisonData: ComparisonRow[] = [
  {
    criteria: "형식",
    youtube: { text: "영상 강의 (일방향)", status: "neutral" },
    offline: { text: "강의 + 간단 실습", status: "neutral" },
    makegrowth: { text: "실습 중심 워크숍 (10명)", status: "good" },
  },
  {
    criteria: "실습",
    youtube: { text: "없음", status: "bad" },
    offline: { text: "일부 (데모 수준)", status: "neutral" },
    makegrowth: { text: "내 상품으로 직접 구축", status: "good" },
  },
  {
    criteria: "커스터마이징",
    youtube: { text: "범용 템플릿", status: "bad" },
    offline: { text: "제한적", status: "neutral" },
    makegrowth: { text: "내 카테고리 맞춤 세팅", status: "good" },
  },
  {
    criteria: "사후 지원",
    youtube: { text: "없음", status: "bad" },
    offline: { text: "1~2회 Q&A", status: "neutral" },
    makegrowth: { text: "커뮤니티 + 지속 업데이트", status: "good" },
  },
  {
    criteria: "결과물",
    youtube: { text: "지식 습득", status: "neutral" },
    offline: { text: "노트 필기", status: "neutral" },
    makegrowth: { text: "작동하는 AI 시스템", status: "good" },
  },
];

function StatusIcon({ status }: { status: "good" | "neutral" | "bad" }) {
  if (status === "good")
    return <Icon icon="solar:check-circle-bold" width={16} className="text-[#059669]" />;
  if (status === "bad")
    return <Icon icon="solar:close-circle-bold" width={16} className="text-[#DC2626]" />;
  return <Icon icon="solar:minus-circle-bold" width={16} className="text-[#A8A29E]" />;
}

const supanovaEase = [0.16, 1, 0.3, 1] as const;

export function WakeUpCall() {
  return (
    <SectionWrapper theme="warm-surface" id="wake-up-call">
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium bg-accent/10 text-accent mb-4">
          Why Different
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[#1C1917] leading-snug text-balance">
          왜 이 세미나가{" "}
          <span className="text-accent">다를까요?</span>
        </h2>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-sm text-[#A8A29E] font-medium pb-4 pr-4 w-[140px]">
                  비교 항목
                </th>
                <th className="text-center text-sm text-[#57534E] font-medium pb-4 px-4">
                  유튜브/블로그 강의
                </th>
                <th className="text-center text-sm text-[#57534E] font-medium pb-4 px-4">
                  일반 오프라인 강의
                </th>
                <th className="text-center text-sm font-semibold pb-4 px-4 text-accent">
                  메이크그로스 AX 세미나
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={row.criteria}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: supanovaEase,
                  }}
                  className="border-t border-[rgba(28,25,23,0.06)]"
                >
                  <td className="py-4 pr-4 text-sm font-medium text-[#57534E]">
                    {row.criteria}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <StatusIcon status={row.youtube.status} />
                      <span className="text-sm text-[#57534E]">
                        {row.youtube.text}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <StatusIcon status={row.offline.status} />
                      <span className="text-sm text-[#57534E]">
                        {row.offline.text}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center bg-accent/5 ring-1 ring-accent/20 rounded-lg">
                    <div className="flex items-center justify-center gap-2">
                      <StatusIcon status={row.makegrowth.status} />
                      <span className="text-sm font-medium text-[#1C1917]">
                        {row.makegrowth.text}
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {comparisonData.map((row, index) => (
          <motion.div
            key={row.criteria}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
              ease: supanovaEase,
            }}
            className="bg-white rounded-xl ring-1 ring-[rgba(28,25,23,0.06)] p-4 shadow-[0_2px_8px_rgba(28,25,23,0.04)]"
          >
            <p className="text-xs text-[#A8A29E] font-medium uppercase tracking-wider mb-3">
              {row.criteria}
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <StatusIcon status={row.youtube.status} />
                <div>
                  <p className="text-[11px] text-[#A8A29E]">유튜브/블로그</p>
                  <p className="text-sm text-[#57534E]">{row.youtube.text}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <StatusIcon status={row.offline.status} />
                <div>
                  <p className="text-[11px] text-[#A8A29E]">일반 오프라인</p>
                  <p className="text-sm text-[#57534E]">{row.offline.text}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-accent/5 ring-1 ring-accent/20 -mx-2 px-2 py-1.5 rounded-lg">
                <StatusIcon status={row.makegrowth.status} />
                <div>
                  <p className="text-[11px] text-accent font-medium">
                    메이크그로스 AX
                  </p>
                  <p className="text-sm font-medium text-[#1C1917]">
                    {row.makegrowth.text}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
