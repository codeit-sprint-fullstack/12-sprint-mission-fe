import React from "react";
import "../css/App.css";
import * as imgAssets from "../imgs/imgController.js";
import { Link } from "react-router-dom";
import "../css/itemheader.css";

const ItemHeader = () => {
  return (
    <header className="item-header">
      <div className="item-header__inner">
        <div className="item-header__left">
          <Link to="/" className="item-header__logo">
            <img src={imgAssets.pandaLogo} alt="판다마켓" />
          </Link>

          <nav className="item-header__nav">
            <Link to="/Forum" className="item-header__link">
              자유게시판
            </Link>
            <Link
              to="/Item"
              className="item-header__link item-header__link--active"
            >
              중고마켓
            </Link>
          </nav>
        </div>

        <Link to="/login" className="item-header__login">
          로그인
        </Link>
      </div>
    </header>
  );
};

export default ItemHeader;
