export type AnalyticsEventName =
  | "beginner_click"
  | "kakao_click"
  | "map_click"
  | "meditation_click"
  | "mysore_click"
  | "philosophy_cta_click"
  | "pricing_click"
  | "reservation_click"
  | "schedule_click"
  | "teacher_cta_click"
  | "trial_click";

export type AnalyticsEventParams = {
  page?: string;
  location?: string;
  label?: string;
  destination?: string;
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
  if (!destination) {
    return undefined;
  }

  if (destination.startsWith("tel:")) {
    return "phone";
  }

  if (destination.startsWith("mailto:")) {
    return "email";
  }

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
