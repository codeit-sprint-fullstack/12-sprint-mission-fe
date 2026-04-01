import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo-sm.svg";
import logoTypo from "./logo-typo.svg";

export const Header = ({ variant = "default" }) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.brandArea}`}>
          <h1>
            <Link to="/">
              <img src={logo} alt="판다마켓" className="hide-mobile" />
              <img src={logoTypo} alt="판다마켓" className="show-mobile" />
            </Link>
          </h1>

          {variant === "tab" && (
            <nav>
              <ul className={styles.menu}>
                <li className={`${styles.menuItem}`}>자유게시판</li>
                <Link to="/items">
                  <li className={`${styles.menuItem}`}>중고마켓</li>
                </Link>
              </ul>
            </nav>
          )}
        </div>
        <a
          className={`btn-base text-lg-semibold ${styles.loginBtn}`}
          href="./login.html"
        >
          로그인
        </a>
      </div>
    </header>
  );
};
