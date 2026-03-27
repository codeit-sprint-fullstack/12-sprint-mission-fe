import React, { useEffect } from "react";
import heart from "../assets/img/heart.png";
import "./BestProduct.css";

const BestProduct = ({ product, setProduct, page, pageSize, orderBy }) => {
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
    <div className="container">
      {product.map((t) => {
        return (
          <div className="product-container" key={t.id}>
            <img className="product-img" src={t.images} alt="그냥 이미지" />
            <div className="product-detail">
              <p className="detail-title">{t.name}</p>
              <p className="detail-price">{t.price}</p>
              <div className="love-it">
                <img src={heart} alt="좋아요" />
                <p>{t.favoriteCount}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BestProduct;
