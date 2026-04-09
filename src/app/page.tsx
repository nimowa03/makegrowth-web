import { Hero } from "@/components/sections/Hero";
import { PainCost } from "@/components/sections/PainCost";
import { BotDemo } from "@/components/sections/BotDemo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { DiagnosisTool } from "@/components/sections/DiagnosisTool";
import { HomePricing } from "@/components/sections/HomePricing";
import { HomepageFAQ } from "@/components/sections/HomepageFAQ";

export default function Home() {
  return (
    <>
      {/* ── Hook: 멈추게 한다 ── */}
      <Hero />

      {/* ── Bridge: 내 문제라고 느끼게 한다 ── */}
      <PainCost />

      {/* ── Promise: 해결된 모습을 보여준다 ── */}
      <BotDemo />

      {/* ── Trust: 신뢰 구축 ── */}
      <HowItWorks />
      <WhyUs />

      {/* ── Action: 내 상황으로 개인화 ── */}
      <DiagnosisTool />

      {/* ── Decision: 가격 확인 ── */}
      <HomePricing />

      {/* ── Close: 마지막 의문 해소 ── */}
      <HomepageFAQ />
    </>
  );
}
