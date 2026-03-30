import React from "react";
import "./css/App.css";
import * as imgAssets from "./imgs/imgController.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./headers/MainHeader.jsx";
import Footer from "./footers/Footer.jsx";

const MainPage = () => {
  useEffect(() => {
    document.title = "판다마켓 | 홈";
  }, []);
  return (
    <>
      <MainHeader />
      <main>
        <section className="banner banner--top">
          <div className="banner__inner">
            <div className="banner__content">
              <h2 className="banner__title">
                일상의 모든 물건을
                <br />
                거래해 보세요
              </h2>

              <Link to="Item" className="banner__btn">
                구경하러 가기
              </Link>
            </div>
            <img
              src={imgAssets.pandaHomeTop}
              className="banner__image"
              alt="판다마켓 메인 이미지"
            />
          </div>
        </section>

        <section className="feature">
          <div className="feature__inner">
            <img
              src={imgAssets.home01}
              className="feature__image"
              alt="인기 상품을 확인해보세요"
            />

            <div className="feature__content">
              <p className="feature__label">Hot item</p>
              <h2 className="feature__title">
                인기 상품을
                <br />
                확인해 보세요
              </h2>

              <p className="feature__desc">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </section>

        <section className="feature feature--reverse">
          <div className="feature__inner">
            <div className="feature__content">
              <p className="feature__label">Search</p>
              <h2 className="feature__title">
                구매를 원하는
                <br />
                상품을 검색하세요
              </h2>

              <p className="feature__desc">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>

            <img
              src={imgAssets.home02}
              className="feature__image"
              alt="구매를 원하는 상품을 검색하세요"
            />
          </div>
        </section>

        <section className="feature">
          <div className="feature__inner">
            <img
              src={imgAssets.home03}
              className="feature__image"
              alt="판매를 원하는 상품을 등록하세요"
            />

            <div className="feature__content">
              <p className="feature__label">Register</p>
              <h2 className="feature__title">
                판매를 원하는
                <br />
                상품을 등록하세요
              </h2>

              <p className="feature__desc">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>

        <section className="banner banner--bottom">
          <div className="banner__inner">
            <div className="banner__content">
              <h2 className="banner__title">
                믿을 수 있는
                <br />
                판다마켓 중고 거래
              </h2>
            </div>
            <img
              src={imgAssets.pandaHomeBottom}
              className="banner__image"
              alt="판다마켓 바텀 이미지"
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default MainPage;
