import { NavLink } from "react-router-dom";
import navigationStyles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={navigationStyles.gnb}>
      <ul>
        <li>
          <NavLink to={`/`}>자유게시판</NavLink>
        </li>
        <li>
          <NavLink
            to={`/items`}
            className={({ isActive }) =>
              isActive ? navigationStyles.active : ""
            }
          >
            중고마켓
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
