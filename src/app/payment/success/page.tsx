"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";

function SuccessContent() {
  const searchParams = useSearchParams();
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  const paymentKey = searchParams.get("paymentKey");
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");

  useEffect(() => {
    if (!paymentKey || !orderId || !amount) return;

    fetch("/api/payment/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentKey, orderId, amount: Number(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setConfirmed(true);
      })
      .catch(() => setError("결제 승인 중 오류가 발생했습니다."));
  }, [paymentKey, orderId, amount]);

  if (error) {
    return (
      <div className="text-center">
        <Icon icon="solar:close-circle-bold" width={64} className="text-[#CC0000] mx-auto mb-4" />
        <h1 className="font-display font-black text-2xl text-[#1A1A1A] mb-2">결제 승인 실패</h1>
        <p className="text-[#666] mb-6">{error}</p>
        <Button href="/payment">다시 시도</Button>
      </div>
    );
  }

  if (!confirmed) {
    return (
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] border-t-transparent animate-spin mx-auto mb-4" />
        <p className="text-[#666]">결제를 승인하고 있습니다...</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <Icon icon="solar:check-circle-bold" width={64} className="text-[#059669] mx-auto mb-4" />
      <h1 className="font-display font-black text-[32px] md:text-[40px] text-[#1A1A1A] mb-3 tracking-tight">
        결제가 완료되었습니다
      </h1>
      <p className="text-[#666] text-base md:text-lg mb-2" style={{ wordBreak: "keep-all" }}>
        AI 직원 세팅을 시작합니다.
      </p>
      <p className="text-[#999] text-sm mb-8">
        주문번호: {orderId}
      </p>

      <div className="rounded-2xl bg-[#F8F8F8] border border-[#E0E0E0] p-6 md:p-8 mb-8 text-left max-w-md mx-auto">
        <p className="text-sm font-bold text-[#1A1A1A] mb-4">다음 단계</p>
        <ul className="space-y-3">
          {[
            "입력하신 이메일로 온보딩 가이드가 발송됩니다",
            "1:1 봇 세팅 안내를 위해 연락드립니다",
            "텔레그램에서 AI 직원을 만나보세요",
          ].map((item, i) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[#444]">
              <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span style={{ wordBreak: "keep-all" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button href="/" variant="primary" size="lg">
        홈으로 돌아가기
      </Button>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <section className="bg-white min-h-screen py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-lg mx-auto">
        <Suspense fallback={
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] border-t-transparent animate-spin mx-auto mb-4" />
            <p className="text-[#666]">결제를 승인하고 있습니다...</p>
          </div>
        }>
          <SuccessContent />
        </Suspense>
      </div>
    </section>
  );
}
