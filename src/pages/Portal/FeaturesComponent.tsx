import { PropsWithChildren } from "react";

import "./FeaturesComponents.scss";

interface FeaturesComponentProps {
  nav: string;
}

export default function FeaturesComponent({ nav }: FeaturesComponentProps) {
  return (
    <div className="features-component page" id={nav}>
      <h3>Key features</h3>
      <dl>
        <Feature asset="api">FX Infrastructure as a Service embed as an API or SDK</Feature>
        <Feature asset="low-fees">Low & Transparent Fees. Enjoy lower costs compared to traditional methods</Feature>
        <Feature asset="247">Instant Trading. Immediate execution of trades for optimal efficiency</Feature>
        <Feature asset="regulated">Fully Regulated. All funds are 100% KYCed. Know your counterparty</Feature>
        <Feature asset="FX">EUR - USD - GBP</Feature>
        <Feature asset="secured">Security. Low slippage. No impermanent loss</Feature>
        <Feature asset="virtualaccount">Virtual Accounts</Feature>
        <Feature asset="block">Large Liquidity Pool. Ensuring seamless transactions without delays</Feature>
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
        <img src={`src/assets/${asset}.png`} />
      </dt>
      <dd>{children}</dd>
    </div>
  );
}
