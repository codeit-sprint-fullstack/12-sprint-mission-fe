import React from "react";
import pandaMarketLogo from "../assets/pandamarket.png";
import pandaMarketLogoMobile from "../assets/pandamarket_mobile.png";
import styles from "../styles/GNB.module.css";
import "../App.css";

const GNB = ({ isMobile }) => {
  return (
    <nav>
      <div className={styles.gnbContainer}>
        <div>
          <img
            src={isMobile ? pandaMarketLogoMobile : pandaMarketLogo}
            className={styles.logo}
            alt="Pandamarket Logo"
          />
          <div
            className={`${styles.navList} ${isMobile ? "text-lg" : "text-2lg"} bold`}
          >
            {/* 추후 NavLink 태그로 수정 */}
            <span>자유게시판</span>
            <span>중고마켓</span>
          </div>
        </div>
        <button className={`${styles.btn} text-lg semibold`}>로그인</button>
      </div>
    </nav>
  );
};

export default GNB;
