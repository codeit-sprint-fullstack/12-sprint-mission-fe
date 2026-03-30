import React from "react";
import "../style/reset.css";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg">
      <footer className="footer container">
        <div>
          <p className="footer-text">@codeit 2026</p>
        </div>

        <div className="footer-text-middle">
          <a
            href="/sprintMission1/src/main/privacy.html"
            className="footer-text"
          >
            Privacy Policy
          </a>
          <a href="/sprintMission1/src/main/faq.html" className="footer-text">
            FAQ
          </a>
        </div>

        <div className="footer-icon">
          <a
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/sprintMission1/resource/main/ic_facebook.svg"
              alt="Facebook"
            />
          </a>
          <a
            href="https://x.com/?lang=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/sprintMission1/resource/main/ic_twitter.svg" alt="X" />
          </a>
          <a
            href="https://www.youtube.com/?hl=ko&gl=KR&app=desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/sprintMission1/resource/main/ic_youtube.svg"
              alt="YouTube"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/sprintMission1/resource/main/ic_instagram.svg"
              alt="Instagram"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
