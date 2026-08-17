import type { Person } from "../../content/siteContent";
import { personInitials, personPhoto } from "../../utils/team";

import "./PersonCard.scss";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export default function PersonCard({ person }: { person: Person }) {
  const photo = personPhoto(person.name);

  return (
    <article className="person-card">
      <div className="person-card__head">
        {photo ? (
          <img className="person-card__photo" src={photo} width="128" height="128" alt="" />
        ) : (
          <span className="person-card__photo person-card__photo--initials" aria-hidden="true">
            {personInitials(person.name)}
          </span>
        )}
        <div>
          <h3>{person.name}</h3>
          <p className="person-card__role">{person.role}</p>
        </div>
      </div>

      {person.bio && <p className="person-card__bio">{person.bio}</p>}

      {person.linkedin && (
        <a
          className="person-card__linkedin"
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} on LinkedIn`}
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      )}
    </article>
  );
}
