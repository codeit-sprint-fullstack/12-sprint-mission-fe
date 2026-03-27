import React, { useEffect, useState } from "react";
import heart from "../assets/img/heart.png";
import "./BestProduct.css";

const BestProduct = ({ page, pageSize, orderBy }) => {
  const [product, setProduct] = useState([]);
  async function getProduct() {
    try {
      const res = await fetch(
        `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`,
      );
      const result = await res.json();
      setProduct(result.list);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <p className="sub-title">베스트 상품</p>
      <div className="best-container">
        {product.map((t) => {
          return (
            <div className="best-product-container" key={t.id}>
              <img
                className="best-product-img"
                src={t.images}
                alt="그냥 이미지"
              />
              <div className="best-product-detail">
                <p className="best-detail-title">{t.name}</p>
                <p className="best-detail-price">{t.price}</p>
                <div className="best-love-it">
                  <img src={heart} alt="좋아요" />
                  <p>{t.favoriteCount}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BestProduct;
