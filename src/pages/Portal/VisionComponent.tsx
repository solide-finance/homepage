import "./VisionComponent.scss";

interface VisionComponentProps {
  nav: string;
}

export default function VisionComponent({ nav }: VisionComponentProps) {
  return (
    <div className="vision-component" id={nav}>
      <p>
        We envision to <em>bridge</em> future technologies with traditional finance, enabling financial institutions to
        deliver superior cross-border payment and treasury management solutions to their clients.
      </p>
    </div>
  );
}
