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
      costAfter: "83% 절감",
    },
  },
  {
    id: "image-studio",
    name: "AI Image Studio",
    icon: "image",
    status: "coming-soon",
    isKiller: true,
    description: "브랜드 맞춤 제품컷·상세페이지 이미지 자동 생성",
    features: ["제품컷 생성", "상세페이지 이미지", "브랜드 톤 맞춤"],
    metrics: {
      timeBefore: "3~5일",
      timeAfter: "15분",
      costBefore: "건당 30만원",
      costAfter: "91% 절감",
    },
  },
  {
    id: "seller-bot",
    name: "AI 셀러 비서 봇",
    icon: "bot",
    status: "coming-soon",
    isKiller: false,
    description: "오픈마켓 API 연동, 매출·주문 실시간 조회, 셀러 업무 위임",
    features: ["매출 조회", "주문 관리", "업무 자동화"],
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
      timeAfter: "API 비용만",
      costBefore: "카피라이터 외주",
      costAfter: "90%+ 절감",
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
      timeAfter: "인건비 대비 98.7% 절감",
      costBefore: "인력 대응",
      costAfter: "AI 챗봇",
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
      timeAfter: "자동 리포트",
      costBefore: "시간 소요",
      costAfter: "실시간",
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
    after: "AI 자동 생성·발행, 83% 절감",
  },
  {
    category: "상세페이지 이미지",
    before: "외주 건당 30만원, 3~5일",
    after: "AI 생성 장당 28원, 91% 절감",
  },
  {
    category: "상품 데이터 수집",
    before: "수동 리서치 매일 1~2시간",
    after: "AI 자동 크롤링, 90%+ 시간 절감",
  },
  {
    category: "CS 고객 응대",
    before: "알바 월 80~150만원",
    after: "AI 챗봇, 인건비 대비 98.7% 절감",
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
    name: "AX 세미나",
    target: "입문~중급 셀러",
    format: "그룹 실습 (10명 소규모)",
    duration: "1일 (8시간)",
    includes: "실습 시스템, AI 템플릿, 커뮤니티",
    price: "인당 20만원",
    highlight: true,
  },
  {
    name: "AX 라이트",
    target: "운영 중 셀러",
    format: "1:1 코칭 + 모듈 1~2개",
    duration: "2~4주",
    includes: "시스템 세팅, 운영 가이드",
    price: "200~300만원",
    highlight: false,
  },
  {
    name: "AX 풀 패키지",
    target: "스케일업 셀러·소규모 팀",
    format: "전체 진단 + 맞춤 구축 + 교육",
    duration: "4~8주",
    includes: "전체 모듈 + 지속 지원",
    price: "300~500만원",
    highlight: false,
  },
];
