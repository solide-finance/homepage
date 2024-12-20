interface CallToActionComponentProps {
  nav: string;
}

export default function CallToActionComponent({ nav }: CallToActionComponentProps) {
  return (
    <div className="call-to-action-component page" id={nav}>
      <h2>Ready to Revolutionize FX Transactions and Treasury Management?</h2>
      <p>
        Don't miss out on the future of finance.
        <br />
        Schedule a demo with us today to explore our solution.
      </p>
      <a href="mailto:hello@solide.fi" className="button-like">
        Schedule a demo<span>-&gt;</span>
      </a>
    </div>
  );
}
