import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div class="inner">
        <h1 id="logo">
          <a href="/">
            <span class="sr-only">판다마켓</span>
          </a>
        </h1>

        <a href="/login" class="btn-primary btn-sm">
          로그인
        </a>
      </div>
    </header>
  );
};

export default Header;
