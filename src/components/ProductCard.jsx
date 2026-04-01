import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.images?.[0]} alt={product.name} />
      <div className="info">
        <p className="title">{product.name}</p>
        <p className="price">{product.price.toLocaleString()}원</p>
        <p className="favorite">♡ {product.favoriteCount}</p>
      </div>
    </div>
  );
};

export default ProductCard;
