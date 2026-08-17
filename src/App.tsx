import type { ReactNode } from "react";

import EventBanner from "./components/EventBanner/EventBanner";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { eventConfig } from "./config/site";

import "./App.scss";

export default function App({ children }: { children: ReactNode }) {
  return (
    <div className={`App${eventConfig.enabled ? " has-event-banner" : ""}`}>
      <div className="site-top">
        <EventBanner />
        <HeaderComponent />
      </div>
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
}
