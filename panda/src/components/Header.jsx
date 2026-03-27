import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div>
          <Link className="logo" to="/" />
          <nav>
            <ul>
              <li>
                <Link to="/community">자유게시판</Link>
              </li>
              <li>
                <Link to="/items">중고마켓</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Link to="/login">로그인</Link>
      </div>
    </header>
  );
};

export default Header;
