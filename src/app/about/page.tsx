import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "대표 소개",
};

export default function AboutPage() {
  return <AboutContent />;
}
