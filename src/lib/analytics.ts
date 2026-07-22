export type AnalyticsEventName =
  | "kakao_click"
  | "map_click"
  | "phone_click"
  | "reservation_app_click"
  | "schedule_click"
  | "trial_click";

export type AnalyticsLocation = "hero" | "navbar" | "section" | "footer" | "contact" | "schedule" | "practice";

export type AnalyticsDestination = "internal" | "kakao" | "tel" | "map" | "reservation_app";

export type AnalyticsEventParams = {
  page?: string;
  location?: AnalyticsLocation;
  label?: string;
  destination?: AnalyticsDestination;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaInitialized?: boolean;
    __lastGaPageViewPath?: string;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function initializeGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  if (!window.__gaInitialized) {
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
    window.__gaInitialized = true;
  }
}

export function getSafeDestination(destination?: string) {
  return destination;
}

export function trackPageView(pagePath: string) {
  initializeGoogleAnalytics();

  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  if (window.__lastGaPageViewPath === pagePath) {
    return;
  }

  window.__lastGaPageViewPath = pagePath;
  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title
  });
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsEventParams = {}) {
  initializeGoogleAnalytics();

  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    ...params,
    destination: getSafeDestination(params.destination)
  });
}
