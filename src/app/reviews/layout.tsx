import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "수강 후기",
  description: "메이크그로스 웨비나 수강생들의 실제 후기를 확인하세요.",
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
