import "./ServicesComponent.scss";

import NeArrow from "../../assets/v2/ne-arrow.svg?react";
import SvcInterbank from "../../assets/v2/svc-interbank.svg?react";
import SvcInterop from "../../assets/v2/svc-interop.svg?react";
import SvcMonetize from "../../assets/v2/svc-monetize.svg?react";
import SvcNetwork from "../../assets/v2/svc-network.svg?react";
import SvcOnOffRamp from "../../assets/v2/svc-onofframp.svg?react";
import SvcOpenBanking from "../../assets/v2/svc-openbanking.svg?react";
import SvcPaymentsInfra from "../../assets/v2/svc-paymentsinfra.svg?react";
import SvcStablecoins from "../../assets/v2/svc-stablecoins.svg?react";

interface ServicesComponentProps {
  nav: string;
}

export default function ServicesComponent({ nav }: ServicesComponentProps) {
  return (
    <div className="services-component page alternate" id={nav}>
      <h3>Services</h3>
      <div className="head">
        <h4>We serve Traditional Finance</h4>
        <p>
          Our solution integrates directly with Core Banking Systems through a well-defined, developer-friendly REST
          API, ensuring secure, reliable, and efficient connectivity while maintaining compliance with institutional
          standards.
        </p>
        <p>
          <a href="https://demo.solide.fi" target="_blank" className="button-like light">
            Access demo{" "}
            <span>
              <NeArrow />
            </span>
          </a>
        </p>
      </div>
      <div className="carousel">
        <div>
          <span className="icon">
            <SvcPaymentsInfra />
          </span>
          <h5>Payments infrastructure</h5>
          <p>
            SolideFinance provides banks with an intermediary-free EUR/USD payment infrastructure, delivering faster
            transactions, reduced costs, and real-time (T+0) settlement. By optimizing FX processes, financial
            institutions can enhance profitability, competitiveness, and transaction transparency, ensuring compliance
            while staying ahead in the evolving financial landscape.
          </p>
        </div>
        <div>
          <span className="icon">
            <SvcNetwork />
          </span>
          <h5>A worldwide network of correspondent banking</h5>
          <p>
            With SolideNetwork, banks gain access to a global correspondent banking network spanning both traditional
            and decentralized finance (where compliance allows). This network enables institutions to expand into new
            markets, optimize cross-border payment flows, and enhance financial services while ensuring adherence to
            regulatory requirements.
          </p>
        </div>
        <div>
          <span className="icon">
            <SvcMonetize />
          </span>
          <h5>Cash pooling management</h5>
          <p>
            SolideFinance’s cash pooling solution allows banks to offer corporate clients seamless liquidity management
            across multiple currencies. The technology centralizes control over multi-currency accounts from a single
            access point, enabling low-cost fund transfers and consolidated treasury operations as if managed in a
            single currency, enhancing efficiency and financial oversight.
          </p>
        </div>
        <div>
          <span className="icon">
            <SvcInterop />
          </span>
          <h5>Interoperability & Access to digital assets</h5>
          <p>
            Financial institutions looking to expand their digital asset offerings can leverage SolideFinance’s secure
            on- and off-ramp infrastructure with cross-chain interoperability. This enables seamless access to digital
            finance services while integrating traditional financial products into decentralized finance, supporting
            innovation while maintaining compliance and risk management standards.
          </p>
        </div>
        <div>
          <span className="icon">
            <SvcOpenBanking />
          </span>
          <h5>Open banking infrastructure</h5>
          <p>
            SolideFinance’s technology enables financial institutions to seamlessly deploy cost-efficient and scalable
            core banking infrastructure, supporting both local and international currencies. Neo Banks can leverage our
            infrastructure and certifications to enhance their banking services, optimize operational efficiency, and
            expand their financial offerings with a robust and compliant foundation.
          </p>
        </div>
        <div>
          <span className="icon">
            <SvcInterbank />
          </span>
          <h5>Next-Generation Interbank Payment Network</h5>
          <p>
            SolideNetwork offers a cost-effective, efficient, and secure worldwide interbank network for cross-border
            transactions. By leveraging blockchain technology and a global network of correspondent banking partners,
            SolideNetwork enables faster settlements, reduced transaction costs, and enhanced transparency. Designed to
            meet institutional compliance standards, our solution streamlines international payments while enabling
            financial institutions to optimize their international payment operations with greater efficiency and
            reliability.
          </p>
        </div>
        <div>
          <span className="icon">
            <SvcMonetize />
          </span>
          <h5>Monetizing payments for fintech & software providers</h5>
          <p>
            Fintech and software providers can enhance their offerings by integrating efficient, revenue-generating
            payment services. SolideFinance’s banking-as-a-service infrastructure (without being a credit institution)
            enables seamless embedding of payment capabilities, optimizing payroll, treasury, and cross-border
            transactions while ensuring compliance, cost savings, and operational efficiency.
          </p>
        </div>
      </div>
      <div className="head">
        <h4>We serve Digital Asset Institutions</h4>
        <p>
          Digital asset wealth management firms, crypto funds, and blockchain-based financial institutions, we provide a
          secure, compliant, and efficient infrastructure for managing digital assets, leveraged by our REST API.
        </p>
        <p>
          <a href="https://demo.solide.fi" target="_blank" className="button-like light">
            Access demo{" "}
            <span>
              <NeArrow />
            </span>
          </a>
        </p>
      </div>
      <div className="carousel">
        <div>
          <span className="icon">
            <SvcOnOffRamp />
          </span>
          <h5>Automatic crypto on- and off-ramp via API</h5>
          <p>
            Management firms benefit from automated crypto on- and off-ramping at a competitive fee through our API,
            ensuring efficient conversion of digital assets into fiat currencies all around the world, while maintaining
            compliance and operational efficiency.
          </p>
        </div>
        <div>
          <span className="icon">
            <SvcStablecoins />
          </span>
          <h5>Access to Stablecoins and Cryptocurrencies</h5>
          <p>
            SolideFinance provides on- and off-ramp solutions for new stablecoins and cryptocurrencies, allowing
            institutions to access a broader range of digital assets with institutional-grade infrastructure.
          </p>
        </div>
        <div>
          <span className="icon">
            <SvcNetwork />
          </span>
          <h5>A worldwide network of correspondent banking</h5>
          <p>
            With SolideNetwork, banks gain access to a global correspondent banking network spanning both traditional
            and decentralized finance (where compliance allows). This network enables institutions to expand into new
            markets, optimize cross-border payment flows, and enhance financial services while ensuring adherence to
            regulatory requirements.
          </p>
        </div>
        <div>
          <span className="icon">
            <SvcStablecoins />
          </span>
          <h5>A cost-effective crypto-to-fiat infrastructure</h5>
          <p>
            Reduce intermediaries to offer crypto-to-fiat services: SolideFinance offers financial institutions a
            cost-effective crypto-to-fiat infrastructure. By reducing intermediaries, our solution lowers costs,
            improves efficiency, and ensures regulatory compliance in crypto-fiat conversions.
          </p>
        </div>
      </div>
    </div>
  );
}
