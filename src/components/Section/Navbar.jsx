import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../style/Navbar.css";
import "../../style/reset.css";
import pandaMarketLogo from "../../assets/mainPage/pandamarket_logo.png";

const Navbar = () => {
  return (
    <div className="nav-bg">
      <nav className="nav container">
        <div className="nav-tag">
          <Link to="/" className="nav-logo-link">
            <img
              src={pandaMarketLogo}
              className="nav-img"
              alt="판다마켓 로고"
            />
          </Link>

          <div className="nav-menu">
            <Link to="" className="nav-menu-link">
              자유게시판
            </Link>
            <NavLink
              to="/items"
              className={({ isActive }) =>
                isActive ? "nav-menu-link nav-menu-link-active" : "nav-menu-link"
              }
            >
              중고마켓
            </NavLink>
          </div>
        </div>

        <Link to="/login" className="cta-btn">
          로그인
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
