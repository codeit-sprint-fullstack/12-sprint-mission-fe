import React from "react";
import { Link } from "react-router-dom";
import "../../style/reset.css";
import "../../style/Footer.css";
import facebookIcon from "../../assets/mainPage/ic_facebook.svg";
import twitterIcon from "../../assets/mainPage/ic_twitter.svg";
import youtubeIcon from "../../assets/mainPage/ic_youtube.svg";
import instagramIcon from "../../assets/mainPage/ic_instagram.svg";

const Footer = () => {
  return (
    <div className="footer-bg">
      <footer className="footer container">
        <div>
          <p className="footer-text">@codeit 2026</p>
        </div>

        <div className="footer-text-middle">
          <Link to="/" className="footer-text">
            Privacy Policy
          </Link>
          <Link to="/" className="footer-text">
            FAQ
          </Link>
        </div>

        <div className="footer-icon">
          <a
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://x.com/?lang=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="X" />
          </a>
          <a
            href="https://www.youtube.com/?hl=ko&gl=KR&app=desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="YouTube" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
