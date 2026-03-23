import React from "react";
import heart from "./ic_heart.svg";
import defaultImg from "./default-img.svg";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ item }) => {
  const thumbnailUrl = item.images[0] || defaultImg;

  return (
    <li className={styles.card}>
      <img className={styles.thumbnail} src={thumbnailUrl} alt={item.name} />

      <div className={styles.content}>
        <h3 className={`text-md-medium`}>{item.name}</h3>

        <strong className={`text-lg-bold`}>{item.price}원</strong>

        <div className={styles.meta}>
          <img className={styles.heartIcon} src={heart} alt="좋아요" />
          <span className={`text-xs-medium ${styles.favoriteCount}`}>
            {item.favoriteCount}
          </span>
        </div>
      </div>
    </li>
  );
};
