import React from "react";
import styles from "./Footer.module.css";
import facebookIcon from "./ic-facebook.svg";
import twitterIcon from "./ic-twitter.svg";
import youtubeIcon from "./ic-youtube.svg";
import instagramIcon from "./ic-instagram.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.inner}`}>
        <span className={styles.copyright}> ©codeit - 2024 </span>

        <nav>
          <ul className={styles.menu}>
            <li>
              <a className={styles.link} href="./privacy.html">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className={styles.link} href="./faq.html">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">페이스북</span>
            <img src={facebookIcon} alt="" aria-hidden="true" />
          </a>
          <a
            href="https://x.com/?lang=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">트위터</span>
            <img src={twitterIcon} alt="" aria-hidden="true" />
          </a>
          <a
            href="https://www.youtube.com/?hl=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">유튜브</span>
            <img src={youtubeIcon} alt="" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">인스타그램</span>
            <img src={instagramIcon} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
