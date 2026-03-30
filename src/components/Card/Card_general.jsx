import React from "react";
import "../../style/reset.css";
import "../../style/Card_general.css";

const Card_general = ({
  image,
  title = "상품이름",
  price = 0,
  favoriteCount = 0,
}) => {
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(price);

  return (
    <article className="card-general">
      <img className="card-general-image" src={image} alt={title}></img>
      <div className="card-general-content">
        <p className="card-general-title">{title}</p>
        <p className="card-general-price">{formattedPrice}원</p>
        <div className="card-general-favorite">
          <span className="card-general-favorite-icon" aria-hidden="true">
            ♥
          </span>
          <span>{favoriteCount}</span>
        </div>
      </div>
    </article>
  );
};

export default Card_general;
