import React from "react";
import useWindowSize from "../../hooks/useWindowSize";

const SearchBar = ({ title, onChange, onSearch }) => {
  const { isMobile } = useWindowSize();
  return (
    <>
      {!isMobile ? (
        <>
          <h3 className="product-title">{title}</h3>
          <div className="search-box">
            <input
              id="search-input-pc"
              className="search-input"
              type="text"
              placeholder="검색할 상품을 입력해주세요."
              onChange={(e) => onSearch(e.target.value)}
            />
            <button className="btn btn-small h42">상품 등록하기</button>
            <select
              onChange={(e) => {
                onChange(e.target.value);
              }}
              className="select-small"
              name=""
              id="product-order"
            >
              <option value="recent">최신 순</option>
              <option value="favorite">좋아요 순</option>
            </select>
          </div>
        </>
      ) : (
        <>
          <div className="mobile-title-box">
            <h3 className="product-title">{title}</h3>
            <button className="btn btn-small h42">상품 등록하기</button>
          </div>
          <div className="search-box">
            <input
              id="search-input-mobile"
              className="search-input"
              type="text"
              placeholder="검색할 상품을 입력해주세요."
              onChange={(e) => onSearch(e.target.value)}
            />
            <select
              onChange={(e) => {
                onChange(e.target.value);
              }}
              className="select-small"
              name=""
              id="product-order"
            >
              <option value="recent">최신 순</option>
              <option value="favorite">좋아요 순</option>
            </select>
          </div>
        </>
      )}
    </>
  );
};

export default SearchBar;
