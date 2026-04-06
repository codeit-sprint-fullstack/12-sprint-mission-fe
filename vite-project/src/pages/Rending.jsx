import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Rending.css";
import upload from "../assets/img/upload.png";
import search_panda from "../assets/img/search_panda.png";
import top from "../assets/img/top.png";
import intro_panda from "../assets/img/intro_panda.png";

const Rending = () => {
  return (
    <div>
      <Header />
      <main>
        <section class="intro">
          <div class="intro-container">
            <div class="intro-text">
              일상의 모든 물건을 <br />
              거래해 보세요
            </div>
            <nav class="intro-navigation">
              <a href="/items" class="intro-cta">
                구경하러 가기
              </a>
            </nav>
          </div>
          <img class="intro-img" src={intro_panda} alt="판다 이미지" />
        </section>
        <section class="card">
          <div class="card-container">
            <img class="card-image" src={top} alt="인기 상품을 확인해보세요" />
            <div class="card-content">
              <div class="card-title">Hot item</div>
              <div class="card-body">
                <div class="card-summary">
                  인기 상품을 <br />
                  확인해 보세요
                </div>
                <div class="card-explan">
                  가장 HOT한 중고거래 물품을 <br />
                  판다 마켓에서 확인해 보세요
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="card">
          <div class="card-container">
            <div class="card-content2">
              <div class="card-title">Search</div>
              <div class="card-body">
                <div class="card-summary">
                  구매를 원하는 <br />
                  상품을 검색하세요
                </div>
                <div class="card-explan">
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </div>
              </div>
            </div>
            <img
              class="option-img"
              src={search_panda}
              alt="인기 상품을 확인해보세요"
            />
          </div>
        </section>
        <div class="card">
          <div class="card-container">
            <img
              class="option-img"
              src={upload}
              alt="인기 상품을 확인해보세요"
            />
            <div class="card-content">
              <div class="card-title">Register</div>
              <div class="card-body">
                <div class="card-summary">
                  판매를 원하는 <br />
                  상품을 등록하세요
                </div>
                <div class="card-explan">
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rending;
