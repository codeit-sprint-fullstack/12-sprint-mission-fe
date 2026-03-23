import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="inner">
        <p class="copyright">&copy;codeit - 2026</p>

        <ul class="cs-menu">
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>

        <ul class="sns-list">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              title="페이스북 바로가기(새창)"
              class="facebook"
            >
              <span class="sr-only">페이스북</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.x.com"
              target="_blank"
              title="트위터 바로가기(새창)"
              class="twitter"
            >
              <span class="sr-only">트위터</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              title="유튜브 바로가기(새창)"
              class="youtube"
            >
              <span class="sr-only">유튜브</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              title="인스타그램 바로가기(새창)"
              class="instagram"
            >
              <span class="sr-only">인스타그램</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
