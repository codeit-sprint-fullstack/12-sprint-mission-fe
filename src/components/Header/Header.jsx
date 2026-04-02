import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo/logo.png";

const Header = () => {
  return (
    <header className="m-header">
      <div className="m-header-container">
        <Link to="/">
          <img src={logo} alt="판다마켓 로고" />
        </Link>
        <Link to="/" className="btn btn-small">
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
