import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-content mx-auto max-w-3xl">
        <h1 className="text-gray-900 mb-8">이용약관</h1>
        <div className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-6">
          <p className="text-gray-500">[TODO: 이용약관 내용을 입력하세요]</p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제1조 (목적)</h2>
          <p>[TODO: 목적 조항 기재]</p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제2조 (정의)</h2>
          <p>[TODO: 정의 조항 기재]</p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제3조 (약관의 효력 및 변경)</h2>
          <p>[TODO: 효력 및 변경 조항 기재]</p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제4조 (서비스의 제공)</h2>
          <p>[TODO: 서비스 제공 조항 기재]</p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제5조 (이용자의 의무)</h2>
          <p>[TODO: 이용자 의무 조항 기재]</p>

          <p className="text-gray-400 mt-12 text-xs">시행일: [TODO: 시행일]</p>
        </div>
      </div>
    </div>
  );
}
