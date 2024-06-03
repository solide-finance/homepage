import "./HeaderComponent.scss";
import sflogo from "../../assets/sflogo.png";

export default function HeaderComponent() {
  return (
    <header className="header-component">
      <h1>
        <a href="#top"><img src={ sflogo }></img>SolideFinance</a>
      </h1>
      <nav>
        {/* <ul>
          <li>Mission</li>
          <li>Products</li>
          <li>Vision</li>
          <li>About</li>
        </ul> */}
      </nav>
      <a href="mailto:hello@solide.fi" className="button-like">
        Contact
      </a>
    </header>
  );
}
