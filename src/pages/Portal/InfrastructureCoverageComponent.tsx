import { infrastructureComponents } from "../../content/siteContent";

export default function InfrastructureCoverageComponent() {
  return (
    <section className="infrastructure-section">
      <div className="section-shell">
        <p className="eyebrow">Infrastructure & coverage</p>
        <h2>Four proprietary components, one integration</h2>
        <div className="infrastructure-grid">
          {infrastructureComponents.map((component) => (
            <article key={component.title}>
              <h3>{component.title}</h3>
              <p>{component.body}</p>
            </article>
          ))}
        </div>
        <div className="coverage-grid">
          <div>
            <span>Origination currencies</span>
            <strong>EUR · CHF · GBP · USD</strong>
          </div>
          <div>
            <span>Settlement currencies</span>
            <strong>60+</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
