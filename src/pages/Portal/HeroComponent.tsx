import "./HeroComponent.scss";

import NeArrow from "../../assets/v2/ne-arrow.svg?react";

interface HeroComponentProps {
  nav: string;
}

export default function HeroComponent({ nav }: HeroComponentProps) {
  return (
    <div className="hero-component" id={nav}>
      <div className="hero-content">
        <h2>Unlock the power of Blockchain-Powered FX for Financial Institutions</h2>
        <p>
          Welcome to SolideFinance, where we bridge the gap between traditional finance and decentralized technology -
          offering automated, cost-efficient, and compliant FX infrastructure.
        </p>
        <p>
          <a href="https://demo.solide.fi" target="_blank" className="button-like">
            Access demo{" "}
            <span>
              <NeArrow />
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
