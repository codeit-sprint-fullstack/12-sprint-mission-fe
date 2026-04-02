import React, { useState } from "react";
import heart from "./ic-heart.svg";
import defaultImg from "./default-img.svg";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ type, item }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const thumbnailUrl = item.images[0] || defaultImg;

  return (
    <li className={styles.card}>
      {!imgLoaded && (
        <div
          className={`${styles.thumbnail} ${styles[type]} ${styles.imgSkeleton}`}
        />
      )}
      <img
        className={`${styles.thumbnail} ${styles[type]}`}
        src={thumbnailUrl}
        alt={item.name}
        onLoad={() => setImgLoaded(true)}
        onError={(e) => {
          e.target.src = defaultImg;
          setImgLoaded(true);
        }}
        style={{ display: imgLoaded ? "block" : "none" }}
      />

      <div className={styles.content}>
        <h3 className={`text-md-medium`}>{item.name}</h3>

        <strong className={`text-lg-bold`}>
          {item.price.toLocaleString("ko-KR")}원
        </strong>

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
