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
    <>
      <header className={cx("header-component desktop", { "is-scrolled": hasScrolled })}>
        <h1>
          <a href="/#top">
            <img src={sflogo} alt="logo" />
            SolideFinance
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="/#mission">Mission</a>
            </li>
            <li>
              <a href="/#product">Product</a>
            </li>
            <li>
              <a href="/#vision">Vision</a>
            </li>
            <li>
              <a href="/#features">Features</a>
            </li>
          </ul>
        </nav>
        <div className="actions">
          <a href="mailto:hello@solide.fi" className="button-like" style={{ fontSize: "2em" }}>
            &#9743;
          </a>
          <a href="https://demo.solide.fi" className="button-like">
            Login <span>-&gt;</span>
          </a>
        </div>
      </header>
      <header className={cx("header-component mobile", { "is-scrolled": hasScrolled })}>
        <details name="menu">
          <summary>
            <h1>
              <a href="/#top">
                <img src={sflogo} alt="logo" />
                SolideFinance
              </a>
            </h1>
            <span className="expanded-indicator">&nbsp;</span>
          </summary>
          <nav>
            <ul>
              <li>
                <a href="/#mission">Mission</a>
              </li>
              <li>
                <a href="/#product">Product</a>
              </li>
              <li>
                <a href="/#vision">Vision</a>
              </li>
              <li>
                <a href="/#features">Features</a>
              </li>
              <li>
                <a href="mailto:hello@solide.fi">
                  Contact <span>&#9743;</span>
                </a>
              </li>
            </ul>
          </nav>
        </details>
      </header>
    </>
  );
}
