import React from "react";
import SearchForm from "./SearchForm";
import Sorting from "./Sorting";

const ProductList = ({ lists, type }) => {
  return (
    <ul className={`product__list ${type}`}>
      {lists.length ? (
        lists.map((item) => (
          <li key={item.id} className="product__item">
            <div className="item--thumb">
              {item.images.length > 0 && !item.images[0].includes("...") ? (
                <img src={item.images[0]} />
              ) : (
                <span>No Image</span>
              )}
            </div>
            <div className="item--info">
              <p className="item--name">{item.name}</p>
              <p className="item--price">{item.price.toLocaleString()}원</p>
              <button className="item--favorites">{item.favoriteCount}</button>
            </div>
          </li>
        ))
      ) : (
        <li className="empty-list">등록된 상품이 없습니다.</li>
      )}
    </ul>
  );
};

export default ProductList;
