import React from "react";
import logo from "../../assets/header/ic_panda_market_logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.head}>
      <a href="/">
        <div className={`${styles.logo} ${styles.flexCenter}`}>
          <img className={styles.logoPanda} src={logo} alt="판다마켓 로고" />
          <span className={styles.logoName}>판다마켓</span>
        </div>
      </a>
      <a href="login.html" className={`${styles.btn} ${styles.btnLogin}`}>
        로그인
      </a>
    </header>
  );
}

export default Header;
