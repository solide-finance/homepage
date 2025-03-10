import { PropsWithChildren } from "react";

import api from "../../assets/v2/feat-api.svg";
import a247 from "../../assets/v2/feat-247.svg";
import compliance from "../../assets/v2/feat-compliance.svg";
import security from "../../assets/v2/feat-security.svg";
import fx from "../../assets/v2/feat-fx.svg";
import liquidity from "../../assets/v2/feat-lp.svg";
import virtualaccounts from "../../assets/v2/feat-virtualaccounts.svg";
import segregation from "../../assets/v2/feat-segregation.svg";

import "./FeaturesComponents.scss";

interface FeaturesComponentProps {
  nav: string;
}

export default function FeaturesComponent({ nav }: FeaturesComponentProps) {
  return (
    <div className="features-component page" id={nav}>
      <h3>Key features</h3>
      <dl>
        <Feature asset={api} alt="apis" title="API">
          FX Infrastructure as a service embed as a REST API or SDK
        </Feature>
        <Feature asset={a247} alt="24/7 trading" title="24/7 Instant trading">
          Immediate execution of trades for optimal efficiency, 24/7
        </Feature>
        <Feature asset={security} alt="secured" title="Fully secured">
          A payment infrastructure audited and designed to meet the highest international security standards
        </Feature>
        <Feature asset={compliance} alt="compliant" title="Fully compliant">
          Fully Regulated. All funds are 100% KYCed. Know your counterparty
        </Feature>
        <Feature asset={liquidity} alt="liquidity pools" title="Large liquidity pool">
          Ensure seamless transactions without delays
        </Feature>
        <Feature asset={virtualaccounts} alt="virtual accounts" title="Virtual accounts">
          Offer to our clients dedicated virtual IBAN and account numbers, giving them secure and efficient solutions
          for managing their transactions worldwide
        </Feature>
        <Feature asset={segregation} alt="unlimited liquidity" title="Segregation of funds">
          Prioritize the safety of users’ assets by strictly segregating funds
        </Feature>
        <Feature asset={fx} alt="foreign exchange" title="FX">
          EUR - USD
        </Feature>
      </dl>
    </div>
  );
}

interface FeatureProp {
  asset: string;
  alt: string;
  title: string;
}

function Feature({ asset, alt, title, children }: PropsWithChildren<FeatureProp>) {
  return (
    <div>
      <dt>
        <img src={asset} alt={alt} />
      </dt>
      <dd>
        <h5>{title}</h5>
        {children}
      </dd>
    </div>
  );
}
