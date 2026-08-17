import { teamStrip } from "../../content/siteContent";

export default function TeamStripComponent() {
  return (
    <section className="team-strip">
      <div className="section-shell">
        <p className="eyebrow">Team</p>
        <h2>Built by payment and banking specialists.</h2>
        <div className="team-strip__grid">
          {teamStrip.map((person) => (
            <article key={person.name}>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
        <a className="text-link" href="/company">
          Meet the team <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
