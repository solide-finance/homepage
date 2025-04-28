import "./MissionComponent.scss";

import innovation from "../../assets/v2/innovation.svg";
import compliance from "../../assets/v2/compliance.svg";
import expertise from "../../assets/v2/expertise.svg";

interface HeroComponentProps {
  nav: string;
}

export default function MissionComponent({ nav }: HeroComponentProps) {
  return (
    <div className="mission-component page alternate" id={nav}>
      <h3>Mission</h3>
      <p>
        With over 15 years of experience in finance on Wall Street, SolideFinance is building the next-generation FX
        infrastructure for financial institutions. Leveraging blockchain and stablecoins, we provide a compliant,
        automated, and cost-efficient solution for cross-border payments.
      </p>
      <ul>
        <li>
          <h4>Innovation</h4>
          <img src={innovation} alt="innovation" />
          We have developed our <b>own proprietary market-making technology,</b> enabling us to identify the most
          efficient payment routes worldwide, optimizing cost, speed, and liquidity for financial institutions.
        </li>
        <li>
          <h4>Compliance</h4>
          <img src={compliance} alt="Compliance" />
          Built to meet the <b>highest regulatory and security standards</b> in European finance, SolideFinance ensures
          full compliance with banking, digital assets, and financial integrity requirements.
        </li>
        <li>
          <h4>Expertise</h4>
          <img src={expertise} alt="expertise" />
          With deep <b>expertise in complex financial processes and cross border payments,</b> SolideFinance brings a
          wealth of experience in both traditional and digital finance.
        </li>
      </ul>
    </div>
  );
}
