import Seo from "../../components/Seo/Seo";
import { newsEntries } from "../../content/siteContent";

import "./NewsPage.scss";

export default function NewsPage() {
  return (
    <div className="standalone-page news-page">
      <Seo
        title="News — SolideFinance"
        description="Company news, events and press coverage from SolideFinance."
        path="/news"
      />
      <p className="eyebrow">Updates</p>
      <h1>News & press</h1>
      <p className="standalone-page__intro">
        Company news, institutional payment perspectives, events and press coverage.
      </p>

      <div className="news-list">
        {newsEntries.map((entry) => (
          <article key={entry.link}>
            <div className="news-publisher">
              <div className="news-logo">
                <img src={entry.logo} alt={`${entry.source} logo`} />
              </div>
              <div className="news-meta">
                <span>{entry.source}</span>
                <time>{entry.date}</time>
              </div>
            </div>
            <div className="news-content">
              <h2>{entry.title}</h2>
              <p>{entry.summary}</p>
              <a className="text-link news-read-link" href={entry.link} target="_blank" rel="noreferrer">
                Read on {entry.source} <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className="press-contact">
        <h2>Press enquiries</h2>
        <p>For interviews, company information and media requests, contact our team.</p>
        <a className="button-like" href="/contact?subject=press">
          Contact our press team <span aria-hidden="true">→</span>
        </a>
      </section>
    </div>
  );
}
