import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    {
      name: "preview-prerendered-routes",
      configurePreviewServer(server) {
        const prerenderedRoutes = new Set([
          "/contact",
          "/compliance",
          "/company",
          "/news",
          "/legal-notice",
          "/privacy-policy",
          "/scam-prevention"
        ]);

        server.middlewares.use((request, response, next) => {
          if (!request.url) return next();
          const url = new URL(request.url, "http://localhost");
          const pathname = url.pathname.replace(/\/+$/, "") || "/";
          if (prerenderedRoutes.has(pathname)) {
            request.url = `${pathname}/index.html${url.search}`;
          } else if (pathname !== "/" && !pathname.includes(".")) {
            request.url = `/404.html${url.search}`;
            response.statusCode = 404;
          }
          next();
        });
      }
    }
  ]
});
