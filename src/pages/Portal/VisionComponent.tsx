import "./VisionComponent.scss";

interface VisionComponentProps {
  nav: string;
}

export default function VisionComponent({ nav }: VisionComponentProps) {
  return (
    <div className="vision-component page alternate" id={nav}>
      <h3>Vision</h3>
      <p>
        We envision to bridge future technologies and traditional finance, empowering financial institutions to provide
        superior services to their SMBs clients in cross-border payments and treasury management.
      </p>
    </div>
  );
}
