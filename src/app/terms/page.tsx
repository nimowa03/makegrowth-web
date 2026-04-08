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
          <p className="text-gray-500">
            본 약관은 메이크그로스(이하 &quot;회사&quot;)가 제공하는 웹사이트 및
            관련 서비스(이하 &quot;서비스&quot;)의 이용에 관한 조건과 절차를
            규정합니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제1조 (목적)</h2>
          <p>
            본 약관은 회사가 제공하는 이커머스 AI 자동화 교육, 컨설팅, 진단 도구,
            뉴스레터 등 서비스의 이용 조건 및 절차, 회사와 이용자 간의 권리와 의무,
            기타 필요한 사항을 규정하는 것을 목적으로 합니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제2조 (정의)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>&quot;서비스&quot;란 회사가 웹사이트(makegrowth.dev)를 통해 제공하는 AI 자동화 진단, 교육 콘텐츠, 웨비나, 컨설팅, 뉴스레터 등 일체의 서비스를 말합니다.</li>
            <li>&quot;이용자&quot;란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
            <li>&quot;콘텐츠&quot;란 회사가 서비스를 통해 제공하는 교육 자료, 진단 결과, 영상, 문서 등 일체의 정보를 말합니다.</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제3조 (약관의 효력 및 변경)</h2>
          <p>
            본 약관은 서비스 화면에 게시하거나 기타 방법으로 이용자에게 공지함으로써
            효력이 발생합니다. 회사는 관련 법령에 위배되지 않는 범위에서 약관을
            변경할 수 있으며, 변경 시 적용일자 및 변경 사유를 명시하여 서비스
            화면에 7일 전부터 공지합니다. 이용자에게 불리한 변경의 경우 30일 전부터
            공지합니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제4조 (서비스의 제공)</h2>
          <p>회사는 다음과 같은 서비스를 제공합니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>이커머스 AI 자동화 진단 도구</li>
            <li>AI Transformation 웨비나 및 교육 프로그램</li>
            <li>이커머스 AI 자동화 컨설팅</li>
            <li>뉴스레터 및 교육 콘텐츠 제공</li>
          </ul>
          <p>
            회사는 서비스의 내용을 변경하거나 중단할 수 있으며, 이 경우 사전에
            공지합니다. 다만, 천재지변 등 불가항력적 사유가 있는 경우 사전 공지 없이
            서비스를 일시 중단할 수 있습니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제5조 (이용자의 의무)</h2>
          <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>타인의 개인정보를 도용하는 행위</li>
            <li>서비스를 통해 취득한 콘텐츠를 회사의 사전 동의 없이 복제, 배포, 전송, 출판하는 행위</li>
            <li>회사의 지적재산권을 침해하는 행위</li>
            <li>서비스의 정상적인 운영을 방해하는 행위</li>
            <li>기타 관련 법령에 위반되는 행위</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제6조 (지적재산권)</h2>
          <p>
            서비스 내 모든 콘텐츠(교육 자료, 영상, 진단 결과, 디자인 등)에 대한
            저작권 및 지적재산권은 회사에 귀속됩니다. 이용자는 회사의 사전 서면
            동의 없이 이를 상업적으로 이용하거나 제3자에게 제공할 수 없습니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제7조 (환불 규정)</h2>
          <p>
            유료 서비스의 환불은 관련 법령 및 회사의 환불 정책에 따릅니다. 디지털
            콘텐츠의 경우 「전자상거래 등에서의 소비자보호에 관한 법률」에 따라
            제공 후 7일 이내에 환불을 요청할 수 있습니다. 단, 콘텐츠를 이미
            이용한 경우에는 환불이 제한될 수 있습니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제8조 (면책 조항)</h2>
          <p>
            회사는 천재지변 또는 이에 준하는 불가항력으로 인해 서비스를 제공할 수
            없는 경우 책임이 면제됩니다. 회사는 이용자의 귀책사유로 인한 서비스
            이용 장애에 대해 책임지지 않습니다. 회사가 제공하는 진단 결과 및 교육
            콘텐츠는 참고 목적이며, 이를 기반으로 한 사업적 결정에 대해 회사는
            책임을 지지 않습니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">제9조 (분쟁 해결)</h2>
          <p>
            서비스 이용과 관련하여 분쟁이 발생한 경우 회사와 이용자는 상호 협의하여
            해결합니다. 협의가 이루어지지 않는 경우 관할 법원은 민사소송법상의
            관할법원으로 합니다.
          </p>

          <p className="text-gray-400 mt-12 text-xs">시행일: 2026년 4월 6일</p>
        </div>
      </div>
    </div>
  );
}
