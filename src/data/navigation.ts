export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "루틴 분석", href: "/#diagnosis" },
  { label: "서비스", href: "/services" },
  { label: "웨비나", href: "/seminar" },
  { label: "About", href: "/about" },
  { label: "문의", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "SNS 콘텐츠 자동화", href: "/services#sns-automation" },
    { label: "AI 상세페이지 자동화", href: "/services#detail-page-automation" },
    { label: "셀러 루틴 분석기", href: "/diagnosis" },
  ],
  company: [
    { label: "About", href: "/about" },
  ],
  legal: [
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용약관", href: "/terms" },
  ],
};
