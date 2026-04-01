import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav id="GNB">
        <div className="beforeHeader">
          <Link to="/" id="logo">
            판다마켓
          </Link>
          <ul>
            <li>
              <Link>자유게시판</Link>
            </li>
            <li>
              <Link>중고마켓</Link>
            </li>
          </ul>
        </div>

        <button className="login_button">로그인</button>
      </nav>
    </header>
  );
};

export default Navbar;
