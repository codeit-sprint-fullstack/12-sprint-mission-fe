import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>©codeit - 2026</div>
      <div>
        <ul className="gap-30">
          <li>
            <Link to="">Privacy Policy</Link>
          </li>
          <li>
            <Link to="">FAQ</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="gap-15">
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.facebook.com/?locale=ko_KR"
            >
              <img
                src="../public/img/icon/ic_facebook.png"
                alt="facebookIcon"
              />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://x.com/?lang=ko"
            >
              <img src="../public/img/icon/ic_twitter.png" alt="twitterIcon" />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.youtube.com/"
            >
              <img src="../public/img/icon/ic_youtube.png" alt="youtubeIcon" />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.instagram.com/"
            >
              <img
                src="../public/img/icon/ic_instagram.png"
                alt="instagramIcon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
