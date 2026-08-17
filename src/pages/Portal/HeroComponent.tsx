import { contactMailto } from "../../config/site";

export default function HeroComponent() {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <p className="eyebrow">Infrastructure for financial institutions</p>
        <h1>Regulated on-chain payment and FX infrastructure for financial institutions</h1>
        <p className="hero__intro">
          SolideFinance modernises FX payment rails. Banks offer their corporate clients faster, more transparent
          cross-border payments — under their own brand, within their own regulated perimeter.
        </p>
        <a href={contactMailto()} className="button-like">
          Contact our team <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
