import { designPrinciples } from "../../content/siteContent";

const flowSteps = [
  { title: "Issuing bank" },
  { title: "On-ramp" },
  { title: "SolideFinance infrastructure", detail: "orchestration · execution · compliance" },
  { title: "Off-ramp" },
  { title: "Beneficiary bank" }
];

export default function HowItWorksComponent() {
  return (
    <section className="product-section" id="product">
      <div className="section-shell">
        <p className="eyebrow">Product</p>
        <h2>Three design principles. One institutional payment flow.</h2>
        <div className="principles-grid">
          {designPrinciples.map((principle, index) => (
            <article key={principle.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>

        <div className="payment-flow">
          <p className="eyebrow">Account-to-account payment flow</p>
          <ol>
            {flowSteps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                {step.detail && <span>{step.detail}</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
