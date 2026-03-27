import React from "react";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import twitter from "../assets/img/twitter.png";
import youtube from "../assets/img/youtube.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <div className="footer-content">
          <div className="text-codeit-2024">@codeit - 2024</div>
          <div className="footer-policy">
            <a href="/privacy">
              <div>Privacy Policy</div>
            </a>
            <a href="/faq">
              <div>FAQ</div>
            </a>
          </div>
          <div className="icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={facebook} alt="페이스북 아이콘" />
            </a>
            <a
              href="https://x.com/?lang=ko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={twitter} alt="트위터 아이콘" />
            </a>
            <a
              href="https://www.youtube.com/?app=desktop&hl=ko&gl=KR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={youtube} alt="유튜브 아이콘" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={instagram} alt="인스타그램 아이콘" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
