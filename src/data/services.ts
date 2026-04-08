export interface ServiceModule {
  id: string;
  name: string;
  icon: string;
  status: "available" | "coming-soon";
  isKiller: boolean;
  description: string;
  features: string[];
  metrics: {
    timeBefore: string;
    timeAfter: string;
    costBefore: string;
    costAfter: string;
  };
}

export const serviceModules: ServiceModule[] = [
  {
    id: "sns-automation",
    name: "SNS 콘텐츠 자동화",
    icon: "share-2",
    status: "available",
    isKiller: true,
    description:
      "트렌드 기반 주제 기획부터 글·이미지 콘텐츠 생성, 멀티 채널 예약 발행까지 전 과정 자동화",
    features: ["트렌드 분석", "AI 콘텐츠 생성", "Repurposing", "멀티채널 발행"],
    metrics: {
      timeBefore: "주 5~8시간",
      timeAfter: "주 1~2시간",
      costBefore: "월 100~200만원 (담당자)",
      costAfter: "80%+ 절감 (대표 실제 결과)",
    },
  },
  {
    id: "detail-page-automation",
    name: "AI 상세페이지 자동화",
    icon: "image",
    status: "coming-soon",
    isKiller: true,
    description:
      "브랜드 톤에 맞는 상세페이지를 AI로 직접 만드는 워크플로우. 내 브랜드에 맞게, 대량 생산이 가능한 시스템.",
    features: [
      "상세페이지 이미지 자동 생성",
      "브랜드 톤 맞춤 커스텀",
      "대량 등록용 생산성",
      "워크플로우 직접 조정",
    ],
    metrics: {
      timeBefore: "3~5일",
      timeAfter: "15분 (예상)",
      costBefore: "건당 30만원",
      costAfter: "90%+ 절감 (예상)",
    },
  },
  {
    id: "seller-bot",
    name: "AI 셀러 비서 봇",
    icon: "bot",
    status: "available",
    isKiller: true,
    description: "오픈마켓 API 연동, 매출·주문 실시간 조회, 셀러 업무 자동화",
    features: ["매출 조회", "주문 관리", "경쟁사 모니터링", "자동 리포트", "CS 자동 응대"],
    metrics: {
      timeBefore: "매일 1~2시간",
      timeAfter: "자동",
      costBefore: "수동 관리",
      costAfter: "90%+ 시간 절감",
    },
  },
  {
    id: "marketing-copy",
    name: "AI 마케팅 카피",
    icon: "pen-tool",
    status: "coming-soon",
    isKiller: false,
    description: "광고 카피, 상품명 최적화, SEO 텍스트 자동 생성",
    features: ["광고 카피", "상품명 최적화", "SEO 텍스트"],
    metrics: {
      timeBefore: "건당 5~30만원",
      timeAfter: "API 비용만 (예상)",
      costBefore: "카피라이터 외주",
      costAfter: "절감 (예상)",
    },
  },
  {
    id: "cs-automation",
    name: "AI CS 자동화",
    icon: "message-circle",
    status: "coming-soon",
    isKiller: false,
    description: "고객 문의 자동 분류 + 응답 초안 작성",
    features: ["문의 분류", "응답 초안", "FAQ 자동 생성"],
    metrics: {
      timeBefore: "월 80~150만원 (알바)",
      timeAfter: "자동 응답 (예상)",
      costBefore: "인력 대응",
      costAfter: "비용 절감 (예상)",
    },
  },
  {
    id: "review-analysis",
    name: "AI 리뷰 분석",
    icon: "bar-chart-3",
    status: "coming-soon",
    isKiller: false,
    description: "고객 리뷰 감성 분석 + 상세페이지 개선 인사이트",
    features: ["감성 분석", "키워드 추출", "개선 인사이트"],
    metrics: {
      timeBefore: "수동 분석",
      timeAfter: "자동 리포트 (예상)",
      costBefore: "시간 소요",
      costAfter: "실시간 (예상)",
    },
  },
];

export interface BeforeAfterItem {
  category: string;
  before: string;
  after: string;
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    category: "SNS 콘텐츠 운영",
    before: "담당자 월 100~200만원",
    after: "AI 자동 생성·발행, 80%+ 절감",
  },
  {
    category: "상세페이지 이미지",
    before: "외주 건당 30만원, 3~5일",
    after: "AI 생성 장당 28원, 90%+ 절감",
  },
  {
    category: "상품 데이터 수집",
    before: "수동 리서치 매일 1~2시간",
    after: "AI 자동 크롤링, 90%+ 시간 절감",
  },
  {
    category: "CS 고객 응대",
    before: "알바 월 80~150만원",
    after: "AI 챗봇, 인건비 대비 90%+ 절감",
  },
  {
    category: "마케팅 카피",
    before: "카피라이터 외주 건당 5~30만원",
    after: "AI 자동 생성, API 비용만 발생",
  },
];

export interface PricingTier {
  name: string;
  target: string;
  format: string;
  duration: string;
  includes: string;
  price: string;
  highlight: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "AI 직원 고용",
    target: "14일 무료 체험 → 월 49,000원",
    format: "전체 기능 즉시 사용",
    duration: "14일 무료 체험 후 자동 전환",
    includes: "LLM + 서버 + 유지보수 올인클루시브. 매출 조회, 리포트, CS, SNS 전체 모듈 포함.",
    price: "월 49,000원",
    highlight: true,
  },
  {
    name: "맞춤 커스텀",
    target: "내 사업에 딱 맞는 봇이 필요한 셀러",
    format: "1:1 진단 + 커스텀 세팅",
    duration: "2~4주",
    includes: "카테고리·채널별 맞춤 세팅, API 연동, 추가 모듈 구축, 온보딩 지원",
    price: "별도 협의",
    highlight: false,
  },
];

export const freeTrial = {
  duration: "14일",
  features: [
    { label: "매출 조회", free: "하루 3회", paid: "무제한" },
    { label: "경쟁사 모니터링", free: "상품 1개", paid: "무제한" },
    { label: "일일 리포트", free: "3일에 1회", paid: "매일 자동" },
    { label: "CS 자동응답", free: "하루 5건", paid: "무제한" },
    { label: "SNS 콘텐츠", free: "주 1개", paid: "무제한" },
    { label: "대화 메시지", free: "하루 20개", paid: "무제한" },
  ],
};
