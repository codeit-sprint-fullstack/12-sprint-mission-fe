import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Section/Navbar";
import Footer from "../components/Section/Footer";
import sortIcon from "../assets/Items/ic_sort.svg";
import "../style/reset.css";
import "../style/ItemsPage.css";

const Items = () => {
  const dummyProducts = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: "로켓 청소기",
    price: "1,500,000원",
    favoriteCount: 240,
    image: "/src/assets/Items/product_default.png",
  }));

  return (
    <div className="items-page">
      <Navbar />
      <main className="items items-inner-div">
        <section className="items-toolbar" aria-label="상품 목록 도구">
          <p className="items-header-title">판매 중인 상품</p>

          <div className="items-header-func">
            <input
              type="text"
              placeholder="검색할 상품명을 입력해 주세요."
              className="items-search-input"
            />
            <Link to="/registration" className="items-add-btn">
              상품 등록하기
            </Link>
            <select className="items-select" aria-label="정렬">
              <option>최신순</option>
            </select>
            <button type="button" className="items-sort-btn" aria-label="정렬">
              <img src={sortIcon} alt="" aria-hidden="true" />
            </button>
          </div>
        </section>

        <div className="items-card-list">
          {dummyProducts.map((product) => (
            <section className="card-section" key={product.id}>
              <img
                src={product.image}
                className="items-default-img"
                alt={product.name}
              />
              <div className="items-card-text-div">
                <div className="itmes-card-text">
                  <p className="itmes-text-title">{product.name}</p>
                  <p className="items-text-price">{product.price}</p>
                </div>
                <div className="items-favorite-div">
                  <span>♥</span>
                  <span>{product.favoriteCount}</span>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Items;
