import React from "react";
import pandaMarketLogo from "../assets/pandamarket.png";
import pandaMarketLogoMobile from "../assets/pandamarket_mobile.png";
import styles from "../styles/GNB.module.css";
import "../App.css";
import { Link, NavLink } from "react-router-dom";

const GNB = ({ isMobile }) => {
  return (
    <nav>
      <div className={styles.gnbContainer}>
        <div>
          <Link to="/">
            <img
              src={isMobile ? pandaMarketLogoMobile : pandaMarketLogo}
              className={styles.logo}
              alt="Pandamarket Logo"
            />
          </Link>
          <div
            className={`${styles.navList} ${isMobile ? "text-lg" : "text-2lg"} bold`}
          >
            <NavLink
              to="/community"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.active}`
                  : `${styles.navLink}`
              }
            >
              자유게시판
            </NavLink>
            <NavLink
              to="/items"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.active}`
                  : `${styles.navLink}`
              }
            >
              중고마켓
            </NavLink>
          </div>
        </div>
        <button className={`${styles.btn} text-lg semibold`}>로그인</button>
      </div>
    </nav>
  );
};

export default GNB;
