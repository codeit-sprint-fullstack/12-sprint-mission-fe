import React from "react";
import { Link } from "react-router-dom";

const ProductsHeader = ({ orderBy, setOrderBy, keyword, setKeyword }) => {
  return (
    <div className="products-header">
      <h2 className="title">판매 중인 상품</h2>
      <div className="search-and-sort">
        <input
          className="search"
          placeholder="검색할 상품을 입력해주세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Link className="new-product-btn">상품 등록하기</Link>
        <select
          className="order-by-selector"
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value)}
        >
          <option value="createdAt">최신순</option>
          <option value="favoriteCount">좋아요순</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
