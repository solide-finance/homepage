import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import App from "./App";
import { resolvePage } from "./routes";

const rootElement = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <App>{resolvePage(window.location.pathname)}</App>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
