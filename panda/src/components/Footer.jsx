import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../assets/images/social/facebook-logo.svg";
import Twitter from "../assets/images/social/twitter-logo.svg";
import Youtube from "../assets/images/social/youtube-logo.svg";
import Instagram from "../assets/images/social/instagram-logo.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>©codeit - 2026</p>
        <ul>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="facebook" />
            </Link>
          </li>
          <li>
            <Link
              to="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Youtube} alt="youtube" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="instagram" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
