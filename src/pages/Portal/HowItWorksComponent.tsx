import { designPrinciples } from "../../content/siteContent";

type FlowStep = {
  title: string;
  detail?: string;
  note?: string;
  tone: "bank" | "ramp" | "core";
  parts?: string[];
};

const flowSteps: FlowStep[] = [
  { title: "Issuing bank", detail: "Origination currency", note: "EUR · CHF · GBP · USD", tone: "bank" },
  { title: "On-ramp", detail: "Fiat in", tone: "ramp" },
  {
    title: "SolideFinance infrastructure",
    tone: "core",
    parts: ["Orchestrator", "AMM", "Custody", "Liquidity", "KYT Screening"]
  },
  { title: "Off-ramp", detail: "Fiat out", tone: "ramp" },
  { title: "Beneficiary bank", detail: "Settlement currency", note: "60+ currencies", tone: "bank" }
];

const flowBadges = [
  "Atomic conversion and delivery",
  "T+0 settlement, 24/7",
  "Screening before execution",
  "No nostro/vostro accounts",
  "Auditability & Reporting"
];

export default function HowItWorksComponent() {
  return (
    <section className="product-section" id="product">
      <div className="section-shell">
        <p className="eyebrow">Product</p>
        <h2>Three design principles. One institutional payment flow</h2>
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
          <ol className="payment-flow__steps">
            {flowSteps.map((step, index) => (
              <li key={step.title} className={`payment-flow__step payment-flow__step--${step.tone}`}>
                <span className="payment-flow__index" aria-hidden="true">
                  {index + 1}
                </span>
                <strong>{step.title}</strong>
                {step.detail && <span className="payment-flow__detail">{step.detail}</span>}
                {step.note && <span className="payment-flow__note">{step.note}</span>}
                {step.parts && (
                  <ul className="payment-flow__parts">
                    {step.parts.map((part) => (
                      <li key={part}>{part}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
          <ul className="payment-flow__badges">
            {flowBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
