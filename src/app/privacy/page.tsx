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
          <p className="text-gray-500">
            메이크그로스(이하 &quot;회사&quot;)는 이용자의 개인정보를 중요시하며,
            「개인정보 보호법」 등 관련 법령을 준수합니다. 본 개인정보처리방침은
            회사가 제공하는 웹사이트 및 서비스에 적용됩니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">1. 수집하는 개인정보 항목</h2>
          <p>
            회사는 서비스 제공을 위해 아래와 같은 개인정보를 수집합니다.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI 진단 도구 이용 시: 이메일 주소, 쇼핑몰 URL</li>
            <li>뉴스레터 구독 시: 이메일 주소</li>
            <li>문의 양식 이용 시: 이름, 이메일 주소, 문의 내용</li>
            <li>웨비나 신청 시: 이름, 이메일 주소, 연락처</li>
          </ul>
          <p>
            서비스 이용 과정에서 IP 주소, 브라우저 종류, 방문 일시 등이 자동으로 생성되어 수집될 수 있습니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">2. 개인정보의 수집 및 이용 목적</h2>
          <p>수집된 개인정보는 다음의 목적을 위해 이용됩니다.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI 자동화 진단 결과 제공 및 맞춤 컨설팅 안내</li>
            <li>뉴스레터 및 교육 콘텐츠 발송</li>
            <li>문의 응대 및 상담 진행</li>
            <li>웨비나 및 교육 프로그램 안내</li>
            <li>서비스 개선을 위한 통계 분석</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">3. 개인정보의 보유 및 이용 기간</h2>
          <p>
            회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이
            파기합니다. 단, 관련 법령에 의해 보존이 필요한 경우 해당 기간 동안
            보관합니다.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>뉴스레터 구독 정보: 구독 해지 시까지</li>
            <li>문의 및 상담 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
            <li>웹사이트 방문 기록: 3개월 (통신비밀보호법)</li>
          </ul>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">4. 개인정보의 파기 절차 및 방법</h2>
          <p>
            이용 목적이 달성된 개인정보는 별도의 DB로 옮겨져 내부 방침 및 관련 법령에
            따라 일정 기간 보관 후 파기됩니다. 전자적 파일 형태의 정보는 기록을
            재생할 수 없는 기술적 방법으로 삭제하며, 종이에 출력된 정보는 분쇄기로
            분쇄하거나 소각합니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">5. 이용자의 권리와 행사 방법</h2>
          <p>
            이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리 정지를
            요청할 수 있습니다. 뉴스레터 수신을 원하지 않는 경우 이메일 하단의 수신
            거부 링크를 통해 즉시 해지할 수 있습니다. 개인정보 관련 요청은 아래
            연락처로 문의해 주시기 바랍니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">6. 개인정보의 제3자 제공</h2>
          <p>
            회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만,
            법령에 의해 요구되는 경우는 예외로 합니다.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-8">7. 개인정보 보호책임자</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>책임자: 노아 (대표)</li>
            <li>이메일: charlee@makegrowth.dev</li>
          </ul>
          <p>
            개인정보 처리에 관한 문의, 불만, 피해 구제 등은 위 연락처로 문의해 주시기
            바랍니다. 회사는 이용자의 문의에 대해 지체 없이 답변 및 처리하겠습니다.
          </p>

          <p className="text-gray-400 mt-12 text-xs">시행일: 2026년 4월 6일</p>
        </div>
      </div>
    </div>
  );
}
