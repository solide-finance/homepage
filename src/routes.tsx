import CompliancePage from "./pages/Compliance/CompliancePage";
import CompanyPage from "./pages/Company/CompanyPage";
import ContactPage from "./pages/Contact/ContactPage";
import LegalNoticePage from "./pages/LegalNotice/LegalNotice";
import NewsPage from "./pages/News/NewsPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import PortalPage from "./pages/Portal/PortalPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicy";

const pages = {
  "/": <PortalPage />,
  "/contact": <ContactPage />,
  "/compliance": <CompliancePage />,
  "/company": <CompanyPage />,
  "/news": <NewsPage />,
  "/legal-notice": <LegalNoticePage />,
  "/privacy-policy": <PrivacyPolicyPage />
} as const;

export function resolvePage(pathname: string) {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  return pages[normalizedPath as keyof typeof pages] ?? <NotFoundPage />;
}
