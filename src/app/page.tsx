import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { WhatIsAX } from "@/components/sections/WhatIsAX";
import { KillerModule } from "@/components/sections/KillerModule";
import { SystemsPreview } from "@/components/sections/SystemsPreview";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { SeminarPreview } from "@/components/sections/SeminarPreview";
import { InstructorIntro } from "@/components/sections/InstructorIntro";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionWrapper theme="gradient-transition" />
      <PainPoints />
      <WhatIsAX />
      <KillerModule />
      <SystemsPreview />
      <BeforeAfter />
      <SeminarPreview />
      <InstructorIntro />
      <NewsletterCTA />
    </>
  );
}
