import iso from "../../assets/v2/iso27001.png";
import sflogo from "../../assets/v2/sflogo.svg";
import soc2 from "../../assets/v2/soc2.png";
import { CONTACT_EMAIL, TRUST_URL } from "../../config/site";
import { offices } from "../../content/siteContent";

import "./FooterComponent.scss";

export default function FooterComponent() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__columns">
          <div className="site-footer__about">
            <img src={sflogo} alt="SolideFinance" />
            <p>
              SolideFinance SA is incorporated in Switzerland under CHE-140.601.494 and affiliated with SO-FIT, a
              self-regulatory organisation recognised by FINMA.
            </p>
            <p>Solide Finance SAS is incorporated in France under 979 290 889 00018.</p>
          </div>

          <div>
            <h2>Offices</h2>
            <ul className="footer-list">
              {offices.map((office) => (
                <li key={office.city}>
                  <strong>{office.city}</strong>
                  {office.address && <span>{office.address}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>

          <div className="site-footer__trust">
            <h2>Trust</h2>
            <a href={TRUST_URL} target="_blank" rel="noopener noreferrer">
              Visit our Trust Center <span className="sr-only">(opens in a new tab)</span>
            </a>
            <div className="trust-badges" aria-label="Security assurances">
              <img src={iso} width="50" height="50" alt="ISO 27001 certified" />
              <img src={soc2} width="50" height="50" alt="SOC 2 assurance" />
            </div>
          </div>
        </div>

        <div className="site-footer__legal">
          <nav aria-label="Footer navigation">
            <a href="/news">News</a>
            <a href="/pressbook.pdf">Pressbook</a>
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/legal-notice">Legal notice</a>
          </nav>
          <span>© {new Date().getFullYear()} Solide Finance SAS. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
