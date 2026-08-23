import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type OgInput = {
  eyebrow: string;
  title: string;
  subtitle: string;
  chips?: string[];
  accent?: string;
};

/** Tarjeta OG compartida por todas las rutas (mismo lenguaje visual que el sitio). */
export function renderOg({
  eyebrow,
  title,
  subtitle,
  chips = [],
  accent = "#635bff",
}: OgInput) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0E1A",
          backgroundImage: `radial-gradient(900px 420px at 12% 0%, ${hexToRgba(accent, 0.3)}, transparent 65%), radial-gradient(700px 420px at 100% 100%, rgba(6,182,212,0.18), transparent 60%)`,
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: accent,
            }}
          />
          <div
            style={{
              fontSize: 24,
              color: "#8FA0BC",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: title.length > 26 ? 76 : 96,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: -3,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 32, color: "#B8C1D1", lineHeight: 1.35 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {chips.map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                fontSize: 24,
                color: "#C7D0E0",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
                padding: "12px 26px",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

function hexToRgba(hex: string, alpha: number) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
