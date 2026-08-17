import React from "react";
import { renderToString } from "react-dom/server";

import App from "./App";
import { resolvePage } from "./routes";

export function render(pathname: string) {
  return renderToString(
    <React.StrictMode>
      <App>{resolvePage(pathname)}</App>
    </React.StrictMode>
  );
}
