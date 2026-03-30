import "./header.css";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <div className="header-left">
          <Link to="/" className="logo">
            <img src={logo} alt="판다마켓" />
          </Link>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/community">자유게시판</Link>
              </li>
              <li>
                <Link to="/">중고마켓</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Link to="/login" className="login-btn">
          로그인
        </Link>
      </div>
    </header>
  );
}

export default Header;
