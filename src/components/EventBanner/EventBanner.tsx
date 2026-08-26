import { eventConfig } from "../../config/site";

import "./EventBanner.scss";

export default function EventBanner() {
  if (!eventConfig.enabled) return null;

  return (
    <aside className="event-banner" aria-label="Upcoming event">
      <a href={eventConfig.href} target="_blank" rel="noopener noreferrer">
        Meet SolideFinance at {eventConfig.name} · {eventConfig.dates} <span aria-hidden="true">→</span>{" "}
        <strong>Book a meeting</strong>
      </a>
    </aside>
  );
}
