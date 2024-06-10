import { PropsWithChildren } from "react";

import a247 from "../../assets/247.png";
import api from "../../assets/api.png";
import fx from "../../assets/fx.png";
import lowFees from "../../assets/low-fees.png";
import regulated from "../../assets/regulated.png";
import secured from "../../assets/secured.png";
import virtualaccount from "../../assets/virtualaccount.png";
import block from "../../assets/block.png";


import "./FeaturesComponents.scss";

interface FeaturesComponentProps {
  nav: string;
}

export default function FeaturesComponent({ nav }: FeaturesComponentProps) {
  return (
    <div className="features-component page" id={nav}>
      <h3>Key features</h3>
      <dl>
        <Feature asset={api} alt="apis">FX Infrastructure as a Service embed as an API or SDK</Feature>
        <Feature asset={lowFees} alt="low fees">Low & Transparent Fees. Enjoy lower costs compared to traditional methods</Feature>
        <Feature asset={a247} alt="24/7 trading">Instant Trading. Immediate execution of trades for optimal efficiency</Feature>
        <Feature asset={regulated} alt="KYC">Fully Regulated. All funds are 100% KYCed. Know your counterparty</Feature>
        <Feature asset={fx} alt="foreign exchange">EUR - USD - GBP</Feature>
        <Feature asset={secured} alt="secured">Security. Low slippage. No impermanent loss</Feature>
        <Feature asset={virtualaccount} alt="virtual accounts">Virtual Accounts</Feature>
        <Feature asset={block} alt="unlimited liquidity">Large Liquidity Pool. Ensuring seamless transactions without delays</Feature>
      </dl>
    </div>
  );
}

interface FeatureProp {
  asset: string;
  alt: string;
}

function Feature({ asset, alt, children }: PropsWithChildren<FeatureProp>) {
  return (
    <div>
      <dt>
        <img src={asset} alt={alt}/>
      </dt>
      <dd>{children}</dd>
    </div>
  );
}
