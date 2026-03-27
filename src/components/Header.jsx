import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <div>
          <h1 id="logo">
            <a href="/">
              <span className="sr-only">판다마켓</span>
            </a>
          </h1>

          <Navigation />
        </div>

        <a href="/login" className="btn-primary btn-sm">
          로그인
        </a>
      </div>
    </header>
  );
};

export default Header;
