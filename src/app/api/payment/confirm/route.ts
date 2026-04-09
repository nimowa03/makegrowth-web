import { NextResponse } from "next/server";

const SECRET_KEY = process.env.TOSS_SECRET_KEY || "test_sk_ex6BJGQOVDwNkOD7Pewk3W4w2zNb";

export async function POST(request: Request) {
  try {
    const { paymentKey, orderId, amount } = await request.json();

    if (!paymentKey || !orderId || !amount) {
      return NextResponse.json({ error: "필수 파라미터가 누락되었습니다." }, { status: 400 });
    }

    const authHeader = Buffer.from(`${SECRET_KEY}:`).toString("base64");

    const res = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authHeader}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentKey, orderId, amount }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data.message || "결제 승인에 실패했습니다." },
        { status: res.status }
      );
    }

    // TODO: 결제 성공 후 처리
    // - DB에 구독 정보 저장
    // - 온보딩 이메일 발송 (N8N webhook)
    // - 봇 세팅 시작

    return NextResponse.json({
      status: data.status,
      orderId: data.orderId,
      approvedAt: data.approvedAt,
      totalAmount: data.totalAmount,
    });
  } catch {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
