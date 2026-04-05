import Link from "next/link";
import { Icon } from "@iconify/react";
import { footerNav } from "@/data/navigation";
import {
  COMPANY_NAME,
  CEO_NAME,
  BUSINESS_NUMBER,
  ADDRESS,
  CONTACT_EMAIL,
  SNS_LINKS,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-warm-surface border-t border-[rgba(0,0,0,0.08)]">
      <div className="max-w-content mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="font-bold text-lg text-[#1A1A1A]">
              메이크그로스
            </Link>
            <p className="text-sm text-[#444444] mt-2">
              이커머스 사업자의 시간과 비용을 되찾아주는 AI 파트너
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={SNS_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-[#444444] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                aria-label="Instagram"
              >
                <Icon icon="solar:camera-linear" width={20} />
              </a>
              <a
                href={SNS_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-[#444444] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                aria-label="YouTube"
              >
                <Icon icon="solar:play-circle-linear" width={20} />
              </a>
              <a
                href={SNS_LINKS.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-[#444444] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                aria-label="카카오톡"
              >
                <Icon icon="solar:chat-round-dots-linear" width={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-3">
              서비스
            </h4>
            <ul className="space-y-2">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#444444] hover:text-[#1A1A1A] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-3">
              회사
            </h4>
            <ul className="space-y-2">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#444444] hover:text-[#1A1A1A] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wider mb-3">
              법적 고지
            </h4>
            <ul className="space-y-2">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#444444] hover:text-[#1A1A1A] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(0,0,0,0.08)] pt-8">
          <div className="text-xs text-[#666666] space-y-1">
            <p>
              {COMPANY_NAME} | 대표: {CEO_NAME} | 사업자등록번호: {BUSINESS_NUMBER}
            </p>
            <p>{ADDRESS}</p>
            <p>이메일: {CONTACT_EMAIL}</p>
            <p className="mt-3">
              &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
