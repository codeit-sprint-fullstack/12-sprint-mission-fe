import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import headerStyles from "./Header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={`inner ${headerStyles.inner}`}>
        <div>
          <h1 className={headerStyles.logo}>
            <Link to={`/`}>
              <span className="sr-only">판다마켓</span>
            </Link>
          </h1>

          <Navigation />
        </div>

        <Link to={`/login`} className="btn-primary btn-sm">
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
