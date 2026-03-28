import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <Link className="logo" to="/" />
          <nav className="header-nav">
            <ul>
              <li className="community">
                <Link to="/community">자유게시판</Link>
              </li>
              <li className="market">
                <Link to="/items">중고마켓</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Link className="login-btn" to="/login">
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
