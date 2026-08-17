export const SITE_URL = "https://solide.fi";
export const CONTACT_EMAIL = "hello@solide.fi";
export const TRUST_URL = "https://trust.solide.fi";
export const SOFIT_URL = "https://so-fit.ch/recherche/";
export const DEVELOPER_DOCS_URL = "https://api.solide.fi/docs";

export const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL?.trim() ?? "https://calendar.google.com/calendar/appointments/schedules/PLACEHOLDER";

export const eventConfig = {
  enabled: true,
  name: "Sibos, Miami",
  dates: "28 September – 1 October",
  href: "/contact?event=sibos"
} as const;
