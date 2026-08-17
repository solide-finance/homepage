import { useEffect, useState } from "react";

import sflogo from "../../assets/v2/sflogo.svg";
import { navLinks } from "../../content/siteContent";

import "./HeaderComponent.scss";

export default function HeaderComponent() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = navLinks.map((link) => (
    <li key={link.label}>
      <a
        href={link.href}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noopener noreferrer" : undefined}
        onClick={() => setMenuOpen(false)}
      >
        {link.label}
        {link.external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    </li>
  ));

  return (
    <header className={`site-header${hasScrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <div className="brand">
          <a href="/#top" aria-label="SolideFinance home">
            <img src={sflogo} alt="SolideFinance" />
          </a>
        </div>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          <ul>{links}</ul>
        </nav>

        <a className="button-like header-cta" href="/contact">
          Contact our team <span aria-hidden="true">→</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen}>
        <ul>{links}</ul>
        <a className="button-like" href="/contact" onClick={() => setMenuOpen(false)}>
          Contact our team <span aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  );
}
