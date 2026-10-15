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
  const t = await getTranslations({ locale, namespace: "legalPages.privacy" });

  return {
    title: t("title"),
    description: t("intro"),
    alternates: localizedAlternates("/privacidad", locale),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages.privacy" });

  return (
    <LegalDocument
      title={t("title")}
      intro={t("intro")}
      sections={[
        { title: t("identityTitle"), body: t("identityBody") },
        { title: t("dataTitle"), body: t("dataBody") },
        { title: t("useTitle"), body: t("useBody") },
        { title: t("sharingTitle"), body: t("sharingBody") },
        { title: t("rightsTitle"), body: t("rightsBody") },
        { title: t("retentionTitle"), body: t("retentionBody") },
      ]}
    />
  );
}
