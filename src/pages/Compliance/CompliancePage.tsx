import Seo from "../../components/Seo/Seo";
import { TRUST_URL, contactMailto } from "../../config/site";
import { complianceSections } from "../../content/siteContent";

import "./CompliancePage.scss";

export default function CompliancePage() {
  return (
    <div className="standalone-page compliance-page">
      <Seo
        title="Compliance & Security — SolideFinance"
        description="Swiss AML supervision, ISO 27001 certification, SOC 2 assurance, fund segregation and business continuity: how SolideFinance supports financial institutions."
        path="/compliance"
      />
      <p className="eyebrow">Trust</p>
      <h1>Compliance & Security</h1>
      <p className="standalone-page__intro">
        SolideFinance operates as a Swiss financial intermediary. We describe our frameworks precisely and make
        independently verifiable assurance material available to institutional partners.
      </p>

      <div className="compliance-sections">
        {complianceSections.map((section, index) => (
          <section key={section.title}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.title === "Certifications" && (
                <a className="text-link" href={TRUST_URL} target="_blank" rel="noopener noreferrer">
                  Review the Trust Center <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="compliance-cta">
        <h2>Discuss your due-diligence requirements with our team</h2>
        <a href={contactMailto()} className="button-like">
          Contact our team <span aria-hidden="true">→</span>
        </a>
      </section>
    </div>
  );
}
