export const SITE_URL = "https://solide.fi";
export const CONTACT_EMAIL = "hello@solide.fi";
export const FRAUD_EMAIL = "fraud@solide.fi";
export const TRUST_URL = "https://trust.solide.fi";
export const SOFIT_URL = "https://so-fit.ch/recherche/";
export const DEVELOPER_DOCS_URL = "https://api.solide.fi/docs";

export const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL?.trim() ?? "https://calendar.app.google/qCFPz6nPTP1n4BD47";

export function mailto(address: string, subject?: string) {
  const href = `mailto:${address}`;
  return subject ? `${href}?subject=${encodeURIComponent(subject)}` : href;
}

export function contactMailto(subject?: string) {
  return mailto(CONTACT_EMAIL, subject);
}

export const eventConfig = {
  enabled: true,
  name: "Sibos, Miami",
  dates: "28 September – 1 October",
  href: BOOKING_URL
} as const;
