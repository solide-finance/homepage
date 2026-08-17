import { useCases } from "../../content/siteContent";

export default function UseCasesComponent() {
  return (
    <section className="section-shell use-cases" id="use-cases">
      <p className="eyebrow">Use cases</p>
      <h2>One payment and FX layer across institutional workflows</h2>
      <div className="use-cases__grid">
        {useCases.map((useCase, index) => (
          <article className="content-card" key={useCase.title}>
            <span className="card-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{useCase.title}</h3>
            <p>{useCase.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
