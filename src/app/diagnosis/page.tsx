import type { Metadata } from "next";
import { DiagnosisTool } from "@/components/sections/DiagnosisTool";

export const metadata: Metadata = {
  title: "셀러 루틴 분석기",
  description: "3분이면 내 하루가 어디에 쓰이는지, AI로 얼마나 절감할 수 있는지 알 수 있습니다.",
};

export default function DiagnosisPage() {
  return <DiagnosisTool />;
}
