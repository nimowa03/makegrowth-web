import { generateOgImage, ogSize } from "@/lib/og";

export const runtime = "edge";
export const alt = "수강 후기 — 메이크그로스";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return generateOgImage({
    title: "수강 후기",
    description: "메이크그로스 웨비나 수강생들의 실제 경험",
    eyebrow: "Reviews",
  });
}
