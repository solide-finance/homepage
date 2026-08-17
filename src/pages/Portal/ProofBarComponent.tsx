import { homepageProofs } from "../../content/siteContent";

export default function ProofBarComponent() {
  return (
    <section className="proof-bar" aria-label="SolideFinance at a glance">
      <div className="proof-bar__inner">
        {homepageProofs.map((proof) => (
          <p key={proof}>{proof}</p>
        ))}
      </div>
    </section>
  );
}
