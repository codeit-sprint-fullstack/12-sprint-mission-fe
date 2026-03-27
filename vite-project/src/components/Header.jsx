import React from "react";
import "./Header.css";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/">
          <img className="header-logo" src={logo} alt="로고" />
        </a>
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
