import React from "react";
import "../css/footer.css";
import * as imgAssets from "../imgs/imgController.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copyright">©codeit - 2024</p>
        <div className="footer__links">
          <Link to="/Privacy">Privacy Policy</Link>
          <Link to="/Faq">FAQ</Link>
        </div>
        <div className="footer__sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgAssets.ic_facebook} alt="페이스북 아이콘" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgAssets.ic_twitter} alt="엑스 아이콘" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgAssets.ic_youtube} alt="유튜브 아이콘" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgAssets.ic_instagram} alt="인스타그램 아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
