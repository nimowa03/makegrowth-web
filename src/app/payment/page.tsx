"use client";

import { useEffect, useRef } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { SITE_NAME } from "@/lib/constants";

const CLIENT_KEY = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY ?? "";
const PLAN_AMOUNT = 49000;
const PLAN_NAME = "AI 직원 월 구독";

function generateOrderId() {
  return `MG-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function generateCustomerKey() {
  if (typeof window === "undefined") return "";
  let key = localStorage.getItem("mg_customer_key");
  if (!key) {
    key = `cust_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem("mg_customer_key", key);
  }
  return key;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TossInstance = any;

export default function PaymentPage() {
  const tossRef = useRef<TossInstance>(null);

  useEffect(() => {
    if (!CLIENT_KEY) return;
    loadTossPayments(CLIENT_KEY).then((tp) => {
      tossRef.current = tp;
    });
  }, []);

  async function handlePayment() {
    if (!CLIENT_KEY || !tossRef.current) return;

    const customerKey = generateCustomerKey();
    const payment = tossRef.current.payment({ customerKey });

    await payment.requestPayment({
      method: "CARD",
      amount: { currency: "KRW", value: PLAN_AMOUNT },
      orderId: generateOrderId(),
      orderName: PLAN_NAME,
      successUrl: `${window.location.origin}/payment/success`,
      failUrl: `${window.location.origin}/payment/fail`,
      customerName: "",
      card: {
        useEscrow: false,
        flowMode: "DEFAULT",
        useCardPoint: false,
        useAppCardOnly: false,
      },
    });
  }

  return (
    <section className="bg-white min-h-screen py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-lg mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] mb-6">
            결제
          </span>
          <h1 className="font-display text-[32px] md:text-[44px] font-black text-[#1A1A1A] leading-tight tracking-tight mb-4">
            AI 직원
          </h1>
          <p className="text-[#666] text-base md:text-lg" style={{ wordBreak: "keep-all" }}>
            결제 후 바로 봇 세팅을 시작합니다
          </p>
        </div>

        {/* Plan card */}
        <div className="rounded-2xl bg-[#1A1A1A] p-8 md:p-10 mb-8 text-left relative overflow-hidden">
          <div
            className="absolute top-[-20%] right-[-15%] w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <p className="text-white/50 text-sm mb-4">{SITE_NAME} 월 구독</p>

            <div className="flex items-end gap-2 mb-6">
              <span className="font-display font-black text-[48px] text-white tabular-nums leading-none">49,000</span>
              <span className="text-white/40 text-lg mb-1">원/월</span>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "AI 직원 즉시 세팅",
                "1:1 온보딩 지원",
                "모든 기본 모듈 포함",
                "30일 환불 보장",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                  <span className="w-5 h-5 rounded-full bg-[#059669]/20 flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pay button */}
        <button
          onClick={handlePayment}
          className="w-full rounded-full bg-[#1A1A1A] text-white font-bold text-lg py-5 hover:bg-[#2A2A2A] active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer mb-4"
        >
          월 49,000원 결제하기
        </button>

        <p className="text-xs text-[#999]" style={{ wordBreak: "keep-all" }}>
          30일 이내 환불 보장 · 언제든 해지 가능 · 토스페이먼츠 보안 결제
        </p>
      </div>
    </section>
  );
}
