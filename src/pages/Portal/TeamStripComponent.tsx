import PersonCard from "../../components/PersonCard/PersonCard";
import { teamStrip } from "../../content/siteContent";

export default function TeamStripComponent() {
  return (
    <section className="team-strip">
      <div className="section-shell">
        <p className="eyebrow">Team</p>
        <h2>Built by payment and banking specialists</h2>
        <div className="team-strip__grid">
          {teamStrip.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
        <a className="text-link" href="/company">
          Meet the team <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
