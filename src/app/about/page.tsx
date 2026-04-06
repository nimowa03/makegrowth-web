import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "회사 소개",
};

export default function AboutPage() {
  return <AboutContent />;
}
