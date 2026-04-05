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
  status: "upcoming" | "sold-out" | "completed";
  curriculum: CurriculumStep[];
}

export const currentSeminar: Seminar = {
  id: "ax-seminar-2026-07",
  slug: "ax-sns-automation-0725",
  title: "AI SNS 콘텐츠 자동화 원데이 클래스",
  date: "2026-07-25",
  time: "10:00 - 18:00",
  location: "서울 은평구 (은평창업지원센터)",
  price: 200000,
  maxParticipants: 10,
  currentParticipants: 0,
  status: "upcoming",
  curriculum: [
    {
      time: "10:00 – 11:30",
      stage: "1단계",
      title: "진단",
      description: "내 셀러 루틴 분석 + AI 전환 가능 영역 식별",
      deliverable: "나만의 AX 우선순위 맵",
    },
    {
      time: "11:30 – 13:00",
      stage: "2단계",
      title: "시연",
      description: "AI 콘텐츠 자동화 시스템 라이브 시연",
      deliverable: "주제 기획 → 글·이미지 생성 → 멀티채널 발행까지",
    },
    {
      time: "14:00 – 16:30",
      stage: "3단계",
      title: "실습",
      description: "내 상품·브랜드로 직접 시스템 셋업 + N8N 워크플로우 자동화 연동",
      deliverable: "내 카테고리 맞춤 AI 자동화 파이프라인 (실제 작동)",
    },
    {
      time: "16:30 – 18:00",
      stage: "4단계",
      title: "코칭",
      description: "운영 노하우 전수 + Q&A + 커뮤니티 온보딩",
      deliverable: "운영 로드맵 + 커뮤니티 접근 + 향후 지원 안내",
    },
  ],
};

export const seminarCounters = [
  { value: 83, suffix: "%", label: "콘텐츠 제작 시간 절감" },
  { value: 91, suffix: "%", label: "이미지 외주비 절감" },
  { value: 5, suffix: "채널", label: "동시 발행 자동화" },
  { value: 0, suffix: "명", label: "수강생 (누적)" },
];

export const whatYouGet = [
  "AI SNS 콘텐츠 자동화 시스템 (최신 버전)",
  "카테고리별 프롬프트 템플릿",
  "N8N 자동화 워크플로우 파일",
  "셀러 운영 매뉴얼",
  "커뮤니티 접근 (지속 업데이트)",
  "[TODO: 추가 혜택]",
];

export const seminarPersonas = [
  {
    title: "시간 부족 셀러",
    description: "상품은 잘 팔리는데 SNS·콘텐츠 만들 시간이 없다",
  },
  {
    title: "외주 의존 셀러",
    description: "SNS 운영 외주비가 매달 100만원+, 끊으면 채널이 멈춘다",
  },
  {
    title: "AI 입문 셀러",
    description: 'ChatGPT는 써봤지만 "상세페이지 써줘" 수준에서 벗어나지 못한다',
  },
  {
    title: "스케일업 셀러",
    description: "1인 운영의 한계, 사람 안 뽑고 시스템으로 해결하고 싶다",
  },
  {
    title: "소규모 팀/중소기업",
    description: "마케팅팀 인력을 늘리지 않고 AI로 생산성을 높이고 싶다",
  },
];

export const honestWarnings = [
  "AI가 알아서 다 해줄 거라 기대하는 분",
  "실습 없이 듣기만 하고 싶은 분",
  "내 상품·카테고리에 대한 기본 이해가 없는 분",
  "노트북을 지참하지 않는 분",
];

export const refundPolicy = [
  { period: "7일 이상 전", refund: "전액 환불" },
  { period: "3일 이상 전", refund: "50% 환불" },
  { period: "2일 이내", refund: "환불 불가" },
];
