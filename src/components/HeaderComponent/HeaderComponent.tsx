import { useEffect, useState } from "react";
import cx from "classnames";

import sflogo from "../../assets/sflogo.png";
import "./HeaderComponent.scss";

export default function HeaderComponent() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function isScrolling() {
      window.requestAnimationFrame(() => {
        setHasScrolled(Boolean(document.querySelector("html")!.scrollTop > 0));
      });
    }

    window.addEventListener("scroll", isScrolling);

    return window.removeEventListener.bind(window, "scroll", isScrolling);
  }, []);

  return (
    <header className={cx("header-component", { "is-scrolled": hasScrolled })}>
      <h1>
        <a href="#top">
          <img src={sflogo} alt="logo" />
          SolideFinance
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#mission">Mission</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#vision">Vision</a>
          </li>
          {/* <li>
            <a href="#about">About</a>
          </li> */}
        </ul>
      </nav>
      <a href="mailto:hello@solide.fi" className="button-like">
        Contact
      </a>
    </header>
  );
}
