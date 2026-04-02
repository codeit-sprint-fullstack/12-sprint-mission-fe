import React from "react";
import { Link } from "react-router-dom";

import faceBookIcon from "../../assets/imgs/icons/ic_facebook.svg";
import twitterIcon from "../../assets/imgs/icons/ic_twitter.svg";
import youtubeIcon from "../../assets/imgs/icons/ic_youtube.svg";
import instagramIcon from "../../assets/imgs/icons/ic_instagram.svg";

const Footer = () => {
  return (
    <footer className="m-footer">
      <div className="ft-wrap">
        <p>@codeit - 2024</p>
        <nav id="ft-cs-link">
          <ul>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
          </ul>
        </nav>
        <nav id="ft-out-link">
          <ul>
            <li>
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={faceBookIcon} alt="페이스북 바로가기 아이콘" />
              </Link>
            </li>
            <li>
              <Link
                to="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="트위터 바로가기 아이콘" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeIcon} alt="유튜브 바로가기 아이콘" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="인스타그램 바로가기 아이콘" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
