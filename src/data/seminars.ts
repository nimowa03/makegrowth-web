export interface CurriculumStep {
  time: string;
  stage: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface Seminar {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  maxParticipants: number;
  currentParticipants: number;
  status: "upcoming" | "sold-out" | "completed" | "pre-registration";
  curriculum: CurriculumStep[];
}

export const currentSeminar: Seminar = {
  id: "ax-webinar-2026-h2",
  slug: "ax-ai-bot-webinar",
  title: "AI 셀러 비서 봇 — 내 사업에 맞게 직접 세팅하는 웨비나",
  date: "2026 하반기 예정",
  time: "20:00 - 21:30",
  location: "온라인 (Zoom)",
  price: 0,
  maxParticipants: 10,
  currentParticipants: 0,
  status: "pre-registration",
  curriculum: [
    {
      time: "20:00 - 20:20",
      stage: "1단계",
      title: "봇 라이브 시연",
      description:
        "실제 쿠팡 매출 조회, 경쟁사 가격 모니터링, 일일 리포트 자동 생성을 눈앞에서 시연합니다.",
      deliverable: "실제 작동하는 AI 비서 봇 확인",
    },
    {
      time: "20:20 - 20:50",
      stage: "2단계",
      title: "봇이 할 수 있는 일 전체 소개",
      description:
        "기본 기능(매출/주문/재고/리포트)부터 추가 모듈(SNS/CS/상세페이지), 한국어로 기능을 추가하는 커스텀 방법까지.",
      deliverable: "봇 기능 전체 맵과 내 사업 적용 방안",
    },
    {
      time: "20:50 - 21:10",
      stage: "3단계",
      title: "도입 방법 안내",
      description:
        "세미나(직접 세팅 실습), 구축대행(맞춤 커스텀), 관리형 월정액(바로 사용) 중 내 상황에 맞는 시작 방법.",
      deliverable: "내 상황에 맞는 도입 로드맵",
    },
    {
      time: "21:10 - 21:30",
      stage: "4단계",
      title: "Q&A + 다음 단계 안내",
      description:
        "참가자별 상황에 맞는 실시간 질의응답. 웨비나 이후 어떻게 시작하면 되는지 안내.",
      deliverable: "개별 상황에 맞는 시작 포인트",
    },
  ],
};

export const seminarCounters = [
  {
    value: 90,
    suffix: "%+",
    label: "반복 업무 자동화 (봇 기본 기능)",
  },
  {
    value: 80,
    suffix: "%+",
    label: "외주비 절감 (대표 실제 결과)",
  },
  { value: 6, suffix: "가지", label: "봇 기본 모듈" },
];

export const whatYouGet = [
  "실제로 작동하는 AI 셀러 비서 봇 라이브 시연",
  "내 카테고리에 적용하는 구체적 방법",
  "봇 기능 전체 소개 및 커스텀 방법 안내",
  "참가자 전용 봇 세팅 가이드",
  "1:1 Q&A 시간",
  "웨비나 이후 커뮤니티 참여 기회",
];

export const seminarPersonas = [
  {
    title: "시간 부족 셀러",
    description:
      "소싱하기도 바쁜데 SNS, 상세페이지, CS까지 직접 할 시간이 없다",
  },
  {
    title: "외주 의존 셀러",
    description:
      "대행사·알바에 매달 수백만원, 끊으면 모든 게 멈추는 구조에 지쳤다",
  },
  {
    title: "AI를 써봤지만 안 맞던 셀러",
    description:
      "AI 도구를 써봤지만 내 업무 흐름과 맞지 않아 결국 직접 다시 했다",
  },
  {
    title: "시스템을 만들고 싶은 셀러",
    description:
      "사람 안 뽑고, 외주 안 맡기고, AI로 직접 돌아가는 구조를 원한다",
  },
];

export const honestWarnings = [
  "AI가 알아서 다 해줄 거라 기대하는 분",
  "내 상품·카테고리에 대한 기본 이해가 없는 분",
  "실습 없이 듣기만 하고 싶은 분",
];

export const refundPolicy = [
  { period: "무료 웨비나", refund: "사전 등록 후 자유롭게 취소 가능" },
];
