import { generateOgImage, ogSize } from "@/lib/og";

export const runtime = "edge";
export const alt = "문의하기 — 메이크그로스";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return generateOgImage({
    title: "도입 문의",
    description: "AI 시스템 도입 상담 — 영업일 3일 내 답변드립니다",
    eyebrow: "Contact",
  });
}
