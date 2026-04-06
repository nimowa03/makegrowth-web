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
  slug: "ax-ai-automation-webinar",
  title: "이커머스 셀러를 위한 AI 자동화 웨비나",
  date: "2026 하반기 예정",
  time: "20:00 - 21:30",
  location: "온라인 (Zoom)",
  price: 0,
  maxParticipants: 10,
  currentParticipants: 0,
  status: "pre-registration",
  curriculum: [
    {
      time: "20:00 - 20:15",
      stage: "1단계",
      title: "셀러 루틴 진단",
      description:
        "하루 중 어디에 시간이 빠지고, 어디에 외주비가 나가는지 분석. 자동화 가능 영역 식별.",
      deliverable: "내 루틴에서 AI 전환 가능한 업무 목록",
    },
    {
      time: "20:15 - 20:45",
      stage: "2단계",
      title: "AI 자동화 시스템 라이브 시연",
      description:
        "실제로 돌아가는 멀티채널 콘텐츠 자동화 시스템을 눈앞에서 시연. 트렌드 수집부터 5채널 발행까지.",
      deliverable: "시스템이 실제로 돌아가는 모습 확인",
    },
    {
      time: "20:45 - 21:10",
      stage: "3단계",
      title: "내 사업에 적용하는 방법",
      description:
        "코딩 없이 AI 빌더 도구로 자동화 시스템을 만드는 과정을 안내. 내 카테고리, 내 브랜드에 맞게 세팅하는 방법.",
      deliverable: "내 사업에 적용하는 구체적 로드맵",
    },
    {
      time: "21:10 - 21:30",
      stage: "4단계",
      title: "Q&A + 다음 단계",
      description:
        "참가자별 상황에 맞는 실시간 질의응답. 웨비나 이후 어떻게 시작하면 되는지 안내.",
      deliverable: "개별 상황에 맞는 시작 포인트",
    },
  ],
};

export const seminarCounters = [
  {
    value: 80,
    suffix: "%+",
    label: "콘텐츠 제작 시간 절감 (대표 실제 결과)",
  },
  {
    value: 90,
    suffix: "%+",
    label: "이미지 외주비 절감 (대표 실제 결과)",
  },
  { value: 5, suffix: "채널", label: "동시 발행 자동화" },
];

export const whatYouGet = [
  "실제로 돌아가는 AI 자동화 시스템 시연",
  "내 카테고리에 적용하는 구체적 방법",
  "코딩 없이 시작하는 AI 빌더 도구 소개",
  "참가자 전용 자동화 템플릿",
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
      "ChatGPT로 해봤는데 내 브랜드 톤이랑 안 맞고, 결국 직접 다시 했다",
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
