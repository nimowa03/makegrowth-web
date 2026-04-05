export interface Review {
  id: string;
  name: string;
  role: string;
  category: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "review-001",
    name: "김OO",
    role: "쿠팡 셀러",
    category: "건강기능식품",
    rating: 5,
    text: "[TODO: 실제 후기 입력]",
    date: "2026-07-25",
  },
  {
    id: "review-002",
    name: "이OO",
    role: "스마트스토어 셀러",
    category: "뷰티",
    rating: 5,
    text: "[TODO: 실제 후기 입력]",
    date: "2026-07-25",
  },
  {
    id: "review-003",
    name: "박OO",
    role: "자사몰 운영",
    category: "패션",
    rating: 5,
    text: "[TODO: 실제 후기 입력]",
    date: "2026-07-25",
  },
];
