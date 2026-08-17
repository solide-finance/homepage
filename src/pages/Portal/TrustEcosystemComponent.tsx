import iso from "../../assets/v2/iso27001.png";
import adan from "../../assets/v2/logo_adan.png";
import financeInnovation from "../../assets/v2/logo_finance_innovation.png";
import soc2 from "../../assets/v2/soc2.png";
import { TRUST_URL } from "../../config/site";

export default function TrustEcosystemComponent() {
  return (
    <section className="section-shell trust-ecosystem">
      <p className="eyebrow">Trust & ecosystem</p>
      <h2>Verifiable assurance and an established institutional ecosystem.</h2>

      <div className="trust-row">
        <h3>Certifications & regulation</h3>
        <div className="trust-row__items">
          <span className="logo-item">
            <img src={iso} width="64" height="64" alt="" />
            ISO 27001
          </span>
          <span className="logo-item">
            <img src={soc2} width="64" height="64" alt="" />
            SOC 2 assurance
          </span>
          <span className="text-badge">SO-FIT · recognised by FINMA</span>
          <a className="text-link" href={TRUST_URL} target="_blank" rel="noopener noreferrer">
            Verify in our Trust Center <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="trust-row">
        <h3>Ecosystem</h3>
        <div className="trust-row__items">
          <span className="logo-item">
            <img src={financeInnovation} alt="" />
            Finance Innovation
          </span>
          <span className="logo-item">
            <img src={adan} alt="" />
            ADAN
          </span>
          <span className="text-badge">Swiss Blockchain Federation</span>
          <span className="text-badge">Crypto Valley Association</span>
        </div>
      </div>
    </section>
  );
}
