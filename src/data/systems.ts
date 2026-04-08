export interface SystemItem {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  status: "live" | "development" | "design-complete";
  features: string[];
  image?: string;
}

export const systemItems: SystemItem[] = [
  {
    id: "sns-automation",
    title: "SNS 콘텐츠 자동화 시스템",
    description:
      "트렌드 분석부터 AI 콘텐츠 생성, 멀티 채널 예약 발행까지 전 과정을 자동화하는 파이프라인. 매주 5~8시간 소요되던 SNS 운영을 1~2시간으로 줄여줍니다.",
    category: "콘텐츠 자동화",
    techStack: ["N8N", "AI API", "Instagram API", "WordPress"],
    status: "live",
    features: [
      "트렌드 키워드 자동 수집",
      "AI 글·이미지 콘텐츠 생성",
      "5채널 동시 예약 발행",
      "성과 리포트 자동화",
    ],
  },
  {
    id: "detail-page-automation",
    title: "AI 상세페이지 자동화",
    description:
      "브랜드 톤에 맞는 상세페이지를 AI로 직접 만드는 시스템. 대량 생산이 가능한 워크플로우.",
    category: "상세페이지 자동화",
    techStack: ["AI 이미지 생성", "자동화 파이프라인"],
    status: "design-complete",
    features: [
      "브랜드 맞춤 상세페이지 생성",
      "대량 등록용 이미지 자동화",
      "배경 제거·합성",
      "워크플로우 직접 조정",
    ],
  },
  {
    id: "n8n-pipeline",
    title: "N8N 업무 자동화 파이프라인",
    description:
      "반복되는 셀러 업무를 N8N 워크플로우로 자동화. 주문 처리, 재고 알림, 정산 리포트까지 사람 없이 돌아가는 시스템.",
    category: "업무 자동화",
    techStack: ["N8N", "Google Sheets", "Slack", "오픈마켓 API"],
    status: "live",
    features: [
      "주문·배송 상태 자동 추적",
      "재고 부족 알림",
      "정산 데이터 자동 수집",
      "일일 리포트 Slack 발송",
    ],
  },
];
