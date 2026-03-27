import React from "react";
import styles from "./Header.module.css";
import logo from "./logo-sm.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.brandArea}`}>
          <h1>
            <a href="/">
              <img src={logo} alt="판다마켓" />
            </a>
          </h1>

          <nav>
            <ul className={styles.menu}>
              <li className={`text-2lg-bold ${styles.menuItem}`}>자유게시판</li>
              <li className={`text-2lg-bold ${styles.menuItem}`}>중고마켓</li>
            </ul>
          </nav>
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
