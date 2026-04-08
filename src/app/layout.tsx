import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { StickyBottomCTA } from "@/components/ui/StickyBottomCTA";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — 이커머스 셀러 전용 AI 비서 봇`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="noise-overlay" />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBottomCTA />
      </body>
    </html>
  );
}
