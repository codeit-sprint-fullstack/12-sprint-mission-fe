"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/mainPage/pandamarket_logo.png";
import facebookIcon from "../../assets/mainPage/ic_facebook.svg";
import twitterIcon from "../../assets/mainPage/ic_twitter.svg";
import youtubeIcon from "../../assets/mainPage/ic_youtube.svg";
import instagramIcon from "../../assets/mainPage/ic_instagram.svg";

export function BoardShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="site-nav">
          <Link href="/" className="logo-link" aria-label="판다마켓 홈">
            <img src={logo.src} className="logo-img" alt="판다마켓" />
          </Link>

          <div className="nav-links">
            <Link
              href="/freeboard"
              className={pathname.startsWith("/freeboard") ? "active" : ""}
            >
              자유게시판
            </Link>
            <Link href="/market">중고마켓</Link>
          </div>

          <Link href="/login" className="login-button">
            로그인
          </Link>
        </nav>
      </header>

      <main className="content-area">{children}</main>

      <footer className="site-footer">
        <p>@codeit - 2024</p>
        <div className="footer-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com" aria-label="Facebook">
            <img src={facebookIcon.src} alt="" />
          </a>
          <a href="https://x.com" aria-label="X">
            <img src={twitterIcon.src} alt="" />
          </a>
          <a href="https://www.youtube.com" aria-label="YouTube">
            <img src={youtubeIcon.src} alt="" />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram">
            <img src={instagramIcon.src} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}
