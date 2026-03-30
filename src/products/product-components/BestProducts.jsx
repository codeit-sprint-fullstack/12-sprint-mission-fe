import React, { useEffect, useState } from "react";
import BestProductCard from "./BestProductCard";

const BestProducts = ({ bCol }) => {
  const [bestProducts, setBestProducts] = useState([]);

  //DB에서 베스트 상품 목록 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:4000/products?_sort=-favoriteCount`,
      );
      const data = await response.json();
      setBestProducts(data);
      console.log("best products 목록 가져옴");
    };

    fetchData();
  }, []);

  return (
    <div className="best-products-container">
      <h2 className="title">베스트 상품</h2>
      <div className="best-products">
        {bestProducts.map((product, idx) => {
          if (idx < bCol) {
            return <BestProductCard product={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default BestProducts;
