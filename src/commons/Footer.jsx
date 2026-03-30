import React from "react";
import icFacebook from "../images/ic_facebook.png";
import icInstagram from "../images/ic_instagram.png";
import icTwitter from "../images/ic_twitter.png";
import icYoutube from "../images/ic_youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="since-text">@codeit - 2024</div>
        <div className="privacy-and-faq">
          <a className="privacy-policy" href="./html/privacy.html">
            Privacy Policy
          </a>
          <a className="faq" href="./html/faq.html">
            FAQ
          </a>
        </div>
        <div className="sns-images">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icFacebook} alt="facebook icon" className="sns-icon" />
          </a>
          <a
            href="https://www.x.com"
            target="_blank"
            rel="nooopener noreferrer"
          >
            <img src={icTwitter} alt="twitter icon" className="sns-icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icInstagram} alt="instagram icon" className="sns-icon" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icYoutube} alt="youtube icon" className="sns-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
