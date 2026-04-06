import type { Metadata } from "next";
import { SeminarHero } from "@/components/sections/SeminarHero";
import { Curriculum } from "@/components/sections/Curriculum";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { SeminarFAQ } from "@/components/sections/SeminarFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "웨비나",
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
