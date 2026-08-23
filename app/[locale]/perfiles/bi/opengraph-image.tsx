import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { profileCopy, PROFILE_ACCENT } from "@/lib/profiles";

export const alt = "Germán Cárdenas — perfil profesional";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = profileCopy(locale, "bi");

  return renderOg({
    eyebrow: "Germán Cárdenas",
    title: copy.ogTitle,
    subtitle: copy.ogSubtitle,
    chips: copy.chips,
    accent: PROFILE_ACCENT["bi"],
  });
}
