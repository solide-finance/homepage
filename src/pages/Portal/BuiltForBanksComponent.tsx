import { builtForBanks } from "../../content/siteContent";

export default function BuiltForBanksComponent() {
  return (
    <section className="section-shell built-for-banks">
      <p className="eyebrow">Built for banks</p>
      <h2>Infrastructure that strengthens the institution’s position</h2>
      <div className="card-grid">
        {builtForBanks.map((item) => (
          <article className="content-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
