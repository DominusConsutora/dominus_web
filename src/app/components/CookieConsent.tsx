"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";
import styles from "./CookieConsent.module.css";

const consentStorageKey = "dominus-cookie-consent-v1";
const googleTagManagerId = "GTM-WB8BJ9W7";
const consentChangeEvent = "dominus-cookie-consent-change";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

type GoogleConsent = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
  functionality_storage: "denied";
  security_storage: "granted";
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    __dominusGtmLoaded?: boolean;
  }
}

function readConsentCookie(): string | null {
  const entry = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${consentStorageKey}=`));
  return entry ? entry.slice(consentStorageKey.length + 1) : null;
}

function parsePreferences(rawValue: string | null): ConsentPreferences | null {
  if (!rawValue) return null;

  try {
    const value = JSON.parse(
      decodeURIComponent(rawValue),
    ) as Partial<ConsentPreferences>;
    if (
      value.necessary === true &&
      typeof value.analytics === "boolean" &&
      typeof value.marketing === "boolean"
    ) {
      return {
        necessary: true,
        analytics: value.analytics,
        marketing: value.marketing,
      };
    }
  } catch {
    return null;
  }

  return null;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener(consentChangeEvent, callback);
  return () => window.removeEventListener(consentChangeEvent, callback);
}

function subscribeToGlobalPrivacyControl() {
  return () => {};
}

function getServerConsentSnapshot() {
  return null;
}

function getServerGpcSnapshot() {
  return false;
}

function googleConsentFor(
  preferences: ConsentPreferences,
): GoogleConsent {
  return {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
    functionality_storage: "denied",
    security_storage: "granted",
  };
}

function applyConsent(preferences: ConsentPreferences) {
  const dataLayer = (window.dataLayer ??= []);
  const consent = googleConsentFor(preferences);

  if (!window.__dominusGtmLoaded) {
    dataLayer.push([
      "consent",
      "default",
      {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        functionality_storage: "denied",
        security_storage: "granted",
      },
    ]);
  }

  dataLayer.push(["consent", "update", consent]);

  if (
    window.__dominusGtmLoaded ||
    (!preferences.analytics && !preferences.marketing)
  ) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${googleTagManagerId}`;
  script.onerror = () => {
    window.__dominusGtmLoaded = false;
    console.error("Google Tag Manager could not be loaded.");
  };
  window.__dominusGtmLoaded = true;
  document.head.appendChild(script);
}

function storePreferences(preferences: ConsentPreferences) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${consentStorageKey}=${encodeURIComponent(
    JSON.stringify(preferences),
  )}; Path=/; Max-Age=15552000; SameSite=Lax${secure}`;

  if (!parsePreferences(readConsentCookie())) {
    throw new Error("Cookie preferences could not be saved.");
  }
}

function hasGlobalPrivacyControl(): boolean {
  return (
    "globalPrivacyControl" in navigator &&
    (navigator as Navigator & { globalPrivacyControl?: boolean })
      .globalPrivacyControl === true
  );
}

export default function CookieConsent() {
  const t = useTranslations("cookieConsent");
  const rawPreferences = useSyncExternalStore(
    subscribeToConsent,
    readConsentCookie,
    getServerConsentSnapshot,
  );
  const gpcActive = useSyncExternalStore(
    subscribeToGlobalPrivacyControl,
    hasGlobalPrivacyControl,
    getServerGpcSnapshot,
  );
  const savedPreferences = useMemo(
    () => parsePreferences(rawPreferences),
    [rawPreferences],
  );
  const preferences = useMemo<ConsentPreferences | null>(() => {
    if (!savedPreferences || !gpcActive) return savedPreferences;
    return { necessary: true, analytics: false, marketing: false };
  }, [gpcActive, savedPreferences]);
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const isOpen = preferences === null || isConfiguring;

  useEffect(() => {
    if (preferences) applyConsent(preferences);
  }, [preferences]);

  function save(nextPreferences: ConsentPreferences) {
    const effective: ConsentPreferences = gpcActive
      ? { necessary: true, analytics: false, marketing: false }
      : nextPreferences;
    try {
      storePreferences(effective);
      window.dispatchEvent(new Event(consentChangeEvent));
      setIsConfiguring(false);
      setSaveError(false);
    } catch (error) {
      console.error("Unable to save cookie preferences.", error);
      setSaveError(true);
    }
  }

  function openSettings() {
    setAnalytics(preferences?.analytics ?? false);
    setMarketing(preferences?.marketing ?? false);
    setIsConfiguring(true);
  }

  if (preferences && !isOpen) {
    return (
      <button
        className={styles.reopen}
        type="button"
        onClick={openSettings}
      >
        {t("manage")}
      </button>
    );
  }

  if (!isOpen) return null;

  return (
    <section
      aria-labelledby="cookie-consent-title"
      aria-modal="false"
      className={styles.panel}
      role="dialog"
    >
      <div className={styles.content}>
        <div className={styles.copy}>
          <h2 className={styles.title} id="cookie-consent-title">
            {t("title")}
          </h2>
          <p className={styles.description}>{t("description")}</p>
          <div className={styles.links}>
            <Link href="/privacidad">{t("privacyLink")}</Link>
            <Link href="/cookies">{t("cookiesLink")}</Link>
          </div>
        </div>

        {isConfiguring && (
          <div className={styles.preferences}>
            <label className={styles.preference}>
              <span>
                <strong>{t("necessaryTitle")}</strong>
                <small>{t("necessaryDescription")}</small>
              </span>
              <input checked disabled type="checkbox" />
            </label>
            <label className={styles.preference}>
              <span>
                <strong>{t("analyticsTitle")}</strong>
                <small>{t("analyticsDescription")}</small>
              </span>
              <input
                checked={gpcActive ? false : analytics}
                disabled={gpcActive}
                onChange={(event) => setAnalytics(event.target.checked)}
                type="checkbox"
              />
            </label>
            <label className={styles.preference}>
              <span>
                <strong>{t("marketingTitle")}</strong>
                <small>{t("marketingDescription")}</small>
              </span>
              <input
                checked={gpcActive ? false : marketing}
                disabled={gpcActive}
                onChange={(event) => setMarketing(event.target.checked)}
                type="checkbox"
              />
            </label>
            {gpcActive && (
              <p className={styles.gpcNotice} role="status">
                {t("gpcNotice")}
              </p>
            )}
          </div>
        )}

        {saveError && (
          <p className={styles.error} role="alert">
            {t("saveError")}
          </p>
        )}

        <div className={styles.actions}>
          {isConfiguring ? (
            <button
              className={styles.primary}
              onClick={() =>
                save({ necessary: true, analytics, marketing })
              }
              type="button"
            >
              {t("save")}
            </button>
          ) : (
            <button
              className={styles.secondary}
              onClick={() => setIsConfiguring(true)}
              type="button"
            >
              {t("configure")}
            </button>
          )}
          <button
            className={styles.secondary}
            onClick={() =>
              save({ necessary: true, analytics: false, marketing: false })
            }
            type="button"
          >
            {t("reject")}
          </button>
          <button
            className={styles.primary}
            onClick={() =>
              save({ necessary: true, analytics: true, marketing: true })
            }
            type="button"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </section>
  );
}
