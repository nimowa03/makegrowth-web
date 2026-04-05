import type { Metadata } from "next";
import { SeminarHero } from "@/components/sections/SeminarHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { WakeUpCall } from "@/components/sections/WakeUpCall";
import { TheProblem } from "@/components/sections/TheProblem";
import { TheSolution } from "@/components/sections/TheSolution";
import { Curriculum } from "@/components/sections/Curriculum";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { PersonaCards } from "@/components/sections/PersonaCards";
import { HonestWarning } from "@/components/sections/HonestWarning";
import { InstructorIntro } from "@/components/sections/InstructorIntro";
import { RefundPolicy } from "@/components/sections/RefundPolicy";
import { SeminarFAQ } from "@/components/sections/SeminarFAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "세미나",
};

export default function SeminarPage() {
  return (
    <>
      {/* 1. Hero (DARK — mesh gradient + orbs) */}
      <SeminarHero />

      {/* 2. Gradient transition band: dark → warm-bg */}
      <SectionWrapper theme="gradient-transition" animate={false}>
        <div className="h-0" />
      </SectionWrapper>

      {/* 3. WakeUpCall (WARM-SURFACE) — comparison table */}
      <WakeUpCall />

      {/* 4. TheProblem (WARM-BG) — pain point cards, red accent */}
      <TheProblem />

      {/* 5. TheSolution (WARM-SURFACE) — solution cards, green accent */}
      <TheSolution />

      {/* 6. Curriculum (WARM-BG) — timeline */}
      <Curriculum />

      {/* 7. BeforeAfter (WARM-SURFACE) */}
      <BeforeAfter />

      {/* 8. WhatYouGet (WARM-BG) */}
      <WhatYouGet />

      {/* 9. PersonaCards (WARM-SURFACE) */}
      <PersonaCards />

      {/* 10. HonestWarning (WARM-BG) — red accent, warm background */}
      <HonestWarning />

      {/* 11. InstructorIntro (WARM-SURFACE) */}
      <InstructorIntro />

      {/* 12. RefundPolicy (WARM-BG) */}
      <RefundPolicy />

      {/* 13. FAQ (WARM-SURFACE) */}
      <SeminarFAQ />

      {/* 14. FinalCTA (WARM-BG) — accent-bordered card */}
      <FinalCTA />
    </>
  );
}
