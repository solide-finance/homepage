import "./MissionComponent.scss";

interface HeroComponentProps {
  nav: string;
}

export default function MissionComponent({ nav }: HeroComponentProps) {
  return (
    <div className="mission-component page alternate" id={nav}>
      <h3>Mission</h3>
      <h2>Unlock The Potential Of Decentralized Finance for your Institution</h2>
      <p>
        Welcome to Solide Finance, where we bridge the gap between traditional finance and cutting-edge blockchain
        technology. Our FX Infrastructure as a Service is designed to empower financial institutions with the tools they
        need to offer seamless, efficient, and cost-effective cross-border payments and treasury management solutions.
      </p>
      <ul>
        <li>
          To provide banks and financial institutions with a blockchain-based multi-currency payment and treasury
          management solution that meets all legal and security requirements of traditional finance.
        </li>
        <li>
          Our mission is to offer a blockchain tech stack to Banks and TMSs to augment their client offering and
          increase their banking efficiency.
        </li>
      </ul>
    </div>
  );
}
