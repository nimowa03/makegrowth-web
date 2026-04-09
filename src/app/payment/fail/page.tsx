"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";

function FailContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const message = searchParams.get("message");

  return (
    <div className="text-center">
      <Icon icon="solar:close-circle-bold" width={64} className="text-[#CC0000] mx-auto mb-4" />
      <h1 className="font-display font-black text-[32px] text-[#1A1A1A] mb-3 tracking-tight">
        결제에 실패했습니다
      </h1>
      <p className="text-[#666] text-base mb-2" style={{ wordBreak: "keep-all" }}>
        {message || "결제 처리 중 문제가 발생했습니다."}
      </p>
      {code && <p className="text-[#999] text-xs mb-8">오류 코드: {code}</p>}

      <div className="flex gap-3 justify-center">
        <Button href="/payment" variant="primary" size="lg">
          다시 시도
        </Button>
        <Button href="/contact" variant="secondary" size="lg">
          문의하기
        </Button>
      </div>
    </div>
  );
}

export default function PaymentFailPage() {
  return (
    <section className="bg-white min-h-screen py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-lg mx-auto">
        <Suspense fallback={<div className="text-center text-[#666]">로딩 중...</div>}>
          <FailContent />
        </Suspense>
      </div>
    </section>
  );
}
