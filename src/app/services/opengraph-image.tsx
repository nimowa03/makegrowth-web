import { generateOgImage, ogSize } from "@/lib/og";

export const runtime = "edge";
export const alt = "서비스 — 메이크그로스";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return generateOgImage({
    title: "AI 직원",
    description: "SNS 자동화, 상세페이지, 리서치, CS까지 — 셀러 업무를 시스템으로 전환합니다",
    eyebrow: "서비스",
  });
}
