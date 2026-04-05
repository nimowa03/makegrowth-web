"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@iconify/react";
import { FormField } from "@/components/forms/FormField";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  salesChannels: string[];
  monthlyRevenue: string;
  interestedServices: string[];
  mainConcern: string;
  projectDetail: string;
  budget: string;
  privacyConsent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const SALES_CHANNEL_OPTIONS = [
  { label: "쿠팡", value: "쿠팡" },
  { label: "스마트스토어", value: "스마트스토어" },
  { label: "11번가", value: "11번가" },
  { label: "자사몰", value: "자사몰" },
  { label: "기타", value: "기타" },
];

const MONTHLY_REVENUE_OPTIONS = [
  { label: "500만원 미만", value: "500만원 미만" },
  { label: "500만~1000만원", value: "500만~1000만원" },
  { label: "1000만~3000만원", value: "1000만~3000만원" },
  { label: "3000만~1억원", value: "3000만~1억원" },
  { label: "1억원 이상", value: "1억원 이상" },
];

const SERVICE_OPTIONS = [
  { label: "SNS 콘텐츠 자동화", value: "SNS 콘텐츠 자동화" },
  { label: "AI Image Studio", value: "AI Image Studio" },
  { label: "AI 셀러 비서 봇", value: "AI 셀러 비서 봇" },
  { label: "AI 마케팅 카피", value: "AI 마케팅 카피" },
  { label: "AI CS 자동화", value: "AI CS 자동화" },
  { label: "AI 리뷰 분석", value: "AI 리뷰 분석" },
  { label: "AX 세미나", value: "AX 세미나" },
  { label: "AX 컨설팅", value: "AX 컨설팅" },
];

const BUDGET_OPTIONS = [
  { label: "50만원 미만", value: "50만원 미만" },
  { label: "50만~100만원", value: "50만~100만원" },
  { label: "100만~300만원", value: "100만~300만원" },
  { label: "300만~500만원", value: "300만~500만원" },
  { label: "500만원 이상", value: "500만원 이상" },
  { label: "미정", value: "미정" },
];

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  salesChannels: [],
  monthlyRevenue: "",
  interestedServices: [],
  mainConcern: "",
  projectDetail: "",
  budget: "",
  privacyConsent: false,
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^[\d\-+() ]{8,20}$/.test(phone);
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showModal, setShowModal] = useState(false);

  function handleChange(value: string | string[] | boolean, name: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = "이름을 입력해주세요.";
    }

    if (!formData.email.trim()) {
      errs.email = "이메일을 입력해주세요.";
    } else if (!validateEmail(formData.email)) {
      errs.email = "올바른 이메일 형식을 입력해주세요.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "전화번호를 입력해주세요.";
    } else if (!validatePhone(formData.phone)) {
      errs.phone = "올바른 전화번호를 입력해주세요.";
    }

    if (!formData.mainConcern.trim()) {
      errs.mainConcern = "현재 가장 큰 운영 고민을 입력해주세요.";
    }

    if (!formData.privacyConsent) {
      errs.privacyConsent = "개인정보 수집·이용에 동의해주세요.";
    }

    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setShowModal(true);
    setFormData(initialFormData);
    setErrors({});
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <FormField
          label="이름"
          name="name"
          type="text"
          required
          placeholder="홍길동"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <FormField
          label="이메일"
          name="email"
          type="email"
          required
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormField
          label="전화번호"
          name="phone"
          type="tel"
          required
          placeholder="010-1234-5678"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <FormField
          label="현재 판매 채널"
          name="salesChannels"
          type="multi-select"
          options={SALES_CHANNEL_OPTIONS}
          value={formData.salesChannels}
          onChange={handleChange}
          error={errors.salesChannels}
        />

        <FormField
          label="월 평균 매출"
          name="monthlyRevenue"
          type="select"
          placeholder="선택해주세요"
          options={MONTHLY_REVENUE_OPTIONS}
          value={formData.monthlyRevenue}
          onChange={handleChange}
          error={errors.monthlyRevenue}
        />

        <FormField
          label="관심 서비스"
          name="interestedServices"
          type="multi-select"
          options={SERVICE_OPTIONS}
          value={formData.interestedServices}
          onChange={handleChange}
          error={errors.interestedServices}
        />

        <FormField
          label="현재 가장 큰 운영 고민"
          name="mainConcern"
          type="textarea"
          required
          placeholder="현재 사업에서 가장 어려운 점이나 개선하고 싶은 부분을 알려주세요."
          value={formData.mainConcern}
          onChange={handleChange}
          error={errors.mainConcern}
        />

        <FormField
          label="프로젝트 상세 설명"
          name="projectDetail"
          type="textarea"
          placeholder="프로젝트에 대해 자유롭게 설명해주세요. (선택)"
          value={formData.projectDetail}
          onChange={handleChange}
          error={errors.projectDetail}
        />

        <FormField
          label="희망 예산"
          name="budget"
          type="select"
          placeholder="선택해주세요"
          options={BUDGET_OPTIONS}
          value={formData.budget}
          onChange={handleChange}
          error={errors.budget}
        />

        <FormField
          label="개인정보 수집·이용 동의"
          name="privacyConsent"
          type="checkbox"
          required
          value={formData.privacyConsent}
          onChange={handleChange}
          error={errors.privacyConsent}
        />

        <Button type="submit" variant="primary" size="lg" className="w-full" showArrow>
          문의하기
        </Button>
      </form>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="문의 접수 완료"
      >
        <div className="text-center py-4">
          <div className="w-14 h-14 rounded-full bg-[rgba(5,150,105,0.08)] flex items-center justify-center mx-auto mb-4">
            <Icon icon="solar:check-circle-linear" width={28} className="text-[#059669]" />
          </div>
          <p className="text-[#444444] text-[15px] leading-relaxed">
            문의가 접수되었습니다.
            <br />
            1-2 영업일 내 연락드리겠습니다.
          </p>
          <div className="mt-6">
            <Button
              variant="standard"
              size="md"
              onClick={() => setShowModal(false)}
            >
              확인
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
