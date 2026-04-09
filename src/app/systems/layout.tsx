import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "구축 시스템",
  description: "메이크그로스가 직접 구축한 AI 자동화 시스템을 확인하세요.",
};

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
