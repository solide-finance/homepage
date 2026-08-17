import { useEffect } from "react";

import { SITE_URL } from "../../config/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  organizationSchema?: boolean;
  noIndex?: boolean;
};

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.append(element);
  }

  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
}

export default function Seo({ title, description, path, organizationSchema = false, noIndex = false }: SeoProps) {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();
    document.title = title;

    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[property="og:title"]', { property: "og:title", content: title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    setMeta('meta[name="robots"]', { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;

    const schemaId = "site-structured-data";
    document.getElementById(schemaId)?.remove();
    if (organizationSchema) {
      const schema = document.createElement("script");
      schema.id = schemaId;
      schema.type = "application/ld+json";
      schema.text = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "SolideFinance",
            url: SITE_URL,
            email: "hello@solide.fi"
          },
          { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "SolideFinance" }
        ]
      });
      document.head.append(schema);
    }

    return () => document.getElementById(schemaId)?.remove();
  }, [description, noIndex, organizationSchema, path, title]);

  return null;
}
