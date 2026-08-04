import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd/es/config-provider/context";

import App from "./App.tsx";
import PortalPage from "./pages/Portal/PortalPage";
import LegalNoticePage from "./pages/LegalNotice/LegalNotice.tsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicy.tsx";

const theme: ThemeConfig = {
  token: {
    fontFamily: "Roboto, sans-serif"
  }
};

const pages = {
  "/": <PortalPage />,
  "/legal-notice": <LegalNoticePage />,
  "/privacy-policy": <PrivacyPolicyPage />
} as const;

const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
const page = pages[normalizedPath as keyof typeof pages] ?? <h1>404 Not Found</h1>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App>{page}</App>
    </ConfigProvider>
  </React.StrictMode>
);
