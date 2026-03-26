import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import "./header.css";

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
                <Link to="/items">중고마켓</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Link to="/login" className="login">
          로그인
        </Link>
      </div>
    </header>
  );
}

export default Header;
