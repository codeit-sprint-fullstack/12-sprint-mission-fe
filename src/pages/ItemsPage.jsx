import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Section/Navbar";
import Footer from "../components/Section/Footer";
import sortIcon from "../assets/Items/ic_sort.svg";
import "../style/reset.css";
import "../style/ItemsPage.css";

const Items = () => {
  const [Itmes, setItems] = useState([]);

  useEffect(() => {
    const getItemsData = async () => {
      const response = await fetch("http://localhost:5000/products");
      const result = await response.json();

      console.log(result);
      setItems(result);
    };

    getItemsData();
  }, []);

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
          {Itmes.map((product) => (
            <section className="card-section" key={product.id}>
              <img
                src="src\assets\Items\product_default.png"
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
                  <span>240</span>
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
