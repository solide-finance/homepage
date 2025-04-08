import { useEffect, useState } from "react";
import cx from "classnames";

import sflogo from "../../assets/v2/sflogo.svg";
import NeArrow from "../../assets/v2/ne-arrow.svg?react";

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
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="/#mission">Mission</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#features">Features</a>
            </li>
            <li>
              <a href="https://solidefinance.gitbook.io/solidefinance-api" target="_blank">
                Developers
              </a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="actions">
          <a href="https://demo.solide.fi" className="button-like">
            Access demo{" "}
            <span>
              <NeArrow />
            </span>
          </a>
        </div>
      </header>
      <header className={cx("header-component mobile", { "is-scrolled": hasScrolled })}>
        <details name="menu">
          <summary>
            <h1>
              <a href="/#top">
                <img src={sflogo} alt="logo" />
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
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#features">Features</a>
              </li>
              <li>
                <a href="https://solidefinance.gitbook.io/solidefinance-api" target="_blank">
                  Developers
                </a>
              </li>
              <li>
                <hr className="demo-line" />
                <a href="https://demo.solide.fi" className="button-like" target="_blank">
                  Access demo{" "}
                  <span>
                    <NeArrow />
                  </span>
                </a>
                <hr className="demo-line" />
              </li>
            </ul>
          </nav>
        </details>
      </header>
    </>
  );
}
