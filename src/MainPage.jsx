import React from "react";
import "./css/App.css";
import * as imgAssets from "./imgs/imgController.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  useEffect(() => {
    document.title = "판다마켓 | 홈";
  }, []);
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="header__container">
            <a href="/" className="header__logo">
              <img src={imgAssets.pandaIcon} alt="판다마켓 로고" />
              <span className="logo__title">판다마켓</span>
            </a>
            <Link to="/login" className="header__login">
              로그인
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="banner banner--top">
          <div className="banner__inner">
            <div className="banner__content">
              <h2 className="banner__title">
                일상의 모든 물건을
                <br />
                거래해 보세요
              </h2>

              <a href="./items.html" className="banner__btn">
                구경하러 가기{" "}
              </a>
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
      </main>
      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__copyright">©codeit - 2024</p>
          <div className="footer__links">
            <a href="./privacy.html">Privacy Policy</a>
            <a href="./faq.html">FAQ</a>
          </div>
          <div className="footer__sns">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgAssets.ic_facebook} alt="페이스북 아이콘" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img src={imgAssets.ic_twitter} alt="엑스 아이콘" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgAssets.ic_youtube} alt="유튜브 아이콘" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgAssets.ic_instagram} alt="인스타그램 아이콘" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainPage;
