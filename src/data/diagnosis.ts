export interface TaskItem {
  id: string;
  label: string;
  description: string;
  icon: string;
  defaultHours: number;
  maxHours: number;
  outsource: {
    label: string;
    costOptions: string[];
    costMidpoints: number[];
    aiSavingsRate: number;
    aiSavingsLabel: string;
    aiDescription: string;
  };
}

export const tasks: TaskItem[] = [
  {
    id: "sourcing",
    label: "소싱/리서치",
    description: "상품 발굴, 경쟁사 분석, 가격 비교",
    icon: "solar:magnifer-linear",
    defaultHours: 1.5,
    maxHours: 5,
    outsource: {
      label: "리서치 외주/도구",
      costOptions: ["안 씀", "10만원 미만", "10~30만원", "30만원 이상"],
      costMidpoints: [0, 5, 20, 40],
      aiSavingsRate: 0.8,
      aiSavingsLabel: "80%+ 절감",
      aiDescription: "AI 자동 크롤링으로 트렌드·가격 자동 수집",
    },
  },
  {
    id: "listing",
    label: "상품 등록/데이터 정리",
    description: "상품명, 옵션, 이미지 정리, 플랫폼 등록",
    icon: "solar:document-add-linear",
    defaultHours: 1,
    maxHours: 4,
    outsource: {
      label: "등록 대행/알바",
      costOptions: ["안 씀", "30만원 미만", "30~50만원", "50만원 이상"],
      costMidpoints: [0, 15, 40, 70],
      aiSavingsRate: 0.7,
      aiSavingsLabel: "70%+ 절감",
      aiDescription: "상품 데이터 자동 정리 + 멀티채널 동시 등록",
    },
  },
  {
    id: "detail-page",
    label: "상세페이지 제작",
    description: "디자인, 카피, 이미지 편집, 외주 관리",
    icon: "solar:gallery-edit-linear",
    defaultHours: 2,
    maxHours: 5,
    outsource: {
      label: "상세페이지 디자인 외주",
      costOptions: ["안 씀", "10만원 미만", "10~30만원", "30~50만원", "50만원 이상"],
      costMidpoints: [0, 5, 20, 40, 70],
      aiSavingsRate: 0.9,
      aiSavingsLabel: "90%+ 절감",
      aiDescription: "AI 이미지 생성 + 카피 자동 작성으로 직접 제작",
    },
  },
  {
    id: "sns",
    label: "SNS/블로그 콘텐츠",
    description: "인스타, 블로그, 유튜브 콘텐츠 제작·발행",
    icon: "solar:share-linear",
    defaultHours: 1.5,
    maxHours: 4,
    outsource: {
      label: "SNS 운영 대행",
      costOptions: ["안 씀", "50만원 미만", "50~100만원", "100~200만원", "200만원 이상"],
      costMidpoints: [0, 25, 75, 150, 250],
      aiSavingsRate: 0.85,
      aiSavingsLabel: "80%+ 절감",
      aiDescription: "AI 콘텐츠 자동 생성 + 멀티채널 예약 발행",
    },
  },
  {
    id: "cs",
    label: "CS 고객 응대",
    description: "문의 답변, 교환/반품 처리, 리뷰 관리",
    icon: "solar:chat-round-dots-linear",
    defaultHours: 1,
    maxHours: 4,
    outsource: {
      label: "CS 인력/알바",
      costOptions: ["안 씀", "50만원 미만", "50~100만원", "100~200만원", "200만원 이상"],
      costMidpoints: [0, 25, 75, 150, 250],
      aiSavingsRate: 0.6,
      aiSavingsLabel: "60%+ 절감",
      aiDescription: "AI 챗봇 자동 응답 + 반복 문의 자동 처리",
    },
  },
  {
    id: "operations",
    label: "주문/배송/재고 관리",
    description: "발주, 송장 처리, 재고 확인, 배송 추적",
    icon: "solar:box-linear",
    defaultHours: 0.5,
    maxHours: 3,
    outsource: {
      label: "풀필먼트/물류 외주",
      costOptions: ["안 씀", "30만원 미만", "30~100만원", "100만원 이상"],
      costMidpoints: [0, 15, 65, 130],
      aiSavingsRate: 0.5,
      aiSavingsLabel: "50%+ 절감",
      aiDescription: "자동 발주 + 재고 알림 시스템",
    },
  },
  {
    id: "ads",
    label: "광고 운영/관리",
    description: "키워드 광고, SNS 광고 세팅·최적화",
    icon: "solar:chart-2-linear",
    defaultHours: 0.5,
    maxHours: 3,
    outsource: {
      label: "광고 대행",
      costOptions: ["안 씀", "30만원 미만", "30~50만원", "50~100만원", "100만원 이상"],
      costMidpoints: [0, 15, 40, 75, 130],
      aiSavingsRate: 0.5,
      aiSavingsLabel: "50%+ 절감",
      aiDescription: "AI 기반 키워드 추천 + 입찰 자동 최적화",
    },
  },
];

export const categories = [
  "패션/의류",
  "뷰티/화장품",
  "건강기능식품",
  "가전/전자",
  "생활용품",
  "식품",
  "스포츠/아웃도어",
  "기타",
];

export const revenueRanges = [
  { label: "아직 매출 없음", value: "none" },
  { label: "500만원 미만", value: "under-500" },
  { label: "500만~1,000만원", value: "500-1000" },
  { label: "1,000만~3,000만원", value: "1000-3000" },
  { label: "3,000만~5,000만원", value: "3000-5000" },
  { label: "5,000만원 이상", value: "over-5000" },
];

export const revenueMidpoints: Record<string, number> = {
  none: 0,
  "under-500": 250,
  "500-1000": 750,
  "1000-3000": 2000,
  "3000-5000": 4000,
  "over-5000": 7000,
};

export const painPointOptions = [
  "외주비가 너무 많이 나간다",
  "시간이 부족하다",
  "매출은 있는데 남는 게 없다",
  "SNS/마케팅을 해야 하는데 손을 못 대고 있다",
  "AI를 써보고 싶은데 어디서부터 시작해야 할지 모르겠다",
  "사람을 뽑고 싶은데 부담된다",
];
