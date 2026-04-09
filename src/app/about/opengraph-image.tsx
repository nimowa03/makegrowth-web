import { generateOgImage, ogSize } from "@/lib/og";

export const runtime = "edge";
export const alt = "회사 소개 — 메이크그로스";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return generateOgImage({
    title: "셀러 출신 AI 빌더",
    description: "이커머스 현장을 아는 사람이 만든 AI 시스템",
    eyebrow: "About",
  });
}
