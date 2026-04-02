import React from "react";
import ProductsItem from "./ProductsItem";

const ProductsList = ({ products }) => {
  return (
    <>
      {products.length !== 0 ? (
        <ul className="product-list">
          {products.map((p) => (
            <li key={p.id} className="product-items">
              <ProductsItem product={p} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="product-list none">
          판매 중인 상품이 존재하지 않습니다.
        </div>
      )}
    </>
  );
};

export default ProductsList;
