import iso from "../../assets/v2/iso27001.png";
import soc2 from "../../assets/v2/soc2.png";
import { SOFIT_URL, TRUST_URL } from "../../config/site";

export default function TrustEcosystemComponent() {
  return (
    <section className="section-shell trust-ecosystem">
      <p className="eyebrow">Trust & ecosystem</p>
      <h2>Verifiable assurance and an established institutional ecosystem</h2>

      <div className="trust-row">
        <h3>Certifications & regulation</h3>
        <div className="trust-row__items">
          <a className="logo-item" href={TRUST_URL} target="_blank" rel="noopener noreferrer">
            <img src={iso} width="64" height="64" alt="" />
            ISO 27001
          </a>
          <a className="logo-item" href={TRUST_URL} target="_blank" rel="noopener noreferrer">
            <img src={soc2} width="64" height="64" alt="" />
            SOC 2 assurance
          </a>
          <a className="text-badge" href={SOFIT_URL} target="_blank" rel="noopener noreferrer">
            SO-FIT · recognised by FINMA
          </a>
          <a className="text-link" href={TRUST_URL} target="_blank" rel="noopener noreferrer">
            Verify in our Trust Center <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
