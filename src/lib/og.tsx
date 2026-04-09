import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const outfitFontUrl =
  "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G-EiAou6Y.woff2";

export async function generateOgImage({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description: string;
  eyebrow?: string;
}) {
  const outfitBold = await fetch(new URL(outfitFontUrl)).then((res) =>
    res.arrayBuffer()
  );

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
          background:
            "linear-gradient(135deg, #0F172A 0%, #1A1A1A 50%, #0F172A 100%)",
          fontFamily: "Outfit",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
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
              fontSize: "15px",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
            }}
          >
            {eyebrow ?? "메이크그로스"}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          {description}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            right: "80px",
            fontSize: "17px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          makegrowth.dev
        </div>
      </div>
    ),
    {
      ...ogSize,
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
