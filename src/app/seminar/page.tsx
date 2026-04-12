import type { Metadata } from "next";
import { SeminarHero } from "@/components/sections/SeminarHero";
import { Curriculum } from "@/components/sections/Curriculum";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { SeminarFAQ } from "@/components/sections/SeminarFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "웨비나",
  description: "AI 직원 라이브 시연 웨비나. 실제 작동하는 AI 직원을 눈앞에서 확인하세요.",
};

export default function SeminarPage() {
  return (
    <>
      <SeminarHero />
      <Curriculum />
      <WhatYouGet />
      <SeminarFAQ />
      <FinalCTA />
    </>
  );
}
