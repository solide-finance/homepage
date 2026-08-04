import "@fontsource/inter";
import "@fontsource/roboto";

import type { ReactNode } from "react";

import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

import "./App.scss";

function App({ children }: { children: ReactNode }) {
  return (
    <div className="App">
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
}

export default App;
