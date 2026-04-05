export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "서비스", href: "/services" },
  { label: "세미나", href: "/seminar" },
  { label: "대표 소개", href: "/about" },
  { label: "견적 문의", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "SNS 콘텐츠 자동화", href: "/services#sns-automation" },
    { label: "AI Image Studio", href: "/services#image-studio" },
    { label: "서비스 프로세스", href: "/services#process" },
    { label: "패키지 비교", href: "/services#pricing" },
  ],
  company: [
    { label: "대표 소개", href: "/about" },
    { label: "수강 후기", href: "/reviews" },
    { label: "무료 리소스", href: "/resources" },
  ],
  legal: [
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용약관", href: "/terms" },
  ],
};
