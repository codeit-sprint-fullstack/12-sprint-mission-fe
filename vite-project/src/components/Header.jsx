import "./Header.css";
import logo from "../assets/img/logo.png";
import logo_375 from "../assets/img/logo_375.png";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const logoImg = window.innerWidth <= 375 ? true : false;
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          <Link to="/">
            {logoImg ? (
              <img className="header-logo" src={logo_375} alt="로고" />
            ) : (
              <img className="header-logo" src={logo} alt="로고" />
            )}
          </Link>
          <Link to="#" className="nav-button">
            자유게시판
          </Link>
          <Link
            to="/items"
            className={
              location.pathname === "/items"
                ? "nav-button active"
                : "nav-button"
            }
          >
            중고마켓
          </Link>
        </div>
        <nav className="header-navigation">
          <Link to="#" className="header-login-button">
            로그인
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
