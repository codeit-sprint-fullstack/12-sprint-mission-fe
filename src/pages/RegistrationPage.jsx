import React from "react";
import Navbar from "../components/Section/Navbar";
import Footer from "../components/Section/Footer";
import "../style/reset.css";
import "../style/RegistraionPage.css";

const RegistrationPage = () => {
  return (
    <div>
      <Navbar />

      <div className="registration">
        <header>
          <h2 className="header-title">상품 등록하기</h2>
          <button className="product-registration-btn">등록</button>
        </header>

        <main>
          <section>
            <h2>상품명</h2>
            <input
              type="text"
              placeholder="상품명을 입력해주세요."
              className="middle-input"
            ></input>
          </section>

          <section>
            <h2>상품소개</h2>
            <input
              type="text"
              placeholder="상품 소개를 입력해주세요."
              className="product-description-input"
            ></input>
          </section>

          <section>
            <h2>판매가격</h2>
            <input
              type="text"
              placeholder="판매 가격을 입력해주세요."
              className="middle-input"
            ></input>
          </section>

          <section>
            <h2>태그</h2>
            <input
              type="text"
              placeholder="태그를 입력해주세요."
              className="middle-input"
            ></input>
            <div>
              <p>#티셔츠</p>
              <p>#상의</p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
