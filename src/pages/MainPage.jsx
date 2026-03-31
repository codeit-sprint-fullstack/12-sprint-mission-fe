import React from "react";
import { Link } from "react-router-dom";
import "../style/index.css";
import Section from "../components/Home/Section";
import heroImage from "../assets/mainPage/Img_home_top.png";
import bottomImage from "../assets/mainPage/Img_home_bottom.png";

const MainPage = () => {
  return (
    <div>
      <section className="hero-bg">
        <div className="hero container">
          <div className="hero-inner">
            <h2>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h2>
            <Link to="/market" className="hero-btn">
              구경하러 가기
            </Link>
          </div>
          <div>
            <img src={heroImage} className="hero-img" alt="판다마켓 대표 상품" />
          </div>
        </div>
      </section>

      <Section />

      <section className="bottom-bg">
        <section className="bottom container">
          <div className="bottom-inner">
            <div className="bottom-text">
              <h2>
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </h2>
            </div>
            <div>
              <img src={bottomImage} className="bottom-img" alt="중고 거래 안내" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MainPage;
