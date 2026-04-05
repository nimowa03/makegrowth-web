export const heroPainPoints = [
  "상세페이지 AI 서비스 써봤는데, 우리 쇼핑몰 톤이랑 안 맞더라구요",
  "상세페이지 외주 30만원, 수정 요청만 3번째...",
  "밤새 키워드 리서치했는데, 결국 뭘 등록해야 할지 모르겠어요",
  "카톡방 돌며 유통처 찾느라 하루가 또 갔어요",
  "SNS 운영? 할 시간이 어디 있어요",
];

export const heroResolution = "내 상품, 내 카테고리에 맞는 AI. 이제 직접 만드세요.";

export interface StatCard {
  number: string;
  label: string;
  source: string;
}

export const painPointStats: StatCard[] = [
  {
    number: "100만 8,282",
    label: "2024년 폐업 사업자 수 — 사상 최초 100만 명 돌파",
    source: "국세청",
  },
  {
    number: "29만 9,642",
    label: "소매업 폐업 건수 — 전 업종 1위",
    source: "세계일보",
  },
  {
    number: "40.2%",
    label: "자영업자 5년 생존율 — 10곳 중 6곳이 폐업",
    source: "한국경제",
  },
];
