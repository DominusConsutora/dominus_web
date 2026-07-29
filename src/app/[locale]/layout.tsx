import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import "../../../public/assets/css/bootstrap.min.css";
import "../../../public/assets/css/odometer.css";
import "../../../public/assets/css/animation.css";
import "../../../public/assets/css/feature.css";
import "../../../public/assets/css/lightbox.css";
import "../../../public/assets/css/magnify.min.css";
import "../../../public/assets/css/slick-theme.css";
import "../../../public/assets/css/slick.css";
import "../../../public/assets/css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import "lenis/dist/lenis.css";
import "../globals.css";

import AnimationController from "../components/AnimationController";
import BootstrapClient from "../components/BootstrapClient";
import HeaderPanelManager from "../components/HeaderPanelManager";
import GlobalFloatingActions from "../components/GlobalFloatingActions";
import GlobalPreloader from "../components/GlobalPreloader";
import OnepageBodyClass from "../components/OnepageBodyClass";
import ReactVideoPopup from "../../components/ReactVideoPopup";
import NextLightGallery from "../../components/NextLightGallery";

import { routing } from "../../i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [
        {
          url: "/assets/images/favicon.png",
          type: "image/x-icon",
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <GlobalPreloader />
          <BootstrapClient />
          <AnimationController />
          <HeaderPanelManager />
          <OnepageBodyClass />
          <ReactVideoPopup />
          <NextLightGallery />
          {children}
          <GlobalFloatingActions />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
