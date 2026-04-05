import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-content mx-auto max-w-3xl">
        <h1 className="text-gray-900 mb-8">개인정보처리방침</h1>
        <div className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-6">
          <p className="text-gray-500">[TODO: 개인정보처리방침 내용을 입력하세요]</p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">1. 수집하는 개인정보 항목</h2>
          <p>[TODO: 수집 항목 기재]</p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">2. 개인정보의 수집 및 이용 목적</h2>
          <p>[TODO: 이용 목적 기재]</p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">3. 개인정보의 보유 및 이용 기간</h2>
          <p>[TODO: 보유 기간 기재]</p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">4. 개인정보의 파기 절차 및 방법</h2>
          <p>[TODO: 파기 절차 기재]</p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">5. 개인정보 보호책임자</h2>
          <p>[TODO: 보호책임자 정보 기재]</p>

          <p className="text-gray-400 mt-12 text-xs">시행일: [TODO: 시행일]</p>
        </div>
      </div>
    </div>
  );
}
