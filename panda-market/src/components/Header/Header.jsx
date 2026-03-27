import React from "react";
import logo from "../../assets/header/ic_panda_market_logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.head}>
      <div className={styles.navWrap}>
        <a href="/" className={styles.logo}>
          <img className={styles.logoPanda} src={logo} alt="판다마켓 로고" />
          <span className={styles.logoName}>판다마켓</span>
        </a>
        <div style={{ display: "inline-flex" }}>
          <a href="/" className={styles.navLink}>
            자유게시판
          </a>
          <a href="/" className={styles.navLink}>
            중고마켓
          </a>
        </div>
      </div>
      <a href="/" className={styles.btn}>
        로그인
      </a>
    </header>
  );
}

export default Header;
