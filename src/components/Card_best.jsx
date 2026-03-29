import React from "react";
import "../style/Card_best.css";

const Card_best = ({
  image,
  title = "상품 이름",
  price = 0,
  favoriteCount = 0,
}) => {
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(price);

  return (
    <article className="best-card">
      <img className="best-card-image" src={image} alt={title} />
      <div className="best-card-content">
        <p className="best-card-title">{title}</p>
        <p className="best-card-price">{formattedPrice}원</p>
        <div className="best-card-favorite">
          <span className="best-card-favorite-icon" aria-hidden="true">
            ♥
          </span>
          <span>{favoriteCount}</span>
        </div>
      </div>
    </article>
  );
};

export default Card_best;
