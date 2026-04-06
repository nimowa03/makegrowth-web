"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@iconify/react";
import { FormField } from "@/components/forms/FormField";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  mainConcern: string;
  privacyConsent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  mainConcern: "",
  privacyConsent: false,
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

    if (!formData.mainConcern.trim()) {
      errs.mainConcern = "현재 고민을 간단히 적어주세요.";
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
          label="현재 가장 큰 고민"
          name="mainConcern"
          type="textarea"
          required
          placeholder="현재 사업에서 가장 어려운 점을 간단히 알려주세요."
          value={formData.mainConcern}
          onChange={handleChange}
          error={errors.mainConcern}
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
