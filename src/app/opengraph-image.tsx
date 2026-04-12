import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "메이크그로스 — 이커머스 셀러 전용 AI 직원";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const outfitBold = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G-EiAou6Y.woff2"
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0F172A 0%, #1A1A1A 50%, #0F172A 100%)",
          fontFamily: "Outfit",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#059669",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
            }}
          >
            AI Transformation Partner
          </span>
        </div>

        {/* Brand */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          메이크그로스
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.5,
          }}
        >
          할 줄 모르는 일은 전부 비용입니다
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          makegrowth.dev
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Outfit",
          data: outfitBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
