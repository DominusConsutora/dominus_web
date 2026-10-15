import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LegalDocument from "../_components/LegalDocument";
import { localizedAlternates } from "../../../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legalPages.cookies" });

  return {
    title: t("title"),
    description: t("intro"),
    alternates: localizedAlternates("/cookies", locale),
  };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages.cookies" });

  return (
    <LegalDocument
      title={t("title")}
      intro={t("intro")}
      sections={[
        { title: t("necessaryTitle"), body: t("necessaryBody") },
        { title: t("analyticsTitle"), body: t("analyticsBody") },
        { title: t("marketingTitle"), body: t("marketingBody") },
        { title: t("googleTitle"), body: t("googleBody") },
        { title: t("choicesTitle"), body: t("choicesBody") },
        { title: t("contactTitle"), body: t("contactBody") },
      ]}
    />
  );
}
