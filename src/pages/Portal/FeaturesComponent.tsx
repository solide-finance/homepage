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
        <Feature asset={api}>FX Infrastructure as a Service embed as an API or SDK</Feature>
        <Feature asset={lowFees}>Low & Transparent Fees. Enjoy lower costs compared to traditional methods</Feature>
        <Feature asset={a247}>Instant Trading. Immediate execution of trades for optimal efficiency</Feature>
        <Feature asset={regulated}>Fully Regulated. All funds are 100% KYCed. Know your counterparty</Feature>
        <Feature asset={fx}>EUR - USD - GBP</Feature>
        <Feature asset={secured}>Security. Low slippage. No impermanent loss</Feature>
        <Feature asset={virtualaccount}>Virtual Accounts</Feature>
        <Feature asset={block}>Large Liquidity Pool. Ensuring seamless transactions without delays</Feature>
      </dl>
    </div>
  );
}

interface FeatureProp {
  asset: string;
}

function Feature({ asset, children }: PropsWithChildren<FeatureProp>) {
  return (
    <div>
      <dt>
        <img src={asset} />
      </dt>
      <dd>{children}</dd>
    </div>
  );
}
