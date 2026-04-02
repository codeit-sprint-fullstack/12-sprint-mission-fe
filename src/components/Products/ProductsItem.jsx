import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import defaultImg from "../../assets/imgs/img_default.png";

const ProductsItem = ({ product }) => {
  const imgSrc = product.images.length !== 0 ? product.images[0] : defaultImg;

  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };

  return (
    <>
      <img src={imgSrc} alt={product.name} onError={handleImgError} />
      <div className="product-i-desc">
        <p className="product-i-title">{product.name}</p>
        <p className="product-i-price">
          {product.price.toLocaleString("ko-KR")}원
        </p>
        <div className="product-i-fcount">
          <span className="heart">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className="count">{product.favoriteCount}</span>
        </div>
      </div>
    </>
  );
};

export default ProductsItem;
