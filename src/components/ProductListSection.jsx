import React from "react";
import Card_general from "./Card_general";
import "../style/reset.css";
import "../style/ProductListSection.css";

const ProductListSection = ({
  products,
  sortOrder,
  onSortChange,
  searchTitle,
  setSearchTitle,
}) => {
  return (
    <section className="product-list-section">
      <div className="product-list-header">
        <h2>판매 중인 상품</h2>
        <div className="product-search-sort">
          <input
            className="product-list-input"
            type="text"
            value={searchTitle}
            placeholder="검색할 상품명을 입력해 주세요"
            onChange={(event) => setSearchTitle(event.target.value)}
          />
          <button type="button" className="product-add-btn">
            상품 등록하기
          </button>
          <select
            value={sortOrder}
            onChange={(event) => onSortChange(event.target.value)}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <div className="product-list-grid">
        {products.map((product) => (
          <Card_general
            key={product.id}
            image={product.images?.[0]}
            title={product.name}
            price={product.price}
            favoriteCount={product.favoriteCount}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductListSection;
