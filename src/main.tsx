import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <PortalPage />
      },
      {
        path: "legal-notice",
        element: <LegalNoticePage />
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
