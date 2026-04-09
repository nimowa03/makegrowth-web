import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/Card";
import { CONTACT_EMAIL, SNS_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "문의하기",
  description: "AI 셀러 비서 봇 도입 상담 및 견적 문의. 영업일 3일 내 답변드립니다.",
};

const INFO_ITEMS = [
  {
    icon: "solar:letter-linear",
    label: "이메일",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  ...(SNS_LINKS.kakao
    ? [
        {
          icon: "solar:chat-round-dots-linear",
          label: "카카오톡 채널",
          value: "메이크그로스",
          href: SNS_LINKS.kakao,
        },
      ]
    : []),
  {
    icon: "solar:clock-circle-linear",
    label: "응답 시간",
    value: "1-2 영업일 내 회신",
    href: null as string | null,
  },
];

export default function ContactPage() {
  return (
    <section className="bg-white min-h-screen py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-content mx-auto animate-[fadeInUp_0.7s_cubic-bezier(0.16,1,0.3,1)_both]">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium border border-[#E0E0E0] text-[#666] mb-6">
            Contact
          </span>
          <h1 className="font-display text-[36px] md:text-[52px] lg:text-[64px] font-black text-[#1A1A1A] leading-[1.05] tracking-tight mb-4">
            문의하기
          </h1>
          <p className="text-[#444] text-base md:text-lg max-w-xl">
            궁금한 점을 남겨주세요. 1-2 영업일 내 연락드리겠습니다.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Right: Info panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <Card variant="light">
                <h3 className="text-[#1A1A1A] mb-6">문의 안내</h3>

                <div className="space-y-5">
                  {INFO_ITEMS.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F0F0F0] flex items-center justify-center shrink-0">
                        <Icon icon={item.icon} width={20} className="text-[#1A1A1A]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#666666]">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#666] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            target={
                              item.href.startsWith("mailto")
                                ? undefined
                                : "_blank"
                            }
                            rel={
                              item.href.startsWith("mailto")
                                ? undefined
                                : "noopener noreferrer"
                            }
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[15px] font-medium text-[#1A1A1A]">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card variant="light">
                <h3 className="text-[#1A1A1A] mb-3">프로세스</h3>
                <ol className="space-y-3 text-sm text-[#444444]">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span>문의 접수 및 내용 검토</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span>담당자 배정 및 상담 일정 조율</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <span>맞춤 솔루션 제안 및 견적 안내</span>
                  </li>
                </ol>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
