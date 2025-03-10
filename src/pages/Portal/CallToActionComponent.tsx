import NeArrow from "../../assets/v2/ne-arrow.svg?react";

import "./CallToActionComponent.scss";

interface CallToActionComponentProps {
  nav: string;
}

export default function CallToActionComponent({ nav }: CallToActionComponentProps) {
  return (
    <div className="call-to-action-component" id={nav}>
      <div className="component-content">
        <h2>Are you ready to enter the next generation of FX payments?</h2>
        <p>Don’t miss out on the future of finance, schedule a demo with us today to explore our solution.</p>
        <a href="mailto:hello@solide.fi" className="button-like">
          Schedule a demo{" "}
          <span>
            <NeArrow />
          </span>
        </a>
      </div>
    </div>
  );
}
