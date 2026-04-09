import { Hero } from "@/components/sections/Hero";
import { VideoIntro } from "@/components/sections/VideoIntro";
import { TargetSellers } from "@/components/sections/TargetSellers";
import { PainCost } from "@/components/sections/PainCost";
import { BotDemo } from "@/components/sections/BotDemo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { TrustLogos } from "@/components/sections/TrustLogos";
import { DiagnosisTool } from "@/components/sections/DiagnosisTool";
import { HomePricing } from "@/components/sections/HomePricing";
import { HomepageFAQ } from "@/components/sections/HomepageFAQ";

export default function Home() {
  return (
    <>
      {/* ── Hook: 멈추게 한다 ── */}
      <Hero />
      <VideoIntro />

      {/* ── Relate: "이거 내 얘기인데?" ── */}
      <TargetSellers />

      {/* ── Bridge: 문제의 크기를 느끼게 한다 ── */}
      <PainCost />

      {/* ── Promise: 해결된 모습을 보여준다 ── */}
      <BotDemo />

      {/* ── Trust: 신뢰 구축 ── */}
      <HowItWorks />
      <WhyUs />
      <TrustLogos />

      {/* ── Action: 내 상황으로 개인화 ── */}
      <DiagnosisTool />

      {/* ── Decision: 가격 확인 ── */}
      <HomePricing />

      {/* ── Close: 마지막 의문 해소 ── */}
      <HomepageFAQ />
    </>
  );
}
