import Seo from "../../components/Seo/Seo";
import { boardMembers, compliancePeople, leadership, offices } from "../../content/siteContent";

import "./CompanyPage.scss";

type PeopleSectionProps = {
  title: string;
  people: typeof leadership;
};

function PeopleSection({ title, people }: PeopleSectionProps) {
  return (
    <section className="people-section">
      <h2>{title}</h2>
      <div className="people-grid">
        {people.map((person) => (
          <article key={person.name}>
            <div className="person-rule" aria-hidden="true" />
            <h3>{person.name}</h3>
            <p>{person.role}</p>
            {person.bio && <p>{person.bio}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function CompanyPage() {
  return (
    <div className="standalone-page company-page">
      <Seo
        title="Company — SolideFinance"
        description="SolideFinance was founded by specialists in trading-floor engineering, international payments and corporate treasury. Offices in Mulhouse, Paris, Geneva and Zurich."
        path="/company"
      />
      <p className="eyebrow">Company</p>
      <h1>The company</h1>
      <p className="standalone-page__intro">
        SolideFinance brings together payment, banking, treasury, engineering and compliance expertise to modernise
        cross-border payment infrastructure for financial institutions.
      </p>

      <PeopleSection title="Management" people={leadership} />
      <PeopleSection title="Compliance" people={compliancePeople} />
      <PeopleSection title="Board of directors" people={boardMembers} />

      <section className="company-offices">
        <h2>Offices</h2>
        <div className="company-offices__grid">
          {offices.map((office) => (
            <article key={office.city}>
              <h3>{office.city}</h3>
              {office.address && <p>{office.address}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="company-cta">
        <h2>Talk to the people building the infrastructure.</h2>
        <a className="button-like" href="/contact">
          Contact our team <span aria-hidden="true">→</span>
        </a>
      </section>
    </div>
  );
}
