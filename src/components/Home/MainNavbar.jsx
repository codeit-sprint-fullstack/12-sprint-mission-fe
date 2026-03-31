import React from "react";
import { Link } from "react-router-dom";
import "../../style/Navbar.css";
import "../../style/reset.css";
import pandaMarketLogo from "../../assets/mainPage/pandamarket_logo.png";

const Navbar = () => {
  return (
    <div className="nav-bg">
      <nav className="nav container">
        <div className="nav-tag">
          <Link to="/">
            <img
              src={pandaMarketLogo}
              className="nav-img"
              alt="판다마켓 로고"
            />
          </Link>
        </div>
        <Link to="/login" className="cta-btn">
          로그인
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
