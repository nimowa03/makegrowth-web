"use client";

import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-display text-[80px] md:text-[120px] font-black text-[#E0E0E0] leading-none select-none">
          오류
        </p>
        <h1 className="text-[#1A1A1A] text-xl md:text-2xl font-bold mt-4 mb-3">
          문제가 발생했습니다
        </h1>
        <p
          className="text-[#666] text-sm md:text-base mb-8"
          style={{ wordBreak: "keep-all" }}
        >
          잠시 후 다시 시도해주세요.
        </p>
        <Button variant="primary" size="lg" onClick={reset}>
          다시 시도
        </Button>
      </div>
    </section>
  );
}
