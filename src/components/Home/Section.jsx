import React from "react";
import "../../style/index.css";

const Section = () => {
  return (
    <div>
      <section className="section container">
        <div>
          <img
            src="/sprintMission1/resource/main/Img_home_01.png"
            className="nav-img"
          />
        </div>
        <div className="section-inner">
          <p className="section-top-text">HOT item</p>
          <h2>
            인기 상품을 <br />
            확인해 보세요
          </h2>
          <p className="section-end-text">
            가장 HOT한 중고거래 물품을 <br />
            판다 마켓에서 확인해 보세요
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="section-inner">
          <p className="section-top-text section2">Search</p>
          <h2 className="section2">
            구매를 원하는 <br />
            상품을 검색하세요
          </h2>
          <p className="section-end-text section2">
            구매하고 싶은 물품은 검색해서 <br />
            쉽게 찾아보세요
          </p>
        </div>
        <div>
          <img
            src="/sprintMission1/resource/main/Img_home_02.png"
            className="nav-img"
          />
        </div>
      </section>

      <section className="section container">
        <div>
          <img
            src="/sprintMission1/resource/main/Img_home_03.png"
            className="nav-img"
          />
        </div>
        <div className="section-inner">
          <p className="section-top-text">Register</p>
          <h2>
            판매를 원하는 <br />
            상품을 등록하세요
          </h2>
          <p className="section-end-text">
            어떤 물건이든 판매하고 싶은 상품을 <br />
            쉽게 등록하세요
          </p>
        </div>
      </section>
    </div>
  );
};

export default Section;
