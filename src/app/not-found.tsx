import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-display text-[80px] md:text-[120px] font-black text-[#E0E0E0] leading-none select-none">
          404
        </p>
        <h1 className="text-[#1A1A1A] text-xl md:text-2xl font-bold mt-4 mb-3">
          페이지를 찾을 수 없습니다
        </h1>
        <p
          className="text-[#666] text-sm md:text-base mb-8"
          style={{ wordBreak: "keep-all" }}
        >
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] text-white px-8 py-3.5 text-sm font-semibold hover:bg-[#2A2A2A] transition-colors duration-300"
        >
          {SITE_NAME} 홈으로
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
