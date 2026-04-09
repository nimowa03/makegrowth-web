import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "회사 소개",
  description: "이커머스 셀러 출신 AI 빌더 노아. 직접 겪은 셀러의 현실을 AI 시스템으로 해결합니다.",
};

export default function AboutPage() {
  return <AboutContent />;
}
