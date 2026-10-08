import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dominuslogistica.com";
const googleTagManagerId = "GTM-WB8BJ9W7";

import "../../../public/assets/css/bootstrap.min.css";
import "../../../public/assets/css/feature.css";
import "../../../public/assets/css/style.css";
import "aos/dist/aos.css";
import "lenis/dist/lenis.css";
import "../globals.css";

import AnimationController from "../components/AnimationController";
import BootstrapClient from "../components/BootstrapClient";
import DominusMobileMenuManager from "../components/DominusMobileMenuManager";
import GlobalPreloader from "../components/GlobalPreloader";
import OnepageBodyClass from "../components/OnepageBodyClass";
import NextLightGallery from "../../components/NextLightGallery";
import ReactVideoPopup from "../../components/ReactVideoPopup";
import StructuredData from "../../components/StructuredData";

import { routing } from "../../i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const canonicalPath = locale === "en" ? "/en" : "/es";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: `%s | DOMINUS`,
    },
    description: t("description"),
    applicationName: "DOMINUS",
    keywords: [
      "puertos",
      "consultoría portuaria",
      "desarrollo portuario",
      "gobernanza portuaria",
      "terminales",
      "infraestructura portuaria",
      "DOMINUS",
      "port strategy",
      "port consultancy",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: canonicalPath,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteUrl}${canonicalPath}`,
      siteName: "DOMINUS",
      locale,
      type: "website",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: "DOMINUS · Consultoría en desarrollo portuario",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.svg"],
    },
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
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${googleTagManagerId}');`}
        </Script>
        <NextIntlClientProvider>
          <StructuredData />
          <GlobalPreloader />
          <BootstrapClient />
          <AnimationController />
          <DominusMobileMenuManager />
          <OnepageBodyClass />
          <ReactVideoPopup />
          <NextLightGallery />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
