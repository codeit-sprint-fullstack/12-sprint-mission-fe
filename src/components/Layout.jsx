import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <header>
        <nav className="gnb">
          <div className="logo">
            <div className="menubar">
              <Link to="/">
                <img
                  src="/images/로고1.png"
                  alt="Panda Market Logo"
                  style={{
                    marginRight: "24px",
                    height: "50px",
                    width: "150px",
                  }}
                />
              </Link>
              <Link
                to="/"
                style={{
                  color: "#4B5563",
                  fontSize: "18px",
                  fontWeight: "700",
                  margin: "0px 24px",
                  cursor: "pointer",
                }}
              >
                자유게시판
              </Link>
              <Link
                to="/items"
                style={{
                  color: location.pathname === "/items" ? "#3692FF" : "#4B5563",
                  fontSize: "18px",
                  fontWeight: "700",
                  margin: "0px 24px",
                  cursor: "pointer",
                }}
              >
                중고마켓
              </Link>
            </div>
            <Link to="/login" className="login">
              로그인
            </Link>
          </div>
        </nav>
      </header>

      <main style={{ display: "block", width: "100%" }}>{children}</main>

      <footer>
        <nav className="footer">
          <div className="right">
            <span className="left-text">@codeit-2024</span>
            <span className="center-text">
              <a href="/privacy">Privacy Policy</a>
              <a href="/faq">FAQ</a>
            </span>
            <span className="sns-logo">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/ic_facebook.png" alt="facebook" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/ic_twitter.png" alt="twitter" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/ic_youtube.png" alt="youtube" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/ic_instagram.png" alt="instagram" />
              </a>
            </span>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Layout;
