import { generateOgImage, ogSize } from "@/lib/og";

export const runtime = "edge";
export const alt = "셀러 루틴 분석기 — 메이크그로스";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return generateOgImage({
    title: "셀러 루틴 분석기",
    description: "지금 낭비하고 있는 시간과 비용, 90초 만에 확인하세요",
    eyebrow: "무료 진단",
  });
}
