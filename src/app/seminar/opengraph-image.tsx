import { generateOgImage, ogSize } from "@/lib/og";

export const runtime = "edge";
export const alt = "웨비나 — 메이크그로스";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return generateOgImage({
    title: "셀러 AI 자동화 웨비나",
    description: "직접 만들고 가져가는 실전 AI 시스템 — 진단부터 구축까지",
    eyebrow: "웨비나",
  });
}
