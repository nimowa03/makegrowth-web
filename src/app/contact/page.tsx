import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/Card";
import { CONTACT_EMAIL, SNS_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "견적 문의",
};

const INFO_ITEMS = [
  {
    icon: "solar:letter-linear",
    label: "이메일",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: "solar:chat-round-dots-linear",
    label: "카카오톡 채널",
    value: "메이크그로스",
    href: SNS_LINKS.kakao,
  },
  {
    icon: "solar:clock-circle-linear",
    label: "응답 시간",
    value: "1-2 영업일 내 회신",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <section className="bg-warm-bg min-h-screen py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="font-display text-[#1A1A1A] mb-4">견적 문의</h1>
          <p className="text-[#444444] text-lg max-w-xl">
            프로젝트에 대해 알려주세요. 1-2 영업일 내 연락드리겠습니다.
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
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon icon={item.icon} width={20} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-[#666666]">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[15px] font-medium text-[#1A1A1A] hover:text-accent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <span>문의 접수 및 내용 검토</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <span>담당자 배정 및 상담 일정 조율</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
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
