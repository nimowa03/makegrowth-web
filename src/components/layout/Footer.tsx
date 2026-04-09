import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { footerNav } from "@/data/navigation";
import {
  COMPANY_NAME,
  BRAND_NAME,
  CEO_NAME,
  BUSINESS_NUMBER,
  ADDRESS,
  CONTACT_EMAIL,
  PHONE_NUMBER,
  SNS_LINKS,
} from "@/lib/constants";

const socialLinks = [
  { href: SNS_LINKS.instagram, icon: "solar:camera-linear", label: "Instagram" },
  { href: SNS_LINKS.youtube, icon: "solar:play-circle-linear", label: "YouTube" },
  { href: SNS_LINKS.kakao, icon: "solar:chat-round-dots-linear", label: "카카오톡" },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1A1A1A 50%, #0F172A 100%)",
      }}
    >
      <div className="max-w-content mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/logo-white.svg" alt="메이크그로스" width={140} height={28} />
            </Link>
            <p className="text-sm text-white/60 mt-2">
              이커머스 셀러 전용 AI 비서 봇
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-3 mt-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white/60 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    aria-label={s.label}
                  >
                    <Icon icon={s.icon} width={20} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
              서비스
            </h4>
            <ul className="space-y-2.5">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white/80 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
              회사
            </h4>
            <ul className="space-y-2.5">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white/80 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
              법적 고지
            </h4>
            <ul className="space-y-2.5">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white/80 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-xs text-white/50 space-y-1">
            <p>
              {COMPANY_NAME} | 대표: {CEO_NAME}
              {BUSINESS_NUMBER && ` | 사업자등록번호: ${BUSINESS_NUMBER}`}
            </p>
            {ADDRESS && <p>{ADDRESS}</p>}
            <p>이메일: {CONTACT_EMAIL} | 전화: {PHONE_NUMBER}</p>
            <p className="mt-3">
              &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
