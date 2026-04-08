export interface ChatMessage {
  role: "user" | "bot";
  text: string;
  delay?: number;
}

export interface BotFunction {
  id: string;
  label: string;
  icon: string;
  description: string;
  conversation: ChatMessage[];
}

/* ── Hero 시나리오 (3개 자동 순환) ── */

export const heroScenarios: { label: string; messages: ChatMessage[] }[] = [
  {
    label: "매출 조회",
    messages: [
      { role: "user", text: "오늘 매출 알려줘" },
      {
        role: "bot",
        text: "📊 오늘 매출 총 1,847,200원\n쿠팡 1,203,400원 | 스마트스토어 643,800원\n전일 대비 +12.3%",
        delay: 1200,
      },
    ],
  },
  {
    label: "경쟁사 모니터링",
    messages: [
      { role: "user", text: "경쟁사 A 가격 변동 있어?" },
      {
        role: "bot",
        text: "⚠️ 경쟁사 A 가격 변동 감지\n[무선 이어폰] 39,900원 → 34,900원 (-12.5%)\n대응 추천: 쿠폰 발행 또는 번들 구성",
        delay: 1200,
      },
    ],
  },
  {
    label: "자동 리포트",
    messages: [
      {
        role: "bot",
        text: "📋 일일 리포트 (자동 발송)\n주문 23건 | 매출 1.8M | 마진율 31.2%\n재고 부족 알림: [상품A] 잔여 3개\nCS 문의 5건 중 3건 자동 응답 완료",
      },
    ],
  },
];

/* ── BotDemo 기능별 대화 (6개) ── */

export const botFunctions: BotFunction[] = [
  {
    id: "sales",
    label: "매출 실시간 조회",
    icon: "solar:chart-square-linear",
    description: "채널별 매출·주문을 실시간 확인",
    conversation: [
      { role: "user", text: "이번 주 매출 요약해줘" },
      {
        role: "bot",
        text: "📊 이번 주 매출 요약\n월 412,000 | 화 523,000 | 수 687,000\n목 445,000 | 금 891,000 (오늘)\n주간 합계: 2,958,000원\n지난주 대비 +18.7%",
        delay: 1200,
      },
    ],
  },
  {
    id: "competitor",
    label: "경쟁사 가격 모니터",
    icon: "solar:eye-linear",
    description: "경쟁사 가격 변동을 자동 감지",
    conversation: [
      {
        role: "bot",
        text: "⚠️ [자동 알림] 경쟁사 가격 변동 감지\n경쟁사 B — [블루투스 스피커]\n49,900원 → 42,900원 (-14%)\n현재 내 가격: 47,900원\n→ 가격 조정이 필요할 수 있습니다",
      },
      { role: "user", text: "우리도 44,900으로 맞춰줘", delay: 1500 },
      {
        role: "bot",
        text: "✅ 쿠팡·스마트스토어 가격 변경 초안 작성 완료\n승인 후 반영합니다. [승인] [수정]",
        delay: 1200,
      },
    ],
  },
  {
    id: "report",
    label: "일일 리포트 자동",
    icon: "solar:document-text-linear",
    description: "매일 오전 9시 자동 발송",
    conversation: [
      {
        role: "bot",
        text: "📋 일일 리포트 (매일 오전 9시 자동)\n─────────────────\n어제 주문: 23건\n매출: 1,847,200원\n마진율: 31.2%\n─────────────────\n재고 부족: [상품A] 잔여 3개\nCS 문의: 5건 (자동응답 3건, 수동 2건)\nSNS: 블로그 1건, 인스타 1건 발행 완료",
      },
    ],
  },
  {
    id: "inventory",
    label: "재고 부족 알림",
    icon: "solar:box-linear",
    description: "품절 전 자동 알림 + 발주 추천",
    conversation: [
      {
        role: "bot",
        text: "🔔 [자동 알림] 재고 부족\n[무선 이어폰 화이트] 잔여 5개\n최근 7일 평균 판매: 일 3.2개\n예상 품절일: 1~2일 내\n→ 발주 추천: 50개 (2주분)",
      },
      { role: "user", text: "발주서 만들어줘", delay: 1500 },
      {
        role: "bot",
        text: "✅ 발주서 초안 생성 완료\n품목: 무선 이어폰 화이트\n수량: 50개\n[확인] [수정]",
        delay: 1200,
      },
    ],
  },
  {
    id: "cs",
    label: "CS 1차 자동 응대",
    icon: "solar:chat-round-dots-linear",
    description: "배송·교환·반품 문의 자동 응답",
    conversation: [
      {
        role: "bot",
        text: "📌 CS 자동 응답 1건 처리 완료\n고객: 김OO | 배송 조회",
      },
      {
        role: "bot",
        text: "[자동 응답 내용]\n안녕하세요! 주문 확인했습니다.\n현재 배송 상태: CJ대한통운 배송중\n송장번호: 1234567890\n예상 도착: 내일(4/9) 오전 중",
        delay: 800,
      },
    ],
  },
  {
    id: "sns",
    label: "SNS 콘텐츠 발행",
    icon: "solar:share-circle-linear",
    description: "블로그·인스타·스레드 동시 발행",
    conversation: [
      { role: "user", text: "이번 주 SNS 콘텐츠 만들어줘" },
      {
        role: "bot",
        text: "📝 이번 주 콘텐츠 플랜\n월: [트렌드] \"2026 여름 필수템\" 리뷰\n수: [상품] 신상품 언박싱 카드뉴스\n금: [팁] \"셀러가 알려주는 가성비 꿀팁\"\n\n각 콘텐츠 블로그+인스타+스레드 동시 발행\n→ 초안 확인하시겠어요? [확인] [수정]",
        delay: 1200,
      },
    ],
  },
];
