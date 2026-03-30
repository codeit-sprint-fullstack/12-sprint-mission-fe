import React from "react";
import "./Header.css";
import logo from "../assets/img/logo.png";
import logo_375 from "../assets/img/logo_375.png";

const logoImg = window.innerWidth <= 375 ? true : false;

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          <a href="/">
            {logoImg ? (
              <img className="header-logo" src={logo_375} alt="로고" />
            ) : (
              <img className="header-logo" src={logo} alt="로고" />
            )}
          </a>
          <nav className="nav-button">자유게시판</nav>
          <nav className="nav-button">중고마켓</nav>
        </div>
        <nav className="header-navigation">
          <a href="/" className="header-login-button">
            로그인
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
