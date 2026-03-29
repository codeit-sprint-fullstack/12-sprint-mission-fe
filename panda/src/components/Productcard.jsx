import React from "react";

const Productcard = ({ name, price, imageUrl, favoriteCount }) => {
  return (
    <li className="product-card">
      <img src={imageUrl} alt={name} />
      <div className="product-info">
        <p className="product-title">{name}</p>
        <p className="product-price">{price.toLocaleString()}원</p>
        <p className="product-favorite">
          <span>♡</span> {favoriteCount}
        </p>
      </div>
    </li>
  );
};

export default Productcard;
