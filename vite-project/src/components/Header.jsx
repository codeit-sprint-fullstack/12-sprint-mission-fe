import React from "react";
import "./Header.css";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          <a href="/">
            <img className="header-logo" src={logo} alt="로고" />
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
