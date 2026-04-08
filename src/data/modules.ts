export interface BotModule {
  id: string;
  name: string;
  icon: string;
  description: string;
  badge: "기본 포함" | "추가 모듈" | "준비 중";
}

export const botModules: BotModule[] = [
  {
    id: "sales",
    name: "매출·주문 관리",
    icon: "solar:chart-square-linear",
    description: "채널별 매출·주문 실시간 조회 및 요약",
    badge: "기본 포함",
  },
  {
    id: "competitor",
    name: "경쟁사 모니터링",
    icon: "solar:eye-linear",
    description: "경쟁사 가격 변동 자동 감지 및 알림",
    badge: "기본 포함",
  },
  {
    id: "report",
    name: "자동 리포트",
    icon: "solar:document-text-linear",
    description: "일일·주간 리포트 자동 생성 및 발송",
    badge: "기본 포함",
  },
  {
    id: "sns",
    name: "SNS 콘텐츠 자동화",
    icon: "solar:share-circle-linear",
    description: "트렌드 기반 콘텐츠 생성 및 멀티채널 발행",
    badge: "추가 모듈",
  },
  {
    id: "cs",
    name: "CS 자동 응대",
    icon: "solar:chat-round-dots-linear",
    description: "배송·교환·반품 문의 1차 자동 응답",
    badge: "추가 모듈",
  },
  {
    id: "detail-page",
    name: "상세페이지 제작",
    icon: "solar:gallery-minimalistic-linear",
    description: "브랜드 톤에 맞는 상세페이지 AI 자동 생성",
    badge: "준비 중",
  },
  {
    id: "inventory",
    name: "재고 알림·발주",
    icon: "solar:box-linear",
    description: "품절 예측 및 발주서 자동 생성",
    badge: "추가 모듈",
  },
  {
    id: "copy",
    name: "마케팅 카피",
    icon: "solar:pen-new-square-linear",
    description: "광고 카피, 상품명 최적화, SEO 텍스트",
    badge: "준비 중",
  },
  {
    id: "review",
    name: "리뷰 분석",
    icon: "solar:star-linear",
    description: "고객 리뷰 감성 분석 및 개선 인사이트",
    badge: "준비 중",
  },
];
