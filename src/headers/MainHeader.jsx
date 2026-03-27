import React from "react";
import * as imgAssets from "../imgs/imgController.js";
import { Link } from "react-router-dom";
import "../css/mainheader.css";

const MainHeader = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__container">
          <Link href="/" className="header__logo">
            <img src={imgAssets.pandaIcon} alt="판다마켓 로고" />
            <span className="logo__title">판다마켓</span>
          </Link>
          <Link to="/login" className="header__login">
            로그인
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
