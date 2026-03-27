import React from "react";
import SearchForm from "./SearchForm";
import Sorting from "./Sorting";

const ProductList = ({ products, setProducts }) => {
  console.log(products);

  return (
    <section>
      <header>
        <h2>판매 중인 상품</h2>

        <div>
          <input type="text" placeholder="검색할 상품을 입력해주세요" />
        </div>
      </header>

      <ul id="products">
        {products.length ? (
          products.map((product) => {
            return (
              <li key={product.id} className="product__item">
                <div className="item--thumb">
                  {product.images.length > 0 ? (
                    <img src={product.images[0]} />
                  ) : (
                    <span>No Image</span>
                  )}
                </div>
                <div className="item--info">
                  <p className="item--name">{product.name}</p>
                  <p className="item--price">
                    {product.price.toLocaleString()}원
                  </p>
                  <button className="item--favorites">
                    {product.favoriteCount}
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <li>등록된 상품이 없습니다.</li>
        )}
      </ul>
    </section>
  );
};

export default ProductList;
