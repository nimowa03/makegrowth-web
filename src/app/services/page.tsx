import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "서비스",
  description: "SNS 자동화, 상세페이지, 리서치, CS까지. 이커머스 셀러 업무를 AI 시스템으로 전환합니다.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
