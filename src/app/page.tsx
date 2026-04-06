import { Hero } from "@/components/sections/Hero";
import { MarketReality } from "@/components/sections/MarketReality";
import { DiagnosisTool } from "@/components/sections/DiagnosisTool";
import { KillerModule } from "@/components/sections/KillerModule";
import { WhatIsAX } from "@/components/sections/WhatIsAX";
import { InstructorIntro } from "@/components/sections/InstructorIntro";
import { HomepageFAQ } from "@/components/sections/HomepageFAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketReality />
      <DiagnosisTool />
      <KillerModule />
      <WhatIsAX />
      <InstructorIntro />
      <HomepageFAQ />
    </>
  );
}
