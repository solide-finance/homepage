import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const projectRoot = resolve(import.meta.dirname, "..");
const distDirectory = resolve(projectRoot, "dist");
const serverBuildDirectory = resolve(projectRoot, ".prerender");
const template = await readFile(resolve(distDirectory, "index.html"), "utf8");

const routes = [
  {
    path: "/",
    title: "SolideFinance — Regulated on-chain payment & FX infrastructure for financial institutions",
    description:
      "SolideFinance operates regulated on-chain cross-border payment and FX infrastructure for banks and financial institutions. Account-to-account, T+0 settlement, 60+ currencies."
  },
  {
    path: "/contact",
    title: "Contact SolideFinance",
    description: "Get in touch with the SolideFinance team — partnerships, pilots, press and investor enquiries."
  },
  {
    path: "/compliance",
    title: "Compliance & Security — SolideFinance",
    description:
      "Swiss AML supervision, ISO 27001 certification, SOC 2 assurance, fund segregation and business continuity: how SolideFinance supports financial institutions."
  },
  {
    path: "/company",
    title: "Company — SolideFinance",
    description:
      "SolideFinance was founded by specialists in trading-floor engineering, international payments and corporate treasury. Offices in Mulhouse, Paris, Geneva and Zurich."
  },
  {
    path: "/news",
    title: "News — SolideFinance",
    description: "Company news, events and press coverage from SolideFinance."
  },
  {
    path: "/legal-notice",
    title: "Legal notice — SolideFinance",
    description: "Legal information and website terms for SolideFinance."
  },
  {
    path: "/privacy-policy",
    title: "Privacy policy — SolideFinance",
    description: "How SolideFinance collects, uses and protects personal information."
  },
  {
    path: "/404",
    output: "404.html",
    title: "Page not found — SolideFinance",
    description: "The page you requested could not be found."
  }
];

await build({
  root: projectRoot,
  logLevel: "error",
  build: {
    ssr: "src/entry-server.tsx",
    outDir: serverBuildDirectory,
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: "entry-server.mjs" } }
  }
});

try {
  const { render } = await import(pathToFileURL(resolve(serverBuildDirectory, "entry-server.mjs")));

  for (const route of routes) {
    const appHtml = render(route.path);
    const canonical = new URL(route.path, "https://solide.fi").toString();
    const html = template
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(route.title)}</title>`)
      .replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/>/s,
        `<meta name="description" content="${escapeHtml(route.description)}" />`
      )
      .replace(
        "</head>",
        `    <link rel="canonical" href="${canonical}" />\n    <meta property="og:title" content="${escapeHtml(route.title)}" />\n    <meta property="og:description" content="${escapeHtml(route.description)}" />\n    <meta property="og:url" content="${canonical}" />${route.output ? '\n    <meta name="robots" content="noindex, nofollow" />' : ""}\n  </head>`
      );

    const outputFile = route.output
      ? resolve(distDirectory, route.output)
      : route.path === "/"
        ? resolve(distDirectory, "index.html")
        : resolve(distDirectory, route.path.slice(1), "index.html");
    await mkdir(dirname(outputFile), { recursive: true });
    await writeFile(outputFile, html);
  }
} finally {
  await rm(serverBuildDirectory, { recursive: true, force: true });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
