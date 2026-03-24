import React from "react";
import facebook from "../../assets/Footer/ic_facebook.png";
import instagram from "../../assets/Footer/ic_instagram.png";
import twitter from "../../assets/Footer/ic_twitter.png";
import youtube from "../../assets/Footer/ic_youtube.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.etc}>
      <p className={styles.codeit}>ⓒcodeit - 2024</p>
      <div className={styles.etcLink}>
        <a className={styles.etcText} href="/">
          Privacy Policy
        </a>
        <a className={styles.etcText} href="/">
          FAQ
        </a>
      </div>
      <div className={styles.etcSns}>
        <a
          href="https://www.facebook.com/?locale=ko_KR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.snsIc} src={facebook} alt="facebook" />
        </a>
        <a
          href="https://x.com/?lang=ko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.snsIc} src={twitter} alt="twitter" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.snsIc} src={youtube} alt="youtube" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.snsIc} src={instagram} alt="instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
