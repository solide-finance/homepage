import "./HeroComponent.scss";

interface HeroComponentProps {
  nav: string;
}

export default function HeroComponent({ nav }: HeroComponentProps) {
  return (
    <div className="hero-component" id={nav}>
      <label>Treasury Management</label>
      <label>Cross-border payments</label>
      <h2>Revolutionize your Financial Operations with SolideFinance</h2>
      <p>The future of Cross-Border Payments and Treasury Management for financial institutions.</p>
      <a href="https://demo.solide.fi" className="button-like">
        Access demo <span>-&gt;</span>
      </a>
    </div>
  );
}
