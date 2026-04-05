import React from "react";
import facebookIc from "../assets/ic_facebook.svg";
import xIc from "../assets/ic_twitter.svg";
import instagramIc from "../assets/ic_instagram.svg";
import youtubeIc from "../assets/ic_youtube.svg";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className="regular">
      <div className={styles.copylight}>
        <p>©codeit - 2024</p>
      </div>
      <div className={styles.info}>
        {/* 추후 Link 태그로 수정 */}
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className={styles.snsLink}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={facebookIc} alt="페이스북 아이콘" />
        </a>
        <a href="https://www.x.com/ " target="_blank" rel="noreferrer noopener">
          <img src={xIc} alt="X 아이콘" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={youtubeIc} alt="유튜브 아이콘" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={instagramIc} alt="인스타그램 아이콘" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
