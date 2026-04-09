import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "결제",
  description: "AI 셀러 비서 봇 월 구독 결제. 30일 환불 보장.",
};

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
