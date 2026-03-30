import React from "react";
import "../../style/Navbar.css";
import "../../style/reset.css";

const Navbar = () => {
  return (
    <div className="nav-bg">
      <nav className="nav container">
        <div className="nav-tag">
          <a href="index.html">
            <img
              src="/sprintMission1/resource/main/pandamarket_logo.png"
              className="nav-img"
              alt="판다마켓 로고"
            />
          </a>
          <p>자유게시판</p>
          <p>중고마켓</p>
        </div>
        <a href="/sprintMission2/src/login/login.html">
          <button className="cta-btn">로그인</button>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
