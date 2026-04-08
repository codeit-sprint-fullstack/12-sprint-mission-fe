import React from "react";
import "../../style/index.css";
import sectionImage01 from "../../assets/mainPage/Img_home_01.png";
import sectionImage02 from "../../assets/mainPage/Img_home_02.png";
import sectionImage03 from "../../assets/mainPage/Img_home_03.png";

const Section = () => {
  return (
    <div>
      <section className="section container">
        <div>
          <img src={sectionImage01} className="nav-img" alt="인기 상품 소개" />
        </div>
        <div className="section-inner">
          <p className="section-top-text">HOT item</p>
          <h2>
            인기 상품을
            <br />
            확인해 보세요
          </h2>
          <p className="section-end-text">
            가볍게 HOT한 중고거래 물품을
            <br />
            판다 마켓에서 확인해 보세요
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="section-inner">
          <p className="section-top-text section2">Search</p>
          <h2 className="section2">
            구매를 원하시는
            <br />
            상품을 검색하세요
          </h2>
          <p className="section-end-text section2">
            구매하고 싶은 물품을 검색해서
            <br />
            손쉽게 찾아보세요
          </p>
        </div>
        <div>
          <img src={sectionImage02} className="nav-img" alt="상품 검색 소개" />
        </div>
      </section>

      <section className="section container">
        <div>
          <img src={sectionImage03} className="nav-img" alt="상품 등록 소개" />
        </div>
        <div className="section-inner">
          <p className="section-top-text">Register</p>
          <h2>
            판매를 원하시는
            <br />
            상품을 등록하세요
          </h2>
          <p className="section-end-text">
            어떤 물건이든 판매하고 싶은 상품을
            <br />
            손쉽게 등록해 보세요
          </p>
        </div>
      </section>
    </div>
  );
};

export default Section;
