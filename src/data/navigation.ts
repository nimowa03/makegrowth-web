export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "서비스", href: "/services" },
  { label: "가격", href: "/#pricing" },
  { label: "웨비나", href: "/seminar" },
  { label: "프로필", href: "/about" },
  { label: "도입 문의", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "AI 직원", href: "/#bot-demo" },
    { label: "봇 모듈", href: "/services" },
    { label: "가격 안내", href: "/#pricing" },
    { label: "무료 웨비나", href: "/seminar" },
  ],
  company: [
    { label: "About", href: "/about" },
  ],
  legal: [
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용약관", href: "/terms" },
  ],
};
