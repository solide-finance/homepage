import type { ReactNode } from "react";

import EventBanner from "./components/EventBanner/EventBanner";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

import "./App.scss";

export default function App({ children }: { children: ReactNode }) {
  return (
    <div className="App">
      <EventBanner />
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
}
