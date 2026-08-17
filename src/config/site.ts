export const SITE_URL = "https://solide.fi";
export const CONTACT_EMAIL = "hello@solide.fi";
export const TRUST_URL = "https://trust.solide.fi";
export const DEVELOPER_DOCS_URL = "https://api.solide.fi/docs";

export const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() ?? "";
export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL?.trim() ?? "";

export const eventConfig = {
  enabled: true,
  name: "Sibos, Miami",
  dates: "28 September – 1 October",
  href: "/contact?event=sibos"
} as const;
