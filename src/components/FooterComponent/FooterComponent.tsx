import "./FooterComponent.scss";

export default function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="content">
        <nav>
          <a href="/#top">Home</a>
          <a href="/#mission">Mission</a>
          <a href="/#product">Cash pooling</a>
          <a href="/#cross-border">Cross-border payments</a>
          <a href="/#vision">vision</a>
          <a href="/#features">Key features</a>
          <a href="https://solidefinance.gitbook.io/solidefinance-api" target="_blank">
            Developers
          </a>
          <a href="/#cta">Schedule a demo</a>
        </nav>
        <div className="mentions">
          <p>SolideFinance SAS is incorporated in France under the number 979 290 889 00018.</p>
          <p>KMØ 30 rue François Spoerry, 68100 Mulhouse, France</p>
          <p>All rights reserved, Solide Finance S.A.S {year}.</p>

          <div className="links">
            <a href="/pressbook.pdf">Press</a>
            <a href="/legal-notice">Legal notice</a>
            <a href="mailto:hello@solide.fi">contact</a>
          </div>
          <div className="links">
            <a
              aria-label="Solide Finance LinkedIn"
              href="https://www.linkedin.com/company/solide-fi"
              title="Visit our LinkedIn"
            >
              <svg aria-hidden="true" className="social-link">
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
            </a>
            <a aria-label="Solide Finance GitHub" href="https://github.com/solide-finance" title="Visit our GitHub">
              <svg aria-hidden="true" className="social-link">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
